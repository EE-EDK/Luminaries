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
