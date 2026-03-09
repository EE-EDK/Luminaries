// ================================================================
// Audio Spirit Hum — Player tone generator + resonance drone
// ================================================================

import { ctx, initialized, muted, masterGain, connectWithReverb } from './core.js';

// ================================================================
// Resonance drone — ambient hum that builds with each orb
// ================================================================
let droneOscs = [];
let droneGain = null;

export function startResonanceDrone(orbCount) {
  if (!initialized || muted) return;
  stopResonanceDrone();
  const now = ctx.currentTime;
  droneGain = ctx.createGain();
  droneGain.gain.setValueAtTime(0, now);
  const targetVol = 0.015 + orbCount * 0.006;
  droneGain.gain.linearRampToValueAtTime(targetVol, now + 3.0);
  connectWithReverb(droneGain, masterGain, 0.7);

  const baseFreq = 60;
  const harmonics = [1, 2];
  if (orbCount >= 2) harmonics.push(1.5);
  if (orbCount >= 3) harmonics.push(3);
  if (orbCount >= 4) harmonics.push(2.5);
  if (orbCount >= 5) harmonics.push(4);

  for (let i = 0; i < harmonics.length; i++) {
    const osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = baseFreq * harmonics[i];
    const hGain = ctx.createGain();
    hGain.gain.value = i < 2 ? 1.0 : 0.4;
    osc.connect(hGain).connect(droneGain);
    osc.start(now);
    droneOscs.push({ osc, gain: hGain });
  }

  const lfo = ctx.createOscillator();
  lfo.type = 'sine'; lfo.frequency.value = 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = targetVol * 0.3;
  lfo.connect(lfoGain).connect(droneGain.gain);
  lfo.start(now);
  droneOscs.push({ osc: lfo, gain: lfoGain });
}

export function stopResonanceDrone() {
  if (!ctx) return;
  const now = ctx.currentTime;
  for (let i = 0; i < droneOscs.length; i++) {
    try { droneOscs[i].osc.stop(now + 0.5); } catch (_) { /* already stopped */ }
  }
  droneOscs = [];
  if (droneGain) {
    droneGain.gain.linearRampToValueAtTime(0, now + 0.4);
    droneGain = null;
  }
}

// ================================================================
// Spirit Hum — Player tone generator for creature resonance
// ================================================================
let _humOsc1 = null, _humOsc2 = null, _humOscOct = null;
let _humLfo = null, _humLfoGain = null;
let _humGain = null;
let _humResOsc = null, _humResGain = null;
let _humStarted = false;

export function startSpiritHumAudio() {
  if (!initialized || muted) return;
  if (_humStarted) return;
  _humStarted = true;

  const now = ctx.currentTime;

  _humGain = ctx.createGain();
  _humGain.gain.setValueAtTime(0, now);
  _humGain.gain.linearRampToValueAtTime(0.04, now + 0.3);
  connectWithReverb(_humGain, masterGain, 0.5);

  _humOsc1 = ctx.createOscillator();
  _humOsc1.type = 'sine'; _humOsc1.frequency.value = 300;
  _humOsc1.connect(_humGain); _humOsc1.start(now);

  _humOsc2 = ctx.createOscillator();
  _humOsc2.type = 'sine'; _humOsc2.frequency.value = 300;
  _humOsc2.detune.value = 7;
  const g2 = ctx.createGain(); g2.gain.value = 0.6;
  _humOsc2.connect(g2).connect(_humGain); _humOsc2.start(now);

  _humOscOct = ctx.createOscillator();
  _humOscOct.type = 'triangle'; _humOscOct.frequency.value = 600;
  const gOct = ctx.createGain(); gOct.gain.value = 0.15;
  _humOscOct.connect(gOct).connect(_humGain); _humOscOct.start(now);

  _humLfo = ctx.createOscillator();
  _humLfo.type = 'sine'; _humLfo.frequency.value = 3.5;
  _humLfoGain = ctx.createGain(); _humLfoGain.gain.value = 4;
  _humLfo.connect(_humLfoGain);
  _humLfoGain.connect(_humOsc1.frequency);
  _humLfoGain.connect(_humOsc2.frequency);
  _humLfo.start(now);

  _humResOsc = ctx.createOscillator();
  _humResOsc.type = 'sine'; _humResOsc.frequency.value = 300;
  _humResGain = ctx.createGain(); _humResGain.gain.value = 0;
  _humResOsc.connect(_humResGain).connect(_humGain);
  _humResOsc.start(now);
}

export function updateSpiritHumAudio(hz, resonance, creatureType) {
  if (!_humStarted || !_humOsc1) return;
  const now = ctx.currentTime;
  const glide = 0.08;

  _humOsc1.frequency.setTargetAtTime(hz, now, glide);
  _humOsc2.frequency.setTargetAtTime(hz, now, glide);
  _humOscOct.frequency.setTargetAtTime(hz * 2, now, glide);

  if (resonance > 0.05 && creatureType) {
    let centerHz = 300;
    switch (creatureType) {
      case 'deer':  centerHz = 120; _humResOsc.type = 'triangle'; break;
      case 'moth':  centerHz = 240; _humResOsc.type = 'sine'; break;
      case 'jelly': centerHz = 390; _humResOsc.type = 'sine'; break;
      case 'puff':  centerHz = 550; _humResOsc.type = 'sine'; break;
    }
    _humResOsc.frequency.setTargetAtTime(centerHz, now, glide);
    _humResGain.gain.setTargetAtTime(resonance * 0.025, now, 0.1);
  } else {
    _humResGain.gain.setTargetAtTime(0, now, 0.15);
  }
}

export function stopSpiritHumAudio() {
  if (!_humStarted) return;
  _humStarted = false;
  const now = ctx.currentTime;

  if (_humGain) {
    _humGain.gain.setTargetAtTime(0, now, 0.12);
  }
  const stopTime = now + 0.6;
  try { if (_humOsc1) _humOsc1.stop(stopTime); } catch (_) { /* */ }
  try { if (_humOsc2) _humOsc2.stop(stopTime); } catch (_) { /* */ }
  try { if (_humOscOct) _humOscOct.stop(stopTime); } catch (_) { /* */ }
  try { if (_humLfo) _humLfo.stop(stopTime); } catch (_) { /* */ }
  try { if (_humResOsc) _humResOsc.stop(stopTime); } catch (_) { /* */ }

  _humOsc1 = _humOsc2 = _humOscOct = _humLfo = _humLfoGain = null;
  if (_humGain) { try { _humGain.disconnect(); } catch (_) { /* */ } }
  _humGain = null;
  _humResOsc = _humResGain = null;
}

export function playPitchLockSound(creatureType) {
  if (!initialized || muted) return;
  const now = ctx.currentTime;

  let baseHz = 300;
  switch (creatureType) {
    case 'deer':  baseHz = 120; break;
    case 'moth':  baseHz = 240; break;
    case 'jelly': baseHz = 390; break;
    case 'puff':  baseHz = 550; break;
  }

  const notes = [baseHz, baseHz * 1.5];
  for (let i = 0; i < notes.length; i++) {
    const osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = notes[i];
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine'; osc2.frequency.value = notes[i] * 1.003;
    const g = ctx.createGain();
    const noteStart = now + i * 0.15;
    g.gain.setValueAtTime(0, noteStart);
    g.gain.linearRampToValueAtTime(0.06, noteStart + 0.03);
    g.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.5);
    osc.connect(g); osc2.connect(g);
    connectWithReverb(g, masterGain, 0.6);
    osc.start(noteStart); osc2.start(noteStart);
    osc.stop(noteStart + 0.55); osc2.stop(noteStart + 0.55);
  }
}
