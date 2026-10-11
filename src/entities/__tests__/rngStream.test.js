/**
 * The world's random stream is part of the contract.
 *
 * Every creature builder draws from the shared seeded stream (utils/rng.js, seed
 * 42), so rebuilding one with a different number or order of draws moves every
 * creature, tree and fern built after it. The GPU rigs re-ordered how the meshes
 * are baked; this pins that the draws are the ones the scene-graph builds made.
 * The expected values were captured from the builders at 18fd4b5 (before any rig).
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/renderer.js', () => ({
  renderer: { info: { render: {} } },
  camera: { position: { x: 0, y: 1, z: 0 } },
  clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));

import { sr } from '../../utils/rng.js';
import { makeMoth } from '../fauna/moths.js';
import { makePuff } from '../fauna/pufflings.js';
import { makeJelly } from '../fauna/jellies.js';
import { makeDeer } from '../fauna/deer.js';

// next sr() after each build, in this order (one stream, never reseeded)
const GOLDEN = [
  0.10345733170558574,
  0.5390094013600654,
  0.3442241704763026,
  0.4663795337390059,
  0.5141776974844643,
];

describe('creature builders consume the seeded stream exactly as the scene-graph builds did', () => {
  it('moth, puffling, wizard puffling, jelly, deer: the draw after each is unchanged', () => {
    const got = [];
    makeMoth(0, 2, 0); got.push(sr());
    makePuff(0, 0); got.push(sr());
    makePuff(0, 0, { wizardHat: true, skipSceneAdd: true }); got.push(sr());
    makeJelly(0, 2, 0); got.push(sr());
    makeDeer(0, 0); got.push(sr());
    expect(got).toEqual(GOLDEN);
  });
});
