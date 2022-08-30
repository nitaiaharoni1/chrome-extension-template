import { PluginOption } from 'vite';

export const customDynamicImport = (): PluginOption => {
  return {
    name: 'custom-dynamic-import',
    renderDynamicImport() {
      return {
        left: `
        {
          const dynamicImport = (path) => import(path);
          dynamicImport(
          `,
        right: ')}',
      };
    },
  };
};
