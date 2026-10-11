/**
 * The five fragments: derived, queued, shown once, and silent on a restore.
 *
 * What these guard: a fragment is the rarest line in the game, so it must
 * arrive exactly once per rune, in order, without cutting off another line;
 * the count of how many a player has seen must come from their orbs and from
 * nothing else; and the sixth line must come after the fifth and only then.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FRAGMENTS, FRAGMENT_ASSEMBLY, CONSTELLATION_NAMES } from '../../narrative/lines.js';
import { ORB_N } from '../../constants.js';

const display = vi.hoisted(() => ({ busy: false, shown: [] }));

vi.mock('../discoveries.js', () => ({
  showNarrativePair: (set, sec) => { display.shown.push({ set, sec }); },
  isNarrativeBusy: () => display.busy,
}));

import {
  fragmentsRevealed, queueReveal, updateFragments, resetFragments, pendingFragmentLines,
} from '../fragments.js';

/** Let the queue run to empty at a calm 0.5 s cadence. */
function drain(maxSteps = 200) {
  for (let i = 0; i < maxSteps && pendingFragmentLines() > 0; i++) updateFragments(0.5);
}

beforeEach(() => {
  resetFragments();
  display.busy = false;
  display.shown.length = 0;
});

describe('fragmentsRevealed', () => {
  it('is the orb count, clamped to the five there are', () => {
    expect([0, 1, 2, 3, 4, 5].map(fragmentsRevealed)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(fragmentsRevealed(9)).toBe(ORB_N);
    expect(fragmentsRevealed(-2)).toBe(0);
    expect(fragmentsRevealed(NaN)).toBe(0);
  });
});

describe('queueReveal', () => {
  it('shows the name and then the fragment for a rune', () => {
    queueReveal(0, CONSTELLATION_NAMES[0]);
    drain();
    expect(display.shown.map((s) => s.set)).toEqual([CONSTELLATION_NAMES[0], FRAGMENTS[0]]);
  });

  it('shows each of the five fragments exactly once across a full run', () => {
    for (let i = 0; i < ORB_N; i++) queueReveal(i, CONSTELLATION_NAMES[i]);
    drain();
    for (const f of FRAGMENTS) {
      expect(display.shown.filter((s) => s.set === f), f.adult).toHaveLength(1);
    }
  });

  it('adds the joining line after the fifth fragment and not before', () => {
    for (let i = 0; i < ORB_N - 1; i++) queueReveal(i);
    drain();
    expect(display.shown.some((s) => s.set === FRAGMENT_ASSEMBLY)).toBe(false);

    queueReveal(ORB_N - 1);
    drain();
    const order = display.shown.map((s) => s.set);
    expect(order.at(-1)).toBe(FRAGMENT_ASSEMBLY);
    expect(order.at(-2)).toBe(FRAGMENTS[ORB_N - 1]);
    expect(order.filter((s) => s === FRAGMENT_ASSEMBLY)).toHaveLength(1);
  });

  it('ignores a rune that does not exist', () => {
    queueReveal(-1);
    queueReveal(ORB_N);
    queueReveal(NaN);
    expect(pendingFragmentLines()).toBe(0);
  });

  it('gives the joining line the longest dwell and the name the shortest', () => {
    queueReveal(ORB_N - 1, CONSTELLATION_NAMES[ORB_N - 1]);
    drain();
    const [name, fragment, assembly] = display.shown;
    expect(name.sec).toBeLessThan(fragment.sec);
    expect(assembly.sec).toBeGreaterThan(fragment.sec);
  });
});

describe('waiting its turn', () => {
  it('does not show anything while another line is on screen', () => {
    display.busy = true;
    queueReveal(1);
    for (let i = 0; i < 40; i++) updateFragments(0.5);
    expect(display.shown).toHaveLength(0);
    expect(pendingFragmentLines()).toBe(1);

    display.busy = false;
    drain();
    expect(display.shown.map((s) => s.set)).toEqual([FRAGMENTS[1]]);
  });

  it('does not show a line the instant the screen frees', () => {
    queueReveal(2);
    updateFragments(0.1);
    expect(display.shown).toHaveLength(0);   // a breath first
    updateFragments(1.0);
    expect(display.shown).toHaveLength(1);
  });

  it('shows one line per free screen, not the whole queue at once', () => {
    queueReveal(3, CONSTELLATION_NAMES[3]);
    updateFragments(5);
    expect(display.shown).toHaveLength(1);
  });
});

describe('resetFragments', () => {
  it('drops everything still waiting, so a new run starts clean', () => {
    queueReveal(0, CONSTELLATION_NAMES[0]);
    resetFragments();
    drain();
    expect(display.shown).toHaveLength(0);
  });
});
