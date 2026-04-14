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
