// ================================================================
// Steering Behaviors
// ================================================================
// Reusable steering functions for creature AI.
// All return a { x, z } force vector to be applied to velocity.

import { WORLD_R } from '../../constants.js';

const _tmp = { x: 0, z: 0 };

// Seek: steer toward target position
export function seek(pos, target, maxSpeed) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d < 0.01) return { x: 0, z: 0 };
  const s = maxSpeed / d;
  return { x: dx * s, z: dz * s };
}

// Flee: steer away from threat position
export function flee(pos, threat, maxSpeed) {
  const dx = pos.x - threat.x, dz = pos.z - threat.z;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d < 0.01) return { x: 0, z: 0 };
  const s = maxSpeed / d;
  return { x: dx * s, z: dz * s };
}

// Arrive: steer toward target, slowing as it gets close
export function arrive(pos, target, maxSpeed, slowRadius) {
  const dx = target.x - pos.x, dz = target.z - pos.z;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d < 0.05) return { x: 0, z: 0 };
  const speed = d < slowRadius ? maxSpeed * (d / slowRadius) : maxSpeed;
  const s = speed / d;
  return { x: dx * s, z: dz * s };
}

// Wander: smooth random walk with heading persistence
// wanderState: { angle: number } — mutated in place
export function wander(wanderState, dt, turnRate) {
  wanderState.angle += (Math.random() - 0.5) * turnRate * dt;
  return { x: Math.cos(wanderState.angle), z: Math.sin(wanderState.angle) };
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
  return { x: fx, z: fz };
}

// Cohesion: steer toward center of neighbor group
export function cohesion(pos, neighbors) {
  if (neighbors.length === 0) return { x: 0, z: 0 };
  let cx = 0, cz = 0;
  for (let i = 0; i < neighbors.length; i++) { cx += neighbors[i].x; cz += neighbors[i].z; }
  cx /= neighbors.length; cz /= neighbors.length;
  return { x: cx - pos.x, z: cz - pos.z };
}

// Alignment: match average heading of neighbors
export function alignment(neighbors) {
  if (neighbors.length === 0) return { x: 0, z: 0 };
  let ax = 0, az = 0;
  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i].vx !== undefined) { ax += neighbors[i].vx; az += neighbors[i].vz; }
  }
  ax /= neighbors.length; az /= neighbors.length;
  return { x: ax, z: az };
}

// World bounds: smooth turning force to stay within world radius
export function worldBounds(pos, margin) {
  const d = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
  const limit = WORLD_R - margin;
  if (d < limit) return { x: 0, z: 0 };
  const overshoot = (d - limit) / margin;
  const strength = Math.min(overshoot * 2, 3);
  return { x: -pos.x / d * strength, z: -pos.z / d * strength };
}

// Obstacle avoidance: steer away from nearest obstacle within look-ahead
export function avoidObstacles(pos, heading, obstacles, lookAhead, obstacleR) {
  let fx = 0, fz = 0;
  const hx = Math.cos(heading) * lookAhead;
  const hz = Math.sin(heading) * lookAhead;
  const futX = pos.x + hx, futZ = pos.z + hz;
  for (let i = 0; i < obstacles.length; i++) {
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
  return { x: fx, z: fz };
}
