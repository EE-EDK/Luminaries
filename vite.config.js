import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: false,
    sourcemap: false
  },
  server: {
    open: true
  }
});
