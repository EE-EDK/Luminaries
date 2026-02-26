// ================================================================
// Day/Night Cycle System
// ================================================================
// Full cycle: DUSK → NIGHT → DEEP NIGHT → DAWN → DUSK
// 10-minute default cycle. Starts at NIGHT (t=0.25).

import * as THREE from 'three';

const CYCLE_DURATION = 600; // seconds for one full cycle (10 minutes)

let worldTime = 0.25; // start at NIGHT — the game's natural state

// Current interpolated state (live exports, read by other modules)
export let bioGlow = 1.0;
export let starBrightness = 0.85;
export let phase = 'NIGHT';

// Injected references
let sceneRef = null;
let moonRef = null;
let moon2Ref = null;
let hemiRef = null;
let playerLightRef = null;
let skyGroupRef = null;

// Cached sky material data for brightness modulation
const skyMats = []; // { mat, base }
let skyMatsCached = false;

// Phase keyframes (evenly spaced at 0.25 intervals)
// t=0.00: DUSK, t=0.25: NIGHT, t=0.50: DEEP_NIGHT, t=0.75: DAWN
const KF = [
  { // DUSK (0.0) — twilight, warm low moon, glow awakening
    label: 'DUSK',
    sky: new THREE.Color(0x0e1825),
    fog: new THREE.Color(0x0c1420),
    fogDensity: 0.009,
    moonInt: 0.6,
    moonCol: new THREE.Color(0xddaa88),
    moonElev: 15,
    ambSky: new THREE.Color(0x443355),
    ambGnd: new THREE.Color(0x222818),
    ambInt: 0.6,
    stars: 0.4,
    bio: 0.7,
    plRange: 16,
    plInt: 0.5
  },
  { // NIGHT (0.25) — standard night, clear moonlight, forest visible
    label: 'NIGHT',
    sky: new THREE.Color(0x050a18),
    fog: new THREE.Color(0x081018),
    fogDensity: 0.010,
    moonInt: 1.0,
    moonCol: new THREE.Color(0xbbccee),
    moonElev: 55,
    ambSky: new THREE.Color(0x334466),
    ambGnd: new THREE.Color(0x183820),
    ambInt: 0.7,
    stars: 0.85,
    bio: 1.0,
    plRange: 18,
    plInt: 0.55
  },
  { // DEEP NIGHT (0.5) — darkest phase but still readable, bio peaks
    label: 'DEEP_NIGHT',
    sky: new THREE.Color(0x030610),
    fog: new THREE.Color(0x061014),
    fogDensity: 0.012,
    moonInt: 0.55,
    moonCol: new THREE.Color(0x8899bb),
    moonElev: 75,
    ambSky: new THREE.Color(0x1a2244),
    ambGnd: new THREE.Color(0x122418),
    ambInt: 0.5,
    stars: 1.0,
    bio: 1.5,
    plRange: 22,
    plInt: 0.7
  },
  { // DAWN (0.75) — misty, fading glow, warm setting moon
    label: 'DAWN',
    sky: new THREE.Color(0x122030),
    fog: new THREE.Color(0x0e1828),
    fogDensity: 0.011,
    moonInt: 0.5,
    moonCol: new THREE.Color(0xccbbaa),
    moonElev: 20,
    ambSky: new THREE.Color(0x332e55),
    ambGnd: new THREE.Color(0x1c2018),
    ambInt: 0.55,
    stars: 0.35,
    bio: 0.65,
    plRange: 17,
    plInt: 0.5
  }
];

// Temp colors for lerp (avoid GC)
const _c1 = new THREE.Color();
const _c2 = new THREE.Color();

function cacheSkyMaterials() {
  if (!skyGroupRef || skyMatsCached) return;
  const seen = new Set();
  skyGroupRef.traverse((child) => {
    const mat = child.material;
    if (mat && mat.transparent && !seen.has(mat)) {
      seen.add(mat);
      skyMats.push({ mat, base: mat.opacity });
    }
  });
  skyMatsCached = true;
}

export function initDayNight(config) {
  sceneRef = config.scene;
  moonRef = config.moon;
  moon2Ref = config.moon2;
  hemiRef = config.hemiLight;
  playerLightRef = config.playerLight;
  skyGroupRef = config.skyGroup;
}

export function updateDayNight(dt) {
  if (!sceneRef) return;

  // Cache sky material opacities on first frame
  if (!skyMatsCached) cacheSkyMaterials();

  // Advance world clock
  worldTime = (worldTime + dt / CYCLE_DURATION) % 1.0;

  // Find surrounding keyframes (evenly spaced at 0.25)
  const seg = worldTime * 4; // 0..4
  const i = Math.floor(seg) % 4;
  const j = (i + 1) % 4;
  const raw = seg - Math.floor(seg);
  // Cosine smooth interpolation
  const t = 0.5 - 0.5 * Math.cos(raw * Math.PI);

  const a = KF[i];
  const b = KF[j];

  // Determine current phase label
  phase = t < 0.5 ? a.label : b.label;

  const mix = (va, vb) => va + (vb - va) * t;

  // --- Scene background ---
  _c1.copy(a.sky).lerp(b.sky, t);
  sceneRef.background.copy(_c1);

  // --- Fog ---
  _c1.copy(a.fog).lerp(b.fog, t);
  sceneRef.fog.color.copy(_c1);
  sceneRef.fog.density = mix(a.fogDensity, b.fogDensity);

  // --- Primary moon light ---
  if (moonRef) {
    _c1.copy(a.moonCol).lerp(b.moonCol, t);
    moonRef.color.copy(_c1);
    moonRef.intensity = mix(a.moonInt, b.moonInt);
    // Moon traverses sky arc over the cycle
    const azimuth = worldTime * Math.PI * 2;
    const elev = mix(a.moonElev, b.moonElev) * Math.PI / 180;
    const dist = 60;
    moonRef.position.set(
      Math.cos(azimuth) * Math.cos(elev) * dist,
      Math.sin(elev) * dist,
      Math.sin(azimuth) * Math.cos(elev) * dist
    );
  }

  // --- Secondary moon (scales proportionally, baseline 0.3 at NIGHT) ---
  if (moon2Ref) {
    const moonScale = mix(a.moonInt, b.moonInt) / 0.85;
    moon2Ref.intensity = 0.3 * moonScale;
  }

  // --- Hemisphere ambient ---
  if (hemiRef) {
    _c1.copy(a.ambSky).lerp(b.ambSky, t);
    _c2.copy(a.ambGnd).lerp(b.ambGnd, t);
    hemiRef.color.copy(_c1);
    hemiRef.groundColor.copy(_c2);
    hemiRef.intensity = mix(a.ambInt, b.ambInt);
  }

  // --- Player light ---
  if (playerLightRef) {
    playerLightRef.distance = mix(a.plRange, b.plRange);
    playerLightRef.intensity = mix(a.plInt, b.plInt);
  }

  // --- Sky star brightness ---
  starBrightness = mix(a.stars, b.stars);
  for (let k = 0; k < skyMats.length; k++) {
    skyMats[k].mat.opacity = skyMats[k].base * starBrightness;
  }

  // --- Bio-glow multiplier (read by main.js via live export binding) ---
  bioGlow = mix(a.bio, b.bio);
}

export function getWorldTime() { return worldTime; }
export function getPhase() { return phase; }
