import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const globalConfig = {
  ignores: ["node_modules", "dist"],
};

const reactConfig = {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],

  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

const prettierConfig = {
  rules: {
    "prettier/prettier": "error",
  },
};

export default tseslint.config(
  globalConfig,
  reactConfig,
  eslintPluginPrettierRecommended,
  prettierConfig,
);
