// ================================================================
// Audio Ambient Creatures — Frogs (pond proximity) & Crickets (grass)
// ================================================================

import { ctx, initialized, muted, masterGain } from './core.js';

// Frog layer
let frogOsc1 = null, frogOsc2 = null, frogGain = null;
let frogFilter = null;
let frogChirpTimer = 0;
let frogPulsePhase = 0;

// Cricket layer
let cricketPingTimer = 0;
let cricketVolTarget = 0;
let cricketDayMult = 1;

let ambientInited = false;

export function initAmbientSounds() {
  // Deferred — called after AudioContext is live
}

function ensureAmbient() {
  if (ambientInited || !ctx) return;
  ambientInited = true;

  const fGain = ctx.createGain();
  fGain.gain.value = 0;
  const fO1 = ctx.createOscillator();
  fO1.type = 'sine'; fO1.frequency.value = 160;
  const fO2 = ctx.createOscillator();
  fO2.type = 'sine'; fO2.frequency.value = 190;
  const fFilter = ctx.createBiquadFilter();
  fFilter.type = 'lowpass'; fFilter.frequency.value = 350; fFilter.Q.value = 0.5;
  fO1.connect(fFilter).connect(fGain);
  fO2.connect(fFilter);
  fGain.connect(masterGain);
  fO1.start(); fO2.start();
  frogOsc1 = fO1; frogOsc2 = fO2; frogGain = fGain; frogFilter = fFilter;
}

function spawnCricketPing(vol) {
  if (!ctx || vol < 0.001) return;
  const now = ctx.currentTime;
  const freq = 1800 + Math.random() * 800;
  const osc = ctx.createOscillator();
  osc.type = 'sine'; osc.frequency.value = freq;
  osc.frequency.exponentialRampToValueAtTime(freq * 0.88, now + 0.1);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(vol * 0.5, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  osc.connect(gain).connect(masterGain);
  osc.start(now); osc.stop(now + 0.12);
}

export function updateAmbientSounds(dt, playerPos, ponds, grassPatches, dayPhase, rainRate) {
  if (!initialized || muted) return;
  ensureAmbient();
  if (!ambientInited) return;

  const now = ctx.currentTime;

  const frogDayMult = (dayPhase === 'DEEP_NIGHT' || dayPhase === 'NIGHT') ? 1.0
    : dayPhase === 'DUSK' ? 0.5 : 0.3;
  cricketDayMult = (dayPhase === 'DUSK' || dayPhase === 'NIGHT') ? 1.0
    : dayPhase === 'DEEP_NIGHT' ? 0.6 : 0.3;

  const weatherDamp = Math.max(0.15, 1.0 - rainRate * 0.7);

  let pondDist2 = Infinity;
  if (playerPos && ponds) {
    for (let i = 0; i < ponds.length; i++) {
      const dx = ponds[i].x - playerPos.x, dz = ponds[i].z - playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < pondDist2) pondDist2 = d2;
    }
  }
  const frogProx = pondDist2 < 400 ? (1 - Math.sqrt(pondDist2) / 20) : 0;
  frogPulsePhase += dt * 2.0;
  const pulse = 0.7 + 0.3 * Math.sin(frogPulsePhase * Math.PI * 2);
  const frogVol = frogProx * 0.025 * frogDayMult * weatherDamp * pulse;
  frogGain.gain.linearRampToValueAtTime(frogVol, now + 0.15);

  frogChirpTimer += dt;
  if (frogChirpTimer > 3 + Math.random() * 4) {
    frogChirpTimer = 0;
    const basePitch = 150 + Math.random() * 40;
    frogOsc1.frequency.linearRampToValueAtTime(basePitch, now + 0.5);
    frogOsc2.frequency.linearRampToValueAtTime(basePitch + 20 + Math.random() * 15, now + 0.5);
  }

  let grassDist2 = Infinity;
  if (playerPos && grassPatches) {
    for (let i = 0; i < grassPatches.length; i++) {
      const dx = grassPatches[i].cx - playerPos.x, dz = grassPatches[i].cz - playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < grassDist2) grassDist2 = d2;
    }
  }
  const cricketProx = grassDist2 < 144 ? (1 - Math.sqrt(grassDist2) / 12) : 0;
  cricketVolTarget = cricketProx * 0.02 * cricketDayMult * weatherDamp;

  if (cricketVolTarget > 0.001) {
    cricketPingTimer -= dt;
    if (cricketPingTimer <= 0) {
      spawnCricketPing(cricketVolTarget);
      const rate = 1.5 + (1 - cricketProx) * 1.5;
      cricketPingTimer = rate + Math.random() * rate;
    }
  } else {
    cricketPingTimer = 0;
  }
}
