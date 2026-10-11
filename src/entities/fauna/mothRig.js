// ================================================================
// Luna moth — joint set and pose writer for the GPU rig
// ================================================================
// The moth used to be 8 meshes: body fur, body unlit, a wing membrane and a wing
// markings mesh under each of two flap pivots, and one antenna mesh under each of
// two quiver pivots. It is now fur + glow + unlit (3 meshes). The glow mesh holds
// both wing membranes and both antennae (antennae were always built with the wing
// glow material); the unlit mesh holds the body's legs and dust, and both wings'
// markings. Four joints, all roots, rotation only:
//
//   WING_0  the left wing  (x = -0.04), flaps about z
//   WING_1  the right wing (x = +0.04)
//   ANT_0   the left antenna  (x = -0.025), quivers about x and z
//   ANT_1   the right antenna (x = +0.025)
//
// Each `pos` is the Group position the old pivots had, so a pose that was
// `pivot.rotation.z = flap * side` is still exactly that here. The luna has no
// tail pivots (its streamers flutter on the GPU), so there is no tail joint.

import { Euler, Quaternion } from 'three';
import { createRig } from '../_bake.js';

export const MOTH_JOINT = Object.freeze({
  WING_0: 0,    // side -1 (i = -1 in the builder)
  WING_1: 1,    // side +1
  ANT_0: 2,
  ANT_1: 3,
  COUNT: 4
});

export function mothJointDefs() {
  const defs = [];
  defs[MOTH_JOINT.WING_0] = { name: 'wing0', parent: -1, pos: [-0.04, 0, 0.04] };
  defs[MOTH_JOINT.WING_1] = { name: 'wing1', parent: -1, pos: [0.04, 0, 0.04] };
  defs[MOTH_JOINT.ANT_0] = { name: 'ant0', parent: -1, pos: [-0.025, 0.025, 0.19] };
  defs[MOTH_JOINT.ANT_1] = { name: 'ant1', parent: -1, pos: [0.025, 0.025, 0.19] };
  return defs;
}

export function makeMothRig() {
  return createRig(mothJointDefs());
}

// Module-scope scratch: the per-frame path allocates nothing.
const _eu = new Euler();
const _q = new Quaternion();

function poseFromRotation(rig, j, r) {
  _q.setFromEuler(_eu.set(r.x, r.y, r.z));
  rig.pose(j, _q);
}

/**
 * @brief Write a moth's wing and antenna angles to its rig and upload them.
 * Reads the state objects the update loop has always written
 * (`_wingPivots[i].pivot.rotation`, `antennae[i].rotation`). Zero allocation.
 * Skipping this call freezes the moth in its last pose.
 * @param {object} m moth record from makeMoth()
 */
export function writeMothPose(m) {
  const rig = m.rig;
  const wp = m.group._wingPivots;
  for (let w = 0; w < wp.length; w++) poseFromRotation(rig, MOTH_JOINT.WING_0 + w, wp[w].pivot.rotation);
  const ants = m.antennae;
  if (ants) for (let a = 0; a < ants.length; a++) poseFromRotation(rig, MOTH_JOINT.ANT_0 + a, ants[a].rotation);
  rig.upload();
}
