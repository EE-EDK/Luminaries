/**
 * Puffling chatter: which pool a puffling draws from, and what it remembers.
 *
 * pickMessage takes the dice as an argument, so each test can say exactly which
 * branch a roll should land in and read the line that comes out. The things
 * worth pinning: the moments that matter to play still win over a reminiscence;
 * progress is remembered in tiers; and a puffling does not know who made the
 * garden until the wizard has said so.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as LINES from '../../narrative/lines.js';
import { speak } from '../../narrative/voice.js';
import { setPerspective } from '../../state/narrativeState.js';

vi.mock('../../core/renderer.js', () => ({ camera: {} }));
vi.mock('../discoveries.js', () => ({ READ_DWELL_MULT: 1.5 }));

import { pickMessage } from '../pufflingChat.js';

/** A die that returns the given values in order, then 0.99s. */
const dice = (...vals) => { let i = 0; return () => (i < vals.length ? vals[i++] : 0.99); };

/** Every resolved line a pool can say in a voice. */
const said = (pool, voice) => pool[voice].map((l) => speak(l, voice));

beforeEach(() => setPerspective('child'));

describe('what still wins', () => {
  it('a carried hum beats every reminiscence', () => {
    // Even with the architect and memory rolls both certain, the hint stands.
    const line = pickMessage(true, true, 0.9, true, 5, true, dice(0, 0));
    expect(said(LINES.MESSAGES_CARRYING, 'child')).toContain(line);
  });

  it('attunement beats memory, and a near anchor beats both', () => {
    expect(said(LINES.MESSAGES_ATTUNING, 'child')).toContain(pickMessage(true, true, 0.9, false, 5, true, dice(0, 0)));
    expect(said(LINES.MESSAGES_NEAR_ORB, 'child')).toContain(pickMessage(true, true, 0.1, false, 5, true, dice(0, 0)));
  });
});

describe('remembering progress', () => {
  it('draws from the early pool at one or two anchors', () => {
    for (const n of [1, 2]) {
      // First roll < MEMORY_CHANCE lands in memory; second picks the line.
      const line = pickMessage(true, false, 0, false, n, false, dice(0.1, 0));
      expect(said(LINES.MESSAGES_MEMORY_EARLY, 'child'), `orbs ${n}`).toContain(line);
    }
  });

  it('draws from the late pool at three or four', () => {
    for (const n of [3, 4]) {
      const line = pickMessage(true, false, 0, false, n, false, dice(0.1, 0));
      expect(said(LINES.MESSAGES_MEMORY_LATE, 'child'), `orbs ${n}`).toContain(line);
    }
  });

  it('draws from the finished pool at five, before the wizard', () => {
    const line = pickMessage(true, false, 0, false, 5, false, dice(0.1, 0));
    expect(said(LINES.MESSAGES_MEMORY_DONE, 'child')).toContain(line);
  });

  it('remembers nothing at zero anchors, however the dice fall', () => {
    const line = pickMessage(true, false, 0, false, 0, false, dice(0.01, 0));
    for (const n of ['EARLY', 'LATE', 'DONE', 'DONE_POST']) {
      expect(said(LINES[`MESSAGES_MEMORY_${n}`], 'child')).not.toContain(line);
    }
  });

  it('falls through to the ordinary lines when the memory roll misses', () => {
    const line = pickMessage(true, false, 0, false, 3, false, dice(0.9, 0.9, 0));
    expect(said(LINES.MESSAGES_RESTORED, 'child')).toContain(line);
  });
});

describe('the reveal', () => {
  it('speaks of the one who made the garden only after the wizard', () => {
    const after = pickMessage(true, false, 0, false, 0, true, dice(0.1, 0));
    expect(said(LINES.MESSAGES_ARCHITECT, 'child')).toContain(after);

    // Same dice, no reveal: the architect pool is never reachable.
    const before = pickMessage(true, false, 0, false, 0, false, dice(0.1, 0));
    expect(said(LINES.MESSAGES_ARCHITECT, 'child')).not.toContain(before);
  });

  it('swaps the finished-pool for its post-reveal version at five anchors', () => {
    const after = pickMessage(true, false, 0, false, 5, true, dice(0.9, 0.1, 0));
    expect(said(LINES.MESSAGES_MEMORY_DONE_POST, 'child')).toContain(after);
    const before = pickMessage(true, false, 0, false, 5, false, dice(0.1, 0));
    expect(said(LINES.MESSAGES_MEMORY_DONE_POST, 'child')).not.toContain(before);
  });

  it('names the Architect in the adult register', () => {
    setPerspective('adult');
    const line = pickMessage(true, false, 0, false, 0, true, dice(0.1, 3 / 6));
    expect(line).toContain('Architect');
    expect(line).not.toMatch(/[{}]/);
  });

  it('says it differently to a child', () => {
    // The same roll, the same index: two readings of one fact.
    const child = pickMessage(true, false, 0, false, 0, true, dice(0.1, 2 / 6));
    setPerspective('adult');
    const adult = pickMessage(true, false, 0, false, 0, true, dice(0.1, 2 / 6));
    expect(child).not.toBe(adult);
    expect(adult).toContain('Lamp circuits');
  });
});

describe('old behaviour', () => {
  it('still answers the five-argument call it was written with', () => {
    // orbsFound and truthRevealed default off, so an older caller is unchanged.
    const line = pickMessage(false, false, 0, false, undefined, undefined, dice(0.9, 0));
    expect(said(LINES.MESSAGES_DIMMED, 'child')).toContain(line);
  });

  it('can say the ninth carrying line in both registers', () => {
    const nine = 8 / 9;
    const child = pickMessage(true, false, 0, true, 0, false, dice(nine + 0.01));
    setPerspective('adult');
    const adult = pickMessage(true, false, 0, true, 0, false, dice(nine + 0.01));
    expect(child).toBe('every hop carries the hum');
    expect(adult).toBe('Each bounce propagates the carrier tone');
  });
});
