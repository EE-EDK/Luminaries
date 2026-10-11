/**
 * safeInset: the one way a corner-pinned control says how far it sits from an
 * edge. The numbers below are what a desktop gets (no cut-out, so env() is 0);
 * what a phone gets can only be read in a browser with a cut-out, which the
 * mobile gate emulates.
 */
import { describe, it, expect } from 'vitest';
import { safeInset } from '../dom.js';

describe('safeInset', () => {
  it('adds the edge\'s own safe-area inset to the offset', () => {
    expect(safeInset('top', 12)).toBe('calc(12px + env(safe-area-inset-top, 0px))');
    expect(safeInset('right', 64)).toBe('calc(64px + env(safe-area-inset-right, 0px))');
    expect(safeInset('bottom', 0)).toBe('calc(0px + env(safe-area-inset-bottom, 0px))');
    expect(safeInset('left', 8)).toBe('calc(8px + env(safe-area-inset-left, 0px))');
  });

  it('falls back to 0px so a browser without env() lands where the old number did', () => {
    for (const e of ['top', 'right', 'bottom', 'left']) {
      expect(safeInset(e, 10)).toMatch(/env\(safe-area-inset-\w+, 0px\)\)$/);
    }
  });

  it('refuses an edge it does not know rather than emit a declaration the browser would drop', () => {
    expect(() => safeInset('middle', 10)).toThrow(TypeError);
    expect(() => safeInset('Top', 10)).toThrow(TypeError);
    expect(() => safeInset(undefined, 10)).toThrow(TypeError);
  });

  it('refuses an offset that is not a finite number', () => {
    expect(() => safeInset('top', NaN)).toThrow(TypeError);
    expect(() => safeInset('top', '12')).toThrow(TypeError);
    expect(() => safeInset('top', Infinity)).toThrow(TypeError);
    expect(() => safeInset('top')).toThrow(TypeError);
  });
});
