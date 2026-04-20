// ================================================================
// Audio Core — AudioContext, reverb, noise buffers, shared helpers
// ================================================================

import { on, Events } from '../../kernel/eventBus.js';

export let ctx = null;
export let masterGain = null;
export let reverbGain = null;
let reverbDelay = null;
export let initialized = false;
export let muted = false;

// Environmental muffling filter
export let muffleFilter = null;

// Noise buffers (generated once)
export let brownBuf = null;
export let brownBuf2 = null;
export let whiteBuf = null;

// Audio sync progression — orb count affects audio layers
let _audioOrbCount = 0;
export function setAudioOrbCount(count) { _audioOrbCount = count; }
export function cooldownMult() { return _audioOrbCount >= 2 ? 0.5 : 1.0; }

// ================================================================
// Noise buffer generation
// ================================================================
export function createNoiseBuffer(type, duration) {
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
  const fadeLen = Math.min(Math.floor(ctx.sampleRate * 0.5), len >> 2);
  for (let i = 0; i < fadeLen; i++) {
    const t = i / fadeLen;
    const endIdx = len - fadeLen + i;
    data[endIdx] = data[endIdx] * (1 - t) + data[i] * t;
  }
  return buf;
}

export function loopNoise(buffer, gainVal, filterFreq, highpassFreq) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const gain = ctx.createGain();
  gain.gain.value = gainVal;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = filterFreq;
  filter.Q.value = 0.5;
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

  delay1.connect(filter1).connect(hp1).connect(fb1).connect(delay1);
  delay2.connect(filter2).connect(hp2).connect(fb2).connect(delay2);
  delay1.connect(wet);
  delay2.connect(wet);
  wet.connect(masterGain);

  const input = ctx.createGain();
  input.gain.value = 1.0;
  input.connect(delay1);
  input.connect(delay2);

  reverbGain = input;
}

export function connectWithReverb(node, dryDest, wetAmount) {
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
// Event subscriptions are registered by initAudio after AudioContext starts.
// The actual sound functions are imported lazily to avoid circular deps.
let _eventSubscriber = null;
export function setEventSubscriber(fn) { _eventSubscriber = fn; }

export function initAudio() {
  const handler = () => {
    if (initialized) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.42;
      masterGain.connect(ctx.destination);

      muffleFilter = ctx.createBiquadFilter();
      muffleFilter.type = 'lowpass';
      muffleFilter.frequency.value = 20000;
      muffleFilter.connect(masterGain);

      brownBuf = createNoiseBuffer('brown', 16);
      brownBuf2 = createNoiseBuffer('brown', 11);
      whiteBuf = createNoiseBuffer('white', 9);

      createReverb();

      // Forest hum: two layers at co-prime buffer lengths
      const fh = loopNoise(brownBuf, 0.05, 200, 50);
      forestNode = fh.node; forestGain = fh.gain; forestFilter = fh.filter;
      const fh2 = loopNoise(brownBuf2, 0.03, 350, 80);
      forest2Node = fh2.node; forest2Gain = fh2.gain;

      // Wind
      const wn = loopNoise(whiteBuf, 0, 400, 60);
      windNode = wn.node; windGain = wn.gain; windFilter = wn.filter;

      // Rain
      const rn = loopNoise(whiteBuf, 0, 2000, 80);
      rainNode = rn.node; rainGain = rn.gain; rainFilter = rn.filter;

      // Water
      const wt = loopNoise(brownBuf2, 0, 600, 60);
      waterNode = wt.node; waterGain = wt.gain; waterFilter = wt.filter;

      initialized = true;

      // Subscribe to kernel events
      if (_eventSubscriber) _eventSubscriber();

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

// Ambient layer nodes (owned by core, updated by ambient.js)
let forestNode = null;
export let forestGain = null;
export let forestFilter = null;
let forest2Node = null;
export let forest2Gain = null;
let windNode = null;
export let windGain = null;
export let windFilter = null;
let rainNode = null;
export let rainGain = null;
export let rainFilter = null;
let waterNode = null;
export let waterGain = null;
export let waterFilter = null;

// Creature sound cooldowns
export const creatureCooldowns = { jelly: 0, puff: 0, deer: 0, moth: 0, puffSing: 0 };

// Thunder state
export let thunderTimer = 0;
export function setThunderTimer(v) { thunderTimer = v; }

// ================================================================
// Toggle mute
// ================================================================
export function toggleMute() {
  muted = !muted;
  if (masterGain) masterGain.gain.value = muted ? 0 : 0.42;
  return muted;
}

export function isMuted() { return muted; }
