import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2020',
    rolldownOptions: {
      output: {
        codeSplitting: false
      }
    }
  },
  esbuild: {
    drop: ['console']
  },
  server: {
    open: true
  }
});
