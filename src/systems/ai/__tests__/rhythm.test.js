/**
 * The forest's daily agreement.
 *
 * This module exists so four creature files cannot disagree about what dawn
 * means. The tests are mostly about that: every species' decision is driven
 * across the whole cycle and every weather state, and the ordering between
 * them has to hold — a deer heads for cover before a moth gives up flying,
 * because a moth that lands is stuck there.
 */
import { describe, it, expect } from 'vitest';
import {
  PHASES, isPhase, shelterUrgency, deerWantsCover, mothWantsGround,
  pufflingWantsHome, jellyWantsDepth, restBias, grazeBias, mothPatrolChance,
  noticesLight, LOOK_HOLD_S, mothRestRate,
} from '../rhythm.js';

const CLEAR = [false, 0];
const SPIT = [false, 0.1];
const LIGHT = [false, 0.3];
const HEAVY = [false, 0.8];
const STORM = [true, 0.6];

describe('phases', () => {
  it('knows the four the clock produces and nothing else', () => {
    expect(PHASES).toEqual(['DUSK', 'NIGHT', 'DEEP_NIGHT', 'DAWN']);
    for (const p of PHASES) expect(isPhase(p), p).toBe(true);
    for (const p of ['NOON', 'dawn', '', null, undefined, 'MIDNIGHT']) {
      expect(isPhase(p), String(p)).toBe(false);
    }
  });
});

describe('shelterUrgency', () => {
  it('rises with the rain', () => {
    const night = (w) => shelterUrgency('NIGHT', w[0], w[1]);
    expect(night(CLEAR)).toBe(0);
    expect(night(SPIT)).toBeGreaterThan(night(CLEAR));
    expect(night(LIGHT)).toBeGreaterThan(night(SPIT));
    expect(night(HEAVY)).toBeGreaterThan(night(LIGHT));
  });

  it('puts a storm above any amount of plain rain', () => {
    expect(shelterUrgency('NIGHT', true, 0)).toBeGreaterThan(shelterUrgency('NIGHT', false, 1));
  });

  it('treats dawn as a reason to hide even in clear weather', () => {
    expect(shelterUrgency('DAWN', false, 0)).toBeGreaterThan(0.5);
    expect(shelterUrgency('NIGHT', false, 0)).toBe(0);
  });

  it('never lets dawn lower an urgency the weather already raised', () => {
    // max(), not assignment: a storm at dawn must not read as calmer than a
    // storm at night.
    for (const w of [CLEAR, SPIT, LIGHT, HEAVY, STORM]) {
      expect(shelterUrgency('DAWN', w[0], w[1]), JSON.stringify(w))
        .toBeGreaterThanOrEqual(shelterUrgency('NIGHT', w[0], w[1]));
    }
  });

  it('stays inside 0 and 1 for anything it is handed', () => {
    for (const p of [...PHASES, 'NONSENSE', null]) {
      for (const r of [-5, 0, 0.5, 1, 99, NaN, undefined, null]) {
        const u = shelterUrgency(p, false, r);
        expect(u, `${p}/${r}`).toBeGreaterThanOrEqual(0);
        expect(u, `${p}/${r}`).toBeLessThanOrEqual(1);
      }
    }
  });
});

describe('who hides when', () => {
  it('sends deer for cover at dawn and in heavy rain, not in a drizzle', () => {
    expect(deerWantsCover('DAWN', ...CLEAR)).toBe(true);
    expect(deerWantsCover('NIGHT', ...HEAVY)).toBe(true);
    expect(deerWantsCover('NIGHT', ...STORM)).toBe(true);
    expect(deerWantsCover('NIGHT', ...SPIT)).toBe(false);
    expect(deerWantsCover('NIGHT', ...CLEAR)).toBe(false);
  });

  it('grounds moths only when it is genuinely wet', () => {
    expect(mothWantsGround('NIGHT', ...HEAVY)).toBe(true);
    expect(mothWantsGround('NIGHT', ...STORM)).toBe(true);
    expect(mothWantsGround('NIGHT', ...LIGHT)).toBe(false);
  });

  it('puts deer under cover before it grounds the moths', () => {
    // A moth that lands is committed; a deer that shelters can walk out again.
    // So the moth's threshold must be the stricter one, in every weather.
    for (const w of [CLEAR, SPIT, LIGHT, HEAVY, STORM]) {
      for (const p of PHASES) {
        if (mothWantsGround(p, w[0], w[1])) {
          expect(deerWantsCover(p, w[0], w[1]), `${p}/${JSON.stringify(w)}`).toBe(true);
        }
      }
    }
  });

  it('sends pufflings home at dusk regardless of the sky', () => {
    expect(pufflingWantsHome('DUSK', ...CLEAR)).toBe(true);
    expect(pufflingWantsHome('DUSK', ...STORM)).toBe(true);
  });

  it('keeps pufflings out on a clear night', () => {
    expect(pufflingWantsHome('NIGHT', ...CLEAR)).toBe(false);
    expect(pufflingWantsHome('DEEP_NIGHT', ...CLEAR)).toBe(false);
  });

  it('sends pufflings home in heavy weather at any hour', () => {
    for (const p of PHASES) expect(pufflingWantsHome(p, ...STORM), p).toBe(true);
  });
});

describe('jellyWantsDepth', () => {
  it('stays level on a clear night', () => {
    expect(jellyWantsDepth('NIGHT', ...CLEAR)).toBe(0);
  });

  it('sinks further the worse it gets', () => {
    const d = (w) => jellyWantsDepth('NIGHT', w[0], w[1]);
    expect(d(LIGHT)).toBeGreaterThan(0);
    expect(d(HEAVY)).toBeGreaterThan(d(LIGHT));
    expect(d(STORM)).toBeGreaterThanOrEqual(d(HEAVY));
  });

  it('sinks at dawn', () => {
    expect(jellyWantsDepth('DAWN', ...CLEAR)).toBeGreaterThan(0);
  });

  it('never sinks far enough to clip the ground', () => {
    for (const p of PHASES) {
      for (const r of [0, 0.5, 1, 99, NaN]) {
        const d = jellyWantsDepth(p, true, r);
        expect(d, `${p}/${r}`).toBeLessThanOrEqual(2.5);
        expect(d, `${p}/${r}`).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('ignores a drizzle rather than twitching on it', () => {
    expect(jellyWantsDepth('NIGHT', ...SPIT)).toBe(0);
  });
});

describe('deer biases', () => {
  it('rests most in deep night', () => {
    expect(restBias('DEEP_NIGHT')).toBeGreaterThan(restBias('NIGHT'));
    expect(restBias('DEEP_NIGHT')).toBeGreaterThan(restBias('DUSK'));
  });

  it('grazes most at dusk', () => {
    expect(grazeBias('DUSK')).toBeGreaterThan(grazeBias('NIGHT'));
  });

  it('keeps every bias a usable probability', () => {
    for (const p of [...PHASES, 'NONSENSE']) {
      for (const f of [restBias, grazeBias]) {
        const v = f(p);
        expect(v, `${f.name}(${p})`).toBeGreaterThan(0);
        expect(v, `${f.name}(${p})`).toBeLessThan(1);
      }
    }
  });
});

describe('mothPatrolChance', () => {
  it('is zero at dawn — nothing patrols through sunrise', () => {
    expect(mothPatrolChance('DAWN', ...CLEAR)).toBe(0);
  });

  it('is full on a clear night', () => {
    expect(mothPatrolChance('NIGHT', ...CLEAR)).toBe(1);
  });

  it('falls off with rain and reaches zero before the rain does', () => {
    expect(mothPatrolChance('NIGHT', ...LIGHT)).toBeLessThan(1);
    expect(mothPatrolChance('NIGHT', ...HEAVY)).toBe(0);
  });

  it('is zero whenever the moths want the ground — the two cannot disagree', () => {
    for (const w of [CLEAR, SPIT, LIGHT, HEAVY, STORM]) {
      for (const p of PHASES) {
        if (mothWantsGround(p, w[0], w[1])) {
          expect(mothPatrolChance(p, w[0], w[1]), `${p}/${JSON.stringify(w)}`).toBe(0);
        }
      }
    }
  });

  it('stays a probability', () => {
    for (const p of [...PHASES, 'NONSENSE']) {
      for (const r of [-1, 0, 0.5, 1, 99, NaN]) {
        const v = mothPatrolChance(p, false, r);
        expect(v, `${p}/${r}`).toBeGreaterThanOrEqual(0);
        expect(v, `${p}/${r}`).toBeLessThanOrEqual(1);
      }
    }
  });
});

describe('noticesLight', () => {
  it('needs the light bright AND close', () => {
    expect(noticesLight(0.9, 4)).toBe(true);
    expect(noticesLight(0.9, 400)).toBe(false);     // bright but far: scenery
    expect(noticesLight(0.2, 4)).toBe(false);       // close but dim
  });

  it('respects a caller own radius and threshold', () => {
    expect(noticesLight(0.65, 100, 144)).toBe(true);
    expect(noticesLight(0.65, 100, 36)).toBe(false);
    expect(noticesLight(0.5, 4, 36, 0.4)).toBe(true);
  });

  it('refuses nonsense rather than treating it as a yes', () => {
    for (const [l, d] of [[NaN, 4], [0.9, NaN], [undefined, 4], [0.9, -1], [null, null]]) {
      expect(noticesLight(l, d), `${l}/${d}`).toBe(false);
    }
  });

  it('holds the look long enough to be seen', () => {
    expect(LOOK_HOLD_S).toBeGreaterThan(0.3);
    expect(LOOK_HOLD_S).toBeLessThan(3);
  });
});

describe('mothRestRate', () => {
  it('is a rate per second, so callers can scale it by dt', () => {
    // The original was a flat per-frame chance, which made the behaviour six
    // times faster at 60 fps than at 10. Every value here is per second.
    for (const p of PHASES) {
      const r = mothRestRate(p, false, 0);
      expect(r, p).toBeGreaterThan(0);
      expect(r, p).toBeLessThanOrEqual(10);
    }
  });

  it('settles a moth within a few seconds of dawn', () => {
    const r = mothRestRate('DAWN', false, 0);
    expect(r).toBeGreaterThan(0.2);          // not a lottery
    expect(1 / r).toBeLessThan(10);          // mean wait under ten seconds
  });

  it('is effectively immediate once the moths want the ground', () => {
    for (const w of [[false, 0.8], [true, 0.6]]) {
      expect(mothRestRate('NIGHT', w[0], w[1]) * 0.1, JSON.stringify(w))
        .toBeGreaterThan(0.5);               // better than even odds in one 100 ms frame
    }
  });

  it('is lowest in deep night, when moths are most active', () => {
    const deep = mothRestRate('DEEP_NIGHT', false, 0);
    for (const p of ['DUSK', 'NIGHT', 'DAWN']) {
      expect(mothRestRate(p, false, 0), p).toBeGreaterThan(deep);
    }
  });

  it('rises with rain', () => {
    expect(mothRestRate('NIGHT', false, 0.2)).toBeGreaterThan(mothRestRate('NIGHT', false, 0));
  });

  it('never returns a rate that overflows a frame', () => {
    for (const p of [...PHASES, 'NONSENSE']) {
      for (const r of [0, 0.5, 1, 99, NaN]) {
        const v = mothRestRate(p, true, r);
        expect(Number.isFinite(v), `${p}/${r}`).toBe(true);
        expect(v, `${p}/${r}`).toBeLessThanOrEqual(10);
      }
    }
  });
});
