import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    open: true
  }
});
