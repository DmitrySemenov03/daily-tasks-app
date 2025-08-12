import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    extends: [
      js.configs.recommended, // базовые правила JS
      pluginReact.configs.flat.recommended, // правила для React
      configPrettier, // отключает правила, конфликтующие с Prettier
    ],
    rules: {
      'prettier/prettier': 'error', // ошибки Prettier в консоль
    },
  },
]);
