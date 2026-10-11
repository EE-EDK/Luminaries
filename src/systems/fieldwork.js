// ================================================================
// Fieldwork — the pieces of Sprint 4 that need the live game wired in
// ================================================================
// The notebook, the sound captions, the photo moment and the dawn light shafts
// each have a pure core in their own module. This is the one place they meet
// the running game: it subscribes the feeds, builds the DOM, hooks the input
// flag, and registers a single scheduler system for the per-frame work.
//
// main.js calls two things from here — initFieldwork() once, after settings
// are loaded, and stepPhotoMoment() once a frame inside the camera arbiter —
// so the rest of the loop is untouched.

import { addSystem } from '../kernel/scheduler.js';
import { player, isReducedMotion } from '../core/player.js';
import { started, photoHeld } from '../core/input.js';
import { phase as dayPhase } from './dayNightCycle.js';
import { getRainRate, weatherState } from './weather.js';
import { trees_data } from '../state/entityStore.js';
import { markSeen, entryForWeather } from '../state/notebookState.js';
import { initNotebookFeed, createScanner, scanStep } from './notebookFeed.js';
import { initNotebook } from '../ui/notebook.js';
import { initSoundCaptions } from '../ui/soundCaptions.js';
import { initLightShafts, updateLightShafts } from '../world/lightShafts.js';
import {
  createPhotoState, stepPhoto, photoCss, PHOTO_CLASS,
} from './photoMode.js';

/** Between QUEST (120) and FOOTPRINTS (130): after the world has moved this frame, before it is drawn. */
const FIELDWORK_PHASE = 125;

const _photo = createPhotoState();
let _photoOn = false;
let _scanner = null;
let _sun = null;
const _listener = { x: 0, z: 0, yaw: 0 };

/** @brief Whether a photo is being taken (H held). */
export function isPhotoActive() { return _photoOn; }

/** @brief The photo state machine, for the dev console. */
export function photoReport() {
  return { held: _photo.held, offset: _photo.offset, bodyClass: typeof document !== 'undefined' && document.body.classList.contains(PHOTO_CLASS) };
}

function installPhotoStyle() {
  if (typeof document === 'undefined' || document.getElementById('lumi-photo-style')) return;
  const st = document.createElement('style');
  st.id = 'lumi-photo-style';
  st.textContent = photoCss();
  document.head.appendChild(st);
}

/**
 * @brief Advance the photo moment one frame.
 *
 * Hides or restores the interface on the edges of the H key, and returns the
 * yaw offset the camera should add this frame. Called from the camera arbiter
 * in main.js, after the live look has been resolved, so the drift sits on top
 * of wherever the camera is rather than being written into it.
 *
 * @param {number} dt seconds
 * @param {boolean} blocked a cinematic owns the camera; H does nothing then
 * @return {number} radians to add to camera.rotation.y
 */
export function stepPhotoMoment(dt, blocked) {
  const off = stepPhoto(_photo, photoHeld && !blocked, isReducedMotion(), dt);
  if (_photo.held !== _photoOn) {
    _photoOn = _photo.held;
    if (typeof document !== 'undefined') document.body.classList.toggle(PHOTO_CLASS, _photoOn);
  }
  return off;
}

/**
 * @brief Build the notebook, captions and light shafts, and register their frame work.
 *
 * Call after initSettings() — the captions read their setting on subscribe —
 * and after populate, which fills the arrays the scan and the shafts read.
 *
 * @param {{scene:import('three').Scene, camera:import('three').Camera, sun:import('three').Light}} deps
 *   `sun` is the directional light the day/night cycle swings across the sky.
 */
export function initFieldwork({ scene, camera, sun }) {
  _sun = sun;
  initNotebookFeed();
  // The sky the world opened under is the first thing seen.
  markSeen(entryForWeather(weatherState));
  initNotebook({ canOpen: () => started });
  initSoundCaptions({
    getListener: () => { _listener.x = player.pos.x; _listener.z = player.pos.z; _listener.yaw = camera.rotation.y; return _listener; },
  });
  installPhotoStyle();
  initLightShafts(scene, trees_data);
  _scanner = createScanner();

  addSystem('fieldwork', FIELDWORK_PHASE, (dt) => {
    scanStep(_scanner, dt, player.pos.x, player.pos.z);
    const p = _sun.position;
    const inv = 1 / (Math.hypot(p.x, p.y, p.z) || 1);
    updateLightShafts(dt, dayPhase, getRainRate(), player.pos.x, player.pos.z,
      p.x * inv, p.y * inv, p.z * inv, isReducedMotion());
  });
}
