// ================================================================
// Glossary — the words the game has agreed to use for its own things
// ================================================================
// The game tells one story in two registers. The same object is a Sun-Seed to
// a child and a resonance anchor to a maintenance routine, and for a year both
// names were retyped at every surface that needed them. The narrative audit
// (reference/narrative-audit-2026-10-11.md) found eleven player-facing lines
// spelling a story term out by hand, one of them — "The Obelisk Is Whole!" —
// in a word that belongs to neither voice. That is how two voices drift: not
// by a rewrite, by a retype.
//
// So the terms live here once, and a line names one with a token:
//
//     'The First Little {t:orb}!'        child  -> The First Little Sun-Seed!
//                                       adult  -> The First Little resonance anchor!
//     '{t:progress|upper}: 5/5'         adult  -> SYNCHRONIZATION INDEX: 5/5
//
// A line is written in one voice and resolved in that voice. After the wizard
// lifts the veil both halves are on screen at once, each resolved in its own
// register — which is why resolveTerms takes the voice and does not read it
// from state.
//
// An unresolvable token is left visible rather than blanked, the same policy
// as controls.js: a {t:frobnicate} on screen in testing costs a screenshot,
// a silently dropped word costs a sentence. The loud failure belongs in the
// suite, and narrative/__tests__/glossary.test.js is where it lives — it
// refuses any token in any surface that does not resolve here.

import { CREATURE_NAMES } from '../quest/config.js';

/**
 * Story terms, in the form they are written in a sentence.
 *
 * Capitalisation is part of the term: "Sun-Seed" and "Big Crystal" are names,
 * "resonance anchor" is not. Use the |lower and |upper modifiers where a
 * sentence or a HUD needs a different case rather than adding a second entry.
 *
 * `name: true` marks a term whose spelling is a name rather than a
 * description, and those are the ones the coverage test refuses to find typed
 * out by hand in a player-facing string. The descriptions are deliberately
 * not policed: "mushroom circle" and "mycelial loop" are also just words, and
 * a test that failed on every sentence containing them would be a test the
 * next author deletes. A name that drifts is a different story — two spellings
 * of Sun-Seed is the whole reason this file exists.
 */
const STORY_TERMS = {
  player:     { child: 'the Spark',          adult: 'the diagnostic routine', name: true },
  obelisk:    { child: 'Big Crystal',        adult: 'Central Archive Index',  name: true },
  dimming:    { child: 'Sleepy Dust',        adult: 'Chronophage',            name: true },
  orb:        { child: 'Sun-Seed',           adult: 'resonance anchor',       name: true },
  orbs:       { child: 'Sun-Seeds',          adult: 'resonance anchors',      name: true },
  progress:   { child: 'Sun-Seeds found',    adult: 'Synchronization Index',  name: true },
  architect:  { child: 'the one who made the garden', adult: 'the Architect', name: true },
  restoring:  { child: 'making the garden glow', adult: 'local entropy reduction' },
  attuning:   { child: 'dancing with a friend',  adult: 'metronome sync' },
  hum:        { child: 'the humming',        adult: 'the carrier tone' },
  fairyRing:  { child: 'mushroom circle',    adult: 'mycelial loop' },
  sector:     { child: 'this part of the garden', adult: 'this sector' },
};

/**
 * Creature names come from CREATURE_NAMES rather than being restated here.
 * Two tables holding the same five names is the drift this file exists to
 * stop, so the quest config stays the one source and the glossary reads it.
 */
const CREATURE_KEYS = { jelly: 'jelly', deer: 'deer', moth: 'moth', puff: 'puff', carrier: 'any' };

function creatureTerms() {
  const out = {};
  for (const [key, cfgKey] of Object.entries(CREATURE_KEYS)) {
    const child = CREATURE_NAMES.child[cfgKey];
    const adult = CREATURE_NAMES.adult[cfgKey];
    if (!child || !adult) {
      throw new Error(`glossary: CREATURE_NAMES has no "${cfgKey}" in both voices — the two tables have drifted`);
    }
    out[key] = { child, adult };
  }
  return out;
}

/** Every term a {t:…} token can name, both voices. */
export const TERMS = Object.freeze({ ...STORY_TERMS, ...creatureTerms() });

/** @brief Every glossary key, for the coverage test and the dev console. */
export const TERM_KEYS = Object.freeze(Object.keys(TERMS));

/**
 * The forms a player-facing line must not spell out by hand.
 *
 * Named story terms only. Creature names are absent on purpose: "A Glowing
 * Deer!" is a discovery label with its own flavour, not a drifting copy of a
 * term, and CREATURE_NAMES already holds the one authoritative spelling of
 * each. Also here is the bare word "Obelisk" — what the source calls the
 * thing, and what neither voice calls it. That one shipped on the finale card.
 */
export const ENFORCED_FORMS = Object.freeze([
  ...Object.entries(STORY_TERMS)
    .filter(([, pair]) => pair.name)
    .flatMap(([key, pair]) => [
      { form: pair.child, voice: 'child', key },
      { form: pair.adult, voice: 'adult', key },
    ]),
  { form: 'Obelisk', voice: 'neither', key: 'obelisk' },
]);

/**
 * @brief One term, in one voice.
 * @param {string} key a key of TERMS
 * @param {'child'|'adult'} [voice='child']
 * @return {string}
 * @throws {Error} on a key that is not a term — a typo here is a content bug,
 *   and a caller asking for a term by name has no sensible fallback.
 */
export function term(key, voice = 'child') {
  const pair = TERMS[key];
  if (!pair) throw new Error(`glossary: no term "${key}" — add it to STORY_TERMS or fix the caller`);
  return voice === 'adult' ? pair.adult : pair.child;
}

/**
 * @brief Both voices of one term.
 * @param {string} key
 * @return {{child:string, adult:string}}
 * @throws {Error} on an unknown key
 */
export function termPair(key) {
  const pair = TERMS[key];
  if (!pair) throw new Error(`glossary: no term "${key}" — add it to STORY_TERMS or fix the caller`);
  return { child: pair.child, adult: pair.adult };
}

const TOKEN = /\{t:([A-Za-z]+)(?:\|(lower|upper))?\}/g;

/** @brief Every {t:…} token in a string, as {key, mod} — used by the tests. */
export function tokensIn(text) {
  if (typeof text !== 'string') return [];
  const out = [];
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) out.push({ key: m[1], mod: m[2] || null });
  return out;
}

/**
 * @brief Replace {t:key}, {t:key|lower} and {t:key|upper} in one voice.
 *
 * The voice is a parameter, not a read of narrative state, because a line
 * shown after the truth reveal is rendered twice — once per register — and a
 * function that looked the voice up itself could only ever render one of them.
 *
 * @param {string} text
 * @param {'child'|'adult'} [voice='child']
 * @return {string} an unknown key is left in place, visibly
 */
export function resolveTerms(text, voice = 'child') {
  if (typeof text !== 'string' || text.indexOf('{t:') === -1) return text;
  return text.replace(TOKEN, (whole, key, mod) => {
    const pair = TERMS[key];
    if (!pair) return whole;
    const word = voice === 'adult' ? pair.adult : pair.child;
    if (mod === 'lower') return word.toLowerCase();
    if (mod === 'upper') return word.toUpperCase();
    return word;
  });
}
