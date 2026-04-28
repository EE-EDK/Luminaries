/**
 * TDD layout: first test locks the empty-grid contract; rest cover bounds and shapes.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  buildTreeHash,
  buildDynamicHash,
  queryNearTrees,
  queryNearDynamic,
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
