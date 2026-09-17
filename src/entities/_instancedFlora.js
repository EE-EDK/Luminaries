// ================================================================
// Instanced flora — template InstancedMesh per material role, shared by
// ferns, flowers, mushrooms and reeds (the four high-count types).
// ================================================================
// Same idea as the trees: a handful of baked templates, one InstancedMesh per
// (template × role), every plant a matrix + a per-instance glow tint. 940
// plants render in ~45 draw calls whatever the player is looking at, and the
// CPU only touches instances whose glow or transform actually changed.
//
// Records returned by spawn() keep the legacy shape consumers expect:
//   rec.group      Object3D (NOT in the scene) — its position / scale /
//                  quaternion feed the instance matrix; rec.slopeQ (set by
//                  populate.js) is folded in when present.
//   rec.<glowKey>  a material-shaped proxy: writing .emissiveIntensity or
//                  .emissive.setHex() updates the per-instance tint attribute.
//   rec.remove()   hide the instance (used when a puffling settlement grows
//                  over the plant).

import { Color, DynamicDrawUsage, InstancedBufferAttribute, InstancedMesh, Matrix4, Object3D, Quaternion } from 'three';
import { scene } from '../core/renderer.js';
import { sr, saveSeed, restoreSeed } from '../utils/rng.js';

const _dummy = new Object3D();
const _zero = new Matrix4().makeScale(0, 0, 0);
const _qIdent = new Quaternion();

/**
 * @brief Create one instanced flora type.
 * @param {object} cfg
 * @param {string} cfg.name
 * @param {number} cfg.templateCount number of baked variants
 * @param {number} cfg.maxInstances per template
 * @param {number} cfg.seed template RNG seed base (world RNG is saved/restored around baking)
 * @param {(ti:number)=>{geos:Object<string,import('three').BufferGeometry>, meta:object}} cfg.buildTemplate
 * @param {Object<string, import('three').Material>} cfg.materials role → shared material (motion applied)
 * @param {string[]} [cfg.shadowRoles] roles whose meshes cast shadows
 * @param {string} cfg.glowKey record key for the material proxy (e.g. 'capMat')
 * @param {number} cfg.glowColor default emissive tint (hex)
 * @param {number} [cfg.glowIntensity=1] default intensity
 */
export function createInstancedFloraType(cfg) {
  const templates = [];
  const records = [];
  const roleNames = Object.keys(cfg.materials);

  const saved = saveSeed();
  for (let ti = 0; ti < cfg.templateCount; ti++) {
    // Hash the seed and warm the LCG: consecutive small seeds give correlated
    // first draws (every template picked the same frond count until this).
    restoreSeed(((cfg.seed * 2654435761 + ti * 40503) >>> 0) % 2147483646 + 1);
    for (let w = 0; w < 8; w++) sr();
    const { geos, meta } = cfg.buildTemplate(ti);
    const glowArr = new Float32Array(cfg.maxInstances * 3);
    const phaseArr = new Float32Array(cfg.maxInstances);
    const roles = {};
    for (const role of roleNames) {
      const geo = geos[role];
      if (!geo) continue;
      geo.setAttribute('aInstGlow', new InstancedBufferAttribute(glowArr, 3));
      geo.setAttribute('aInstPhase', new InstancedBufferAttribute(phaseArr, 1));
      const mesh = new InstancedMesh(geo, cfg.materials[role], cfg.maxInstances);
      mesh.instanceMatrix.setUsage(DynamicDrawUsage);
      mesh.count = 0;
      mesh.frustumCulled = false;
      if (cfg.shadowRoles && cfg.shadowRoles.includes(role)) { mesh.castShadow = true; mesh.receiveShadow = true; }
      mesh.name = `${cfg.name}-${ti}-${role}`;
      scene.add(mesh);
      roles[role] = mesh;
    }
    templates.push({ roles, glowArr, phaseArr, meta, count: 0, matDirty: false, glowDirty: false });
  }
  restoreSeed(saved);

  const gc = new Color(cfg.glowColor);
  const gI = cfg.glowIntensity === undefined ? 1 : cfg.glowIntensity;

  /** Material-shaped proxy so legacy `rec.capMat.emissiveIntensity = v` keeps working. */
  function makeProxy(rec) {
    const tpl = templates[rec.templateIdx];
    const tint = new Color(gc);
    let intensity = gI;
    const write = () => {
      const o = rec.idx * 3;
      tpl.glowArr[o] = tint.r * intensity;
      tpl.glowArr[o + 1] = tint.g * intensity;
      tpl.glowArr[o + 2] = tint.b * intensity;
      tpl.glowDirty = true;
    };
    write();
    const emissive = {
      setHex(h) { tint.setHex(h); write(); return emissive; },
      set(c) { tint.set(c); write(); return emissive; },
      copy(c) { tint.copy(c); write(); return emissive; },
      getHex() { return tint.getHex(); },
      get r() { return tint.r; }, get g() { return tint.g; }, get b() { return tint.b; }
    };
    const color = { setHex() { return color; }, set() { return color; }, setRGB() { return color; }, r: 1, g: 1, b: 1 };
    return {
      isInstanceProxy: true,
      get emissiveIntensity() { return intensity; },
      set emissiveIntensity(v) { if (v !== intensity) { intensity = v; write(); } },
      emissive, color,
      get opacity() { return 1; }, set opacity(v) {},
      dispose() {}
    };
  }

  /**
   * @brief Spawn one plant. Positions the (off-scene) group; populate.js sets group.position.y + slopeQ.
   * @param {number} x
   * @param {number} z
   * @param {object} [o]
   * @param {number} [o.scale=1]
   * @param {number} [o.phase=0]
   * @param {number} [o.templateIdx] forced template
   * @return {object} record
   */
  function spawn(x, z, o = {}) {
    let ti = o.templateIdx;
    if (ti === undefined) {
      // Least-populated template first, so variants are spread evenly.
      ti = 0;
      for (let i = 1; i < templates.length; i++) if (templates[i].count < templates[ti].count) ti = i;
    }
    const tpl = templates[ti];
    if (tpl.count >= cfg.maxInstances) {
      throw new Error(`${cfg.name}: template ${ti} is full (${cfg.maxInstances}); raise maxInstances`);
    }
    const idx = tpl.count++;
    const group = new Object3D();
    group.position.set(x, 0, z);
    group.scale.setScalar(o.scale === undefined ? 1 : o.scale);
    const rec = {
      group, x, z, phase: o.phase || 0, templateIdx: ti, idx, _type: api, _dirty: true,
      _lx: NaN, _ly: NaN, _lz: NaN, _lsx: NaN, _lsy: NaN, _lsz: NaN, _lq: null, _lqw: NaN,
      slopeQ: null, meta: tpl.meta,
      remove() { rec._removed = true; rec._dirty = true; }
    };
    rec[cfg.glowKey] = makeProxy(rec);
    tpl.phaseArr[idx] = rec.phase;
    records.push(rec);
    // Zero matrix until first update writes the real one.
    for (const role of roleNames) { const m = tpl.roles[role]; if (m) { m.setMatrixAt(idx, _zero); m.count = tpl.count; } }
    tpl.matDirty = true;
    return rec;
  }

  function _writeMatrix(rec, tpl) {
    if (rec._removed) {
      for (const role of roleNames) { const m = tpl.roles[role]; if (m) m.setMatrixAt(rec.idx, _zero); }
      return;
    }
    const g = rec.group;
    _dummy.position.copy(g.position);
    _dummy.scale.copy(g.scale);
    _dummy.quaternion.copy(rec.slopeQ || _qIdent).multiply(g.quaternion);
    _dummy.updateMatrix();
    for (const role of roleNames) { const m = tpl.roles[role]; if (m) m.setMatrixAt(rec.idx, _dummy.matrix); }
  }

  /**
   * @brief Upload changed matrices / glow tints. Call once per frame (vegetation.js).
   */
  function update() {
    for (let i = 0; i < records.length; i++) {
      const rec = records[i];
      const g = rec.group;
      const q = rec.slopeQ;
      const qw = q ? q.w + q.x * 3 + q.y * 7 + q.z * 11 : 0;
      const moved = rec._dirty
        || g.position.x !== rec._lx || g.position.y !== rec._ly || g.position.z !== rec._lz
        || g.scale.x !== rec._lsx || g.scale.y !== rec._lsy || g.scale.z !== rec._lsz
        || q !== rec._lq || qw !== rec._lqw;
      if (!moved) continue;
      const tpl = templates[rec.templateIdx];
      _writeMatrix(rec, tpl);
      tpl.matDirty = true;
      rec._dirty = false;
      rec._lx = g.position.x; rec._ly = g.position.y; rec._lz = g.position.z;
      rec._lsx = g.scale.x; rec._lsy = g.scale.y; rec._lsz = g.scale.z;
      rec._lq = q; rec._lqw = qw;
    }
    for (let ti = 0; ti < templates.length; ti++) {
      const tpl = templates[ti];
      if (tpl.matDirty) {
        for (const role of roleNames) { const m = tpl.roles[role]; if (m) m.instanceMatrix.needsUpdate = true; }
        tpl.matDirty = false;
      }
      if (tpl.glowDirty) {
        for (const role of roleNames) {
          const m = tpl.roles[role];
          if (!m) continue;
          m.geometry.attributes.aInstGlow.needsUpdate = true;
          m.geometry.attributes.aInstPhase.needsUpdate = true;
        }
        tpl.glowDirty = false;
      }
    }
  }

  /** @brief Retint every instance (quest TRANSFORM phase). */
  function tintAll(fn) {
    for (let i = 0; i < records.length; i++) {
      const rec = records[i];
      const hex = fn(rec, i);
      if (hex !== undefined && hex !== null) rec[cfg.glowKey].emissive.setHex(hex);
    }
  }

  /** @brief Draw-call count for this type (templates × roles present). */
  function drawCalls() {
    let n = 0;
    for (const tpl of templates) for (const role of roleNames) if (tpl.roles[role]) n++;
    return n;
  }

  const api = { name: cfg.name, spawn, update, tintAll, drawCalls, templates, records, materials: cfg.materials };
  instancedTypes.push(api);
  return api;
}

/** Every type created so far (ferns, flowers, mushrooms, reeds). */
export const instancedTypes = [];

/** @brief Upload all dirty instance data. Called once per frame from vegetation.js. */
export function updateAllInstancedFlora() {
  for (let i = 0; i < instancedTypes.length; i++) instancedTypes[i].update();
}
