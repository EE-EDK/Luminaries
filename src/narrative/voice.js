// ================================================================
// Voice — the one place a line becomes the words on screen
// ================================================================
// Every player-facing line in this game is a pair: a child half and an adult
// half. Which half shows depends on the perspective, and after the wizard
// lifts the veil both show at once. That rule was implemented twice — once
// properly in discoveries.dualLine for discovery labels and orb text, and
// once as `perspective === 'child' ? a : b` at nine other call sites. The
// ternaries worked and were wrong in a way nobody could see: they pick a half
// and throw the other away, so a player who has been shown that both worlds
// are true still only ever read one of them on the finale card, the orb
// rejection, the seek HUD and every idle hint.
//
// This module is the rule, once, and it is pure: it takes the voice and the
// truth flag rather than reading them, because a line rendered after the
// reveal has to be resolved twice, once per register, and a function that
// looked the voice up itself could only ever produce one of the two.

import { resolveControls } from './controls.js';
import { resolveTerms } from './glossary.js';

/**
 * @brief Resolve one half of a pair into the words the player reads.
 * @param {string} text
 * @param {'child'|'adult'} voice
 * @param {{touch?:boolean}} [opts]
 * @return {string}
 */
export function speak(text, voice, opts = {}) {
  if (typeof text !== 'string' || text === '') return '';
  return resolveTerms(resolveControls(text, { voice, touch: opts.touch }), voice);
}

/**
 * @brief Pick and resolve the line(s) to show for a {child, adult} pair.
 *
 * Before the reveal: the chosen register, falling back to whichever half
 * exists — the intro's terminal cards are adult-only on purpose and must not
 * come out blank for a child player.
 *
 * After the reveal: both, child first, each in its own register. Identical
 * halves collapse to one line; showing the same sentence twice reads as a
 * rendering fault, not as a second voice.
 *
 * @param {{child?:string, adult?:string}} set
 * @param {{voice?:'child'|'adult', truthRevealed?:boolean, touch?:boolean}} [opts]
 * @return {{primary:string, secondary:string|null}}
 * @throws {TypeError} when handed something that is not a pair. A missing
 *   table is a content bug and the suite should stop on it; call sites that
 *   can legitimately index past the end of a table check that themselves.
 */
export function dualLine(set, opts = {}) {
  if (!set || typeof set !== 'object' || Array.isArray(set)) {
    throw new TypeError(`dualLine: expected a {child, adult} pair, got ${Object.prototype.toString.call(set)}`);
  }
  const voice = opts.voice === 'adult' ? 'adult' : 'child';
  const child = speak(set.child, 'child', opts);
  const adult = speak(set.adult, 'adult', opts);

  if (opts.truthRevealed && child && adult && child !== adult) {
    return { primary: child, secondary: adult };
  }
  const chosen = voice === 'adult' ? (adult || child) : (child || adult);
  return { primary: chosen, secondary: null };
}

/**
 * @brief The same pick, flattened to one string.
 *
 * For the places that own a single text node and cannot carry a subtitle —
 * the quest HUD title, most of all. The separator is an en dash with spaces
 * so the two registers read as two clauses rather than one run-on.
 * @param {{child?:string, adult?:string}} set
 * @param {{voice?:'child'|'adult', truthRevealed?:boolean, touch?:boolean}} [opts]
 * @return {string}
 */
export function dualText(set, opts = {}) {
  const { primary, secondary } = dualLine(set, opts);
  return secondary ? `${primary} – ${secondary}` : primary;
}

/**
 * @brief Pair two parallel arrays of the same length into {child, adult}.
 *
 * IDLE_HINTS_CHILD/ADULT and ORB_STAGE_HINTS are written as parallel tables,
 * so the pairing is positional. An index past the end of either side yields
 * the half that exists rather than throwing, because the callers clamp with
 * Math.min against one array and the two have been different lengths before
 * (MESSAGES_CARRYING still is: nine child lines, eight adult).
 * @param {string[]} childRows
 * @param {string[]} adultRows
 * @param {number} i
 * @return {{child?:string, adult?:string}}
 */
export function pairAt(childRows, adultRows, i) {
  return {
    child: Array.isArray(childRows) ? childRows[i] : undefined,
    adult: Array.isArray(adultRows) ? adultRows[i] : undefined,
  };
}
