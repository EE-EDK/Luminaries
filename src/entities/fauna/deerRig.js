// ================================================================
// Spirit deer — joint set and pose writer for the GPU rig
// ================================================================
// The deer used to be 17 meshes under 14 pivot Groups that updates/fauna/deer.js
// rotated every frame. It is now body + unlit + trail (3 meshes); each vertex of
// the first two carries a joint index and the vertex shader (entities/_motion.js,
// MOTION.RIG) moves it by that joint's quaternion.
//
// This module is the one place the joint order lives, so the builder
// (entities/fauna/deer.js), the update loop (updates/fauna/deer.js) and the tests
// cannot disagree about which index is which. A vertex baked against the wrong
// joint moves with the wrong limb; the baked-attribute test in
// entities/__tests__/deerRig.test.js pins every index to a region of the body.
//
// The 14 joints keep the exact rest positions the old Groups had (each `pos` is
// the Group's old local position), so a pose that was `group.rotation.x = a` is
// still `rotation.x = a` here.

import { Euler, Quaternion } from 'three';
import { createRig } from '../_bake.js';

/** Joint indices. Parents always precede children (createRig asserts it). */
export const DEER_JOINT = Object.freeze({
  NECK_BASE: 0,
  NECK_MID: 1,
  HEAD: 2,
  EAR_0: 3,       // the ear at x = -0.1 (i = -1 in the builder)
  EAR_1: 4,       // the ear at x = +0.1
  UPPER_0: 5,     // 5..8   upper legs, in legDefs order
  LOWER_0: 9,     // 9..12  lower legs, same order; LOWER_0 + n is the child of UPPER_0 + n
  TAIL: 13,
  COUNT: 14
});

/** Hip positions, front pair first (isFront = index < 2). Same table the Groups used. */
export const DEER_LEG_DEFS = Object.freeze([
  Object.freeze({ x: -0.15, z: 0.3 }),
  Object.freeze({ x: 0.15, z: 0.3 }),
  Object.freeze({ x: -0.15, z: -0.3 }),
  Object.freeze({ x: 0.15, z: -0.3 })
]);

/** Joint definitions: parent index and local position, exactly the old Group tree. */
export function deerJointDefs() {
  const defs = [];
  defs[DEER_JOINT.NECK_BASE] = { name: 'neckBase', parent: -1, pos: [0, 1.15, 0.3] };
  defs[DEER_JOINT.NECK_MID] = { name: 'neckMid', parent: DEER_JOINT.NECK_BASE, pos: [0, 0.15, 0.08] };
  defs[DEER_JOINT.HEAD] = { name: 'head', parent: DEER_JOINT.NECK_MID, pos: [0, 0.07, 0.12] };
  defs[DEER_JOINT.EAR_0] = { name: 'ear0', parent: DEER_JOINT.HEAD, pos: [-0.1, 0.15, -0.05] };
  defs[DEER_JOINT.EAR_1] = { name: 'ear1', parent: DEER_JOINT.HEAD, pos: [0.1, 0.15, -0.05] };
  for (let li = 0; li < 4; li++) {
    const ld = DEER_LEG_DEFS[li];
    defs[DEER_JOINT.UPPER_0 + li] = { name: `upper${li}`, parent: -1, pos: [ld.x, 0.65, ld.z] };
    defs[DEER_JOINT.LOWER_0 + li] = { name: `lower${li}`, parent: DEER_JOINT.UPPER_0 + li, pos: [0, -0.35, 0] };
  }
  defs[DEER_JOINT.TAIL] = { name: 'tail', parent: -1, pos: [0, 1.1, -0.55] };
  return defs;
}

export function makeDeerRig() {
  return createRig(deerJointDefs());
}

// Module-scope scratch: the per-frame path allocates nothing.
const _eu = new Euler();
const _q = new Quaternion();

/** Euler (XYZ, as Object3D.rotation) -> quaternion -> joint j. */
function poseFromRotation(rig, j, r) {
  _q.setFromEuler(_eu.set(r.x, r.y, r.z));
  rig.pose(j, _q);
}

/**
 * @brief Write a deer's current joint angles to its rig and upload them.
 * Reads the same state objects the update loop has always written
 * (`neckBasePivot.rotation`, `legPivots[i].upper.rotation`, ...), so the angles
 * and their phases are untouched; only where they end up has changed.
 * Zero allocation. Forgetting this call leaves the deer frozen in its last pose,
 * which is what the pose-upload test in updates/fauna/__tests__ exists to catch.
 * @param {object} d deer record from makeDeer()
 */
export function writeDeerPose(d) {
  const rig = d.rig;
  poseFromRotation(rig, DEER_JOINT.NECK_BASE, d.neckBasePivot.rotation);
  poseFromRotation(rig, DEER_JOINT.NECK_MID, d.neckMidPivot.rotation);
  poseFromRotation(rig, DEER_JOINT.HEAD, d.headPivot.rotation);
  if (d.ears) {
    for (let ei = 0; ei < d.ears.length; ei++) poseFromRotation(rig, DEER_JOINT.EAR_0 + ei, d.ears[ei].rotation);
  }
  const legs = d.legPivots;
  for (let li = 0; li < legs.length; li++) {
    poseFromRotation(rig, DEER_JOINT.UPPER_0 + li, legs[li].upper.rotation);
    poseFromRotation(rig, DEER_JOINT.LOWER_0 + li, legs[li].lower.rotation);
  }
  poseFromRotation(rig, DEER_JOINT.TAIL, d.tailPivot.rotation);
  rig.upload();
}
