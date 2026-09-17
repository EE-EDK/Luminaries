import { CatmullRomCurve3, CylinderGeometry, Group, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// OrbBush — woody branches with leaves and pink orbs on filaments. 3 meshes
// (was 45). Orbs bob and twinkle at their own phases, leaves flutter.
// ================================================================
// Legacy record: { group, orbMats, phase, x, z }. orbMats holds one material.

const _bushMat = roleMaterial('solid', { emissive: 0x0a1a0a, emissiveIntensity: 0.06, roughness: 0.85, doubleSide: true });
const _hazeMat = roleMaterial('haze', { opacity: 0.03 });

export function makeOrbBush(x, z) {
  const g = new Group();
  const bushR = 0.3 + sr() * 0.15, bushH = 0.3 + sr() * 0.2;
  const phase = sr() * 6.28;
  const b = createBaker();
  const orbMat = roleMaterial('glow', { emissive: C.orbBushGlow, emissiveIntensity: 0.5 + sr() * 0.3, roughness: 0.2 });
  const sway = swayByHeight(0, bushH + 0.5, 0.35);

  const branchN = 3 + Math.floor(sr() * 2);
  for (let bi = 0; bi < branchN; bi++) {
    const ba = (bi / branchN) * 6.28 + sr() * 0.8, bLen = bushR * (0.7 + sr() * 0.5), bH = bushH * (0.6 + sr() * 0.4);
    const pts = [];
    for (let pi = 0; pi <= 4; pi++) {
      const t = pi / 4, out = bLen * Math.sin(t * Math.PI * 0.6), hh = t * bH * 0.8 + Math.sin(t * Math.PI) * bH * 0.3;
      pts.push(new Vector3(Math.cos(ba) * out, hh, Math.sin(ba) * out));
    }
    const curve = new CatmullRomCurve3(pts);
    b.add(new TubeGeometry(curve, 8, 0.012, 4, false), { role: 'bush', color: 0x2a1e14, emis: 0.6, sway });
    const leafTs = [0.4, 0.7, 0.95];
    for (let li = 0; li < leafTs.length; li++) {
      if (li === 2 && sr() < 0.3) continue;
      const lp = curve.getPoint(leafTs[li]), lt = curve.getTangent(leafTs[li]);
      const ls = 0.05 + sr() * 0.04;
      const lpa = [lp.x, lp.y, lp.z];
      b.add(new PlaneGeometry(ls, ls * 1.4), { role: 'bush', pos: lpa, rot: [-0.3 - sr() * 0.5, Math.atan2(lt.x, lt.z) + (sr() - 0.5) * 0.6, (sr() - 0.5) * 0.3], color: C.orbBushLeaf, emis: 1, sway, pivot: lpa, motion: { mode: MOTION.FLUTTER, amp: 0.1, phase: sr() * 6.28, speed: 1.5 + sr() } });
    }
  }
  for (let i = 0; i < 3 + Math.floor(sr() * 2); i++) {
    const la = sr() * 6.28, lr = bushR * 0.4 + sr() * bushR * 0.3;
    b.add(new PlaneGeometry(0.07, 0.1), { role: 'bush', pos: [Math.cos(la) * lr, bushH * 0.15 + sr() * 0.08, Math.sin(la) * lr], rot: [-0.8 - sr() * 0.4, -la, sr() * 0.3], color: C.orbBushLeaf, emis: 1, sway });
  }

  const orbN = 6 + Math.floor(sr() * 5);
  for (let i = 0; i < orbN; i++) {
    const oa = sr() * 6.28, od = sr() * bushR * 0.7, oh = bushH + 0.15 + sr() * 0.3, orbSize = 0.02 + sr() * 0.015;
    const fH = oh - bushH * 0.3;
    const ox = Math.cos(oa) * od, oz = Math.sin(oa) * od;
    b.add(new CylinderGeometry(0.003, 0.005, fH, 3), { role: 'bush', pos: [ox, bushH * 0.3 + fH / 2, oz], rot: [(sr() - 0.5) * 0.3, 0, (sr() - 0.5) * 0.3], color: C.orbBushStem, emis: 0.8, sway });
    const opos = [ox + (sr() - 0.5) * 0.03, oh, oz + (sr() - 0.5) * 0.03];
    const bob = { mode: MOTION.BOB, amp: 0.012, phase: phase + i * 1.3, speed: 2.0 };
    b.add(new SphereGeometry(orbSize, 6, 5), { role: 'orb', pos: opos, color: C.orbBushOrb, emis: 0.8 + sr() * 0.4, opacity: 0.7, sway, motion: bob });
    b.add(new SphereGeometry(orbSize * 2.5, 5, 4), { role: 'haze', pos: opos, color: C.orbBushGlow, sway, motion: bob });
  }
  for (let i = 0; i < 3; i++) {
    const da = sr() * 6.28, dd = bushR + sr() * 0.1;
    b.add(new SphereGeometry(0.015, 3, 3), { role: 'bush', pos: [Math.cos(da) * dd, 0.01, Math.sin(da) * dd], scale: [1, 0.4, 1], color: 0x1a2018, emis: 0 });
  }

  const m = b.build({ bush: _bushMat, orb: orbMat, haze: _hazeMat });
  g.add(m.bush, m.orb, m.haze);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, orbMats: [orbMat], phase, x, z };
}
