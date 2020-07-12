import {Path, TransformExitResult} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";

export default {
	name: "astAddSelfClosing",
	enter(path: Path): TransformExitResult {
		const {node} = path;

		if (
			(node.type === "JSXElement" || node.type === "HTMLElement") &&
			!node.selfClosing &&
			node.children.length === 0
		) {
			path.context.addFixableDiagnostic(
				{
					old: node,
					fixed: {...node, selfClosing: true},
				},
				descriptions.LINT.AST_ADD_SELF_CLOSING,
			);
		}

		return node;
	},
};
