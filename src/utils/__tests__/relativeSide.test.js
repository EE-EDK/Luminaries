/**
 * relativeSide is what the sound captions say "left" and "right" with, for a
 * player who cannot hear the panner say it. It has to agree with the camera:
 * yaw 0 faces -z, and W takes you the way the caption says "ahead".
 */
import { describe, it, expect } from 'vitest';
import { relativeSide, CENTRE_BAND } from '../math.js';
import { isTypingTarget } from '../dom.js';

describe('relativeSide', () => {
  it('at yaw 0 the player faces -z: +x is right, -x is left, -z is ahead, +z is behind', () => {
    expect(relativeSide(10, 0, 0)).toBe('right');
    expect(relativeSide(-10, 0, 0)).toBe('left');
    expect(relativeSide(0, -10, 0)).toBe('ahead');
    expect(relativeSide(0, 10, 0)).toBe('behind');
  });

  it('turning the listener turns the answer: facing +x (yaw = -pi/2), a sound at -z is on the left', () => {
    // forward = (-sin yaw, -cos yaw); yaw = -pi/2 gives forward (1, 0).
    const yaw = -Math.PI / 2;
    expect(relativeSide(10, 0, yaw)).toBe('ahead');
    expect(relativeSide(0, -10, yaw)).toBe('left');
    expect(relativeSide(0, 10, yaw)).toBe('right');
    expect(relativeSide(-10, 0, yaw)).toBe('behind');
  });

  it('agrees with where W would walk: a sound along forward is always ahead', () => {
    for (let k = 0; k < 16; k++) {
      const yaw = (k / 16) * Math.PI * 2;
      expect(relativeSide(-Math.sin(yaw) * 12, -Math.cos(yaw) * 12, yaw)).toBe('ahead');
      expect(relativeSide(Math.cos(yaw) * 12, -Math.sin(yaw) * 12, yaw)).toBe('right');
    }
  });

  it('calls a sound on top of the listener "here" and never NaN', () => {
    expect(relativeSide(0, 0, 1.2)).toBe('here');
    expect(relativeSide(1e-5, 0, 0)).toBe('here');
  });

  it('keeps a narrow band straight ahead/behind and calls the rest a side', () => {
    const edge = Math.atan(CENTRE_BAND);               // just inside the band
    expect(relativeSide(Math.sin(edge * 0.9) * 10, -Math.cos(edge * 0.9) * 10, 0)).toBe('ahead');
    expect(relativeSide(Math.sin(edge * 1.2) * 10, -Math.cos(edge * 1.2) * 10, 0)).toBe('right');
    expect(relativeSide(-Math.sin(edge * 1.2) * 10, -Math.cos(edge * 1.2) * 10, 0)).toBe('left');
  });

  it('does not depend on how far away the sound is', () => {
    expect(relativeSide(3, -1, 0)).toBe(relativeSide(300, -100, 0));
  });
});

describe('isTypingTarget', () => {
  it('is true for fields people type in', () => {
    expect(isTypingTarget({ tagName: 'INPUT' })).toBe(true);
    expect(isTypingTarget({ tagName: 'textarea' })).toBe(true);
    expect(isTypingTarget({ tagName: 'SELECT' })).toBe(true);
    expect(isTypingTarget({ tagName: 'DIV', isContentEditable: true })).toBe(true);
  });

  it('is false for everything else, including nothing', () => {
    expect(isTypingTarget({ tagName: 'BODY' })).toBe(false);
    expect(isTypingTarget({ tagName: 'CANVAS' })).toBe(false);
    expect(isTypingTarget(null)).toBe(false);
    expect(isTypingTarget(undefined)).toBe(false);
    expect(isTypingTarget({})).toBe(false);
  });
});
