// --- Bubble Sprite (drifting iridescent — baked, 2 meshes; was 15) ---
// Shell (per-bubble material, recoloured by the updater) + one unlit mesh
// of swirl bands, highlights, film rings, reflection specks, trapped air
// and the gravity drip. The shell wobbles on the GPU like real surface
// tension (x/z breathe out of phase with y).
import { Group, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

const _filmMat = roleMaterial('basic', {});

export function makeBubble(x, y, z) {
  const g = new Group();
  const phase = sr() * 6.28;
  const b = createBaker();
  const shellMat = roleMaterial('glow', { emissive: C.bubbleIris, emissiveIntensity: 0.15, roughness: 0.0, metalness: 0.6, opacity: 0.25 });
  shellMat.color.setHex(C.bubbleIris);

  b.add(GEO.bubble, { role: 'shell', motion: { mode: MOTION.BREATHE, amp: 0.05, phase, speed: 2.2 } });
  b.add(new TorusGeometry(0.13, 0.003, 4, 10), { role: 'film', rot: [0.5, sr() * 3, 0], color: 0xeeccff, opacity: 0.1, motion: { mode: MOTION.SPIN, phase, speed: 0.4 } });
  b.add(new TorusGeometry(0.11, 0.003, 4, 10), { role: 'film', rot: [-0.8, 0, 1.2], color: 0xeeccff, opacity: 0.1, motion: { mode: MOTION.SPIN, phase: phase + 2, speed: -0.3 } });
  b.add(new SphereGeometry(0.04, 4, 3), { role: 'film', pos: [0.05, 0.07, 0.08], color: C.bubbleShine, opacity: 0.5 });
  b.add(new SphereGeometry(0.025, 3, 3), { role: 'film', pos: [-0.06, -0.04, -0.06], color: 0xeeeeff, opacity: 0.2 });
  b.add(new SphereGeometry(0.06, 4, 3), { role: 'film', pos: [0.02, -0.02, 0.01], color: 0xffaaee, opacity: 0.12, motion: { mode: MOTION.ORBIT, amp: 0.01, phase, speed: 0.7 }, pivot: [0, -0.02, 0] });
  b.add(new SphereGeometry(0.12, 5, 4), { role: 'film', color: 0xffeeff, opacity: 0.08 });
  const filmColors = [0xffccdd, 0xccddff, 0xddffcc];
  for (let fbi = 0; fbi < 3; fbi++) {
    b.add(new TorusGeometry(0.14 - fbi * 0.02, 0.002, 4, 8), { role: 'film', pos: [0, -0.04 + fbi * 0.04, 0], rot: [Math.PI / 2, 0, 0], color: filmColors[fbi], opacity: 0.06 });
  }
  for (let rfi = 0; rfi < 3; rfi++) {
    const rfa = sr() * 6.28, rfe = sr() * Math.PI - Math.PI / 2;
    b.add(new SphereGeometry(0.003, 3, 3), { role: 'film', pos: [Math.cos(rfa) * Math.cos(rfe) * 0.14, Math.sin(rfe) * 0.14, Math.sin(rfa) * Math.cos(rfe) * 0.14], color: C.white, opacity: 0.6, motion: { mode: MOTION.FLICKER, phase: rfi * 2.2, speed: 3 } });
  }
  b.add(new SphereGeometry(0.015, 3, 3), { role: 'film', pos: [(sr() - 0.5) * 0.04, (sr() - 0.5) * 0.04, (sr() - 0.5) * 0.04], color: 0xaabbcc, opacity: 0.1 });
  b.add(new SphereGeometry(0.04, 4, 3), { role: 'film', pos: [0, -0.12, 0], scale: [1.3, 0.6, 1.3], color: C.bubbleIris, opacity: 0.15 });

  const m = b.build({ shell: shellMat, film: _filmMat });
  g.add(m.shell, m.film);
  const sc = 0.6 + sr() * 0.8;
  g.scale.setScalar(sc);
  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, shellMat, phase,
    driftAng: sr() * 6.28, driftSpeed: 0.3 + sr() * 0.5, floatY: y,
    homeX: x, homeZ: z, bobAmp: 0.3 + sr() * 0.4, popped: false, popTimer: 0, sc
  };
}
