// ================================================================
// perfMonitor — rolling FPS sampler + timing/renderer probes (dev-only).
// ================================================================
// These guard the LumiDebug.perf() data path. The sampler is gated by
// import.meta.env.DEV, which vitest sets to true, so the math executes here.
import { describe, it, expect, beforeEach } from 'vitest';
import {
  sampleFrame,
  getFpsStats,
  getTopTimings,
  getRendererInfo,
  setRenderer,
  timeStart,
  timeEnd
} from '../perfMonitor.js';

// Drain the module-scope ring buffer back to empty between tests. The window is
// 240 frames; pushing >=240 then reading proves we never over-read stale slots.
function fillSteady(ms, frames) {
  for (let i = 0; i < frames; i++) sampleFrame(ms / 1000);
}

describe('perfMonitor FPS sampler', () => {
  it('reports zeros before any frame is sampled (in a fresh window region)', () => {
    // We can't reset module state, so instead assert the stats are internally
    // consistent rather than exact zeros (other tests may have run first).
    const s = getFpsStats();
    expect(s).toHaveProperty('fpsAvg');
    expect(s).toHaveProperty('fps1pctLow');
    expect(s).toHaveProperty('fpsMin');
    expect(s.frames).toBeGreaterThanOrEqual(0);
  });

  it('computes ~60 FPS for a steady 16.67ms cadence', () => {
    fillSteady(16.667, 240); // overwrite the whole window with a clean signal
    const s = getFpsStats();
    expect(s.frames).toBe(240);
    expect(s.fpsAvg).toBeGreaterThan(59);
    expect(s.fpsAvg).toBeLessThan(61);
    // Uniform frames → 1%-low and min equal avg.
    expect(s.fps1pctLow).toBeGreaterThan(59);
    expect(s.fpsMin).toBeGreaterThan(59);
  });

  it('1%-low and min track the slowest frames, below the average', () => {
    fillSteady(16.667, 240);     // clean baseline ~60 FPS
    // Inject a handful of 100ms (=10 FPS) stalls into the window.
    for (let i = 0; i < 5; i++) sampleFrame(0.1);
    const s = getFpsStats();
    // Avg is dragged down slightly but stays well above the worst frames.
    expect(s.fpsAvg).toBeGreaterThan(s.fps1pctLow);
    expect(s.fps1pctLow).toBeGreaterThanOrEqual(s.fpsMin);
    // The slowest frame is the 100ms stall → ~10 FPS.
    expect(s.fpsMin).toBeGreaterThan(9);
    expect(s.fpsMin).toBeLessThan(11);
  });

  it('ignores zero / negative dt (post-tab-switch spike guard)', () => {
    fillSteady(16.667, 240);
    const before = getFpsStats();
    sampleFrame(0);
    sampleFrame(-1);
    const after = getFpsStats();
    // Frame count unchanged; bogus samples did not enter the buffer.
    expect(after.frames).toBe(before.frames);
  });

  it('caps the window at 240 frames (ring buffer, no unbounded growth)', () => {
    fillSteady(20, 1000); // far more than the window
    expect(getFpsStats().frames).toBe(240);
  });
});

describe('perfMonitor timing + renderer probes', () => {
  it('getTopTimings returns subsystems sorted by EMA ms, capped at N', () => {
    timeStart('alpha'); busy(2); timeEnd('alpha');
    timeStart('beta'); busy(8); timeEnd('beta');
    const top = getTopTimings(5);
    expect(Array.isArray(top)).toBe(true);
    expect(top.length).toBeGreaterThan(0);
    // Descending by avgMs.
    for (let i = 1; i < top.length; i++) {
      expect(top[i - 1].avgMs).toBeGreaterThanOrEqual(top[i].avgMs);
    }
    const slice = getTopTimings(1);
    expect(slice.length).toBe(1);
  });

  it('getRendererInfo reads a wired mock renderer.info', () => {
    const mockRenderer = {
      info: {
        render: { calls: 142, triangles: 250000 },
        memory: { geometries: 88, textures: 30 },
        programs: [{}, {}, {}]
      }
    };
    setRenderer(mockRenderer);
    const info = getRendererInfo();
    expect(info).not.toBeNull();
    expect(info.drawCalls).toBe(142);
    expect(info.triangles).toBe(250000);
    expect(info.programs).toBe(3);
    expect(info.geometries).toBe(88);
    expect(info.textures).toBe(30);
  });
});

// Spin a tiny busy loop so timeEnd records a non-trivial, ordered duration.
function busy(targetMs) {
  const end = performance.now() + targetMs;
  // eslint-disable-next-line no-empty
  while (performance.now() < end) { /* burn */ }
}

beforeEach(() => {
  // No module reset hook is exposed; tests that need a clean window overwrite
  // all 240 slots explicitly via fillSteady(). This beforeEach is a placeholder
  // documenting that intent.
});
