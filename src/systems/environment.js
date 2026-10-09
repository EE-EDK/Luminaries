// ================================================================
// Environment — what the ground is, how a gust travels, how full the score is
// ================================================================
// Three pure rules that three different systems need, kept out of the files
// that own the data they read. terrain.js knows where the ponds and rocks are;
// it does not need to also be the place that decides what counts as mud.
// weather.js owns the gust timer; the shape of the travelling wave is maths.
//
// No imports. Every function here can be driven in a test without a renderer,
// an AudioContext, or a populated world.

// ----------------------------------------------------------------
// What am I standing on
// ----------------------------------------------------------------

/** The four surfaces a footstep can land on. */
export const GROUND = Object.freeze({
  WATER: 'water',
  ROCK: 'rock',
  MUD: 'mud',
  GRASS: 'grass',
});

/** Squared radii, so callers can keep their existing squared comparisons. */
export const WATER_D2 = 16;    // 4 m of a pond centre — you are in it
export const ROCK_D2 = 1.44;   // 1.2 m of a rock — you are on it
export const MUD_RAIN = 0.3;   // rain rate at which bare ground turns to mud

/**
 * @brief Decide what the player is walking on.
 *
 * Order matters and is not arbitrary: water beats rock because a rock in a
 * pond is still a splash, and rock beats mud because a wet rock is still a
 * rock. Mud is last because it is the only one that depends on the weather
 * rather than on the world.
 *
 * Distances come in squared and already measured — this function deliberately
 * cannot reach the pond list, so it cannot disagree with the caller about which
 * pond was nearest.
 *
 * @param {number} pondD2 squared distance to the nearest pond centre, or Infinity
 * @param {number} rockD2 squared distance to the nearest rock, or Infinity
 * @param {number} rainRate 0..1
 * @return {string} one of GROUND
 */
export function classifyGround(pondD2, rockD2, rainRate) {
  const pd = num(pondD2, Infinity);
  const rd = num(rockD2, Infinity);
  if (pd < WATER_D2) return GROUND.WATER;
  if (rd < ROCK_D2) return GROUND.ROCK;
  if (num(rainRate, 0) > MUD_RAIN) return GROUND.MUD;
  return GROUND.GRASS;
}

// ----------------------------------------------------------------
// A gust that crosses the forest
// ----------------------------------------------------------------

/** Metres between wave crests. About two canopy widths. */
export const GUST_WAVELENGTH = 26;

/**
 * @brief How much of a gust has reached this point in the world, 0 to 1.
 *
 * The old behaviour moved every tree at once, which reads as the whole forest
 * being shoved rather than as wind: real gusts arrive somewhere first. Phase
 * advances with time and is offset by how far along the wind direction a point
 * lies, so the crest sweeps across the canopy.
 *
 * Returns 0..1 rather than -1..1 because this scales an amplitude, and a
 * negative amplitude would lean the trees into the wind.
 *
 * @param {number} x @param {number} z world position
 * @param {number} phase radians, advanced by the weather each frame
 * @param {number} dirX @param {number} dirZ wind direction, need not be unit
 * @param {number} [wavelength=GUST_WAVELENGTH] metres between crests
 * @return {number} 0..1
 */
export function gustWaveAt(x, z, phase, dirX, dirZ, wavelength = GUST_WAVELENGTH) {
  const dx = num(dirX), dz = num(dirZ);
  const len = Math.sqrt(dx * dx + dz * dz);
  if (!(len > 1e-6)) return 0;                 // no wind direction, no wave
  const wl = num(wavelength, GUST_WAVELENGTH);
  if (!(wl > 1e-6)) return 0;
  const k = (Math.PI * 2) / wl;
  // Project the point onto the wind direction: everything on the same line
  // across the wind moves together, which is what a gust front looks like.
  const along = (num(x) * dx + num(z) * dz) / len;
  return (Math.sin(num(phase) - along * k) + 1) * 0.5;
}

/**
 * @brief How fast the gust phase should advance, radians per second.
 *
 * Tied to wind speed so a strong gust crosses the forest faster than a light
 * one. Clamped at both ends: a stationary front never arrives, and one moving
 * faster than about 40 m/s strobes rather than sweeps.
 *
 * @param {number} windSpeed metres per second
 * @param {number} [wavelength=GUST_WAVELENGTH]
 * @return {number} radians per second
 */
export function gustPhaseRate(windSpeed, wavelength = GUST_WAVELENGTH) {
  const wl = num(wavelength, GUST_WAVELENGTH);
  const speed = Math.min(40, Math.max(2, num(windSpeed, 2) * 6 + 4));
  return (Math.PI * 2 * speed) / (wl > 1e-6 ? wl : GUST_WAVELENGTH);
}

// ----------------------------------------------------------------
// How full the score is
// ----------------------------------------------------------------

/**
 * @brief Musical density for how much of the forest has been restored.
 *
 * The score starts nearly empty and fills in as orbs are collected, so the
 * forest sounds like it is waking up rather than like a soundtrack that was
 * always there. Returned as rates per second and probabilities so the caller
 * scales by dt — the music timers were frame-counted before, which made the
 * whole score play faster on a faster machine.
 *
 * @param {number} restoredFrac 0..1, orbs found over orbs total
 * @param {string} phase day phase
 * @param {number} speed player speed, m/s
 * @return {{harpRate:number, fluteChance:number, chimeRate:number, bass:boolean}}
 */
export function musicDensity(restoredFrac, phase, speed) {
  const r = clamp01(restoredFrac);
  return {
    // Notes per second. Quiet but present at zero orbs: silence reads as a bug.
    harpRate: 0.12 + r * 0.55,
    // Chance a given harp note is answered by a flute.
    fluteChance: r * 0.35,
    // Dawn is the hour the chimes belong to.
    chimeRate: (phase === 'DAWN' ? 0.5 : 0.12) * (0.4 + r * 0.6),
    // A moving player gets a pulse under it.
    bass: num(speed, 0) > 4,
  };
}

function num(v, fallback = 0) { return Number.isFinite(v) ? v : fallback; }
function clamp01(v) {
  const n = num(v);
  return n < 0 ? 0 : (n > 1 ? 1 : n);
}
