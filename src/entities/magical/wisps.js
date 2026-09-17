// --- Will-o'-Wisp (luminous companion — baked, 6 meshes; was 21) ---
// PERSONAL LOG (unnamed researcher):
//   The wisps move with apparent intention. They orbit points of
//   interest. I've started following them, and they seem to know —
//   they slow down when I fall behind. Today one hovered at my
//   tent entrance for three minutes before drifting toward the
//   eastern grove. I found a crystal formation I'd missed for weeks.
//
// Core, wireframe facet, glow shell and haze stay as single meshes (the
// updater drives their opacity / spin). The two halos are one mesh that
// turns on the GPU; the sparkle orbiter, ember trail, plasma tendrils,
// flicker spots and spark chain are one unlit mesh with baked motion.
import { CylinderGeometry, Group, IcosahedronGeometry, Mesh, MeshBasicMaterial, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

export function makeWisp(x, y, z) {
  const g = new Group();
  const phase = sr() * 6.28;

  const core = new Mesh(new SphereGeometry(0.08, 8, 6), new MeshBasicMaterial({ color: C.wispCore }));
  g.add(core);
  const facet = new Mesh(new IcosahedronGeometry(0.06, 0), new MeshBasicMaterial({ color: C.white, transparent: true, opacity: 0.7, wireframe: true, depthWrite: false }));
  g.add(facet);
  const glowMat = new MeshBasicMaterial({ color: C.wispGlow, transparent: true, opacity: 0.5, depthWrite: false });
  g.add(new Mesh(new SphereGeometry(0.18, 8, 6), glowMat));
  const hazeMat = new MeshBasicMaterial({ color: C.wispTrail, transparent: true, opacity: 0.15, depthWrite: false });
  g.add(new Mesh(new SphereGeometry(0.35, 6, 5), hazeMat));

  const b = createBaker();
  // Halos — one mesh, both turning
  b.add(new TorusGeometry(0.22, 0.008, 4, 14), { role: 'halo', rot: [Math.PI / 2, 0, 0], color: C.wispGlow, opacity: 0.25, motion: { mode: MOTION.PENDULUM, amp: 0.4, phase, speed: 0.5 } });
  b.add(new TorusGeometry(0.26, 0.005, 4, 12), { role: 'halo', rot: [1.2, 0, 0.8], color: C.wispGlow, opacity: 0.12, motion: { mode: MOTION.SPIN, phase, speed: 0.6 } });
  // Sparkle orbiter
  b.add(new SphereGeometry(0.02, 4, 3), { role: 'spark', pos: [0.15, 0, 0], color: C.white, opacity: 0.8, motion: { mode: MOTION.ORBIT, amp: 0.08, phase, speed: 2.5 } });
  // Ember trail
  for (let ei = 0; ei < 3; ei++) {
    const ey = -0.1 - ei * 0.08;
    b.add(new SphereGeometry(0.01, 3, 3), { role: 'spark', pos: [0.05, ey, 0], color: C.wispCore, opacity: 0.35, pivot: [0, ey, 0], motion: { mode: MOTION.ORBIT, amp: 0.03, phase: ei * 1.4 + phase, speed: 2.5 + ei * 0.5 } });
  }
  // Plasma tendrils
  for (let pi = 0; pi < 3; pi++) {
    const pa = (pi / 3) * 6.28 + sr() * 0.5, pLen = 0.15 + sr() * 0.1;
    b.add(new CylinderGeometry(0.003, 0.001, pLen, 3), { role: 'spark', pos: [Math.cos(pa) * 0.1, sr() * 0.08, Math.sin(pa) * 0.1], rot: [0, pa, Math.PI / 3 * ((pa < 3.14) ? 1 : -1)], color: C.wispGlow, opacity: 0.18, pivot: [0, 0, 0], motion: { mode: MOTION.ORBIT, amp: 0.02, phase: pi * 2.1 + phase, speed: 1.0 } });
  }
  for (let fi = 0; fi < 4; fi++) {
    const fa = sr() * 6.28, fel = sr() * 0.8;
    b.add(new SphereGeometry(0.006, 3, 3), { role: 'spark', pos: [Math.cos(fa) * 0.06, Math.sin(fel) * 0.06, Math.sin(fa) * 0.06], color: C.white, opacity: 0.5, motion: { mode: MOTION.FLICKER, phase: fi * 1.7, speed: 4 } });
  }
  for (let ci = 0; ci < 4; ci++) {
    b.add(new SphereGeometry(0.004, 3, 3), { role: 'spark', pos: [0.03 + sr() * 0.04, -0.05 - ci * 0.04, sr() * 0.04], color: C.wispCore, opacity: 0.2, motion: { mode: MOTION.BOB, amp: 0.01, phase: ci * 0.9, speed: 3 } });
  }
  const m = b.build({ halo: roleMaterial('basic', {}), spark: roleMaterial('basic', {}) });
  g.add(m.halo, m.spark);

  g.scale.setScalar(0.5);
  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, glowMat, hazeMat, embers: [], tendrils: [], facet, halo: m.halo, halo2: m.halo, spark: null,
    phase, targetX: x, targetY: y, targetZ: z, velX: 0, velY: 0, velZ: 0, scatter: 0, _gpu: true
  };
}
