/**
 * TDD layout: first test locks the empty-grid contract; rest cover bounds and shapes.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  buildTreeHash,
  buildDynamicHash,
  buildNamedDynamicHash,
  queryNearTrees,
  queryNearDynamic,
  queryNamedDynamic,
  queryNearAll,
} from '../spatialHash.js';

beforeEach(() => {
  buildTreeHash([], 10);
  buildDynamicHash([]);
});

describe('spatialHash', () => {
  it('contract: empty tree hash yields zero hits at origin', () => {
    buildTreeHash([], 10);
    const q = queryNearTrees(0, 0, 100);
    expect(q.length).toBe(0);
  });

  it('finds a tree in its cell within small radius', () => {
    const trees = [{ x: 5, z: 5, tag: 't0' }];
    buildTreeHash(trees, 10);
    const q = queryNearTrees(5, 5, 2);
    expect(q.length).toBe(1);
    expect(q.items[0]).toBe(trees[0]);
  });

  it('respects cell size — point just outside radius of another cell returns empty', () => {
    const trees = [{ x: 0, z: 0 }];
    buildTreeHash(trees, 10);
    const q = queryNearTrees(50, 50, 5);
    expect(q.length).toBe(0);
  });

  it('crosses cell boundaries when radius spans multiple buckets', () => {
    const trees = [
      { x: 9.9, z: 0 },
      { x: 10.1, z: 0 },
    ];
    buildTreeHash(trees, 10);
    const q = queryNearTrees(10, 0, 3);
    expect(q.length).toBeGreaterThanOrEqual(1);
  });

  it('dynamic hash accepts flat { x, z } entities', () => {
    const e = { x: 2, z: 3 };
    buildDynamicHash([[e]]);
    const q = queryNearDynamic(2, 3, 4);
    expect(q.length).toBe(1);
    expect(q.items[0]).toBe(e);
  });

  it('dynamic hash resolves group.position.x / .z when x/z absent', () => {
    const inner = {
      group: {
        position: { x: 22, z: -7 },
      },
    };
    buildDynamicHash([[inner]]);
    const q = queryNearDynamic(22, -7, 2);
    expect(q.length).toBe(1);
    expect(q.items[0]).toBe(inner);
  });

  it('queryNearAll merges tree and dynamic hits', () => {
    buildTreeHash([{ x: 1, z: 0 }], 10);
    const dyn = { x: 2, z: 0 };
    buildDynamicHash([[dyn]]);
    const q = queryNearAll(1.5, 0, 5);
    expect(q.length).toBe(2);
  });

  it('changing cellSize rebuild uses new quantization', () => {
    buildTreeHash([{ x: 15, z: 15 }], 100);
    let q = queryNearTrees(15, 15, 50);
    expect(q.length).toBe(1);
    buildTreeHash([{ x: 15, z: 15 }], 5);
    q = queryNearTrees(15, 15, 4);
    expect(q.length).toBe(1);
  });

  it('clear dynamic buckets between frames via empty collections', () => {
    buildDynamicHash([[{ x: 0, z: 0 }]]);
    expect(queryNearDynamic(0, 0, 5).length).toBe(1);
    buildDynamicHash([]);
    expect(queryNearDynamic(0, 0, 50).length).toBe(0);
  });

  it('radius zero still scans center cell bucket', () => {
    buildTreeHash([{ x: 0.5, z: 0.5 }], 10);
    const q = queryNearTrees(0.5, 0.5, 0);
    expect(q.length).toBe(1);
  });
});

// ============================================================================
// Named per-type dynamic grids — backs the fauna O(k) neighbor queries
// (Task 11.2). Each fauna type ('deer' | 'puff' | 'jelly') gets its own grid so
// same-type neighbor scans aren't conflated with other fauna.
// ============================================================================
describe('named dynamic grids', () => {
  it('finds same-type neighbors within radius and excludes self by identity', () => {
    const a = { x: 0, z: 0 };
    const b = { x: 3, z: 0 };   // 3m → inside r=5
    const c = { x: 50, z: 50 }; // far outside
    buildNamedDynamicHash('deer', [a, b, c], 10);
    const q = queryNamedDynamic('deer', 0, 0, 5);
    // a and b should be in the candidate set; c should not (different cells).
    const items = q.items.slice(0, q.length);
    expect(items).toContain(a);
    expect(items).toContain(b);
    expect(items).not.toContain(c);
  });

  it('isolates types — querying one grid never returns another type\'s entities', () => {
    const deer = { x: 1, z: 1 };
    const puff = { x: 1, z: 1 }; // same spot, different grid
    buildNamedDynamicHash('deer', [deer], 10);
    buildNamedDynamicHash('puff', [puff], 10);
    const dq = queryNamedDynamic('deer', 1, 1, 5);
    const pq = queryNamedDynamic('puff', 1, 1, 5);
    expect(dq.items.slice(0, dq.length)).toEqual([deer]);
    expect(pq.items.slice(0, pq.length)).toEqual([puff]);
  });

  it('resolves group.position when flat x/z absent', () => {
    const j = { group: { position: { x: 14, z: -14 } } };
    buildNamedDynamicHash('jelly', [j], 15);
    const q = queryNamedDynamic('jelly', 14, -14, 15);
    expect(q.items.slice(0, q.length)).toContain(j);
  });

  it('rebuild in place clears stale entries (per-frame reuse)', () => {
    buildNamedDynamicHash('deer', [{ x: 0, z: 0 }], 10);
    expect(queryNamedDynamic('deer', 0, 0, 5).length).toBe(1);
    buildNamedDynamicHash('deer', [], 10);
    expect(queryNamedDynamic('deer', 0, 0, 50).length).toBe(0);
  });

  it('unknown grid name yields zero hits, never throws', () => {
    expect(queryNamedDynamic('does-not-exist', 0, 0, 100).length).toBe(0);
  });

  it('cell size is per-grid — a tight cell still finds a same-cell neighbor', () => {
    // 15m jelly cell: two jellies in the same cell are both candidates.
    buildNamedDynamicHash('jelly', [{ x: 1, z: 1 }, { x: 14, z: 14 }], 15);
    const q = queryNamedDynamic('jelly', 1, 1, 15);
    expect(q.length).toBeGreaterThanOrEqual(2);
  });
});
