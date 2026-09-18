/**
 * Naming the control the player actually has.
 *
 * This exists because of a real softlock: the wizard waited for a hum while
 * the prompt told a touch player to press F. A phone has no F key, so the
 * encounter could not be answered at all. The rule these tests hold is
 * blunt — no player-facing string may name a control that platform lacks.
 */
import { describe, it, expect } from 'vitest';
import { CONTROLS, controlName, humInstruction, resolveControls, platform } from '../controls.js';

/** Keys and mouse buttons a touch device does not have. */
const DESKTOP_ONLY = /\b(press |key |click|WASD|Space|Tab|Esc|[QEF]\/|[QEF]:|\b[QEF] or [QEF]\b)/i;

describe('the control table', () => {
  it('names every control on both platforms in both voices', () => {
    for (const [action, row] of Object.entries(CONTROLS)) {
      for (const plat of ['desktop', 'touch']) {
        for (const voice of ['child', 'adult']) {
          const v = row[plat][voice];
          expect(typeof v, `${action}.${plat}.${voice}`).toBe('string');
          expect(v.length, `${action}.${plat}.${voice} is empty`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('never tells a touch player to press a key', () => {
    for (const [action, row] of Object.entries(CONTROLS)) {
      for (const voice of ['child', 'adult']) {
        expect(row.touch[voice], `${action}.touch.${voice}`).not.toMatch(DESKTOP_ONLY);
      }
    }
  });

  it('gives touch and desktop genuinely different words where the input differs', () => {
    for (const action of ['hum', 'pitch', 'move', 'look']) {
      expect(CONTROLS[action].touch.child, action).not.toBe(CONTROLS[action].desktop.child);
    }
  });
});

describe('controlName', () => {
  it('answers per platform', () => {
    expect(controlName('hum', { touch: false })).toBe('press F');
    expect(controlName('hum', { touch: true })).toBe('hold the HUM slider');
  });

  it('answers per voice', () => {
    expect(controlName('pitch', { touch: false, voice: 'child' })).toBe('Q or E');
    expect(controlName('pitch', { touch: false, voice: 'adult' })).toBe('Q/E: sweep');
  });

  it('falls back to the child voice for an unknown voice', () => {
    expect(controlName('hum', { touch: false, voice: 'robot' })).toBe('press F');
  });

  it('returns an empty string for a control that does not exist', () => {
    expect(controlName('teleport', { touch: false })).toBe('');
  });
});

describe('platform', () => {
  it('takes the override when given one', () => {
    expect(platform(true)).toBe('touch');
    expect(platform(false)).toBe('desktop');
  });
});

describe('humInstruction', () => {
  it('reads as one sentence on desktop', () => {
    expect(humInstruction({ touch: false })).toBe('press F, then sweep the pitch with Q or E');
  });

  it('never says the same control twice in one breath', () => {
    // Composing it from the two controls gave "hold the HUM slider, then
    // slide the HUM slider up or down" on touch: true, and unreadable.
    for (const touch of [true, false]) {
      for (const voice of ['child', 'adult']) {
        const s = humInstruction({ touch, voice });
        const words = s.toLowerCase().match(/hum slider/g) || [];
        expect(words.length, `${voice}/${touch ? 'touch' : 'desktop'}: "${s}"`).toBeLessThan(2);
      }
    }
  });

  it('reads correctly after "sweep pitch with"', () => {
    for (const touch of [true, false]) {
      const line = resolveControls('sweep pitch with {pitch}', { touch });
      expect(line, line).not.toMatch(/with (slide|hold|press)\b/);
    }
  });

  it('names no keys on touch', () => {
    const s = humInstruction({ touch: true });
    expect(s).not.toMatch(DESKTOP_ONLY);
    expect(s).toContain('HUM slider');
  });
});

describe('resolveControls', () => {
  it('fills tokens for the platform in play', () => {
    expect(resolveControls('{hum} near friends', { touch: true }))
      .toBe('hold the HUM slider near friends');
    expect(resolveControls('{hum} near friends', { touch: false }))
      .toBe('press F near friends');
  });

  it('fills the compound hum instruction', () => {
    expect(resolveControls('{humInstruction}.', { touch: false }))
      .toBe('press F, then sweep the pitch with Q or E.');
  });

  it('fills several tokens in one line', () => {
    const out = resolveControls('{hum} then {pitch}', { touch: true });
    expect(out).toBe('hold the HUM slider then a slide up or down');
  });

  it('leaves an unknown token visible rather than blanking it', () => {
    // A stray {frobnicate} on screen in testing is worth more than a sentence
    // that quietly loses a word in front of a player.
    expect(resolveControls('do the {frobnicate}', { touch: false })).toBe('do the {frobnicate}');
  });

  it('passes ordinary strings straight through, tokens or not', () => {
    const plain = 'The grove listens.';
    expect(resolveControls(plain, { touch: true })).toBe(plain);
    expect(resolveControls('', { touch: true })).toBe('');
  });

  it('survives a non-string without throwing', () => {
    expect(resolveControls(null, {})).toBe(null);
    expect(resolveControls(undefined, {})).toBe(undefined);
    expect(resolveControls(42, {})).toBe(42);
  });
});
