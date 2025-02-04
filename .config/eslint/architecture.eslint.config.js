/** @fileoverview enforce architectural boundaries */
import boundaries from "eslint-plugin-boundaries";

/** Settings and Rules for eslint-plugin-boundaries to enforce architectural data-flow rules */
export const ARCHITECTURAL_BOUNDARIES_SETUP = {
  SETTINGS: {
    "boundaries/dependency-nodes": ["import", "dynamic-import"],
    "boundaries/include": ["src/**/*.{js,jsx,css,sass,svg}"],
    "boundaries/elements": [
      {
        mode: "full",
        type: "app",
        pattern: ["src/app/**/*", "src/main.jsx", "src/app/App.jsx"],
      },
      {
        type: "feature",
        // capture the name of each feature folder
        capture: ["featureName"],
        pattern: ["src/features/*/**/*"],
      },
      {
        type: "shared",
        pattern: "src/shared/**/*",
      },
    ],
  },
  PLUGINS: {
    boundaries,
  },
  RULES: {
    ...boundaries.configs.strict.rules,
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["shared"],
            allow: ["shared"],
          },
          {
            from: ["feature"],
            allow: [
              "shared",
              // use the captured featureName to prevent cross-feature dependencies (imports)
              ["feature", { featureName: "${from.featureName}" }],
            ],
          },
          {
            from: ["app"],
            allow: ["shared", "feature", "app"],
          },
        ],
      },
    ],
  },
};
