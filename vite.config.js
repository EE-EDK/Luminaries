import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    sourcemap: false
  },
  server: {
    open: true
  }
});
