import { type PluginFn } from '@japa/runner/types';

/**
 * Find if a given package can be imported.
 */
const canImport = async (pkg: string): Promise<boolean> => {
  try {
    await import(pkg);

    return true;
  } catch {
    return false;
  }
};

export const devToolsApiClient = (): PluginFn => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const pluginFn: PluginFn = async function () {
    /**
     * Extend "@japa/api-client" plugin
     */
    if (await canImport('@japa/api-client')) {
      const { extendApiClient } = await import('./api_client.js');
      extendApiClient();
    }
  };

  return pluginFn;
};
