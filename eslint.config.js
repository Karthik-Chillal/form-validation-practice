// ESLint configuration for the project
// Uses flat config format with recommended rules for JS

import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Configuration for JS files: apply recommended rules and browser globals
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
]);
