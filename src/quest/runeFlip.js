// ================================================================
// Rune flip — Tab at the obelisk, after the truth
// ================================================================
// Once the wizard has lifted the veil, pressing Tab while looking at the
// obelisk turns its lit runes between the two colours they carry: the pink of
// the archive, and the colour of the creature whose hum woke each one. Two
// worlds, one stone.
//
// This file is only the rules: who may do it, and how far along the turn is.
// It takes numbers and returns numbers, imports nothing, and so can be tested
// without a renderer. The colours themselves are blended in questVisuals,
// which owns the rune materials.

/** Seconds for the runes to turn from one colour to the other. */
export const RUNE_FLIP_SEC = 0.6;
/** Metres. The obelisk is 30 m tall and read from a long way off. */
export const RUNE_FLIP_RANGE = 30;
const RUNE_FLIP_RANGE2 = RUNE_FLIP_RANGE * RUNE_FLIP_RANGE;
/** cos(30°): the obelisk must be within 30 degrees of straight ahead. */
export const RUNE_FLIP_MIN_DOT = Math.cos(Math.PI / 6);

/**
 * @brief May Tab turn the runes from here?
 *
 * The look test is the same dot-product shape as the creature senses' cone
 * check, in the horizontal plane: the player's forward is (-sin yaw, -cos yaw),
 * the obelisk is wherever it is, and the cosine between them is compared to
 * a threshold. Standing on top of it counts as looking at it, because there
 * is no direction to compare.
 *
 * @param {boolean} truthRevealed the wizard has lifted the veil
 * @param {number} px player x
 * @param {number} pz player z
 * @param {number} yaw player yaw, radians
 * @param {number} [ox=0] obelisk x
 * @param {number} [oz=0] obelisk z
 * @return {boolean}
 */
export function runeFlipEligible(truthRevealed, px, pz, yaw, ox = 0, oz = 0) {
  if (!truthRevealed) return false;
  const dx = ox - px, dz = oz - pz;
  const d2 = dx * dx + dz * dz;
  if (d2 > RUNE_FLIP_RANGE2) return false;
  if (d2 < 0.25) return true;
  const dot = (-Math.sin(yaw) * dx - Math.cos(yaw) * dz) / Math.sqrt(d2);
  return dot >= RUNE_FLIP_MIN_DOT;
}

/**
 * @brief How far through the turn, 0..1.
 * @param {number} elapsed seconds since the press
 * @return {number} clamped; a negative elapsed is 0, anything past the end is 1
 */
export function runeFlipProgress(elapsed) {
  if (!(elapsed > 0)) return 0;
  return elapsed >= RUNE_FLIP_SEC ? 1 : elapsed / RUNE_FLIP_SEC;
}

/**
 * @brief The blend between the colours part-way through a turn, eased.
 * @param {number} from blend at the press, 0 = creature colour, 1 = archive pink
 * @param {number} to blend the press is turning towards
 * @param {number} elapsed seconds since the press
 * @return {number} 0..1
 */
export function runeFlipMix(from, to, elapsed) {
  const p = runeFlipProgress(elapsed);
  const eased = p * p * (3 - 2 * p);
  return from + (to - from) * eased;
}
