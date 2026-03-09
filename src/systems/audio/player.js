// ================================================================
// Audio Player — Footstep, jump, land sounds
// ================================================================

import { ctx, initialized, muted, masterGain, brownBuf, whiteBuf } from './core.js';

let stepCooldown = 0;

export function playFootstep(sprinting, nearWater) {
  if (!initialized || muted) return;
  if (stepCooldown > 0) return;

  const now = ctx.currentTime;

  if (nearWater) {
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
