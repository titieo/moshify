import { defineConfig } from 'vite';

import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
    server: {
        open: true,
    },
    publicDir: 'images',
    build: { terserOptions: { ecma: '5' } },
    plugins: [minifyHtml()],
});
