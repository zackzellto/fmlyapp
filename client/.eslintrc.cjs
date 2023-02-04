module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./frontend/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-var-requires": "Off",
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    indent: "error",
    "prettier/prettier": ["error"],
  },
};
