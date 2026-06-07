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
