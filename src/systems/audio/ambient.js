// ================================================================
// Audio Ambient — Forest hum, wind, rain, thunder, water proximity
// ================================================================

import {
  ctx, initialized, muted, masterGain, brownBuf,
  forestGain, forest2Gain, windGain, windFilter, rainGain, rainFilter,
  waterGain, creatureCooldowns, thunderTimer, setThunderTimer
} from './core.js';
import { getGust } from '../weather.js';
import { queryNearTrees } from '../../utils/spatialHash.js';

// ================================================================
// Update (called per frame)
// ================================================================
let _rumble = null;

/**
 * @brief Is the player under a canopy? One squared check against the nearest
 * trees, not a raycast — this runs every frame.
 */
function underCanopy(playerPos) {
  if (!playerPos) return false;
  const near = queryNearTrees(playerPos.x, playerPos.z, 5);
  for (let i = 0; i < near.length; i++) {
    const t = near.items[i];
    const dx = t.x - playerPos.x, dz = t.z - playerPos.z;
    if (dx * dx + dz * dz < 16) return true;      // within 4 m of a trunk
  }
  return false;
}

/** A low bed that sits under a storm between the cracks. */
function startStormRumble() {
  if (!ctx || !brownBuf) return null;
  const src = ctx.createBufferSource();
  src.buffer = brownBuf;
  src.loop = true;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass'; lp.frequency.value = 110; lp.Q.value = 0.7;
  const gain = ctx.createGain();
  gain.gain.value = 0;
  src.connect(lp).connect(gain).connect(masterGain);
  src.start();
  return gain;
}

export function updateAudio(dt, windStrength, rainRate, isStorming, lightningFlash, phase, playerPos, ponds) {
  if (!initialized || muted) return;

  const now = ctx.currentTime;

  // Forest hum — subtle volume shift by time of day
  const forestVol = phase === 'DEEP_NIGHT' ? 0.07 : phase === 'DAWN' ? 0.03 : 0.05;
  forestGain.gain.linearRampToValueAtTime(forestVol, now + 0.1);
  forest2Gain.gain.linearRampToValueAtTime(forestVol * 0.6, now + 0.1);

  // Wind — the steady wind plus whatever the gust is doing. The gust was
  // visible in the canopy but inaudible, so a gust crossing the forest moved
  // the trees in silence.
  const _gust = getGust();
  const _wind = windStrength + _gust;
  const windVol = Math.min(_wind * 0.12, 0.22);
  const windFreq = 200 + _wind * 600;
  windGain.gain.linearRampToValueAtTime(windVol, now + 0.1);
  windFilter.frequency.linearRampToValueAtTime(windFreq, now + 0.1);

  // Rain — louder and brighter the harder it falls. Under a canopy it is
  // quieter but duller: the leaves take the top off before it reaches you,
  // which is most of what being under a tree in rain sounds like.
  const _canopy = underCanopy(playerPos);
  const rainVol = rainRate * (_canopy ? 0.11 : 0.15);
  const rainFreq = (1200 + rainRate * 2000) * (_canopy ? 0.55 : 1);
  rainGain.gain.linearRampToValueAtTime(rainVol, now + 0.1);
  rainFilter.frequency.linearRampToValueAtTime(rainFreq, now + 0.1);

  // A storm has a floor under it, not just thunder cracks. isStorming was
  // imported and passed into this function and never read — the whole storm
  // bed was missing, and a thunderstorm sounded like ordinary rain between
  // strikes.
  const rumbleTarget = isStorming ? 0.055 : 0;
  if (_rumble) _rumble.gain.setTargetAtTime(rumbleTarget, now, 1.2);
  else if (isStorming) _rumble = startStormRumble();

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
