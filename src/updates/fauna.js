// ================================================================
// Fauna update loops — Barrel re-export from fauna/ sub-modules
// ================================================================
// Split into per-creature modules under ./fauna/ for maintainability.
// This file preserves the existing import API.

export { updateJellies } from './fauna/jellies.js';
export { updatePuffs } from './fauna/pufflings.js';
export { updateDeers } from './fauna/deer.js';
export { updateMoths } from './fauna/moths.js';
export { updateLuminids } from './fauna/luminids.js';
