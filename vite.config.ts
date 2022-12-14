/* eslint-disable */
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path, {resolve} from 'path';
import {makeManifest} from './utils/plugins/make-manifest';
import {customDynamicImport} from './utils/plugins/custom-dynamic-import';

const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');

const isDev = process.env.__DEV__ === 'true';

export default defineConfig({
    plugins: [react(), makeManifest(), customDynamicImport()],
    publicDir: resolve(__dirname, 'public'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        sourcemap: isDev,
        rollupOptions: {
            input: {
                devtools: resolve(pagesDir, 'devtools', 'index.html'),
                panel: resolve(pagesDir, 'panel', 'index.html'),
                content: resolve(pagesDir, 'content', 'index.ts'),
                background: resolve(pagesDir, 'background', 'index.ts'),
                contentStyle: resolve(pagesDir, 'content', 'style.scss'),
                popup: resolve(pagesDir, 'popup', 'index.html'),
                // newtab: resolve(pagesDir, "newtab", "index.html"),
                options: resolve(pagesDir, 'options', 'index.html'),
            },
            output: {
                entryFileNames: 'src/pages/[name]/index.js',
                chunkFileNames: isDev ? 'assets/js/[name].js' : 'assets/js/[name].[hash].js',
                assetFileNames: (assetInfo) => {
                    const {dir, name: _name} = path.parse(assetInfo.name);
                    const assetFolder = getLastElement(dir.split('/'));
                    const name = assetFolder + firstUpperCase(_name);
                    return `assets/[ext]/${name}.chunk.[ext]`;
                },
            },
        },
    },
});

function getLastElement<T>(array: ArrayLike<T>): T {
    const {length} = array;
    const lastIndex = length - 1;
    return array[lastIndex];
}

function firstUpperCase(str: string) {
    const firstAlphabet = new RegExp(/( |^)[a-z]/, 'g');
    return str.toLowerCase().replace(firstAlphabet, (L) => {
        return L.toUpperCase();
    });
}
