/**
 * Light shafts: dawn and dusk light through the tallest nearby trees.
 *
 * The pure parts (which trees, where a shaft lies, how visible, when to
 * re-place) are tested directly. The mesh part is tested with a real Scene and
 * no renderer: what matters is structural, and structural is what decides the
 * draw-call cost — ONE mesh, no lights, a single pass, visible only at DAWN and
 * DUSK, dimmer in rain.
 */
import { describe, it, expect, afterEach } from 'vitest';
import { Scene, Mesh, Light, AdditiveBlending } from 'three';
import {
  SHAFT_COUNT, SHAFT_RADIUS_D2, SHAFT_WALK_D2, SHAFT_AIM_COS, SHAFT_PEAK, SHAFT_FADE_RATE,
  SHAFT_MAX_RUN, SHAFT_MIN_SUN_Y, SHAFT_ABOVE, SHAFT_BOB_AMP,
  pickTallest, shaftTarget, stepShaftFade, shaftSegment, shaftsStale,
  initLightShafts, updateLightShafts, lightShaftsReport, getLightShaftsMesh, disposeLightShafts,
} from '../lightShafts.js';

const tree = (x, z, treeH, scale = 1, y = 0) => ({ x, y, z, treeH, scale });

describe('pickTallest', () => {
  it('keeps the n tallest within range, tallest first', () => {
    const trees = [tree(1, 0, 5), tree(2, 0, 9), tree(3, 0, 7), tree(4, 0, 12), tree(5, 0, 6)];
    const idx = new Int32Array(3), h = new Float64Array(3);
    const n = pickTallest(trees, 0, 0, SHAFT_RADIUS_D2, 3, idx, h);
    expect(n).toBe(3);
    expect(Array.from(idx)).toEqual([3, 1, 2]);
    expect(Array.from(h)).toEqual([12, 9, 7]);
  });

  it('measures height as template height times instance scale', () => {
    const trees = [tree(1, 0, 10, 0.5), tree(2, 0, 6, 1.5)];
    const idx = new Int32Array(1), h = new Float64Array(1);
    pickTallest(trees, 0, 0, SHAFT_RADIUS_D2, 1, idx, h);
    expect(idx[0]).toBe(1);
    expect(h[0]).toBe(9);
  });

  it('ignores trees beyond the radius, however tall', () => {
    const trees = [tree(200, 0, 99), tree(10, 0, 4)];
    const idx = new Int32Array(2), h = new Float64Array(2);
    expect(pickTallest(trees, 0, 0, SHAFT_RADIUS_D2, 2, idx, h)).toBe(1);
    expect(idx[0]).toBe(1);
  });

  it('measures from the player', () => {
    const trees = [tree(500, 500, 20), tree(-500, -500, 5)];
    const idx = new Int32Array(1), h = new Float64Array(1);
    pickTallest(trees, 500, 500, SHAFT_RADIUS_D2, 1, idx, h);
    expect(idx[0]).toBe(0);
  });

  it('returns fewer than n when there are fewer trees, and zero for none', () => {
    const idx = new Int32Array(8), h = new Float64Array(8);
    expect(pickTallest([tree(1, 1, 3)], 0, 0, SHAFT_RADIUS_D2, 8, idx, h)).toBe(1);
    expect(pickTallest([], 0, 0, SHAFT_RADIUS_D2, 8, idx, h)).toBe(0);
  });
});

describe('shaftTarget', () => {
  it('is full at dawn and dusk in dry weather', () => {
    expect(shaftTarget('DAWN', 0)).toBe(1);
    expect(shaftTarget('DUSK', 0)).toBe(1);
  });

  it('is zero at every other phase', () => {
    for (const p of ['NIGHT', 'DEEP_NIGHT', 'DAY', 'NOON', '']) expect(shaftTarget(p, 0), p).toBe(0);
  });

  it('is one minus the rain rate, clamped', () => {
    expect(shaftTarget('DAWN', 0.25)).toBeCloseTo(0.75, 9);
    expect(shaftTarget('DAWN', 1)).toBe(0);
    expect(shaftTarget('DAWN', 3)).toBe(0);
    expect(shaftTarget('DAWN', -2)).toBe(1);
    expect(shaftTarget('DAWN', NaN)).toBe(1);
  });
});

describe('stepShaftFade', () => {
  it('moves toward the target at SHAFT_FADE_RATE and stops on it', () => {
    expect(stepShaftFade(0, 1, 0.5)).toBeCloseTo(SHAFT_FADE_RATE * 0.5, 9);
    expect(stepShaftFade(0.9, 1, 5)).toBe(1);
    expect(stepShaftFade(1, 0, 0.5)).toBeCloseTo(1 - SHAFT_FADE_RATE * 0.5, 9);
    expect(stepShaftFade(0.1, 0, 5)).toBe(0);
  });

  it('does not move on a zero, negative or NaN dt', () => {
    expect(stepShaftFade(0.4, 1, 0)).toBe(0.4);
    expect(stepShaftFade(0.4, 1, -1)).toBe(0.4);
    expect(stepShaftFade(0.4, 1, NaN)).toBe(0.4);
  });
});

describe('shaftSegment', () => {
  const out = { cx: 0, cy: 0, cz: 0, len: 0 };

  it('lies along the sun direction through the crown', () => {
    // Sun in the +x/+y direction. The segment's midpoint must sit on the line
    // through the crown top along that direction.
    const sx = 0.6, sy = 0.8, sz = 0;
    const t = tree(10, 20, 10, 1, 0);
    expect(shaftSegment(t, sx, sy, sz, out)).toBe(true);
    const topX = 10, topY = 10, topZ = 20;
    // midpoint = top - s*mid  =>  (top - mid_point) is parallel to s
    const dx = topX - out.cx, dy = topY - out.cy, dz = topZ - out.cz;
    const k = dx / sx;
    expect(dy).toBeCloseTo(k * sy, 9);
    expect(dz).toBeCloseTo(k * sz, 9);
  });

  it('starts above the crown and ends at the ground foot of the tree', () => {
    const sx = 0, sy = 1, sz = 0;                         // sun straight overhead
    const t = tree(5, 5, 10, 1, 2);                       // ground at y=2
    shaftSegment(t, sx, sy, sz, out);
    const top = out.cy + out.len / 2, bottom = out.cy - out.len / 2;
    expect(top).toBeCloseTo(12 + SHAFT_ABOVE, 9);         // crown (y+h) plus the lead-in
    expect(bottom).toBeCloseTo(2, 9);                     // y of the ground
  });

  it('caps the run so a low sun does not draw a beam across the map', () => {
    shaftSegment(tree(0, 0, 30), 0.99, 0.12, 0, out);
    expect(out.len).toBeLessThanOrEqual(SHAFT_MAX_RUN + SHAFT_ABOVE + 1e-9);
  });

  it('refuses when the sun is too low', () => {
    expect(shaftSegment(tree(0, 0, 10), 1, SHAFT_MIN_SUN_Y, 0, out)).toBe(false);
    expect(shaftSegment(tree(0, 0, 10), 1, -0.5, 0, out)).toBe(false);
  });

  it('a taller tree makes a longer shaft', () => {
    shaftSegment(tree(0, 0, 8), 0, 1, 0, out); const a = out.len;
    shaftSegment(tree(0, 0, 16), 0, 1, 0, out); const b = out.len;
    expect(b).toBeGreaterThan(a);
  });
});

describe('shaftsStale', () => {
  const built = { phase: 'DAWN', x: 0, z: 0, sx: 0, sy: 1, sz: 0, reduced: false };

  it('is fresh when nothing has changed', () => {
    expect(shaftsStale(built, 'DAWN', 0, 0, 0, 1, 0, false)).toBe(false);
  });

  it('is stale on a new phase or a flipped reduced-motion setting', () => {
    expect(shaftsStale(built, 'DUSK', 0, 0, 0, 1, 0, false)).toBe(true);
    expect(shaftsStale(built, 'DAWN', 0, 0, 0, 1, 0, true)).toBe(true);
  });

  it('is stale once the player has walked far enough, and not before', () => {
    const d = Math.sqrt(SHAFT_WALK_D2);
    expect(shaftsStale(built, 'DAWN', d - 1, 0, 0, 1, 0, false)).toBe(false);
    expect(shaftsStale(built, 'DAWN', d + 1, 0, 0, 1, 0, false)).toBe(true);
  });

  it('is stale once the sun has swung past the aim tolerance, and not before', () => {
    const a = Math.acos(SHAFT_AIM_COS);
    const at = (r) => [Math.sin(r), Math.cos(r), 0];
    expect(shaftsStale(built, 'DAWN', 0, 0, ...at(a * 0.8), false)).toBe(false);
    expect(shaftsStale(built, 'DAWN', 0, 0, ...at(a * 1.2), false)).toBe(true);
  });
});

describe('the mesh', () => {
  afterEach(() => disposeLightShafts());

  // Forty trees in a ring, so there are always more than SHAFT_COUNT in range.
  const forest = Array.from({ length: 40 }, (_, i) => tree(Math.cos(i) * 30, Math.sin(i) * 30, 8 + (i % 7), 1));
  const SUN = [0.6, 0.64, 0.48];

  function setup() {
    const scene = new Scene();
    initLightShafts(scene, forest);
    return scene;
  }
  /** Run frames at a phase until the fade settles. */
  function settle(phase, rain = 0, frames = 200) {
    for (let i = 0; i < frames; i++) updateLightShafts(0.05, phase, rain, 0, 0, ...SUN, false);
  }

  it('adds exactly one mesh to the scene and no lights', () => {
    const scene = setup();
    const meshes = [], lights = [];
    scene.traverse((o) => { if (o instanceof Mesh) meshes.push(o); if (o instanceof Light) lights.push(o); });
    expect(meshes).toHaveLength(1);
    expect(lights).toHaveLength(0);
    expect(meshes[0]).toBe(getLightShaftsMesh());
  });

  it('is additive, drawn in a single pass, and never culled', () => {
    setup();
    const m = getLightShaftsMesh();
    expect(m.material.blending).toBe(AdditiveBlending);
    expect(m.material.forceSinglePass).toBe(true);
    expect(m.frustumCulled).toBe(false);
    expect(m.material.depthWrite).toBe(false);
  });

  it('is hidden and empty before the first dawn, whatever the warm-up did', () => {
    setup();
    settle('NIGHT', 0, 10);
    const r = lightShaftsReport();
    expect(r.visible).toBe(false);
    expect(r.opacity).toBe(0);
  });

  it('shows eight shafts as sixteen quads in one geometry at dawn', () => {
    setup();
    settle('DAWN');
    const r = lightShaftsReport();
    expect(r.visible).toBe(true);
    expect(r.shafts).toBe(SHAFT_COUNT);
    expect(r.quads).toBe(SHAFT_COUNT * 2);
    expect(r.opacity).toBeCloseTo(SHAFT_PEAK, 3);
    expect(getLightShaftsMesh().geometry.attributes.position.count).toBe(SHAFT_COUNT * 2 * 6);   // 16 quads, six vertices each (the baker flattens the index)
  });

  it('shows at dusk too, and is gone again at night', () => {
    setup();
    settle('DUSK');
    expect(lightShaftsReport().visible).toBe(true);
    settle('NIGHT');
    const r = lightShaftsReport();
    expect(r.visible).toBe(false);
    expect(r.opacity).toBe(0);
  });

  it('fades rather than snapping when the phase ends', () => {
    setup();
    settle('DAWN');
    updateLightShafts(0.1, 'NIGHT', 0, 0, 0, ...SUN, false);
    const r = lightShaftsReport();
    expect(r.visible).toBe(true);
    expect(r.opacity).toBeGreaterThan(0);
    expect(r.opacity).toBeLessThan(SHAFT_PEAK);
  });

  it('is dimmer in rain, and gone in a downpour', () => {
    setup();
    settle('DAWN', 0);
    const dry = lightShaftsReport().opacity;
    settle('DAWN', 0.5);
    const wet = lightShaftsReport().opacity;
    expect(wet).toBeCloseTo(dry * 0.5, 2);
    settle('DAWN', 1);
    expect(lightShaftsReport().opacity).toBe(0);
    expect(lightShaftsReport().visible).toBe(false);
  });

  it('is empty rather than broken in a world with no trees', () => {
    disposeLightShafts();
    initLightShafts(new Scene(), []);
    settle('DAWN');
    const r = lightShaftsReport();
    expect(r.shafts).toBe(0);
    expect(r.visible).toBe(false);
  });

  /** Every vertex's baked shimmer amplitude (aMotion is mode, amp, phase, speed). */
  const amps = () => {
    const a = getLightShaftsMesh().geometry.attributes.aMotion.array;
    const out = [];
    for (let i = 1; i < a.length; i += 4) out.push(a[i]);
    return out;
  };

  it('shimmers by default: every vertex carries the BOB amplitude', () => {
    setup();
    settle('DAWN');
    const v = amps();
    expect(v.length).toBeGreaterThan(0);
    for (const x of v) expect(x).toBeCloseTo(SHAFT_BOB_AMP, 6);
  });

  it('sits still under reduced motion: the shimmer amplitude is baked as zero', () => {
    setup();
    for (let i = 0; i < 200; i++) updateLightShafts(0.05, 'DAWN', 0, 0, 0, ...SUN, true);
    const v = amps();
    expect(v.length).toBeGreaterThan(0);
    for (const x of v) expect(x).toBe(0);
  });
});
