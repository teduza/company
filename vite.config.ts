import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          ru: path.resolve(__dirname, 'ru/index.html'),
          hy: path.resolve(__dirname, 'hy/index.html'),
          ecosystem: path.resolve(__dirname, 'ecosystem/index.html'),
          ru_ecosystem: path.resolve(__dirname, 'ru/ecosystem/index.html'),
          hy_ecosystem: path.resolve(__dirname, 'hy/ecosystem/index.html'),
          patents: path.resolve(__dirname, 'patents/index.html'),
          ru_patents: path.resolve(__dirname, 'ru/patents/index.html'),
          hy_patents: path.resolve(__dirname, 'hy/patents/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
