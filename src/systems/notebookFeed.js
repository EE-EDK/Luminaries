// ================================================================
// Notebook feed — how the book finds out what the player has seen
// ================================================================
// Two ways in. Events the game already fires (a discovery, an attunement, an
// orb, a change of weather) fill the entries they name. Everything else — a
// fern, a luminid, the obelisk — is seen by standing near it, which is a
// proximity scan over the entity arrays the world already keeps. No new
// spatial index: the arrays in state/entityStore.js are the index.
//
// The scan is throttled the way the discovery checks are, but finer-grained:
// at most ONE entry type is swept per call, and each type is swept no more
// than once every SCAN_INTERVAL_S. A frame therefore never pays for more than
// one pass over one array, and the passes themselves vanish as the book
// fills — a type that has been seen is not swept again.
//
// The same table drives the free-roam wisp (D3): given the entries still
// unseen, it finds the nearest record of each and leads the player toward the
// closest. Both are squared-distance throughout and allocate nothing after
// module load.

import { on, Events } from '../kernel/eventBus.js';
import {
  isSeen, markSeen, entryForDiscovery, entryForCreature, entryForOrbCount, entryForWeather,
} from '../state/notebookState.js';
import {
  trees_data, mush_data, crys_data, grassPatches, ferns, flowers, reeds, dandelions,
  thornblooms, helixvines, snapthorns, spiralfronds, corpseblooms, orbbushes, lanternpods,
  veilmosses, jellies, puffs, deers, moths, luminids, ponds, fairyRings, glyphs_data,
} from '../state/entityStore.js';

/** Seconds between sweeps of any one entry type. */
export const SCAN_INTERVAL_S = 0.5;

/** Seconds the player must stand still before the wisp goes looking for an unseen entry. */
export const GUIDE_IDLE_S = 8;

/** The obelisk is not in an array — the world is built around it — so it gets a one-record one. */
const OBELISK_AT = [{ x: 0, z: 0 }];

/**
 * Where each entry's records live and how close counts as seeing one.
 *
 * `pos` names the record's position fields: 'xz' is `.x/.z`, 'cxz' is the grass
 * patches' `.cx/.cz`, 'group' is `.group.position` (creatures move, so theirs
 * is read live). `r` is the seeing distance in metres; 0 means "no proximity
 * sighting, but the wisp may lead toward the nearest one". Flora is six metres,
 * as the plan has it; the four creatures the quest names are eight, the same
 * distance the discovery system uses, so the book and the on-screen "A Glowing
 * Deer!" agree about when a deer was met. The big things — a tree, a luminid,
 * the obelisk — are seen from further back, because standing among them is not
 * the point.
 */
export const SCAN_SOURCES = Object.freeze([
  { key: 'creature.puff',    arr: puffs,        pos: 'group', r: 8 },
  { key: 'creature.jelly',   arr: jellies,      pos: 'group', r: 8 },
  { key: 'creature.deer',    arr: deers,        pos: 'group', r: 8 },
  { key: 'creature.moth',    arr: moths,        pos: 'group', r: 8 },
  { key: 'creature.luminid', arr: luminids,     pos: 'group', r: 25 },
  { key: 'flora.tree',        arr: trees_data,    pos: 'xz',  r: 10 },
  { key: 'flora.mushroom',    arr: mush_data,     pos: 'xz',  r: 6 },
  { key: 'flora.crystal',     arr: crys_data,     pos: 'xz',  r: 8 },
  { key: 'flora.grass',       arr: grassPatches,  pos: 'cxz', r: 8 },
  { key: 'flora.fern',        arr: ferns,         pos: 'xz',  r: 6 },
  { key: 'flora.flower',      arr: flowers,       pos: 'xz',  r: 6 },
  { key: 'flora.reed',        arr: reeds,         pos: 'xz',  r: 6 },
  { key: 'flora.dandelion',   arr: dandelions,    pos: 'xz',  r: 6 },
  { key: 'flora.thornbloom',  arr: thornblooms,   pos: 'xz',  r: 6 },
  { key: 'flora.helixvine',   arr: helixvines,    pos: 'xz',  r: 6 },
  { key: 'flora.snapthorn',   arr: snapthorns,    pos: 'xz',  r: 6 },
  { key: 'flora.spiralfrond', arr: spiralfronds,  pos: 'xz',  r: 6 },
  { key: 'flora.corpsebloom', arr: corpseblooms,  pos: 'xz',  r: 6 },
  { key: 'flora.orbbush',     arr: orbbushes,     pos: 'xz',  r: 6 },
  { key: 'flora.lanternpod',  arr: lanternpods,   pos: 'xz',  r: 6 },
  { key: 'flora.veilmoss',    arr: veilmosses,    pos: 'xz',  r: 6 },
  { key: 'place.obelisk',      arr: OBELISK_AT,  pos: 'xz', r: 14 },
  // Seen by events, not by standing near them — but the wisp can still point at one.
  { key: 'place.pond',         arr: ponds,       pos: 'xz', r: 0 },
  { key: 'place.fairyRing',    arr: fairyRings,  pos: 'xz', r: 0 },
  { key: 'place.crystalChain', arr: crys_data,   pos: 'xz', r: 0 },
  { key: 'place.glyph',        arr: glyphs_data, pos: 'xz', r: 0 },
]);

function recX(e, pos) { return pos === 'group' ? e.group.position.x : (pos === 'cxz' ? e.cx : e.x); }
function recZ(e, pos) { return pos === 'group' ? e.group.position.z : (pos === 'cxz' ? e.cz : e.z); }

/**
 * @brief Make a scanner over a source table.
 * @param {ReadonlyArray<object>} [sources=SCAN_SOURCES]
 * @return {{sources:object[], r2:Float64Array, due:Float64Array, clock:number, cursor:number}}
 */
export function createScanner(sources = SCAN_SOURCES) {
  const r2 = new Float64Array(sources.length);
  for (let i = 0; i < sources.length; i++) r2[i] = sources[i].r * sources[i].r;
  return { sources, r2, due: new Float64Array(sources.length), clock: 0, cursor: 0 };
}

/**
 * @brief Advance the scan by dt and sweep at most one entry type.
 *
 * Round-robin from where the last sweep left off, so the types take turns and
 * none starves behind a neighbour that is always due.
 *
 * @param {ReturnType<typeof createScanner>} sc
 * @param {number} dt seconds since the last call
 * @param {number} px player x
 * @param {number} pz player z
 * @param {(key:string)=>*} [mark=markSeen] called with the key on a sighting
 * @return {number} index of the source swept, or -1 when none was due
 */
export function scanStep(sc, dt, px, pz, mark = markSeen) {
  sc.clock += dt;
  const n = sc.sources.length;
  for (let k = 0; k < n; k++) {
    const i = (sc.cursor + k) % n;
    const s = sc.sources[i];
    if (!(sc.r2[i] > 0) || sc.due[i] > sc.clock || isSeen(s.key)) continue;
    sc.due[i] = sc.clock + SCAN_INTERVAL_S;
    sc.cursor = (i + 1) % n;
    const arr = s.arr, r2 = sc.r2[i], pos = s.pos;
    for (let j = 0; j < arr.length; j++) {
      const e = arr[j];
      const dx = recX(e, pos) - px, dz = recZ(e, pos) - pz;
      if (dx * dx + dz * dz < r2) { mark(s.key); break; }
    }
    return i;
  }
  return -1;
}

// ----------------------------------------------------------------
// Free-roam guidance (D3)
// ----------------------------------------------------------------

/**
 * @brief The nearest entry that has not been seen and has somewhere to go.
 *
 * Pure: it is handed positions and returns one. Entries with no position
 * (the sky, the weather) cannot be walked to and are skipped.
 *
 * @param {ReadonlyArray<{key:string, seen:boolean, has:boolean, x:number, z:number}>} entries
 * @param {number} px player x
 * @param {number} pz player z
 * @return {object|null} the winning entry, by reference
 */
export function nearestUnseenEntry(entries, px, pz) {
  let best = null, bestD2 = Infinity;
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    if (e.seen || !e.has) continue;
    const dx = e.x - px, dz = e.z - pz;
    const d2 = dx * dx + dz * dz;
    if (d2 < bestD2) { bestD2 = d2; best = e; }
  }
  return best;
}

// One record per source, allocated once: refreshing the targets rewrites them.
const _targets = SCAN_SOURCES.map((s) => ({ key: s.key, seen: false, has: false, x: 0, z: 0 }));
const _guide = { x: 0, z: 0, key: '' };
let _guideSecond = -1;
let _guideActive = false;

/**
 * @brief Rewrite each target with the nearest record of its type.
 * @param {number} px @param {number} pz player position
 * @param {ReadonlyArray<object>} [sources=SCAN_SOURCES]
 * @param {object[]} [targets] one per source
 */
export function refreshTargets(px, pz, sources = SCAN_SOURCES, targets = _targets) {
  for (let i = 0; i < sources.length; i++) {
    const s = sources[i], t = targets[i];
    t.seen = isSeen(s.key);
    t.has = false;
    if (t.seen) continue;
    let bestD2 = Infinity;
    const arr = s.arr, pos = s.pos;
    for (let j = 0; j < arr.length; j++) {
      const e = arr[j];
      const x = recX(e, pos), z = recZ(e, pos);
      const dx = x - px, dz = z - pz;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestD2) { bestD2 = d2; t.x = x; t.z = z; t.has = true; }
    }
  }
}

/**
 * @brief Where the guide wisp should lead, in free roam.
 *
 * Nothing until the player has stood still for GUIDE_IDLE_S. After that the
 * answer is recomputed once per second of stillness (a full pass over the
 * unseen types' arrays, so not every frame) and cached between. Moving
 * resets it, so a player who walks off is left alone.
 *
 * @param {number} px player x
 * @param {number} pz player z
 * @param {number} idleS seconds since the player last moved
 * @return {{x:number, z:number, key:string}|null} a shared scratch object — read it, do not keep it
 */
export function pickNotebookGuide(px, pz, idleS) {
  if (!(idleS >= GUIDE_IDLE_S)) { _guideSecond = -1; _guideActive = false; return null; }
  const sec = Math.floor(idleS);
  if (sec !== _guideSecond) {
    _guideSecond = sec;
    refreshTargets(px, pz);
    const t = nearestUnseenEntry(_targets, px, pz);
    _guideActive = !!t;
    if (t) { _guide.x = t.x; _guide.z = t.z; _guide.key = t.key; }
  }
  return _guideActive ? _guide : null;
}

/**
 * @brief The nearest record of an entry's type, by key, for the dev console.
 * @param {string} key a SCAN_SOURCES key
 * @param {number} px @param {number} pz from where
 * @return {{x:number, z:number, d:number}|null}
 */
export function nearestRecord(key, px, pz) {
  const s = SCAN_SOURCES.find((src) => src.key === key);
  if (!s) return null;
  let bestD2 = Infinity, bx = 0, bz = 0;
  for (let j = 0; j < s.arr.length; j++) {
    const e = s.arr[j];
    const x = recX(e, s.pos), z = recZ(e, s.pos);
    const dx = x - px, dz = z - pz;
    const d2 = dx * dx + dz * dz;
    if (d2 < bestD2) { bestD2 = d2; bx = x; bz = z; }
  }
  return bestD2 < Infinity ? { x: bx, z: bz, d: Math.sqrt(bestD2) } : null;
}

// ----------------------------------------------------------------
// Event feeds
// ----------------------------------------------------------------

/**
 * @brief Subscribe the notebook to the events that name what the player met.
 * @return {() => void} unsubscribe everything
 */
export function initNotebookFeed() {
  const offs = [
    // glyph reveals carry `type`, everything else `key`. Creature discoveries are
    // left to the proximity scan on purpose: checkEntityGroup in discoveries.js
    // reads `e.position || e`, but a creature record holds its position on
    // `.group`, so every creature reads as standing at the origin and all four
    // discoveries fire for anyone within 8 m of spawn. Trusting them would fill
    // the creature page on the title screen. The scan uses the same 8 m, so
    // once that is fixed the two agree and this filter costs nothing.
    on(Events.DISCOVERY, (d) => {
      if (!d) return;
      const entry = entryForDiscovery(d.key || d.type);
      if (entry && entry.indexOf('creature.') !== 0) markSeen(entry);
    }),
    on(Events.CREATURE_ATTUNED, (d) => { if (d) markSeen(entryForCreature(d.type)); }),
    on(Events.ORB_COLLECTED, (d) => { if (d) markSeen(entryForOrbCount(d.orbsFound)); }),
    on(Events.WEATHER_CHANGE, (d) => { if (d) markSeen(entryForWeather(d.to)); }),
    on(Events.CRYSTAL_CHAIN, () => markSeen('place.crystalChain')),
  ];
  return () => { for (const off of offs) off(); };
}
