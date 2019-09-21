module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true
    },
    extends: "eslint:recommended",
    globals: {},
    parserOptions: {
      ecmaVersion: 2018
    },
    rules: {
      indent: [ "error", "tab" ],
      "linebreak-style": [0, "error", "windows" ],
      quotes: [ "error", "double" ],
      semi: [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      "object-curly-spacing": [ "error", "always" ],
      "space-in-parens": [ "error", "always" ]
    }
};