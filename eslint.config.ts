import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // Configuration
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      parser: tseslintParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  // Plugins / Rules
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@typescript-eslint": tsPlugin,
      react: pluginReact,
    },
    rules: {
      // Custom rules
      semi: ["error", "always"],
      quotes: ["error", "double"],

      // TypeScript rules
      ...tsPlugin.configs.recommended.rules, // Added TS rules

      // React rules
      ...pluginReact.configs.recommended.rules,

      // React Hooks rules (moved after React)
      ...pluginReactHooks.configs.recommended.rules,

      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  // General
  {
    settings: { react: { version: "19" } },
  },
  {
    ignores: ["dist", "bun.lock"],
  },
];
