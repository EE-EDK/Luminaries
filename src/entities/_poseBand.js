// ================================================================
// Pose band — which creatures get their rig pose written this frame
// ================================================================
// Each rigged creature (deer, moth, puffling) hands its joint angles to the GPU
// once per frame (`writeDeerPose` and friends). The cull radii in the update
// loops already freeze creatures that are far away; this module caps the ones
// that are close enough to be simulated: only the nearest N of each type get a
// pose write, the rest keep the last pose they were given. Their behaviour
// (state, position, joint ANGLES) still runs every frame, so a creature that
// moves back into the band shows where it is now, not where it was.
//
// How it is used (one band per type, one pass through the type's update loop):
//
//   poseBandBegin(band);                       // before the loop
//   ...for each creature, after its cull:
//       poseBandOffer(band, c, d2);            // d2 = squared distance to the player
//   ...where the pose is written:
//       if (poseBandHas(band, c)) writeXPose(c);
//   poseBandEnd(band);                         // after the loop
//
// This frame's offers decide NEXT frame's `Has`, so the loop stays a single pass
// and never has to rank creatures before it has visited them. One frame of lag
// on a creature's pose is not visible; a creature that has never been in the band
// shows its rest pose.
//
// Hysteresis: a creature that was in the band last frame competes with its
// squared distance multiplied by POSE_STICKY, so a rival has to be clearly nearer
// (about 16 percent in distance) to take its place, and once it has, the creature
// it displaced cannot take the place back at the same distance. The cap is strict:
// never more than `limit` members.
//
// Zero allocation after creation: a Float64Array of keys and an Array of
// references, both sized once. The creature records get one extra field,
// `_pbFrame`, the frame number at which the band last kept them.
// ================================================================

/** A member's squared distance counts for this fraction of itself when ranking. */
export const POSE_STICKY = 0.7;

/**
 * Nearest-N creatures per type. Chosen from the live counts measured in the running
 * game (NOTES.md): the 90th percentile of how many of each type sit inside their cull
 * radius, over 357 stand points across the map (deer 8, moth 15, puffling 16). In nine
 * views out of ten the cap does not bite at all; it bounds the crowded tenth, and the
 * worst case, below the population (deer 12, moth 35, puffling 35-40).
 */
export const POSE_BAND_N = Object.freeze({ deer: 8, moth: 15, puff: 16 });

/**
 * Build a band. Capacity is the most it can ever hold; `limit` (<= capacity) is
 * what is allowed right now and is what the quality scaler moves.
 * @param {number} capacity
 * @returns {{capacity:number, limit:number, frame:number, n:number, keys:Float64Array, who:Array}}
 */
export function createPoseBand(capacity) {
  const cap = Math.max(1, capacity | 0);
  return {
    capacity: cap,
    limit: cap,
    frame: 0,
    n: 0,
    keys: new Float64Array(cap),
    who: new Array(cap).fill(null)
  };
}

/** Start a frame's selection. */
export function poseBandBegin(band) {
  band.frame++;
  band.n = 0;
}

/**
 * Offer one live (not culled) creature at squared distance d2. Keeps the `limit`
 * best keys in ascending order by insertion; the worst falls out when full.
 * @param {object} band
 * @param {object} c creature record (gets `_pbFrame` stamped at poseBandEnd)
 * @param {number} d2 squared distance to the player
 */
export function poseBandOffer(band, c, d2) {
  const key = c._pbFrame === band.frame - 1 ? d2 * POSE_STICKY : d2;
  const keys = band.keys, who = band.who;
  let n = band.n;
  if (n >= band.limit) {
    if (key >= keys[n - 1]) return;      // not near enough to displace the worst member
    n--;                                  // the worst falls out
  }
  let i = n;
  while (i > 0 && keys[i - 1] > key) {
    keys[i] = keys[i - 1];
    who[i] = who[i - 1];
    i--;
  }
  keys[i] = key;
  who[i] = c;
  band.n = n + 1;
}

/** Finish a frame's selection: stamp the survivors, drop the references. */
export function poseBandEnd(band) {
  const f = band.frame, who = band.who;
  for (let i = 0; i < band.n; i++) {
    who[i]._pbFrame = f;
    who[i] = null;
  }
}

/** Was this creature kept by the previous frame's selection? */
export function poseBandHas(band, c) {
  return c._pbFrame === band.frame - 1;
}

// ----------------------------------------------------------------
// The three bands the fauna loops use, and the quality hook
// ----------------------------------------------------------------
export const poseBands = {
  deer: createPoseBand(POSE_BAND_N.deer),
  moth: createPoseBand(POSE_BAND_N.moth),
  puff: createPoseBand(POSE_BAND_N.puff)
};

let _scale = 1;

/**
 * Scale every band's limit (the adaptive-quality hook). Rounded, never below 1,
 * never above capacity. A smaller limit takes effect on the next offer.
 * @param {number} s 1 = full
 * @returns {number} the scale in effect
 */
export function setPoseBandScale(s) {
  _scale = s > 0 ? (s > 1 ? 1 : s) : 1;
  for (const k in poseBands) {
    const b = poseBands[k];
    const lim = Math.floor(b.capacity * _scale + 0.5);
    b.limit = lim < 1 ? 1 : (lim > b.capacity ? b.capacity : lim);
  }
  return _scale;
}

/** @returns {number} the scale last set (1 until the scaler moves). */
export function getPoseBandScale() { return _scale; }

/** Debug snapshot (allocates; not for the frame loop). */
export function getPoseBandReport() {
  const out = { scale: _scale };
  for (const k in poseBands) {
    const b = poseBands[k];
    out[k] = { limit: b.limit, capacity: b.capacity, members: b.n, frame: b.frame };
  }
  return out;
}
