# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > invalid-export-named-default`

```javascript
Program {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 17
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected keyword default"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "module"
				end: Object {
					column: 15
					index: 15
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
	body: Array [
		ExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 16
					index: 16
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			specifiers: Array [
				ExportLocalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 15
							index: 15
							line: 1
						}
						start: Object {
							column: 8
							index: 8
							line: 1
						}
					}
					exported: Identifier {
						name: "default"
						loc: Object {
							filename: "input.js"
							identifierName: "default"
							end: Object {
								column: 15
								index: 15
								line: 1
							}
							start: Object {
								column: 8
								index: 8
								line: 1
							}
						}
					}
					local: ReferenceIdentifier {
						name: "default"
						loc: Object {
							filename: "input.js"
							identifierName: "default"
							end: Object {
								column: 15
								index: 15
								line: 1
							}
							start: Object {
								column: 8
								index: 8
								line: 1
							}
						}
					}
				}
			]
		}
	]
}
```
