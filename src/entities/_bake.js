// ================================================================
// Part baker — merges an entity's decorative parts into one mesh per
// material role, with per-part colour / opacity / emissive scale / motion
// baked into vertex attributes read by the shared motion shader (_motion.js).
// ================================================================
// Why: before this, a fern was 57 Mesh objects and a moth 91 — each a draw
// call, a geometry upload and a scene-graph node. Merged by role the same
// fern is 3 meshes and moves on the GPU instead of the CPU.
//
// Usage (see flora/thornbloom.js for a full example):
//   const b = createBaker();
//   b.add(new SphereGeometry(0.1, 5, 4), { role: 'glow', pos: [0, 1, 0], color: C.x,
//         emis: 0.6, opacity: 0.7, sway: 0.3, motion: { mode: MOTION.BOB, amp: 0.03 } });
//   const meshes = b.build({ glow: roleMaterial('glow', { emissive: C.y }) });
//   group.add(meshes.glow);
//
// Every geometry passed to add() is cloned, so shared templates (GEO.*) are
// safe to pass; the clones are disposed after the merge.
//
// Rigged parts (a creature whose limbs move as rigid pieces): build a rig with
// createRig(jointDefs), pass `joint: i` (and `parent: rig.restMatrix(i)` so the
// part's local pos/rot are relative to the joint) to add(), and give the
// materials `{ rig }`. Each frame: rig.pose(i, quaternion) for every joint that
// changed, then rig.upload() once. See entities/fauna/deerRig.js.

import {
  BufferAttribute, BufferGeometry, Color, DoubleSide, Euler, Float32BufferAttribute,
  Matrix4, Mesh, MeshBasicMaterial, MeshStandardMaterial, Quaternion, Vector3, AdditiveBlending
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { applyMotion, MOTION, RIG_MAX_JOINTS } from './_motion.js';

const _m = new Matrix4();
const _pm = new Matrix4();
const _q = new Quaternion();
const _e = new Euler();
const _v = new Vector3();
const _s = new Vector3();
const _c = new Color();

/**
 * @brief Create a baker that collects parts and merges them by role.
 * @return {{ add: Function, buildGeometries: Function, build: Function, count: Function }}
 */
export function createBaker() {
  /** @type {Object<string, BufferGeometry[]>} */
  const roles = {};
  /** Roles that received at least one jointed part: every geometry in them needs aJoint to merge. */
  const rigRoles = {};
  let partCount = 0;

  /**
   * @brief Add one part.
   * @param {BufferGeometry} srcGeo source geometry (cloned; caller keeps ownership)
   * @param {object} o options
   * @param {string} o.role material role key used in build()
   * @param {number[]} [o.pos] [x, y, z]
   * @param {number[]} [o.rot] Euler [x, y, z] (XYZ order)
   * @param {Quaternion} [o.quat] quaternion (overrides rot)
   * @param {number|number[]} [o.scale] uniform or [x, y, z]
   * @param {Matrix4} [o.parent] pre-multiplied parent matrix (for nested pivots)
   * @param {number|Color} [o.color=0xffffff] vertex colour (multiplies material colour)
   * @param {number} [o.opacity=1] vertex alpha (multiplies material opacity when transparent)
   * @param {number} [o.emis=1] emissive multiplier for this part
   * @param {number|Function} [o.sway=0] wind weight; number = constant, function(x,y,z)→weight
   *        evaluated on the transformed (group-space) vertex
   * @param {{mode:number, amp?:number, phase?:number, speed?:number}} [o.motion]
   * @param {number[]} [o.pivot] pivot [x, y, z] in group space (default: part position)
   * @param {number} [o.joint] rig joint index this part rides on (see createRig). Parts without
   *        one are written aJoint = -1 whenever any part of the same role has a joint.
   * @param {number} [o.jointW=1] joint weight; rigid parts use 1
   */
  function add(srcGeo, o) {
    const role = o.role;
    if (!role) throw new Error('baker.add: role is required');
    let geo = srcGeo.clone();
    if (geo.index) { const ni = geo.toNonIndexed(); geo.dispose(); geo = ni; }
    if (!geo.attributes.normal) geo.computeVertexNormals();
    const n = geo.attributes.position.count;
    if (!geo.attributes.uv) geo.setAttribute('uv', new Float32BufferAttribute(new Float32Array(n * 2), 2));
    if (geo.attributes.tangent) geo.deleteAttribute('tangent');
    for (const k of Object.keys(geo.attributes)) {
      if (k !== 'position' && k !== 'normal' && k !== 'uv') geo.deleteAttribute(k);
    }
    geo.morphAttributes = {};

    // Transform
    const px = o.pos ? o.pos[0] : 0, py = o.pos ? o.pos[1] : 0, pz = o.pos ? o.pos[2] : 0;
    if (o.quat) _q.copy(o.quat);
    else if (o.rot) _q.setFromEuler(_e.set(o.rot[0] || 0, o.rot[1] || 0, o.rot[2] || 0, 'XYZ'));
    else _q.identity();
    if (o.scale === undefined) _s.set(1, 1, 1);
    else if (typeof o.scale === 'number') _s.setScalar(o.scale);
    else _s.set(o.scale[0], o.scale[1], o.scale[2]);
    _m.compose(_v.set(px, py, pz), _q, _s);
    if (o.parent) { _pm.copy(o.parent).multiply(_m); _m.copy(_pm); }
    geo.applyMatrix4(_m);

    // Colour + alpha
    if (o.color instanceof Color) _c.copy(o.color); else _c.setHex(o.color === undefined ? 0xffffff : o.color);
    const alpha = o.opacity === undefined ? 1 : o.opacity;
    const col = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { col[i * 4] = _c.r; col[i * 4 + 1] = _c.g; col[i * 4 + 2] = _c.b; col[i * 4 + 3] = alpha; }
    geo.setAttribute('color', new BufferAttribute(col, 4));

    // Emissive scale
    const emis = new Float32Array(n).fill(o.emis === undefined ? 1 : o.emis);
    geo.setAttribute('aEmis', new BufferAttribute(emis, 1));

    // Sway weight
    const sway = new Float32Array(n);
    if (typeof o.sway === 'function') {
      const pa = geo.attributes.position;
      for (let i = 0; i < n; i++) sway[i] = o.sway(pa.getX(i), pa.getY(i), pa.getZ(i));
    } else if (o.sway) {
      sway.fill(o.sway);
    }
    geo.setAttribute('aSway', new BufferAttribute(sway, 1));

    // Motion + pivot
    const mo = o.motion || null;
    const hasJoint = o.joint !== undefined;
    if (hasJoint && (!Number.isInteger(o.joint) || o.joint < 0 || o.joint >= RIG_MAX_JOINTS)) {
      throw new Error(`baker.add: joint ${o.joint} is not an integer in 0..${RIG_MAX_JOINTS - 1}`);
    }
    const mode = mo ? (mo.mode || 0) : (hasJoint ? MOTION.RIG : 0);
    const amp = mo && mo.amp !== undefined ? mo.amp : 0;
    const phase = mo && mo.phase !== undefined ? mo.phase : 0;
    const speed = mo && mo.speed !== undefined ? mo.speed : 1;
    const motion = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { motion[i * 4] = mode; motion[i * 4 + 1] = amp; motion[i * 4 + 2] = phase; motion[i * 4 + 3] = speed; }
    geo.setAttribute('aMotion', new BufferAttribute(motion, 4));
    const pv = o.pivot || (o.parent ? [_m.elements[12], _m.elements[13], _m.elements[14]] : [px, py, pz]);
    const pivot = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pivot[i * 3] = pv[0]; pivot[i * 3 + 1] = pv[1]; pivot[i * 3 + 2] = pv[2]; }
    geo.setAttribute('aPivot', new BufferAttribute(pivot, 3));

    // Rig joint (only when the part is on one; mergeGeometries needs every part of a role to agree,
    // so buildGeometries back-fills -1 on the others).
    if (hasJoint) {
      geo.setAttribute('aJoint', new BufferAttribute(new Float32Array(n).fill(o.joint), 1));
      geo.setAttribute('aJointW', new BufferAttribute(new Float32Array(n).fill(o.jointW === undefined ? 1 : o.jointW), 1));
      rigRoles[role] = true;
    }

    (roles[role] || (roles[role] = [])).push(geo);
    partCount++;
  }

  /**
   * @brief Merge each role's parts into one geometry. Parts are disposed.
   * @return {Object<string, BufferGeometry>}
   */
  function buildGeometries() {
    const out = {};
    for (const role of Object.keys(roles)) {
      const list = roles[role];
      if (!list.length) continue;
      if (rigRoles[role]) {
        for (const g of list) {
          if (g.attributes.aJoint) continue;
          const cnt = g.attributes.position.count;
          g.setAttribute('aJoint', new BufferAttribute(new Float32Array(cnt).fill(-1), 1));
          g.setAttribute('aJointW', new BufferAttribute(new Float32Array(cnt), 1));
        }
      }
      const merged = list.length === 1 ? list[0] : mergeGeometries(list, false);
      if (!merged) throw new Error(`baker: merge failed for role "${role}"`);
      if (list.length > 1) for (const g of list) g.dispose();
      merged.computeBoundingSphere();
      out[role] = merged;
      roles[role] = [];
      rigRoles[role] = false;
    }
    return out;
  }

  /**
   * @brief Merge and wrap each role in a Mesh with the given material.
   * @param {Object<string, import('three').Material>} materials role → material
   * @return {Object<string, Mesh>} role → mesh (only roles that received parts)
   */
  function build(materials) {
    const geos = buildGeometries();
    const out = {};
    for (const role of Object.keys(geos)) {
      const mat = materials[role];
      if (!mat) throw new Error(`baker.build: no material for role "${role}"`);
      out[role] = new Mesh(geos[role], mat);
    }
    return out;
  }

  function count() { return partCount; }

  return { add, buildGeometries, build, count };
}

/**
 * @brief Create a vertex-coloured material wired to the motion shader.
 * @param {'solid'|'glow'|'haze'|'basic'} kind
 *   solid — opaque MeshStandardMaterial
 *   glow  — transparent MeshStandardMaterial, depthWrite false (glass / petals / haze-lit parts)
 *   haze  — MeshBasicMaterial, additive, depthWrite false (soft light halos)
 *   basic — MeshBasicMaterial, normal blending, transparent, depthWrite false (unlit dots / lines)
 * @param {object} [o]
 * @param {number} [o.emissive] emissive colour (standard kinds)
 * @param {number} [o.emissiveIntensity=1]
 * @param {number} [o.roughness=0.6]
 * @param {number} [o.metalness=0]
 * @param {number} [o.opacity=1] base opacity (× vertex alpha)
 * @param {boolean} [o.doubleSide=false]
 * @param {boolean} [o.depthWrite] override
 * @param {number} [o.color=0xffffff] base colour (× vertex colour)
 * @param {object} [o.rig] a rig from createRig(); the material then moves vertices by aJoint
 * @return {MeshStandardMaterial|MeshBasicMaterial}
 */
export function roleMaterial(kind, o = {}) {
  let mat;
  if (kind === 'solid' || kind === 'glow') {
    mat = new MeshStandardMaterial({
      color: o.color === undefined ? 0xffffff : o.color,
      vertexColors: true,
      emissive: o.emissive === undefined ? 0x000000 : o.emissive,
      emissiveIntensity: o.emissiveIntensity === undefined ? 1 : o.emissiveIntensity,
      roughness: o.roughness === undefined ? 0.6 : o.roughness,
      metalness: o.metalness === undefined ? 0 : o.metalness,
      transparent: kind === 'glow' || (o.opacity !== undefined && o.opacity < 1),
      opacity: o.opacity === undefined ? 1 : o.opacity,
      depthWrite: o.depthWrite !== undefined ? o.depthWrite : kind !== 'glow'
    });
  } else {
    mat = new MeshBasicMaterial({
      color: o.color === undefined ? 0xffffff : o.color,
      vertexColors: true,
      transparent: true,
      opacity: o.opacity === undefined ? 1 : o.opacity,
      depthWrite: o.depthWrite !== undefined ? o.depthWrite : false
    });
    if (kind === 'haze') mat.blending = AdditiveBlending;
  }
  if (o.doubleSide) mat.side = DoubleSide;
  return applyMotion(mat, o.rig ? { rig: o.rig } : undefined);
}

// ================================================================
// Rig — a joint tree posed on the CPU, skinned rigidly on the GPU
// ================================================================
// A creature's limbs used to be separate Meshes under pivot Groups, rotated every
// frame. A rig keeps the same tree of pivots as plain numbers: pose(i, quaternion)
// stages a joint's local rotation, upload() composes the tree and writes two flat
// Float32Arrays that the vertex shader (MOTION.RIG in _motion.js) reads as uniforms:
//   uJoints[i]   root-space rotation   Q_i = Q_parent * q_i
//   uJointPos[i] root-space translation T_i = T_parent + Q_parent p_i - Q_i p_i
// so a rest-space vertex v on joint i ends up at Q_i v + T_i. That is exactly where
// the old tree of Object3D pivots put it (rig.test.js compares them). Written as a
// rotation plus translation rather than "rotate about a pivot" because in a chain
// the child's pivot itself moves with its parent; a pivot-only form cannot say so.
//
// No soft skinning: every vertex belongs to one joint at weight 1.
//
// Scale (createRig(defs, {scale: true})). A joint may also carry a non-uniform scale
// about its own pivot, applied before its rotation, exactly as Object3D.scale does
// (poseScale(i, sx, sy, sz); eye blink, mouth open). It is restricted to LEAF joints:
// a scaled parent would shear its children's rotations, which a quaternion plus a
// vec3 cannot express, and no creature needs it (a squashing body is a Group the
// meshes already sit under). With scale the pivot term folds into the translation:
//   v' = Q (S v) + T_i + Q (c_i - S c_i)         c_i = the joint's root-space rest pivot
// so the shader still computes rotate(q, v * s) + pos.

/**
 * @brief Build a rig from joint definitions.
 * @param {{name?:string, parent:number, pos:number[]}[]} defs `parent` is an earlier joint's
 *        index or -1; `pos` is the joint's rest position RELATIVE TO ITS PARENT (the old
 *        Group.position), so numbers carry over unchanged from a scene-graph build.
 * @param {{scale?: boolean}} [opts] `scale: true` adds per-joint non-uniform scale (leaf joints only)
 * @return {{count:number, scaled:boolean, parent:Int8Array, rest:Float32Array, local:Float32Array,
 *           quats:Float32Array, trans:Float32Array, scales:(Float32Array|null), uniforms:object,
 *           pose:Function, poseScale:Function, upload:Function, restMatrix:Function}}
 */
export function createRig(defs, opts) {
  const scaled = !!(opts && opts.scale);
  const n = defs.length;
  if (n < 1 || n > RIG_MAX_JOINTS) throw new Error(`createRig: ${n} joints (1..${RIG_MAX_JOINTS})`);
  const parent = new Int8Array(n);
  const rest = new Float32Array(n * 3);     // root-space rest pivots
  const local = new Float32Array(n * 4);    // staged local rotations (xyzw)
  const quats = new Float32Array(n * 4);    // uniform: composed root-space rotations
  const trans = new Float32Array(n * 3);    // uniform: root-space translations
  for (let i = 0; i < n; i++) {
    const p = defs[i].parent === undefined ? -1 : defs[i].parent;
    if (!Number.isInteger(p) || p < -1 || p >= i) throw new Error(`createRig: joint ${i} has parent ${p}; parents must come first`);
    parent[i] = p;
    for (let k = 0; k < 3; k++) rest[i * 3 + k] = (p >= 0 ? rest[p * 3 + k] : 0) + defs[i].pos[k];
    local[i * 4 + 3] = 1;
  }
  const uniforms = { uJoints: { value: quats }, uJointPos: { value: trans } };
  // Scale: staged values default to 1; only leaf joints may leave 1.
  const hasChild = new Uint8Array(n);
  for (let i = 0; i < n; i++) if (parent[i] >= 0) hasChild[parent[i]] = 1;
  const scales = scaled ? new Float32Array(n * 3).fill(1) : null;
  if (scaled) uniforms.uJointScale = { value: scales };

  /** Stage joint i's local rotation (does not touch the uniforms; call upload()). */
  function pose(i, q) {
    if (!(i >= 0 && i < n)) throw new RangeError(`rig.pose: joint ${i} outside 0..${n - 1}`);
    const o = i * 4;
    local[o] = q.x; local[o + 1] = q.y; local[o + 2] = q.z; local[o + 3] = q.w;
  }

  /** Stage joint i's local scale (leaf joints of a scale-enabled rig only; does not touch the uniforms). */
  function poseScale(i, sx, sy, sz) {
    if (!scaled) throw new Error('rig.poseScale: this rig was built without {scale: true}');
    if (!(i >= 0 && i < n)) throw new RangeError(`rig.poseScale: joint ${i} outside 0..${n - 1}`);
    if (hasChild[i]) throw new Error(`rig.poseScale: joint ${i} has children; scale is for leaf joints only`);
    scales[i * 3] = sx; scales[i * 3 + 1] = sy; scales[i * 3 + 2] = sz;
  }

  let _rx = 0, _ry = 0, _rz = 0;
  /** Rotate (x,y,z) by unit quaternion (qx,qy,qz,qw) into _rx/_ry/_rz. No allocation. */
  function rot(qx, qy, qz, qw, x, y, z) {
    const tx = 2 * (qy * z - qz * y), ty = 2 * (qz * x - qx * z), tz = 2 * (qx * y - qy * x);
    _rx = x + qw * tx + (qy * tz - qz * ty);
    _ry = y + qw * ty + (qz * tx - qx * tz);
    _rz = z + qw * tz + (qx * ty - qy * tx);
  }

  /** Compose the tree (parents first) into the uniform arrays, in place. */
  function upload() {
    for (let i = 0; i < n; i++) {
      const o = i * 4, p = parent[i];
      const lx = local[o], ly = local[o + 1], lz = local[o + 2], lw = local[o + 3];
      let qx = lx, qy = ly, qz = lz, qw = lw;
      let tx = 0, ty = 0, tz = 0;
      const px = rest[i * 3], py = rest[i * 3 + 1], pz = rest[i * 3 + 2];
      if (p >= 0) {
        const a = p * 4;
        const ax = quats[a], ay = quats[a + 1], az = quats[a + 2], aw = quats[a + 3];
        qx = aw * lx + ax * lw + ay * lz - az * ly;
        qy = aw * ly - ax * lz + ay * lw + az * lx;
        qz = aw * lz + ax * ly - ay * lx + az * lw;
        qw = aw * lw - ax * lx - ay * ly - az * lz;
        rot(ax, ay, az, aw, px, py, pz);
        tx = trans[p * 3] + _rx; ty = trans[p * 3 + 1] + _ry; tz = trans[p * 3 + 2] + _rz;
      } else {
        tx = px; ty = py; tz = pz;
      }
      rot(qx, qy, qz, qw, px, py, pz);
      quats[o] = qx; quats[o + 1] = qy; quats[o + 2] = qz; quats[o + 3] = qw;
      trans[i * 3] = tx - _rx; trans[i * 3 + 1] = ty - _ry; trans[i * 3 + 2] = tz - _rz;
      if (scaled) {
        // Fold the scale-about-pivot term: + Q (c - S c). Leaf joints only, so nothing reads this translation as a parent's.
        const sx = scales[i * 3], sy = scales[i * 3 + 1], sz = scales[i * 3 + 2];
        rot(qx, qy, qz, qw, px - sx * px, py - sy * py, pz - sz * pz);
        trans[i * 3] += _rx; trans[i * 3 + 1] += _ry; trans[i * 3 + 2] += _rz;
      }
    }
  }

  /** Rest-pose root-space translation of joint i, as a parent matrix for baker.add(). Build time only. */
  function restMatrix(i) {
    return new Matrix4().makeTranslation(rest[i * 3], rest[i * 3 + 1], rest[i * 3 + 2]);
  }

  upload();
  return { count: n, scaled, parent, rest, local, quats, trans, scales, uniforms, pose, poseScale, upload, restMatrix };
}

/**
 * @brief Height-weighted sway helper: 0 at y0, `max` at y1 (clamped), squared for a natural bend.
 * @param {number} y0 base height (group space)
 * @param {number} y1 tip height
 * @param {number} [max=1]
 * @return {(x:number,y:number,z:number)=>number}
 */
export function swayByHeight(y0, y1, max = 1) {
  const span = Math.max(1e-4, y1 - y0);
  return (x, y) => {
    const t = Math.min(1, Math.max(0, (y - y0) / span));
    return t * t * max;
  };
}

export { MOTION };

/**
 * @brief Detail LOD for baked creatures: the small unlit / accent meshes listed in
 * `rec._detail` are hidden beyond `nearD2` (squared metres). Call after the creature's
 * own visibility cull; cheap (one comparison, writes only on change).
 * @param {object} rec creature record with `_detail` (Object3D[])
 * @param {number} d2 squared distance to the player
 * @param {number} [nearD2=900] 30 m
 */
export function applyDetailLod(rec, d2, nearD2 = 900) {
  const det = rec._detail;
  if (!det) return;
  const show = d2 < nearD2;
  if (rec._detailVis === show) return;
  rec._detailVis = show;
  for (let i = 0; i < det.length; i++) det[i].visible = show;
}
