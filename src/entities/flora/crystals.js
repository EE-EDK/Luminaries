import { CircleGeometry, CylinderGeometry, Group, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

// ================================================================
// Crystals — CRYSTAL_N formations, 3 meshes each (was 30)
// ================================================================
// Main spire + three shards share one per-crystal material so
// crystalVisuals.js can drive the glow; base rocks and stains share one
// module material; veins, motes, filaments, inclusions, prism halo and the
// ground stain are one unlit mesh whose motes twinkle and whose halo turns.
// Proximity PointLights are pooled in core/lighting.js (light budget).

const _rockMat = roleMaterial('solid', { roughness: 0.9, metalness: 0.1 });
const _sparkMat = roleMaterial('basic', { doubleSide: true });

export function makeCrystal(x, z) {
  const g = new Group();
  const phase = sr() * 6.28;
  const b = createBaker();
  const cMat = roleMaterial('glow', { emissive: C.crystalCore, emissiveIntensity: 1.5, roughness: 0.1, metalness: 0.5, opacity: 0.7 });

  // Spire + shards (shared per-crystal material → one mesh)
  b.add(GEO.crystal, { role: 'crystal', pos: [0, 0.9, 0], color: C.crystal, emis: 1.0 });
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * 6.28 + sr() * 0.5;
    b.add(GEO.crystalSm, { role: 'crystal', pos: [Math.cos(a) * 0.4, 0.45, Math.sin(a) * 0.4], rot: [0, 0, (sr() - 0.5) * 0.8], color: C.crystal, emis: 0.9 });
  }
  // Micro shards on the base rocks
  for (let sci = 0; sci < 4; sci++) {
    const sa = sr() * 6.28, sd = 0.3 + sr() * 0.3;
    b.add(new CylinderGeometry(0, 0.015, 0.12 + sr() * 0.1, 3), { role: 'crystal', pos: [Math.cos(sa) * sd, 0.06 + sr() * 0.1, Math.sin(sa) * sd], rot: [0, 0, (sr() - 0.5) * 0.6], color: C.crystal, emis: 0.55, opacity: 0.7 });
  }
  // Inclusions inside the spire (darker, faint)
  for (let ii = 0; ii < 4; ii++) {
    b.add(new SphereGeometry(0.02 + sr() * 0.02, 3, 3), { role: 'crystal', pos: [(sr() - 0.5) * 0.15, 0.4 + sr() * 0.6, (sr() - 0.5) * 0.15], color: 0x115544, emis: 0.2, opacity: 0.35 });
  }

  // Base rock cluster + mineral stains
  const rockN = 3 + Math.floor(sr() * 3);
  for (let ri = 0; ri < rockN; ri++) {
    const ra = sr() * 6.28, rd = 0.2 + sr() * 0.5, rSz = 0.08 + sr() * 0.12;
    b.add(new SphereGeometry(rSz, 5, 4), { role: 'rock', pos: [Math.cos(ra) * rd, rSz * 0.3, Math.sin(ra) * rd], rot: [sr(), sr(), sr()], scale: [1 + sr() * 0.5, 0.5 + sr() * 0.4, 1 + sr() * 0.5], color: 0x1a1a22 });
  }
  for (let sti = 0; sti < 2; sti++) {
    const sta = sr() * 6.28, std = 0.2 + sr() * 0.3;
    b.add(new CircleGeometry(0.04 + sr() * 0.03, 5), { role: 'rock', pos: [Math.cos(sta) * std, 0.05, Math.sin(sta) * std], rot: [-Math.PI / 2 + sr() * 0.4, 0, 0], color: 0x335566 });
  }

  // Fracture veins (flicker), motes (bob + twinkle), filaments, prism halo (spin), ground stain
  for (let vi = 0; vi < 3; vi++) {
    b.add(new CylinderGeometry(0.008, 0.008, 0.4 + sr() * 0.8, 3), {
      role: 'spark', pos: [(sr() - 0.5) * 0.15, 0.5 + sr() * 0.7, (sr() - 0.5) * 0.15], rot: [(sr() - 0.5) * 0.8, (sr() - 0.5) * 0.5, (sr() - 0.5) * 0.8],
      color: C.crystalCore, opacity: 0.5, motion: { mode: MOTION.FLICKER, phase: sr() * 6.28, speed: 3 + sr() * 3 }
    });
  }
  for (let mi = 0; mi < 6; mi++) {
    b.add(new SphereGeometry(0.012, 3, 3), {
      role: 'spark', pos: [(sr() - 0.5) * 1.0, 0.3 + sr() * 1.5, (sr() - 0.5) * 1.0], color: 0xaaffee, opacity: 0.6,
      motion: { mode: MOTION.BOB, amp: 0.04 + sr() * 0.05, phase: sr() * 6.28, speed: 0.6 + sr() * 0.6 }
    });
  }
  for (let fli = 0; fli < 2; fli++) {
    b.add(new CylinderGeometry(0.003, 0.003, 0.6 + sr() * 0.4, 3), { role: 'spark', pos: [(sr() - 0.5) * 0.3, 0.7 + sr() * 0.5, (sr() - 0.5) * 0.3], rot: [(sr() - 0.5) * 1.0, sr(), (sr() - 0.5) * 1.0], color: C.crystalCore, opacity: 0.2 });
  }
  b.add(new TorusGeometry(0.35, 0.02, 4, 12), { role: 'spark', pos: [0, 0.6, 0], rot: [Math.PI / 2 + sr() * 0.3, 0, 0], color: 0xaaffee, opacity: 0.08, pivot: [0, 0.6, 0], motion: { mode: MOTION.SPIN, speed: 0.25 + sr() * 0.2, phase } });
  b.add(new CircleGeometry(0.8, 10), { role: 'spark', pos: [0, 0.01, 0], rot: [-Math.PI / 2, 0, 0], color: C.crystal, opacity: 0.06 });

  const m = b.build({ crystal: cMat, rock: _rockMat, spark: _sparkMat });
  m.crystal.castShadow = true;
  g.add(m.crystal, m.rock, m.spark);
  g.position.set(x, 0, z); scene.add(g);
  return { group: g, mat: cMat, phase, x, z };
}
