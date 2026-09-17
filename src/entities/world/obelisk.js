// --- Obelisk (tall dark monolith at world center — baked, 18 meshes; was 117) ---
// ARCHIVE NOTE (excavation team, day 1):
//   It was already here when we arrived. Carbon dating returned
//   NaN. Not old. Not young. Just... undefined. It sits at the exact
//   geometric center of the forest's boundary. The probability of
//   that being natural is 0. It rises when the orbs return to it.
//   We think it's waiting for something. Or someone.
//
// Shaft and capstone keep their materials (questVisuals drives the glow).
// Plinths + rubble are one stone mesh; chamfers, etched rings, scratches
// and the ground shadow one unlit mesh. Each rune face is one mesh (its
// grooves live in the unlit mesh). Capstone edges, glyph motes (GPU orbit)
// and inscription dots are single hidden meshes revealed at the finale.
import { AdditiveBlending, CircleGeometry, ConeGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C, OBELISK_H, ORB_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

let obeliskGroup = null;
let obeliskMat = null;
let obeliskGlowMat = null;
let pinnacleOrb = null;
let pinnacleRings = [];
const runeFaces = [];

export function getObeliskGroup() { return obeliskGroup; }
export function getObeliskMat() { return obeliskMat; }
export function getObeliskGlowMat() { return obeliskGlowMat; }
export function getPinnacleOrb() { return pinnacleOrb; }
export function getPinnacleRings() { return pinnacleRings; }
export function getRuneFaces() { return runeFaces; }

export function makeObelisk() {
  const g = new Group();
  const mat = new MeshStandardMaterial({ color: C.obeliskBlack, roughness: 0.2, metalness: 0.8, emissive: C.obeliskPink, emissiveIntensity: 0 });
  obeliskMat = mat;
  const shaft = new Mesh(new CylinderGeometry(1.2, 1.8, OBELISK_H, ORB_N), mat);
  shaft.position.y = OBELISK_H / 2; shaft.rotation.y = Math.PI / ORB_N;
  shaft.castShadow = true; g.add(shaft);

  const b = createBaker();
  // Chamfer strips, etched rings, scratches, shadow → unlit
  for (let ci = 0; ci < ORB_N; ci++) {
    const ca = (ci / ORB_N) * 6.28 + Math.PI / ORB_N;
    b.add(new CylinderGeometry(0.03, 0.04, OBELISK_H * 0.9, 3), { role: 'unlit', pos: [Math.cos(ca) * 1.55, OBELISK_H * 0.45, Math.sin(ca) * 1.55], color: C.obeliskChamber, opacity: 0.2 });
  }
  for (let i = 0; i < 5; i++) {
    b.add(new TorusGeometry(1.85 - i * 0.02, 0.04, 6, ORB_N), { role: 'unlit', pos: [0, 4 + i * 5, 0], rot: [Math.PI / 2, 0, 0], color: C.obeliskInterior, opacity: 1 });
  }
  for (let sci = 0; sci < 6; sci++) {
    const scA = sr() * 6.28, scY = 2 + sr() * OBELISK_H * 0.7;
    b.add(new CylinderGeometry(0.008, 0.008, 0.5 + sr() * 0.5, 3), { role: 'unlit', pos: [Math.cos(scA) * 1.6, scY, Math.sin(scA) * 1.6], rot: [0, -scA, (sr() - 0.5) * 0.8], color: C.obeliskScratch, opacity: 0.08 });
  }
  b.add(new CircleGeometry(4, 10), { role: 'unlit', pos: [0, 0.005, 0], rot: [-Math.PI / 2, 0, 0], color: C.black, opacity: 0.15 });
  // Plinths + rubble → stone
  b.add(new CylinderGeometry(2.2, 2.5, 0.6, ORB_N), { role: 'stone', pos: [0, 0.3, 0], rot: [0, Math.PI / ORB_N, 0], color: C.obeliskBase });
  b.add(new CylinderGeometry(2.8, 3.0, 0.4, ORB_N), { role: 'stone', pos: [0, 0.05, 0], rot: [0, Math.PI / ORB_N, 0], color: C.obeliskBase });
  for (let rbi = 0; rbi < 12; rbi++) {
    const rba = sr() * 6.28, rbd = 3 + sr() * 2, rbSz = 0.15 + sr() * 0.25;
    b.add(new SphereGeometry(rbSz, 5, 4), { role: 'stone', pos: [Math.cos(rba) * rbd, rbSz * 0.15, Math.sin(rba) * rbd], rot: [sr(), sr(), sr()], scale: [1 + sr() * 0.5, 0.3 + sr() * 0.3, 1 + sr() * 0.5], color: C.obeliskRubble });
  }
  // Rune grooves (always visible, dark) → unlit; glowing runes per face → own hidden mesh
  runeFaces.length = 0;
  const topY = OBELISK_H * 0.84, bottomY = OBELISK_H * 0.28;
  const stepY = ORB_N > 1 ? (topY - bottomY) / (ORB_N - 1) : 0;
  const faceBakers = [];
  for (let fi = 0; fi < ORB_N; fi++) {
    const fAngle = (fi / ORB_N) * 6.28 + Math.PI / ORB_N;
    const faceCenterY = topY - fi * stepY;
    const fb = createBaker();
    for (let rl = 0; rl < 3; rl++) {
      const ry = faceCenterY - 1.05 + rl * 1.05;
      b.add(new CylinderGeometry(0.05, 0.05, 0.95, 4), { role: 'unlit', pos: [Math.cos(fAngle) * 1.47, ry, Math.sin(fAngle) * 1.47], rot: [0, -fAngle, Math.PI / 2], color: 0x2b1120, opacity: 0.38 });
      fb.add(new CylinderGeometry(0.03, 0.03, 0.9, 4), { role: 'rune', pos: [Math.cos(fAngle) * 1.5, ry, Math.sin(fAngle) * 1.5], rot: [0, -fAngle, Math.PI / 2] });
    }
    b.add(new CylinderGeometry(0.04, 0.04, 2.45, 4), { role: 'unlit', pos: [Math.cos(fAngle) * 1.47, faceCenterY, Math.sin(fAngle) * 1.47], color: 0x2b1120, opacity: 0.38 });
    fb.add(new CylinderGeometry(0.025, 0.025, 2.35, 4), { role: 'rune', pos: [Math.cos(fAngle) * 1.5, faceCenterY, Math.sin(fAngle) * 1.5] });
    faceBakers.push(fb);
  }
  // Capstone edge highlights + glyph motes + inscription dots (hidden until finale)
  for (let cei = 0; cei < ORB_N; cei++) {
    const ceA = (cei / ORB_N) * 6.28 + Math.PI / ORB_N;
    b.add(new CylinderGeometry(0.02, 0.02, 3.2, 3), { role: 'capEdge', pos: [Math.cos(ceA) * 0.8, OBELISK_H + 1.5, Math.sin(ceA) * 0.8], rot: [0, -ceA, 0.35 * ((ceA < 3.14) ? 1 : -1)], color: C.obeliskPink });
  }
  for (let gli = 0; gli < 8; gli++) {
    const glA = (gli / 8) * 6.28, gy = OBELISK_H * 0.7 + gli * 0.5;
    b.add(new SphereGeometry(0.06, 5, 4), { role: 'glyph', pos: [Math.cos(glA) * 2.5, gy, Math.sin(glA) * 2.5], color: C.obeliskPink, pivot: [0, gy, 0], motion: { mode: MOTION.ORBIT, amp: 0.15, phase: gli * 0.8, speed: 0.4 + gli * 0.05 } });
  }
  for (let fi = 0; fi < ORB_N; fi++) {
    const fAng = (fi / ORB_N) * 6.28 + Math.PI / ORB_N;
    for (let di = 0; di < 5; di++) {
      const iy = 5 + di * 3.5 + sr() * 0.5, iOff = (sr() - 0.5) * 0.4;
      b.add(new SphereGeometry(0.04, 4, 3), { role: 'insc', pos: [Math.cos(fAng) * 1.58 + Math.cos(fAng + 1.57) * iOff, iy, Math.sin(fAng) * 1.58 + Math.sin(fAng + 1.57) * iOff], color: C.obeliskPink, motion: { mode: MOTION.FLICKER, phase: di * 1.1 + fi, speed: 2 } });
    }
  }

  const stoneMat = roleMaterial('solid', { roughness: 0.4, metalness: 0.6 });
  const unlitMat = roleMaterial('basic', { doubleSide: true });
  // Hidden-until-finale parts. The old materials were built at opacity 0 and
  // never raised, so revealAllObeliskDetails() made them visible-but-invisible;
  // they now carry their intended finale opacity and only `visible` gates them.
  const capEdgeMat = roleMaterial('basic', { opacity: 0.6 });
  const glyphMat = roleMaterial('basic', { opacity: 0.7 });
  const inscMat = roleMaterial('basic', { opacity: 0.55 });
  const m = b.build({ stone: stoneMat, unlit: unlitMat, capEdge: capEdgeMat, glyph: glyphMat, insc: inscMat });
  m.capEdge.visible = false; m.glyph.visible = false; m.insc.visible = false;
  g.add(m.stone, m.unlit, m.capEdge, m.glyph, m.insc);

  for (let fi = 0; fi < ORB_N; fi++) {
    const faceMat = new MeshStandardMaterial({
      color: C.obeliskPink, emissive: C.obeliskPink, emissiveIntensity: 0.0, roughness: 0.15, metalness: 0.25,
      transparent: true, opacity: 0.0, blending: AdditiveBlending, depthWrite: false, vertexColors: true
    });
    const fm = faceBakers[fi].build({ rune: faceMat }).rune;
    fm.visible = false; g.add(fm);
    runeFaces.push({ mat: faceMat, meshes: [fm], revealed: false, revealTimer: 0 });
  }

  const capMat = new MeshStandardMaterial({ color: C.obeliskBlack, roughness: 0.1, metalness: 0.9, emissive: C.obeliskPink, emissiveIntensity: 0 });
  obeliskGlowMat = capMat;
  const cap = new Mesh(new ConeGeometry(1.3, 3, ORB_N), capMat);
  cap.position.y = OBELISK_H + 1.5; cap.rotation.y = Math.PI / ORB_N; g.add(cap);

  const pinnOrbMat = new MeshBasicMaterial({ color: C.obeliskPink, transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false });
  const pinnOrbMesh = new Mesh(new SphereGeometry(0.5, 12, 8), pinnOrbMat);
  pinnOrbMesh.position.y = OBELISK_H + 3; g.add(pinnOrbMesh);
  const pinnHazeMat = new MeshBasicMaterial({ color: C.obeliskPink, transparent: true, opacity: 0.2, blending: AdditiveBlending, depthWrite: false });
  const pinnHaze = new Mesh(new SphereGeometry(0.9, 8, 6), pinnHazeMat);
  pinnHaze.position.y = OBELISK_H + 3; g.add(pinnHaze);
  pinnacleOrb = { mesh: pinnOrbMesh, haze: pinnHaze, mat: pinnOrbMat, hazeMat: pinnHazeMat };

  pinnacleRings = [];
  const ringRadii = [0.8, 1.1, 1.4, 1.8];
  const ringColors = [0xaa44ff, 0x9933ee, 0xbb55ff, 0x8822dd];
  for (let ri = 0; ri < 4; ri++) {
    const rMat = new MeshBasicMaterial({ color: ringColors[ri], transparent: true, opacity: 0.4, blending: AdditiveBlending, depthWrite: false, side: 2 });
    const rMesh = new Mesh(new TorusGeometry(ringRadii[ri], 0.02, 6, 24), rMat);
    rMesh.position.y = OBELISK_H + 3;
    rMesh.rotation.set(sr() * 6.28, sr() * 6.28, sr() * 6.28);
    g.add(rMesh);
    pinnacleRings.push({ mesh: rMesh, mat: rMat, rx: (sr() - 0.5) * 2, ry: (sr() - 0.5) * 2, rz: (sr() - 0.5) * 1.5 });
  }

  g.position.set(0, -OBELISK_H, 0);
  scene.add(g);
  obeliskGroup = g;
  // NOTE: no dedicated obelisk PointLight — that would be a 9th real-time light
  // (1 hemi + 2 dir + 1 player + 1 orb + 3 crystal = 8 = budget). The dramatic
  // rise glow reuses the pooled `orbLight` (idle once all orbs are found, which
  // is exactly when the obelisk rises). Driven in questVisuals.updateQuestVisuals.
}
