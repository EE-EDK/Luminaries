import { ConeGeometry, CylinderGeometry, Group, PlaneGeometry, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, swayByHeight, MOTION } from '../_bake.js';

// ================================================================
// CorpseBloom — corpse-flower analogue: dark spathe, glowing spadix column,
// orbiting flies. 4 meshes (was 18). Flies orbit on the GPU, the spathe
// breathes, the stem sways.
// ================================================================
// SPECIMEN NOTES (Dr. R. Vasquez):
//   Amorphophallus nocturnum — closest Earth analogue, but the
//   similarities end at morphology. These bloom in sync with the
//   deep night phase to within 0.3 seconds. No chemical trigger
//   detected. They just... know. The flies orbiting them aren't
//   feeding. They're listening.
//
// Legacy record: { group, columnMat, hazeMat, flies, spadixY, phase, x, z }.
// `flies` is an empty array — their orbit is baked (vegetation.js guards on length).

const _plantMat = roleMaterial('solid', { emissive: 0x0a1a0a, emissiveIntensity: 0.05, roughness: 0.75, doubleSide: true });
const _spatheMat = roleMaterial('glow', { emissive: 0x220a10, emissiveIntensity: 0.08, roughness: 0.5, doubleSide: true });

export function makeCorpseBloom(x, z) {
  const g = new Group();
  const h = 1.5 + sr() * 1.0;
  const spadixH = h * 0.7, spatheW = 0.4 + sr() * 0.2;
  const phase = sr() * 6.28;
  const sway = swayByHeight(0.2, h, 0.25);
  const b = createBaker();
  const columnMat = roleMaterial('glow', { emissive: C.corpseGlow, emissiveIntensity: 0.5, roughness: 0.3 });
  const hazeMat = roleMaterial('haze', { opacity: 0.04 });
  const spatheC = [0, h * 0.55, 0];

  b.add(new CylinderGeometry(0.06, 0.1, h * 0.5, 6), { role: 'plant', pos: [0, h * 0.25, 0], color: C.corpseLeaf, emis: 1, sway });
  b.add(new ConeGeometry(spatheW, h * 0.5, 10, 1, true), { role: 'spathe', pos: spatheC, color: C.corpseSpathe, emis: 1, opacity: 0.85, sway, pivot: spatheC, motion: { mode: MOTION.BREATHE, amp: 0.03, phase, speed: 0.6 } });
  b.add(new TorusGeometry(spatheW * 0.95, 0.02, 6, 14), { role: 'spathe', pos: [0, h * 0.8, 0], rot: [Math.PI / 2, 0, 0], color: C.corpseSpathe, emis: 1.3, opacity: 1, sway, pivot: spatheC, motion: { mode: MOTION.BREATHE, amp: 0.03, phase, speed: 0.6 } });
  // Spadix column + nodules + haze
  b.add(new CylinderGeometry(0.03, 0.06, spadixH, 6), { role: 'column', pos: [0, h * 0.4 + spadixH * 0.5, 0], color: C.corpseColumn, emis: 1, opacity: 0.8, sway });
  for (let i = 0; i < 5; i++) {
    const na = sr() * 6.28, ny = h * 0.45 + sr() * spadixH * 0.6;
    b.add(new SphereGeometry(0.01, 4, 3), { role: 'column', pos: [Math.cos(na) * 0.05, ny, Math.sin(na) * 0.05], color: C.corpseGlow, emis: 0.6, opacity: 1, sway });
  }
  b.add(new SphereGeometry(spatheW * 1.2, 6, 4), { role: 'haze', pos: [0, h * 0.65, 0], color: C.corpseGlow, sway });
  // Flies — orbit the spadix at their own speeds and radii
  const flyN = 3 + Math.floor(sr() * 3);
  const spadixY = h * 0.7;
  for (let i = 0; i < flyN; i++) {
    const r = 0.15 + sr() * 0.12, a = sr() * 6.28, fy = spadixY + (sr() - 0.5) * 0.3;
    b.add(new SphereGeometry(0.008, 3, 3), { role: 'column', pos: [Math.cos(a) * r, fy, Math.sin(a) * r], color: 0x111111, emis: 0, opacity: 0.8, pivot: [0, fy, 0], motion: { mode: MOTION.ORBIT, amp: 0.08, phase: sr() * 6.28, speed: 2 + sr() * 1.5 } });
  }
  // Base leaves + mound
  const leafN = 2 + Math.floor(sr() * 2);
  for (let i = 0; i < leafN; i++) {
    const la = (i / leafN) * 6.28 + sr() * 0.5;
    b.add(new PlaneGeometry(0.25 + sr() * 0.1, 0.35 + sr() * 0.1), { role: 'plant', pos: [Math.cos(la) * 0.18, h * 0.15, Math.sin(la) * 0.18], rot: [-0.6 - sr() * 0.3, -la, 0], color: C.corpseLeaf, emis: 0.8, sway: 0.15 });
  }
  b.add(new SphereGeometry(0.15, 6, 4), { role: 'plant', pos: [0, 0.03, 0], scale: [1.5, 0.4, 1.5], color: 0x1a2818, emis: 0.5 });

  const m = b.build({ plant: _plantMat, spathe: _spatheMat, column: columnMat, haze: hazeMat });
  g.add(m.plant, m.spathe, m.column, m.haze);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, columnMat, hazeMat, flies: [], spadixY, phase, x, z };
}
