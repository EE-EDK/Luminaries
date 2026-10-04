// ================================================================
// Rhythm — when creatures want to sleep, shelter, and go home
// ================================================================
// One module, four creatures. The alternative was a dayPhase ternary in each
// of deer.js, pufflings.js, moths.js and jellies.js, which is how the forest
// ends up with a dawn that four species disagree about: the deer bedding down
// while the moths are still on patrol because one file tested 'DAWN' and
// another tested 'DEEP_NIGHT'. The rule lives here once and every caller
// reads it.
//
// Pure functions only — no Three.js, no imports from the game at all — so the
// whole daily cycle can be driven in a test without a renderer.

/** The four phases dayNightCycle reports, in order. */
export const PHASES = Object.freeze(['DUSK', 'NIGHT', 'DEEP_NIGHT', 'DAWN']);

/** @brief Is this a phase the clock actually produces? */
export function isPhase(p) { return PHASES.indexOf(p) !== -1; }

// ----------------------------------------------------------------
// Sleep and shelter
// ----------------------------------------------------------------

/**
 * @brief How strongly a creature wants to be under cover, 0 to 1.
 *
 * Storm beats rain beats dawn. Returning a number rather than a boolean lets
 * each species set its own threshold: a deer heads for a tree earlier than a
 * moth gives up flying.
 *
 * @param {string} phase from dayNightCycle
 * @param {boolean} storming weather.isStorming
 * @param {number} rainRate weather.getRainRate(), 0..1
 * @return {number} 0 = no reason to hide, 1 = get under something now
 */
export function shelterUrgency(phase, storming, rainRate) {
  const rain = clamp01(rainRate);
  let u = 0;
  if (storming) u = 0.9;                      // thunder: everything goes quiet
  else if (rain > 0.6) u = 0.75;              // heavy
  else if (rain > 0.25) u = 0.4;              // light, but enough to matter
  else if (rain > 0.02) u = 0.15;             // spitting
  // Dawn is not weather, but it pushes the same behaviour: nocturnal animals
  // in a bioluminescent forest want to be bedded down before the light.
  if (phase === 'DAWN') u = Math.max(u, 0.6);
  return clamp01(u);
}

/** @brief Deer bed down at dawn, or shelter from real rain. */
export function deerWantsCover(phase, storming, rainRate) {
  return shelterUrgency(phase, storming, rainRate) >= 0.55;
}

/** @brief Moths stop flying in heavy rain — wet wings do not work. */
export function mothWantsGround(phase, storming, rainRate) {
  return shelterUrgency(phase, storming, rainRate) >= 0.7;
}

/** @brief Pufflings head for their houses at dusk, and in any real weather. */
export function pufflingWantsHome(phase, storming, rainRate) {
  if (phase === 'DUSK') return true;
  return shelterUrgency(phase, storming, rainRate) >= 0.7;
}

/** @brief Jellies sink toward the ground at dawn and in rain. */
export function jellyWantsDepth(phase, storming, rainRate) {
  const u = shelterUrgency(phase, storming, rainRate);
  if (u < 0.3) return 0;
  // Metres below the usual drift height, capped so they never clip the ground.
  return Math.min(2.5, 2.5 * u);
}

/**
 * @brief Chance per decision that a deer picks rest, by phase.
 *
 * Deep night is when they actually sleep; dawn is handled by deerWantsCover
 * instead, which is a decision rather than a dice roll.
 */
export function restBias(phase) {
  if (phase === 'DEEP_NIGHT') return 0.25;
  if (phase === 'DAWN') return 0.2;
  return 0.1;
}

/** @brief Chance per decision that a deer grazes, by phase. */
export function grazeBias(phase) {
  return phase === 'DUSK' ? 0.55 : 0.4;
}

/**
 * @brief How likely a moth is to be out flying at all, 0 to 1.
 *
 * Zero at dawn: the plan called for the patrol chance to go to zero there, and
 * a moth that keeps patrolling through sunrise is the one thing in the forest
 * that never rests.
 */
export function mothPatrolChance(phase, storming, rainRate) {
  if (phase === 'DAWN') return 0;
  if (mothWantsGround(phase, storming, rainRate)) return 0;
  const rain = clamp01(rainRate);
  return Math.max(0, 1 - rain * 1.5);
}

/**
 * @brief How often a moth should settle onto a trunk, per SECOND.
 *
 * Per second, not per frame. The original was a flat `Math.random() < 0.005`
 * evaluated every frame, which makes the whole behaviour frame-rate dependent:
 * the same moth settles six times as often at 60 fps as at 10, and on a slow
 * machine a dawn can pass with nothing landing at all. Callers multiply by dt.
 *
 * @param {string} phase @param {boolean} storming @param {number} rainRate
 * @return {number} expected settles per second
 */
export function mothRestRate(phase, storming, rainRate) {
  if (mothWantsGround(phase, storming, rainRate)) return 8;   // effectively at once
  if (phase === 'DAWN') return 0.5;                           // settled within a few seconds
  if (phase === 'DEEP_NIGHT') return 0.02;                    // the hour they are most active
  const rain = clamp01(rainRate);
  return 0.06 + rain * 0.5;
}

// ----------------------------------------------------------------
// Noticing the player's light
// ----------------------------------------------------------------

/**
 * @brief Does a creature turn toward the player's light?
 *
 * Both conditions matter: a bright light far away is scenery, and a dim light
 * underfoot is not worth looking at. The squared distance is taken rather than
 * a distance so callers can keep their existing squared comparisons.
 *
 * @param {number} level 0..1 from lighting.getPlayerLightLevel()
 * @param {number} d2 squared distance to the player
 * @param {number} [maxD2=36] squared radius of attention, default 6 m
 * @param {number} [minLevel=0.6] how bright it has to be
 * @return {boolean}
 */
export function noticesLight(level, d2, maxD2 = 36, minLevel = 0.6) {
  if (!(level > minLevel)) return false;
  if (!(d2 >= 0) || !(d2 < maxD2)) return false;
  return true;
}

/** @brief How long a creature keeps looking, in seconds. */
export const LOOK_HOLD_S = 0.8;

function clamp01(v) {
  const n = Number.isFinite(v) ? v : 0;
  return n < 0 ? 0 : (n > 1 ? 1 : n);
}
