import { CatmullRomCurve3, CylinderGeometry, Group, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// SpiralFrond — corkscrew fronds with bioluminescent tips. 4 meshes (was 35).
// Fronds sway with height, leaflets flutter, tips bob and twinkle — GPU.
// ================================================================
// Legacy record: { group, tipMats, bodyMat, bodyBase, phase, x, z }.
// tipMats holds one material; leafletMat / leafMat / tipMeshes are gone (the
// leaflets and rosette leaves are baked into the body mesh at 0.67× / 0.5×).

const _stemMat = roleMaterial('solid', { emissive: C.spiralFrond, emissiveIntensity: 0.06, roughness: 0.7 });
const _hazeMat = roleMaterial('haze', { opacity: 0.04 });

export function makeSpiralFrond(x, z) {
  const g = new Group();
  const h = 1.2 + sr() * 0.8;
  const frondN = 3 + Math.floor(sr() * 3);
  const phase = sr() * 6.28;
  const b = createBaker();
  const bodyMat = roleMaterial('solid', { emissive: C.spiralGlow, emissiveIntensity: 0.12, roughness: 0.5, doubleSide: true });
  const tipMat = roleMaterial('glow', { emissive: C.spiralGlow, emissiveIntensity: 0.6, roughness: 0.3 });
  const sway = swayByHeight(0.1, h, 0.4);

  b.add(new CylinderGeometry(0.02, 0.05, h, 5), { role: 'stem', pos: [0, h / 2, 0], color: C.spiralStem, emis: 1, sway });
  for (let i = 0; i < 3; i++) {
    const la = sr() * 6.28;
    b.add(new PlaneGeometry(0.12, 0.2), { role: 'body', pos: [Math.cos(la) * 0.1, h * 0.12, Math.sin(la) * 0.1], rot: [-0.7, -la, 0], color: 0x1a4430, emis: 0.5, sway });
  }

  for (let fi = 0; fi < frondN; fi++) {
    const baseAngle = (fi / frondN) * 6.28 + sr() * 0.4;
    const spiralH = h * (0.5 + sr() * 0.35), spiralR = 0.15 + sr() * 0.15, turns = 1.0 + sr() * 1.5;
    const points = [];
    for (let i = 0; i <= 14; i++) {
      const t = i / 14, a = baseAngle + t * turns * 6.28, r = spiralR * (0.2 + t * 0.8);
      points.push(new Vector3(Math.cos(a) * r, h * 0.25 + t * spiralH, Math.sin(a) * r));
    }
    const curve = new CatmullRomCurve3(points);
    b.add(new TubeGeometry(curve, 16, 0.012 + sr() * 0.006, 4, false), { role: 'body', color: C.spiralFrond, emis: 1.0, sway });
    const leafletN = 3 + Math.floor(sr() * 2);
    for (let li = 0; li < leafletN; li++) {
      const lp = curve.getPoint(0.2 + (li / leafletN) * 0.6);
      const lpa = [lp.x, lp.y, lp.z];
      b.add(new PlaneGeometry(0.04, 0.06), { role: 'body', pos: lpa, rot: [sr() * 1.5, sr() * 3, sr() * 1.5], color: C.spiralFrond, emis: 0.67, sway, pivot: lpa, motion: { mode: MOTION.FLUTTER, amp: 0.15, phase: sr() * 6.28, speed: 1.8 + sr() } });
    }
    const tip = curve.getPoint(1);
    const tpa = [tip.x, tip.y, tip.z];
    const bob = { mode: MOTION.BOB, amp: 0.03, phase: phase + fi * 1.8, speed: 1.5 };
    b.add(new SphereGeometry(0.025 + sr() * 0.015, 6, 5), { role: 'tip', pos: tpa, color: C.spiralTip, emis: 1.0, opacity: 0.7, sway, motion: bob });
    b.add(new SphereGeometry(0.07, 5, 4), { role: 'haze', pos: tpa, color: C.spiralGlow, sway, motion: bob });
  }
  for (let i = 0; i < 3; i++) {
    const ra = (i / 3) * 6.28 + sr() * 0.5;
    b.add(new CylinderGeometry(0.006, 0.018, 0.15 + sr() * 0.1, 3), { role: 'stem', pos: [Math.cos(ra) * 0.06, 0.04, Math.sin(ra) * 0.06], rot: [0, ra, (ra < 3.14 ? 0.8 : -0.8)], color: 0x1a2830, emis: 0.5 });
  }

  const m = b.build({ stem: _stemMat, body: bodyMat, tip: tipMat, haze: _hazeMat });
  g.add(m.stem, m.body, m.tip, m.haze);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, tipMats: [tipMat], bodyMat, bodyBase: 0.12, phase, x, z, _gpu: true };
}
