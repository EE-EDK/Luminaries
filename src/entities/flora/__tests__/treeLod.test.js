/**
 * Tree LOD banding — the distant forest must actually be drawn.
 *
 * REGRESSION GUARD: trees were hidden outright past 115 m, in a world whose
 * radius is 90 m. A player at the edge therefore lost 185 of 495 trees, and the
 * band meant to cover 75-115 m was an additive glow sprite whose colour was
 * multiplied by the forest dim factor (0.35 at the start of the game), so it
 * rendered at ~5% luminance and read as nothing at all. The forest appeared to
 * begin at the 63 m mesh boundary with void behind it.
 *
 * These tests pin the three tiers and the cull radius. Only the WebGL scene sink
 * and the adaptive-quality notch are mocked; the banding maths runs for real.
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../core/renderer.js', () => ({
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));
vi.mock('../../../systems/adaptiveQuality.js', () => ({ getLodScale: () => 1 }));
vi.mock('../../../world/terrain.js', () => ({
  getGroundNormal: () => ({ x: 0, y: 1, z: 0 }),
}));

import { updateTreeLOD } from '../trees.js';
import { WORLD_R } from '../../../constants.js';

/** Stand-in for one template's InstancedMeshes: counts what the LOD writes. */
function fakeMesh(instances) {
  const slot = () => ({ count: 0, setMatrixAt: vi.fn(), instanceMatrix: { needsUpdate: false } });
  return { instances, trunk: slot(), canopy: slot(), glow: slot(), detail: slot() };
}

function fakeImpostor() {
  return {
    visible: false,
    position: { x: 0, y: 0, z: 0 },
    material: { color: { copy: vi.fn() }, opacity: 0 },
    userData: { treeTemplateIndex: 0 },
  };
}

/**
 * Put one tree at each given distance due north of the player and run one LOD pass.
 * @param {number[]} distances metres
 * @returns {{rows:{d:number,impostor:boolean,opacity:number}[], drawn3D:number, detail3D:number}}
 */
function classify(distances) {
  const instances = distances.map((d, i) => ({
    x: 0, y: 0, z: d, scale: 1, yRot: 0, nx: 0, ny: 1, nz: 0, treeH: 10, posIdx: i,
  }));
  const mesh = fakeMesh(instances);
  const impostors = distances.map(fakeImpostor);
  // No camera → no frustum culling, so every tree is judged on distance alone.
  updateTreeLOD([mesh], impostors, 0, 1.7, 0, 0, 0, 0, 0, null, 0.35, 1);
  return {
    rows: distances.map((d, i) => ({
      d, impostor: impostors[i].visible, opacity: impostors[i].material.opacity,
    })),
    drawn3D: mesh.trunk.count,
    detail3D: mesh.detail.count,
  };
}

describe('tree LOD tiers', () => {
  it('tier 0: close trees get the detail mesh', () => {
    const { rows, drawn3D, detail3D } = classify([10]);
    expect(drawn3D).toBe(1);
    expect(detail3D).toBe(1);
    expect(rows[0].impostor, 'no impostor behind a full-detail tree').toBe(false);
  });

  it('tier 1: mid trees get the plain mesh, no detail, no impostor', () => {
    const { rows, drawn3D, detail3D } = classify([40]);
    expect(drawn3D).toBe(1);
    expect(detail3D).toBe(0);
    expect(rows[0].impostor).toBe(false);
  });

  it('tier 2: the mesh hands over to the impostor past 75 m', () => {
    const { rows } = classify([40, 70, 90, 150]);
    expect(rows[0].impostor, '40 m is mesh-only').toBe(false);
    expect(rows[1].impostor, '70 m cross-fades').toBe(true);
    expect(rows[2].impostor, '90 m is impostor').toBe(true);
    expect(rows[3].impostor, '150 m is impostor').toBe(true);
  });

  it('cross-fade ramps the impostor in rather than popping it', () => {
    const { rows } = classify([64, 70, 74]);
    expect(rows[0].opacity).toBeLessThan(rows[1].opacity);
    expect(rows[1].opacity).toBeLessThan(rows[2].opacity);
    expect(rows[2].opacity).toBeGreaterThan(0.5);
  });

  it('never hides a tree that is inside the world', () => {
    // Worst case: player at one edge, tree at the opposite edge.
    const worst = WORLD_R * 2;
    const { rows } = classify([worst - 1, worst]);
    for (const row of rows) {
      expect(row.impostor, `${row.d.toFixed(0)} m must still be drawn`).toBe(true);
      expect(row.opacity, `${row.d.toFixed(0)} m opacity`).toBeGreaterThan(0.5);
    }
  });

  it('keeps full impostor opacity all the way out — no fade to nothing', () => {
    const { rows } = classify([90, 130, WORLD_R * 2]);
    for (const row of rows) {
      expect(row.opacity, `${row.d.toFixed(0)} m opacity`).toBeGreaterThan(0.8);
    }
  });
});
