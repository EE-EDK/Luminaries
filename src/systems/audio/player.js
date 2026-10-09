// ================================================================
// Audio Player — Footstep, jump, land sounds
// ================================================================

import { ctx, initialized, muted, masterGain, brownBuf, whiteBuf } from './core.js';
import { GROUND } from '../environment.js';

let stepCooldown = 0;

/**
 * @brief A footstep, in the voice of whatever is underfoot.
 *
 * Four voices rather than the old two. The second argument used to be a bare
 * `nearWater` boolean, so every surface that was not a pond sounded like the
 * same patch of dirt — walking across bare rock in the rain was identical to
 * walking on dry grass. It now takes a kind from terrain.groundKind, and
 * still accepts the old boolean so nothing that passes one goes silent.
 *
 * @param {boolean} sprinting
 * @param {string|boolean} kind one of GROUND, or legacy nearWater
 */
export function playFootstep(sprinting, kind) {
  if (!initialized || muted) return;
  if (stepCooldown > 0) return;

  // Old callers passed a boolean. Treated rather than rejected: a footstep is
  // not worth throwing over, and silence would be the louder bug.
  const g = kind === true ? GROUND.WATER
    : (kind === false || kind === undefined || kind === null ? GROUND.GRASS : kind);

  const now = ctx.currentTime;

  if (g === GROUND.WATER) {
    // A splash: broadband, wet, and the longest of the four.
    const noise = ctx.createBufferSource();
    noise.buffer = whiteBuf;
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass'; filter.frequency.value = 2000; filter.Q.value = 0.5;
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    noise.connect(filter).connect(gain).connect(masterGain);
    noise.start(); noise.stop(now + 0.15);
  } else if (g === GROUND.ROCK) {
    // A click with a short bright tail: hard, with almost no give.
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220 + Math.random() * 90, now);
    osc.frequency.exponentialRampToValueAtTime(130, now + 0.05);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.028, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    const tick = ctx.createBufferSource();
    tick.buffer = whiteBuf;
    const tickF = ctx.createBiquadFilter();
    tickF.type = 'highpass'; tickF.frequency.value = 3200;
    const tickG = ctx.createGain();
    tickG.gain.setValueAtTime(0.02, now);
    tickG.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    osc.connect(gain).connect(masterGain);
    tick.connect(tickF).connect(tickG).connect(masterGain);
    osc.start(); osc.stop(now + 0.08);
    tick.start(); tick.stop(now + 0.05);
  } else if (g === GROUND.MUD) {
    // A suck: low, dull, and slower to let go than grass.
    const noise = ctx.createBufferSource();
    noise.buffer = brownBuf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 520; filter.Q.value = 0.9;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    noise.connect(filter).connect(gain).connect(masterGain);
    noise.start(); noise.stop(now + 0.2);
  } else {
    // Grass: the original voice, kept exactly.
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 80 + Math.random() * 40;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain).connect(masterGain);
    osc.start(); osc.stop(now + 0.1);
  }
  // Mud is heavy going: a touch slower between steps.
  const base = sprinting ? 0.22 : 0.35;
  stepCooldown = g === GROUND.MUD ? base * 1.25 : base;
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
