# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > import-invalid-keyword-typeof`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 30
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
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unexpected keyword typeof'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 15
          index: 15
          line: 1
        }
        start: Object {
          column: 9
          index: 9
          line: 1
        }
      }
    }
  ]
  body: Array [
    ImportDeclaration {
      defaultSpecifier: undefined
      importKind: undefined
      namespaceSpecifier: undefined
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 29
          index: 29
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      source: StringLiteral {
        value: 'foo'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 28
            index: 28
            line: 1
          }
          start: Object {
            column: 23
            index: 23
            line: 1
          }
        }
      }
      namedSpecifiers: Array [
        ImportSpecifier {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 15
              index: 15
              line: 1
            }
            start: Object {
              column: 9
              index: 9
              line: 1
            }
          }
          imported: Identifier {
            name: 'typeof'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 15
                index: 15
                line: 1
              }
              start: Object {
                column: 9
                index: 9
                line: 1
              }
            }
          }
          local: ImportSpecifierLocal {
            name: BindingIdentifier {
              name: 'typeof'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 15
                  index: 15
                  line: 1
                }
                start: Object {
                  column: 9
                  index: 9
                  line: 1
                }
              }
            }
            importKind: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 15
                index: 15
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
  ]
}
```