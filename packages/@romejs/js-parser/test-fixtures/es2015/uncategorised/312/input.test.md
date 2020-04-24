# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 312`

```javascript
Program {
  comments: Array []
  corrupt: true
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 10
      index: 10
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
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        advice: Array []
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unexpected token, expected ,'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
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
  ]
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 8
          index: 8
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: CallExpression {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 8
            index: 8
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        callee: ReferenceIdentifier {
          name: 'f'
          loc: Object {
            filename: 'input.js'
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
        arguments: Array [
          AssignmentExpression {
            operator: '='
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 8
                index: 8
                line: 1
              }
              start: Object {
                column: 2
                index: 2
                line: 1
              }
            }
            right: NumericLiteral {
              value: 0
              format: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 8
                  index: 8
                  line: 1
                }
                start: Object {
                  column: 7
                  index: 7
                  line: 1
                }
              }
            }
            left: AssignmentObjectPattern {
              rest: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 4
                  index: 4
                  line: 1
                }
                start: Object {
                  column: 2
                  index: 2
                  line: 1
                }
              }
              properties: Array [
                AssignmentObjectPatternProperty {
                  key: StaticPropertyKey {
                    value: Identifier {
                      name: 'x'
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 4
                          index: 4
                          line: 1
                        }
                        start: Object {
                          column: 3
                          index: 3
                          line: 1
                        }
                      }
                    }
                    variance: undefined
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 4
                        index: 4
                        line: 1
                      }
                      start: Object {
                        column: 3
                        index: 3
                        line: 1
                      }
                    }
                  }
                  value: AssignmentIdentifier {
                    name: 'x'
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 4
                        index: 4
                        line: 1
                      }
                      start: Object {
                        column: 3
                        index: 3
                        line: 1
                      }
                    }
                  }
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 4
                      index: 4
                      line: 1
                    }
                    start: Object {
                      column: 3
                      index: 3
                      line: 1
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
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
      expression: ReferenceIdentifier {
        name: 'INVALID_PLACEHOLDER'
        loc: Object {
          filename: 'input.js'
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
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 10
          index: 10
          line: 1
        }
        start: Object {
          column: 9
          index: 9
          line: 1
        }
      }
      expression: ReferenceIdentifier {
        name: 'INVALID_PLACEHOLDER'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 10
            index: 10
            line: 1
          }
          start: Object {
            column: 9
            index: 9
            line: 1
          }
        }
      }
    }
  ]
}
```