import { CatmullRomCurve3, Group, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

// ================================================================
// VeilMoss — hanging curtain moss on curved trunks with branching arms.
// 2 meshes (was 30). Curtains ripple from their hang point down (GPU wave
// weighted by depth), edge dots twinkle, drips bob.
// ================================================================
// Legacy record: { group, veilMat, veilMats, veilRefs, phase, x, z }.
// veilMats / veilRefs are empty arrays — the curtain motion is baked.

const _woodMat = roleMaterial('solid', { emissive: 0x0a0a08, emissiveIntensity: 0.03, roughness: 0.85 });

export function makeVeilMoss(x, z) {
  const g = new Group();
  const supportN = 1 + Math.floor(sr() * 2);
  const phase = sr() * 6.28;
  const b = createBaker();
  const veilMat = roleMaterial('glow', { emissive: C.veilGlow, emissiveIntensity: 0.15, roughness: 0.6, doubleSide: true });

  for (let si = 0; si < supportN; si++) {
    const sx = (si - (supportN - 1) * 0.5) * 0.3, supportH = 1.0 + sr() * 0.8;
    const leanDir = sr() * 6.28, leanAmt = 0.05 + sr() * 0.08;
    const trunkPts = [];
    for (let pi = 0; pi <= 5; pi++) {
      const t = pi / 5, sC = Math.sin(t * Math.PI) * leanAmt * (t < 0.5 ? 1 : -0.4);
      trunkPts.push(new Vector3(sx + Math.cos(leanDir) * sC, t * supportH, Math.sin(leanDir) * sC));
    }
    const trunkCurve = new CatmullRomCurve3(trunkPts);
    b.add(new TubeGeometry(trunkCurve, 10, 0.02, 5, false), { role: 'wood', color: C.veilSupport, emis: 1 });

    const armN = 2 + Math.floor(sr() * 2);
    const armTips = [];
    for (let ai = 0; ai < armN; ai++) {
      const origin = trunkCurve.getPoint(0.6 + sr() * 0.2), armAngle = (ai / armN) * 6.28 + sr() * 1.0, armLen = 0.15 + sr() * 0.12;
      const armPts = [];
      for (let api = 0; api <= 3; api++) {
        const at = api / 3;
        armPts.push(new Vector3(origin.x + Math.cos(armAngle) * armLen * at, origin.y - at * at * 0.05 + at * 0.02, origin.z + Math.sin(armAngle) * armLen * at));
      }
      const armCurve = new CatmullRomCurve3(armPts);
      b.add(new TubeGeometry(armCurve, 6, 0.01, 4, false), { role: 'wood', color: C.veilSupport, emis: 1 });
      armTips.push(armCurve.getPoint(1));
    }

    const veilN = Math.min(armTips.length + Math.floor(sr() * 2), armTips.length + 2);
    for (let vi = 0; vi < veilN; vi++) {
      const hang = armTips[vi % armTips.length];
      const veilW = 0.08 + sr() * 0.06, veilH = supportH * (0.3 + sr() * 0.4);
      const vx = hang.x + (vi >= armTips.length ? (sr() - 0.5) * 0.06 : 0), vz = hang.z + (sr() - 0.5) * 0.05;
      const topY = hang.y;
      const ripple = { mode: MOTION.WAVE, amp: 0.05 + sr() * 0.03, phase: phase + vi * 0.7, speed: 0.8 + sr() * 0.4 };
      const depth = (px, py) => Math.min(1, Math.max(0, (topY - py) / veilH));
      // Curtain: tall plane with a few horizontal segments so the wave bends it
      b.add(new PlaneGeometry(veilW, veilH, 1, 6), { role: 'veil', pos: [vx, topY - veilH * 0.5, vz], rot: [0, (sr() - 0.5) * 0.4, 0], color: C.veilMoss, emis: 0.8 + sr() * 0.5, opacity: 0.25 + sr() * 0.15, sway: depth, motion: ripple });
      const dotN = 2 + Math.floor(sr() * 2);
      for (let di = 0; di < dotN; di++) {
        b.add(new SphereGeometry(0.006, 3, 3), { role: 'veil', pos: [vx + (sr() - 0.5) * veilW * 0.8, topY - veilH + sr() * veilH * 0.15, vz + (sr() - 0.5) * 0.04], color: C.veilEdge, emis: 2.5, opacity: 0.6, sway: 1.0, motion: ripple });
      }
    }
    for (let li = 0; li < 3; li++) {
      const lp = trunkCurve.getPoint(0.2 + sr() * 0.5), la = sr() * 6.28;
      b.add(new SphereGeometry(0.015 + sr() * 0.01, 4, 3), { role: 'veil', pos: [lp.x + Math.cos(la) * 0.025, lp.y, lp.z + Math.sin(la) * 0.025], scale: [1.5, 0.5, 1], color: C.veilMoss, emis: 0.5, opacity: 0.4 });
    }
  }
  for (let dri = 0; dri < 3; dri++) {
    b.add(new SphereGeometry(0.005, 3, 3), { role: 'veil', pos: [(sr() - 0.5) * 0.3, 0.15 + sr() * 0.3, (sr() - 0.5) * 0.06], color: C.veilEdge, emis: 1.0, opacity: 0.5, motion: { mode: MOTION.BOB, amp: 0.02, phase: sr() * 6.28, speed: 1.5 } });
  }
  b.add(new SphereGeometry(0.12, 5, 4), { role: 'wood', pos: [0, 0.02, 0], scale: [1.5, 0.3, 1.5], color: 0x2a3a28, emis: 0.5 });

  const m = b.build({ wood: _woodMat, veil: veilMat });
  g.add(m.wood, m.veil);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, veilMat, veilMats: [], veilRefs: [], phase, x, z };
}
