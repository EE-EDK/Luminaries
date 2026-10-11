// ================================================================
// Sound captions — what a creature call says, in words
// ================================================================
// The line shown for a call, as a {child, adult} pair like every other thing
// the player reads, and the gate that decides whether a call earns a caption
// at all. No DOM and no events: ui/soundCaptions.js listens and draws.
//
// Creature names come through glossary tokens, so a puffling is a "puffling"
// to a child and "micro-fauna" to the routine reading the log, and a renamed
// term changes here without anyone touching this file.

import { relativeSide } from '../utils/math.js';

/** What each creature does when it calls, per voice. {t:…} resolves in the voice shown. */
export const CAPTION_VERBS = Object.freeze({
  puff:  { child: 'a {t:puff} chirps',        adult: '{t:puff} vocalisation' },
  jelly: { child: 'a {t:jelly} hums',         adult: '{t:jelly} low-frequency emission' },
  deer:  { child: 'a {t:deer} snorts',        adult: '{t:deer} alarm call' },
  moth:  { child: 'a {t:moth} trills',        adult: '{t:moth} wingbeat tone' },
});

/** Where it came from, per voice. */
export const CAPTION_SIDES = Object.freeze({
  left:   { child: 'on your left',  adult: 'bearing left' },
  right:  { child: 'on your right', adult: 'bearing right' },
  ahead:  { child: 'ahead of you',  adult: 'bearing ahead' },
  behind: { child: 'behind you',    adult: 'bearing astern' },
  here:   { child: 'right beside you', adult: 'at the receiver' },
});

/** A small arrow per side, so the direction can be taken in at a glance. */
export const CAPTION_ARROWS = Object.freeze({
  left: '◀', right: '▶', ahead: '▲', behind: '▼', here: '●',
});

/**
 * @brief The caption for one call, as a pair.
 * @param {string} type a key of CAPTION_VERBS
 * @param {string} side a key of CAPTION_SIDES
 * @return {{child:string, adult:string}|null} null for a creature that has no caption
 */
export function captionPair(type, side) {
  const v = CAPTION_VERBS[type];
  const s = CAPTION_SIDES[side];
  if (!v || !s) return null;
  return { child: `${v.child}, ${s.child}`, adult: `${v.adult}, ${s.adult}` };
}

/**
 * @brief The caption for a call heard from a position, given where the listener is.
 *
 * Pure geometry plus the table: the same relative vector the spatial audio
 * panner turns into left and right, turned into a word instead.
 *
 * @param {string} type creature type
 * @param {number} dx sound x minus listener x
 * @param {number} dz sound z minus listener z
 * @param {number} yaw listener yaw
 * @return {{pair:{child:string, adult:string}, side:string, arrow:string}|null}
 */
export function captionFor(type, dx, dz, yaw) {
  const side = relativeSide(dx, dz, yaw);
  const pair = captionPair(type, side);
  return pair ? { pair, side, arrow: CAPTION_ARROWS[side] } : null;
}

/** Calls beyond this squared distance (30 m) are not audible, so they get no caption — the audio uses the same cut. */
export const CAPTION_RANGE_D2 = 900;

/** Seconds between captions for one creature type; a creature that calls twice in a breath is one event. */
export const CAPTION_COOLDOWN_S = 2.5;

/**
 * @brief Whether this call earns a caption, and note it if so.
 *
 * Per-type cooldown, not global: a deer and a moth calling together are two
 * things to know about. The `last` table is the caller's, mutated in place.
 *
 * @param {Object<string, number>} last type → seconds of the last caption
 * @param {string} type
 * @param {number} nowS seconds on any monotonic clock
 * @param {number} d2 squared distance from the listener
 * @return {boolean}
 */
export function captionGate(last, type, nowS, d2) {
  if (!(d2 <= CAPTION_RANGE_D2)) return false;
  if (!CAPTION_VERBS[type]) return false;
  const prev = last[type];
  if (prev !== undefined && nowS - prev < CAPTION_COOLDOWN_S) return false;
  last[type] = nowS;
  return true;
}
