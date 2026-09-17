// --- Luna Moth (Actias luna — baked, 8 meshes; was 91) ---
//
// FIELD LOG (Dr. Chen, acoustic lab, supplemental note):
//   The luna specimens defy classification. Wingspan approaches 20cm
//   in some individuals — far beyond documented Actias luna norms.
//   Their bioluminescence peaks at 520nm. No known lepidopteran
//   produces light at this wavelength. The eyespots... pulse.
//   I've checked the instruments. The eyespots are pulsing.
//
// Each wing is two merged meshes (lit membrane + unlit markings) under its
// flap pivot; the tail streamers flutter and the eyespots pulse on the GPU.
// Antennae keep their pivots (one mesh each); the dust trail drifts on the
// GPU. updates/fauna/moths.js guards its tail / dust loops on empty arrays.

import { CircleGeometry, ConeGeometry, CylinderGeometry, Group, PlaneGeometry, Shape, ShapeGeometry, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

function _makeForewingShape(side) {
  const s = new Shape(); const m = side;
  s.moveTo(0, 0);
  s.quadraticCurveTo(m * 0.08, 0.12, m * 0.22, 0.14);
  s.quadraticCurveTo(m * 0.30, 0.12, m * 0.32, 0.06);
  s.quadraticCurveTo(m * 0.30, 0.0, m * 0.26, -0.04);
  s.quadraticCurveTo(m * 0.15, -0.06, 0, -0.02);
  s.lineTo(0, 0);
  return s;
}
function _makeHindwingShape(side) {
  const s = new Shape(); const m = side;
  s.moveTo(0, 0);
  s.quadraticCurveTo(m * 0.06, 0.04, m * 0.2, 0.04);
  s.quadraticCurveTo(m * 0.28, 0.0, m * 0.24, -0.08);
  s.quadraticCurveTo(m * 0.2, -0.12, m * 0.14, -0.1);
  s.quadraticCurveTo(m * 0.1, -0.08, 0, -0.02);
  s.lineTo(0, 0);
  return s;
}

export function makeMoth(x, y, z) {
  const g = new Group();
  const phase = sr() * 6.28;

  const furMat = roleMaterial('solid', { emissive: C.mothGlow, emissiveIntensity: 0.25, roughness: 0.95 });
  const wingMat = roleMaterial('glow', { emissive: C.mothGlow, emissiveIntensity: 0.7, roughness: 0.4, opacity: 0.55, doubleSide: true });
  const unlitMat = roleMaterial('basic', { doubleSide: true });

  // ---- Body ----
  const bb = createBaker();
  bb.add(new SphereGeometry(0.05, 7, 6), { role: 'fur', pos: [0, 0, 0.05], scale: [1, 0.9, 1.4], color: C.mothFur, emis: 1.0 });
  bb.add(new ConeGeometry(0.04, 0.18, 6), { role: 'fur', pos: [0, 0, -0.1], rot: [Math.PI / 2 + 0.1, 0, 0], color: C.mothAbdomen, emis: 0.8 });
  for (let si = 0; si < 3; si++) bb.add(new TorusGeometry(0.035, 0.005, 4, 8), { role: 'fur', pos: [0, 0, -0.03 - si * 0.04], color: C.mothSegment, emis: 1.4 });
  bb.add(new SphereGeometry(0.04, 6, 5), { role: 'fur', pos: [0, 0, 0.16], color: C.mothFur, emis: 1.2 });
  for (let i = -1; i <= 1; i += 2) bb.add(new SphereGeometry(0.02, 6, 5), { role: 'fur', pos: [i * 0.028, 0.012, 0.19], color: C.mothEye, emis: 1.2 });
  for (let thi = 0; thi < 7; thi++) {
    const thA = sr() * 6.28;
    bb.add(new SphereGeometry(0.01, 3, 3), { role: 'fur', pos: [Math.cos(thA) * 0.045, Math.sin(thA) * 0.04, 0.05 + sr() * 0.08], color: C.mothFur, emis: 1.0 });
  }
  for (let i = -1; i <= 1; i += 2) for (let lj = 0; lj < 3; lj++) {
    bb.add(new CylinderGeometry(0.002, 0.002, 0.05, 3), { role: 'unlit', pos: [i * 0.035, -0.025, 0.02 + lj * 0.04], rot: [-0.2, 0, i * 0.7], color: C.mothLeg, opacity: 0.35 });
  }
  for (let di = 0; di < 4; di++) {
    const dz = -0.18 - di * 0.04;
    bb.add(new SphereGeometry(0.006, 3, 3), { role: 'unlit', pos: [0.012, 0, dz], color: C.mothGlow, opacity: 0.2, pivot: [0, 0, dz], motion: { mode: MOTION.ORBIT, amp: 0.01, phase: di * 1.8 + phase, speed: 2 + di * 0.4 } });
  }
  const bm = bb.build({ fur: furMat, unlit: unlitMat });
  g.add(bm.fur, bm.unlit);

  // ---- Antennae (pivots kept for the quiver) ----
  const antennae = [];
  for (let i = -1; i <= 1; i += 2) {
    const antPivot = new Group();
    antPivot.position.set(i * 0.025, 0.025, 0.19);
    const ab = createBaker();
    ab.add(new CylinderGeometry(0.004, 0.003, 0.14, 3), { role: 'ant', pos: [i * 0.01, 0.05, 0.03], rot: [-0.5, 0, i * 0.3], color: C.mothAntenna, emis: 1.2, opacity: 1 });
    for (let bi = 0; bi < 5; bi++) {
      const barbLen = 0.015 + (bi < 3 ? bi * 0.008 : (4 - bi) * 0.008), yOff = 0.02 + bi * 0.018;
      ab.add(new CylinderGeometry(0.001, 0.001, barbLen, 3), { role: 'ant', pos: [i * (0.012 + bi * 0.002), yOff, 0.01 + bi * 0.008], rot: [0, 0, i * 0.7], color: C.mothGlow, emis: 1.5, opacity: 0.7 });
      ab.add(new CylinderGeometry(0.001, 0.001, barbLen, 3), { role: 'ant', pos: [i * (0.008 - bi * 0.001), yOff, 0.01 + bi * 0.008], rot: [0, 0, i * 0.3], color: C.mothGlow, emis: 1.5, opacity: 0.7 });
    }
    ab.add(new SphereGeometry(0.008, 4, 3), { role: 'ant', pos: [i * 0.025, 0.1, 0.06], color: C.mothGlow, emis: 2.0, opacity: 0.8, motion: { mode: MOTION.FLICKER, phase: i * 2.0 + phase, speed: 2.2 } });
    antPivot.add(ab.build({ ant: wingMat }).ant);
    g.add(antPivot);
    antennae.push(antPivot);
  }

  // ---- Wings ----
  g._wingPivots = [];
  for (let i = -1; i <= 1; i += 2) {
    const pivot = new Group();
    pivot.position.set(i * 0.04, 0, 0.04);
    const wb = createBaker();
    wb.add(new ShapeGeometry(_makeForewingShape(i), 6), { role: 'wing', pos: [0, 0.005, 0], rot: [Math.PI / 2, 0, 0], color: C.mothWing, emis: 1.0 });
    wb.add(new ShapeGeometry(_makeHindwingShape(i), 6), { role: 'wing', pos: [0, 0.003, -0.04], rot: [Math.PI / 2, 0, 0], color: C.mothWing, emis: 1.0 });
    wb.add(new PlaneGeometry(0.03, 0.28), { role: 'wing', pos: [i * 0.02, 0.008, 0.06], rot: [Math.PI / 2, 0, i * -0.15], color: C.mothEdge, emis: 0.2, opacity: 1.0 });
    // Eyespots — outer dark ring, yellow ring, translucent centre (pulsing)
    const spots = [[i * 0.2, 0.04, 0.032, 0.025, 0.015], [i * 0.16, -0.05, 0.025, 0.019, 0.012]];
    for (const [sx, sz, r0, r1, r2] of spots) {
      const pv = [sx, 0.012, sz];
      const pulse = { mode: MOTION.BREATHE, amp: 0.08, phase: phase + sx * 10, speed: 1.6 };
      wb.add(new CircleGeometry(r0, 10), { role: 'unlit', pos: [sx, 0.01, sz], rot: [-Math.PI / 2, 0, 0], color: C.mothSpotDark, opacity: 0.5, pivot: pv, motion: pulse });
      wb.add(new CircleGeometry(r1, 10), { role: 'unlit', pos: [sx, 0.012, sz], rot: [-Math.PI / 2, 0, 0], color: C.mothSpotRing, opacity: 0.85, pivot: pv, motion: pulse });
      wb.add(new CircleGeometry(r2, 8), { role: 'unlit', pos: [sx, 0.014, sz], rot: [-Math.PI / 2, 0, 0], color: C.mothSpot, opacity: 0.7, pivot: pv, motion: pulse });
    }
    // Tail streamers — flutter about their root
    for (let ti = 0; ti < 3; ti++) {
      const tp = [i * (0.13 - ti * 0.01), -0.005, -0.12 - ti * 0.07];
      const tLen = 0.08 - ti * 0.015;
      wb.add(new PlaneGeometry(0.018 - ti * 0.003, tLen), { role: 'wing', pos: tp, rot: [0.1 + ti * 0.05, i * (0.15 + ti * 0.12), 0], color: C.mothWing, emis: 0.7, opacity: 0.75, pivot: [tp[0], tp[1], tp[2] + tLen * 0.5], motion: { mode: MOTION.FLUTTER, amp: 0.15 + ti * 0.05, phase: phase + ti * 1.2, speed: 2.5 } });
    }
    for (let vi = 0; vi < 3; vi++) {
      wb.add(new CylinderGeometry(0.0015, 0.001, 0.18 - vi * 0.02, 3), { role: 'unlit', pos: [i * (0.1 + vi * 0.04), 0.006, 0.02 - vi * 0.03], rot: [Math.PI / 2, 0, i * (0.3 + vi * 0.2)], color: C.mothGlow, opacity: 0.2 });
    }
    for (let sci = 0; sci < 6; sci++) {
      const sa = sci / 6 * Math.PI * 0.8 - 0.2, sr2 = 0.25 + Math.sin(sa * 3) * 0.02;
      wb.add(new SphereGeometry(0.004, 3, 3), { role: 'unlit', pos: [i * (sr2 * Math.cos(sa) + 0.05), 0.008, sr2 * Math.sin(sa) - 0.03], color: C.mothGlow, opacity: 0.3, motion: { mode: MOTION.FLICKER, phase: sci * 1.1 + phase, speed: 3 } });
    }
    const wm = wb.build({ wing: wingMat, unlit: unlitMat });
    pivot.add(wm.wing, wm.unlit);
    g.add(pivot);
    g._wingPivots.push({ pivot, side: i });
  }

  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, wingMat, tails: [], phase, orbitAng: sr() * 6.28,
    orbitR: 2 + sr() * 4, centerX: x, centerZ: z, floatY: y, flapSpeed: 6 + sr() * 4,
    antennae, dustMotes: [],
    _init: true, _state: 'patrol', _stT: 0, _attractTarget: null, _restTree: null,
    _prevMx: x, _prevMz: z, _prevY: y, _bank: 0,
    _transitionT: 0, _prevPx: x, _prevPz: z, _gpu: true,
    _detail: [bm.unlit, ...g._wingPivots.map(w => w.pivot.children[1]), ...antennae]   // markings, legs, antennae — hidden beyond 25 m
  };
}
