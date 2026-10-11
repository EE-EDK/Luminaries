/**
 * Constellation names: data on the definition, handed back when the
 * constellation lights, and never handed back by a restore.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../core/renderer.js', () => ({ scene: { add: vi.fn(), remove: vi.fn() } }));

import { CONSTELLATION_NAMES } from '../../narrative/lines.js';
import { ORB_N } from '../../constants.js';

let revealConstellation;
beforeEach(async () => {
  // The constellation table keeps its revealed flags at module scope.
  vi.resetModules();
  ({ revealConstellation } = await import('../sky.js'));
});

describe('revealConstellation', () => {
  it('hands back the name pair of the constellation it lit, for every orb', () => {
    for (let i = 0; i < ORB_N; i++) {
      expect(revealConstellation(i)).toEqual(CONSTELLATION_NAMES[i]);
    }
  });

  it('hands it back once only', () => {
    expect(revealConstellation(1)).toEqual(CONSTELLATION_NAMES[1]);
    expect(revealConstellation(1)).toBeNull();
  });

  it('hands back nothing on a restore, so a load announces no names', () => {
    for (let i = 0; i < ORB_N; i++) expect(revealConstellation(i, { instant: true })).toBeNull();
    // ...and they are lit, so the live path has nothing left to announce.
    expect(revealConstellation(0)).toBeNull();
  });

  it('hands back nothing for an orb that has no constellation', () => {
    expect(revealConstellation(-1)).toBeNull();
    expect(revealConstellation(ORB_N)).toBeNull();
  });
});
