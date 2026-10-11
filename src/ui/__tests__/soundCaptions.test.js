/**
 * The caption line is off until someone turns it on. The DOM half is covered
 * by the browser gate; this is the part a node test can see: the default, the
 * switch, and that the module is safe to load with no page.
 */
import { describe, it, expect } from 'vitest';
import { captionsEnabled, setCaptionsEnabled, currentCaption, initSoundCaptions } from '../soundCaptions.js';
import { SETTINGS_SCHEMA } from '../../state/settingsState.js';

describe('sound captions switch', () => {
  it('is off when the module loads', () => {
    expect(captionsEnabled()).toBe(false);
    expect(currentCaption()).toBe('');
  });

  it('is a boolean setting that defaults to false', () => {
    expect(SETTINGS_SCHEMA.soundCaptions).toBeTruthy();
    expect(SETTINGS_SCHEMA.soundCaptions.def).toBe(false);
    expect(SETTINGS_SCHEMA.soundCaptions.kind).toBe('boolean');
  });

  it('turns on and off', () => {
    setCaptionsEnabled(true);
    expect(captionsEnabled()).toBe(true);
    setCaptionsEnabled(false);
    expect(captionsEnabled()).toBe(false);
  });

  it('builds nothing without a document', () => {
    expect(initSoundCaptions({ getListener: () => ({ x: 0, z: 0, yaw: 0 }) })).toBeNull();
  });
});
