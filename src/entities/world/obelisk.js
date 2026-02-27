// --- Obelisk (tall dark monolith at world center) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, OBELISK_H } from '../../constants.js';
import { sr } from '../../utils/rng.js';

let obeliskGroup = null;
let obeliskMat = null;
let obeliskGlowMat = null;
let pinnacleOrb = null; // pink orb at tip
let pinnacleRings = []; // 4 rotating purple rings

export function getObeliskGroup() { return obeliskGroup; }
export function getObeliskMat() { return obeliskMat; }
export function getObeliskGlowMat() { return obeliskGlowMat; }
export function getPinnacleOrb() { return pinnacleOrb; }
export function getPinnacleRings() { return pinnacleRings; }

export function makeObelisk() {
  const g = new THREE.Group();
  // Main shaft -- tapered box
  const mat = new THREE.MeshStandardMaterial({
    color: C.obeliskBlack, roughness: 0.2, metalness: 0.8,
    emissive: C.obeliskPink, emissiveIntensity: 0
  });
  obeliskMat = mat;
  // Use CylinderGeometry with 4 sides for obelisk shape
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.8, OBELISK_H, 4), mat);
  shaft.position.y = OBELISK_H / 2; shaft.rotation.y = Math.PI / 4;
  shaft.castShadow = true; g.add(shaft);

  // Corner chamfer lines (4 bright edge strips along shaft corners)
  const chamMat = new THREE.MeshBasicMaterial({ color: 0x332244, transparent: true, opacity: 0.2 });
  for (let ci = 0; ci < 4; ci++) {
    const ca = (ci / 4) * 6.28 + Math.PI / 4;
    const cham = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, OBELISK_H * 0.9, 3), chamMat);
    cham.position.set(Math.cos(ca) * 1.55, OBELISK_H * 0.45, Math.sin(ca) * 1.55);
    g.add(cham);
  }

  // Surface rune carvings (glowing line segments on each face) — hidden until quest finale
  const runeMat = new THREE.MeshBasicMaterial({ color: C.obeliskPink, transparent: true, opacity: 0.0 });
  for (let fi = 0; fi < 4; fi++) {
    const fAngle = (fi / 4) * 6.28 + Math.PI / 4;
    for (let rl = 0; rl < 3; rl++) {
      const ry = 6 + rl * 4;
      const rune = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.8, 3), runeMat);
      rune.position.set(Math.cos(fAngle) * 1.6, ry, Math.sin(fAngle) * 1.6);
      rune.rotation.z = Math.PI / 2; rune.rotation.y = -fAngle;
      rune.visible = false; g.add(rune);
    }
    const vRune = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 2.5, 3), runeMat);
    vRune.position.set(Math.cos(fAngle) * 1.6, 12, Math.sin(fAngle) * 1.6);
    vRune.visible = false; g.add(vRune);
  }

  // Capstone (pyramid tip)
  const capMat = new THREE.MeshStandardMaterial({
    color: C.obeliskBlack, roughness: 0.1, metalness: 0.9,
    emissive: C.obeliskPink, emissiveIntensity: 0
  });
  obeliskGlowMat = capMat;
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.3, 3, 4), capMat);
  cap.position.y = OBELISK_H + 1.5; cap.rotation.y = Math.PI / 4; g.add(cap);

  // Capstone edge highlights — hidden until quest finale
  const capEdgeMat = new THREE.MeshBasicMaterial({ color: C.obeliskPink, transparent: true, opacity: 0.0 });
  for (let cei = 0; cei < 4; cei++) {
    const ceA = (cei / 4) * 6.28 + Math.PI / 4;
    const capEdge = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 3.2, 3), capEdgeMat);
    capEdge.position.set(Math.cos(ceA) * 0.8, OBELISK_H + 1.5, Math.sin(ceA) * 0.8);
    capEdge.rotation.z = 0.35 * ((ceA < 3.14) ? 1 : -1); capEdge.rotation.y = -ceA;
    capEdge.visible = false; g.add(capEdge);
  }

  // Etched rings
  for (let i = 0; i < 5; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.85 - i * 0.02, 0.04, 6, 4),
      new THREE.MeshBasicMaterial({ color: 0x222233 }));
    ring.position.y = 4 + i * 5; ring.rotation.x = Math.PI / 2; g.add(ring);
  }

  // Base plinth (wider foundation step)
  const plinthMat = new THREE.MeshStandardMaterial({
    color: 0x111118, roughness: 0.3, metalness: 0.7
  });
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.5, 0.6, 4), plinthMat);
  plinth.position.y = 0.3; plinth.rotation.y = Math.PI / 4; g.add(plinth);
  // Second step
  const plinth2 = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 3.0, 0.4, 4), plinthMat);
  plinth2.position.y = 0.05; plinth2.rotation.y = Math.PI / 4; g.add(plinth2);

  // Floating glyph motes (orbit near top, hidden until quest finale)
  const glyphMat = new THREE.MeshBasicMaterial({ color: C.obeliskPink, transparent: true, opacity: 0.0 });
  for (let gli = 0; gli < 8; gli++) {
    const glA = (gli / 8) * 6.28;
    const glyph = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 3), glyphMat);
    glyph.position.set(Math.cos(glA) * 2.5, OBELISK_H * 0.7 + gli * 0.5, Math.sin(glA) * 2.5);
    glyph.visible = false; g.add(glyph);
  }

  // Surface weathering scratches (faint marks on faces)
  const scratchMat = new THREE.MeshBasicMaterial({ color: 0x1a1a22, transparent: true, opacity: 0.08 });
  for (let sci = 0; sci < 6; sci++) {
    const scA = sr() * 6.28, scY = 2 + sr() * OBELISK_H * 0.7;
    const scratch = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.5 + sr() * 0.5, 3), scratchMat);
    scratch.position.set(Math.cos(scA) * 1.6, scY, Math.sin(scA) * 1.6);
    scratch.rotation.z = (sr() - 0.5) * 0.8; scratch.rotation.y = -scA;
    g.add(scratch);
  }

  // Base rubble (scattered broken stone fragments around plinth)
  const rubbleMat = new THREE.MeshStandardMaterial({ color: 0x0e0e14, roughness: 0.5, metalness: 0.4 });
  for (let rbi = 0; rbi < 12; rbi++) {
    const rba = sr() * 6.28, rbd = 3 + sr() * 2;
    const rbSz = 0.15 + sr() * 0.25;
    const rubble = new THREE.Mesh(new THREE.SphereGeometry(rbSz, 4, 3), rubbleMat);
    rubble.scale.set(1 + sr() * 0.5, 0.3 + sr() * 0.3, 1 + sr() * 0.5);
    rubble.position.set(Math.cos(rba) * rbd, rbSz * 0.15, Math.sin(rba) * rbd);
    rubble.rotation.set(sr(), sr(), sr()); g.add(rubble);
  }

  // Ancient inscription dots — hidden until quest finale
  const inscMat = new THREE.MeshBasicMaterial({ color: C.obeliskPink, transparent: true, opacity: 0.0 });
  for (let fi = 0; fi < 4; fi++) {
    const fAng = (fi / 4) * 6.28 + Math.PI / 4;
    for (let di = 0; di < 5; di++) {
      const iy = 5 + di * 3.5 + sr() * 0.5;
      const iOff = (sr() - 0.5) * 0.4;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 3), inscMat);
      dot.position.set(Math.cos(fAng) * 1.58 + Math.cos(fAng + 1.57) * iOff, iy,
        Math.sin(fAng) * 1.58 + Math.sin(fAng + 1.57) * iOff);
      dot.visible = false; g.add(dot);
    }
  }

  // Pinnacle orb — glowing pink sphere at tip with 4 purple rotating rings
  const pinnOrbMat = new THREE.MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.8,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const pinnOrbMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), pinnOrbMat);
  pinnOrbMesh.position.y = OBELISK_H + 3; // at tip of capstone
  g.add(pinnOrbMesh);
  // Outer glow haze
  const pinnHazeMat = new THREE.MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.2,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const pinnHaze = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 6), pinnHazeMat);
  pinnHaze.position.y = OBELISK_H + 3;
  g.add(pinnHaze);
  pinnacleOrb = { mesh: pinnOrbMesh, haze: pinnHaze, mat: pinnOrbMat, hazeMat: pinnHazeMat };

  // 4 concentric purple rings with random rotation axes
  pinnacleRings = [];
  const ringRadii = [0.8, 1.1, 1.4, 1.8];
  const ringColors = [0xaa44ff, 0x9933ee, 0xbb55ff, 0x8822dd];
  for (let ri = 0; ri < 4; ri++) {
    const rMat = new THREE.MeshBasicMaterial({
      color: ringColors[ri], transparent: true, opacity: 0.4,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    const rMesh = new THREE.Mesh(new THREE.TorusGeometry(ringRadii[ri], 0.02, 6, 24), rMat);
    rMesh.position.y = OBELISK_H + 3;
    // Random initial rotation axis
    rMesh.rotation.set(Math.random() * 6.28, Math.random() * 6.28, Math.random() * 6.28);
    g.add(rMesh);
    pinnacleRings.push({
      mesh: rMesh, mat: rMat,
      // Random rotation speeds per axis
      rx: (Math.random() - 0.5) * 2,
      ry: (Math.random() - 0.5) * 2,
      rz: (Math.random() - 0.5) * 1.5
    });
  }

  // Ground shadow disc (dark circle beneath obelisk)
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x000000, transparent: true, opacity: 0.15, side: THREE.DoubleSide
  });
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(4, 8), shadowMat);
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.005; g.add(shadow);

  g.position.set(0, -OBELISK_H, 0); // starts buried
  scene.add(g);
  obeliskGroup = g;
  // Dramatic obelisk light (rises with obelisk, casts colored glow)
  const obeliskLight = new THREE.PointLight(0x8866cc, 0, 30);
  g.add(obeliskLight);
  obeliskLight.position.set(0, OBELISK_H + 1, 0);
}
