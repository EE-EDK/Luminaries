import { defineConfig } from 'vitest/config';

// Vite decides `import.meta.env.DEV` from NODE_ENV when NODE_ENV is already set,
// before the mode below is ever considered. Any shell that inherits
// NODE_ENV=production therefore compiled the whole suite as a production build,
// and every module gated on `import.meta.env.DEV` — perfMonitor above all —
// turned itself into a no-op, failing 5 tests for a reason nothing in the repo
// explained. Measured 2026-09-17: the Claude desktop app's own process carries
// NODE_ENV=production and passes it to every shell it spawns, so tests run
// through it hit this while the same tests in a normal terminal did not — the
// variable is set nowhere on the workstation itself. Tests are hermetic: they
// run in test mode whatever the parent process says.
// src/systems/__tests__/perfMonitor.test.js asserts this is still true.
process.env.NODE_ENV = 'test';

export default defineConfig({
  mode: 'test',
  test: {
    environment: 'node',
    include: ['src/**/*.test.js'],
  },
});
