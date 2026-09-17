import { CatmullRomCurve3, Group, SphereGeometry, TorusGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

// ================================================================
// Snapthorn — breathing bioluminescent bulb with waving tentacles that lean
// toward whoever comes close. 5 meshes (was 39, with 37 materials).
// ================================================================
// INCIDENT LOG (Station B, 03:41):
//   The snaphorns are not predatory. Repeat: NOT predatory. The
//   tentacle motion is respiratory, not aggressive. But they do
//   respond to proximity. Their tips brighten when you're near, as
//   if tasting the air. One researcher described them as "curious."
//   We've stopped sending anyone to the eastern cluster alone.
//
// Each tentacle is one smooth tube whose wave, curl and player-reach run in
// the vertex shader (MOTION.REACH). The old 3–4 rigid segments per tentacle
// are gone, and so is the per-segment material.
//
// Legacy record: { group, body, bodyMat, tipMats, frondMats, frondBases, fronds, phase, x, z }.
// tipMats / frondMats each hold one material now.

const _rootMat = roleMaterial('solid', { emissive: 0x0a1a10, emissiveIntensity: 0.06, roughness: 0.85 });
const _hazeMat = roleMaterial('haze', { opacity: 0.04 });

export function makeSnapthorn(x, z) {
  const g = new Group();
  const bodyR = 0.25 + sr() * 0.1;
  const phase = sr() * 6.28;
  const b = createBaker();
  const bodyMat = roleMaterial('glow', { emissive: C.snapBodyGlow, emissiveIntensity: 0.4, roughness: 0.4, metalness: 0.1 });
  const frondMat = roleMaterial('solid', { emissive: C.snapBodyGlow, emissiveIntensity: 0.4, roughness: 0.6 });
  const tipMat = roleMaterial('glow', { emissive: C.snapTipGlow, emissiveIntensity: 0.6, roughness: 0.2 });

  // Roots
  for (let i = 0; i < 3; i++) {
    const ra = (i / 3) * 6.28 + sr() * 0.5;
    const pts = [new Vector3(0, 0.06, 0), new Vector3(Math.cos(ra) * bodyR * 0.35, 0.04, Math.sin(ra) * bodyR * 0.35), new Vector3(Math.cos(ra) * bodyR * 0.7, -0.02, Math.sin(ra) * bodyR * 0.7)];
    b.add(new TubeGeometry(new CatmullRomCurve3(pts), 4, 0.018, 4, false), { role: 'root', color: 0x1a3825, emis: 1 });
  }

  // Body — breathes about its centre (GPU); mouth ring rides along
  const bodyY = bodyR + 0.05;
  const bodyPivot = [0, bodyY, 0];
  const breathe = { mode: MOTION.BREATHE, amp: 0.07, phase, speed: 1.5 };
  b.add(new SphereGeometry(bodyR, 12, 10), { role: 'body', pos: bodyPivot, scale: [1, 0.85, 1], color: C.snapBody, emis: 1.0, opacity: 0.7, pivot: bodyPivot, motion: breathe });
  b.add(new TorusGeometry(bodyR * 0.45, 0.02, 6, 14), { role: 'body', pos: [0, bodyR * 1.7, 0], rot: [Math.PI / 2, 0, 0], color: 0x1a6644, emis: 0.6, opacity: 0.6, pivot: bodyPivot, motion: breathe });
  // Inner glow core — visible through the translucent bulb
  b.add(new SphereGeometry(bodyR * 0.35, 8, 6), { role: 'body', pos: bodyPivot, color: C.snapBodyGlow, emis: 1.8, opacity: 0.5, pivot: bodyPivot, motion: { mode: MOTION.BREATHE, amp: 0.2, phase: phase + 1.0, speed: 1.5 } });

  // Tentacles — one smooth tube each, base fraction 0 → tip 1 in aSway
  const frondN = 5 + Math.floor(sr() * 3);
  const fronds = [];
  for (let fi = 0; fi < frondN; fi++) {
    const baseAngle = (fi / frondN) * 6.28 + sr() * 0.3;
    const segCount = 3 + Math.floor(sr() * 2);
    const segLen = 0.2 + sr() * 0.1;
    const len = segCount * segLen;
    const fPhase = sr() * 6.28;
    const speed = 1.2 + (fi % 3) * 0.3;
    const bx = Math.cos(baseAngle) * bodyR * 0.6, bz = Math.sin(baseAngle) * bodyR * 0.6, by = bodyR * 1.4;
    // Path: rises from the body, bows outward, curls up at the tip
    const pts = [];
    for (let k = 0; k <= 5; k++) {
      const t = k / 5;
      const out = bodyR * 0.6 + t * len * (0.55 + 0.2 * Math.sin(t * 2.2));
      const up = by + t * len * 0.75 - t * t * len * 0.15 + Math.sin(t * Math.PI * 0.9) * 0.05;
      pts.push(new Vector3(Math.cos(baseAngle) * out, up, Math.sin(baseAngle) * out));
    }
    const curve = new CatmullRomCurve3(pts);
    const tip = curve.getPoint(1);
    const pivot = [bx, by, bz];
    const base = new Vector3(bx, by, bz);
    const swayFn = (vx, vy, vz) => Math.min(1, Math.sqrt((vx - base.x) ** 2 + (vy - base.y) ** 2 + (vz - base.z) ** 2) / len);
    const reach = { mode: MOTION.REACH, amp: 0.09, phase: fPhase, speed };
    // Tapered tube: radius shrinks toward the tip via scaling the tube in post
    const tube = new TubeGeometry(curve, 10, 0.02, 5, false);
    const pos = tube.attributes.position;
    for (let vi = 0; vi < pos.count; vi++) {
      // taper: pull vertices toward the curve as they approach the tip
      const t = swayFn(pos.getX(vi), pos.getY(vi), pos.getZ(vi));
      const cp = curve.getPoint(Math.min(1, t));
      const k = 1 - t * 0.6;
      pos.setXYZ(vi, cp.x + (pos.getX(vi) - cp.x) * k, cp.y + (pos.getY(vi) - cp.y) * k, cp.z + (pos.getZ(vi) - cp.z) * k);
    }
    tube.computeVertexNormals();
    b.add(tube, { role: 'frond', color: C.snapFrond, emis: 0.3, sway: swayFn, pivot, motion: reach });
    // Emissive gradient toward the tip is baked by re-writing aEmis after add():
    const tipPos = [tip.x, tip.y, tip.z];
    b.add(new SphereGeometry(0.025 + sr() * 0.015, 6, 5), { role: 'tip', pos: tipPos, color: C.snapTip, emis: 1.0, opacity: 0.7, sway: 1.0, pivot, motion: reach });
    b.add(new SphereGeometry(0.06, 5, 4), { role: 'haze', pos: tipPos, color: C.snapTipGlow, sway: 1.0, pivot, motion: reach });
    fronds.push({ baseAngle, phaseOffset: fPhase, segLen, len });
  }

  const m = b.build({ root: _rootMat, body: bodyMat, frond: frondMat, tip: tipMat, haze: _hazeMat });
  // Bake the base→tip brightness gradient into the tentacle mesh (0.3 → 1.0)
  const fa = m.frond.geometry.attributes.aEmis, fs = m.frond.geometry.attributes.aSway;
  for (let i = 0; i < fa.count; i++) fa.setX(i, 0.35 + fs.getX(i) * 0.65);
  fa.needsUpdate = true;
  g.add(m.root, m.body, m.frond, m.tip, m.haze);
  g.position.set(x, 0, z); scene.add(g);

  return {
    group: g, body: m.body, bodyMat,
    tipMats: [tipMat], frondMats: [frondMat], frondBases: [0.4],
    fronds, phase, x, z, _gpu: true
  };
}

/**
 * @brief Per-frame glow for snapthorns (motion is on the GPU). Called by vegetation.js.
 * @param {Array} snapthorns
 * @param {number} dt
 * @param {number} t
 * @param {number} bioGlow
 * @param {Function} getLocalGlowFn
 * @param {number} [px] player x (for culling)
 * @param {number} [pz] player z
 */
export function updateSnapthorns(snapthorns, dt, t, bioGlow, getLocalGlowFn, px, pz) {
  for (let i = 0; i < snapthorns.length; i++) {
    const s = snapthorns[i];
    if (px !== undefined) {
      const dx = s.x - px, dz = s.z - pz;
      const d2 = dx * dx + dz * dz;
      if (d2 > 1600) { if (s.group.visible) s.group.visible = false; continue; }
      if (!s.group.visible) s.group.visible = true;
      if (d2 > 900) continue;
    }
    const localGlow = getLocalGlowFn ? getLocalGlowFn(s.x, s.z, bioGlow) : bioGlow;
    s.bodyMat.emissiveIntensity = (0.5 + Math.sin(t * 1.5 + s.phase) * 0.3) * localGlow;
    const p = Math.sin(t * 2.5 + s.phase) * 0.5 + 0.5;
    s.tipMats[0].emissiveIntensity = (0.5 + p * 0.6) * localGlow;
    const frondBody = 0.85 + Math.sin(t * 1.5 + s.phase) * 0.15;
    s.frondMats[0].emissiveIntensity = 1.6 * frondBody * localGlow;
  }
}
