# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 180`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
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
	body: Array [
		ExpressionStatement {
			loc: Object {
				filename: "input.js"
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
			expression: ArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
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
				body: BlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 17
							index: 17
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
				}
				head: FunctionHead {
					async: false
					hasHoistedVars: false
					params: Array []
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 14
							index: 14
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					rest: BindingArrayPattern {
						rest: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 10
								index: 10
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
						elements: Array [
							BindingIdentifier {
								name: "a"
								loc: Object {
									filename: "input.js"
									identifierName: "a"
									end: Object {
										column: 6
										index: 6
										line: 1
									}
									start: Object {
										column: 5
										index: 5
										line: 1
									}
								}
							}
							BindingIdentifier {
								name: "b"
								loc: Object {
									filename: "input.js"
									identifierName: "b"
									end: Object {
										column: 9
										index: 9
										line: 1
									}
									start: Object {
										column: 8
										index: 8
										line: 1
									}
								}
							}
						]
					}
				}
			}
		}
	]
}
```
