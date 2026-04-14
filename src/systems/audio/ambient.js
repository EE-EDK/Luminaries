// ================================================================
// Audio Ambient — Forest hum, wind, rain, thunder, water proximity
// ================================================================

import {
  ctx, initialized, muted, masterGain, brownBuf,
  forestGain, forest2Gain, windGain, windFilter, rainGain, rainFilter,
  waterGain, creatureCooldowns, thunderTimer, setThunderTimer
} from './core.js';

// ================================================================
// Update (called per frame)
// ================================================================
export function updateAudio(dt, windStrength, rainRate, isStorming, lightningFlash, phase, playerPos, ponds) {
  if (!initialized || muted) return;

  const now = ctx.currentTime;

  // Forest hum — subtle volume shift by time of day
  const forestVol = phase === 'DEEP_NIGHT' ? 0.07 : phase === 'DAWN' ? 0.03 : 0.05;
  forestGain.gain.linearRampToValueAtTime(forestVol, now + 0.1);
  forest2Gain.gain.linearRampToValueAtTime(forestVol * 0.6, now + 0.1);

  // Wind — driven by weather windStrength
  const windVol = Math.min(windStrength * 0.12, 0.18);
  const windFreq = 200 + windStrength * 600;
  windGain.gain.linearRampToValueAtTime(windVol, now + 0.1);
  windFilter.frequency.linearRampToValueAtTime(windFreq, now + 0.1);

  // Rain — driven by weather rainRate
  const rainVol = rainRate * 0.15;
  const rainFreq = 1200 + rainRate * 2000;
  rainGain.gain.linearRampToValueAtTime(rainVol, now + 0.1);
  rainFilter.frequency.linearRampToValueAtTime(rainFreq, now + 0.1);

  // Thunder
  if (lightningFlash > 0.5 && thunderTimer <= 0) {
    playThunder();
    setThunderTimer(2 + Math.random() * 3);
  }
  if (thunderTimer > 0) setThunderTimer(thunderTimer - dt);

  // Water — proximity to nearest pond
  let waterDist = Infinity;
  if (playerPos && ponds) {
    for (let i = 0; i < ponds.length; i++) {
      const dx = ponds[i].x - playerPos.x, dz = ponds[i].z - playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < waterDist) waterDist = d2;
    }
  }
  const waterProx = waterDist < 225 ? (1 - Math.sqrt(waterDist) / 15) : 0;
  const waterVol = waterProx * 0.08;
  waterGain.gain.linearRampToValueAtTime(waterVol, now + 0.1);

  // Creature cooldowns
  creatureCooldowns.jelly -= dt;
  creatureCooldowns.puff -= dt;
  creatureCooldowns.deer -= dt;
  creatureCooldowns.moth -= dt;
  creatureCooldowns.puffSing -= dt;
}

// ================================================================
// Thunder burst
// ================================================================
function playThunder() {
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = 'sawtooth';
  osc.frequency.value = 50 + Math.random() * 25;
  filter.type = 'lowpass';
  filter.frequency.value = 120;
  filter.Q.value = 1;
  gain.gain.setValueAtTime(0.20, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8 + Math.random() * 0.5);
  osc.connect(filter).connect(gain).connect(masterGain);
  osc.start();
  osc.stop(now + 1.5);

  const noise = ctx.createBufferSource();
  noise.buffer = brownBuf;
  const nGain = ctx.createGain();
  const nFilter = ctx.createBiquadFilter();
  nFilter.type = 'lowpass';
  nFilter.frequency.value = 120;
  const nHp = ctx.createBiquadFilter();
  nHp.type = 'highpass';
  nHp.frequency.value = 45;
  nHp.Q.value = 0.5;
  nGain.gain.setValueAtTime(0.15, now);
  nGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
  noise.connect(nHp).connect(nFilter).connect(nGain).connect(masterGain);
  noise.start();
  noise.stop(now + 1.5);
}
