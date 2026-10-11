/**
 * The single renderer.
 *
 * What this is guarding: nine call sites used to decide which voice to show
 * with `perspective === 'child' ? a : b`. That picks one half and discards the
 * other, so a player who had been shown that both readings are true still read
 * only one of them on the finale card, the orb rejection and every idle hint.
 * dualLine is the rule in one place, and these tests are the rule written down.
 */
import { describe, it, expect } from 'vitest';
import { dualLine, dualText, pairAt, speak } from '../voice.js';
import { setTouchPlatform } from '../controls.js';

const PAIR = { child: 'The {t:obelisk} Is Whole!', adult: 'Structural Alignment Complete' };

describe('dualLine before the reveal', () => {
  it('shows the chosen register and nothing else', () => {
    expect(dualLine(PAIR, { voice: 'child' }))
      .toEqual({ primary: 'The Big Crystal Is Whole!', secondary: null });
    expect(dualLine(PAIR, { voice: 'adult' }))
      .toEqual({ primary: 'Structural Alignment Complete', secondary: null });
  });

  it('defaults to the child voice rather than to nothing', () => {
    expect(dualLine(PAIR).primary).toBe('The Big Crystal Is Whole!');
    expect(dualLine(PAIR, { voice: 'banana' }).primary).toBe('The Big Crystal Is Whole!');
  });

  it('falls back to the half that exists', () => {
    // The intro's terminal cards are adult-only on purpose. A child player
    // must not get a blank line where one of them was.
    expect(dualLine({ adult: 'ARCHIVE ONLINE' }, { voice: 'child' }).primary).toBe('ARCHIVE ONLINE');
    expect(dualLine({ child: 'Hello!' }, { voice: 'adult' }).primary).toBe('Hello!');
  });
});

describe('dualLine after the reveal', () => {
  it('shows both halves, child first, each in its own register', () => {
    expect(dualLine(PAIR, { voice: 'child', truthRevealed: true }))
      .toEqual({ primary: 'The Big Crystal Is Whole!', secondary: 'Structural Alignment Complete' });
  });

  it('puts the child half first whichever register is selected', () => {
    // The reveal is not a third perspective. Both are shown in a fixed order
    // so the pair reads the same way every time it appears.
    expect(dualLine(PAIR, { voice: 'adult', truthRevealed: true }).primary)
      .toBe('The Big Crystal Is Whole!');
  });

  it('resolves each half in its own voice, not both in the reader’s', () => {
    const got = dualLine({ child: 'Find a {t:moth}', adult: 'Acquire {t:moth}' },
      { voice: 'child', truthRevealed: true });
    expect(got.primary).toBe('Find a moon moth');
    expect(got.secondary).toBe('Acquire orbital pollinator');
  });

  it('collapses identical halves to one line', () => {
    // Two copies of the same sentence reads as a rendering fault, not as a
    // second voice.
    const same = { child: 'AhhhhHHHH!', adult: 'AhhhhHHHH!' };
    expect(dualLine(same, { voice: 'child', truthRevealed: true }).secondary).toBe(null);
  });

  it('collapses halves that only differ before resolution', () => {
    const got = dualLine({ child: '{t:orb}', adult: 'Sun-Seed' }, { voice: 'child', truthRevealed: true });
    expect(got.secondary).toBe(null);
  });
});

describe('dualLine refuses what is not a pair', () => {
  it('throws, rather than rendering an empty line', () => {
    // A missing table is a content bug. It should stop the suite here, not
    // show the player a blank overlay in the finale.
    for (const bad of [null, undefined, 'a string', ['child', 'adult'], 7]) {
      expect(() => dualLine(bad), String(bad)).toThrow(/expected a \{child, adult\} pair/);
    }
  });
});

describe('speak', () => {
  it('resolves control names and story terms together', () => {
    setTouchPlatform(false);
    expect(speak('{hum} near the {t:orb|lower}', 'child')).toBe('press F near the sun-seed');
    expect(speak('{hum} near the {t:orb|lower}', 'adult')).toBe('F: carrier near the resonance anchor');
  });

  it('names the control the player actually has', () => {
    setTouchPlatform(true);
    expect(speak('{hum} to answer', 'child')).toBe('hold the HUM slider to answer');
    setTouchPlatform(false);
  });

  it('returns an empty string for nothing, rather than "undefined"', () => {
    for (const bad of [undefined, null, '', 0, {}]) expect(speak(bad, 'child')).toBe('');
  });
});

describe('dualText', () => {
  it('joins both registers for a surface that owns one text node', () => {
    expect(dualText(PAIR, { voice: 'child' })).toBe('The Big Crystal Is Whole!');
    expect(dualText(PAIR, { voice: 'child', truthRevealed: true }))
      .toBe('The Big Crystal Is Whole! – Structural Alignment Complete');
  });
});

describe('pairAt', () => {
  const C = ['c0', 'c1', 'c2'];
  const A = ['a0', 'a1'];

  it('pairs two parallel tables by position', () => {
    expect(pairAt(C, A, 1)).toEqual({ child: 'c1', adult: 'a1' });
  });

  it('yields the half that exists where the tables are different lengths', () => {
    // MESSAGES_CARRYING has nine child lines and eight adult ones. Index 2
    // here is that case: returning undefined for the missing half lets
    // dualLine fall back, where throwing would take out the whole overlay.
    expect(pairAt(C, A, 2)).toEqual({ child: 'c2', adult: undefined });
    expect(dualLine(pairAt(C, A, 2), { voice: 'adult' }).primary).toBe('c2');
  });

  it('survives a table that is not there', () => {
    expect(pairAt(undefined, A, 0)).toEqual({ child: undefined, adult: 'a0' });
  });
});
