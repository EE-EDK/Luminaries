/**
 * Memories: the house at dusk and the glyph that answers a hum.
 *
 * Each fires exactly once for what it is keyed on, and not before its
 * conditions are all true. They take their inputs as arguments, so the tests
 * stand a fake player in a fake world and read the one thing that matters:
 * what was shown.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HOUSE_MEMORIES } from '../../narrative/lines.js';
import { DISCOVERY_LABELS } from '../../quest/config.js';

const shown = vi.hoisted(() => []);
vi.mock('../discoveries.js', () => ({
  showNarrativePair: (set, sec) => { shown.push({ set, sec }); },
}));

// The discovered-keys set is module state and only ever grows, so each test
// gets a fresh copy of both modules: a "fires exactly once" test must not
// quietly spend the key the next test's "fires at all" depends on.
let checkHouseMemory, checkGlyphEcho, humBandType, houseKey, HOUSE_STILL_SEC, HOUSE_REACH, ECHO_RADIUS2;
let setPerspective, restoreNarrative, getDiscoveredKeys, isDiscovered;

/** A world with one house at (10, 0) in village `cluster`, its wall `colR` out from the centre. */
const houseAt = (cluster, colR = 2) => (x, z, maxD2) => {
  const dx = 10 - x, dz = 0 - z;
  return dx * dx + dz * dz < maxD2 ? { x: 10, z: 0, colR, cluster } : null;
};

beforeEach(async () => {
  vi.resetModules();
  shown.length = 0;
  ({ checkHouseMemory, checkGlyphEcho, humBandType, houseKey, HOUSE_STILL_SEC, HOUSE_REACH, ECHO_RADIUS2 }
    = await import('../memories.js'));
  ({ setPerspective, restoreNarrative, getDiscoveredKeys, isDiscovered }
    = await import('../../state/narrativeState.js'));
  setPerspective('child');
});

describe('house memory', () => {
  it('fires after standing still near a house at dusk', () => {
    expect(checkHouseMemory(7, 0, 3.5, 'DUSK', houseAt(100))).toBe(true);
    expect(shown).toHaveLength(1);
    expect(shown[0].set).toEqual(HOUSE_MEMORIES[100 % HOUSE_MEMORIES.length]);
  });

  it('fires exactly once for a village, however long the player stays', () => {
    const find = houseAt(101);
    expect(checkHouseMemory(7, 0, 3.5, 'DUSK', find)).toBe(true);
    for (let i = 0; i < 50; i++) expect(checkHouseMemory(7, 0, 4 + i, 'DUSK', find)).toBe(false);
    expect(shown).toHaveLength(1);
  });

  it('fires again for a different village', () => {
    checkHouseMemory(7, 0, 4, 'DUSK', houseAt(102));
    checkHouseMemory(7, 0, 4, 'DUSK', houseAt(103));
    expect(shown).toHaveLength(2);
    expect(isDiscovered(houseKey(102))).toBe(true);
    expect(isDiscovered(houseKey(103))).toBe(true);
  });

  it('needs every condition: dusk, stillness, and closeness', () => {
    const find = houseAt(104);
    expect(checkHouseMemory(7, 0, 4, 'NIGHT', find)).toBe(false);          // wrong hour
    expect(checkHouseMemory(7, 0, 4, 'DAWN', find)).toBe(false);
    expect(checkHouseMemory(7, 0, HOUSE_STILL_SEC - 0.1, 'DUSK', find)).toBe(false);   // not still long enough
    expect(checkHouseMemory(-20, 0, 4, 'DUSK', find)).toBe(false);         // too far
    expect(shown).toHaveLength(0);
    // And a failed attempt must not have spent the village's one memory.
    expect(checkHouseMemory(7, 0, 4, 'DUSK', find)).toBe(true);
  });

  it('is 5 m from the wall: inside fires, outside does not', () => {
    expect(HOUSE_REACH).toBe(5);
    // The house stands at x = 10 with a wall 2 m out, so its wall is at x = 8
    // and 5 m from the wall is x = 3.
    expect(checkHouseMemory(3.1, 0, 4, 'DUSK', houseAt(105))).toBe(true);
    expect(checkHouseMemory(2.9, 0, 4, 'DUSK', houseAt(106))).toBe(false);
  });

  it('can be reached by a player who is stopped at the wall', () => {
    // The real houses are about 4.9 m in radius and the player is pushed out to
    // that plus their own 0.4 m, so the closest they can stand to the centre
    // is 5.3 m. A reach measured from the centre would never have fired.
    const wall = 4.9 + 0.4;
    expect(checkHouseMemory(10 - wall, 0, 4, 'DUSK', houseAt(108, 4.9))).toBe(true);
  });

  it('stays quiet for a village a restored save already remembers', () => {
    restoreNarrative({ perspective: 'child', truthRevealed: false, discovered: [houseKey(107)] });
    expect(getDiscoveredKeys()).toContain('house:107');
    expect(checkHouseMemory(7, 0, 4, 'DUSK', houseAt(107))).toBe(false);
    expect(shown).toHaveLength(0);
  });

  it('is quiet where there is no house', () => {
    expect(checkHouseMemory(0, 0, 9, 'DUSK', () => null)).toBe(false);
  });
});

describe('humBandType', () => {
  it('is the band being resonated while humming, once the resonance is real', () => {
    expect(humBandType(true, 0.8, 'deer', false, null)).toBe('deer');
    expect(humBandType(true, 0.05, 'deer', false, null)).toBe(null);   // a brush against the band
    expect(humBandType(true, 0.8, null, false, null)).toBe(null);
  });

  it('is the locked band after the hum stops itself on a lock', () => {
    expect(humBandType(false, 0, null, true, 'moth')).toBe('moth');
    expect(humBandType(false, 0, null, false, 'moth')).toBe(null);
  });
});

describe('glyph echo', () => {
  const glyphs = (revealed) => [{ x: 3, z: 0, revealed }];

  it('answers a hum beside a read glyph with the line in the other register', () => {
    setPerspective('child');
    expect(checkGlyphEcho(1, 0, 'deer', glyphs(true))).toBe(true);
    expect(shown).toHaveLength(1);
    // A child reader gets the adult half alone...
    expect(shown[0].set).toEqual({ adult: DISCOVERY_LABELS.deer.adult });
  });

  it('answers an adult reader in the child register', () => {
    setPerspective('adult');
    expect(checkGlyphEcho(1, 0, 'jelly', glyphs(true))).toBe(true);
    expect(shown[0].set).toEqual({ child: DISCOVERY_LABELS.jelly.child });
  });

  it('fires exactly once for a creature, however long the hum goes on', () => {
    expect(checkGlyphEcho(1, 0, 'moth', glyphs(true))).toBe(true);
    for (let i = 0; i < 30; i++) expect(checkGlyphEcho(1, 0, 'moth', glyphs(true))).toBe(false);
    expect(shown).toHaveLength(1);
  });

  it('fires for each creature separately', () => {
    checkGlyphEcho(1, 0, 'puff', glyphs(true));
    expect(shown).toHaveLength(1);
    expect(shown[0].set).toEqual({ adult: DISCOVERY_LABELS.puffling.adult });
  });

  it('needs a glyph that has been read, within 4 m, and a band', () => {
    expect(checkGlyphEcho(1, 0, 'deer', glyphs(false))).toBe(false);       // unread glyph
    expect(checkGlyphEcho(-9, 0, 'deer', glyphs(true))).toBe(false);       // too far
    expect(checkGlyphEcho(1, 0, null, glyphs(true))).toBe(false);          // not humming a band
    expect(checkGlyphEcho(1, 0, 'dragon', glyphs(true))).toBe(false);      // not a band
    expect(shown).toHaveLength(0);
  });

  it('is exactly 4 m: inside fires, outside does not', () => {
    expect(ECHO_RADIUS2).toBe(16);
    const g = [{ x: 0, z: 0, revealed: true }];
    expect(checkGlyphEcho(4.1, 0, 'moth', g)).toBe(false);
    expect(checkGlyphEcho(3.9, 0, 'moth', g)).toBe(true);
  });
});
