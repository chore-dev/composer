import esLint from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tsESLint from 'typescript-eslint';

const config = tsESLint.config(
  esLint.configs.recommended,
  ...tsESLint.configs.recommended,
  prettierRecommended,
  {
    ignores: [
      // Build output directory
      'coverage/',
      'build/',
      'bundle/',
      'dist/',
      'out/',
      // Cache files
      '.eslintcache',
      // Config files
      'eslint.config.js',
      '.prettier.config.js'
    ]
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
        ...globals.serviceworker,
        ...globals.worker
      }
    },
    rules: {
      'import/no-duplicates': 'off',
      'no-console': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
);

export default config;
