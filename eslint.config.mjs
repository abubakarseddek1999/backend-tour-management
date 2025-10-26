// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
//   tseslint.configs.recommended,
tseslint.configs.strict,
tseslint.configs.stylistic,
{
    rules: {
        'no-console': 'warn',
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/no-inferrable-types': 'off',
        // '@typescript-eslint/no-non-null-assertion': 'off',
        // '@typescript-eslint/ban-ts-comment': 'off',
        // '@typescript-eslint/no-empty-function': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-unused-vars': 'off',
    },
}
);