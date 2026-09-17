import { defineConfig } from 'vitest/config';

// Vite decides `import.meta.env.DEV` from NODE_ENV when NODE_ENV is already set,
// before the mode below is ever considered. A machine with NODE_ENV=production
// exported globally therefore compiled the whole suite as a production build,
// and every module gated on `import.meta.env.DEV` — perfMonitor above all —
// turned itself into a no-op, failing 5 tests for a reason nothing in the repo
// explained. Tests are hermetic: they run in test mode whatever the shell says.
// src/systems/__tests__/perfMonitor.test.js asserts this is still true.
process.env.NODE_ENV = 'test';

export default defineConfig({
  mode: 'test',
  test: {
    environment: 'node',
    include: ['src/**/*.test.js'],
  },
});
