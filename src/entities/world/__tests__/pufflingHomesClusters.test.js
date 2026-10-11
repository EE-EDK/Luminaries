/**
 * Every house knows which village it stands in.
 *
 * The house memory is "once per village", keyed on the cluster a house was
 * placed in. If placement forgot to say, every house would read as cluster 0
 * and the whole world would share one memory — which passes any test that only
 * looks at a single house. So: place the real clusters, and look at them all.
 */
import { describe, it, expect, vi } from 'vitest';
import { Group } from 'three';

vi.mock('../../../core/renderer.js', () => ({ scene: { add: vi.fn(), remove: vi.fn() } }));
vi.mock('../../../core/player.js', () => ({ player: { pos: { x: 0, y: 0, z: 0 } } }));
vi.mock('../pufflingHomeDetailed.js', () => ({
  createPufflingHomeDetailedGroup: () => new Group(),
  pufflingHomeCollisionRadius: () => 2,
  applyThemeToDetailedHouse: vi.fn(),
  themePayloadBioluminescent: () => ({}),
  PUFF_HOUSE: { baseRadius: 1, baseHeight: 1, capRadius: 1, capFlatten: 1 },
  PUFF_HOME_WORLD_SCALE: 1,
}));
vi.mock('../../../world/terrain.js', () => ({
  getGroundY: () => 0,
  getGroundNormal: () => ({ x: 0, y: 1, z: 0 }),
  registerHousePlateau: vi.fn(),
  clearHousePlateaus: vi.fn(),
  buildHeightCache: vi.fn(),
}));
vi.mock('../../../systems/dimming.js', () => ({ getLocalGlow: () => 1 }));
vi.mock('../../../systems/dayNightCycle.js', () => ({ bioGlow: 1 }));
vi.mock('../../../state/gameState.js', () => ({ orbBoost: 0 }));

// The impostor sprite's texture is drawn on a canvas.
vi.stubGlobal('document', {
  createElement: () => ({
    width: 0, height: 0,
    getContext: () => ({ createRadialGradient: () => ({ addColorStop() {} }), fillRect() {}, fillStyle: '' }),
  }),
});

import { placePufflingHomeClusters, getPufflingHouseCollision, nearestHouse } from '../pufflingHomes.js';

/** A small deterministic stream, so the placement is the same every run. */
function stream(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

describe('placePufflingHomeClusters', () => {
  placePufflingHomeClusters({
    inKeepOut: () => false,
    classifyBiome: () => 'clear',
    sr: stream(42),
    keepOutZones: [],
    trees_data: [],
    rocks_data: [],
  });
  const houses = getPufflingHouseCollision();

  it('places houses at all, so the checks below are not vacuous', () => {
    expect(houses.length).toBeGreaterThan(10);
  });

  it('numbers every house with the village it belongs to', () => {
    for (const h of houses) expect(Number.isInteger(h.cluster), `cluster of ${h.x},${h.z}`).toBe(true);
  });

  it('has more than one village, not one cluster index repeated', () => {
    const clusters = new Set(houses.map((h) => h.cluster));
    expect(clusters.size).toBeGreaterThan(5);
  });

  it('puts the houses of one village within walking distance of each other', () => {
    // A village is a ring of two to five houses around a centre; two houses
    // sharing an index but standing a hundred metres apart would mean the
    // index was handed out per run of placements, not per village.
    const byCluster = new Map();
    for (const h of houses) {
      if (!byCluster.has(h.cluster)) byCluster.set(h.cluster, []);
      byCluster.get(h.cluster).push(h);
    }
    for (const [cluster, group] of byCluster) {
      for (const a of group) for (const b of group) {
        expect(Math.hypot(a.x - b.x, a.z - b.z), `village ${cluster}`).toBeLessThan(30);
      }
    }
  });

  it('hands the cluster back from nearestHouse', () => {
    const h = houses[0];
    expect(nearestHouse(h.x + 1, h.z, 25).cluster).toBe(h.cluster);
  });
});
