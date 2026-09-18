// ================================================================
// Control names — say the control the player actually has
// ================================================================
// A phone has no F key. Telling a touch player to "press F to hum" is not a
// typo, it is a dead end: the wizard encounter waits for a hum that the
// prompt has just told them to make in a way they cannot. That exact softlock
// shipped once. Every player-facing string that names a control goes through
// here so it cannot happen again in a string nobody thought to check.
//
// Two registers, because the game has two voices. The child voice names
// gestures ("hold the hum slider"); the adult voice names inputs ("HUM
// slider, hold"). Both are true on both platforms — only the words differ.

// Deliberately no import from core/input.js: that module constructs the
// WebGLRenderer at load, which would drag the whole renderer into a module
// whose entire job is picking words. The touch flag is detected here and can
// be overridden, which is also what lets the tests ask for either platform.

/**
 * Every control the player is ever told about, in both voices, on both
 * platforms. Adding a control means adding a row here, not a ternary at
 * the call site.
 */
export const CONTROLS = Object.freeze({
  hum:       { desktop: { child: 'press F',              adult: 'F: carrier' },
               touch:   { child: 'hold the HUM slider',  adult: 'HUM slider, hold' } },
  // Phrased to read after "with": "sweep pitch with Q or E", "…with a slide
  // up or down". Naming the slider again here made every sentence that
  // already mentioned it say it twice.
  pitch:     { desktop: { child: 'Q or E',               adult: 'Q/E: sweep' },
               touch:   { child: 'a slide up or down',   adult: 'HUM slider, drag' } },
  move:      { desktop: { child: 'WASD',                 adult: 'WASD' },
               touch:   { child: 'the stick',            adult: 'stick' } },
  look:      { desktop: { child: 'the mouse',            adult: 'mouse' },
               touch:   { child: 'drag the right side',  adult: 'drag right' } },
  jump:      { desktop: { child: 'Space',                adult: 'Space' },
               touch:   { child: 'JUMP',                 adult: 'JUMP' } },
  pulse:     { desktop: { child: 'click',                adult: 'left-click' },
               touch:   { child: 'tap',                  adult: 'tap' } },
  truth:     { desktop: { child: 'Tab',                  adult: 'TAB' },
               touch:   { child: 'the TRUTH button',     adult: 'TRUTH' } },
});

let _touch = typeof window !== 'undefined'
  && (('ontouchstart' in window) || (navigator && navigator.maxTouchPoints > 0));

/** @brief Override the detected platform (main.js passes input.js's flag). */
export function setTouchPlatform(on) { _touch = !!on; }

/** @brief Whether control names are being written for touch. */
export function isTouchPlatform() { return _touch; }

/** @brief Which control set applies. Injectable so tests can ask for either. */
export function platform(isTouch) {
  return (isTouch === undefined ? _touch : isTouch) ? 'touch' : 'desktop';
}

/**
 * @brief Name a control the way this player performs it.
 * @param {string} action a key of CONTROLS
 * @param {{voice?:'child'|'adult', touch?:boolean}} [opts]
 * @return {string} a phrase to drop mid-sentence, or '' for an unknown action
 */
export function controlName(action, opts = {}) {
  const row = CONTROLS[action];
  if (!row) return '';
  const set = row[platform(opts.touch)];
  return set[opts.voice === 'adult' ? 'adult' : 'child'] || set.child;
}

/**
 * The whole hum, start and sweep, as one sentence per platform.
 *
 * Written out rather than composed from the two controls above: on touch
 * both halves are the same slider, and gluing them together produced "hold
 * the HUM slider, then slide the HUM slider up or down" — true, and unreadable.
 */
const HUM_INSTRUCTION = Object.freeze({
  desktop: {
    child: 'press F, then sweep the pitch with Q or E',
    adult: 'F: carrier; Q/E: sweep to lock',
  },
  touch: {
    child: 'hold the HUM slider, sliding it up and down to find the pitch',
    adult: 'HUM slider: hold, drag to sweep',
  },
});

/**
 * @brief The hum instruction, start and sweep together.
 * @param {{voice?:'child'|'adult', touch?:boolean}} [opts]
 * @return {string}
 */
export function humInstruction(opts = {}) {
  const set = HUM_INSTRUCTION[platform(opts.touch)];
  return set[opts.voice === 'adult' ? 'adult' : 'child'] || set.child;
}

const TOKEN = /\{(\w+)\}/g;

/**
 * @brief Replace {hum}, {pitch}, {move}… in a player-facing string.
 *
 * Called from showNarrativeText, so every line the player reads passes
 * through here whether or not its author remembered that phones exist. An
 * unknown token is left alone rather than blanked — a visible {frobnicate}
 * in testing is worth more than a sentence that quietly loses a word.
 * @param {string} text
 * @param {{voice?:'child'|'adult', touch?:boolean}} [opts]
 * @return {string}
 */
export function resolveControls(text, opts = {}) {
  if (typeof text !== 'string' || text.indexOf('{') === -1) return text;
  return text.replace(TOKEN, (whole, key) => {
    if (key === 'humInstruction') return humInstruction(opts);
    return CONTROLS[key] ? controlName(key, opts) : whole;
  });
}
