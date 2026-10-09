/**
 * Ground, gusts and the score.
 *
 * Three rules pulled out of the files that own their data, so each can be
 * driven without a renderer or a populated world. The gust tests are the
 * interesting ones: the behaviour being replaced moved every tree at once,
 * which reads as the forest being shoved rather than as wind, so most of what
 * follows is about the wave actually arriving somewhere first.
 */
import { describe, it, expect } from 'vitest';
import {
  GROUND, WATER_D2, ROCK_D2, MUD_RAIN, classifyGround,
  GUST_WAVELENGTH, gustWaveAt, gustPhaseRate, musicDensity,
} from '../environment.js';

const FAR = Infinity;

describe('classifyGround', () => {
  it('calls it grass on dry bare ground', () => {
    expect(classifyGround(FAR, FAR, 0)).toBe(GROUND.GRASS);
  });

  it('calls it mud once the rain is real', () => {
    expect(classifyGround(FAR, FAR, MUD_RAIN + 0.1)).toBe(GROUND.MUD);
    expect(classifyGround(FAR, FAR, MUD_RAIN - 0.1)).toBe(GROUND.GRASS);
  });

  it('calls it rock when you are on one', () => {
    expect(classifyGround(FAR, ROCK_D2 - 0.1, 0)).toBe(GROUND.ROCK);
    expect(classifyGround(FAR, ROCK_D2 + 1, 0)).toBe(GROUND.GRASS);
  });

  it('calls it water when you are in a pond', () => {
    expect(classifyGround(WATER_D2 - 1, FAR, 0)).toBe(GROUND.WATER);
    expect(classifyGround(WATER_D2 + 1, FAR, 0)).toBe(GROUND.GRASS);
  });

  it('puts water above rock — a rock in a pond is still a splash', () => {
    expect(classifyGround(1, 0.1, 0)).toBe(GROUND.WATER);
  });

  it('puts rock above mud — a wet rock is still a rock', () => {
    expect(classifyGround(FAR, 0.1, 1)).toBe(GROUND.ROCK);
  });

  it('puts water above everything, in any weather', () => {
    expect(classifyGround(1, 0.1, 1)).toBe(GROUND.WATER);
  });

  it('always answers with a real surface, whatever it is handed', () => {
    const kinds = Object.values(GROUND);
    for (const p of [FAR, NaN, undefined, null, -1, 0]) {
      for (const r of [FAR, NaN, undefined, null, -1, 0]) {
        for (const rain of [0, 0.5, 1, NaN, undefined, -3, 99]) {
          expect(kinds, `${p}/${r}/${rain}`).toContain(classifyGround(p, r, rain));
        }
      }
    }
  });

  it('treats every missing distance as far away, not as zero', () => {
    // `null < 16` is true in JavaScript, so an unguarded comparison turns a
    // missing pond distance into "you are standing in the pond" and makes
    // every footstep a splash the moment the pond list is empty. NaN and
    // undefined compare false and are harmless; null is the one that bites.
    for (const missing of [NaN, undefined, null]) {
      expect(classifyGround(missing, missing, 0), String(missing)).toBe(GROUND.GRASS);
      expect(classifyGround(missing, Infinity, 0), `pond=${missing}`).toBe(GROUND.GRASS);
      expect(classifyGround(Infinity, missing, 0), `rock=${missing}`).toBe(GROUND.GRASS);
    }
  });

  it('still treats a real zero distance as being right on top of it', () => {
    // Zero is not a missing reading — it means dead centre.
    expect(classifyGround(0, Infinity, 0)).toBe(GROUND.WATER);
    expect(classifyGround(Infinity, 0, 0)).toBe(GROUND.ROCK);
  });
});

describe('gustWaveAt', () => {
  const EAST = [1, 0];

  it('stays between 0 and 1 so it can only ever scale an amplitude up', () => {
    // A negative value here would lean the trees INTO the wind.
    for (let ph = 0; ph < 20; ph += 0.3) {
      for (let x = -100; x <= 100; x += 17) {
        const v = gustWaveAt(x, 0, ph, ...EAST);
        expect(v, `phase=${ph} x=${x}`).toBeGreaterThanOrEqual(0);
        expect(v, `phase=${ph} x=${x}`).toBeLessThanOrEqual(1);
      }
    }
  });

  it('does not move the whole forest at once', () => {
    // The thing being fixed: two points a half wavelength apart along the wind
    // must differ, or this is the old behaviour with extra steps.
    const a = gustWaveAt(0, 0, 1.0, ...EAST);
    const b = gustWaveAt(GUST_WAVELENGTH / 2, 0, 1.0, ...EAST);
    expect(Math.abs(a - b)).toBeGreaterThan(0.5);
  });

  it('moves points across the wind together — that is what a front is', () => {
    const a = gustWaveAt(0, -40, 1.0, ...EAST);
    const b = gustWaveAt(0, 40, 1.0, ...EAST);
    expect(a).toBeCloseTo(b, 6);
  });

  it('repeats every wavelength along the wind', () => {
    const a = gustWaveAt(0, 0, 1.0, ...EAST);
    const b = gustWaveAt(GUST_WAVELENGTH, 0, 1.0, ...EAST);
    expect(a).toBeCloseTo(b, 6);
  });

  it('travels: the crest moves as the phase advances', () => {
    const sameSpot = [gustWaveAt(5, 0, 0, ...EAST), gustWaveAt(5, 0, 1.2, ...EAST)];
    expect(Math.abs(sameSpot[0] - sameSpot[1])).toBeGreaterThan(0.1);
  });

  it('follows the wind direction rather than the x axis', () => {
    // Blowing north, points differing only in z must differ; points differing
    // only in x must not.
    const NORTH = [0, 1];
    expect(Math.abs(gustWaveAt(0, 0, 1, ...NORTH) - gustWaveAt(0, GUST_WAVELENGTH / 2, 1, ...NORTH)))
      .toBeGreaterThan(0.5);
    expect(gustWaveAt(-30, 0, 1, ...NORTH)).toBeCloseTo(gustWaveAt(30, 0, 1, ...NORTH), 6);
  });

  it('does not care how long the direction vector is', () => {
    expect(gustWaveAt(7, 3, 1, 1, 0)).toBeCloseTo(gustWaveAt(7, 3, 1, 50, 0), 6);
  });

  it('is silent when there is no wind direction at all', () => {
    expect(gustWaveAt(5, 5, 1, 0, 0)).toBe(0);
    expect(gustWaveAt(5, 5, 1, NaN, NaN)).toBe(0);
  });

  it('refuses a nonsense wavelength instead of dividing by it', () => {
    expect(gustWaveAt(5, 5, 1, 1, 0, 0)).toBe(0);
    expect(gustWaveAt(5, 5, 1, 1, 0, -5)).toBe(0);
    expect(Number.isFinite(gustWaveAt(5, 5, 1, 1, 0, NaN))).toBe(true);
  });

  it('never returns NaN for any input it is given', () => {
    for (const args of [[NaN, 0, 0, 1, 0], [0, NaN, 1, 1, 0], [0, 0, NaN, 1, 0]]) {
      expect(Number.isFinite(gustWaveAt(...args)), JSON.stringify(args)).toBe(true);
    }
  });
});

describe('gustPhaseRate', () => {
  it('advances faster in a stronger wind', () => {
    expect(gustPhaseRate(3)).toBeGreaterThan(gustPhaseRate(0.5));
  });

  it('always advances, so a front always arrives', () => {
    for (const w of [0, -5, NaN, undefined]) {
      expect(gustPhaseRate(w), String(w)).toBeGreaterThan(0);
    }
  });

  it('caps out before it strobes instead of sweeping', () => {
    const fast = gustPhaseRate(1000);
    expect(fast).toBe(gustPhaseRate(99));
    // 40 m/s over a 26 m wavelength is about 1.5 crests a second.
    expect(fast / (Math.PI * 2)).toBeLessThan(2);
  });
});

describe('musicDensity', () => {
  it('is quiet but never silent at the start', () => {
    const d = musicDensity(0, 'NIGHT', 0);
    expect(d.harpRate).toBeGreaterThan(0);
    expect(d.chimeRate).toBeGreaterThan(0);
  });

  it('fills in as the forest is restored', () => {
    const empty = musicDensity(0, 'NIGHT', 0);
    const full = musicDensity(1, 'NIGHT', 0);
    expect(full.harpRate).toBeGreaterThan(empty.harpRate);
    expect(full.fluteChance).toBeGreaterThan(empty.fluteChance);
    expect(full.chimeRate).toBeGreaterThan(empty.chimeRate);
  });

  it('holds the flute back until something has been restored', () => {
    expect(musicDensity(0, 'NIGHT', 0).fluteChance).toBe(0);
  });

  it('raises the chimes at dawn', () => {
    expect(musicDensity(0.5, 'DAWN', 0).chimeRate)
      .toBeGreaterThan(musicDensity(0.5, 'NIGHT', 0).chimeRate);
  });

  it('puts a pulse under a running player and not under a walking one', () => {
    expect(musicDensity(0.5, 'NIGHT', 6).bass).toBe(true);
    expect(musicDensity(0.5, 'NIGHT', 1).bass).toBe(false);
  });

  it('keeps every rate usable whatever it is handed', () => {
    for (const r of [-1, 0, 0.5, 1, 99, NaN, undefined, null]) {
      const d = musicDensity(r, 'NIGHT', 0);
      expect(d.harpRate, String(r)).toBeGreaterThan(0);
      expect(d.harpRate, String(r)).toBeLessThan(2);
      expect(d.fluteChance, String(r)).toBeGreaterThanOrEqual(0);
      expect(d.fluteChance, String(r)).toBeLessThanOrEqual(1);
      expect(d.bass, String(r)).toBe(false);
    }
  });
});
