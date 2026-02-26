// ================================================================
// Weather System
// ================================================================
// States: CLEAR, MISTY, LIGHT_RAIN, HEAVY_RAIN, FOG_BANK, LUMINOUS_STORM
// Weighted random transitions with 30-90s smooth blending.
// Exports wind vector, fog modifier, rain rate, and lightning flash.

import * as THREE from 'three';
import { scene } from '../core/renderer.js';

// Live exports (read by main.js and other systems)
export let windX = 0;
export let windZ = 0;
export let windStrength = 0;
export let weatherState = 'CLEAR';
export let isStorming = false;
export let lightningFlash = 0;

// State parameters
const STATES = {
  CLEAR:           { fogMult: 1.0, windBase: 0.3, rainRate: 0,   skyDarken: 0,    mistCount: 0, duration: [90, 180] },
  MISTY:           { fogMult: 1.8, windBase: 0.2, rainRate: 0,   skyDarken: 0.05, mistCount: 6, duration: [60, 150] },
  LIGHT_RAIN:      { fogMult: 1.3, windBase: 0.6, rainRate: 0.3, skyDarken: 0.1,  mistCount: 2, duration: [60, 120] },
  HEAVY_RAIN:      { fogMult: 1.6, windBase: 1.0, rainRate: 0.8, skyDarken: 0.2,  mistCount: 3, duration: [45, 100] },
  FOG_BANK:        { fogMult: 2.5, windBase: 0.15,rainRate: 0,   skyDarken: 0.1,  mistCount: 8, duration: [60, 120] },
  LUMINOUS_STORM:  { fogMult: 1.4, windBase: 1.5, rainRate: 0.6, skyDarken: 0.15, mistCount: 2, duration: [40, 90]  }
};

// Weighted transition table
const TRANS = {
  CLEAR:          { MISTY: 0.4, LIGHT_RAIN: 0.3, FOG_BANK: 0.2, LUMINOUS_STORM: 0.1 },
  MISTY:          { CLEAR: 0.3, LIGHT_RAIN: 0.3, FOG_BANK: 0.3, HEAVY_RAIN: 0.1 },
  LIGHT_RAIN:     { CLEAR: 0.2, MISTY: 0.2, HEAVY_RAIN: 0.4, LUMINOUS_STORM: 0.2 },
  HEAVY_RAIN:     { LIGHT_RAIN: 0.4, LUMINOUS_STORM: 0.3, MISTY: 0.2, CLEAR: 0.1 },
  FOG_BANK:       { MISTY: 0.4, CLEAR: 0.3, LIGHT_RAIN: 0.2, LUMINOUS_STORM: 0.1 },
  LUMINOUS_STORM: { HEAVY_RAIN: 0.3, MISTY: 0.3, CLEAR: 0.2, LIGHT_RAIN: 0.2 }
};

// State machine internals
let curState = 'CLEAR';
let nxtState = null;
let stateTimer = 0;
let transTimer = 0;
let transDuration = 0;
let blending = false;
let blend = 0; // 0..1

// Wind internals
let windAngle = Math.random() * Math.PI * 2;
let gustTimer = 0;
let gustPower = 0;

// Mist planes
const mistPlanes = [];
const MAX_MIST = 8;
let mistReady = false;

// Lightning
let ltTimer = 0;

// Current interpolated values
let curFogMult = 1.0;
let curRainRate = 0;
let curSkyDarken = 0;
let curMistTarget = 0;

function pickNext() {
  const w = TRANS[curState];
  const entries = Object.entries(w);
  let total = 0;
  for (const [, v] of entries) total += v;
  let r = Math.random() * total;
  for (const [s, v] of entries) { r -= v; if (r <= 0) return s; }
  return entries[0][0];
}

function buildMistPlanes() {
  if (mistReady) return;
  const geo = new THREE.PlaneGeometry(25, 8);
  for (let i = 0; i < MAX_MIST; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0x88aacc, transparent: true, opacity: 0,
      side: THREE.DoubleSide, depthWrite: false, fog: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.visible = false;
    scene.add(mesh);
    mistPlanes.push({
      mesh, mat, active: false,
      drift: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.4,
      baseY: 1.2 + Math.random() * 2.5,
      wobble: Math.random() * Math.PI * 2
    });
  }
  mistReady = true;
}

export function initWeather() {
  buildMistPlanes();
  const dur = STATES.CLEAR.duration;
  stateTimer = dur[0] + Math.random() * (dur[1] - dur[0]);
}

export function updateWeather(dt, t, playerPos) {
  // --- State machine ---
  if (blending) {
    transTimer -= dt;
    if (transTimer <= 0) {
      curState = nxtState;
      nxtState = null;
      blending = false;
      const dur = STATES[curState].duration;
      stateTimer = dur[0] + Math.random() * (dur[1] - dur[0]);
      blend = 0;
    } else {
      blend = 1.0 - transTimer / transDuration;
    }
  } else {
    stateTimer -= dt;
    if (stateTimer <= 0) {
      nxtState = pickNext();
      blending = true;
      transDuration = 30 + Math.random() * 60;
      transTimer = transDuration;
      blend = 0;
    }
  }

  // --- Interpolate parameters ---
  const sc = STATES[curState];
  if (blending && nxtState) {
    const sn = STATES[nxtState];
    const bt = 0.5 - 0.5 * Math.cos(blend * Math.PI);
    const mix = (a, b) => a + (b - a) * bt;
    curFogMult = mix(sc.fogMult, sn.fogMult);
    curRainRate = mix(sc.rainRate, sn.rainRate);
    curSkyDarken = mix(sc.skyDarken, sn.skyDarken);
    curMistTarget = mix(sc.mistCount, sn.mistCount);
    windStrength = mix(sc.windBase, sn.windBase);
    weatherState = bt < 0.5 ? curState : nxtState;
  } else {
    curFogMult = sc.fogMult;
    curRainRate = sc.rainRate;
    curSkyDarken = sc.skyDarken;
    curMistTarget = sc.mistCount;
    windStrength = sc.windBase;
    weatherState = curState;
  }

  isStorming = weatherState === 'LUMINOUS_STORM';

  // --- Wind ---
  windAngle += (Math.sin(t * 0.05) * 0.2 + Math.sin(t * 0.13) * 0.1) * dt;
  gustTimer -= dt;
  if (gustTimer <= 0) { gustTimer = 2 + Math.random() * 6; gustPower = Math.random() * 0.8; }
  gustPower *= Math.pow(0.3, dt);
  const totalWind = windStrength + gustPower;
  windX = Math.cos(windAngle) * totalWind;
  windZ = Math.sin(windAngle) * totalWind;

  // --- Apply fog modifier (on top of dayNightCycle base) ---
  scene.fog.density *= curFogMult;

  // --- Sky darkening for heavy weather ---
  if (curSkyDarken > 0.001) {
    const bg = scene.background;
    const d = 1 - curSkyDarken;
    bg.r *= d; bg.g *= d; bg.b *= d;
  }

  // --- Mist planes ---
  if (playerPos) {
    const target = Math.round(curMistTarget);
    for (let i = 0; i < mistPlanes.length; i++) {
      const mp = mistPlanes[i];
      if (i < target) {
        if (!mp.active) { mp.active = true; mp.mesh.visible = true; mp.drift = Math.random() * Math.PI * 2; }
        const d = 10 + Math.sin(t * 0.3 + mp.wobble) * 8;
        const a = mp.drift + t * mp.speed * 0.05;
        mp.mesh.position.set(
          playerPos.x + Math.cos(a) * d,
          mp.baseY + Math.sin(t * 0.4 + mp.wobble) * 0.5,
          playerPos.z + Math.sin(a) * d
        );
        mp.mesh.rotation.y = a + Math.PI / 2;
        mp.drift += windX * dt * 0.02;
        const tgtOp = 0.05 + curFogMult * 0.02;
        mp.mat.opacity += (tgtOp - mp.mat.opacity) * dt * 2;
      } else if (mp.active) {
        mp.mat.opacity -= dt * 0.5;
        if (mp.mat.opacity <= 0.005) { mp.active = false; mp.mesh.visible = false; mp.mat.opacity = 0; }
      }
    }
  }

  // --- Lightning ---
  if (isStorming) {
    ltTimer -= dt;
    if (ltTimer <= 0) { ltTimer = 1 + Math.random() * 4; lightningFlash = 1.0; }
  }
  lightningFlash *= Math.pow(0.02, dt);
  if (lightningFlash < 0.01) lightningFlash = 0;

  return curRainRate;
}

export function getRainRate() { return curRainRate; }
