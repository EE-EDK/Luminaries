// ================================================================
// Procedural Background Music — Calming Fantasy Ambient
// Drone + Harp + Flute + Chime + Bass Pulse over Major Pentatonic
// Chord progression: I - IV - vi - V (16s per chord)
// ================================================================

// ---- Injected dependencies (set via setupMusic) ----
let ctx = null;
let musicMasterGain = null;
let connectReverb = null;

// ---- Scale & Harmony ----
const SCALE = [0, 2, 4, 7, 9]; // Major Pentatonic (C D E G A)
const BASE_FREQ = 261.63;       // C4

// ---- Chord progression ----
const CHORD_PROG = [0, -3, 5, 4]; // I - IV - vi - V in scale degrees
const CHORD_DUR = 16;              // seconds per chord
let chordIndex = 0;
let chordTimer = 0;
let currentChordRoot = 0;

// ---- Layer timers ----
let droneTimer = 0;
let harpTimer = 2;
let fluteTimer = 10;
let chimeTimer = 5;
let bassTimer = 0;

// ---- Drone state ----
let activeDrones = [];
let activeDroneGains = [];

// ---- Init flag ----
let musicInited = false;

// ================================================================
// Setup — called by audio.js once AudioContext is live
// ================================================================
export function setupMusic(audioCtx, parentGain, connectWithReverbFn) {
  ctx = audioCtx;
  connectReverb = connectWithReverbFn;

  musicMasterGain = ctx.createGain();
  musicMasterGain.gain.value = 0.6;
  musicMasterGain.connect(parentGain);

  // Reset state
  chordIndex = 0;
  currentChordRoot = CHORD_PROG[0];
  chordTimer = 0;
  droneTimer = 0;
  bassTimer = 0;
  harpTimer = 2;
  fluteTimer = 8;
  chimeTimer = 5;
  activeDrones = [];
  activeDroneGains = [];
  musicInited = true;
}

// ================================================================
// Utility — scale degree to frequency
// ================================================================
function noteFreq(degree, octShift) {
  const scaleLen = SCALE.length;
  const octave = Math.floor(degree / scaleLen) + (octShift || 0);
  const idx = ((degree % scaleLen) + scaleLen) % scaleLen;
  const semitone = SCALE[idx];
  return BASE_FREQ * Math.pow(2, octave + semitone / 12);
}

// ================================================================
// Instrument: Deep Warm Drone (harmonic foundation)
// ================================================================
function playDrone(rootDegree) {
  if (!ctx || !musicMasterGain) return;
  const now = ctx.currentTime;

  // Fade out old drones
  for (let i = 0; i < activeDroneGains.length; i++) {
    activeDroneGains[i].gain.linearRampToValueAtTime(0.001, now + 4);
  }
  for (let i = 0; i < activeDrones.length; i++) {
    activeDrones[i].stop(now + 4.5);
  }
  activeDrones = [];
  activeDroneGains = [];

  // Root, fifth, octave up
  const freqs = [
    noteFreq(rootDegree, -2),
    noteFreq(rootDegree + 2, -2),
    noteFreq(rootDegree, -1)
  ];

  const droneMaster = ctx.createGain();
  droneMaster.gain.setValueAtTime(0, now);
  droneMaster.gain.linearRampToValueAtTime(0.06, now + 4);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 200;

  // Slow LFO on the filter for movement
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.05;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 50;
  lfo.connect(lfoGain).connect(filter.frequency);
  lfo.start(now);
  lfo.stop(now + 35);

  for (let i = 0; i < freqs.length; i++) {
    const osc = ctx.createOscillator();
    osc.type = i === 0 ? 'triangle' : 'sine';
    osc.frequency.value = freqs[i] * (1 + (Math.random() * 0.004 - 0.002));
    osc.connect(filter);
    osc.start(now);
    osc.stop(now + 35);
    activeDrones.push(osc);
  }

  filter.connect(droneMaster);
  connectReverb(droneMaster, musicMasterGain, 0.8);
  activeDroneGains.push(droneMaster);
}

// ================================================================
// Instrument: Soft Harp (plucked sine, bell-like)
// ================================================================
function playHarp(degree, delay, vol) {
  if (!ctx || !musicMasterGain) return;
  const v = vol !== undefined ? vol : 0.15;
  const now = ctx.currentTime + (delay || 0);
  const freq = noteFreq(degree, 0);

  const osc = ctx.createOscillator();
  osc.type = 'sine';

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(v, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(v * 0.3, now + 0.5);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

  osc.connect(gain);
  connectReverb(gain, musicMasterGain, 0.6);

  osc.start(now);
  osc.stop(now + 3.5);
}

// ================================================================
// Instrument: Ethereal Flute (triangle + vibrato, slow swell)
// ================================================================
function playFlute(degree, duration, delay) {
  if (!ctx || !musicMasterGain) return;
  const now = ctx.currentTime + (delay || 0);
  const dur = duration || 6;
  const freq = noteFreq(degree, 1);

  const osc = ctx.createOscillator();
  osc.type = 'triangle';

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.08, now + 1.5);
  gain.gain.setValueAtTime(0.08, now + dur - 1.5);
  gain.gain.linearRampToValueAtTime(0.001, now + dur);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = freq * 1.5;

  // Gentle vibrato
  const vib = ctx.createOscillator();
  vib.frequency.value = 4;
  const vibGain = ctx.createGain();
  vibGain.gain.value = freq * 0.01;
  vib.connect(vibGain).connect(osc.frequency);

  osc.connect(filter).connect(gain);
  connectReverb(gain, musicMasterGain, 0.9);

  vib.start(now);
  osc.start(now);
  vib.stop(now + dur + 0.1);
  osc.stop(now + dur + 0.1);
}

// ================================================================
// Instrument: Distant Chimes (sparkling high-end)
// ================================================================
function playChime(degree, delay) {
  if (!ctx || !musicMasterGain) return;
  const now = ctx.currentTime + (delay || 0);
  const freq = noteFreq(degree, 2);

  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  osc1.type = 'sine';
  osc2.type = 'sine';
  osc1.frequency.value = freq;
  osc2.frequency.value = freq * 1.005;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.04, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 4.0);

  osc1.connect(gain);
  osc2.connect(gain);
  connectReverb(gain, musicMasterGain, 0.8);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 4.5);
  osc2.stop(now + 4.5);
}

// ================================================================
// Instrument: Deep Bass Pulse (rhythmic anchor)
// ================================================================
function playBassPulse(degree) {
  if (!ctx || !musicMasterGain) return;
  const now = ctx.currentTime;
  const freq = noteFreq(degree, -3);

  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = freq;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.15, now + 0.5);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

  osc.connect(gain);
  connectReverb(gain, musicMasterGain, 0.3);

  osc.start(now);
  osc.stop(now + 3.5);
}

// ================================================================
// Generators — procedural phrase logic
// ================================================================
function generateHarpArpeggio() {
  const numNotes = 3 + Math.floor(Math.random() * 3);
  let currentDegree = currentChordRoot + (Math.random() < 0.5 ? 0 : 2);

  for (let i = 0; i < numNotes; i++) {
    playHarp(currentDegree, i * 0.3);
    currentDegree += (Math.random() < 0.7 ? 1 : 2);
  }

  return 4 + Math.random() * 6;
}

function generateFlutePhrase() {
  const duration = 6 + Math.random() * 4;
  const offsets = [0, 1, 2, 4];
  const degree = currentChordRoot + offsets[Math.floor(Math.random() * offsets.length)];

  playFlute(degree, duration, 0);

  return duration + 8 + Math.random() * 10;
}

function generateChimeCluster() {
  const numChimes = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < numChimes; i++) {
    const degree = currentChordRoot + Math.floor(Math.random() * 5);
    playChime(degree, i * 0.5 + Math.random() * 0.2);
  }
  return 8 + Math.random() * 12;
}

// ================================================================
// Update — called every frame from audio.js delegation
// ================================================================
export function updateMusic(dt, dayPhase, playerSpeed, nearMagical) {
  if (!musicInited || !ctx) return;

  // 1. Harmonic progression (16s per chord)
  droneTimer -= dt;
  if (droneTimer <= 0) {
    currentChordRoot = CHORD_PROG[chordIndex];
    playDrone(currentChordRoot);
    chordIndex = (chordIndex + 1) % CHORD_PROG.length;
    droneTimer = CHORD_DUR;
  }

  // 2. Bass pulse (every 8s)
  bassTimer -= dt;
  if (bassTimer <= 0) {
    playBassPulse(currentChordRoot);
    bassTimer = 8;
  }

  // 3. Harp arpeggios
  harpTimer -= dt;
  if (harpTimer <= 0) {
    harpTimer = generateHarpArpeggio();
  }

  // 4. Flute melodies
  fluteTimer -= dt;
  if (fluteTimer <= 0) {
    fluteTimer = generateFlutePhrase();
  }

  // 5. Chimes
  chimeTimer -= dt;
  if (chimeTimer <= 0) {
    chimeTimer = generateChimeCluster();
  }
}
