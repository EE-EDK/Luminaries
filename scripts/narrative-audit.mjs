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
import { ENFORCED_FORMS } from '../src/narrative/glossary.js';
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
const STORY_WORDS = [
  'obelisk', 'needle', 'tower', 'dimming', 'orb', 'coal', 'carrier',
  'restoration', 'meridian', 'sector', 'puffling', 'jelly', 'jellyfish',
  'deer', 'moth', 'fairy ring', 'architect', 'wisp', 'crystal',
];

/**
 * A glossary token, so it can be taken out before the words are counted.
 *
 * `{t:obelisk}` is a line naming the obelisk *through* the glossary — the
 * opposite of what the raw-word count is looking for. Counting the key inside
 * the token made the number go up when lines were converted, which is a
 * measurement that rewards the bug and punishes the fix.
 */
const TERM_TOKEN = /\{t:[A-Za-z]+(?:\|(?:lower|upper))?\}/g;

/**
 * A quote- and comment-aware scanner over one line of source.
 *
 * Three bugs lived in the regex approach this replaces, and each one bent the
 * numbers without raising an error:
 *
 *   - `//` was stripped to end-of-line without asking whether it was inside a
 *     string, so the intro's terminal lines — '// BIOSENSOR ARRAY v4.2' and
 *     seven more — were truncated to nothing and never counted at all. The
 *     intro's adult layer was invisible to the audit it was written for.
 *   - Block comments were not stripped, so the apostrophe in a doc comment
 *     ("the glossary's catch-all") opened a phantom string and its tail was
 *     reported as a player-facing line.
 *   - A multi-line template literal (the cssText blocks) was read as code, so
 *     its CSS fragments — 'rgba(100,255,200,.12) 0%,' and eighteen friends —
 *     were counted as things a player reads. The intro's headline number was
 *     32; thirteen of those were real.
 *
 * The scanner carries two pieces of state across lines per file: inside a
 * block comment, and inside a multi-line template literal. A template that
 * spans lines in these files is markup or CSS by construction, so its content
 * is skipped; a player-facing line is a single-line string literal, and the
 * one place that breaks this rule earns a fixture before it earns a rewrite.
 */
function makeScanner() {
  let inBlock = false;
  let inTpl = false;
  return function scanLine(raw) {
    const strings = [];
    let code = '';
    let cur = null;      // the quote we are inside, or null
    let buf = '';
    let i = 0;
    while (i < raw.length) {
      const c = raw[i], n = raw[i + 1];
      if (inBlock) {
        if (c === '*' && n === '/') { inBlock = false; i += 2; continue; }
        i++; continue;
      }
      if (inTpl) {
        if (c === '\\') { i += 2; continue; }
        if (c === '`') { inTpl = false; code += "''"; i++; continue; }
        i++; continue;
      }
      if (cur) {
        if (c === '\\') { buf += c + (n ?? ''); i += 2; continue; }
        if (c === cur) { strings.push(buf); code += "''"; buf = ''; cur = null; i++; continue; }
        buf += c; i++; continue;
      }
      if (c === '/' && n === '*') { inBlock = true; i += 2; continue; }
      if (c === '/' && n === '/') break;              // a real line comment
      if (c === "'" || c === '"') { cur = c; i++; continue; }
      if (c === '`') {
        // Closed on this line it is an ordinary string; otherwise it is a
        // cssText/innerHTML block and its content is skipped until it closes.
        let j = i + 1, closed = -1;
        while (j < raw.length) {
          if (raw[j] === '\\') { j += 2; continue; }
          if (raw[j] === '`') { closed = j; break; }
          j++;
        }
        if (closed === -1) { inTpl = true; i = raw.length; continue; }
        strings.push(raw.slice(i + 1, closed));
        code += "''";
        i = closed + 1; continue;
      }
      code += c; i++;
    }
    // An unterminated ' or " at end of line is not a string literal we trust —
    // drop the buffer rather than report half a sentence.
    return { strings, code };
  };
}

// (The brace-in-string depth bug that lived here is now handled by the
// scanner above, which blanks string contents before the braces are counted.)

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
  // Code and markup are never player text, whatever block they sit in. These
  // run before the inVoice early-return on purpose: no voice table legitimately
  // holds 'rgba(100,255,200,.12) 0%,' — nineteen single-line fragments of
  // cssText did get counted once, and the opening cinematic's headline read 32
  // player-facing lines when thirteen were real.
  // A tag, not a bare angle bracket: the adult register says "Bioluminescent
  // yield: < 5%", and a rule that rejected every '<' invented a missing half
  // in MESSAGES_DIMMED on its first run.
  if (/<\/?[a-z][\w-]*[\s>=]/i.test(s)) return false;                     // markup
  if (/\);\s*$|^\s*transparent\b/.test(s)) return false;                 // the tail of a css value
  if (/rgba?\(|hsla?\(|#[0-9a-f]{3,8}\b/i.test(s)) return false;         // css colour
  if (/\b\d+(\.\d+)?(px|vh|vw|em|rem|deg|ms|s)\b/.test(s)) return false; // css dimension
  if (/\b(translate|clamp|calc|scale|rotate|linear-gradient|radial-gradient|cubic-bezier|var)\(/.test(s)) return false;
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

  const scanLine = makeScanner();
  // The intro is built of cards, each carrying a fantasy layer and a terminal
  // layer shown together. The pairing unit there is the card, not the line —
  // card 0 has one fantasy line against two terminal lines, and pairing those
  // by position invents a missing half on every card.
  let layer = null;                       // { voice, key, parts, line }
  const layerCount = { child: 0, adult: 0 };
  const LAYER_VOICE = { fantasyLines: 'child', terminalLines: 'adult' };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // `strs` are the string literals on the line; `bare` is the line with its
    // comments removed and string contents blanked, for structure and keys.
    const { strings: lineStrings, code: bare } = scanLine(line);

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
    const blockVoice = bare.match(/\b(child|adult|fantasyLines|terminalLines)\s*:\s*[[{]\s*$/);

    if (inlinePair) {
      // One row, both registers, on one line.
      const key = (bare.match(/^\s*([A-Za-z_$][\w$]*)\s*:/) || [, '(row)'])[1];
      const strs = lineStrings.filter((x) => playerFacing(x, true));
      if (strs.length >= 2) {
        out.push({ rel, trigger, table: `${table}.${key}`, child: strs[0], adult: strs[1], line: i + 1 });
        counts.child++; counts.adult++;
      }
      continue;
    }

    if (blockVoice) {
      const layerVoice = LAYER_VOICE[blockVoice[1]];
      voice = layerVoice || blockVoice[1];
      voiceIsObject = blockVoice[0].trimEnd().endsWith('{');
      depthAtVoice = depth;
      layer = layerVoice
        ? { voice: layerVoice, key: `card${layerCount[layerVoice]++}`, parts: [], line: i + 1 }
        : null;
      depth += (bare.split(/[[{]/).length - 1) - (bare.split(/[\]}]/).length - 1);
      continue;
    }

    // One half on its own line: `child: 'press F, then sweep…',` inside a
    // larger object. HUM_INSTRUCTION and the reject-hint pairs are written
    // this way, and without this rule their halves counted as single-voice —
    // lines that were in fact paired showed up as work still to do.
    const halfLine = bare.match(/^\s*(child|adult)\s*:\s*['"]/);
    if (halfLine) {
      const v = halfLine[1];
      for (const str of lineStrings.filter((x) => playerFacing(x, true))) {
        out.push({ rel, trigger, table: `${table}.${v}`, [v]: str, line: i + 1, half: v, key: null });
        counts[v]++;
      }
      continue;
    }

    // Inside an object-shaped voice block each line is `key: '...'`, and the
    // key is what the two registers must be paired on. Inside an array-shaped
    // one, position is the pairing, which is the array's own semantics.
    const keyHere = voice && voiceIsObject
      ? (bare.match(/^\s*([A-Za-z_$][\w$]*)\s*:/) || [, null])[1]
      : null;

    const strs = lineStrings.filter((x) => playerFacing(x, !!voice));
    if (layer) {
      layer.parts.push(...strs);
    } else for (const s of strs) {
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

    // `bare` comes out of the scanner with string contents blanked and
    // comments removed, so these braces are structure and nothing else.
    depth += (bare.split(/[[{]/).length - 1) - (bare.split(/[\]}]/).length - 1);
    // A constant-named voice runs to the next `const`, which the branch above
    // handles; a key-named one ends with its own bracket.
    if (!constVoice && voice && depth <= depthAtVoice && /[\]}]/.test(bare)) {
      if (layer) {
        if (layer.parts.length) {
          out.push({
            rel, trigger, table: `${table}.${layer.voice}`, [layer.voice]: layer.parts.join(' '),
            line: layer.line, half: layer.voice, key: layer.key,
          });
          counts[layer.voice]++;
        }
        layer = null;
      }
      voice = null;
    }
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

export const termsIn = (s) => {
  if (!s) return [];
  const bare = s.replace(TERM_TOKEN, ' ');
  return STORY_WORDS.filter((t) => new RegExp(`\\b${t}`, 'i').test(bare));
};

/**
 * Named glossary forms typed out by hand, which is the thing the coverage test
 * in src/narrative/__tests__/glossary.test.js refuses. Read from the glossary
 * rather than restated here: two lists of the same names is the drift the
 * glossary exists to stop, and this file is not exempt from that.
 */
export const hardcodedIn = (s) => {
  if (!s) return [];
  const bare = s.replace(TERM_TOKEN, ' ');
  return ENFORCED_FORMS
    .filter((e) => new RegExp(`\\b${e.form.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(bare))
    .map((e) => e.form);
};

// ---- report ----------------------------------------------------------------
const L = [];
const esc = (s) => (s === null || s === undefined ? '' : String(s).replace(/\|/g, '\\|').trim());

L.push('# Narrative audit');
L.push('');
L.push(`Generated by \`scripts/narrative-audit.mjs\` on ${new Date().toISOString().slice(0, 10)}.`);
L.push('Every count here is produced by the script. Nothing is recalled.');
L.push('');
L.push('Regenerate with the path, or it only prints:');
L.push('');
L.push('```');
L.push('node scripts/narrative-audit.mjs --out reference/narrative-audit-<date>.md');
L.push('```');
L.push('');
L.push('Without `--out` the report goes to stdout and the file on disk is left');
L.push('alone — which is how a check that diffed this file against a copy of');
L.push('itself was once reported as proof that it regenerates unchanged.');
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
const hardcoded = [...paired, ...singles]
  .flatMap((r) => ['child', 'adult', 'single'].map((k) => ({ r, k, s: r[k] })))
  .filter((x) => hardcodedIn(x.s).length > 0);

L.push('## Totals');
L.push('');
L.push('| | count |');
L.push('|---|---|');
L.push(`| lines with both voices | ${totalPaired} |`);
L.push(`| lines with one voice only | ${totalSingle} |`);
L.push(`| pairs missing a half | ${missingHalf.length} |`);
L.push(`| lines naming a story term in raw words | ${rawTerms.length} |`);
L.push(`| lines typing a named glossary form by hand | ${hardcoded.length} |`);
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
if (RUN_AS_CLI) console.log(`both voices: ${totalPaired}   one voice: ${totalSingle}   missing half: ${missingHalf.length}   raw terms: ${rawTerms.length}   hardcoded forms: ${hardcoded.length}`);
if (RUN_AS_CLI && outArg === -1) console.log('\n' + out);
