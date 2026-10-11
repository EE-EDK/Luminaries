// ================================================================
// Notebook state — what the player has seen, and nothing else
// ================================================================
// The field notebook is a ledger of first sightings. This module is the
// ledger: which entries exist, which have been seen, and how a save puts the
// seen ones back. No DOM, no Three.js, no storage — ui/notebook.js draws it,
// systems/notebookFeed.js fills it, worldSnapshot.js saves it.
//
// An entry's key is `page.name` ("creature.puff", "flora.fern"). The page is
// read off the key, so an entry can never be filed on a page it is not on, and
// the save holds plain strings that survive a renamed label.
//
// The iron rule applies here as everywhere in the restore path: a load sets
// state and announces nothing. `markSeen` emits NOTEBOOK_ENTRY because
// something was just seen; `restoreNotebook` never does, because nothing was.

import { emit, Events } from '../kernel/eventBus.js';

/** The pages, in the order the tabs run. */
export const NOTEBOOK_PAGES = Object.freeze(['creature', 'flora', 'sky', 'place', 'weather']);

const key = (page, names) => names.map((n) => `${page}.${n}`);

/** Five creature types — the four the quest names, plus the luminid. */
export const CREATURE_ENTRIES = Object.freeze(key('creature', ['puff', 'jelly', 'deer', 'moth', 'luminid']));

/** Sixteen flora types: every plant the populate pass places, trees included. */
export const FLORA_ENTRIES = Object.freeze(key('flora', [
  'tree', 'mushroom', 'crystal', 'grass', 'fern', 'flower', 'reed', 'dandelion',
  'thornbloom', 'helixvine', 'snapthorn', 'spiralfrond', 'corpsebloom', 'orbbush',
  'lanternpod', 'veilmoss',
]));

/** The five constellations (by collection ordinal) and the first shooting-star wish. */
export const SKY_ENTRIES = Object.freeze([
  ...key('sky', ['constellation0', 'constellation1', 'constellation2', 'constellation3', 'constellation4']),
  'sky.wish',
]);

/** Five places: pond, fairy ring, crystal chain, glyph, and the obelisk. */
export const PLACE_ENTRIES = Object.freeze(key('place', ['pond', 'fairyRing', 'crystalChain', 'glyph', 'obelisk']));

/**
 * One entry per weather state. Spelled out rather than imported: weather.js
 * pulls in the renderer, and this module has to load in a test. The browser
 * gate compares this list with WEATHER_STATE_NAMES, so a state added there and
 * not here fails somewhere that can see both.
 */
export const WEATHER_ENTRIES = Object.freeze(key('weather',
  ['CLEAR', 'MISTY', 'LIGHT_RAIN', 'HEAVY_RAIN', 'FOG_BANK', 'LUMINOUS_STORM']));

/** Every entry key, in page order. */
export const ALL_ENTRIES = Object.freeze([
  ...CREATURE_ENTRIES, ...FLORA_ENTRIES, ...SKY_ENTRIES, ...PLACE_ENTRIES, ...WEATHER_ENTRIES,
]);

const KNOWN = new Set(ALL_ENTRIES);

/**
 * The discovery system's keys (DISCOVERY_LABELS and the _discovered table in
 * narrativeState) mapped onto notebook entries. "puffling" there is "puff"
 * everywhere else — the one place the two vocabularies disagree.
 */
export const DISCOVERY_ENTRY = Object.freeze({
  deer: 'creature.deer',
  puffling: 'creature.puff',
  jelly: 'creature.jelly',
  moth: 'creature.moth',
  fairyRing: 'place.fairyRing',
  crystalChain: 'place.crystalChain',
  pond: 'place.pond',
  glyph: 'place.glyph',
});

/** @brief The notebook entry a discovery key fills, or null for one the book does not track. */
export function entryForDiscovery(discoveryKey) {
  return Object.prototype.hasOwnProperty.call(DISCOVERY_ENTRY, discoveryKey) ? DISCOVERY_ENTRY[discoveryKey] : null;
}

/** @brief The entry for a creature type as the attunement events spell it ('puff', 'jelly', 'deer', 'moth'). */
export function entryForCreature(type) {
  const k = `creature.${type}`;
  return KNOWN.has(k) ? k : null;
}

/** @brief The constellation entry for the Nth orb collected (1 = first). */
export function entryForOrbCount(orbsFound) {
  if (!Number.isInteger(orbsFound) || orbsFound < 1 || orbsFound > 5) return null;
  return `sky.constellation${orbsFound - 1}`;
}

/** @brief The weather entry for a state name, or null for one the book does not know. */
export function entryForWeather(stateName) {
  const k = `weather.${stateName}`;
  return KNOWN.has(k) ? k : null;
}

/** @brief The page an entry lives on. */
export function pageOf(entryKey) {
  const i = entryKey.indexOf('.');
  return i < 0 ? '' : entryKey.slice(0, i);
}

/** @brief Whether the book has an entry by this key. */
export function isEntry(entryKey) { return KNOWN.has(entryKey); }

// ----------------------------------------------------------------
// The ledger
// ----------------------------------------------------------------

const _seen = new Set();

/** @brief Whether an entry has been seen. */
export function isSeen(entryKey) { return _seen.has(entryKey); }

/**
 * @brief Record a first sighting.
 *
 * Idempotent and cheap: every feed calls this freely and the answer to "was
 * that new" is the return value, not a thing the caller tracks.
 * @param {string|null} entryKey
 * @return {boolean} true only when this call added the entry
 */
export function markSeen(entryKey) {
  if (!entryKey || !KNOWN.has(entryKey) || _seen.has(entryKey)) return false;
  _seen.add(entryKey);
  emit(Events.NOTEBOOK_ENTRY, { key: entryKey });
  return true;
}

/** @brief Seen keys in page order, so two saves of the same book are the same bytes. */
export function getSeenKeys() {
  const out = [];
  for (let i = 0; i < ALL_ENTRIES.length; i++) if (_seen.has(ALL_ENTRIES[i])) out.push(ALL_ENTRIES[i]);
  return out;
}

/** @brief How many entries have been seen. */
export function seenCount() { return _seen.size; }

/**
 * @brief Seen and total for one page.
 * @param {string} page one of NOTEBOOK_PAGES
 * @return {{seen:number, total:number}}
 */
export function pageProgress(page) {
  let seen = 0, total = 0;
  for (let i = 0; i < ALL_ENTRIES.length; i++) {
    const k = ALL_ENTRIES[i];
    if (pageOf(k) !== page) continue;
    total++;
    if (_seen.has(k)) seen++;
  }
  return { seen, total };
}

/**
 * @brief Entries a save from before the notebook existed can still vouch for.
 *
 * A player loading an old save has already met the deer, swept five sectors and
 * stood in the rain; opening a blank book on that would be wrong. The pieces of
 * the old save that say so are mapped onto entries here. Pure: it returns keys,
 * it marks nothing.
 *
 * @param {{discovered?:string[], orbsCollected?:number, wishes?:boolean[], weather?:string}} p
 * @return {string[]}
 */
export function entriesFromProgress(p) {
  const out = [];
  const add = (k) => { if (k && KNOWN.has(k) && out.indexOf(k) < 0) out.push(k); };
  if (p && Array.isArray(p.discovered)) for (const d of p.discovered) add(entryForDiscovery(d));
  if (p && Number.isInteger(p.orbsCollected)) {
    for (let n = 1; n <= p.orbsCollected && n <= 5; n++) add(entryForOrbCount(n));
  }
  if (p && Array.isArray(p.wishes) && p.wishes.some(Boolean)) add('sky.wish');
  if (p && typeof p.weather === 'string') add(entryForWeather(p.weather));
  return out;
}

/**
 * @brief Put a saved book back. Silent — no NOTEBOOK_ENTRY, ever.
 *
 * Unknown keys are dropped rather than kept: an entry renamed in a later
 * version would otherwise sit in the save forever, counted by nothing and
 * shown nowhere. A missing or non-array field (a save from before the
 * notebook) restores to whatever `progress` can vouch for, which for a fresh
 * save is nothing; a present field is taken as it stands.
 *
 * @param {string[]|undefined} keys narrative.notebook from the save
 * @param {object} [progress] see entriesFromProgress
 * @return {number} how many entries are seen afterwards
 */
export function restoreNotebook(keys, progress) {
  // Replace, not merge: the world has opened with whatever it saw on boot (the
  // sky it started under), and a restore describes the book as it was saved.
  _seen.clear();
  if (Array.isArray(keys)) {
    // A save that has the field is the book, as it was. It is not topped up
    // from the rest of the save: narrative.discovered has been wrong before
    // (see systems/notebookFeed.js on creature discoveries), and a player who
    // had not yet met something should not find it logged after a reload.
    for (const k of keys) if (typeof k === 'string' && KNOWN.has(k)) _seen.add(k);
  } else {
    for (const k of entriesFromProgress(progress)) _seen.add(k);
  }
  return _seen.size;
}

/** @brief Empty the book. For a new run and for tests. */
export function resetNotebook() { _seen.clear(); }
