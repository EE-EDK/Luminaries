/**
 * Settings: clamped on the way in, so nothing downstream has to defend itself.
 *
 * The opposite policy to saveState, and deliberately so — a corrupt settings
 * blob costs the player their preferences, not their progress, so this repairs
 * instead of rejecting. What it must never do is hand a consumer a value
 * outside the range that consumer was written against.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  SETTINGS_KEY, SETTINGS_SCHEMA, SETTINGS_KEYS, coerce, defaultSettings,
  initSettings, getSetting, getSettings, setSetting, resetSettings, onSetting,
} from '../settingsState.js';
import { guardedStorage } from '../saveState.js';
import { on, off, Events } from '../../kernel/eventBus.js';

function fakeStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => { map.set(k, String(v)); },
    removeItem: (k) => { map.delete(k); },
    _map: map,
  };
}

let raw, store, seen, unsubs;
beforeEach(() => {
  raw = fakeStorage();
  store = guardedStorage(raw);
  initSettings(store);
  seen = [];
  unsubs = [on(Events.SETTINGS_CHANGED, (e) => seen.push(e))];
});
// off(event) with no listener removes nothing — keep the unsubscribe `on`
// hands back, or every test leaves a listener behind for the next one.
afterEach(() => { for (const u of unsubs) u(); });

describe('the schema', () => {
  it('gives every setting a default inside its own range', () => {
    for (const k of SETTINGS_KEYS) {
      const s = SETTINGS_SCHEMA[k];
      if (s.kind === 'boolean') expect(typeof s.def, k).toBe('boolean');
      else {
        expect(s.def, `${k} default below min`).toBeGreaterThanOrEqual(s.min);
        expect(s.def, `${k} default above max`).toBeLessThanOrEqual(s.max);
      }
    }
  });

  it('starts at the defaults', () => {
    expect(getSettings()).toEqual(defaultSettings());
  });
});

describe('coerce', () => {
  it('clamps a number to its range', () => {
    expect(coerce('masterVolume', 5)).toBe(1);
    expect(coerce('masterVolume', -2)).toBe(0);
    expect(coerce('lookSensitivity', 9000)).toBe(3);
    expect(coerce('lookSensitivity', 0.01)).toBe(0.25);
  });

  it('rounds an integer setting', () => {
    expect(coerce('qualityFloor', 2.4)).toBe(2);
    expect(coerce('qualityFloor', 2.6)).toBe(3);
    expect(coerce('qualityFloor', 99)).toBe(4);
  });

  it('falls back to the default on junk rather than passing NaN downstream', () => {
    for (const v of ['banana', NaN, undefined, null, {}, [], Infinity]) {
      expect(coerce('masterVolume', v), String(v)).toBe(SETTINGS_SCHEMA.masterVolume.def);
    }
  });

  it('accepts a numeric string, because that is what a text input gives you', () => {
    expect(coerce('textSize', '1.25')).toBe(1.25);
  });

  it('will not take a truthy value for a boolean', () => {
    expect(coerce('muted', 1)).toBe(false);
    expect(coerce('muted', 'yes')).toBe(false);
    expect(coerce('muted', true)).toBe(true);
  });

  it('returns undefined for a key that is not a setting', () => {
    expect(coerce('godMode', true)).toBeUndefined();
  });
});

describe('setSetting', () => {
  it('stores, persists and announces', () => {
    expect(setSetting('masterVolume', 0.8)).toBe(0.8);
    expect(getSetting('masterVolume')).toBe(0.8);
    expect(seen).toEqual([{ key: 'masterVolume', value: 0.8 }]);
    expect(JSON.parse(raw.getItem(SETTINGS_KEY)).masterVolume).toBe(0.8);
  });

  it('announces the clamped value, not the one it was given', () => {
    setSetting('lookSensitivity', 50);
    expect(seen).toEqual([{ key: 'lookSensitivity', value: 3 }]);
  });

  it('stays quiet when nothing actually changed', () => {
    setSetting('muted', false);            // already false
    expect(seen).toEqual([]);
  });

  it('ignores a key that is not a setting', () => {
    expect(setSetting('godMode', true)).toBeUndefined();
    expect(getSettings().godMode).toBeUndefined();
    expect(seen).toEqual([]);
  });
});

describe('initSettings', () => {
  it('reads back what was written', () => {
    setSetting('textSize', 1.4);
    setSetting('invertY', true);
    initSettings(store);
    expect(getSetting('textSize')).toBe(1.4);
    expect(getSetting('invertY')).toBe(true);
  });

  it('repairs an out-of-range stored value instead of trusting it', () => {
    raw.setItem(SETTINGS_KEY, JSON.stringify({ lookSensitivity: 9000, masterVolume: -3 }));
    initSettings(store);
    expect(getSetting('lookSensitivity')).toBe(3);
    expect(getSetting('masterVolume')).toBe(0);
  });

  it('drops keys that are not settings', () => {
    raw.setItem(SETTINGS_KEY, JSON.stringify({ muted: true, godMode: true }));
    initSettings(store);
    expect(getSetting('muted')).toBe(true);
    expect(getSettings().godMode).toBeUndefined();
  });

  it('falls back to defaults on a corrupt blob', () => {
    for (const bad of ['{"muted":', '[]', 'null', '"a string"', '']) {
      raw.setItem(SETTINGS_KEY, bad);
      initSettings(store);
      expect(getSettings(), `blob ${JSON.stringify(bad)}`).toEqual(defaultSettings());
    }
  });

  it('survives storage that throws', () => {
    const hostile = guardedStorage({
      getItem() { throw new Error('blocked'); },
      setItem() { throw new Error('quota'); },
      removeItem() { throw new Error('blocked'); },
    });
    expect(() => initSettings(hostile)).not.toThrow();
    expect(getSettings()).toEqual(defaultSettings());
    expect(() => setSetting('muted', true)).not.toThrow();
    expect(getSetting('muted')).toBe(true);     // still live in memory
  });
});

describe('resetSettings', () => {
  it('restores defaults and announces only what moved', () => {
    setSetting('muted', true);
    setSetting('textSize', 1.5);
    seen.length = 0;
    resetSettings();
    expect(getSettings()).toEqual(defaultSettings());
    expect(seen.map((e) => e.key).sort()).toEqual(['muted', 'textSize']);
  });
});

describe('onSetting', () => {
  it('applies the current value at once, then every change', () => {
    setSetting('masterVolume', 0.9);
    const got = [];
    const unsub = onSetting('masterVolume', (v) => got.push(v));
    unsubs.push(unsub);
    expect(got).toEqual([0.9]);            // consumers must not boot out of step
    setSetting('masterVolume', 0.2);
    expect(got).toEqual([0.9, 0.2]);
    unsub();
    setSetting('masterVolume', 0.5);
    expect(got).toEqual([0.9, 0.2]);
  });

  it('ignores changes to other settings', () => {
    const got = [];
    unsubs.push(onSetting('muted', (v) => got.push(v)));
    setSetting('textSize', 1.3);
    expect(got).toEqual([false]);
  });
});
