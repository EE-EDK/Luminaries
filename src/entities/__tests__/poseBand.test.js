/**
 * Pose band — which creatures get a rig pose write.
 *
 * The risk in a cap like this is not a crash. It is the wrong creatures being
 * frozen (the far ones animated and the near ones held), a band that flickers
 * at its edge so a deer's legs stutter, or a limit that quietly lets everyone
 * in. Each test below reads the outcome - the membership - not the code that
 * decides it.
 */
import { describe, it, expect, vi } from 'vitest';
// adaptiveQuality imports the bloom pass, which builds a WebGLRenderer; none of it is under test here.
vi.mock('../../core/postprocessing.js', () => ({ bloomPass: { strength: 0.6 }, bloomEnabled: true }));

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  POSE_STICKY, POSE_BAND_N, createPoseBand, poseBandBegin, poseBandOffer, poseBandEnd, poseBandHas,
  poseBands, setPoseBandScale, getPoseBandScale, getPoseBandReport
} from '../_poseBand.js';
import {
  poseBandScaleFor, stepQuality, makeQualityState, MAX_NOTCH, getQualityReport,
  updateAdaptiveQuality, setQualityFloor, getQualityNotch
} from '../../systems/adaptiveQuality.js';

/** One frame: every creature offered at its squared distance, then end. */
function frame(band, crowd, d2of) {
  poseBandBegin(band);
  for (let i = 0; i < crowd.length; i++) poseBandOffer(band, crowd[i], d2of(crowd[i], i));
  poseBandEnd(band);
}
/** Creatures kept by the selection that just ended (what the NEXT frame's Has will say yes to). */
const members = (band, crowd) => crowd.filter((c) => c._pbFrame === band.frame);
const lcg = (s) => () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);

describe('selection', () => {
  it('keeps exactly the N nearest, whatever order they are offered in', () => {
    const rnd = lcg(7);
    for (let trial = 0; trial < 50; trial++) {
      const n = 3 + Math.floor(rnd() * 5);
      const crowd = Array.from({ length: 30 }, () => ({ d2: 1 + rnd() * 3600 }));
      const band = createPoseBand(n);
      poseBandBegin(band);
      for (const c of crowd) poseBandOffer(band, c, c.d2);
      poseBandEnd(band);
      const want = [...crowd].sort((a, b) => a.d2 - b.d2).slice(0, n);
      const got = members(band, crowd);
      expect(got.length).toBe(n);
      expect(new Set(got)).toEqual(new Set(want));
    }
  });

  it('a crowd smaller than the cap is kept whole', () => {
    const band = createPoseBand(8);
    const crowd = [{ d2: 9 }, { d2: 400 }, { d2: 3000 }];
    poseBandBegin(band);
    for (const c of crowd) poseBandOffer(band, c, c.d2);
    poseBandEnd(band);
    expect(members(band, crowd).length).toBe(3);
  });

  it('the cap is strict: never more than the limit, however many are offered', () => {
    const band = createPoseBand(5);
    const crowd = Array.from({ length: 200 }, (_, i) => ({ d2: 100 + (i * 37) % 997 }));
    for (let f = 0; f < 10; f++) {
      poseBandBegin(band);
      for (const c of crowd) poseBandOffer(band, c, c.d2);
      expect(band.n).toBeLessThanOrEqual(5);
      poseBandEnd(band);
      expect(members(band, crowd).length).toBeLessThanOrEqual(5);
    }
  });

  it('a creature that stops being offered (culled) leaves the band, and its slot goes to the next nearest', () => {
    const band = createPoseBand(2);
    const a = { d2: 10 }, b = { d2: 20 }, c = { d2: 30 };
    for (let f = 0; f < 3; f++) { poseBandBegin(band); [a, b, c].forEach((x) => poseBandOffer(band, x, x.d2)); poseBandEnd(band); }
    expect(members(band, [a, b, c])).toEqual([a, b]);
    poseBandBegin(band); poseBandOffer(band, b, b.d2); poseBandOffer(band, c, c.d2); poseBandEnd(band);   // a is culled
    expect(members(band, [a, b, c])).toEqual([b, c]);
  });

  it('drops its references at the end of a frame (nothing retained)', () => {
    const band = createPoseBand(4);
    poseBandBegin(band);
    poseBandOffer(band, { d2: 1 }, 1);
    poseBandOffer(band, { d2: 2 }, 2);
    poseBandEnd(band);
    expect(band.who.every((w) => w === null)).toBe(true);
  });

  it('Has is what the update loop reads: true for last frame\'s members only, false for a creature never seen', () => {
    const band = createPoseBand(1);
    const near = { d2: 4 }, far = { d2: 400 };
    expect(poseBandHas(band, near)).toBe(false);
    poseBandBegin(band); poseBandOffer(band, near, 4); poseBandOffer(band, far, 400); poseBandEnd(band);
    poseBandBegin(band);     // the next frame, as the loop sees it
    expect(poseBandHas(band, near)).toBe(true);
    expect(poseBandHas(band, far)).toBe(false);
  });
});

describe('hysteresis', () => {
  it('two creatures at nearly equal distances do not swap places as they jitter', () => {
    const band = createPoseBand(1);
    const A = { name: 'A' }, B = { name: 'B' };
    let swaps = 0, last = null;
    const rnd = lcg(3);
    for (let f = 0; f < 600; f++) {
      const dA = 400 * (1 + (rnd() - 0.5) * 0.10), dB = 400 * (1 + (rnd() - 0.5) * 0.10);   // +/-5% of the distance squared
      poseBandBegin(band); poseBandOffer(band, A, dA); poseBandOffer(band, B, dB); poseBandEnd(band);
      const m = members(band, [A, B])[0];
      if (last && m !== last) swaps++;
      last = m;
    }
    expect(swaps).toBe(0);
  });

  it('a rival that is clearly nearer does take the place, and the creature it displaced cannot take it back at the same distances', () => {
    const band = createPoseBand(1);
    const A = {}, B = {};
    for (let f = 0; f < 3; f++) { poseBandBegin(band); poseBandOffer(band, A, 400); poseBandOffer(band, B, 900); poseBandEnd(band); }
    expect(members(band, [A, B])).toEqual([A]);
    // B comes much nearer than A: key 100 < A's sticky 400 * 0.7
    poseBandBegin(band); poseBandOffer(band, A, 400); poseBandOffer(band, B, 100); poseBandEnd(band);
    expect(members(band, [A, B])).toEqual([B]);
    // Same distances, many frames: B stays
    for (let f = 0; f < 20; f++) { poseBandBegin(band); poseBandOffer(band, A, 400); poseBandOffer(band, B, 100); poseBandEnd(band); }
    expect(members(band, [A, B])).toEqual([B]);
    // And A, now at nearly B's distance, still does not take it back
    for (let f = 0; f < 20; f++) { poseBandBegin(band); poseBandOffer(band, A, 110); poseBandOffer(band, B, 100); poseBandEnd(band); }
    expect(members(band, [A, B])).toEqual([B]);
  });

  it('a slow approach across the boundary changes membership once, not repeatedly', () => {
    const band = createPoseBand(3);
    const fixed = [{}, {}, {}];
    const walker = {};
    let changes = 0, was = false;
    for (let f = 0; f < 400; f++) {
      const wd = 60 - f * 0.1;      // metres: from 60 down to 20, past the fixed ones at 25, 30, 35
      poseBandBegin(band);
      poseBandOffer(band, fixed[0], 625); poseBandOffer(band, fixed[1], 900); poseBandOffer(band, fixed[2], 1225);
      poseBandOffer(band, walker, wd * wd);
      poseBandEnd(band);
      const inNow = walker._pbFrame === band.frame;
      if (inNow !== was) changes++;
      was = inNow;
    }
    expect(changes).toBe(1);
  });

  it('the sticky factor is a real discount, not a no-op (the pinned value)', () => {
    expect(POSE_STICKY).toBeGreaterThan(0.3);
    expect(POSE_STICKY).toBeLessThan(0.95);
  });
});

describe('limits and the quality hook', () => {
  it('the per-type caps sit between "never bites" and "no cap": above a normal view, below the population', () => {
    expect(POSE_BAND_N.deer).toBeGreaterThanOrEqual(6);
    expect(POSE_BAND_N.deer).toBeLessThan(12);
    expect(POSE_BAND_N.moth).toBeGreaterThanOrEqual(10);
    expect(POSE_BAND_N.moth).toBeLessThan(35);
    expect(POSE_BAND_N.puff).toBeGreaterThanOrEqual(10);
    expect(POSE_BAND_N.puff).toBeLessThan(35);
    for (const k of ['deer', 'moth', 'puff']) expect(poseBands[k].capacity).toBe(POSE_BAND_N[k]);
  });

  it('setPoseBandScale shrinks every band, rounds, never below one or above capacity, and restores', () => {
    try {
      setPoseBandScale(0.5);
      for (const k of ['deer', 'moth', 'puff']) expect(poseBands[k].limit).toBe(Math.floor(poseBands[k].capacity * 0.5 + 0.5));
      setPoseBandScale(0.01);
      for (const k of ['deer', 'moth', 'puff']) expect(poseBands[k].limit).toBe(1);
      setPoseBandScale(7);
      for (const k of ['deer', 'moth', 'puff']) expect(poseBands[k].limit).toBe(poseBands[k].capacity);
      setPoseBandScale(NaN);
      expect(getPoseBandScale()).toBe(1);
    } finally { setPoseBandScale(1); }
    for (const k of ['deer', 'moth', 'puff']) expect(poseBands[k].limit).toBe(poseBands[k].capacity);
  });

  it('a lowered limit is honoured by the very next selection', () => {
    const band = createPoseBand(6);
    const crowd = Array.from({ length: 10 }, (_, i) => ({ d2: (i + 1) * 10 }));
    frame(band, crowd, (c) => c.d2);
    expect(members(band, crowd).length).toBe(6);
    band.limit = 2;
    frame(band, crowd, (c) => c.d2);
    expect(members(band, crowd)).toEqual(crowd.slice(0, 2));
  });

  it('the scaler asks for a smaller band only at the notches that already thin the world', () => {
    expect(poseBandScaleFor(0)).toBe(1);
    expect(poseBandScaleFor(1)).toBe(1);
    expect(poseBandScaleFor(2)).toBe(1);
    expect(poseBandScaleFor(3)).toBeLessThan(1);
    expect(poseBandScaleFor(MAX_NOTCH)).toBeLessThan(poseBandScaleFor(3));
    expect(poseBandScaleFor(MAX_NOTCH)).toBeGreaterThan(0);
    // out-of-range notches clamp, like every other knob
    expect(poseBandScaleFor(99)).toBe(poseBandScaleFor(MAX_NOTCH));
    expect(poseBandScaleFor(NaN)).toBe(1);
  });

  it('the debug report carries the live band state', () => {
    const r = getQualityReport();
    expect(r.poseBandScale).toBe(poseBandScaleFor(r.notch));
    expect(r.poseBand.deer.limit).toBe(getPoseBandReport().deer.limit);
    expect(Object.keys(r.poseBand).sort()).toEqual(['deer', 'moth', 'puff', 'scale']);
  });

  it('stepping the notch machine to the floor is what drives the scale (state machine unchanged)', () => {
    const st = makeQualityState();
    for (let i = 0; i < 20; i++) stepQuality(st, 5, 1.0);
    expect(st.notch).toBe(MAX_NOTCH);
    expect(poseBandScaleFor(st.notch)).toBeLessThan(1);
  });
});

describe('the live scaler drives the bands', () => {
  it('a sustained frame-rate sag walks the notch to the floor and halves every band; lifting the cap restores them', () => {
    try {
      for (let i = 0; i < 400; i++) updateAdaptiveQuality(0.2);     // 5 fps
      expect(getQualityNotch()).toBe(MAX_NOTCH);
      expect(getPoseBandScale()).toBe(poseBandScaleFor(MAX_NOTCH));
      for (const k of ['deer', 'moth', 'puff']) {
        expect(poseBands[k].limit).toBe(Math.max(1, Math.floor(poseBands[k].capacity * poseBandScaleFor(MAX_NOTCH) + 0.5)));
        expect(poseBands[k].limit).toBeLessThan(poseBands[k].capacity);
      }
    } finally {
      setQualityFloor(0);           // a player who raises the floor sees it at once
    }
    expect(getQualityNotch()).toBe(0);
    expect(getPoseBandScale()).toBe(1);
    for (const k of ['deer', 'moth', 'puff']) expect(poseBands[k].limit).toBe(poseBands[k].capacity);
    setQualityFloor(MAX_NOTCH);
  });
});

describe('allocation', () => {
  const ALLOC = /\bnew\s+[A-Z]|=\s*\[|\(\s*\[|return\s*\[|,\s*\[[^\]]*\]\s*[,)]|\.map\(|\.filter\(|\.slice\(|\.\.\.[a-zA-Z_]|Array\.from|\{\s*[a-z]+\s*:|=>/;
  function bodyOf(signature) {
    const src = readFileSync(fileURLToPath(new URL('../_poseBand.js', import.meta.url)), 'utf8');
    const start = src.indexOf(signature);
    expect(start, `${signature} not found`).toBeGreaterThan(-1);
    let i = src.indexOf('{', start), depth = 0, end = i;
    for (; end < src.length; end++) {
      if (src[end] === '{') depth++;
      else if (src[end] === '}' && --depth === 0) break;
    }
    return src.slice(start, end + 1);
  }
  it('Begin, Offer, End and Has allocate nothing (source scan)', () => {
    for (const sig of ['export function poseBandBegin', 'export function poseBandOffer', 'export function poseBandEnd', 'export function poseBandHas']) {
      const hit = ALLOC.exec(bodyOf(sig));
      expect(hit, `${sig} allocates: ${hit && hit[0]}`).toBeNull();
    }
  });
  it('and 200,000 offers do not grow the heap in a way a leak would (references are cleared, buffers are fixed)', () => {
    const band = createPoseBand(8);
    const crowd = Array.from({ length: 40 }, (_, i) => ({ d2: 50 + i * 13 }));
    const keys = band.keys, who = band.who;
    for (let f = 0; f < 5000; f++) {
      poseBandBegin(band);
      for (let i = 0; i < crowd.length; i++) poseBandOffer(band, crowd[i], crowd[i].d2 + (f & 7));
      poseBandEnd(band);
    }
    expect(band.keys).toBe(keys);
    expect(band.who).toBe(who);
    expect(band.who.length).toBe(8);
    expect(band.who.every((w) => w === null)).toBe(true);
  });
});
