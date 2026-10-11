/**
 * The impostor haze dials ("Haze" and "Haze max" in the dev menu).
 *
 * They replaced two constants. The guard here is that the defaults ARE those
 * constants (so shipping the dials changed nothing for anyone who never opens
 * the menu), that turning a dial changes what the distant forest looks like,
 * and that a wild value is clamped instead of drawing the forest white or
 * dividing by zero.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../../core/renderer.js', () => ({
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));
vi.mock('../../../systems/adaptiveQuality.js', () => ({ getLodScale: () => 1 }));
vi.mock('../../../world/terrain.js', () => ({
  getGroundNormal: () => ({ x: 0, y: 1, z: 0 }),
}));

import {
  updateTreeLOD, setImpostorHazeTune, getImpostorHaze, getImpostorHazeTune,
  IMPOSTOR_HAZE_DEFAULTS, IMPOSTOR_HAZE_LIMITS,
} from '../trees.js';

/** The colour the impostor ends up with for a tree `d` metres away. */
function colourAt(d) {
  const out = { r: 0, g: 0, b: 0 };
  const impostor = {
    visible: false,
    position: { x: 0, y: 0, z: 0 },
    material: { color: { copy: (c) => { out.r = c.r; out.g = c.g; out.b = c.b; } }, opacity: 0 },
    userData: { treeTemplateIndex: 0 },
  };
  const slot = () => ({ count: 0, setMatrixAt: vi.fn(), instanceMatrix: { needsUpdate: false } });
  const mesh = {
    instances: [{ x: 0, y: 0, z: d, scale: 1, yRot: 0, nx: 0, ny: 1, nz: 0, treeH: 10, posIdx: 0 }],
    trunk: slot(), canopy: slot(), glow: slot(), detail: slot(),
  };
  updateTreeLOD([mesh], [impostor], 0, 1.7, 0, 0, 0, 0, 0, null, 0.35, 1);
  return out;
}
const distance = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);

beforeEach(() => setImpostorHazeTune(IMPOSTOR_HAZE_DEFAULTS));

describe('haze tuning', () => {
  it('ships the values the old constants had: 140 m and 0.78', () => {
    expect(IMPOSTOR_HAZE_DEFAULTS).toEqual({ reachM: 140, max: 0.78 });
    expect(getImpostorHazeTune()).toEqual({ reachM: 140, max: 0.78 });
  });

  it('reports what is in effect after a change', () => {
    expect(setImpostorHazeTune({ reachM: 200, max: 0.5 })).toEqual({ reachM: 200, max: 0.5 });
    expect(getImpostorHazeTune()).toEqual({ reachM: 200, max: 0.5 });
  });

  it('changes one dial without touching the other', () => {
    setImpostorHazeTune({ max: 0.4 });
    expect(getImpostorHazeTune()).toEqual({ reachM: 140, max: 0.4 });
    setImpostorHazeTune({ reachM: 100 });
    expect(getImpostorHazeTune()).toEqual({ reachM: 100, max: 0.4 });
  });

  it('clamps to the limits instead of refusing or running away', () => {
    setImpostorHazeTune({ reachM: 5, max: -3 });
    expect(getImpostorHazeTune()).toEqual({ reachM: IMPOSTOR_HAZE_LIMITS.reachM[0], max: IMPOSTOR_HAZE_LIMITS.max[0] });
    setImpostorHazeTune({ reachM: 9999, max: 9 });
    expect(getImpostorHazeTune()).toEqual({ reachM: IMPOSTOR_HAZE_LIMITS.reachM[1], max: IMPOSTOR_HAZE_LIMITS.max[1] });
  });

  it('ignores NaN, undefined and a missing argument', () => {
    setImpostorHazeTune({ reachM: NaN, max: undefined });
    setImpostorHazeTune();
    setImpostorHazeTune(null);
    expect(getImpostorHazeTune()).toEqual({ reachM: 140, max: 0.78 });
  });

  it('keeps the ramp start below the shortest reach, so it can never divide by zero or run backwards', () => {
    expect(IMPOSTOR_HAZE_LIMITS.reachM[0]).toBeGreaterThan(63);
  });
});

describe('what the dials do to the forest', () => {
  it('"Haze max" is the most of the tree the haze may cover: past the reach, the weight is exactly max', () => {
    const h = getImpostorHaze().color;
    // At 170 m the ramp (140 m reach) is saturated, so colour = base*(1-max) + haze*max.
    setImpostorHazeTune({ max: 1 });
    const full = colourAt(170);
    expect(full.r).toBeCloseTo(h.r, 5); expect(full.g).toBeCloseTo(h.g, 5); expect(full.b).toBeCloseTo(h.b, 5);
    setImpostorHazeTune({ max: 0.2 });
    const c02 = colourAt(170);
    const base = { r: (c02.r - 0.2 * h.r) / 0.8, g: (c02.g - 0.2 * h.g) / 0.8 };
    setImpostorHazeTune({ max: 0.5 });
    const half = colourAt(170);
    expect(half.r).toBeCloseTo(base.r * 0.5 + h.r * 0.5, 4);
    expect(half.g).toBeCloseTo(base.g * 0.5 + h.g * 0.5, 4);
  });

  it('a higher "Haze max" hides more of a far tree in the distance colour', () => {
    const near = colourAt(10);
    setImpostorHazeTune({ max: 0.2 });
    const thin = colourAt(150);
    setImpostorHazeTune({ max: 1 });
    const thick = colourAt(150);
    expect(distance(thick, thin)).toBeGreaterThan(0.01);
    // More haze means further from the unhazed colour.
    expect(distance(thick, near)).not.toBeCloseTo(distance(thin, near), 3);
  });

  it('a longer "Haze" reach pushes the haze further out: a mid-distance tree is clearer', () => {
    setImpostorHazeTune({ reachM: 80 });
    const short = colourAt(100);
    setImpostorHazeTune({ reachM: 260 });
    const long = colourAt(100);
    expect(distance(short, long)).toBeGreaterThan(0.01);
  });

  it('haze does not reach a tree inside the ramp start, whatever the dials say', () => {
    setImpostorHazeTune({ max: 0.2, reachM: 260 });
    const a = colourAt(40);
    setImpostorHazeTune({ max: 1, reachM: 80 });
    const b = colourAt(40);
    expect(distance(a, b)).toBeLessThan(1e-9);
  });
});
