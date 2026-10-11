// ================================================================
// Memories — small things the world notices you doing
// ================================================================
// Two quiet interactions that reward attention rather than progress. Neither
// is needed to finish the game and neither announces itself; a player who
// never stands still at dusk, or never hums by a glyph, loses nothing but a
// sentence.
//
//   house memory — standing still near a puffling home at dusk, once per
//                  village, a line about the people who live there.
//   glyph echo   — humming a creature's band beside a glyph that has already
//                  been read, once per creature, and the glyph says that
//                  creature's discovery line again in the register the player
//                  is NOT reading.
//
// Both are driven from the throttled discovery checks, take their inputs as
// arguments, and do squared-distance tests only: no allocation, no sqrt, and
// nothing to mock but the display.

import { HOUSE_MEMORIES } from '../narrative/lines.js';
import { DISCOVERY_LABELS } from '../quest/config.js';
import { getPerspective, isDiscovered, markDiscovered } from '../state/narrativeState.js';
import { showNarrativePair } from './discoveries.js';

/** Seconds the player must have stood still. */
export const HOUSE_STILL_SEC = 3.0;
/**
 * How close, in metres from the house's WALL, counts as being at it. Measured
 * from the wall and not the centre because a player cannot get to the centre:
 * the house's collision pushes them out to its radius, and a test of 5 m from
 * the middle sat just inside that ring and was never reachable.
 */
export const HOUSE_REACH = 5;
/** Squared radius the nearest-house lookup searches; wider than any wall plus the reach. */
export const HOUSE_SEARCH2 = 256;
/** Squared distance (4 m) to a revealed glyph. */
export const ECHO_RADIUS2 = 16;
/** The day phase a house remembers in; the label dayNightCycle.phase carries. */
export const HOUSE_PHASE = 'DUSK';

/**
 * Keys are built once and looked up, not concatenated per check: the check
 * runs every throttled frame for as long as the player stands there.
 * @type {string[]}
 */
const _houseKeys = [];

/**
 * @brief The discovered-set key for a village's house memory.
 * @param {number} cluster village index
 * @return {string} 'house:<cluster>'
 */
export function houseKey(cluster) {
  if (_houseKeys[cluster] === undefined) _houseKeys[cluster] = 'house:' + cluster;
  return _houseKeys[cluster];
}

const ECHO_KEYS = { deer: 'echo:deer', puff: 'echo:puff', jelly: 'echo:jelly', moth: 'echo:moth' };
/** Hum band names are the spirit hum's; discovery labels are keyed by the quest's. */
const ECHO_LABELS = { deer: 'deer', puff: 'puffling', jelly: 'jelly', moth: 'moth' };

/**
 * @brief Say a house's memory if the player has stood still at one at dusk.
 * @param {number} px player x
 * @param {number} pz player z
 * @param {number} idleSec seconds since the player last moved
 * @param {string} phaseLabel the current day phase label
 * @param {(x:number, z:number, maxD2:number) => ({x:number, z:number, colR?:number, cluster?:number}|null)} findHouse
 *   the nearest house within a squared radius (pufflingHomes.nearestHouse)
 * @return {boolean} true if a memory was shown on this call
 */
export function checkHouseMemory(px, pz, idleSec, phaseLabel, findHouse) {
  if (phaseLabel !== HOUSE_PHASE || idleSec < HOUSE_STILL_SEC) return false;
  const house = findHouse(px, pz, HOUSE_SEARCH2);
  if (!house) return false;
  const dx = house.x - px, dz = house.z - pz;
  const reach = (house.colR || 0) + HOUSE_REACH;
  if (dx * dx + dz * dz >= reach * reach) return false;
  const cluster = house.cluster | 0;
  const key = houseKey(cluster);
  if (isDiscovered(key)) return false;
  markDiscovered(key);
  showNarrativePair(HOUSE_MEMORIES[cluster % HOUSE_MEMORIES.length], 6.0);
  return true;
}

/**
 * @brief Which creature band the player is humming, if any.
 *
 * A lock ends the hum on its own (the spirit hum stops itself when it locks)
 * but the lock persists for a while, so a player still carrying a band's hum
 * counts as humming it.
 * @param {boolean} humming
 * @param {number} resonance 0..1
 * @param {string|null} resonanceType band the pitch is inside
 * @param {boolean} locked
 * @param {string|null} lockType
 * @return {string|null} 'deer' | 'moth' | 'jelly' | 'puff' | null
 */
export function humBandType(humming, resonance, resonanceType, locked, lockType) {
  if (humming) return resonance > 0.12 ? resonanceType : null;
  return locked ? lockType : null;
}

/**
 * @brief Let a read glyph repeat a creature's line in the other register.
 * @param {number} px player x
 * @param {number} pz player z
 * @param {string|null} bandType the band being hummed (humBandType)
 * @param {Array<{x:number, z:number, revealed:boolean}>} glyphs
 * @return {boolean} true if an echo was shown on this call
 */
export function checkGlyphEcho(px, pz, bandType, glyphs) {
  if (!bandType) return false;
  const key = ECHO_KEYS[bandType];
  if (key === undefined || isDiscovered(key)) return false;
  for (let i = 0; i < glyphs.length; i++) {
    const g = glyphs[i];
    if (!g.revealed) continue;
    const dx = g.x - px, dz = g.z - pz;
    if (dx * dx + dz * dz >= ECHO_RADIUS2) continue;
    const label = DISCOVERY_LABELS[ECHO_LABELS[bandType]];
    if (!label) return false;
    markDiscovered(key);
    // The register the player is not reading. A one-sided pair is shown as
    // that side alone, before the reveal and after it: the glyph is answering
    // in the voice the player has not heard it in.
    const other = getPerspective() === 'adult' ? { child: label.child } : { adult: label.adult };
    showNarrativePair(other, 5.0);
    return true;
  }
  return false;
}
