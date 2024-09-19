// @ts-check
import nodecfdiConfig from '@nodecfdi/eslint-config';

const { defineConfig } = nodecfdiConfig(import.meta.dirname);

export default defineConfig({
  files: ['src/providers/*.ts', 'src/plugins/japa/dev_tools_api_client.ts'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
});
