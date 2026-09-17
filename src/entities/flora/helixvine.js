import { CatmullRomCurve3, CylinderGeometry, DodecahedronGeometry, Group, OctahedronGeometry, SphereGeometry, TorusGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// Helixvine — spiralling stems with geometric pods, floating rings and glow
// nodes. 4 meshes (was 21). Pods turn, rings wobble, nodes breathe, stems
// sway with height — all on the GPU.
// ================================================================
// Legacy record: { group, podMats, phase }. podMats holds ONE material now
// (all pods on a vine share it; per-pod variety comes from baked phases).

const _plantMat = roleMaterial('solid', { emissive: C.helixNode, emissiveIntensity: 0.12, roughness: 0.75 });
const _glowMat = roleMaterial('glow', { emissive: C.helixPodGlow, emissiveIntensity: 0.3, roughness: 0.3 });
const _hazeMat = roleMaterial('haze', { opacity: 0.05 });

export function makeHelixvine(x, z) {
  const g = new Group();
  const phase = sr() * 6.28;
  const stemCount = 2 + Math.floor(sr() * 2);
  const b = createBaker();
  const podMat = roleMaterial('glow', { emissive: C.helixPodGlow, emissiveIntensity: 0.5 + sr() * 0.3, roughness: 0.2, metalness: 0.2 });

  b.add(new SphereGeometry(0.18, 8, 6), { role: 'plant', pos: [0, 0.05, 0], scale: [1.2, 0.5, 1.2], color: 0x1a1830, emis: 0.8 });

  let maxH = 1.5;
  for (let si = 0; si < stemCount; si++) {
    const stemH = 1.5 + sr() * 1.0;
    if (stemH > maxH) maxH = stemH;
    const spiralR = 0.15 + sr() * 0.15, turns = 1.5 + sr() * 1.5, stemPhase = sr() * 6.28;
    const sway = swayByHeight(0.1, stemH, 0.3);
    const points = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16, a = stemPhase + t * turns * 6.28, r = spiralR * (0.3 + t * 0.7);
      points.push(new Vector3(Math.cos(a) * r, t * stemH, Math.sin(a) * r));
    }
    const curve = new CatmullRomCurve3(points);
    b.add(new TubeGeometry(curve, 20, 0.025 + sr() * 0.01, 5, false), { role: 'plant', color: C.helixStem, emis: 1.0, sway });

    // Pod at the tip — turns slowly
    const podR = 0.1 + sr() * 0.08;
    const tip = curve.getPoint(1);
    const podGeo = sr() < 0.5 ? new OctahedronGeometry(podR, 0) : new DodecahedronGeometry(podR, 0);
    const tipArr = [tip.x, tip.y, tip.z];
    b.add(podGeo, { role: 'pod', pos: tipArr, rot: [sr() * 3, sr() * 3, sr() * 3], color: C.helixPod, emis: 1.0, opacity: 0.65, sway, pivot: tipArr, motion: { mode: MOTION.SPIN, speed: 0.3 + sr() * 0.3, phase: sr() * 6.28 } });
    b.add(new SphereGeometry(podR * 2.5, 6, 4), { role: 'haze', pos: tipArr, color: C.helixPodGlow, sway, pivot: tipArr, motion: { mode: MOTION.BREATHE, amp: 0.1, phase: sr() * 6.28, speed: 1.1 } });

    // Rings — wobble like they are floating
    const ringN = 1 + Math.floor(sr() * 2);
    for (let ri = 0; ri < ringN; ri++) {
      const rp = curve.getPoint(0.3 + sr() * 0.5);
      const rpa = [rp.x, rp.y, rp.z];
      b.add(new TorusGeometry(0.1 + sr() * 0.08, 0.008, 6, 14), { role: 'glow', pos: rpa, rot: [sr() * 3, sr() * 3, sr() * 3], color: C.helixRing, emis: 0.7, opacity: 0.45, sway, pivot: rpa, motion: { mode: MOTION.PENDULUM, amp: 0.25, phase: sr() * 6.28, speed: 0.5 + sr() * 0.3 } });
    }
    // Glow nodes — breathe
    const nodeN = 2 + Math.floor(sr() * 2);
    for (let ni = 0; ni < nodeN; ni++) {
      const np = curve.getPoint(0.2 + (ni / nodeN) * 0.6);
      const npa = [np.x, np.y, np.z];
      b.add(new SphereGeometry(0.025 + sr() * 0.015, 6, 5), { role: 'glow', pos: npa, color: C.helixNode, emis: 1.2, opacity: 0.5, sway, pivot: npa, motion: { mode: MOTION.BREATHE, amp: 0.2, phase: sr() * 6.28, speed: 1.4 + sr() * 0.6 } });
    }
  }
  // Tendrils
  const tendrilN = 2 + Math.floor(sr() * 2);
  for (let ti = 0; ti < tendrilN; ti++) {
    const ta = (ti / tendrilN) * 6.28 + sr() * 0.5, tLen = 0.3 + sr() * 0.4;
    b.add(new CylinderGeometry(0.006, 0.015, tLen, 3), { role: 'plant', pos: [Math.cos(ta) * 0.12, tLen * 0.3, Math.sin(ta) * 0.12], rot: [0, ta, (ta < 3.14 ? 0.8 : -0.8) + sr() * 0.3], color: C.helixStem, emis: 0.5, sway: 0.15 });
  }

  const m = b.build({ plant: _plantMat, glow: _glowMat, pod: podMat, haze: _hazeMat });
  g.add(m.plant, m.glow, m.pod, m.haze);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, podMats: [podMat], phase, x, z };
}
