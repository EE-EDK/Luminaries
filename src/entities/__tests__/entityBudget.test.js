/**
 * Entity budget guard — meshes per entity and shader-attribute completeness.
 *
 * REGRESSION GUARD: before the 2026-09-16 bake pass a fern was 57 Mesh
 * objects, a moth 91 and a jelly 44, and the scene held ~15,900 objects with
 * 1,676–3,551 draw calls per frame (single-frame probe, four positions). The
 * builders now merge parts by material role (entities/_bake.js) and the common
 * flora is instanced (entities/_instancedFlora.js). This test pins the mesh
 * count of every builder at its baked value so a decorative-parts explosion
 * fails CI instead of the frame rate.
 *
 * Second invariant: any mesh whose material carries the shared motion shader
 * (roleMaterial / applyMotion) MUST have the baked attributes — color(4),
 * aEmis, aSway, aMotion, aPivot. A mesh that uses such a material on a raw
 * geometry compiles, then renders black (uninitialised attributes), which is
 * exactly the failure the puffling ears hit during the pass.
 *
 * Only the WebGL scene sink and the terrain/world modules the builders touch
 * are mocked; Three.js geometry / material / Object3D math runs for real.
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/renderer.js', () => ({
  renderer: { info: { render: {} } },
  camera: { position: { x: 0, y: 1, z: 0 } },
  clock: {},
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn() },
}));
vi.mock('../../world/terrain.js', () => ({
  getGroundY: () => 0, getMeshGroundY: () => 0, getGroundNormal: () => ({ x: 0, y: 1, z: 0 }),
  registerFlatZone: vi.fn(), inKeepOut: () => false, registerHousePlateau: vi.fn(),
  clearHousePlateaus: vi.fn(), buildHeightCache: vi.fn(),
}));
vi.mock('../../particles/seeds.js', () => ({ spawnDandSeed: vi.fn() }));
vi.mock('../../systems/adaptiveQuality.js', () => ({ getLodScale: () => 1 }));
vi.mock('../../core/player.js', () => ({ player: { pos: { x: 0, y: 0, z: 0 } } }));
vi.mock('../../kernel/eventBus.js', () => ({ on: vi.fn(), emit: vi.fn(), Events: {} }));
vi.mock('../../systems/dimming.js', () => ({ getLocalGlow: () => 1 }));
vi.mock('../../systems/dayNightCycle.js', () => ({ bioGlow: 1 }));
vi.mock('../../state/gameState.js', () => ({ orbBoost: 1 }));

import { makeDandelion } from '../flora/dandelions.js';
import { makeCrystal } from '../flora/crystals.js';
import { makeThornbloom } from '../flora/thornbloom.js';
import { makeHelixvine } from '../flora/helixvine.js';
import { makeSnapthorn } from '../flora/snapthorn.js';
import { makeSpiralFrond } from '../flora/spiralfrond.js';
import { makeCorpseBloom } from '../flora/corpsebloom.js';
import { makeOrbBush } from '../flora/orbbush.js';
import { makeLanternPod } from '../flora/lanternpod.js';
import { makeVeilMoss } from '../flora/veilmoss.js';
import { makeJelly } from '../fauna/jellies.js';
import { makePuff } from '../fauna/pufflings.js';
import { makeDeer } from '../fauna/deer.js';
import { makeMoth } from '../fauna/moths.js';
import { makeLuminid } from '../fauna/luminids.js';
import { makeWisp } from '../magical/wisps.js';
import { makeBubble } from '../magical/bubbles.js';
import { makeOrb } from '../magical/orbs.js';
import { makeFairyRing } from '../magical/fairyRings.js';
import { makePond } from '../magical/ponds.js';
import { makeObelisk, getObeliskGroup } from '../world/obelisk.js';
import { getFernType } from '../flora/ferns.js';
import { getFlowerType } from '../flora/flowers.js';
import { getMushType } from '../flora/mushrooms.js';
import { getReedType } from '../flora/reeds.js';

const BAKED_ATTRS = ['color', 'aEmis', 'aSway', 'aMotion', 'aPivot'];

/** Mesh ceilings measured 2026-09-16 after the bake pass (deterministic builders). */
const CEILINGS = [
  ['dandelion', () => makeDandelion(0, 0), 2],
  ['crystal', () => makeCrystal(0, 0), 3],
  ['thornbloom', () => makeThornbloom(0, 0), 4],
  ['helixvine', () => makeHelixvine(0, 0), 4],
  ['snapthorn', () => makeSnapthorn(0, 0), 5],
  ['spiralfrond', () => makeSpiralFrond(0, 0), 4],
  ['corpsebloom', () => makeCorpseBloom(0, 0), 4],
  ['orbbush', () => makeOrbBush(0, 0), 3],
  ['lanternpod', () => makeLanternPod(0, 0), 3],
  ['veilmoss', () => makeVeilMoss(0, 0), 2],
  ['jelly', () => makeJelly(0, 2, 0), 7],
  ['puffling', () => makePuff(0, 0), 10],
  ['puffling (wizard)', () => makePuff(0, 0, { wizardHat: true }), 13],
  ['deer', () => makeDeer(0, 0), 17],
  ['moth', () => makeMoth(0, 2, 0), 8],
  ['luminid', () => makeLuminid(0, 0), 17],
  ['wisp', () => makeWisp(0, 2, 0), 6],
  ['bubble', () => makeBubble(0, 2, 0), 2],
  ['orb', () => makeOrb(0, 0), 7],
  ['fairyRing', () => makeFairyRing(0, 0), 5],
  ['pond', () => makePond(0, 0), 7],
];

function collectMeshes(root) {
  const out = [];
  root.traverse((o) => { if (o.isMesh || o.isSprite || o.isPoints) out.push(o); });
  return out;
}

function isMotionMaterial(mat) {
  if (!mat || typeof mat.customProgramCacheKey !== 'function') return false;
  const k = mat.customProgramCacheKey();
  return k === 'lumMotionStd' || k === 'lumMotionBasic';
}

function assertBaked(meshes, label) {
  for (const m of meshes) {
    if (!isMotionMaterial(m.material)) continue;
    const geo = m.geometry;
    for (const a of BAKED_ATTRS) {
      expect(geo.attributes[a], `${label}: motion material on mesh without baked "${a}"`).toBeDefined();
    }
    expect(geo.attributes.color.itemSize, `${label}: color must be RGBA`).toBe(4);
    expect(geo.attributes.aMotion.itemSize, `${label}: aMotion must be vec4`).toBe(4);
    expect(geo.attributes.aPivot.itemSize, `${label}: aPivot must be vec3`).toBe(3);
    const n = geo.attributes.position.count;
    for (const a of BAKED_ATTRS) {
      expect(geo.attributes[a].count, `${label}: "${a}" count must match position count`).toBe(n);
    }
  }
}

describe('entity budget — meshes per builder', () => {
  for (const [name, build, ceiling] of CEILINGS) {
    it(`${name}: ≤ ${ceiling} meshes, baked attributes complete`, () => {
      const rec = build();
      expect(rec, `${name} returned nothing`).toBeTruthy();
      expect(rec.group, `${name} record has no group`).toBeTruthy();
      const meshes = collectMeshes(rec.group);
      expect(meshes.length, `${name}: ${meshes.length} meshes (ceiling ${ceiling})`).toBeLessThanOrEqual(ceiling);
      expect(meshes.length, `${name}: builder produced no meshes`).toBeGreaterThan(0);
      assertBaked(meshes, name);
    });
  }

  it('obelisk: ≤ 18 meshes, baked attributes complete', () => {
    makeObelisk();
    const meshes = collectMeshes(getObeliskGroup());
    expect(meshes.length).toBeLessThanOrEqual(18);
    expect(meshes.length).toBeGreaterThan(0);
    assertBaked(meshes, 'obelisk');
  });
});

describe('entity budget — instanced flora', () => {
  const TYPES = [
    ['fern', getFernType, 12],      // 6 templates × 2 roles
    ['flower', getFlowerType, 12],  // 6 templates × 2 roles
    ['mushroom', getMushType, 16],  // 8 templates × 2 roles
    ['reed', getReedType, 12],      // 6 templates × 2 roles
  ];
  for (const [name, getType, ceiling] of TYPES) {
    it(`${name}: whole population ≤ ${ceiling} draw calls, templates baked`, () => {
      const type = getType();
      expect(type.drawCalls()).toBeLessThanOrEqual(ceiling);
      expect(type.templates.length).toBeGreaterThan(1);
      for (const t of type.templates) {
        for (const role of Object.keys(t.roles)) {
          const mesh = t.roles[role];
          expect(mesh.isInstancedMesh, `${name}/${role}: template role is not an InstancedMesh`).toBe(true);
          assertBaked([mesh], `${name}/${role}`);
          expect(mesh.geometry.attributes.aInstGlow, `${name}/${role}: aInstGlow missing`).toBeDefined();
          expect(mesh.geometry.attributes.aInstPhase, `${name}/${role}: aInstPhase missing`).toBeDefined();
        }
      }
      // Templates must differ: the LCG-correlation bug made every template identical.
      const counts = type.templates.map((t) => {
        let n = 0;
        for (const role of Object.keys(t.roles)) n += t.roles[role].geometry.attributes.position.count;
        return n;
      });
      expect(new Set(counts).size, `${name}: all templates have identical vertex counts (${counts.join(',')})`).toBeGreaterThan(1);
    });
  }
});
