module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    indent: ["error", 2, {"SwitchCase": 1}],
    "@typescript-eslint/member-delimiter-style": "error",
    "no-mixed-spaces-and-tabs": ["error"],
    "no-tabs": ["error"],
    "arrow-parens": ["error"],
    "brace-style": ["error"],
    "object-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "no-trailing-spaces": ["error"],
    "comma-dangle": ["error"],
    "comma-spacing": ["error"],
    "no-console": ["warn", {"allow": ["warn", "error"]}],
    "no-duplicate-imports": "error",
    "jsx-quotes": "error"
  }
};
