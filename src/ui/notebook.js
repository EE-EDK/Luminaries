// ================================================================
// Field notebook — the book that gives the finale somewhere to go
// ================================================================
// N opens it. Five pages of first sightings, drawn from notebookState and
// written in whichever voice the player is reading in: the child's name for a
// thing, or the field-log name, or both once the veil is lifted. It reads the
// ledger and fills nothing — systems/notebookFeed.js does that.
//
// Built from panelKit like the settings panel, and guarded on `document` the
// same way: importing this module in a test is harmless, and the row builder
// below is pure so the labels can be checked without a page.

import { on, Events } from '../kernel/eventBus.js';
import { dualLine } from '../narrative/voice.js';
import { getPerspective, isTruthRevealed } from '../state/narrativeState.js';
import {
  NOTEBOOK_PAGES, ALL_ENTRIES, isSeen, pageOf, pageProgress, seenCount,
} from '../state/notebookState.js';
import { isTypingTarget } from '../utils/dom.js';
import { btn, separator, note, PANEL_INK } from './panelKit.js';

// ----------------------------------------------------------------
// Words
// ----------------------------------------------------------------
// DRAFT — owner voice pass pending.
//
// Creature, weather-free story terms and the fairy ring and obelisk names come
// from the glossary through {t:…} tokens, so they cannot drift from the rest of
// the game. Everything else below is a first pass at a field-log name and a
// child's name for the same thing, written to be replaced: the keys are the
// contract, the strings are not. Each pair is {child, adult}, and every entry
// in notebookState must have one (the suite refuses a missing label).

const ENTRY_TEXT = {
  // Creatures
  'creature.puff':    { child: '{t:puff}',  adult: '{t:puff}' },
  'creature.jelly':   { child: '{t:jelly}', adult: '{t:jelly}' },
  'creature.deer':    { child: '{t:deer}',  adult: '{t:deer}' },
  'creature.moth':    { child: '{t:moth}',  adult: '{t:moth}' },
  'creature.luminid': { child: 'the tall gentle giant', adult: 'luminid, large stilted fauna' },

  // Flora
  'flora.tree':        { child: 'glow tree',          adult: 'canopy tree' },
  'flora.mushroom':    { child: 'glow mushroom',      adult: 'bioluminescent fungus' },
  'flora.crystal':     { child: 'singing crystal',    adult: 'resonant crystal' },
  'flora.grass':       { child: 'glow grass',         adult: 'ground cover' },
  'flora.fern':        { child: 'glow fern',          adult: 'understory fern' },
  'flora.flower':      { child: 'night flower',       adult: 'night-blooming flower' },
  'flora.reed':        { child: 'tall reed',          adult: 'reed stand' },
  'flora.dandelion':   { child: 'floating dandelion', adult: 'wind-dispersed seedhead' },
  'flora.thornbloom':  { child: 'thornbloom',         adult: 'thornbloom, cupped and thorned' },
  'flora.helixvine':   { child: 'spiral vine',        adult: 'helixvine' },
  'flora.snapthorn':   { child: 'curious snapthorn',  adult: 'snapthorn, proximity-responsive' },
  'flora.spiralfrond': { child: 'spiral frond',       adult: 'spiral frond, corkscrew form' },
  'flora.corpsebloom': { child: 'stinky night bloom', adult: 'corpse bloom' },
  'flora.orbbush':     { child: 'orb bush',           adult: 'orb-fruit shrub' },
  'flora.lanternpod':  { child: 'lantern pod',        adult: 'hanging pod plant' },
  'flora.veilmoss':    { child: 'veil moss',          adult: 'curtain moss' },

  // Sky
  'sky.constellation0': { child: 'The Drifter',     adult: 'star pattern 1, drifter form' },
  'sky.constellation1': { child: 'The Hopper',      adult: 'star pattern 2, hopper form' },
  'sky.constellation2': { child: 'The Orbiter',     adult: 'star pattern 3, orbiter form' },
  'sky.constellation3': { child: 'The Strider',     adult: 'star pattern 4, strider form' },
  'sky.constellation4': { child: 'The Convergence', adult: 'star pattern 5, convergence' },
  'sky.wish':           { child: 'a wish on a shooting star', adult: 'a transient meteor event' },

  // Places
  'place.pond':         { child: 'hidden pond',   adult: 'aquatic biosensor basin' },
  'place.fairyRing':    { child: '{t:fairyRing}', adult: '{t:fairyRing}' },
  'place.crystalChain': { child: 'crystals singing together', adult: 'resonance cascade' },
  'place.glyph':        { child: 'secret message', adult: 'encoded surface signal' },
  'place.obelisk':      { child: '{t:obelisk}',   adult: '{t:obelisk}' },

  // Weather
  'weather.CLEAR':          { child: 'clear sky',     adult: 'clear conditions' },
  'weather.MISTY':          { child: 'soft mist',     adult: 'light mist' },
  'weather.LIGHT_RAIN':     { child: 'gentle rain',   adult: 'light precipitation' },
  'weather.HEAVY_RAIN':     { child: 'pouring rain',  adult: 'heavy precipitation' },
  'weather.FOG_BANK':       { child: 'thick fog',     adult: 'fog bank' },
  'weather.LUMINOUS_STORM': { child: 'glowing storm', adult: 'luminous storm, electrostatic' },
};

const PAGE_TEXT = {
  creature: { child: 'Creatures', adult: 'Fauna' },
  flora:    { child: 'Plants',    adult: 'Flora' },
  sky:      { child: 'Sky',       adult: 'Celestial' },
  place:    { child: 'Places',    adult: 'Sites' },
  weather:  { child: 'Weather',   adult: 'Atmospherics' },
};

const TITLE_TEXT = { child: 'My notebook', adult: 'Field log' };
const UNSEEN_TEXT = { child: 'not found yet', adult: 'unlogged' };
const HINT_TEXT = { child: 'N to close', adult: 'N: close log' };

/** @brief Every entry's label, for the coverage test. */
export const NOTEBOOK_LABELS = Object.freeze(ENTRY_TEXT);

/** @brief Upper-case the first letter — the glossary hands back "puffling", a list wants "Puffling". */
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

/**
 * @brief The rows of one page, as text, for one reader.
 *
 * Pure. An unseen entry shows the placeholder instead of its name, so the page
 * tells the player how much is left without telling them what.
 *
 * @param {string} page one of NOTEBOOK_PAGES
 * @param {{voice?:'child'|'adult', truthRevealed?:boolean, seen?:(k:string)=>boolean}} [ctx]
 * @return {{key:string, seen:boolean, primary:string, secondary:string|null}[]}
 */
export function notebookRows(page, ctx = {}) {
  const seenFn = ctx.seen || isSeen;
  const opts = { voice: ctx.voice, truthRevealed: ctx.truthRevealed };
  const rows = [];
  for (let i = 0; i < ALL_ENTRIES.length; i++) {
    const key = ALL_ENTRIES[i];
    if (pageOf(key) !== page) continue;
    const seen = !!seenFn(key);
    const pair = seen ? ENTRY_TEXT[key] : UNSEEN_TEXT;
    const { primary, secondary } = dualLine(pair, opts);
    rows.push({ key, seen, primary: cap(primary), secondary: secondary ? cap(secondary) : null });
  }
  return rows;
}

/** @brief A page's name for one reader. */
export function pageTitle(page, ctx = {}) {
  const { primary, secondary } = dualLine(PAGE_TEXT[page], { voice: ctx.voice, truthRevealed: ctx.truthRevealed });
  return secondary ? `${primary} / ${secondary}` : primary;
}

// ----------------------------------------------------------------
// The panel
// ----------------------------------------------------------------

let root = null;
let tabsEl = null;
let listEl = null;
let titleEl = null;
let countEl = null;
let hintEl = null;
let open = false;
let page = NOTEBOOK_PAGES[0];
let canOpen = () => true;

const SCALE = 'var(--lumi-text-scale)';

function ctx() { return { voice: getPerspective(), truthRevealed: isTruthRevealed() }; }

function render() {
  if (!root) return;
  const c = ctx();
  const total = ALL_ENTRIES.length;
  titleEl.textContent = dualLine(TITLE_TEXT, c).primary;
  countEl.setText(`${seenCount()} / ${total}`);
  hintEl.setText(dualLine(HINT_TEXT, c).primary);

  tabsEl.textContent = '';
  for (const p of NOTEBOOK_PAGES) {
    const prog = pageProgress(p);
    const b = btn(`${pageTitle(p, c)} ${prog.seen}/${prog.total}`, () => { page = p; render(); });
    if (!b) continue;
    b.style.cssText += `flex:1 1 auto;width:auto;margin:0;text-align:center;font-size:calc(11px * ${SCALE});`;
    b.setAttribute('aria-pressed', p === page ? 'true' : 'false');
    if (p === page) { b.style.background = 'rgba(60,120,80,.9)'; b.style.borderColor = 'rgba(100,255,180,.7)'; }
    tabsEl.appendChild(b);
  }

  listEl.textContent = '';
  for (const r of notebookRows(page, c)) {
    const cell = document.createElement('div');
    cell.dataset.key = r.key;
    cell.dataset.seen = r.seen ? '1' : '0';
    cell.style.cssText =
      `font-family:monospace;font-size:calc(12px * ${SCALE});line-height:1.4;padding:4px 6px;` +
      `border:1px solid rgba(100,255,180,${r.seen ? '.3' : '.12'});border-radius:4px;` +
      `color:${r.seen ? PANEL_INK : 'rgba(170,255,204,.4)'};` +
      `background:${r.seen ? 'rgba(20,60,40,.55)' : 'transparent'};`;
    cell.textContent = `${r.seen ? '✓' : '·'} ${r.primary}`;
    if (r.secondary) {
      const sub = document.createElement('span');
      sub.style.cssText = 'display:block;font-size:.85em;opacity:.7;color:#a8d8ff;';
      sub.textContent = r.secondary;
      cell.appendChild(sub);
    }
    listEl.appendChild(cell);
  }
}

/** @brief Open or close the book. Opening lets go of the mouse so the tabs can be clicked. */
export function setNotebookOpen(next) {
  if (!root) return;
  open = !!next;
  root.style.display = open ? 'block' : 'none';
  root.setAttribute('aria-hidden', open ? 'false' : 'true');
  if (open) {
    try { if (document.pointerLockElement && document.exitPointerLock) document.exitPointerLock(); } catch (_) { /* no lock to give up */ }
    render();
  }
}

/** @brief Whether the book is showing. */
export function isNotebookOpen() { return open; }

/**
 * @brief Build the notebook and bind N.
 *
 * N is bound in the capture phase on `window`, the way the debug terminal's
 * keys are, and refuses when the target is a text field — so typing "n" into
 * the terminal does not open a book over it. It does nothing until `canOpen()`
 * says the player has a world (on the title card any key starts the game, and
 * that is all N should do there).
 *
 * @param {{canOpen?:() => boolean}} [deps]
 * @return {HTMLElement|null}
 */
export function initNotebook(deps = {}) {
  if (typeof document === 'undefined' || root) return root;
  if (deps.canOpen) canOpen = deps.canOpen;

  root = document.createElement('div');
  root.id = 'notebook-root';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Field notebook');
  root.setAttribute('aria-hidden', 'true');
  root.style.cssText =
    'display:none;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:300;' +
    'width:min(540px,calc(100vw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px) - 16px));max-height:78vh;overflow-y:auto;padding:12px;font-family:monospace;' +
    'border:1px solid rgba(100,255,180,.35);border-radius:6px;' +
    'background:rgba(8,24,18,.95);backdrop-filter:blur(3px);box-shadow:0 8px 40px rgba(0,0,0,.6);';
  // Same reasoning as the settings panel: a click that falls through to the
  // canvas grabs pointer lock and throws the player back into the forest.
  root.addEventListener('click', (e) => e.stopPropagation());
  root.addEventListener('mousedown', (e) => e.stopPropagation());

  const top = document.createElement('div');
  top.style.cssText = 'display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:0 0 8px;';
  titleEl = document.createElement('div');
  titleEl.style.cssText =
    `font-family:Georgia,serif;font-size:calc(18px * ${SCALE});letter-spacing:2px;color:#ccffee;` +
    'text-shadow:0 0 10px #44ffaa;';
  countEl = note('');
  countEl.style.cssText += `font-size:calc(12px * ${SCALE});margin:0;`;
  const close = btn('✕', () => setNotebookOpen(false));
  close.style.cssText += 'width:auto;margin:0;padding:2px 8px;';
  close.setAttribute('aria-label', 'Close notebook');
  top.appendChild(titleEl);
  top.appendChild(countEl);
  top.appendChild(close);
  root.appendChild(top);

  tabsEl = document.createElement('div');
  tabsEl.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px;margin:0 0 8px;';
  root.appendChild(tabsEl);
  root.appendChild(separator());

  listEl = document.createElement('div');
  listEl.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:4px;';
  root.appendChild(listEl);

  root.appendChild(separator());
  hintEl = note('');
  hintEl.style.cssText += `font-size:calc(10px * ${SCALE});margin:0;`;
  root.appendChild(hintEl);

  document.body.appendChild(root);

  window.addEventListener('keydown', (e) => {
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey || isTypingTarget(e.target)) return;
    if (e.code === 'KeyN') {
      if (!open && !canOpen()) return;
      e.preventDefault();
      setNotebookOpen(!open);
      return;
    }
    // 1-5 turn the pages while it is open.
    if (open && e.code.startsWith('Digit')) {
      const i = Number(e.code.slice(5)) - 1;
      if (i >= 0 && i < NOTEBOOK_PAGES.length) { e.preventDefault(); page = NOTEBOOK_PAGES[i]; render(); }
    }
  }, true);

  // A new entry or a changed voice redraws a page that is on screen; nothing
  // is drawn while it is closed.
  on(Events.NOTEBOOK_ENTRY, () => { if (open) render(); });
  on(Events.PERSPECTIVE_CHANGED, () => { if (open) render(); });

  return root;
}
