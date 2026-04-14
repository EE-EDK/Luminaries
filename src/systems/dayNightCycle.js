// ================================================================
// Day/Night Cycle System
// ================================================================
// Full cycle: DUSK → NIGHT → DEEP NIGHT → DAWN → DUSK
// 10-minute default cycle. Starts at NIGHT (t=0.25).
//
// OBSERVATION (anonymous, date unknown):
//   The cycle doesn't match any known solar body. It runs on its own
//   clock. 600 seconds. Always 600 seconds. We tried lengthening it
//   once — the organisms compensated within minutes, as if they'd
//   already memorized the rhythm. The forest doesn't follow the sun.
//   The sun follows the forest.

import { Color } from 'three';
import { setSkyBrightness } from '../world/sky.js';
import { emit, Events } from '../kernel/eventBus.js';
import { C } from '../constants.js';
import { lerp } from '../utils/math.js';

const CYCLE_DURATION = 600; // seconds for one full cycle (10 minutes)

let worldTime = 0.25; // start at NIGHT — the game's natural state

// Current interpolated state (live exports, read by other modules)
export let bioGlow = 1.0;
export let starBrightness = 0.85;
export let phase = 'NIGHT';
let _prevPhase = 'NIGHT';

// Injected references
let sceneRef = null;
let moonRef = null;
let moon2Ref = null;
let hemiRef = null;
let playerLightRef = null;

// Phase keyframes (evenly spaced at 0.25 intervals)
// t=0.00: DUSK, t=0.25: NIGHT, t=0.50: DEEP_NIGHT, t=0.75: DAWN
const KF = [
  { // DUSK (0.0) — twilight, warm low moon, glow awakening
    label: 'DUSK',
    sky: new Color(C.duskSky),
    fog: new Color(C.duskFog),
    fogDensity: 0.009,
    moonInt: 0.6,
    moonCol: new Color(C.duskMoon),
    moonElev: 15,
    ambSky: new Color(C.duskAmbSky),
    ambGnd: new Color(C.duskAmbGnd),
    ambInt: 0.6,
    stars: 0.4,
    bio: 0.7,
    plRange: 16,
    plInt: 0.5
  },
  { // NIGHT (0.25) — standard night, clear moonlight, forest visible
    label: 'NIGHT',
    sky: new Color(C.nightSky),
    fog: new Color(C.nightFog),
    fogDensity: 0.010,
    moonInt: 1.0,
    moonCol: new Color(C.nightMoon),
    moonElev: 55,
    ambSky: new Color(C.nightAmbSky),
    ambGnd: new Color(C.nightAmbGnd),
    ambInt: 0.7,
    stars: 0.85,
    bio: 1.0,
    plRange: 18,
    plInt: 0.55
  },
  { // DEEP NIGHT (0.5) — darkest phase but still readable, bio peaks
    label: 'DEEP_NIGHT',
    sky: new Color(C.deepSky),
    fog: new Color(C.deepFog),
    fogDensity: 0.012,
    moonInt: 0.55,
    moonCol: new Color(C.deepMoon),
    moonElev: 75,
    ambSky: new Color(C.deepAmbSky),
    ambGnd: new Color(C.deepAmbGnd),
    ambInt: 0.5,
    stars: 1.0,
    bio: 1.5,
    plRange: 22,
    plInt: 0.7
  },
  { // DAWN (0.75) — misty, fading glow, warm setting moon
    label: 'DAWN',
    sky: new Color(C.dawnSky),
    fog: new Color(C.dawnFog),
    fogDensity: 0.011,
    moonInt: 0.5,
    moonCol: new Color(C.dawnMoon),
    moonElev: 20,
    ambSky: new Color(C.dawnAmbSky),
    ambGnd: new Color(C.dawnAmbGnd),
    ambInt: 0.55,
    stars: 0.35,
    bio: 0.65,
    plRange: 17,
    plInt: 0.5
  }
];

// Temp colors for lerp (avoid GC)
const _c1 = new Color();
const _c2 = new Color();

// Throttle shadow map updates (~1 Hz instead of every frame)
let _shadowTimer = 0;
const SHADOW_UPDATE_INTERVAL = 1.0;

export function initDayNight(config) {
  sceneRef = config.scene;
  moonRef = config.moon;
  moon2Ref = config.moon2;
  hemiRef = config.hemiLight;
  playerLightRef = config.playerLight;
}

export function updateDayNight(dt) {
  if (!sceneRef) return;

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
  if (phase !== _prevPhase) {
    emit(Events.DAY_PHASE_CHANGE, { from: _prevPhase, to: phase });
    _prevPhase = phase;
  }

  // --- Scene background ---
  _c1.copy(a.sky).lerp(b.sky, t);
  sceneRef.background.copy(_c1);

  // --- Fog ---
  _c1.copy(a.fog).lerp(b.fog, t);
  sceneRef.fog.color.copy(_c1);
  sceneRef.fog.density = lerp(a.fogDensity, b.fogDensity, t);

  // --- Primary moon light ---
  if (moonRef) {
    _c1.copy(a.moonCol).lerp(b.moonCol, t);
    moonRef.color.copy(_c1);
    moonRef.intensity = lerp(a.moonInt, b.moonInt, t);
    // Moon traverses sky arc over the cycle
    const azimuth = worldTime * Math.PI * 2;
    const elev = lerp(a.moonElev, b.moonElev, t) * Math.PI / 180;
    const dist = 60;
    moonRef.position.set(
      Math.cos(azimuth) * Math.cos(elev) * dist,
      Math.sin(elev) * dist,
      Math.sin(azimuth) * Math.cos(elev) * dist
    );
    // Throttle shadow map re-render to ~1 Hz (moon moves slowly)
    _shadowTimer += dt;
    if (_shadowTimer >= SHADOW_UPDATE_INTERVAL) {
      _shadowTimer = 0;
      moonRef.shadow.needsUpdate = true;
    }
  }

  // --- Secondary moon (scales proportionally, baseline 0.3 at NIGHT) ---
  if (moon2Ref) {
    const moonScale = lerp(a.moonInt, b.moonInt, t) / 0.85;
    moon2Ref.intensity = 0.3 * moonScale;
  }

  // --- Hemisphere ambient ---
  if (hemiRef) {
    _c1.copy(a.ambSky).lerp(b.ambSky, t);
    _c2.copy(a.ambGnd).lerp(b.ambGnd, t);
    hemiRef.color.copy(_c1);
    hemiRef.groundColor.copy(_c2);
    hemiRef.intensity = lerp(a.ambInt, b.ambInt, t);
  }

  // --- Player light ---
  if (playerLightRef) {
    playerLightRef.distance = lerp(a.plRange, b.plRange, t);
    playerLightRef.intensity = lerp(a.plInt, b.plInt, t);
  }

  // --- Sky star brightness (via color tint, not opacity) ---
  starBrightness = lerp(a.stars, b.stars, t);
  setSkyBrightness(starBrightness);

  // --- Bio-glow multiplier (read by main.js via live export binding) ---
  bioGlow = lerp(a.bio, b.bio, t);
}

export function getWorldTime() { return worldTime; }
export function getPhase() { return phase; }
