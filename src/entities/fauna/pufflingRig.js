// ================================================================
// Puffling — joint set and pose writer for the GPU rig
// ================================================================
// A puffling used to be ten meshes (thirteen with the wizard's hat): body, belly,
// dark accents, core, two ears, two eyes, mouth, spore trail. Two of those groups
// are animated limbs the shader can move:
//
//   EAR_0 / EAR_1   the ears (x = -/+0.13, y = 0.85). Rotation about z: the flick,
//                   the wiggle, the lean toward the player.
//   EYE_0 / EYE_1   the eyes (x = -/+0.09, y = 0.68, z = 0.18). Scale about their own
//                   centre: the blink is scale.y 1 -> 0.1 -> 1.
//
// Ears are baked into the body mesh (they always used bodyMat) and eyes into the
// dark mesh (brows, nose, wizard stars); both are four-joint, all-root rigs, and
// the eyes need the rig's per-joint scale (createRig(defs, {scale: true})).
//
// What is NOT on the rig, and why:
//   - The squash and stretch of a hop is `shell`, a Group every body part sits
//     under. It scales and tilts the merged meshes for free, and
//     systems/wizardPufflingEvent.js writes shell.scale / shell.rotation directly,
//     so it has to stay a real Group.
//   - The mouth is a Mesh: wizardPufflingEvent.js writes mouth.scale.y and
//     mouth.position.y on it too, and nothing would publish a rig pose for the
//     wizard (it is not in the puffling store, so updatePufflings never runs on it).
//   - The core is a plain MeshBasicMaterial the wizard event recolours.
//
// Each `pos` is the position the old Mesh had under `shell`, so a state that was
// `ear.mesh.rotation.z = a` or `eye.scale.y = s` is still exactly that here.

import { Euler, Quaternion } from 'three';
import { createRig } from '../_bake.js';

export const PUFF_JOINT = Object.freeze({
  EAR_0: 0,     // the ear at x = -0.13 (i = -1 in the builder)
  EAR_1: 1,     // the ear at x = +0.13
  EYE_0: 2,     // the eye at x = -0.09
  EYE_1: 3,     // the eye at x = +0.09
  COUNT: 4
});

export function pufflingJointDefs() {
  const defs = [];
  defs[PUFF_JOINT.EAR_0] = { name: 'ear0', parent: -1, pos: [-0.13, 0.85, 0] };
  defs[PUFF_JOINT.EAR_1] = { name: 'ear1', parent: -1, pos: [0.13, 0.85, 0] };
  defs[PUFF_JOINT.EYE_0] = { name: 'eye0', parent: -1, pos: [-0.09, 0.68, 0.18] };
  defs[PUFF_JOINT.EYE_1] = { name: 'eye1', parent: -1, pos: [0.09, 0.68, 0.18] };
  return defs;
}

export function makePufflingRig() {
  return createRig(pufflingJointDefs(), { scale: true });
}

// Module-scope scratch: the per-frame path allocates nothing.
const _eu = new Euler();
const _q = new Quaternion();

/**
 * @brief Write a puffling's ear angles and eye scales to its rig and upload them.
 * Reads the state objects the update loop has always written
 * (`ears[i].mesh.rotation`, `eyes[i].scale`). Zero allocation.
 * @param {object} p puffling record from makePuff()
 */
export function writePufflingPose(p) {
  const rig = p.rig;
  const ears = p.ears;
  for (let ei = 0; ei < ears.length; ei++) {
    const r = ears[ei].mesh.rotation;
    _q.setFromEuler(_eu.set(r.x, r.y, r.z));
    rig.pose(PUFF_JOINT.EAR_0 + ei, _q);
  }
  const eyes = p.eyes;
  for (let ei = 0; ei < eyes.length; ei++) {
    const s = eyes[ei].scale;
    rig.poseScale(PUFF_JOINT.EYE_0 + ei, s.x, s.y, s.z);
  }
  rig.upload();
}
