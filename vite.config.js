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
        // Split three.js into its own vendor chunk to reduce TTI on GH Pages.
        // Uses rolldown's native codeSplitting.groups API (manualChunks is
        // deprecated in rolldown and ignored when codeSplitting is also set).
        codeSplitting: {
          groups: [
            {
              name: 'vendor-three',
              test: /[\\/]node_modules[\\/]three[\\/]/,
            },
          ],
        },
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
