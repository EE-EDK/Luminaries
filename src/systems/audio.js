// ================================================================
// Audio System — Procedural Ambient Soundscape + Creature + Player
// ================================================================
// Uses Web Audio API for procedural sounds (no audio files needed).
// Layers: forest hum, wind, rain, thunder, water (spatial), creatures, footsteps.

let ctx = null;
let masterGain = null;
let initialized = false;
let muted = false;

// Noise buffers (generated once)
let brownBuf = null;
let whiteBuf = null;

// Ambient layers
let forestNode = null, forestGain = null, forestFilter = null;
let windNode = null, windGain = null, windFilter = null;
let rainNode = null, rainGain = null, rainFilter = null;

// Thunder state
let thunderTimer = 0;

// Water (updated per-frame based on proximity to ponds)
let waterNode = null, waterGain = null, waterFilter = null;

// Creature sound cooldowns
const creatureCooldowns = { jelly: 0, puff: 0, deer: 0, moth: 0 };

// Footstep state
let lastStepPhase = 0;

// ================================================================
// Noise buffer generation
// ================================================================
function createNoiseBuffer(type, duration) {
  const len = ctx.sampleRate * duration;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  if (type === 'white') {
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  } else if (type === 'brown') {
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      data[i] = (last + 0.02 * w) / 1.02;
      last = data[i];
      data[i] *= 3.5; // normalize
    }
  }
  return buf;
}

function loopNoise(buffer, gainVal, filterFreq) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const gain = ctx.createGain();
  gain.gain.value = gainVal;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = filterFreq;
  filter.Q.value = 0.5;
  src.connect(filter).connect(gain).connect(masterGain);
  src.start();
  return { node: src, gain, filter };
}

// ================================================================
// Init
// ================================================================
export function initAudio() {
  // Defer creation until first user interaction (autoplay policy)
  const handler = () => {
    if (initialized) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.35;
      masterGain.connect(ctx.destination);

      // Generate noise buffers (2s looped)
      brownBuf = createNoiseBuffer('brown', 2);
      whiteBuf = createNoiseBuffer('white', 2);

      // --- Forest hum: gentle brown noise ---
      const fh = loopNoise(brownBuf, 0.12, 180);
      forestNode = fh.node; forestGain = fh.gain; forestFilter = fh.filter;

      // --- Wind: white noise filtered, volume driven by weather ---
      const wn = loopNoise(whiteBuf, 0, 400);
      windNode = wn.node; windGain = wn.gain; windFilter = wn.filter;

      // --- Rain: white noise, higher filter, volume driven by rain rate ---
      const rn = loopNoise(whiteBuf, 0, 2000);
      rainNode = rn.node; rainGain = rn.gain; rainFilter = rn.filter;

      // --- Water: brown noise for pond proximity ---
      const wt = loopNoise(brownBuf, 0, 600);
      waterNode = wt.node; waterGain = wt.gain; waterFilter = wt.filter;

      initialized = true;
    } catch (e) {
      console.warn('Audio init failed:', e);
    }
    document.removeEventListener('click', handler);
    document.removeEventListener('keydown', handler);
    document.removeEventListener('touchstart', handler);
  };
  document.addEventListener('click', handler);
  document.addEventListener('keydown', handler);
  document.addEventListener('touchstart', handler);
}

// ================================================================
// Update (called per frame)
// ================================================================
export function updateAudio(dt, windStrength, rainRate, isStorming, lightningFlash, phase, playerPos, ponds) {
  if (!initialized || muted) return;

  const now = ctx.currentTime;

  // --- Forest hum: slightly quieter at dawn, louder at deep night ---
  const forestVol = phase === 'DEEP_NIGHT' ? 0.15 : phase === 'DAWN' ? 0.08 : 0.12;
  forestGain.gain.linearRampToValueAtTime(forestVol, now + 0.1);

  // --- Wind volume/filter scales with wind strength ---
  const windVol = Math.min(windStrength * 0.18, 0.3);
  const windFreq = 200 + windStrength * 600;
  windGain.gain.linearRampToValueAtTime(windVol, now + 0.1);
  windFilter.frequency.linearRampToValueAtTime(windFreq, now + 0.1);

  // --- Rain ---
  const rainVol = rainRate * 0.25;
  const rainFreq = 1200 + rainRate * 2000;
  rainGain.gain.linearRampToValueAtTime(rainVol, now + 0.1);
  rainFilter.frequency.linearRampToValueAtTime(rainFreq, now + 0.1);

  // --- Thunder ---
  if (lightningFlash > 0.5 && thunderTimer <= 0) {
    playThunder();
    thunderTimer = 2 + Math.random() * 3;
  }
  thunderTimer -= dt;

  // --- Water proximity (nearest pond within 15m) ---
  let waterDist = Infinity;
  if (playerPos && ponds) {
    for (let i = 0; i < ponds.length; i++) {
      const dx = ponds[i].x - playerPos.x, dz = ponds[i].z - playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < waterDist) waterDist = d2;
    }
  }
  const waterProx = waterDist < 225 ? (1 - Math.sqrt(waterDist) / 15) : 0;
  const waterVol = waterProx * 0.12;
  waterGain.gain.linearRampToValueAtTime(waterVol, now + 0.1);

  // --- Creature cooldowns ---
  creatureCooldowns.jelly -= dt;
  creatureCooldowns.puff -= dt;
  creatureCooldowns.deer -= dt;
  creatureCooldowns.moth -= dt;
}

// ================================================================
// Thunder burst
// ================================================================
function playThunder() {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = 'sawtooth';
  osc.frequency.value = 40 + Math.random() * 30;
  filter.type = 'lowpass';
  filter.frequency.value = 100;
  filter.Q.value = 1;
  gain.gain.setValueAtTime(0.4, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8 + Math.random() * 0.5);
  osc.connect(filter).connect(gain).connect(masterGain);
  osc.start();
  osc.stop(ctx.currentTime + 1.5);

  // Rumble layer
  const noise = ctx.createBufferSource();
  noise.buffer = brownBuf;
  const nGain = ctx.createGain();
  const nFilter = ctx.createBiquadFilter();
  nFilter.type = 'lowpass';
  nFilter.frequency.value = 80;
  nGain.gain.setValueAtTime(0.3, ctx.currentTime);
  nGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
  noise.connect(nFilter).connect(nGain).connect(masterGain);
  noise.start();
  noise.stop(ctx.currentTime + 1.5);
}

// ================================================================
// Creature Sounds (spatial tones)
// ================================================================
export function playCreatureSound(type, position, playerPos) {
  if (!initialized || muted || !ctx) return;
  if (creatureCooldowns[type] > 0) return;

  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 900) return; // > 30m away, skip

  const dist = Math.sqrt(d2);
  const vol = Math.max(0, 1 - dist / 30) * 0.15;
  const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const panner = ctx.createStereoPanner();
  panner.pan.value = pan;

  const now = ctx.currentTime;

  switch (type) {
    case 'jelly': // soft harmonic hum
      osc.type = 'sine';
      osc.frequency.setValueAtTime(280 + Math.random() * 80, now);
      osc.frequency.linearRampToValueAtTime(220 + Math.random() * 60, now + 0.6);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.connect(gain).connect(panner).connect(masterGain);
      osc.start(); osc.stop(now + 0.8);
      creatureCooldowns.jelly = 3 + Math.random() * 4;
      break;

    case 'puff': // short chirp
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.15);
      gain.gain.setValueAtTime(vol * 0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain).connect(panner).connect(masterGain);
      osc.start(); osc.stop(now + 0.2);
      creatureCooldowns.puff = 2 + Math.random() * 3;
      break;

    case 'deer': // low snort/call
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120 + Math.random() * 40, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.3);
      const deerFilter = ctx.createBiquadFilter();
      deerFilter.type = 'lowpass'; deerFilter.frequency.value = 300;
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(deerFilter).connect(gain).connect(panner).connect(masterGain);
      osc.start(); osc.stop(now + 0.5);
      creatureCooldowns.deer = 4 + Math.random() * 5;
      break;

    case 'moth': // soft flutter
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180 + Math.random() * 100, now);
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 20 + Math.random() * 10; // flutter rate
      lfoGain.gain.value = 50;
      lfo.connect(lfoGain).connect(osc.frequency);
      gain.gain.setValueAtTime(vol * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain).connect(panner).connect(masterGain);
      lfo.start(); osc.start();
      lfo.stop(now + 0.35); osc.stop(now + 0.35);
      creatureCooldowns.moth = 3 + Math.random() * 4;
      break;
  }
}

// ================================================================
// Player Sounds
// ================================================================
let stepCooldown = 0;

export function playFootstep(sprinting, nearWater) {
  if (!initialized || muted || !ctx) return;
  if (stepCooldown > 0) return;

  const now = ctx.currentTime;

  if (nearWater) {
    // Splash sound: short noise burst
    const noise = ctx.createBufferSource();
    noise.buffer = whiteBuf;
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass'; filter.frequency.value = 2000; filter.Q.value = 0.5;
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    noise.connect(filter).connect(gain).connect(masterGain);
    noise.start(); noise.stop(now + 0.15);
  } else {
    // Soft thud: low click
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 80 + Math.random() * 40;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain).connect(masterGain);
    osc.start(); osc.stop(now + 0.1);
  }
  stepCooldown = sprinting ? 0.22 : 0.35;
}

export function playJumpSound() {
  if (!initialized || muted || !ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.04, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.connect(gain).connect(masterGain);
  osc.start(); osc.stop(now + 0.2);
}

export function playLandSound(impactStrength) {
  if (!initialized || muted || !ctx) return;
  const now = ctx.currentTime;
  const noise = ctx.createBufferSource();
  noise.buffer = brownBuf;
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass'; filter.frequency.value = 200;
  gain.gain.setValueAtTime(impactStrength * 0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  noise.connect(filter).connect(gain).connect(masterGain);
  noise.start(); noise.stop(now + 0.25);
}

export function updateStepCooldown(dt) {
  if (stepCooldown > 0) stepCooldown -= dt;
}

// ================================================================
// Bubble pop sound
// ================================================================
export function playBubblePop(position, playerPos) {
  if (!initialized || muted || !ctx) return;
  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 400) return;
  const vol = Math.max(0, 1 - Math.sqrt(d2) / 20) * 0.08;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800 + Math.random() * 400, now);
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  osc.connect(gain).connect(masterGain);
  osc.start(); osc.stop(now + 0.12);
}

// ================================================================
// Orb collection sound
// ================================================================
export function playOrbCollect() {
  if (!initialized || muted || !ctx) return;
  const now = ctx.currentTime;
  // Rising harmonic chord
  const freqs = [440, 554, 659, 880];
  for (let i = 0; i < freqs.length; i++) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freqs[i], now + i * 0.1);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.06, now + i * 0.1 + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);
    osc.connect(gain).connect(masterGain);
    osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.7);
  }
}

// ================================================================
// Fairy ring bounce sound
// ================================================================
export function playFairyBounce() {
  if (!initialized || muted || !ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.exponentialRampToValueAtTime(800, now + 0.2);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
  osc.connect(gain).connect(masterGain);
  osc.start(); osc.stop(now + 0.5);
}

// ================================================================
// Toggle mute
// ================================================================
export function toggleMute() {
  muted = !muted;
  if (masterGain) masterGain.gain.value = muted ? 0 : 0.35;
  return muted;
}

export function isMuted() { return muted; }

// ================================================================
// Ambient Creature Sounds — Frogs at Ponds & Crickets in Grass
// ================================================================
// Persistent spatial layers: frog chorus near ponds, cricket chirps near grass.
// Uses oscillators + filtered noise — zero GPU cost.

// Frog layer (pond proximity)
let frogOsc1 = null, frogOsc2 = null, frogGain = null, frogLFO = null, frogLFOGain = null;
let frogChirpTimer = 0;

// Cricket layer (grass proximity)
let cricketNode = null, cricketGain = null, cricketFilter = null;
let cricketLFO = null, cricketLFOGain = null;

let ambientInited = false;

export function initAmbientSounds() {
  // Deferred — called after AudioContext is live
}

function ensureAmbient() {
  if (ambientInited || !ctx) return;
  ambientInited = true;

  // --- Cricket layer: high-frequency filtered noise with AM chirp ---
  const cNode = ctx.createBufferSource();
  cNode.buffer = whiteBuf;
  cNode.loop = true;
  const cFilter = ctx.createBiquadFilter();
  cFilter.type = 'bandpass';
  cFilter.frequency.value = 4500;
  cFilter.Q.value = 2.0;
  const cGain = ctx.createGain();
  cGain.gain.value = 0;
  // AM modulation for chirp rhythm
  const cLFO = ctx.createOscillator();
  cLFO.type = 'square';
  cLFO.frequency.value = 12; // chirp rate
  const cLFOGain = ctx.createGain();
  cLFOGain.gain.value = 0.5;
  cLFO.connect(cLFOGain).connect(cGain.gain);
  cNode.connect(cFilter).connect(cGain).connect(masterGain);
  cNode.start();
  cLFO.start();
  cricketNode = cNode; cricketGain = cGain; cricketFilter = cFilter;
  cricketLFO = cLFO; cricketLFOGain = cLFOGain;

  // --- Frog layer: two detuned oscillators for rich croak ---
  const fGain = ctx.createGain();
  fGain.gain.value = 0;
  const fO1 = ctx.createOscillator();
  fO1.type = 'square';
  fO1.frequency.value = 180;
  const fO2 = ctx.createOscillator();
  fO2.type = 'square';
  fO2.frequency.value = 220;
  const fFilter1 = ctx.createBiquadFilter();
  fFilter1.type = 'lowpass';
  fFilter1.frequency.value = 400;
  fFilter1.Q.value = 1.5;
  const fFilter2 = ctx.createBiquadFilter();
  fFilter2.type = 'lowpass';
  fFilter2.frequency.value = 450;
  fFilter2.Q.value = 1.5;
  // LFO for ribbit rhythm
  const fLFO = ctx.createOscillator();
  fLFO.type = 'sine';
  fLFO.frequency.value = 3.5;
  const fLFOGain = ctx.createGain();
  fLFOGain.gain.value = 0.5;
  fLFO.connect(fLFOGain).connect(fGain.gain);
  fO1.connect(fFilter1).connect(fGain);
  fO2.connect(fFilter2).connect(fGain);
  fGain.connect(masterGain);
  fO1.start(); fO2.start(); fLFO.start();
  frogOsc1 = fO1; frogOsc2 = fO2; frogGain = fGain;
  frogLFO = fLFO; frogLFOGain = fLFOGain;
}

export function updateAmbientSounds(dt, playerPos, ponds, grassPatches, dayPhase, rainRate) {
  if (!initialized || muted || !ctx) return;
  ensureAmbient();
  if (!ambientInited) return;

  const now = ctx.currentTime;

  // --- Day/night volume modifiers ---
  // Frogs: louder at NIGHT/DEEP_NIGHT, quieter at DAWN/DUSK
  const frogDayMult = (dayPhase === 'DEEP_NIGHT' || dayPhase === 'NIGHT') ? 1.0
    : dayPhase === 'DUSK' ? 0.5 : 0.3;
  // Crickets: louder at DUSK/NIGHT, quieter at DEEP_NIGHT/DAWN
  const cricketDayMult = (dayPhase === 'DUSK' || dayPhase === 'NIGHT') ? 1.0
    : dayPhase === 'DEEP_NIGHT' ? 0.6 : 0.3;

  // Weather damping — quieter in rain/storms
  const weatherDamp = Math.max(0.15, 1.0 - rainRate * 0.7);

  // --- Frog proximity (nearest pond within 20m) ---
  let pondDist2 = Infinity;
  if (playerPos && ponds) {
    for (let i = 0; i < ponds.length; i++) {
      const dx = ponds[i].x - playerPos.x, dz = ponds[i].z - playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < pondDist2) pondDist2 = d2;
    }
  }
  const frogProx = pondDist2 < 400 ? (1 - Math.sqrt(pondDist2) / 20) : 0;
  const frogVol = frogProx * 0.06 * frogDayMult * weatherDamp;
  frogGain.gain.linearRampToValueAtTime(frogVol, now + 0.15);

  // Vary frog pitch slightly over time
  frogChirpTimer += dt;
  if (frogChirpTimer > 2 + Math.random() * 3) {
    frogChirpTimer = 0;
    const basePitch = 160 + Math.random() * 60;
    frogOsc1.frequency.linearRampToValueAtTime(basePitch, now + 0.3);
    frogOsc2.frequency.linearRampToValueAtTime(basePitch + 30 + Math.random() * 20, now + 0.3);
    frogLFO.frequency.linearRampToValueAtTime(2.5 + Math.random() * 3, now + 0.3);
  }

  // --- Cricket proximity (nearest grass patch within 12m) ---
  let grassDist2 = Infinity;
  if (playerPos && grassPatches) {
    for (let i = 0; i < grassPatches.length; i++) {
      const dx = grassPatches[i].cx - playerPos.x, dz = grassPatches[i].cz - playerPos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < grassDist2) grassDist2 = d2;
    }
  }
  const cricketProx = grassDist2 < 144 ? (1 - Math.sqrt(grassDist2) / 12) : 0;
  const cricketVol = cricketProx * 0.04 * cricketDayMult * weatherDamp;
  cricketGain.gain.linearRampToValueAtTime(cricketVol, now + 0.15);

  // Vary cricket chirp rate with temperature (day phase proxy)
  const chirpRate = dayPhase === 'DUSK' ? 14 : dayPhase === 'NIGHT' ? 12 : 9;
  cricketLFO.frequency.linearRampToValueAtTime(chirpRate, now + 0.5);
}
