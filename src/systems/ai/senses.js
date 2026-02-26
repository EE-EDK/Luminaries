// ================================================================
// Sensory Systems for Creature AI
// ================================================================
// Detection checks: vision cone, hearing radius, proximity.

// Check if target is within a vision cone
// pos: creature position {x, z}
// heading: creature facing angle (radians)
// target: target position {x, z}
// range: max sight distance
// fov: field of view in radians (e.g., Math.PI * 0.66 for 120°)
export function canSee(pos, heading, target, range, fov) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const d2 = dx * dx + dz * dz;
  if (d2 > range * range) return false;
  if (d2 < 0.01) return true;
  const angleToTarget = Math.atan2(dz, dx);
  let diff = angleToTarget - heading;
  // Normalize to [-PI, PI]
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return Math.abs(diff) < fov * 0.5;
}

// Check if target is within hearing range
// Sprinting multiplies the effective noise radius
export function canHear(pos, target, baseRange, isSprinting) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const range = isSprinting ? baseRange * 1.8 : baseRange;
  return (dx * dx + dz * dz) < range * range;
}

// Simple proximity check
export function isNear(pos, target, range) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  return (dx * dx + dz * dz) < range * range;
}

// Distance squared (for comparisons without sqrt)
export function dist2(a, b) {
  const dx = a.x - b.x, dz = a.z - b.z;
  return dx * dx + dz * dz;
}

// Actual distance
export function dist(a, b) {
  return Math.sqrt(dist2(a, b));
}
