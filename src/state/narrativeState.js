// ================================================================
// Narrative State — Perspective & Lore Management
// ================================================================
import { emit, Events } from '../kernel/eventBus.js';

let _perspective = 'child'; // 'child' | 'adult'

/**
 * Returns the current narrative perspective.
 * @returns {'child'|'adult'}
 */
export const getPerspective = () => _perspective;

/**
 * Sets the narrative perspective and notifies subscribers.
 * @param {'child'|'adult'} p 
 */
export const setPerspective = (p) => {
  if (p === _perspective) return;
  _perspective = p;
  emit(Events.PERSPECTIVE_CHANGED, { perspective: _perspective });
};

/**
 * Toggles between 'child' and 'adult' perspectives.
 */
export const togglePerspective = () => {
  setPerspective(_perspective === 'child' ? 'adult' : 'child');
};

// ================================================================
// Truth Reveal (wizard payoff) — persistent, one-way
// ================================================================
let _truthRevealed = false;

/**
 * Returns whether the wizard has revealed the truth of both worlds.
 * @returns {boolean}
 */
export const isTruthRevealed = () => _truthRevealed;

/**
 * Permanently reveals the truth (one-way). Emits PERSPECTIVE_CHANGED
 * with truthRevealed:true so subscribers can react.
 */
export const revealTruth = () => {
  if (_truthRevealed) return;
  _truthRevealed = true;
  emit(Events.PERSPECTIVE_CHANGED, { perspective: _perspective, truthRevealed: true });
};

// ================================================================
// Discovery Tracking
// ================================================================

const _discovered = {
  deer: false,
  puffling: false,
  jelly: false,
  moth: false,
  fairyRing: false,
  crystalChain: false,
  pond: false
};

/**
 * Checks if a specific discovery has been made.
 * @param {string} key 
 * @returns {boolean}
 */
export const isDiscovered = (key) => !!_discovered[key];

/**
 * Marks a discovery as made.
 * @param {string} key 
 */
export const markDiscovered = (key) => {
  _discovered[key] = true;
};

/** @brief Every discovery key marked so far (for saves). Grows at runtime — glyph and house keys are added by discoveries.js. */
export const getDiscoveredKeys = () => Object.keys(_discovered).filter((k) => _discovered[k]);

/**
 * @brief Restore narrative state silently — no PERSPECTIVE_CHANGED emit.
 *
 * A load is not a perspective change and not a truth reveal. Emitting would let
 * any future subscriber treat a restored save as the moment it happened.
 * @param {{perspective?:string, truthRevealed?:boolean, discovered?:string[]}} snap
 */
export const restoreNarrative = (snap) => {
  if (!snap) return false;
  if (snap.perspective === 'child' || snap.perspective === 'adult') _perspective = snap.perspective;
  if (snap.truthRevealed) _truthRevealed = true;
  if (Array.isArray(snap.discovered)) for (const k of snap.discovered) _discovered[k] = true;
  return true;
};
