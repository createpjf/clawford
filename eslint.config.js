import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReact.configs.flat["jsx-runtime"].rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^[A-Z]" },
      ],
      "no-console": "warn",
    },
  },
  {
    ignores: ["dist/", "node_modules/"],
  },
);
