/**
 * Light-budget regression guard (Task 11.4 — draw-call / light / particle audit).
 *
 * HARD BUDGET (CLAUDE.md → Critical Rules → Performance Budget):
 *   8 real-time lights max = 1 hemi + 2 directional + 1 player + 1 orb + 3 crystal.
 *
 * Three.js bakes the *number of lights present in the scene* into every lit
 * material's shader program, regardless of each light's intensity. A light left
 * at intensity 0 still occupies a uniform slot and a shader-loop iteration, so a
 * 9th scene light is a real budget breach even before it switches on.
 *
 * This guard counts the actual `Light` instances added to the scene by
 * `lighting.js` (the single owner of the persistent light rig) and asserts the
 * total never exceeds 8. It also pins MAX_CRYSTAL_LIGHTS at 3 and verifies the
 * obelisk builder adds NO dedicated light (regression: it once created a 9th
 * PointLight; the rise glow now reuses the pooled orbLight — see
 * quest/questVisuals.js).
 *
 * Headless: Three.js light/geometry/material construction needs no WebGL, so we
 * only mock `renderer.js` (which touches WebGLRenderer + window at module scope)
 * with a scene that records every `.add()`.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Recording scene mock — captures every object added to the scene ──────────
const _added = [];
vi.mock('../renderer.js', () => ({
  renderer: { info: { render: {}, memory: {}, programs: [] } },
  camera: { position: { x: 0, y: 1, z: 0 } },
  clock: {},
  scene: {
    add: (obj) => { _added.push(obj); },
    remove: vi.fn(),
    traverse: vi.fn(),
  },
}));

// Hard ceiling from CLAUDE.md.
const MAX_REALTIME_LIGHTS = 8;

/** Count Three.js Light instances among recorded scene additions (recursively). */
function countLights(objects) {
  let n = 0;
  for (const o of objects) {
    if (o && o.isLight) n++;
    if (o && Array.isArray(o.children) && o.children.length) {
      n += countLights(o.children);
    }
  }
  return n;
}

beforeEach(() => {
  _added.length = 0;
});

describe('light budget — persistent rig (lighting.js)', () => {
  it('adds no more than 8 real-time lights, and exactly the documented rig', async () => {
    // Module-scope side effects (hemi, moon, moon2, playerLight, orbLight) run
    // on import. initCrystalLights() then adds the 3 dynamic crystal slots.
    const lighting = await import('../lighting.js');
    lighting.initCrystalLights();

    const total = countLights(_added);

    // The exact documented rig: 1 hemi + 2 dir + 1 player + 1 orb + 3 crystal.
    expect(total).toBe(MAX_REALTIME_LIGHTS);
    expect(total).toBeLessThanOrEqual(MAX_REALTIME_LIGHTS);

    // Crystal pool sizing must stay at 3 (changing it shifts the whole budget).
    const { MAX_CRYSTAL_LIGHTS } = await import('../../constants.js');
    expect(MAX_CRYSTAL_LIGHTS).toBe(3);
    expect(lighting.dynamicLights.length).toBe(MAX_CRYSTAL_LIGHTS);
  });
});

describe('light budget — obelisk adds no dedicated light', () => {
  it('makeObelisk() introduces zero new scene lights (reuses pooled orbLight)', async () => {
    // Build the persistent rig first so the obelisk delta is isolated.
    const lighting = await import('../lighting.js');
    lighting.initCrystalLights();
    const before = countLights(_added);

    const { makeObelisk } = await import('../../entities/world/obelisk.js');
    makeObelisk();

    const after = countLights(_added);
    // REGRESSION: the obelisk once added its own PointLight (9th light). The
    // dramatic rise glow now drives the existing orbLight in questVisuals.js.
    expect(after).toBe(before);
    expect(after).toBeLessThanOrEqual(MAX_REALTIME_LIGHTS);
  });
});
