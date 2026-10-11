// ================================================================
// Look math — how far a pointer movement turns the camera
// ================================================================
// The mouse and the touch drag used to carry their own copy of
// `delta * MOUSE_SENS * sensitivity`, which is exactly how a sensitivity
// setting ends up working on desktop only. Both now ask here. It sits outside
// input.js because that module builds its DOM and renderer at load, and the
// one thing worth proving about look — that the two devices turn the same
// amount for the same movement — should not need a browser.

import { MOUSE_SENS } from '../constants.js';

/**
 * @brief Radians of yaw for a horizontal pointer movement.
 * @param {number} dx pixels moved, right positive
 * @param {number} sens the player's look multiplier (settingsState lookSensitivity)
 * @return {number} the amount to SUBTRACT from yaw (dragging right turns the view left, as a hand turns a globe)
 */
export function lookStepX(dx, sens) { return dx * MOUSE_SENS * sens; }

/**
 * @brief Radians of pitch for a vertical pointer movement.
 * @param {number} dy pixels moved, down positive
 * @param {number} sens the player's look multiplier
 * @param {number} invert 1 normally, -1 when Y is inverted
 * @return {number} the amount to SUBTRACT from pitch
 */
export function lookStepY(dy, sens, invert) { return dy * MOUSE_SENS * sens * invert; }

/**
 * @brief Keep pitch short of straight up and down.
 * @param {number} p pitch in radians
 * @return {number} p limited to [-1, 1], the range the camera is allowed to look through
 */
export function clampPitch(p) { return Math.max(-1, Math.min(1, p)); }
