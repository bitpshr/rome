# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 342`

```javascript
Program {
	comments: Array []
	corrupt: false
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
			column: 31
			index: 31
			line: 1
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected {"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 22
					index: 22
					line: 1
				}
			}
		}
	]
	body: Array [
		ExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 31
					index: 31
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: AssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 31
						index: 31
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				left: AssignmentIdentifier {
					name: "x"
					loc: Object {
						filename: "input.js"
						identifierName: "x"
						end: Object {
							column: 1
							index: 1
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				right: ObjectExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 31
							index: 31
							line: 1
						}
						start: Object {
							column: 4
							index: 4
							line: 1
						}
					}
					properties: Array [
						ObjectMethod {
							kind: "set"
							key: StaticPropertyKey {
								value: Identifier {
									name: "method"
									loc: Object {
										filename: "input.js"
										identifierName: "method"
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
								}
								loc: Object {
									filename: "input.js"
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
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
							head: FunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 21
										index: 21
										line: 1
									}
									start: Object {
										column: 16
										index: 16
										line: 1
									}
								}
								params: Array [
									BindingIdentifier {
										name: "val"
										loc: Object {
											filename: "input.js"
											identifierName: "val"
											end: Object {
												column: 20
												index: 20
												line: 1
											}
											start: Object {
												column: 17
												index: 17
												line: 1
											}
										}
										meta: PatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 20
													index: 20
													line: 1
												}
												start: Object {
													column: 17
													index: 17
													line: 1
												}
											}
										}
									}
								]
							}
							body: BlockStatement {
								directives: Array []
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 31
										index: 31
										line: 1
									}
									start: Object {
										column: 22
										index: 22
										line: 1
									}
								}
								body: Array [
									ExpressionStatement {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 29
												index: 29
												line: 1
											}
											start: Object {
												column: 22
												index: 22
												line: 1
											}
										}
										expression: AssignmentExpression {
											operator: "="
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 29
													index: 29
													line: 1
												}
												start: Object {
													column: 22
													index: 22
													line: 1
												}
											}
											left: AssignmentIdentifier {
												name: "v"
												loc: Object {
													filename: "input.js"
													identifierName: "v"
													end: Object {
														column: 23
														index: 23
														line: 1
													}
													start: Object {
														column: 22
														index: 22
														line: 1
													}
												}
											}
											right: ReferenceIdentifier {
												name: "val"
												loc: Object {
													filename: "input.js"
													identifierName: "val"
													end: Object {
														column: 29
														index: 29
														line: 1
													}
													start: Object {
														column: 26
														index: 26
														line: 1
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
			}
		}
	]
}
```
