import js from "@eslint/js";
import globals from "globals";

import { REACT_SETUP } from "./react.eslint.config.js";
import { ARCHITECTURAL_BOUNDARIES_SETUP } from "./architecture.eslint.config.js";

// eslint setup
export default [
  {
    ignores: [
      "dist/**/*",
      ".git/**/*",
      ".husky/**/*",
      "docs/**/*",
      "node_modules/**/*",
      "public/**/*",
    ],
  },
  {
    files: ["**/*.{js,jsx}", ".config/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
    settings: {
      ...REACT_SETUP.SETTINGS,
      ...ARCHITECTURAL_BOUNDARIES_SETUP.SETTINGS,
    },
    plugins: {
      ...REACT_SETUP.PLUGINS,
      ...ARCHITECTURAL_BOUNDARIES_SETUP.PLUGINS,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...REACT_SETUP.RULES,
      ...ARCHITECTURAL_BOUNDARIES_SETUP.RULES,
      // team rules
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];
