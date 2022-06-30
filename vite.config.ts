import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components')
      },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      {
        find: '@services',
        replacement: resolve(__dirname, './src/services')
      },
      { find: '@types', replacement: resolve(__dirname, './src/types') },
      { find: '@utils', replacement: resolve(__dirname, './src/utils') }
    ]
  }
});
