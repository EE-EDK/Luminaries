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
