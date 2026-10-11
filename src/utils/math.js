// Shared math helpers

export function dist2(x1, z1, x2, z2) {
  const dx = x1 - x2;
  const dz = z1 - z2;
  return dx * dx + dz * dz;
}

// Object-signature variant for positions with .x, .z
export function dist2obj(a, b) {
  const dx = a.x - b.x, dz = a.z - b.z;
  return dx * dx + dz * dz;
}

export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

export const TAU = Math.PI * 2;

export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * @brief A direction-only nudge toward a target, eased out and back.
 *
 * Used for the player light's lean toward the next orb. Direction only: the
 * magnitude never grows with distance, because a lean that got longer the
 * further away the orb was would be a rangefinder, not a hint. sin() gives 0
 * at both ends and 1 in the middle, so it never snaps.
 *
 * @param {number} px @param {number} pz source position
 * @param {number} tx @param {number} tz target position
 * @param {number} progress 0..1; outside that range the offset is zero
 * @param {number} reach peak offset in metres
 * @param {{x:number, z:number}} [out] written in place, never allocated
 * @return {{x:number, z:number}} out
 */
export function leanOffset(px, pz, tx, tz, progress, reach, out) {
  const o = out || { x: 0, z: 0 };
  o.x = 0; o.z = 0;
  if (!(progress > 0) || progress >= 1) return o;
  const dx = tx - px, dz = tz - pz;
  const d2 = dx * dx + dz * dz;
  if (d2 < 1e-6) return o;                 // standing on it: no direction to lean
  const inv = 1 / Math.sqrt(d2);
  const amp = Math.sin(progress * Math.PI) * reach;
  o.x = dx * inv * amp;
  o.z = dz * inv * amp;
  return o;
}

/**
 * @brief Camera roll from sideways movement — a lean into the strafe.
 *
 * Eased toward the target rather than set, so a tap of the strafe key does not
 * snap the horizon. Sign is negated because rolling right means rotating the
 * camera counter-clockwise about its forward axis.
 *
 * @param {number} current current roll in radians
 * @param {number} strafe -1..1, sideways input
 * @param {number} maxRoll radians at full strafe
 * @param {number} dt seconds
 * @param {number} rate approach rate per second
 * @return {number} the new roll
 */
export function strafeRoll(current, strafe, maxRoll, dt, rate = 5) {
  const s = Number.isFinite(strafe) ? (strafe < -1 ? -1 : (strafe > 1 ? 1 : strafe)) : 0;
  const target = -s * maxRoll;
  const k = Math.min(1, Math.max(0, (Number.isFinite(dt) ? dt : 0) * rate));
  const c = Number.isFinite(current) ? current : 0;
  return c + (target - c) * k;
}

/**
 * @brief A slow breath for a camera that has been still.
 *
 * Two sines an octave apart so the loop does not read as a metronome. Returns
 * a pitch offset in radians, zero until the player has actually stopped.
 *
 * @param {number} idleTime seconds since the player last moved
 * @param {number} t elapsed seconds
 * @param {number} amp radians at full depth
 * @param {number} [after=3] seconds of stillness before it fades in
 * @return {number} pitch offset in radians
 */
export function breathOffset(idleTime, t, amp, after = 3) {
  if (!(idleTime > after)) return 0;
  const fade = Math.min(1, (idleTime - after) / 2);      // two seconds to arrive
  return (Math.sin(t * 0.9) * 0.7 + Math.sin(t * 1.8) * 0.3) * amp * fade;
}

/**
 * Within this fraction of the sound's distance to either side of the line of
 * sight, a sound reads as straight ahead or straight behind rather than as
 * left or right. 0.38 is about 22 degrees: wide enough that a call from
 * "roughly in front" is not announced as a side, narrow enough that a call at
 * the edge of the view still is.
 */
export const CENTRE_BAND = 0.38;

/**
 * @brief Which side of the listener a sound came from.
 *
 * For the sound captions, which have to say "left" for someone who cannot hear
 * the panner say it. The convention is the camera's own: yaw 0 faces -z, a
 * positive yaw turns toward -x, and the listener's right hand is
 * (cos yaw, -sin yaw). That is the same basis input.js moves the player by, so
 * a caption can never disagree with where W would take you.
 *
 * Squared throughout: the comparison against CENTRE_BAND needs no sqrt.
 *
 * @param {number} dx sound x minus listener x
 * @param {number} dz sound z minus listener z
 * @param {number} yaw listener yaw in radians
 * @return {'left'|'right'|'ahead'|'behind'|'here'} 'here' only when the sound
 *   is on top of the listener and has no direction to report
 */
export function relativeSide(dx, dz, yaw) {
  const d2 = dx * dx + dz * dz;
  if (!(d2 > 1e-6)) return 'here';
  const s = Math.sin(yaw), c = Math.cos(yaw);
  const right = dx * c - dz * s;
  const fwd = -dx * s - dz * c;
  if (right * right < CENTRE_BAND * CENTRE_BAND * d2) return fwd >= 0 ? 'ahead' : 'behind';
  return right > 0 ? 'right' : 'left';
}
