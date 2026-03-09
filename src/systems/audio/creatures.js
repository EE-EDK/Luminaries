// ================================================================
// Audio Creatures — Creature sounds, puffling singing/vocals, attunement flash
// ================================================================

import { ctx, initialized, muted, masterGain, connectWithReverb, creatureCooldowns, cooldownMult } from './core.js';

// Major Pentatonic scale matched to music.js: C D E G A
const SING_SCALE = [0, 2, 4, 7, 9];
const SING_BASE = 261.63; // C4

function singNoteFreq(degree, octShift) {
  const len = SING_SCALE.length;
  const oct = Math.floor(degree / len) + (octShift || 0);
  const idx = ((degree % len) + len) % len;
  return SING_BASE * Math.pow(2, oct + SING_SCALE[idx] / 12);
}

// Vowel formants for puffling vocal babble
const VOWEL_FORMANTS = [
  { f1: 730, f2: 1090 },  // a
  { f1: 400, f2: 2300 },  // e
  { f1: 300, f2: 2700 },  // i
  { f1: 570, f2: 850 },   // o
  { f1: 440, f2: 1020 },  // u
];

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
      const baseFreq = 360 + Math.random() * 60;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = 'sine'; osc2.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, now);
      osc2.frequency.setValueAtTime(baseFreq + 3, now);
      osc1.frequency.linearRampToValueAtTime(baseFreq - 40, now + 1.2);
      osc2.frequency.linearRampToValueAtTime(baseFreq - 37, now + 1.2);
      const vib = ctx.createOscillator();
      const vibGain = ctx.createGain();
      vib.frequency.value = 4; vibGain.gain.value = 5;
      vib.connect(vibGain);
      vibGain.connect(osc1.frequency); vibGain.connect(osc2.frequency);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol, now + 0.15);
      gain.gain.setValueAtTime(vol, now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      osc1.connect(gain); osc2.connect(gain);
      gain.connect(panner);
      connectWithReverb(panner, masterGain, 0.4);
      vib.start(now); osc1.start(now); osc2.start(now);
      vib.stop(now + 1.5); osc1.stop(now + 1.5); osc2.stop(now + 1.5);
      creatureCooldowns.jelly = (4 + Math.random() * 5) * cooldownMult();
      break;
    }
    case 'puff': {
      const base = 500 + Math.random() * 100;
      const notes = [base, base * 1.2, base * 1.5];
      for (let i = 0; i < notes.length; i++) {
        const osc = ctx.createOscillator();
        osc.type = 'sine'; osc.frequency.value = notes[i];
        const g = ctx.createGain();
        const noteStart = now + i * 0.07;
        g.gain.setValueAtTime(0, noteStart);
        g.gain.linearRampToValueAtTime(vol * 0.5, noteStart + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.15);
        osc.connect(g).connect(panner);
        osc.start(noteStart); osc.stop(noteStart + 0.18);
      }
      connectWithReverb(panner, masterGain, 0.3);
      creatureCooldowns.puff = (8 + Math.random() * 10) * cooldownMult();
      break;
    }
    case 'deer': {
      const baseFreq = 100 + Math.random() * 30;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = 'triangle'; osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(baseFreq, now);
      osc2.frequency.setValueAtTime(baseFreq + 2, now);
      osc1.frequency.linearRampToValueAtTime(baseFreq - 15, now + 0.5);
      osc2.frequency.linearRampToValueAtTime(baseFreq - 13, now + 0.5);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 250; filter.Q.value = 0.5;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol * 0.7, now + 0.12);
      gain.gain.setValueAtTime(vol * 0.7, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc1.connect(filter); osc2.connect(filter);
      filter.connect(gain).connect(panner);
      connectWithReverb(panner, masterGain, 0.3);
      osc1.start(now); osc2.start(now);
      osc1.stop(now + 0.7); osc2.stop(now + 0.7);
      creatureCooldowns.deer = (5 + Math.random() * 6) * cooldownMult();
      break;
    }
    case 'moth': {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200 + Math.random() * 80, now);
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 8 + Math.random() * 4;
      lfoGain.gain.value = 12;
      lfo.connect(lfoGain).connect(osc.frequency);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol * 0.2, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain).connect(panner);
      connectWithReverb(panner, masterGain, 0.2);
      lfo.start(now); osc.start(now);
      lfo.stop(now + 0.3); osc.stop(now + 0.3);
      creatureCooldowns.moth = (4 + Math.random() * 5) * cooldownMult();
      break;
    }
  }
}

// ================================================================
// Puffling Singing — Extended warbling melody
// ================================================================
export function playPufflingSinging(position, playerPos, sectorRestored, attunement) {
  if (!initialized || muted) return;
  if (creatureCooldowns.puffSing > 0) return;

  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 900) return;

  const dist = Math.sqrt(d2);
  const vol = Math.max(0, 1 - dist / 30) * 0.06;
  const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));

  const panner = ctx.createStereoPanner();
  panner.pan.value = pan;
  const now = ctx.currentTime;

  let noteCount, noteDur, octave, degrees;
  if (sectorRestored) {
    noteCount = 6 + Math.floor(Math.random() * 3);
    noteDur = 0.15;
    octave = 2;
    degrees = [];
    for (let i = 0; i < noteCount; i++) {
      if (i < 5) degrees.push(i);
      else degrees.push(3 + Math.floor(Math.random() * 2));
    }
  } else {
    noteCount = 3 + Math.floor(Math.random() * 2);
    noteDur = 0.20;
    octave = 1;
    degrees = [];
    for (let i = 0; i < noteCount; i++) {
      degrees.push(Math.max(0, 4 - i * Math.floor(5 / noteCount)));
    }
  }

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.type = 'sine';
  lfo.frequency.value = 6 + Math.random() * 4;
  lfoGain.gain.value = 25 + Math.random() * 10;
  lfo.connect(lfoGain);

  const totalDur = noteCount * noteDur + 0.15;

  for (let i = 0; i < noteCount; i++) {
    const freq = singNoteFreq(degrees[i], octave);
    const osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = freq;
    lfoGain.connect(osc.frequency);
    const g = ctx.createGain();
    const noteStart = now + i * noteDur;
    g.gain.setValueAtTime(0, noteStart);
    g.gain.linearRampToValueAtTime(vol, noteStart + 0.03);
    g.gain.setValueAtTime(vol, noteStart + noteDur - 0.06);
    g.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDur + 0.06);
    osc.connect(g).connect(panner);
    osc.start(noteStart); osc.stop(noteStart + noteDur + 0.08);
  }

  if (attunement > 0.1) {
    const harmVol = vol * attunement * 0.4;
    for (let i = 0; i < Math.min(noteCount, 5); i++) {
      const freq = singNoteFreq(degrees[i], octave) * 1.5;
      const osc = ctx.createOscillator();
      osc.type = 'sine'; osc.frequency.value = freq;
      lfoGain.connect(osc.frequency);
      const g = ctx.createGain();
      const noteStart = now + i * noteDur;
      g.gain.setValueAtTime(0, noteStart);
      g.gain.linearRampToValueAtTime(harmVol, noteStart + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDur + 0.04);
      osc.connect(g).connect(panner);
      osc.start(noteStart); osc.stop(noteStart + noteDur + 0.06);
    }
  }

  connectWithReverb(panner, masterGain, 0.4);
  lfo.start(now); lfo.stop(now + totalDur + 0.2);

  creatureCooldowns.puffSing = attunement > 0.3
    ? 2 + Math.random() * 2
    : 4 + Math.random() * 4;
}

// ================================================================
// Attunement Flash — Triumphant ascending arpeggio at full sync
// ================================================================
export function playAttunementFlash(position, playerPos, creatureType) {
  if (!initialized || muted) return;

  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 900) return;

  const dist = Math.sqrt(d2);
  const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));

  const panner = ctx.createStereoPanner();
  panner.pan.value = pan;
  const now = ctx.currentTime;

  const degrees = [0, 1, 2, 3, 4];
  const noteDur = 0.18;

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.type = 'sine'; lfo.frequency.value = 8;
  lfoGain.gain.setValueAtTime(20, now);
  lfoGain.gain.linearRampToValueAtTime(50, now + degrees.length * noteDur);
  lfo.connect(lfoGain);

  for (let i = 0; i < degrees.length; i++) {
    const freq = singNoteFreq(degrees[i], 2);
    const osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = freq;
    lfoGain.connect(osc.frequency);
    const g = ctx.createGain();
    const noteStart = now + i * noteDur;
    const isLast = i === degrees.length - 1;
    const noteVol = 0.07;
    g.gain.setValueAtTime(0, noteStart);
    g.gain.linearRampToValueAtTime(noteVol, noteStart + 0.02);
    if (isLast) {
      g.gain.setValueAtTime(noteVol, noteStart + 0.5);
      g.gain.exponentialRampToValueAtTime(0.001, noteStart + 1.2);
      osc.stop(noteStart + 1.3);
    } else {
      g.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDur + 0.04);
      osc.stop(noteStart + noteDur + 0.06);
    }
    osc.connect(g).connect(panner);
    osc.start(noteStart);

    const harm = ctx.createOscillator();
    harm.type = 'sine'; harm.frequency.value = freq * 2;
    lfoGain.connect(harm.frequency);
    const hg = ctx.createGain();
    hg.gain.setValueAtTime(0, noteStart);
    hg.gain.linearRampToValueAtTime(noteVol * 0.3, noteStart + 0.03);
    hg.gain.exponentialRampToValueAtTime(0.001, noteStart + (isLast ? 1.0 : noteDur) + 0.04);
    harm.connect(hg).connect(panner);
    harm.start(noteStart);
    harm.stop(noteStart + (isLast ? 1.1 : noteDur + 0.06));
  }

  connectWithReverb(panner, masterGain, 0.6);
  lfo.start(now); lfo.stop(now + degrees.length * noteDur + 1.5);

  // Harmonic Drone Swell
  let droneHz = 300;
  switch (creatureType) {
    case 'deer':  droneHz = 120; break;
    case 'moth':  droneHz = 240; break;
    case 'jelly': droneHz = 390; break;
    case 'puff':  droneHz = 550; break;
  }
  const droneFreqs = [droneHz, droneHz * 1.5, droneHz * 2];
  const dronePanner = ctx.createStereoPanner();
  dronePanner.pan.value = pan * 0.3;
  connectWithReverb(dronePanner, masterGain, 0.7);

  for (let di = 0; di < droneFreqs.length; di++) {
    const dOsc = ctx.createOscillator();
    dOsc.type = 'triangle'; dOsc.frequency.value = droneFreqs[di];
    const dG = ctx.createGain();
    dG.gain.setValueAtTime(0, now);
    dG.gain.linearRampToValueAtTime(0.02, now + 3.0);
    dG.gain.setValueAtTime(0.02, now + 3.2);
    dG.gain.exponentialRampToValueAtTime(0.001, now + 7.0);
    dOsc.connect(dG).connect(dronePanner);
    dOsc.start(now); dOsc.stop(now + 7.2);
  }
}

// ================================================================
// Puffling Vocal Babble — Animal Crossing-style speaking sounds
// ================================================================
export function playPufflingVocal(text, position, playerPos) {
  if (!initialized || muted) return;

  const dx = position.x - playerPos.x, dz = position.z - playerPos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > 400) return;

  const dist = Math.sqrt(d2);
  const vol = Math.max(0, 1 - dist / 20) * 0.05;
  const pan = Math.max(-1, Math.min(1, dx / Math.max(dist, 1)));

  const panner = ctx.createStereoPanner();
  panner.pan.value = pan;
  const now = ctx.currentTime;

  const syllables = Math.min(Math.ceil(text.length / 2), 16);
  const syllDur = 0.07;
  const basePitch = 700 + Math.random() * 200;

  for (let i = 0; i < syllables; i++) {
    const vowel = VOWEL_FORMANTS[i % VOWEL_FORMANTS.length];
    const intonation = Math.sin((i / syllables) * Math.PI) * 0.3;
    const pitch = basePitch * (1 + intonation) * (0.9 + Math.random() * 0.2);

    const osc = ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = pitch;

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = vowel.f2 * (0.9 + Math.random() * 0.2);

    const g = ctx.createGain();
    const syllStart = now + i * syllDur;
    g.gain.setValueAtTime(0, syllStart);
    g.gain.linearRampToValueAtTime(vol, syllStart + 0.01);
    g.gain.linearRampToValueAtTime(vol * 0.7, syllStart + syllDur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.001, syllStart + syllDur);

    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0, syllStart);
    g2.gain.linearRampToValueAtTime(vol * 0.15, syllStart + 0.01);
    g2.gain.exponentialRampToValueAtTime(0.001, syllStart + syllDur);

    osc.connect(g).connect(panner);
    osc2.connect(g2).connect(panner);
    osc.start(syllStart); osc.stop(syllStart + syllDur + 0.02);
    osc2.start(syllStart); osc2.stop(syllStart + syllDur + 0.02);
  }

  connectWithReverb(panner, masterGain, 0.35);
}
