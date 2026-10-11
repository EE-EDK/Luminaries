/**
 * Narrative audit — every line the player can read, in one table.
 *
 * Written because the two voices had drifted without anyone being able to see
 * it: some surfaces carry both the child and the adult register, some carry
 * only one, and nobody could say which was which without reading nine files.
 *
 * This reports rather than judges. It extracts the strings, pairs them where a
 * surface has both registers, and flags the three things that are mechanically
 * checkable: a surface with only one voice, a pair where one side is missing,
 * and a line that names a glossary concept in raw words. Whether a line is
 * GOOD is not something a script can tell you, and it does not try.
 *
 *   node scripts/narrative-audit.mjs            # table to stdout
 *   node scripts/narrative-audit.mjs --out FILE # and write it
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

/** The surfaces the player reads text from, and when they see it. */
const SURFACES = [
  ['src/quest/config.js', 'quest text: stage hints, discovery labels, creature names, orb narrative'],
  ['src/systems/discoveries.js', 'idle hints and discovery lines, shown while standing still'],
  ['src/world/sky.js', 'wish text, on a shooting star'],
  ['src/systems/intro/index.js', 'the opening cinematic'],
  ['src/systems/pufflingChat.js', 'puffling chatter, on approach'],
  ['src/updates/spiritHumVisuals.js', 'hum lock confirmations'],
  ['src/updates/attunementVisuals.js', 'attunement confirmations'],
  ['src/systems/wizardPufflingEvent.js', 'the wizard encounter'],
  ['src/narrative/controls.js', 'control names, substituted into other lines'],
];

/**
 * Terms the story bible defines in both registers. A player-facing line that
 * uses one of these raw, rather than through the glossary, is a line where the
 * two voices can silently disagree.
 */
const GLOSSARY_TERMS = [
  'obelisk', 'needle', 'tower', 'dimming', 'orb', 'coal', 'carrier',
  'restoration', 'meridian', 'sector', 'puffling', 'jelly', 'jellyfish',
  'deer', 'moth', 'fairy ring', 'architect', 'wisp', 'crystal',
];

/** Pull quoted strings out of a line, honouring escapes and all three quotes. */
function stringsIn(line) {
  const out = [];
  const re = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g;
  let m;
  while ((m = re.exec(line)) !== null) {
    const v = m[1] ?? m[2] ?? m[3];
    if (v !== undefined) out.push(v);
  }
  return out;
}

/**
 * Is this a string a player reads?
 *
 * `inVoice` matters: a string sitting inside a `child:` or `adult:` table is
 * player text by construction, however short. Filtering those by length threw
 * away "deer" and "moon moth" from the child side of CREATURE_NAMES while
 * keeping "biological metronome" on the adult side, which then paired by index
 * and reported three non-existent missing halves. Short words in a voice table
 * are the point of the table.
 */
function playerFacing(s, inVoice) {
  if (/^\$\{[^}]*\}/.test(s.trim())) return false;        // a template fragment, not a line
  if (!/[a-zA-Z]{3,}/.test(s)) return false;
  // Inside a voice table, every string is player text. The css heuristics below
  // must not run here: the adult register writes in clipped technical prose,
  // and "Lattice log: five dormant ignitions; each demands…" was thrown out for
  // containing a colon and a semicolon, which silently invented two missing
  // halves in IDLE_HINTS.
  if (inVoice) return true;
  if (s.includes(':') && s.includes(';')) return false;   // inline css
  if (/^(position|display|font|background|border|margin|padding|transform)/.test(s)) return false;
  if (/^(http|\/|\.\/)/.test(s)) return false;
  if (s.length < 12) return false;                       // keys, ids, css
  if (!/\s/.test(s)) return false;                       // single token
  if (/^[\w.#-]+$/.test(s)) return false;                 // selector or path
  if (/^[A-Z_]+$/.test(s.replace(/\s/g, ''))) return false;
  return /[a-z]/.test(s);
}

/**
 * @brief Extract the player-facing strings from one source file's text.
 *
 * Exported so it can be driven against fixtures. Three separate extraction
 * bugs shipped into the first three runs of this audit — short child words
 * filtered out of keyed tables, registers stored as `_CHILD`/`_ADULT`
 * constants rather than keys, and adult technical prose rejected as CSS — and
 * each one silently changed the headline number. A reporting tool whose
 * numbers move when you look at it twice is not a measurement.
 *
 * @param {string} src file contents
 * @param {string} rel path, for the report
 * @param {string} trigger when the player sees these
 * @return {{rows:Array, counts:{child:number, adult:number, single:number}}}
 */
export function extractFromSource(src, rel = '(fixture)', trigger = '') {
  const out = [];
  const lines = src.split('\n');
  let table = '(top level)';
  let voice = null;        // 'child' | 'adult' | null while inside a block
  let voiceIsObject = false;
  let constVoice = false;   // voice came from a _CHILD/_ADULT constant name
  let depthAtVoice = 0;
  let depth = 0;
  const counts = { child: 0, adult: 0, single: 0 };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bare = line.replace(/\/\/.*$/, '');

    const t = bare.match(/^\s*(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=/);
    if (t) {
      table = t[1];
      voice = null;
      voiceIsObject = false;
      // Some registers are two separate constants rather than two keys:
      // IDLE_HINTS_CHILD and IDLE_HINTS_ADULT are the same table split by
      // naming convention. Missing this counted 45 fully dual-voiced lines in
      // discoveries.js as single-voice and overstated the headline number by
      // nearly half.
      const named = table.match(/^(.*)_(CHILD|ADULT)$/);
      if (named) {
        table = named[1];
        voice = named[2].toLowerCase();
        voiceIsObject = false;
        depthAtVoice = depth;
        constVoice = true;
      } else {
        constVoice = false;
      }
    }

    // A voice can be a block (`child: [`) or inline (`child: '...'`).
    const inlinePair = bare.match(/child\s*:\s*(['"`])/) && bare.match(/adult\s*:\s*(['"`])/);
    const blockVoice = bare.match(/\b(child|adult)\s*:\s*[[{]\s*$/);

    if (inlinePair) {
      // One row, both registers, on one line.
      const key = (bare.match(/^\s*([A-Za-z_$][\w$]*)\s*:/) || [, '(row)'])[1];
      const strs = stringsIn(bare).filter((x) => playerFacing(x, true));
      if (strs.length >= 2) {
        out.push({ rel, trigger, table: `${table}.${key}`, child: strs[0], adult: strs[1], line: i + 1 });
        counts.child++; counts.adult++;
      }
      continue;
    }

    if (blockVoice) {
      voice = blockVoice[1];
      voiceIsObject = blockVoice[0].trimEnd().endsWith('{');
      depthAtVoice = depth;
      continue;
    }

    // Inside an object-shaped voice block each line is `key: '...'`, and the
    // key is what the two registers must be paired on. Inside an array-shaped
    // one, position is the pairing, which is the array's own semantics.
    const keyHere = voice && voiceIsObject
      ? (bare.match(/^\s*([A-Za-z_$][\w$]*)\s*:/) || [, null])[1]
      : null;

    const strs = stringsIn(bare).filter((x) => playerFacing(x, !!voice));
    for (const s of strs) {
      if (voice) {
        out.push({
          rel, trigger, table: `${table}.${voice}`, [voice]: s,
          line: i + 1, half: voice, key: keyHere,
        });
        counts[voice]++;
      } else {
        out.push({ rel, trigger, table, single: s, line: i + 1 });
        counts.single++;
      }
    }

    depth += (bare.split(/[[{]/).length - 1) - (bare.split(/[\]}]/).length - 1);
    // A constant-named voice runs to the next `const`, which the branch above
    // handles; a key-named one ends with its own bracket.
    if (!constVoice && voice && depth <= depthAtVoice && /[\]}]/.test(bare)) voice = null;
  }
  return { rows: out, counts };
}


// Importing this module must not run the report: the tests import the two
// functions above and nothing else should happen when they do.
const RUN_AS_CLI = process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename);

const rows = [];
const perFile = [];

for (const [rel, trigger] of (RUN_AS_CLI ? SURFACES : [])) {
  let src;
  try { src = readFileSync(resolve(ROOT, rel), 'utf8'); }
  catch { perFile.push({ rel, missing: true, child: 0, adult: 0, single: 0 }); continue; }
  const got = extractFromSource(src, rel, trigger);
  for (const r of got.rows) rows.push(r);
  perFile.push({ rel, trigger, ...got.counts, total: got.counts.child + got.counts.adult + got.counts.single });
}

/**
 * @brief Pair the half-rows into child/adult rows.
 *
 * Keyed tables pair by key; parallel arrays pair by position, which is what
 * the arrays themselves mean. Mixing the two is what invented five missing
 * halves on the first run.
 */
export function pairRows(rows) {
const paired = [];
const halves = rows.filter((r) => r.half);
const byTable = new Map();
for (const r of halves) {
  const base = r.table.replace(/\.(child|adult)$/, '');
  const k = `${r.rel}::${base}`;
  if (!byTable.has(k)) byTable.set(k, { child: [], adult: [], rel: r.rel, trigger: r.trigger, base });
  byTable.get(k)[r.half].push(r);
}
for (const g of byTable.values()) {
  // Keyed tables pair by key; parallel arrays pair by position, which is what
  // the arrays themselves mean. Mixing the two is what invented the missing
  // halves the first run reported.
  const keyed = g.child.some((r) => r.key) || g.adult.some((r) => r.key);
  if (keyed) {
    const keys = [...new Set([...g.child, ...g.adult].map((r) => r.key).filter(Boolean))];
    for (const k of keys) {
      const c = g.child.find((r) => r.key === k);
      const a = g.adult.find((r) => r.key === k);
      paired.push({
        rel: g.rel, trigger: g.trigger, table: `${g.base}.${k}`,
        child: c ? c.child : null, adult: a ? a.adult : null,
        line: (c || a).line,
      });
    }
  } else {
    const n = Math.max(g.child.length, g.adult.length);
    for (let i = 0; i < n; i++) {
      paired.push({
        rel: g.rel, trigger: g.trigger, table: g.base,
        child: g.child[i] ? g.child[i].child : null,
        adult: g.adult[i] ? g.adult[i].adult : null,
        line: (g.child[i] || g.adult[i]).line,
      });
    }
  }
}
for (const r of rows) if (r.child && r.adult) paired.push(r);
return paired;
}

const paired = pairRows(rows);
const singles = rows.filter((r) => r.single);

const termsIn = (s) => (s ? GLOSSARY_TERMS.filter((t) => new RegExp(`\\b${t}`, 'i').test(s)) : []);

// ---- report ----------------------------------------------------------------
const L = [];
const esc = (s) => (s === null || s === undefined ? '' : String(s).replace(/\|/g, '\\|').trim());

L.push('# Narrative audit');
L.push('');
L.push(`Generated by \`scripts/narrative-audit.mjs\` on ${new Date().toISOString().slice(0, 10)}.`);
L.push('Every count here is produced by the script. Nothing is recalled.');
L.push('');
L.push('## What this measures');
L.push('');
L.push('Three things a script can check: whether a surface carries both voices,');
L.push('whether a pair is missing one half, and whether a line names a story term');
L.push('in raw words rather than through a glossary. Whether a line reads *well*');
L.push('is not in here.');
L.push('');

const totalPaired = paired.length;
const totalSingle = singles.length;
const missingHalf = paired.filter((r) => !r.child || !r.adult);
const rawTerms = [...paired, ...singles].filter((r) => termsIn(r.child || r.single || r.adult).length > 0);

L.push('## Totals');
L.push('');
L.push('| | count |');
L.push('|---|---|');
L.push(`| lines with both voices | ${totalPaired} |`);
L.push(`| lines with one voice only | ${totalSingle} |`);
L.push(`| pairs missing a half | ${missingHalf.length} |`);
L.push(`| lines naming a story term in raw words | ${rawTerms.length} |`);
L.push(`| surfaces examined | ${perFile.length} |`);
L.push('');

L.push('## By surface');
L.push('');
L.push('| surface | when the player sees it | both voices | one voice only |');
L.push('|---|---|---|---|');
for (const f of perFile) {
  if (f.missing) { L.push(`| \`${f.rel}\` | — | — | file not found |`); continue; }
  L.push(`| \`${f.rel}\` | ${f.trigger} | ${Math.min(f.child, f.adult)} | ${f.single} |`);
}
L.push('');

L.push('## Single-voice lines');
L.push('');
L.push('These are read by every player regardless of which register they chose.');
L.push('');
L.push('| surface | line | text | story terms used |');
L.push('|---|---|---|---|');
for (const r of singles) {
  L.push(`| \`${r.rel}\` | ${r.line} | ${esc(r.single)} | ${termsIn(r.single).join(', ')} |`);
}
L.push('');

L.push('## Paired lines');
L.push('');
L.push('| surface | table | child | adult | story terms |');
L.push('|---|---|---|---|---|');
for (const r of paired) {
  L.push(`| \`${r.rel}\` | ${esc(r.table)} | ${esc(r.child)} | ${esc(r.adult)} | ${termsIn(r.child).join(', ')} |`);
}
L.push('');

if (missingHalf.length) {
  L.push('## Pairs missing a half');
  L.push('');
  L.push('| surface | table | child | adult |');
  L.push('|---|---|---|---|');
  for (const r of missingHalf) {
    L.push(`| \`${r.rel}\` | ${esc(r.table)} | ${esc(r.child) || '**missing**'} | ${esc(r.adult) || '**missing**'} |`);
  }
  L.push('');
}

if (!RUN_AS_CLI) { /* imported for its functions; no report */ }

const out = L.join('\n');
const outArg = process.argv.indexOf('--out');
if (RUN_AS_CLI && outArg !== -1 && process.argv[outArg + 1]) {
  writeFileSync(resolve(ROOT, process.argv[outArg + 1]), out + '\n');
  console.log(`wrote ${relative(ROOT, resolve(ROOT, process.argv[outArg + 1]))}`);
}
if (RUN_AS_CLI) console.log(`both voices: ${totalPaired}   one voice: ${totalSingle}   missing half: ${missingHalf.length}   raw terms: ${rawTerms.length}`);
if (RUN_AS_CLI && outArg === -1) console.log('\n' + out);
