import { CatmullRomCurve3, ConeGeometry, CylinderGeometry, Group, PlaneGeometry, SphereGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// LanternPod — drooping stems with hanging translucent pods. 3 meshes
// (was 25). Each pod (shell, core, cap, silk threads) swings as a pendulum
// from its stem tip on the GPU; the stems sway with height.
// ================================================================
// Legacy record: { group, podMats, phase, x, z }. podMats holds one material;
// podMeshes is gone (the pendulum is baked).

const _plantMat = roleMaterial('solid', { emissive: C.lanternHaze, emissiveIntensity: 0.05, roughness: 0.7, doubleSide: true });
const _hazeMat = roleMaterial('haze', { opacity: 0.04 });

export function makeLanternPod(x, z) {
  const g = new Group();
  const stemN = 2 + Math.floor(sr() * 3);
  const phase = sr() * 6.28;
  const b = createBaker();
  const podMat = roleMaterial('glow', { emissive: C.lanternGlow, emissiveIntensity: 0.5 + sr() * 0.3, roughness: 0.2, metalness: 0.1 });

  b.add(new SphereGeometry(0.1, 5, 4), { role: 'plant', pos: [0, 0.02, 0], scale: [1.5, 0.4, 1.5], color: 0x1a2818, emis: 0.5 });
  for (let i = 0; i < 2; i++) {
    const la = sr() * 6.28;
    b.add(new PlaneGeometry(0.1, 0.18), { role: 'plant', pos: [Math.cos(la) * 0.08, 0.08, Math.sin(la) * 0.08], rot: [-0.6, -la, 0], color: C.lanternStem, emis: 0.6, sway: 0.1 });
  }

  for (let si = 0; si < stemN; si++) {
    const stemAngle = (si / stemN) * 6.28 + sr() * 0.5, stemH = 0.8 + sr() * 0.8, stemLean = 0.3 + sr() * 0.4;
    const sway = swayByHeight(0.1, stemH, 0.3);
    const points = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10, out = stemLean * Math.sin(t * Math.PI * 0.7);
      const hh = t < 0.7 ? t / 0.7 * stemH : stemH - (t - 0.7) / 0.3 * stemH * 0.25;
      points.push(new Vector3(Math.cos(stemAngle) * out, hh, Math.sin(stemAngle) * out));
    }
    const curve = new CatmullRomCurve3(points);
    b.add(new TubeGeometry(curve, 12, 0.008 + sr() * 0.004, 4, false), { role: 'plant', color: C.lanternStem, emis: 1, sway });

    const tip = curve.getPoint(1);
    const podR = 0.06 + sr() * 0.04;
    const pivot = [tip.x, tip.y, tip.z];
    const swing = { mode: MOTION.PENDULUM, amp: 0.12 + sr() * 0.06, phase: phase + si * 1.4, speed: 0.6 + sr() * 0.3 };
    const podY = tip.y - podR * 0.3;
    const tipSway = sway(tip.x, tip.y, tip.z);
    b.add(new SphereGeometry(podR, 9, 7), { role: 'pod', pos: [tip.x, podY, tip.z], color: C.lanternPod, emis: 1.0, opacity: 0.5, sway: tipSway, pivot, motion: swing });
    b.add(new SphereGeometry(podR * 0.4, 6, 5), { role: 'pod', pos: [tip.x, podY, tip.z], color: 0xffffcc, emis: 2.0, opacity: 0.5, sway: tipSway, pivot, motion: swing });
    b.add(new SphereGeometry(podR * 2.5, 6, 4), { role: 'haze', pos: [tip.x, podY, tip.z], color: C.lanternHaze, sway: tipSway, pivot, motion: swing });
    b.add(new ConeGeometry(podR * 0.5, podR * 0.4, 5), { role: 'plant', pos: pivot, rot: [Math.PI, 0, 0], color: C.lanternStem, emis: 0.4, sway: tipSway, pivot, motion: swing });
    for (let thi = 0; thi < 2; thi++) {
      const tl = 0.04 + sr() * 0.04;
      b.add(new CylinderGeometry(0.001, 0.001, tl, 3), { role: 'pod', pos: [tip.x + (sr() - 0.5) * podR * 0.5, podY - podR - tl * 0.5, tip.z + (sr() - 0.5) * podR * 0.5], color: C.lanternGlow, emis: 0.3, opacity: 0.3, sway: tipSway, pivot, motion: swing });
    }
  }

  const m = b.build({ plant: _plantMat, pod: podMat, haze: _hazeMat });
  g.add(m.plant, m.pod, m.haze);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, podMats: [podMat], phase, x, z };
}
