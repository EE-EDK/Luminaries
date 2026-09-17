// --- Golden Orb (quest item — baked, 6 meshes; was 35) ---
// FIELD REPORT (Dr. R. Vasquez, final entry):
//   Five of them. Always five. Placed at positions that look random
//   until you map them — then you see the pentagonal symmetry. They
//   pulse at 0.8 Hz, exactly matching human resting heart rate.
//   Coincidence? I stopped believing in coincidence on day 3.
//   The forest put them here for someone to find. I just don't think
//   that someone was us.
//
// Core, glow shell and haze keep their own materials (questVisuals.js
// drives colour and opacity). Seed, wireframe star, corona rays, sparkle
// ring, runes, sacred arcs, orbit trail, pulse ring, facet sparkles and the
// ground disc are merged into three unlit meshes with baked orbit / spin.
// The old `group.children[3..8]` sparkle loop in questVisuals.js is skipped
// for `_gpu` orbs.
import { CircleGeometry, ConeGeometry, Group, IcosahedronGeometry, Mesh, MeshBasicMaterial, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

export function makeOrb(x, z) {
  const g = new Group();
  const phase = sr() * 6.28;
  const coreMat = new MeshBasicMaterial({ color: C.orbGold });
  g.add(new Mesh(new SphereGeometry(0.2, 12, 9), coreMat));
  const glowMat = new MeshBasicMaterial({ color: C.orbGlow, transparent: true, opacity: 0.5, depthWrite: false });
  g.add(new Mesh(new SphereGeometry(0.35, 10, 7), glowMat));
  const hazeMat = new MeshBasicMaterial({ color: C.orbInner, transparent: true, opacity: 0.15, depthWrite: false });
  g.add(new Mesh(new SphereGeometry(0.6, 10, 6), hazeMat));

  const b = createBaker();
  // Bright seed + wireframe star (wireframe needs its own material)
  b.add(new SphereGeometry(0.06, 6, 4), { role: 'bright', color: 0xffffff });
  const star = new Mesh(new IcosahedronGeometry(0.15, 0), new MeshBasicMaterial({ color: C.skyStarWarm, transparent: true, opacity: 0.4, wireframe: true, depthWrite: false }));
  g.add(star);
  // Corona rays
  for (let ri = 0; ri < 8; ri++) {
    const ra = (ri / 8) * 6.28;
    b.add(new ConeGeometry(0.02, 0.25, 3), { role: 'soft', pos: [Math.cos(ra) * 0.3, Math.sin(ra * 2) * 0.05, Math.sin(ra) * 0.3], rot: [0, ra, -ra + Math.PI / 2], color: C.orbGlow, opacity: 0.3, pivot: [0, 0, 0], motion: { mode: MOTION.SPIN, phase, speed: 0.35 } });
  }
  // Sparkle ring — six bright dots orbiting at 1.5 rad/s (was questVisuals CPU)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * 6.28;
    b.add(new SphereGeometry(0.03, 5, 4), { role: 'bright', pos: [Math.cos(a) * 0.4, Math.sin(a * 2) * 0.1, Math.sin(a) * 0.4], color: C.white, pivot: [0, 0, 0], motion: { mode: MOTION.ORBIT, amp: 0.1, phase, speed: 1.5 } });
  }
  for (let di = 0; di < 4; di++) {
    const da = (di / 4) * 6.28 + 0.4;
    b.add(new SphereGeometry(0.015, 4, 3), { role: 'soft', pos: [Math.cos(da) * 0.5, 0, Math.sin(da) * 0.5], color: C.orbGold, opacity: 0.7, pivot: [0, 0, 0], motion: { mode: MOTION.SPIN, phase, speed: -0.5 } });
  }
  for (let sgi = 0; sgi < 3; sgi++) {
    b.add(new TorusGeometry(0.28, 0.003, 4, 14), { role: 'soft', rot: [sgi * 1.05, sgi * 0.7, 0], color: C.skyStarWarm, opacity: 0.12, motion: { mode: MOTION.PENDULUM, amp: 0.5, phase: sgi * 2.1, speed: 0.4 } });
  }
  b.add(new TorusGeometry(0.4, 0.004, 4, 18), { role: 'soft', rot: [Math.PI / 2, 0, 0], color: C.orbGlow, opacity: 0.08 });
  b.add(new TorusGeometry(0.25, 0.012, 4, 12), { role: 'soft', rot: [Math.PI / 2, 0, 0], color: C.orbInner, opacity: 0.15, motion: { mode: MOTION.BREATHE, amp: 0.12, phase, speed: 5.0 } });
  for (let fci = 0; fci < 6; fci++) {
    const fca = sr() * 6.28, fce = sr() * Math.PI - Math.PI / 2;
    b.add(new SphereGeometry(0.008, 3, 3), { role: 'bright', pos: [Math.cos(fca) * Math.cos(fce) * 0.2, Math.sin(fce) * 0.2, Math.sin(fca) * Math.cos(fce) * 0.2], color: C.white, opacity: 0.5, motion: { mode: MOTION.FLICKER, phase: fci * 1.3, speed: 4 } });
  }
  b.add(new CircleGeometry(0.5, 10), { role: 'ground', pos: [0, -0.95, 0], rot: [-Math.PI / 2, 0, 0], color: C.orbGlow, opacity: 0.1, motion: { mode: MOTION.BREATHE, amp: 0.1, phase, speed: 2.5 }, pivot: [0, -0.95, 0] });

  const m = b.build({
    bright: roleMaterial('basic', { depthWrite: false }),
    soft: roleMaterial('basic', { depthWrite: false }),
    ground: roleMaterial('basic', { doubleSide: true, depthWrite: false })
  });
  g.add(m.bright, m.soft, m.ground);

  g.position.set(x, 1.0, z);
  scene.add(g);
  return {
    group: g, coreMat, glowMat, hazeMat,
    x, z, found: false, flyUp: false, flyY: 1.0, phase,
    laserLine: null, laserMat: null, _gpu: true
  };
}
