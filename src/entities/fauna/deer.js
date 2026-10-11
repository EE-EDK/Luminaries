// --- Spirit Deer (ethereal translucent — GPU rig: 3 meshes; was 17, was 90) ---
// ARCHIVE NOTE (Monitoring Station C, automated transcript):
//   Subject classification: Cervidae luminalis (unofficial).
//   They flee when approached but not from fear. The antler
//   bioluminescence spikes 200% during retreat — they're not hiding.
//   They're leading. Follow one long enough and it will circle back
//   to something important. We don't know how they know.
//
// The body, the unlit accents and the ghost trail are the only meshes. Every
// rigid section (neck, head, each ear, each leg segment, tail) is baked into the
// body / unlit meshes with a joint index per vertex (entities/fauna/deerRig.js
// lists the 14 joints); updates/fauna/deer.js computes the same walk / look /
// flee angles it always did and writes them to the rig, and the vertex shader
// swings the vertices. The mane flutters and the antler orbs twinkle on the GPU
// as before; the ghost trail stays CPU-driven (it follows the deer in world
// space) so it is its own mesh.
//
// The order of every sr() call below is the order it had when each section was
// its own baker. The world's random stream - every deer's phase, heading and
// speed, and everything built after the deer - depends on it, so it is part of
// the contract and not a style choice.
import { CircleGeometry, ConeGeometry, CylinderGeometry, Group, PlaneGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';
import { DEER_JOINT, DEER_LEG_DEFS, makeDeerRig } from './deerRig.js';

/** A joint's angles live here (plain numbers, same field names the Groups had). */
const jointState = () => ({ rotation: { x: 0, y: 0, z: 0 } });

export function makeDeer(x, z) {
  const g = new Group();
  const phase = sr() * 6.28;
  const rig = makeDeerRig();
  const bMat = roleMaterial('glow', { emissive: C.deerGlow, emissiveIntensity: 0.7, roughness: 0.3, doubleSide: true, rig });
  bMat.color.setHex(C.deerBody);
  const uMat = roleMaterial('basic', { opacity: 1.0, rig });
  const mats = { body: bMat, unlit: uMat };
  const breathe = { mode: MOTION.BREATHE, amp: 0.02, phase, speed: 1.1 };

  const bb = createBaker();
  const parents = Array.from({ length: rig.count }, (_, j) => rig.restMatrix(j));
  /** Add a part that rides joint j. pos / rot / pivot are in the joint's own frame, as the Group tree had them. */
  const addJ = (j, geo, o) => bb.add(geo, {
    ...o,
    joint: j,
    parent: parents[j],
    pivot: o.pivot ? [o.pivot[0] + rig.rest[j * 3], o.pivot[1] + rig.rest[j * 3 + 1], o.pivot[2] + rig.rest[j * 3 + 2]] : undefined
  });

  // === BODY (not on a joint; breathes on the GPU) ===
  bb.add(new SphereGeometry(0.4, 9, 7), { role: 'body', pos: [0, 0.9, 0], scale: [1, 0.8, 1.5], opacity: 0.7, pivot: [0, 0.9, 0], motion: breathe });
  bb.add(new SphereGeometry(0.15, 6, 5), { role: 'body', pos: [0, 0.78, 0.25], scale: [0.8, 0.6, 0.5], color: C.deerChest, emis: 1.15, opacity: 0.5 });
  for (let i = -1; i <= 1; i += 2) {
    bb.add(new SphereGeometry(0.08, 5, 4), { role: 'body', pos: [i * 0.2, 0.82, 0.22], scale: [0.6, 0.9, 0.8], emis: 0.7, opacity: 0.45 });
    bb.add(new SphereGeometry(0.1, 5, 4), { role: 'body', pos: [i * 0.22, 0.85, -0.25], scale: [0.6, 0.9, 1.0], emis: 0.7, opacity: 0.45 });
  }
  bb.add(new PlaneGeometry(0.18, 0.6), { role: 'body', pos: [0, 0.65, 0], rot: [Math.PI / 2, 0, 0], color: C.deerBelly, emis: 0.35, opacity: 0.25 });
  for (let dwi = 0; dwi < 3; dwi++) {
    bb.add(new SphereGeometry(0.008, 4, 3), { role: 'body', pos: [(sr() - 0.5) * 0.3, 0.9 + sr() * 0.3, (sr() - 0.5) * 0.35], color: C.deerDew, emis: 0.2, opacity: 0.4 });
  }
  for (let si = 0; si < 4; si++) {
    bb.add(new SphereGeometry(0.02, 4, 3), { role: 'unlit', pos: [(sr() - 0.5) * 0.25, 0.8 + sr() * 0.3, (sr() - 0.5) * 0.4], color: C.deerSpot, opacity: 0.3 });
  }
  for (let rbi = 0; rbi < 3; rbi++) {
    bb.add(new CylinderGeometry(0.002, 0.002, 0.2, 3), { role: 'unlit', pos: [0.3, 0.85 - rbi * 0.06, 0], rot: [0, 0, Math.PI / 2 + 0.3], color: C.deerBody, opacity: 0.15 });
  }
  for (let ri = 0; ri < 3; ri++) {
    bb.add(new CircleGeometry(0.03 + sr() * 0.015, 5), { role: 'unlit', pos: [(ri === 1 ? -1 : 1) * 0.32, 0.8 + sr() * 0.25, (sr() - 0.5) * 0.3], rot: [0, (ri === 1 ? -1 : 1) * Math.PI / 2, 0], color: C.deerGlow, opacity: 0.2, motion: { mode: MOTION.FLICKER, phase: ri * 2.0, speed: 0.8 } });
  }

  // === NECK (joint NECK_BASE; NECK_MID carries no geometry, it only parents the head) ===
  const NB = DEER_JOINT.NECK_BASE;
  addJ(NB, new CylinderGeometry(0.08, 0.12, 0.4, 6), { role: 'body', pos: [0, 0.1, 0.08], rot: [-0.4, 0, 0], opacity: 0.7 });
  addJ(NB, new SphereGeometry(0.04, 5, 4), { role: 'body', pos: [0, 0.06, 0.22], scale: [0.8, 1.2, 0.6], color: C.deerThroat, emis: 0.45, opacity: 0.35 });
  addJ(NB, new PlaneGeometry(0.04, 0.06), { role: 'body', pos: [0, 0.01, 0.24], emis: 0.3, opacity: 0.2 });
  for (let mi = 0; mi < 5; mi++) {
    const mp = [0, 0.1 + mi * 0.055, 0.04 - mi * 0.015];
    addJ(NB, new PlaneGeometry(0.05, 0.08 + sr() * 0.04), { role: 'body', pos: mp, rot: [-0.2 + sr() * 0.15, 0, (sr() - 0.5) * 0.25], color: C.deerMane, emis: 0.6, opacity: 0.3, pivot: mp, motion: { mode: MOTION.FLUTTER, amp: 0.15, phase: mi * 1.2 + phase, speed: 3 } });
  }

  // === HEAD (joint HEAD) ===
  const HD = DEER_JOINT.HEAD;
  addJ(HD, new SphereGeometry(0.14, 8, 6), { role: 'body', opacity: 0.7 });
  addJ(HD, new SphereGeometry(0.07, 5, 4), { role: 'body', pos: [0, -0.05, 0.15], scale: [1, 0.7, 1.4], opacity: 0.7 });
  addJ(HD, new CylinderGeometry(0.01, 0.02, 0.1, 3), { role: 'body', pos: [0, -0.11, 0.08], rot: [0.3, 0, 0], emis: 0.45, opacity: 0.5 });
  addJ(HD, new SphereGeometry(0.02, 4, 3), { role: 'unlit', pos: [0, -0.05, 0.23], color: C.deerNose });
  for (let ni = -1; ni <= 1; ni += 2) addJ(HD, new SphereGeometry(0.006, 3, 3), { role: 'unlit', pos: [ni * 0.02, -0.06, 0.22], color: C.deerNostril });
  for (let i = -1; i <= 1; i += 2) {
    addJ(HD, new SphereGeometry(0.025, 5, 4), { role: 'unlit', pos: [i * 0.09, 0.03, 0.08], color: C.deerEye });
    addJ(HD, new SphereGeometry(0.008, 4, 3), { role: 'unlit', pos: [i * 0.085, 0.04, 0.09], color: C.deerEyeHighlight });
    addJ(HD, new CylinderGeometry(0.002, 0.002, 0.03, 3), { role: 'unlit', pos: [i * 0.1, 0.05, 0.08], rot: [0, 0, i * 0.6], color: C.deerBody, opacity: 0.5 });
    // Antlers
    const tines = [[0.015, 0.02, 0.25, [i * 0.08, 0.20, -0.08], [0, 0, i * 0.5]], [0.01, 0.015, 0.15, [i * 0.15, 0.33, -0.10], [0, 0, i * 0.8]], [0.008, 0.012, 0.1, [i * 0.11, 0.28, -0.04], [-0.5, 0, i * 0.3]], [0.006, 0.01, 0.12, [i * 0.17, 0.38, -0.06], [-0.3, 0, i * 0.6]], [0.005, 0.008, 0.08, [i * 0.13, 0.36, -0.14], [0.4, 0, i * 0.2]]];
    for (const [r1, r2, len, pos, rot] of tines) {
      addJ(HD, new CylinderGeometry(r1, r2, len, 4), { role: 'body', pos, rot, color: C.deerAntler, emis: 1.15, opacity: 0.8 });
    }
    for (const [tp, rad] of [[[i * 0.18, 0.39, -0.11], 0.012], [[i * 0.20, 0.43, -0.07], 0.008], [[i * 0.15, 0.40, -0.15], 0.007]]) {
      addJ(HD, new SphereGeometry(rad, 4, 3), { role: 'unlit', pos: tp, color: C.deerGlow, opacity: 0.8, motion: { mode: MOTION.FLICKER, phase: sr() * 6.28, speed: 2.5 } });
    }
    for (let vi = 0; vi < 3; vi++) addJ(HD, new SphereGeometry(0.006, 3, 3), { role: 'body', pos: [i * (0.09 + vi * 0.025), 0.22 + vi * 0.06, -0.08], scale: [1.3, 0.6, 1.0], emis: 0.2, opacity: 0.3 });
    addJ(HD, new SphereGeometry(0.012, 4, 3), { role: 'unlit', pos: [i * 0.1, 0.25, -0.09], color: C.deerGlow, opacity: 0.5, motion: { mode: MOTION.FLICKER, phase: i * 1.5 + phase, speed: 2.5 } });
    addJ(HD, new SphereGeometry(0.01, 4, 3), { role: 'unlit', pos: [i * 0.14, 0.31, -0.08], color: C.deerGlow, opacity: 0.5, motion: { mode: MOTION.FLICKER, phase: i * 1.5 + phase + 1.5, speed: 2.5 } });
  }

  // === EARS — joints for the twitch (EAR_0 at x = -0.1, EAR_1 at x = +0.1) ===
  const ears = [];
  for (let i = -1; i <= 1; i += 2) {
    const ej = DEER_JOINT.EAR_0 + (i + 1) / 2;
    addJ(ej, new ConeGeometry(0.04, 0.14, 4), { role: 'body', rot: [0, 0, i * 0.4], opacity: 0.7 });
    addJ(ej, new ConeGeometry(0.025, 0.1, 3), { role: 'body', pos: [i * 0.01, 0.01, 0.005], rot: [0, 0, i * 0.4], color: C.deerInnerEar, emis: 0, opacity: 0.25 });
    ears.push(jointState());
  }

  // === LEGS ===
  const legPivots = [];
  for (let li = 0; li < 4; li++) {
    const ld = DEER_LEG_DEFS[li];
    addJ(DEER_JOINT.UPPER_0 + li, new CylinderGeometry(0.025, 0.035, 0.35, 5), { role: 'body', pos: [0, -0.175, 0], opacity: 0.7 });
    const lj = DEER_JOINT.LOWER_0 + li;
    addJ(lj, new CylinderGeometry(0.02, 0.03, 0.3, 5), { role: 'body', pos: [0, -0.15, 0], opacity: 0.7 });
    addJ(lj, new CylinderGeometry(0.04, 0.032, 0.04, 5), { role: 'body', pos: [0, -0.3, 0], color: C.deerHoof, emis: 0.3, opacity: 0.7 });
    addJ(lj, new SphereGeometry(0.025, 4, 3), { role: 'body', pos: [0, -0.25, 0], scale: [1.3, 0.5, 1.3], color: C.deerFetlock, emis: 0.45, opacity: 0.5 });
    legPivots.push({ upper: jointState(), lower: jointState(), isFront: li < 2, side: ld.x < 0 ? -1 : 1 });
  }

  // === TAIL ===
  addJ(DEER_JOINT.TAIL, new ConeGeometry(0.05, 0.15, 5), { role: 'body', color: C.deerTailTip, emis: 1.4, opacity: 0.8 });

  const bm = bb.build(mats);
  // The eyes, nostrils and antler sparks are in the unlit mesh, drawn over a body that is 70 % transparent
  // and writes no depth. Three sorts transparent objects by the centre of each geometry's bounding sphere, and
  // these two share an origin and nearly share a centre, so without this the unlit mesh can be drawn FIRST
  // and the body then veils it: seen in the browser gate as a deer with no eyes in every pose. (When each part
  // was its own mesh the old build got the order by luck of geometry.)
  bm.unlit.renderOrder = bm.body.renderOrder + 1;
  g.add(bm.body, bm.unlit);

  // --- Ghostly trail (world-following, CPU): one mesh of three fading spheres ---
  const trailB = createBaker();
  for (let ti = 0; ti < 3; ti++) {
    trailB.add(new SphereGeometry(0.06 - ti * 0.012, 5, 4), { role: 'trail', pos: [0, 0, -ti * 0.35], color: C.deerGlow, opacity: 1 - ti * 0.3 });
  }
  const trailMat = roleMaterial('haze', { opacity: 0.08 });
  const trailMesh = trailB.build({ trail: trailMat }).trail;
  trailMesh.position.set(0, 0.8, -0.6);
  g.add(trailMesh);
  const trailSpheres = [{ mesh: trailMesh, mat: trailMat, prevX: x, prevY: 0, prevZ: z }];

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, mat: bMat, manePlanes: [], branchOrbs: [], trailSpheres, ears,
    phase, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.4,
    walkTimer: 0, legCycle: 0, homeX: x, homeZ: z, state: 'walk', pauseTimer: 0,
    // Joint angle state (plain {rotation:{x,y,z}}; updateDeers writes them, writeDeerPose sends them to the rig)
    neckBasePivot: jointState(), neckMidPivot: jointState(), headPivot: jointState(),
    legPivots, tailPivot: jointState(), rig,
    fleeTimer: 0, headLook: 0, headBob: 0,
    earTwitchTimer: 0, earTwitchVal: 0,
    _init: true, _stT: 0, _drinkTgt: null, _zigTimer: 0, _zigDir: 1,
    _baseY: 0, _lastTX: x, _lastTZ: z, _gpu: true,
    _detail: [bm.unlit]   // spots, runes, eyes, nostrils, antler sparks — hidden beyond 30 m
  };
}
