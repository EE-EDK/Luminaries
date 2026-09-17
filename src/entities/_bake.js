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

import {
  BufferAttribute, BufferGeometry, Color, DoubleSide, Euler, Float32BufferAttribute,
  Matrix4, Mesh, MeshBasicMaterial, MeshStandardMaterial, Quaternion, Vector3, AdditiveBlending
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { applyMotion, MOTION } from './_motion.js';

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
    const mode = mo ? (mo.mode || 0) : 0;
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
      const merged = list.length === 1 ? list[0] : mergeGeometries(list, false);
      if (!merged) throw new Error(`baker: merge failed for role "${role}"`);
      if (list.length > 1) for (const g of list) g.dispose();
      merged.computeBoundingSphere();
      out[role] = merged;
      roles[role] = [];
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
  return applyMotion(mat);
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
