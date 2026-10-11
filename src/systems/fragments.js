// ================================================================
// Fragments — the five drawings, and the line that joins them
// ================================================================
// Each rune that lights on the obelisk is a drawing a child made and the stamp
// the archive filed it under (narrative/lines.js FRAGMENTS). After the fifth,
// a sixth line says what the five were for.
//
// Two rules shape this file.
//
// First, the count is DERIVED. How many fragments a player has seen is how many
// anchors they have woken, clamped to the five there are; nothing about it is
// saved. A save that stored it would have a second number to disagree with the
// quest's, and a load that read it back would have a reason to replay it.
//
// Second, nothing here runs on a load. Fragments are queued by the rune
// lighting up (questVisuals.onOrbCollected), which only a live collection
// reaches; a restore puts the runes into their finished state directly and
// never calls in here. The queue itself is transient and is emptied when a new
// run starts.
//
// Lines wait their turn. The orb's own text and its next-step hint are on
// screen for about nine seconds after a pick-up, and a fragment is the rarest
// line in the game: it is queued and shown when the overlay is free rather
// than cutting another line off, or being cut off itself by the next hint.

import { ORB_N } from '../constants.js';
import { FRAGMENTS, FRAGMENT_ASSEMBLY } from '../narrative/lines.js';
import { showNarrativePair, isNarrativeBusy } from './discoveries.js';

/** Seconds a constellation's name stays up — it is a caption, not a sentence. */
const NAME_DWELL = 2.5;
/** Seconds a fragment stays up, before the reading-time multiplier. */
const FRAGMENT_DWELL = 7.0;
/** The joining line is the one the five were building to; it stays longest. */
const ASSEMBLY_DWELL = 9.0;
/** A breath between one line fading and the next arriving. */
const SETTLE_SEC = 0.8;

/** @type {{set:{child:string, adult:string}, dwell:number, wait:number}[]} */
const _queue = [];

/**
 * @brief How many fragments the player has revealed, derived from their orbs.
 * @param {number} orbsFound anchors woken so far
 * @return {number} 0..ORB_N
 */
export function fragmentsRevealed(orbsFound) {
  if (!(orbsFound > 0)) return 0;
  return Math.min(Math.floor(orbsFound), ORB_N);
}

/**
 * @brief Queue what a newly lit rune reveals: the constellation's name, the
 * fragment, and — if this is the fifth — the line that joins them.
 * @param {number} faceIndex which rune lit, 0-based (orbsFound - 1)
 * @param {{child:string, adult:string}|null} [constellationName] the name pair
 *   sky.revealConstellation returned, if it newly revealed one
 */
export function queueReveal(faceIndex, constellationName = null) {
  if (!(faceIndex >= 0) || faceIndex >= ORB_N) return;
  if (constellationName) _queue.push({ set: constellationName, dwell: NAME_DWELL, wait: SETTLE_SEC });
  _queue.push({ set: FRAGMENTS[faceIndex], dwell: FRAGMENT_DWELL, wait: SETTLE_SEC });
  if (faceIndex === ORB_N - 1) {
    _queue.push({ set: FRAGMENT_ASSEMBLY, dwell: ASSEMBLY_DWELL, wait: SETTLE_SEC });
  }
}

/**
 * @brief Show the next queued line once the overlay is free.
 *
 * Called from the throttled discovery checks with the dt accumulated across
 * skipped frames, so the settle pause is wall-clock correct. Allocation-free:
 * it only shifts an existing entry off the queue.
 * @param {number} dt seconds since the last call
 */
export function updateFragments(dt) {
  if (_queue.length === 0 || isNarrativeBusy()) return;
  const head = _queue[0];
  head.wait -= dt;
  if (head.wait > 0) return;
  _queue.shift();
  showNarrativePair(head.set, head.dwell);
}

/** @brief Drop anything still waiting. Called when a new run starts. */
export function resetFragments() { _queue.length = 0; }

/** @brief How many lines are waiting, for the debug console. */
export function pendingFragmentLines() { return _queue.length; }
