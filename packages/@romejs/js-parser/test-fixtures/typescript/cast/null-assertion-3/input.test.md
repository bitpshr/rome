# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > null-assertion-3`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 18
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		VariableDeclarationStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 17
					index: 17
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: VariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 17
						index: 17
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					VariableDeclarator {
						id: BindingIdentifier {
							name: "x"
							loc: Object {
								filename: "input.ts"
								identifierName: "x"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 16
								index: 16
								line: 1
							}
							start: Object {
								column: 6
								index: 6
								line: 1
							}
						}
						init: TSNonNullExpression {
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
							expression: CallExpression {
								arguments: Array []
								loc: Object {
									filename: "input.ts"
									end: Object {
										column: 15
										index: 15
										line: 1
									}
									start: Object {
										column: 10
										index: 10
										line: 1
									}
								}
								callee: ReferenceIdentifier {
									name: "foo"
									loc: Object {
										filename: "input.ts"
										identifierName: "foo"
										end: Object {
											column: 13
											index: 13
											line: 1
										}
										start: Object {
											column: 10
											index: 10
											line: 1
										}
									}
								}
							}
						}
					}
				]
			}
		}
	]
}
```
