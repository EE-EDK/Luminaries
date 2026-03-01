// ================================================================
// Audio System — Ethereal Ambient Soundscape + Musical Creature Sounds
// ================================================================
// Uses Web Audio API for procedural sounds (no audio files needed).
// All sounds designed to be soft, ethereal, and musical.
// Layers: forest hum, wind, rain, thunder, water, creatures, footsteps.
//
// LAB NOTE (Dr. Chen, acoustic analysis):
//   Every sound in this forest is synthesized from pure waveforms.
//   No recordings. No samples. Just math. And yet — participants
//   consistently report the soundscape feels "alive" and "aware."
//   One subject described hearing her own name in the wind harmonics.
//   We checked. It's a 3rd-order lowpass on brown noise. There are
//   no names. There shouldn't be names.

import { setupMusic, updateMusic as _updateMusic } from './music.js';

let ctx = null;
let masterGain = null;
let reverbGain = null; // Shared reverb send for ethereal wash
let reverbDelay = null;
let initialized = false;
let muted = false;

// Noise buffers (generated once)
let brownBuf = null;
let brownBuf2 = null; // second brown buffer at different length for layering
let whiteBuf = null;

// Ambient layers
let forestNode = null, forestGain = null, forestFilter = null;
let forest2Node = null, forest2Gain = null;
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
      data[i] *= 1.8;
    }
  }
  // Overlap-add crossfade for seamless looping
  const fadeLen = Math.min(Math.floor(ctx.sampleRate * 0.5), len >> 2); // 500ms
  for (let i = 0; i < fadeLen; i++) {
    const t = i / fadeLen;
    const endIdx = len - fadeLen + i;
    // Blend end of buffer with beginning for seamless wrap
    data[endIdx] = data[endIdx] * (1 - t) + data[i] * t;
  }
  return buf;
}

function loopNoise(buffer, gainVal, filterFreq, highpassFreq) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const gain = ctx.createGain();
  gain.gain.value = gainVal;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = filterFreq;
  filter.Q.value = 0.5;
  // Highpass to cut sub-bass rumble (default 40Hz)
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = highpassFreq || 40;
  hp.Q.value = 0.5;
  src.connect(hp).connect(filter).connect(gain).connect(masterGain);
  src.start();
  return { node: src, gain, filter };
}

// ================================================================
// Shared reverb — feedback delay for ethereal wash
// ================================================================
function createReverb() {
  // Simple stereo feedback delay as reverb approximation
  // Irrational delay times so echoes don't align with buffer loop points
  const delay1 = ctx.createDelay(1.0);
  delay1.delayTime.value = 0.55;
  const delay2 = ctx.createDelay(1.0);
  delay2.delayTime.value = 0.79;
  const fb1 = ctx.createGain();
  fb1.gain.value = 0.35;
  const fb2 = ctx.createGain();
  fb2.gain.value = 0.28;
  const filter1 = ctx.createBiquadFilter();
  filter1.type = 'lowpass';
  filter1.frequency.value = 2200;
  const filter2 = ctx.createBiquadFilter();
  filter2.type = 'lowpass';
  filter2.frequency.value = 1800;
  // Highpass in feedback path — prevents sub-bass accumulation / rumble
  const hp1 = ctx.createBiquadFilter();
  hp1.type = 'highpass';
  hp1.frequency.value = 120;
  hp1.Q.value = 0.5;
  const hp2 = ctx.createBiquadFilter();
  hp2.type = 'highpass';
  hp2.frequency.value = 120;
  hp2.Q.value = 0.5;
  const wet = ctx.createGain();
  wet.gain.value = 0.50;

  // Feedback loops with highpass to kill rumble buildup
  delay1.connect(filter1).connect(hp1).connect(fb1).connect(delay1);
  delay2.connect(filter2).connect(hp2).connect(fb2).connect(delay2);
  delay1.connect(wet);
  delay2.connect(wet);
  wet.connect(masterGain);

  // Input node — connect sounds here for reverb
  const input = ctx.createGain();
  input.gain.value = 1.0;
  input.connect(delay1);
  input.connect(delay2);

  reverbGain = input;
}

// Helper: connect a node to both dry (master) and wet (reverb) paths
function connectWithReverb(node, dryDest, wetAmount) {
  node.connect(dryDest);
  if (reverbGain && wetAmount > 0) {
    const wet = ctx.createGain();
    wet.gain.value = wetAmount;
    node.connect(wet).connect(reverbGain);
  }
}

// ================================================================
// Init
// ================================================================
export function initAudio() {
  const handler = () => {
    if (initialized) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.42;
      masterGain.connect(ctx.destination);

      // Generate noise buffers — long durations + co-prime lengths to mask loop seams
      brownBuf = createNoiseBuffer('brown', 16);
      brownBuf2 = createNoiseBuffer('brown', 11); // co-prime with 16
      whiteBuf = createNoiseBuffer('white', 9);   // co-prime with 16 and 11

      // Shared reverb (feedback delays with highpass to prevent rumble)
      createReverb();

      // Forest hum: two layers at co-prime buffer lengths so repetition is masked
      // Layer 1: warm low band (50-200Hz)
      const fh = loopNoise(brownBuf, 0.05, 200, 50);
      forestNode = fh.node; forestGain = fh.gain; forestFilter = fh.filter;
      // Layer 2: softer higher band (80-350Hz) on different buffer
      const fh2 = loopNoise(brownBuf2, 0.03, 350, 80);
      forest2Node = fh2.node; forest2Gain = fh2.gain;

      // Wind: white noise, starts silent, driven by weather system
      const wn = loopNoise(whiteBuf, 0, 400, 60);
      windNode = wn.node; windGain = wn.gain; windFilter = wn.filter;

      // Rain: white noise, starts silent, driven by weather system
      const rn = loopNoise(whiteBuf, 0, 2000, 80);
      rainNode = rn.node; rainGain = rn.gain; rainFilter = rn.filter;

      // Water: brown noise, starts silent, driven by pond proximity
      const wt = loopNoise(brownBuf2, 0, 600, 60);
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

  // Forest hum — subtle volume shift by time of day (both layers)
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
    thunderTimer = 2 + Math.random() * 3;
  }
  thunderTimer -= dt;

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

  // Rumble layer with highpass to prevent sub-bass boom
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

// ================================================================
// Creature Sounds — Ethereal & Musical
// ================================================================
export function playCreatureSound(type, position, playerPos) {
  if (!initialized || muted) return;
  if (creatureCooldowns[type] > 0) return;

  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 900) return;

  const dist = Math.sqrt(d2);
  const vol = Math.max(0, 1 - dist / 30) * 0.10;
  const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));

  const panner = ctx.createStereoPanner();
  panner.pan.value = pan;
  const now = ctx.currentTime;

  switch (type) {
    case 'jelly': {
      // Glass-harmonica: two detuned sines with gentle vibrato
      const baseFreq = 360 + Math.random() * 60;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, now);
      osc2.frequency.setValueAtTime(baseFreq + 3, now); // slight detune for warmth
      // Gentle descending glide
      osc1.frequency.linearRampToValueAtTime(baseFreq - 40, now + 1.2);
      osc2.frequency.linearRampToValueAtTime(baseFreq - 37, now + 1.2);
      // Vibrato
      const vib = ctx.createOscillator();
      const vibGain = ctx.createGain();
      vib.frequency.value = 4;
      vibGain.gain.value = 5;
      vib.connect(vibGain);
      vibGain.connect(osc1.frequency);
      vibGain.connect(osc2.frequency);
      // Envelope: soft attack, long sustain, gentle fade
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol, now + 0.15);
      gain.gain.setValueAtTime(vol, now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(panner);
      connectWithReverb(panner, masterGain, 0.4);
      vib.start(now); osc1.start(now); osc2.start(now);
      vib.stop(now + 1.5); osc1.stop(now + 1.5); osc2.stop(now + 1.5);
      creatureCooldowns.jelly = 4 + Math.random() * 5;
      break;
    }

    case 'puff': {
      // Musical chirp: 3-note ascending pentatonic arpeggio
      const base = 500 + Math.random() * 100;
      const notes = [base, base * 1.2, base * 1.5]; // minor pentatonic intervals
      for (let i = 0; i < notes.length; i++) {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = notes[i];
        const g = ctx.createGain();
        const noteStart = now + i * 0.07;
        g.gain.setValueAtTime(0, noteStart);
        g.gain.linearRampToValueAtTime(vol * 0.5, noteStart + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.15);
        osc.connect(g).connect(panner);
        osc.start(noteStart);
        osc.stop(noteStart + 0.18);
      }
      connectWithReverb(panner, masterGain, 0.3);
      creatureCooldowns.puff = 8 + Math.random() * 10;
      break;
    }

    case 'deer': {
      // Warm distant horn: two detuned triangles with slow attack
      const baseFreq = 100 + Math.random() * 30;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(baseFreq, now);
      osc2.frequency.setValueAtTime(baseFreq + 2, now);
      osc1.frequency.linearRampToValueAtTime(baseFreq - 15, now + 0.5);
      osc2.frequency.linearRampToValueAtTime(baseFreq - 13, now + 0.5);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 250;
      filter.Q.value = 0.5;
      const gain = ctx.createGain();
      // Slow attack for warm swell
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol * 0.7, now + 0.12);
      gain.gain.setValueAtTime(vol * 0.7, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain).connect(panner);
      connectWithReverb(panner, masterGain, 0.3);
      osc1.start(now); osc2.start(now);
      osc1.stop(now + 0.7); osc2.stop(now + 0.7);
      creatureCooldowns.deer = 5 + Math.random() * 6;
      break;
    }

    case 'moth': {
      // Soft whisper-flutter: quiet sine with gentle FM
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200 + Math.random() * 80, now);
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 8 + Math.random() * 4;
      lfoGain.gain.value = 12; // gentle modulation
      lfo.connect(lfoGain).connect(osc.frequency);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol * 0.2, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain).connect(panner);
      connectWithReverb(panner, masterGain, 0.2);
      lfo.start(now); osc.start(now);
      lfo.stop(now + 0.3); osc.stop(now + 0.3);
      creatureCooldowns.moth = 4 + Math.random() * 5;
      break;
    }
  }
}

// ================================================================
// Player Sounds
// ================================================================
let stepCooldown = 0;

export function playFootstep(sprinting, nearWater) {
  if (!initialized || muted) return;
  if (stepCooldown > 0) return;

  const now = ctx.currentTime;

  if (nearWater) {
    // Splash sound: short noise burst
    const noise = ctx.createBufferSource();
    noise.buffer = whiteBuf;
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass'; filter.frequency.value = 2000; filter.Q.value = 0.5;
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    noise.connect(filter).connect(gain).connect(masterGain);
    noise.start(); noise.stop(now + 0.15);
  } else {
    // Soft thud: low click
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 80 + Math.random() * 40;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain).connect(masterGain);
    osc.start(); osc.stop(now + 0.1);
  }
  stepCooldown = sprinting ? 0.22 : 0.35;
}

export function playJumpSound() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.03, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.connect(gain).connect(masterGain);
  osc.start(); osc.stop(now + 0.2);
}

export function playLandSound(impactStrength) {
  if (!initialized || muted) return;
  const now = ctx.currentTime;
  const noise = ctx.createBufferSource();
  noise.buffer = brownBuf;
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass'; filter.frequency.value = 200;
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass'; hp.frequency.value = 50; hp.Q.value = 0.5;
  gain.gain.setValueAtTime(impactStrength * 0.05, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  noise.connect(hp).connect(filter).connect(gain).connect(masterGain);
  noise.start(); noise.stop(now + 0.25);
}

export function updateStepCooldown(dt) {
  if (stepCooldown > 0) stepCooldown -= dt;
}

// ================================================================
// Bubble pop sound — gentle water drop
// ================================================================
export function playBubblePop(position, playerPos) {
  if (!initialized || muted) return;
  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 400) return;
  const vol = Math.max(0, 1 - Math.sqrt(d2) / 20) * 0.06;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(600 + Math.random() * 300, now);
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  osc.connect(gain).connect(masterGain);
  osc.start(); osc.stop(now + 0.15);
}

// ================================================================
// Orb collection sound — ethereal rising chord
// ================================================================
export function playOrbCollect() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;
  const freqs = [440, 554, 659, 880];
  for (let i = 0; i < freqs.length; i++) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freqs[i], now + i * 0.12);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.05, now + i * 0.12 + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.7);
    osc.connect(gain);
    connectWithReverb(gain, masterGain, 0.5);
    osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.8);
  }
}

// ================================================================
// Orb fly-up warble — ascending FM synthesis
// ================================================================
export function playOrbWarble() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  // Ascending carrier with vibrato
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.exponentialRampToValueAtTime(1200, now + 3.0);

  // Warble modulator — speeds up as pitch rises
  const vib = ctx.createOscillator();
  const vibGain = ctx.createGain();
  vib.frequency.setValueAtTime(6, now);
  vib.frequency.linearRampToValueAtTime(12, now + 3.0);
  vibGain.gain.value = 20;
  vib.connect(vibGain).connect(osc.frequency);

  // Second harmonic for richness
  const osc2 = ctx.createOscillator();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(600, now);
  osc2.frequency.exponentialRampToValueAtTime(2400, now + 3.0);

  // Envelope: fade in, sustain, fade out
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.04, now + 0.2);
  gain.gain.setValueAtTime(0.04, now + 2.0);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);

  osc.connect(gain);
  osc2.connect(gain);
  connectWithReverb(gain, masterGain, 0.6);

  vib.start(now); osc.start(now); osc2.start(now);
  vib.stop(now + 4); osc.stop(now + 4); osc2.stop(now + 4);
}

// ================================================================
// Laser zap — electrical discharge when laser spawns
// ================================================================
export function playLaserZap() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  // White noise burst — electrical crackle
  const noise = ctx.createBufferSource();
  noise.buffer = whiteBuf;
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.setValueAtTime(3000, now);
  noiseFilter.frequency.exponentialRampToValueAtTime(500, now + 0.3);
  noiseFilter.Q.value = 2;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.08, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
  noise.connect(noiseFilter).connect(noiseGain).connect(masterGain);

  // Descending zap tone
  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(2000, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
  const oscFilter = ctx.createBiquadFilter();
  oscFilter.type = 'lowpass';
  oscFilter.frequency.value = 4000;
  const oscGain = ctx.createGain();
  oscGain.gain.setValueAtTime(0.06, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  osc.connect(oscFilter).connect(oscGain);
  connectWithReverb(oscGain, masterGain, 0.3);

  // Sustained electrical tail
  const tail = ctx.createOscillator();
  tail.type = 'sawtooth';
  tail.frequency.setValueAtTime(80, now + 0.15);
  tail.frequency.linearRampToValueAtTime(55, now + 2.0);
  const tailFilter = ctx.createBiquadFilter();
  tailFilter.type = 'bandpass';
  tailFilter.frequency.value = 180;
  tailFilter.Q.value = 3;
  const tailGain = ctx.createGain();
  tailGain.gain.setValueAtTime(0, now);
  tailGain.gain.linearRampToValueAtTime(0.03, now + 0.2);
  tailGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
  tail.connect(tailFilter).connect(tailGain).connect(masterGain);

  noise.start(now); noise.stop(now + 0.4);
  osc.start(now); osc.stop(now + 0.25);
  tail.start(now + 0.1); tail.stop(now + 2.2);
}

// ================================================================
// Laser electrical hum — continuous buzzing near active lasers
// ================================================================
const laserHums = []; // { osc, mod, gain, panner, filter, x, z }

export function playLaserHum(x, z) {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  // Low buzz (detuned sawtooths for beating)
  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.value = 55 + Math.random() * 10;

  // FM modulator for crackle character
  const mod = ctx.createOscillator();
  const modGain = ctx.createGain();
  mod.type = 'square';
  mod.frequency.value = 120 + Math.random() * 60;
  modGain.gain.value = 15;
  mod.connect(modGain).connect(osc.frequency);

  // Harsh bandpass for electrical buzzy quality
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 200;
  filter.Q.value = 3;

  const gain = ctx.createGain();
  gain.gain.value = 0;

  const panner = ctx.createStereoPanner();

  osc.connect(filter).connect(gain).connect(panner).connect(masterGain);
  mod.start(now); osc.start(now);

  laserHums.push({ osc, mod, gain, panner, filter, x, z });
}

export function updateLaserHums(playerPos) {
  if (!initialized || !ctx) return;
  const now = ctx.currentTime;
  for (let i = 0; i < laserHums.length; i++) {
    const h = laserHums[i];
    const dx = h.x - playerPos.x, dz = h.z - playerPos.z;
    const d2 = dx * dx + dz * dz;
    const dist = Math.sqrt(d2);

    // Audible within 25m, louder within 10m
    const vol = d2 < 625 ? Math.max(0, 1 - dist / 25) * 0.04 : 0;
    h.gain.gain.linearRampToValueAtTime(vol, now + 0.1);

    // Spatial panning
    const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));
    h.panner.pan.linearRampToValueAtTime(pan, now + 0.1);

    // Subtle filter sweep for variation
    h.filter.frequency.value = 180 + Math.sin(now * 0.5 + i) * 40;
  }
}

export function stopLaserHums() {
  if (!ctx) return;
  const now = ctx.currentTime;
  for (let i = 0; i < laserHums.length; i++) {
    const h = laserHums[i];
    h.gain.gain.linearRampToValueAtTime(0, now + 0.5);
    h.osc.stop(now + 0.6);
    h.mod.stop(now + 0.6);
  }
  laserHums.length = 0;
}

// ================================================================
// Fairy ring bounce — musical chime
// ================================================================
export function playFairyBounce() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.06, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
  osc.connect(gain);
  connectWithReverb(gain, masterGain, 0.4);
  osc.start(); osc.stop(now + 0.6);
}

// ================================================================
// Toggle mute
// ================================================================
export function toggleMute() {
  muted = !muted;
  if (masterGain) masterGain.gain.value = muted ? 0 : 0.42;
  return muted;
}

export function isMuted() { return muted; }

// ================================================================
// Ambient Creature Sounds — Soft Musical Frogs & Cricket Chimes
// ================================================================
// Frogs: gentle sine-based tones near ponds (not square waves)
// Crickets: periodic soft high-pitched bell pings near grass (not noise)

// Frog layer (pond proximity) — soft sine oscillators
let frogOsc1 = null, frogOsc2 = null, frogGain = null;
let frogFilter = null;
let frogChirpTimer = 0;
let frogPulsePhase = 0; // JS-driven pulse instead of audio-rate LFO

// Cricket layer — replaced with periodic ping system
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

  // --- Frog layer: two soft detuned SINE oscillators (not square) ---
  // No audio-rate LFO — pulsing is driven from JS in updateAmbientSounds
  // so gain is truly 0 when not near a pond.
  const fGain = ctx.createGain();
  fGain.gain.value = 0;
  const fO1 = ctx.createOscillator();
  fO1.type = 'sine';
  fO1.frequency.value = 160;
  const fO2 = ctx.createOscillator();
  fO2.type = 'sine';
  fO2.frequency.value = 190;
  const fFilter = ctx.createBiquadFilter();
  fFilter.type = 'lowpass';
  fFilter.frequency.value = 350;
  fFilter.Q.value = 0.5;
  fO1.connect(fFilter).connect(fGain);
  fO2.connect(fFilter);
  fGain.connect(masterGain);
  fO1.start(); fO2.start();
  frogOsc1 = fO1; frogOsc2 = fO2; frogGain = fGain; frogFilter = fFilter;
}

// Cricket chime — spawn a single soft sine ping
function spawnCricketPing(vol) {
  if (!ctx || vol < 0.001) return;
  const now = ctx.currentTime;
  const freq = 1800 + Math.random() * 800; // 1800-2600 Hz — softer range
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = freq;
  // Gentle pitch drop for bell character
  osc.frequency.exponentialRampToValueAtTime(freq * 0.88, now + 0.1);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(vol * 0.5, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  osc.connect(gain).connect(masterGain);
  osc.start(now);
  osc.stop(now + 0.12);
}

export function updateAmbientSounds(dt, playerPos, ponds, grassPatches, dayPhase, rainRate) {
  if (!initialized || muted) return;
  ensureAmbient();
  if (!ambientInited) return;

  const now = ctx.currentTime;

  // --- Day/night volume modifiers ---
  const frogDayMult = (dayPhase === 'DEEP_NIGHT' || dayPhase === 'NIGHT') ? 1.0
    : dayPhase === 'DUSK' ? 0.5 : 0.3;
  cricketDayMult = (dayPhase === 'DUSK' || dayPhase === 'NIGHT') ? 1.0
    : dayPhase === 'DEEP_NIGHT' ? 0.6 : 0.3;

  // Weather damping
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
  // JS-driven pulse replaces audio-rate LFO — truly silent when far from ponds
  frogPulsePhase += dt * 2.0;
  const pulse = 0.7 + 0.3 * Math.sin(frogPulsePhase * Math.PI * 2);
  const frogVol = frogProx * 0.025 * frogDayMult * weatherDamp * pulse;
  frogGain.gain.linearRampToValueAtTime(frogVol, now + 0.15);

  // Vary frog pitch gently over time
  frogChirpTimer += dt;
  if (frogChirpTimer > 3 + Math.random() * 4) {
    frogChirpTimer = 0;
    const basePitch = 150 + Math.random() * 40;
    frogOsc1.frequency.linearRampToValueAtTime(basePitch, now + 0.5);
    frogOsc2.frequency.linearRampToValueAtTime(basePitch + 20 + Math.random() * 15, now + 0.5);
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
  cricketVolTarget = cricketProx * 0.02 * cricketDayMult * weatherDamp;

  // Spawn periodic cricket bell-pings based on proximity
  if (cricketVolTarget > 0.001) {
    cricketPingTimer -= dt;
    if (cricketPingTimer <= 0) {
      spawnCricketPing(cricketVolTarget);
      // Relaxed interval — 1.5s to 4.5s between pings
      const rate = 1.5 + (1 - cricketProx) * 1.5;
      cricketPingTimer = rate + Math.random() * rate;
    }
  } else {
    cricketPingTimer = 0;
  }
}

// ================================================================
// Procedural Background Music — delegated to music.js
// ================================================================
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
