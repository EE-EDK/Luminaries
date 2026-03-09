// ================================================================
// Audio Music Bridge — delegates to systems/music.js
// ================================================================

import { ctx, initialized, muted, masterGain, connectWithReverb } from './core.js';
import { setupMusic, updateMusic as _updateMusic } from '../music.js';

let musicInited = false;

function initMusic() {
  if (musicInited || !ctx) return;
  musicInited = true;
  setupMusic(ctx, masterGain, connectWithReverb);
}

export function updateMusic(dt, dayPhase, playerSpeed, nearMagical) {
  if (!initialized || muted) return;
  if (!musicInited) initMusic();
  if (!musicInited) return;
  _updateMusic(dt, dayPhase, playerSpeed, nearMagical);
}
