import child = require("child_process");

import {markup} from "@romefrontend/cli-layout";
import {Reporter} from "@romefrontend/cli-reporter";
import {readFileText} from "@romefrontend/fs";
import {AbsoluteFilePath, createAbsoluteFilePath} from "@romefrontend/path";

import {parseCommit} from ".";

import https = require("https");
import http = require("http");

const ROOT = (() => {
	let pickNext = false;

	for (const path of createAbsoluteFilePath(__dirname).getChain()) {
		if (pickNext) {
			return path;
		}

		if (path.getBasename() === "scripts") {
			pickNext = true;
		}
	}

	throw new Error("Could not find the root");
})();

const PACKAGES = ROOT.append("packages");
const REPORTER = Reporter.fromProcess();
const PROPERTY_DELIM = "<--ROME-PROPERTY-->";
const LINE_DELIM = "<--ROME-LINE-->";
const GIT_PLACEHOLDERS = {
	authorEmail: "%aE",
	authorName: "%aN",
	body: "%b",
	commit: "%H",
	date: "%ad",
	rawBody: "%B",
	refNames: "%d",
	subject: "%s",
};

interface Commit {
	authorEmail: string;
	authorName: string;
	body: string;
	commit: string;
	date: string;
	rawBody: string;
	refNames?: string;
	subject: string;
	meta?: {
		breaking: boolean;
		commitType: string;
		custom: boolean;
		scope: string;
	};
}

enum ReleaseType {
	major = "major",
	minor = "minor",
	patch = "patch",
}

/**
 * Creates a new git tag based on a version string
 *
 * @param version - Version to name tag
 */
function createTag(version: string): void {
	child.spawnSync("git", ["commit", "-am", `Release v${version}`]);
	child.spawnSync("git", ["tag", `v${version}`]);
	child.spawnSync("git", ["push"]);
	child.spawnSync("git", ["push", "origin", `v${version}`]);
}

/**
 * Transform a list of commit objects into a map of version names to commits
 *
 * @param commits - Commit list to transoform
 * @returns - Map of version names to commits within a version
 */
// function createTagMap(commits: Array<Commit>): Record<string, Array<Commit>> {
// 	const versionMap: Record<string, Array<Commit>> = {};
// 	let currentTag: string;

// 	commits.forEach((commit) => {
// 		const tagMatch =
// 			commit.refNames && commit.refNames.match(/tag: v\d+\.\d+\.\d+/);
// 		const tagName = tagMatch && tagMatch[0].replace(/^tag: /, "");
// 		currentTag = tagName || currentTag;
// 		if (!currentTag) {
// 			return;
// 		}
// 		versionMap[currentTag] = [...(versionMap[currentTag] || []), commit];
// 	});

// 	return versionMap;
// }

/**
 * Get the current package version
 *
 * @returns - Promise resolving to the current version
 */
async function getCurrentVersion(): Promise<string> {
	return String(
		JSON.parse(await readFileText(ROOT.append("package.json"))).version,
	);
}

/**
 * Determine if the next release should be a major, minor, or patch release
 * based on the commits since the last release commit
 *
 * @returns - Type of release
 */
function getReleaseType(): ReleaseType {
	const version = child.spawnSync("git", ["describe", "--tags", "--abbrev=0"]).stdout.toString().trim();

	const newCommits = parseCommitLog(
		GIT_PLACEHOLDERS,
		{
			from: version,
			to: "HEAD",
		},
	);

	const breaking = newCommits.some((commit) => commit.meta?.breaking);
	if (breaking) {
		return ReleaseType.major;
	}

	const feat = newCommits.some((commit) => commit.meta?.commitType === "feat");
	if (feat) {
		return ReleaseType.minor;
	}

	return ReleaseType.patch;
}

/**
 * Check if the current branch is dirty
 *
 * @returns - True if the current branch is dirty
 */
function isDirty(): boolean {
	const diffStatus = child.spawnSync("git", ["diff", "--exit-code"]).status;
	return diffStatus === 1;
}

/**
 * Check if the current branch is the main branch
 *
 * @returns - True if the current branch is the main branch
 */
function isMainBranch(): boolean {
	const branchName = child.spawnSync(
		"git",
		["rev-parse", "--abbrev-ref", "HEAD"],
	).stdout.toString().trim();
	return branchName === "main";
}

/**
 * Check if a given version does not exist on NPM
 *
 * @param version - Version to check against the NPM registry
 * @returns - True if the version does not exist
 */
async function isNewVersion(version: string): Promise<boolean> {
	const res: http.IncomingMessage = await new Promise((resolve) => {
		https.get(
			`https://registry.npmjs.org/rome/${version}`,
			(res) => {
				resolve(res);
			},
		);
	});

	if (res.statusCode !== 404) {
		return false;
	}

	return true;
}

/**
 * Parse a raw git log into an array of commit objects
 *
 * @param config - Map of result key names to git pretty placeholders
 * @param opts - Specify a starting and an ending commit
 * @returns - List of commit objects
 */
function parseCommitLog(
	config: Record<string, string>,
	opts?: {
		from: string;
		to: string;
	},
): Array<Commit> {
	const keys = Object.keys(config);

	const cmd = keys.reduce(
		(full, key) => `${full}${full ? `"${PROPERTY_DELIM}"` : ""}${config[key]}`,
		"",
	);

	const log = child.spawnSync(
		"git",
		[
			"log",
			opts ? `${opts.from}..${opts.to}` : "",
			`--pretty="format":${cmd}"${LINE_DELIM}"`,
		],
	).stdout.toString();

	const commits = log.split(LINE_DELIM).map((rawCommit) => {
		const values = rawCommit.trim().split(PROPERTY_DELIM);
		return keys.reduce<Commit>(
			(commit, key, index) => {
				const newCommit = {
					...commit,
					[key]: values[index],
				};

				if (config[key] === "%B") {
					const ast = parseCommit({
						input: values[index],
						path: "commit",
					});
					newCommit.meta = {
						breaking: ast.breaking,
						commitType: ast.commitType,
						custom: ast.custom,
						scope: ast.scope,
					};
				}

				return newCommit;
			},
			({} as Commit),
		);
	});

	return commits;
}

/**
 * Raise an error using the reporter and exit the process
 *
 * @param message - Error message to report
 * @param keepAlive - Indicates that this error should not be fatal
 */
function raiseError(message: string, keepAlive = false): void {
	REPORTER.error(markup`Changelogs must be generated on the main branch.`);
	!keepAlive && process.exit(1);
}

/**
 * Update the package version based on a target release type
 *
 * @param releaseType - Target release type
 * @returns - New version
 */
function updateVersion(
	releaseType: ReleaseType | string,
	cwd: AbsoluteFilePath,
): string {
	const newVersion = child.spawnSync(
		"npm",
		["--no-git-tag-version", "version", releaseType],
		{
			cwd: cwd.join(),
		},
	).stdout.toString().trim();

	return newVersion;
}

export async function main() {
	// 0. Cache the current version for reverting
	const currentVersion = await getCurrentVersion();

	// 1. Ensure the branch is main
	if (!isMainBranch()) {
		raiseError("Change logs must be generated on the main branch.");
	}

	// 2. Ensure the branch is clean
	if (isDirty()) {
		raiseError("Uncommitted changes exist on the main branch.");
	}

	// 3. Update the root package version
	const targetReleaseType = getReleaseType();
	const newVersion = updateVersion(targetReleaseType, ROOT);

	// 4. Ensure the version is not yet taken
	if (!isNewVersion(newVersion)) {
		raiseError(
			`Version ${newVersion} already exists, reverting to ${currentVersion}.`,
			true,
		);
	}

	// 5. Update the rome package version
	updateVersion(newVersion, PACKAGES.append("rome"));

	// 6. Create a resulting tag
	createTag(newVersion);
}
