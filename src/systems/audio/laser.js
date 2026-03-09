// ================================================================
// Audio Laser — Laser zap, hum, update, stop
// ================================================================

import { ctx, initialized, muted, masterGain, connectWithReverb, whiteBuf } from './core.js';

const laserHums = [];

export function playLaserZap() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

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

  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(2000, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
  const oscFilter = ctx.createBiquadFilter();
  oscFilter.type = 'lowpass'; oscFilter.frequency.value = 4000;
  const oscGain = ctx.createGain();
  oscGain.gain.setValueAtTime(0.06, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  osc.connect(oscFilter).connect(oscGain);
  connectWithReverb(oscGain, masterGain, 0.3);

  const tail = ctx.createOscillator();
  tail.type = 'sawtooth';
  tail.frequency.setValueAtTime(80, now + 0.15);
  tail.frequency.linearRampToValueAtTime(55, now + 2.0);
  const tailFilter = ctx.createBiquadFilter();
  tailFilter.type = 'bandpass'; tailFilter.frequency.value = 180; tailFilter.Q.value = 3;
  const tailGain = ctx.createGain();
  tailGain.gain.setValueAtTime(0, now);
  tailGain.gain.linearRampToValueAtTime(0.03, now + 0.2);
  tailGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
  tail.connect(tailFilter).connect(tailGain).connect(masterGain);

  noise.start(now); noise.stop(now + 0.4);
  osc.start(now); osc.stop(now + 0.25);
  tail.start(now + 0.1); tail.stop(now + 2.2);
}

export function playLaserHum(x, z) {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.value = 55 + Math.random() * 10;

  const mod = ctx.createOscillator();
  const modGain = ctx.createGain();
  mod.type = 'square';
  mod.frequency.value = 120 + Math.random() * 60;
  modGain.gain.value = 15;
  mod.connect(modGain).connect(osc.frequency);

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass'; filter.frequency.value = 200; filter.Q.value = 3;

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
    const vol = d2 < 625 ? Math.max(0, 1 - dist / 25) * 0.04 : 0;
    h.gain.gain.linearRampToValueAtTime(vol, now + 0.1);
    const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));
    h.panner.pan.linearRampToValueAtTime(pan, now + 0.1);
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
