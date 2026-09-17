import { CatmullRomCurve3, PlaneGeometry, SphereGeometry, TorusGeometry, TubeGeometry, Vector3 } from 'three';
import { C, REED_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';
import { createInstancedFloraType } from '../_instancedFlora.js';

// ================================================================
// Reed cluster — instanced (REED_N clumps, 6 variants, 2 draw calls each)
// ================================================================
// Tall curving stalks with joints, a leaf blade, seed plumes and cattail
// fluff. Stalks bend with height in the wind (the plume lags the stem), fluff
// motes drift, and the water-stain band stays put.
//
// Legacy record: { group, phase, swayAmp, stalkMat, stalkBase, tipMat, tipBase }.
// `tipMat` aliases `stalkMat` — the plume is baked 2.3× brighter than the
// stalk so one tint drives both (vegetation.js writes them back to back with
// the same local glow, so the alias is lossless).

const TEMPLATES = 6;
const MAX_PER_TEMPLATE = Math.ceil(REED_N / TEMPLATES) + 16;

function buildReedTemplate() {
  const b = createBaker();
  const count = 3 + Math.floor(sr() * 4);
  let maxH = 0.6;

  b.add(new SphereGeometry(0.08, 5, 3), { role: 'solid', pos: [0, 0.02, 0], scale: [1.5, 0.4, 1.5], color: 0x1a1510, emis: 0 });

  for (let i = 0; i < count; i++) {
    const h = 0.6 + sr() * 1.0;
    if (h > maxH) maxH = h;
    const ox = (sr() - 0.5) * 0.2, oz = (sr() - 0.5) * 0.2;
    const leanAngle = sr() * 6.28;
    const maxLean = 0.08 + sr() * 0.12;
    const sway = swayByHeight(0.05, h, 0.9);
    const pts = [];
    for (let pi = 0; pi <= 6; pi++) {
      const t = pi / 6, lean = maxLean * t * t;
      pts.push(new Vector3(ox + Math.cos(leanAngle) * lean, t * h, oz + Math.sin(leanAngle) * lean));
    }
    const curve = new CatmullRomCurve3(pts);
    b.add(new TubeGeometry(curve, 8, 0.012, 4, false), { role: 'solid', color: C.reed, emis: 1.0, sway });

    const jointN = 2 + Math.floor(sr() * 2);
    for (let ji = 0; ji < jointN; ji++) {
      const jt = 0.2 + ji * 0.25;
      const jPos = curve.getPoint(jt);
      b.add(new TorusGeometry(0.012, 0.004, 4, 6), { role: 'solid', pos: [jPos.x, jPos.y, jPos.z], rot: [Math.PI / 2, 0, 0], color: 0x2a4a20, emis: 0, sway });
    }
    if (sr() < 0.7) {
      const leafLen = 0.1 + sr() * 0.15, la = sr() * 6.28;
      const lp = curve.getPoint(0.4);
      b.add(new PlaneGeometry(0.02, leafLen), { role: 'solid', pos: [lp.x + Math.cos(la) * 0.02, lp.y, lp.z + Math.sin(la) * 0.02], rot: [-0.5 - sr() * 0.4, -la, 0], color: C.reed, emis: 0.4, sway });
    }
    // Seed plume — brighter than the stalk, whiskers around it
    const tipPos = curve.getPoint(1);
    b.add(new SphereGeometry(0.025, 5, 4), { role: 'glow', pos: [tipPos.x, tipPos.y + 0.02, tipPos.z], scale: [0.8, 1.5, 0.8], color: C.reedTip, emis: 2.3, opacity: 1.0, sway });
    for (let wi = 0; wi < 3; wi++) {
      const wa = wi / 3 * 6.28 + sr() * 0.5;
      b.add(new SphereGeometry(0.003, 3, 2), {
        role: 'glow', pos: [tipPos.x + Math.cos(wa) * 0.015, tipPos.y + 0.03, tipPos.z + Math.sin(wa) * 0.015],
        scale: [0.7, 5, 0.7], rot: [0, 0, (sr() - 0.5) * 0.4], color: C.reedTip, emis: 1.2, opacity: 0.4, sway
      });
    }
  }

  // Dried sheaths
  for (let shi = 0; shi < 2; shi++) {
    b.add(new PlaneGeometry(0.025, 0.02), { role: 'glow', pos: [(sr() - 0.5) * 0.15, 0.2 + shi * 0.25, (sr() - 0.5) * 0.1], rot: [sr() * 0.5, sr(), sr() * 0.5], color: 0x4a3a18, emis: 0, opacity: 0.5, sway: 0.2 });
  }
  // Cattail fluff — drifting motes
  for (let ffi = 0; ffi < 4; ffi++) {
    b.add(new SphereGeometry(0.005, 3, 3), {
      role: 'glow', pos: [(sr() - 0.5) * 0.15, 0.8 + sr() * 0.6, (sr() - 0.5) * 0.15], color: 0xeeddcc, emis: 0.5, opacity: 0.3, sway: 0.3,
      motion: { mode: MOTION.BOB, amp: 0.03 + sr() * 0.03, phase: sr() * 6.28, speed: 0.5 + sr() * 0.4 }
    });
  }
  // Water stain band
  b.add(new TorusGeometry(0.1, 0.008, 4, 8), { role: 'glow', pos: [0, 0.03, 0], rot: [Math.PI / 2, 0, 0], color: 0x223320, emis: 0, opacity: 0.2 });

  return { geos: b.buildGeometries(), meta: { count, maxH } };
}

let _type = null;
function getType() {
  if (_type) return _type;
  _type = createInstancedFloraType({
    name: 'reed',
    templateCount: TEMPLATES,
    maxInstances: MAX_PER_TEMPLATE,
    seed: 30611,
    buildTemplate: buildReedTemplate,
    materials: {
      solid: roleMaterial('solid', { emissive: 0xffffff, roughness: 0.7, doubleSide: true }),
      glow: roleMaterial('glow', { emissive: 0xffffff, roughness: 0.6, doubleSide: true })
    },
    glowKey: 'stalkMat',
    glowColor: C.reedTip,
    glowIntensity: 0.15
  });
  return _type;
}

/**
 * @brief Spawn a reed clump at (x, z). Legacy record; populate.js sets group.position.y and slopeQ.
 * @param {number} x
 * @param {number} z
 */
export function makeReed(x, z) {
  const type = getType();
  const rec = type.spawn(x, z, { scale: 0.85 + sr() * 0.3, phase: sr() * 6.28 });
  rec.swayAmp = 0.03 + sr() * 0.04;
  rec.stalkBase = 0.15;
  rec.tipMat = rec.stalkMat;   // alias — see header
  rec.tipBase = 0.15;          // same base as the stalk; the plume's 2.3× is baked
  return rec;
}

/** @brief The instanced type (for tests / debug). */
export function getReedType() { return getType(); }
