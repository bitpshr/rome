import child = require("child_process");
import {parseCommit} from '.'

const PROPERTY_DELIM = "<--ROME-PROPERTY-->"
const LINE_DELIM = "<--ROME-LINE-->"

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

const GIT_FORMATTERS = {
    authorEmail: "%aE",
    authorName: "%aN",
    body: "%b",
    commit: "%H",
    date: "%ad",
    rawBody: "%B",
    refNames: "%d",
    subject: "%s"
}

/**
 * Parses a repository's git log into an array of objects
 *
 * @param config - Map of result object keys to git pretty format placeholders
 * @returns List of commits
 */
function parseCommitLog(config: Record<string, string>, opts?: { from: string, to: string }): Commit[] {
    const keys = Object.keys(config);
    const cmd = keys.reduce((full, key) =>
        `${full}${full ? `"${PROPERTY_DELIM}"` : ''}${config[key]}`,
        ''
    )
    const log = child.execSync(`git log ${opts ? `${opts.from}..${opts.to}` : ""} --pretty="format":${cmd}"${LINE_DELIM}"`).toString();
    const commits = log.split(LINE_DELIM).map(rawCommit => {
        const values = rawCommit.trim().split(PROPERTY_DELIM)
        return keys.reduce<Commit>((commit, key, index) => {
            const newCommit = {
                ...commit,
                [key]: values[index]
            }

            if (config[key] === "%B") {
                const ast = parseCommit({
                    input: values[index],
                    path: 'commit',
                });
                newCommit.meta = {
                    breaking: ast.breaking,
                    commitType: ast.commitType,
                    custom: ast.custom,
                    scope: ast.scope
                }
            }

            return newCommit;
        }, {} as Commit)
    })
    return commits;
}

/**
 * Maps commits to an object keyed by associated git tags
 *
 * @param commits - List of commits
 * @returns - Map of git tags to commit lists
 */
function buildTagMap(commits: Commit[]): Record<string, Commit[]> {
    const versionMap: Record<string, Commit[]> = {};
    let currentTag: string;
    commits.forEach(commit => {
        const tagMatch = commit.refNames && commit.refNames.match(/tag: v\d+\.\d+\.\d+/)
        const tagName = tagMatch && tagMatch[0].replace(/^tag: /, '')
        currentTag = tagName || currentTag
        if (!currentTag) return;
        versionMap[currentTag] = [
            ...(versionMap[currentTag] || []),
            commit
        ];
    });
    return versionMap
}

function getNextVersion(): string {
    const version = child.execSync('git describe --tags --abbrev=0').toString().trim();
    const rawVersion = version.replace(/[^\d\.]/g, '').split('.');

    const newCommits = parseCommitLog(GIT_FORMATTERS, {
        from: version,
        to: 'HEAD'
    })
    const breaking = newCommits.some(commit => commit.meta?.breaking);
    if (breaking) {
        const major = parseInt(rawVersion[0]) + 1;
        return `${major}.0.0`
    }
    const feat = newCommits.some(commit => commit.meta?.commitType === "feat");
    if (feat) {
        const minor = parseInt(rawVersion[1]) + 1;
        return `${rawVersion[0]}.${minor}.0`
    }
    const patch = parseInt(rawVersion[1]) + 1;
    return `${rawVersion[0]}.${rawVersion[1]}.${patch}`
}

function updateVersion(version: string): void {
    const packageJson = require('../../package.json').default;
    packageJson.version = version;
    child.execSync('git add package.json');
    child.execSync(`git commit -m "chore: bump version to v${version}")`);
}

console.log(updateVersion(getNextVersion()))