// ================================================================
// Steering Behaviors
// ================================================================
// Reusable steering functions for creature AI.
// All return a { x, z } force vector to be applied to velocity.
// Return objects are module-scoped and reused — callers must
// consume values before calling another steering function.

import { WORLD_R } from '../../constants.js';

// Per-function reusable result objects (avoids per-call allocation)
const _seek = { x: 0, z: 0 };
const _flee = { x: 0, z: 0 };
const _arrive = { x: 0, z: 0 };
const _wander = { x: 0, z: 0 };
const _sep = { x: 0, z: 0 };
const _coh = { x: 0, z: 0 };
const _align = { x: 0, z: 0 };
const _bounds = { x: 0, z: 0 };
const _avoid = { x: 0, z: 0 };

// Seek: steer toward target position
export function seek(pos, target, maxSpeed) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d < 0.01) { _seek.x = 0; _seek.z = 0; return _seek; }
  const s = maxSpeed / d;
  _seek.x = dx * s; _seek.z = dz * s;
  return _seek;
}

// Flee: steer away from threat position
export function flee(pos, threat, maxSpeed) {
  const dx = pos.x - threat.x, dz = pos.z - threat.z;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d < 0.01) { _flee.x = 0; _flee.z = 0; return _flee; }
  const s = maxSpeed / d;
  _flee.x = dx * s; _flee.z = dz * s;
  return _flee;
}

// Arrive: steer toward target, slowing as it gets close
export function arrive(pos, target, maxSpeed, slowRadius) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d < 0.05) { _arrive.x = 0; _arrive.z = 0; return _arrive; }
  const speed = d < slowRadius ? maxSpeed * (d / slowRadius) : maxSpeed;
  const s = speed / d;
  _arrive.x = dx * s; _arrive.z = dz * s;
  return _arrive;
}

// Wander: smooth random walk with heading persistence
// wanderState: { angle: number } — mutated in place
export function wander(wanderState, dt, turnRate) {
  wanderState.angle += (Math.random() - 0.5) * turnRate * dt;
  _wander.x = Math.cos(wanderState.angle); _wander.z = Math.sin(wanderState.angle);
  return _wander;
}

// Separation: steer away from nearby neighbors
export function separation(pos, neighbors, desiredDist) {
  let fx = 0, fz = 0, count = 0;
  for (let i = 0; i < neighbors.length; i++) {
    const n = neighbors[i];
    const dx = pos.x - n.x, dz = pos.z - n.z;
    const d2 = dx * dx + dz * dz;
    if (d2 > 0.01 && d2 < desiredDist * desiredDist) {
      const d = Math.sqrt(d2);
      fx += (dx / d) / d; fz += (dz / d) / d;
      count++;
    }
  }
  if (count > 0) { fx /= count; fz /= count; }
  _sep.x = fx; _sep.z = fz;
  return _sep;
}

// Cohesion: steer toward center of neighbor group
export function cohesion(pos, neighbors) {
  if (neighbors.length === 0) { _coh.x = 0; _coh.z = 0; return _coh; }
  let cx = 0, cz = 0;
  for (let i = 0; i < neighbors.length; i++) { cx += neighbors[i].x; cz += neighbors[i].z; }
  cx /= neighbors.length; cz /= neighbors.length;
  _coh.x = cx - pos.x; _coh.z = cz - pos.z;
  return _coh;
}

// Alignment: match average heading of neighbors
export function alignment(neighbors) {
  if (neighbors.length === 0) { _align.x = 0; _align.z = 0; return _align; }
  let ax = 0, az = 0;
  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i].vx !== undefined) { ax += neighbors[i].vx; az += neighbors[i].vz; }
  }
  ax /= neighbors.length; az /= neighbors.length;
  _align.x = ax; _align.z = az;
  return _align;
}

// World bounds: smooth turning force to stay within world radius
export function worldBounds(pos, margin) {
  const d2 = pos.x * pos.x + pos.z * pos.z;
  const limit = WORLD_R - margin;
  if (d2 < limit * limit) { _bounds.x = 0; _bounds.z = 0; return _bounds; }
  const d = Math.sqrt(d2);
  const overshoot = (d - limit) / margin;
  const strength = Math.min(overshoot * 2, 3);
  _bounds.x = -pos.x / d * strength; _bounds.z = -pos.z / d * strength;
  return _bounds;
}

// Obstacle avoidance: steer away from nearest obstacle within look-ahead
// count: optional — when provided, iterate obstacles[0..count-1] instead of full .length
export function avoidObstacles(pos, heading, obstacles, lookAhead, obstacleR, count) {
  let fx = 0, fz = 0;
  const hx = Math.cos(heading) * lookAhead;
  const hz = Math.sin(heading) * lookAhead;
  const futX = pos.x + hx, futZ = pos.z + hz;
  const n = count !== undefined ? count : obstacles.length;
  for (let i = 0; i < n; i++) {
    const o = obstacles[i];
    const odx = futX - o.x, odz = futZ - o.z;
    const od2 = odx * odx + odz * odz;
    const r = (o.colR || obstacleR) + 1.0;
    if (od2 < r * r && od2 > 0.01) {
      const od = Math.sqrt(od2);
      const strength = (r - od) / r * 2;
      fx += (odx / od) * strength;
      fz += (odz / od) * strength;
    }
  }
  _avoid.x = fx; _avoid.z = fz;
  return _avoid;
}
