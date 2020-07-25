import {Path, TransformExitResult} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";

const voidElements = new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr",
]);

export default {
	name: "html/preferSelfClosing",
	enter(path: Path): TransformExitResult {
		const {node} = path;

		if (
			node.type === "HTMLElement" &&
			voidElements.has(node.name.name) &&
			!node.selfClosing &&
			node.children.length === 0
		) {
			return path.context.addFixableDiagnostic(
				{
					old: node,
					fixed: {
						...node,
						selfClosing: true,
					},
				},
				descriptions.LINT.HTML_PREFER_SELF_CLOSING,
			);
		}

		return node;
	},
};
