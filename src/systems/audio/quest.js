// ================================================================
// Audio Quest — Bubble pop, orb collect/warble/reject, fairy bounce
// ================================================================

import { ctx, initialized, muted, masterGain, connectWithReverb, whiteBuf } from './core.js';

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

export function playOrbWarble() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.exponentialRampToValueAtTime(1200, now + 3.0);

  const vib = ctx.createOscillator();
  const vibGain = ctx.createGain();
  vib.frequency.setValueAtTime(6, now);
  vib.frequency.linearRampToValueAtTime(12, now + 3.0);
  vibGain.gain.value = 20;
  vib.connect(vibGain).connect(osc.frequency);

  const osc2 = ctx.createOscillator();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(600, now);
  osc2.frequency.exponentialRampToValueAtTime(2400, now + 3.0);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.04, now + 0.2);
  gain.gain.setValueAtTime(0.04, now + 2.0);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);

  osc.connect(gain); osc2.connect(gain);
  connectWithReverb(gain, masterGain, 0.6);
  vib.start(now); osc.start(now); osc2.start(now);
  vib.stop(now + 4); osc.stop(now + 4); osc2.stop(now + 4);
}

export function playOrbReject() {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(330, now);
  osc.frequency.exponentialRampToValueAtTime(180, now + 0.4);

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 6; lfoGain.gain.value = 10;
  lfo.connect(lfoGain).connect(osc.frequency);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.03, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

  osc.connect(gain);
  connectWithReverb(gain, masterGain, 0.3);
  lfo.start(now); osc.start(now);
  lfo.stop(now + 0.6); osc.stop(now + 0.6);
}

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
