/**
 * Where a record actually is — the origin bug, written down.
 *
 * `e.position || e` fell through to the creature record itself, whose x is
 * undefined, and `undefined || 0` put every creature at the origin. All four
 * creature discoveries fired for anyone within 8 m of spawn (seen live: four
 * DISCOVERY events in one frame, nearest animal 12–32 m away). The discovery
 * check now goes through entityPosition, and a record with no readable
 * position is skipped rather than placed at (0, 0).
 */
import { describe, it, expect } from 'vitest';
import { entityPosition } from '../entityPos.js';

describe('entityPosition', () => {
  it('reads a creature record through its group', () => {
    expect(entityPosition({ group: { position: { x: 30, y: 0, z: -4 } }, state: 'walk' }))
      .toEqual({ x: 30, y: 0, z: -4 });
  });

  it('prefers a real own position (meshes, ponds with a position)', () => {
    expect(entityPosition({ position: { x: 1, y: 0, z: 2 } }).x).toBe(1);
  });

  it('accepts a plain {x, z} record (ponds, fairy rings)', () => {
    expect(entityPosition({ x: 7, z: 9 })).toEqual({ x: 7, z: 9 });
  });

  it('returns null, never the origin, for a record with no position', () => {
    // This is the bug: a creature record has no own x, and the old read
    // coerced it to (0, 0) instead of skipping it.
    for (const bad of [null, undefined, {}, { state: 'walk' }, { group: {} }, { position: {} }]) {
      expect(entityPosition(bad), JSON.stringify(bad)).toBe(null);
    }
  });
});
