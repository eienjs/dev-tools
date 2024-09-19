// @ts-check
import nodecfdiConfig from '@nodecfdi/eslint-config';

const { defineConfig } = nodecfdiConfig(import.meta.dirname);

export default defineConfig({
  files: ['src/providers/*.ts'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
});
