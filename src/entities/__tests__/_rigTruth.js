// Test helper (not a test): the scene graph the rig replaces, as ground truth.
//
// The GPU rig must put every vertex exactly where the old tree of Object3D
// pivots put it. This builds that tree from the same joint definitions, poses
// it with plain Euler angles (the thing the update loop has always written),
// and answers "where does rest-pose point v end up under joint i?" with
// Three's own matrix math. Nothing here shares code with createRig, so the two
// agreeing is evidence rather than tautology.

import { Group, Vector3 } from 'three';

/**
 * @param {{parent:number,pos:number[]}[]} defs joint definitions
 * @return {{groups: Group[], rest: Vector3[]}}
 */
export function buildTruth(defs) {
  const root = new Group();
  const groups = defs.map((d) => {
    const g = new Group();
    g.position.set(d.pos[0], d.pos[1], d.pos[2]);
    return g;
  });
  defs.forEach((d, i) => (d.parent >= 0 ? groups[d.parent] : root).add(groups[i]));
  root.updateMatrixWorld(true);
  const rest = groups.map((g) => new Vector3().setFromMatrixPosition(g.matrixWorld));
  return { root, groups, rest };
}

/** Pose the truth tree: rots[i] = [x, y, z] Euler (XYZ), exactly as Object3D.rotation; scales[i] = [sx, sy, sz] as Object3D.scale (default 1). */
export function poseTruth(truth, rots, scales) {
  truth.groups.forEach((g, i) => {
    const r = rots[i] || [0, 0, 0];
    g.rotation.set(r[0], r[1], r[2]);
    const s = scales && scales[i] ? scales[i] : [1, 1, 1];
    g.scale.set(s[0], s[1], s[2]);
  });
  truth.root.updateMatrixWorld(true);
}

/** Where rest-pose root-space point v goes when joint i is posed: W_i * (v - rest_i). */
export function truthPoint(truth, i, v) {
  return new Vector3(v[0], v[1], v[2]).sub(truth.rest[i]).applyMatrix4(truth.groups[i].matrixWorld);
}

/** The rig's answer, read from the uniform arrays a shader would read: Q_i * (S_i * v) + T_i (S = 1 without scale). */
export function rigPoint(rig, i, v0) {
  const q = rig.quats, t = rig.trans;
  const sc = rig.scales;
  const v = sc ? [v0[0] * sc[i * 3], v0[1] * sc[i * 3 + 1], v0[2] * sc[i * 3 + 2]] : v0;
  const qx = q[i * 4], qy = q[i * 4 + 1], qz = q[i * 4 + 2], qw = q[i * 4 + 3];
  const tx = 2 * (qy * v[2] - qz * v[1]), ty = 2 * (qz * v[0] - qx * v[2]), tz = 2 * (qx * v[1] - qy * v[0]);
  return new Vector3(
    v[0] + qw * tx + (qy * tz - qz * ty) + t[i * 3],
    v[1] + qw * ty + (qz * tx - qx * tz) + t[i * 3 + 1],
    v[2] + qw * tz + (qx * ty - qy * tx) + t[i * 3 + 2]
  );
}

/** Small deterministic PRNG so failures reproduce. */
export function lcg(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}
