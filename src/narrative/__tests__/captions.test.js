/**
 * Sound captions: the words for a creature call, with the side it came from.
 * The table is {child, adult} pairs with glossary tokens, so these tests check
 * that every token resolves, that the side words follow the listener and not
 * the world, and that the gate keeps a chatty creature from flooding the line.
 */
import { describe, it, expect } from 'vitest';
import {
  CAPTION_VERBS, CAPTION_SIDES, CAPTION_ARROWS, CAPTION_RANGE_D2, CAPTION_COOLDOWN_S,
  captionPair, captionFor, captionGate,
} from '../captions.js';
import { resolveTerms } from '../glossary.js';
import { defaultSettings } from '../../state/settingsState.js';

describe('captionFor', () => {
  it('says left and right the way the listener sees them', () => {
    expect(captionFor('puff', -10, 0, 0).side).toBe('left');
    expect(captionFor('puff', 10, 0, 0).side).toBe('right');
    expect(captionFor('puff', -10, 0, 0).pair.child).toContain('on your left');
    expect(captionFor('puff', 10, 0, 0).pair.child).toContain('on your right');
    expect(captionFor('puff', -10, 0, 0).pair.adult).toContain('bearing left');
    expect(captionFor('puff', 10, 0, 0).pair.adult).toContain('bearing right');
  });

  it('flips with the listener: the same sound is on the other side after a half turn', () => {
    expect(captionFor('deer', 10, 0, 0).side).toBe('right');
    expect(captionFor('deer', 10, 0, Math.PI).side).toBe('left');
  });

  it('carries an arrow that matches the side', () => {
    expect(captionFor('moth', -10, 0, 0).arrow).toBe('◀');
    expect(captionFor('moth', 10, 0, 0).arrow).toBe('▶');
    expect(captionFor('moth', 0, -10, 0).arrow).toBe('▲');
    expect(captionFor('moth', 0, 10, 0).arrow).toBe('▼');
  });

  it('returns null for a creature with no caption', () => {
    expect(captionFor('luminid', 5, 5, 0)).toBeNull();
    expect(captionPair('puff', 'sideways')).toBeNull();
  });
});

describe('the caption table', () => {
  it('every verb and side line is a {child, adult} pair', () => {
    for (const t of Object.values({ ...CAPTION_VERBS, ...CAPTION_SIDES })) {
      expect(typeof t.child).toBe('string');
      expect(typeof t.adult).toBe('string');
      expect(t.child.length).toBeGreaterThan(0);
      expect(t.adult.length).toBeGreaterThan(0);
    }
  });

  it('every glossary token in every caption resolves, in both voices', () => {
    for (const type of Object.keys(CAPTION_VERBS)) {
      for (const side of Object.keys(CAPTION_SIDES)) {
        const p = captionPair(type, side);
        for (const voice of ['child', 'adult']) {
          const out = resolveTerms(p[voice], voice);
          expect(out, `${type}/${side}/${voice}`).not.toMatch(/\{t:/);
          expect(out).not.toMatch(/undefined/);
        }
      }
    }
  });

  it('has an arrow for every side', () => {
    for (const side of Object.keys(CAPTION_SIDES)) expect(CAPTION_ARROWS[side]).toBeTruthy();
  });
});

describe('captionGate', () => {
  it('lets a first call in range through, and not one beyond audible range', () => {
    expect(captionGate({}, 'puff', 0, 100)).toBe(true);
    expect(captionGate({}, 'puff', 0, CAPTION_RANGE_D2 + 1)).toBe(false);
    expect(captionGate({}, 'puff', 0, CAPTION_RANGE_D2)).toBe(true);
  });

  it('holds a creature type for the cooldown, then lets it through again', () => {
    const last = {};
    expect(captionGate(last, 'deer', 10, 4)).toBe(true);
    expect(captionGate(last, 'deer', 10 + CAPTION_COOLDOWN_S - 0.1, 4)).toBe(false);
    expect(captionGate(last, 'deer', 10 + CAPTION_COOLDOWN_S, 4)).toBe(true);
  });

  it('cools down per type, not globally', () => {
    const last = {};
    expect(captionGate(last, 'deer', 5, 4)).toBe(true);
    expect(captionGate(last, 'moth', 5.1, 4)).toBe(true);
  });

  it('does not start the cooldown for a call that was out of range', () => {
    const last = {};
    expect(captionGate(last, 'deer', 5, CAPTION_RANGE_D2 + 100)).toBe(false);
    expect(captionGate(last, 'deer', 5.1, 4)).toBe(true);
  });

  it('refuses a type with no caption', () => {
    expect(captionGate({}, 'luminid', 0, 4)).toBe(false);
  });
});

describe('the setting', () => {
  it('sound captions are off by default', () => {
    expect(defaultSettings().soundCaptions).toBe(false);
  });
});
