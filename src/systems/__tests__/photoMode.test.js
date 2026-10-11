/**
 * The photo moment's state machine: hold H, the interface steps aside and the
 * camera yaw drifts; let go and everything comes back.
 *
 * What these protect: the drift is an offset that returns to exactly zero (so
 * "restored on release" is true, not approximately true); reduced motion keeps
 * the hiding and drops the drift; and the list of hidden elements names ids
 * that really exist in the page.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  PHOTO_DRIFT_RATE, PHOTO_SETTLE_RATE, PHOTO_EPS, PHOTO_HIDE_IDS, PHOTO_CLASS, photoCss,
  createPhotoState, photoPhase, stepPhoto,
} from '../photoMode.js';

const run = (s, pressed, reduced, seconds, dt = 1 / 60) => {
  let y = 0;
  for (let t = 0; t < seconds; t += dt) y = stepPhoto(s, pressed, reduced, dt);
  return y;
};

describe('photo state machine', () => {
  it('starts idle with no offset', () => {
    const s = createPhotoState();
    expect(photoPhase(s)).toBe('idle');
    expect(stepPhoto(s, false, false, 1 / 60)).toBe(0);
    expect(photoPhase(s)).toBe('idle');
  });

  it('pressing H starts holding, and the yaw drifts at 0.02 rad/s', () => {
    const s = createPhotoState();
    const y = run(s, true, false, 10);
    expect(photoPhase(s)).toBe('holding');
    expect(s.held).toBe(true);
    expect(y).toBeCloseTo(0.2, 2);
    expect(PHOTO_DRIFT_RATE).toBe(0.02);
  });

  it('releasing settles the offset back to exactly zero and returns to idle', () => {
    const s = createPhotoState();
    run(s, true, false, 10);
    expect(stepPhoto(s, false, false, 1 / 60)).toBeGreaterThan(0);
    expect(photoPhase(s)).toBe('settling');
    expect(s.held).toBe(false);
    const y = run(s, false, false, 3);
    expect(y).toBe(0);
    expect(s.offset).toBe(0);
    expect(photoPhase(s)).toBe('idle');
  });

  it('the settle ends: it snaps under PHOTO_EPS rather than decaying forever', () => {
    const s = { held: false, offset: PHOTO_EPS * 2 };
    let frames = 0;
    while (s.offset !== 0 && frames < 10000) { stepPhoto(s, false, false, 1 / 60); frames++; }
    expect(s.offset).toBe(0);
    expect(frames).toBeLessThan(600);
    expect(PHOTO_SETTLE_RATE).toBeGreaterThan(0);
  });

  it('is frame-rate independent while holding', () => {
    const a = createPhotoState(), b = createPhotoState();
    for (let i = 0; i < 150; i++) stepPhoto(a, true, false, 1 / 30);   // five seconds
    for (let i = 0; i < 600; i++) stepPhoto(b, true, false, 1 / 120);  // five seconds
    expect(a.offset).toBeCloseTo(b.offset, 6);
  });

  it('ignores a negative or NaN dt', () => {
    const s = createPhotoState();
    stepPhoto(s, true, false, -1);
    stepPhoto(s, true, false, NaN);
    expect(s.offset).toBe(0);
  });
});

describe('reduced motion', () => {
  it('hides the interface but never drifts', () => {
    const s = createPhotoState();
    const y = run(s, true, true, 10);
    expect(y).toBe(0);
    expect(s.offset).toBe(0);
    expect(s.held).toBe(true);
    expect(photoPhase(s)).toBe('holding');
  });

  it('drops a drift already built up if the setting flips mid-hold', () => {
    const s = createPhotoState();
    run(s, true, false, 10);
    expect(s.offset).toBeGreaterThan(0);
    expect(stepPhoto(s, true, true, 1 / 60)).toBe(0);
    expect(s.offset).toBe(0);
  });
});

describe('what gets hidden', () => {
  it('names only ids that exist in index.html or are built by a module', () => {
    const html = readFileSync(new URL('../../../index.html', import.meta.url), 'utf8');
    // Ids created at runtime by their own modules; each is asserted in the source that makes it.
    const built = {
      'settings-panel-root': '../../ui/settingsPanel.js',
      'dev-skip-wrap': '../../debug/devSkipPanel.js',
      'lumi-debug-terminal': '../../debug/debugConsole.js',
      'discovery-text': '../../systems/discoveries.js',
      'puffling-chat': '../../systems/pufflingChat.js',
      'session-summary': '../../ui/sessionSummary.js',
      'notebook-root': '../../ui/notebook.js',
      'sound-captions': '../../ui/soundCaptions.js',
    };
    for (const id of PHOTO_HIDE_IDS) {
      if (built[id]) {
        const src = readFileSync(new URL(built[id], import.meta.url), 'utf8');
        expect(src.includes(id), `${id} in ${built[id]}`).toBe(true);
      } else {
        expect(html.includes(`id="${id}"`), `#${id} in index.html`).toBe(true);
      }
    }
  });

  it('builds a rule that hides every one of them under the photo class', () => {
    const css = photoCss();
    for (const id of PHOTO_HIDE_IDS) expect(css).toContain(`body.${PHOTO_CLASS} #${id}`);
    expect(css).toContain('visibility: hidden');
  });

  it('hides by visibility, so each element keeps its own display value', () => {
    expect(photoCss()).not.toMatch(/display\s*:/);
  });
});
