// ================================================================
// Panel kit — the widgets the overlay panels are built from
// ================================================================
// Lifted out of debug/devSkipPanel.js so the settings panel looks like it
// belongs to the same game rather than to a different decade. Everything here
// is a plain DOM builder: no state, no storage, no events beyond the one
// callback each widget takes.
//
// Every builder is guarded on `document` so importing this module in a test
// runner is harmless. A builder called without a DOM returns null, and the
// caller is expected to bail rather than to paper over it.

const INK = '#aaffcc';
const EDGE = 'rgba(100,255,180,.4)';
const EDGE_HOT = 'rgba(100,255,180,.7)';
const FILL = 'rgba(20,60,40,.85)';
const FILL_HOT = 'rgba(40,100,70,.9)';
const FILL_ON = 'rgba(60,120,80,.9)';

const hasDom = () => typeof document !== 'undefined';

const BASE =
  'display:block;width:100%;padding:6px 8px;margin:0 0 4px;cursor:pointer;' +
  `font-family:monospace;font-size:11px;border:1px solid ${EDGE};` +
  `border-radius:4px;color:${INK};text-align:left;transition:background .15s;`;

/**
 * @brief A push button.
 * @param {string} label
 * @param {Function} onClick
 * @param {Function} [after] run after onClick, e.g. to refresh a status line
 * @return {HTMLButtonElement|null}
 */
export function btn(label, onClick, after) {
  if (!hasDom()) return null;
  const b = document.createElement('button');
  b.type = 'button';
  b.textContent = label;
  b.style.cssText = BASE + `background:${FILL};`;
  b.addEventListener('mouseenter', () => { b.style.background = FILL_HOT; });
  b.addEventListener('mouseleave', () => { b.style.background = FILL; });
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    onClick();
    if (after) after();
  });
  return b;
}

/**
 * @brief A button that reads its own ON/OFF state.
 * @param {string} label
 * @param {() => boolean} getState
 * @param {Function} onToggle
 * @return {HTMLButtonElement|null} with a `.refresh()` for external changes
 */
export function toggleBtn(label, getState, onToggle) {
  if (!hasDom()) return null;
  const b = document.createElement('button');
  b.type = 'button';
  b.style.cssText = BASE;
  const render = () => {
    const on = !!getState();
    b.textContent = `${label}: ${on ? 'ON' : 'OFF'}`;
    b.style.background = on ? FILL_ON : FILL;
    b.style.borderColor = on ? EDGE_HOT : EDGE;
  };
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    onToggle();
    render();
  });
  render();
  b.refresh = render;
  return b;
}

/**
 * @brief A labelled slider that shows its own value.
 * @param {string} label
 * @param {{min:number, max:number, step:number, get:() => number, set:(v:number)=>void, fmt?:(v:number)=>string}} cfg
 * @return {HTMLDivElement|null} with a `.refresh()`
 */
export function slider(label, cfg) {
  if (!hasDom()) return null;
  const wrap = document.createElement('div');
  wrap.style.cssText = 'margin:0 0 6px;font-family:monospace;font-size:11px;color:' + INK + ';';

  const cap = document.createElement('div');
  cap.style.cssText = 'display:flex;justify-content:space-between;margin:0 0 3px;opacity:.9;';
  const name = document.createElement('span');
  name.textContent = label;
  const val = document.createElement('span');
  val.style.cssText = 'opacity:.75;';
  cap.appendChild(name);
  cap.appendChild(val);

  const input = document.createElement('input');
  input.type = 'range';
  input.min = String(cfg.min);
  input.max = String(cfg.max);
  input.step = String(cfg.step);
  input.style.cssText = 'width:100%;accent-color:#66ddaa;cursor:pointer;';

  const fmt = cfg.fmt || ((v) => String(v));
  const render = () => {
    const v = cfg.get();
    input.value = String(v);
    val.textContent = fmt(v);
  };
  // `input` rather than `change`: the player should hear the volume move while
  // they drag it, not once they let go.
  input.addEventListener('input', (e) => {
    e.stopPropagation();
    cfg.set(Number(input.value));
    render();
  });
  input.addEventListener('click', (e) => e.stopPropagation());
  render();

  wrap.appendChild(cap);
  wrap.appendChild(input);
  wrap.refresh = render;
  return wrap;
}

/** @brief A hairline rule between groups. */
export function separator() {
  if (!hasDom()) return null;
  const s = document.createElement('div');
  s.style.cssText = 'border-top:1px solid rgba(100,255,180,.15);margin:6px 0;';
  return s;
}

/** @brief A small heading inside a panel body. */
export function heading(text) {
  if (!hasDom()) return null;
  const h = document.createElement('div');
  h.textContent = text;
  h.style.cssText =
    'font-family:monospace;font-size:10px;letter-spacing:1px;text-transform:uppercase;' +
    'color:rgba(170,255,204,.55);margin:2px 0 5px;';
  return h;
}

/** @brief A dim one-line note, e.g. "saved 12s ago". */
export function note(text) {
  if (!hasDom()) return null;
  const n = document.createElement('div');
  n.textContent = text;
  n.style.cssText =
    'font-family:monospace;font-size:10px;color:rgba(170,255,204,.5);margin:0 0 5px;';
  n.setText = (t) => { n.textContent = t; };
  return n;
}

export const PANEL_INK = INK;
export const PANEL_EDGE = EDGE;
export const PANEL_FILL = FILL;
