/** @fileoverview react eslint setup */
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export const REACT_SETUP = {
  SETTINGS: {
    react: { version: "detect" },
  },
  PLUGINS: {
    react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  RULES: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
    ...reactHooks.configs.recommended.rules,
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
  },
};
