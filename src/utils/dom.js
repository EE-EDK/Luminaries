// ================================================================
// DOM helpers that must run without a DOM
// ================================================================
// Kept out of input.js and the panels so a test can reach them: both of those
// touch `window` on import.

/**
 * @brief Whether a key event's target is somewhere the player is typing.
 *
 * Every hotkey added after the first one has to ask this, or it fires while
 * the debug terminal is being typed into: "help()" has an h in it, and holding
 * H hides the whole interface. Duck-typed on purpose — a
 * plain object with a tagName passes, which is what makes it testable.
 *
 * @param {{tagName?:string, isContentEditable?:boolean}|null|undefined} el
 * @return {boolean}
 */
export function isTypingTarget(el) {
  if (!el) return false;
  if (el.isContentEditable) return true;
  const tag = typeof el.tagName === 'string' ? el.tagName.toUpperCase() : '';
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

const EDGES = ['top', 'right', 'bottom', 'left'];

/**
 * @brief A CSS length that keeps an element `px` clear of a screen edge, notch included.
 *
 * Every corner-pinned control used to say `top:12px` and nothing else, which on
 * a phone with a camera cut-out in the landscape long edge put the settings
 * gear under the cut-out. `env(safe-area-inset-*)` is zero where there is no
 * cut-out, so on a desktop this is exactly the old number; the 0px fallback
 * covers a browser that has never heard of env().
 *
 * Throws on a bad edge or a non-finite offset: a typo here would otherwise
 * produce a declaration the browser silently drops, and the control would sit
 * at its default position with nothing in the console.
 *
 * @param {'top'|'right'|'bottom'|'left'} edge
 * @param {number} px offset from the edge when there is no inset
 * @return {string} e.g. `calc(12px + env(safe-area-inset-top, 0px))`
 * @throws {TypeError}
 */
export function safeInset(edge, px) {
  if (EDGES.indexOf(edge) === -1) throw new TypeError(`safeInset: unknown edge "${edge}"`);
  if (typeof px !== 'number' || !Number.isFinite(px)) throw new TypeError(`safeInset: offset must be a finite number, got ${px}`);
  return `calc(${px}px + env(safe-area-inset-${edge}, 0px))`;
}
