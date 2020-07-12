import {test} from "rome";
import {testLint} from "../../utils/testing";

test(
	"ast add self closing",
	async (t) => {
		await testLint(
			t,
			{
				invalid: ["<div></div>"],
				valid: ["<div />"],
			},
			{category: "lint/ast/addSelfClosing"},
		);
	},
);
