// ================================================================
// Photo moment — hold H, the interface steps aside and the camera drifts
// ================================================================
// No capture code: the browser's own screenshot does that. This is only the
// part that makes a screenshot worth taking — nothing over the forest, and a
// camera that is not quite still.
//
// The state machine is pure and lives here; the DOM glue (hiding the HUD, the
// one keydown flag in input.js) lives in systems/fieldwork.js. Three states:
//
//   idle      nothing held, no offset
//   holding   H is down: interface hidden, yaw offset growing
//   settling  H was released: interface already back, offset easing to zero
//
// The drift is an OFFSET on the camera, never a write to the player's live
// yaw. That is what makes "restore on release" exact rather than approximate:
// the thing to restore is a number that was never folded into anything else.
// Reduced motion keeps the hiding and drops the drift — the camera drifting on
// its own is precisely the motion that setting exists to refuse.

/** Radians per second the camera yaw drifts while H is held. */
export const PHOTO_DRIFT_RATE = 0.02;

/** Per-second decay of the offset after release; e^-6 is under 0.3% left after a second. */
export const PHOTO_SETTLE_RATE = 6;

/** Offsets smaller than this snap to zero, so the settle terminates instead of asymptoting. */
export const PHOTO_EPS = 1e-4;

/**
 * Everything the interface is made of, by element id. Hidden with
 * `visibility`, not `display`: visibility leaves each element's own display
 * value alone, which is what lets the release put things back exactly as they
 * were — the mobile controls toggle `display` themselves.
 */
export const PHOTO_HIDE_IDS = Object.freeze([
  'hud', 'controls', 'orb-hud', 'discovery-text', 'puffling-chat', 'session-summary',
  'joy-zone', 'btn-jump', 'btn-sprint', 'hum-slider', 'hum-farfield-hint', 'hum-jelly-bar',
  'settings-panel-root', 'dev-skip-wrap', 'lumi-debug-terminal',
  'notebook-root', 'sound-captions',
]);

/** The class the body wears while a photo is being taken. */
export const PHOTO_CLASS = 'lumi-photo';

/** @brief The stylesheet text that hides the interface under PHOTO_CLASS. */
export function photoCss() {
  return `body.${PHOTO_CLASS} ${PHOTO_HIDE_IDS.map((id) => `#${id}`).join(`, body.${PHOTO_CLASS} `)} ` +
    '{ visibility: hidden !important; }';
}

/** @brief A fresh state. */
export function createPhotoState() { return { held: false, offset: 0 }; }

/** @brief 'idle' | 'holding' | 'settling' */
export function photoPhase(s) {
  if (s.held) return 'holding';
  return s.offset !== 0 ? 'settling' : 'idle';
}

/**
 * @brief Advance the state machine one frame.
 *
 * Mutates `s` in place and allocates nothing. The caller adds the returned
 * offset to the camera yaw each frame; the interface is hidden exactly while
 * `s.held`.
 *
 * @param {{held:boolean, offset:number}} s
 * @param {boolean} pressed whether H is down this frame
 * @param {boolean} reducedMotion
 * @param {number} dt seconds
 * @return {number} the yaw offset to apply, in radians
 */
export function stepPhoto(s, pressed, reducedMotion, dt) {
  const d = dt > 0 ? dt : 0;
  s.held = !!pressed;
  if (reducedMotion) {
    // Hide, but never drift — and if the setting was flipped mid-hold, lose
    // whatever drift had built up rather than easing it out on screen.
    s.offset = 0;
    return 0;
  }
  if (s.held) {
    s.offset += PHOTO_DRIFT_RATE * d;
  } else if (s.offset !== 0) {
    s.offset *= Math.exp(-PHOTO_SETTLE_RATE * d);
    if (Math.abs(s.offset) < PHOTO_EPS) s.offset = 0;
  }
  return s.offset;
}
