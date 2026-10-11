/**
 * The weather snapshot has to be one the save validator will take.
 *
 * REGRESSION GUARD: the weather state machine leaves its timers below zero
 * (stateTimer through a whole blend, transTimer after one), and the save
 * validator rejects negative timers. Every autosave in those windows was
 * refused with "world.weather.transTimer must be a non-negative number" — in
 * play, from the first change of weather onwards, and for the field notebook
 * that meant a new weather entry never reached the save it asked for.
 */
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../core/renderer.js', () => ({
  scene: { add: vi.fn(), remove: vi.fn(), traverse: vi.fn(), fog: { density: 0.01 }, background: { r: 0.1, g: 0.1, b: 0.1 } },
}));

import { getWeatherSnapshot, restoreWeatherSnapshot, updateWeather, WEATHER_STATE_NAMES } from '../weather.js';
import { validateSave, makeSaveEnvelope } from '../../state/saveState.js';

const player = { x: 0, z: 0 };

describe('getWeatherSnapshot', () => {
  it('is never negative, however far the machine has run past a timer', () => {
    restoreWeatherSnapshot({ cur: 'CLEAR', next: 'MISTY', stateTimer: -37.5, transTimer: -0.02, transDuration: 45, blending: false });
    const s = getWeatherSnapshot();
    expect(s.stateTimer).toBe(0);
    expect(s.transTimer).toBe(0);
    expect(s.transDuration).toBeGreaterThanOrEqual(0);
  });

  it('keeps a positive timer exactly', () => {
    restoreWeatherSnapshot({ cur: 'CLEAR', next: null, stateTimer: 321.5, transTimer: 0, transDuration: 0, blending: false });
    expect(getWeatherSnapshot().stateTimer).toBe(321.5);
  });

  it('after a real transition has run, the snapshot is still one the validator accepts', () => {
    // A blend about to land: updateWeather finishes it, which is the path that
    // leaves transTimer at its overshoot.
    restoreWeatherSnapshot({ cur: 'CLEAR', next: 'MISTY', stateTimer: -5, transTimer: 0.01, transDuration: 1, blending: true });
    updateWeather(0.5, 0, player);
    const w = getWeatherSnapshot();
    expect(w.cur).toBe('MISTY');
    expect(w.transTimer).toBeGreaterThanOrEqual(0);
    const body = {
      quest: { phase: 'SEEK', obeliskY: -25, collected: [] },
      world: { time: 0.1, weather: w, wishes: [false, false, false, false, false] },
      narrative: { perspective: 'child', truthRevealed: false, wizardDone: false, discovered: [], glyphs: [] },
      player: { x: 0, z: 0, yaw: 0, pitch: 0, frequency: null, jellyTimer: 0 },
    };
    expect(() => validateSave(makeSaveEnvelope(body, 1), { weatherStates: WEATHER_STATE_NAMES })).not.toThrow();
  });
});
