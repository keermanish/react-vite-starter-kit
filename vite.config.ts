import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  }
});
