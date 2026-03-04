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
    minify: 'terser',
    terserOptions: {
      compress: {
        passes: 2,
        drop_console: true,
        toplevel: true
      },
      mangle: {
        toplevel: true
      }
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  server: {
    open: true
  }
});
