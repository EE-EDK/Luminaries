// --- Obelisk (tall dark monolith at world center) ---
// ARCHIVE NOTE (excavation team, day 1):
//   It was already here when we arrived. Carbon dating returned
//   NaN. Not old. Not young. Just... undefined. It sits at the exact
//   geometric center of the forest's boundary. The probability of
//   that being natural is 0. It rises when the orbs return to it.
//   We think it's waiting for something. Or someone.
import { AdditiveBlending, CircleGeometry, ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PointLight, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C, OBELISK_H, ORB_N } from '../../constants.js';
import { sr } from '../../utils/rng.js';

let obeliskGroup = null;
let obeliskMat = null;
let obeliskGlowMat = null;
let pinnacleOrb = null; // pink orb at tip
let pinnacleRings = []; // 4 rotating purple rings
const runeFaces = []; // per-face rune data: { mat, meshes[] }

export function getObeliskGroup() { return obeliskGroup; }
export function getObeliskMat() { return obeliskMat; }
export function getObeliskGlowMat() { return obeliskGlowMat; }
export function getPinnacleOrb() { return pinnacleOrb; }
export function getPinnacleRings() { return pinnacleRings; }
export function getRuneFaces() { return runeFaces; }

export function makeObelisk() {
  const g = new Group();
  // Main shaft -- tapered box
  const mat = new MeshStandardMaterial({
    color: C.obeliskBlack, roughness: 0.2, metalness: 0.8,
    emissive: C.obeliskPink, emissiveIntensity: 0
  });
  obeliskMat = mat;
  // Use CylinderGeometry with ORB_N sides for obelisk shape (5-sided pentagonal monolith)
  const shaft = new Mesh(new CylinderGeometry(1.2, 1.8, OBELISK_H, ORB_N), mat);
  shaft.position.y = OBELISK_H / 2; shaft.rotation.y = Math.PI / ORB_N;
  shaft.castShadow = true; g.add(shaft);

  // Corner chamfer lines (ORB_N bright edge strips along shaft corners)
  const chamMat = new MeshBasicMaterial({
    color: C.obeliskChamber, transparent: true, opacity: 0.2,
    depthWrite: false
  });
  for (let ci = 0; ci < ORB_N; ci++) {
    const ca = (ci / ORB_N) * 6.28 + Math.PI / ORB_N;
    const cham = new Mesh(new CylinderGeometry(0.03, 0.04, OBELISK_H * 0.9, 3), chamMat);
    cham.position.set(Math.cos(ca) * 1.55, OBELISK_H * 0.45, Math.sin(ca) * 1.55);
    g.add(cham);
  }

  // Surface rune carvings (glowing line segments on each face) — revealed per orb
  runeFaces.length = 0;
  for (let fi = 0; fi < ORB_N; fi++) {
    const faceMat = new MeshBasicMaterial({
      color: C.obeliskPink, transparent: true, opacity: 0.0,
      blending: AdditiveBlending, depthWrite: false
    });
    const faceMeshes = [];
    const fAngle = (fi / ORB_N) * 6.28 + Math.PI / ORB_N;
    for (let rl = 0; rl < 3; rl++) {
      const ry = 6 + rl * 4;
      const rune = new Mesh(new CylinderGeometry(0.04, 0.04, 1.0, 4), faceMat);
      rune.position.set(Math.cos(fAngle) * 1.62, ry, Math.sin(fAngle) * 1.62);
      rune.rotation.z = Math.PI / 2; rune.rotation.y = -fAngle;
      rune.visible = false; g.add(rune); faceMeshes.push(rune);
    }
    const vRune = new Mesh(new CylinderGeometry(0.035, 0.035, 3.0, 4), faceMat);
    vRune.position.set(Math.cos(fAngle) * 1.62, 12, Math.sin(fAngle) * 1.62);
    vRune.visible = false; g.add(vRune); faceMeshes.push(vRune);
    runeFaces.push({ mat: faceMat, meshes: faceMeshes, revealed: false, revealTimer: 0 });
  }

  // Capstone (pyramid tip)
  const capMat = new MeshStandardMaterial({
    color: C.obeliskBlack, roughness: 0.1, metalness: 0.9,
    emissive: C.obeliskPink, emissiveIntensity: 0
  });
  obeliskGlowMat = capMat;
  const cap = new Mesh(new ConeGeometry(1.3, 3, ORB_N), capMat);
  cap.position.y = OBELISK_H + 1.5; cap.rotation.y = Math.PI / ORB_N; g.add(cap);

  // Capstone edge highlights — hidden until quest finale
  const capEdgeMat = new MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.0,
    depthWrite: false
  });
  for (let cei = 0; cei < ORB_N; cei++) {
    const ceA = (cei / ORB_N) * 6.28 + Math.PI / ORB_N;
    const capEdge = new Mesh(new CylinderGeometry(0.02, 0.02, 3.2, 3), capEdgeMat);
    capEdge.position.set(Math.cos(ceA) * 0.8, OBELISK_H + 1.5, Math.sin(ceA) * 0.8);
    capEdge.rotation.z = 0.35 * ((ceA < 3.14) ? 1 : -1); capEdge.rotation.y = -ceA;
    capEdge.visible = false; g.add(capEdge);
  }

  // Etched rings
  for (let i = 0; i < 5; i++) {
    const ring = new Mesh(new TorusGeometry(1.85 - i * 0.02, 0.04, 6, ORB_N),
      new MeshBasicMaterial({ color: C.obeliskInterior }));
    ring.position.y = 4 + i * 5; ring.rotation.x = Math.PI / 2; g.add(ring);
  }

  // Base plinth (wider foundation step)
  const plinthMat = new MeshStandardMaterial({
    color: C.obeliskBase, roughness: 0.3, metalness: 0.7
  });
  const plinth = new Mesh(new CylinderGeometry(2.2, 2.5, 0.6, ORB_N), plinthMat);
  plinth.position.y = 0.3; plinth.rotation.y = Math.PI / ORB_N; g.add(plinth);
  // Second step
  const plinth2 = new Mesh(new CylinderGeometry(2.8, 3.0, 0.4, ORB_N), plinthMat);
  plinth2.position.y = 0.05; plinth2.rotation.y = Math.PI / ORB_N; g.add(plinth2);

  // Floating glyph motes (orbit near top, hidden until quest finale)
  const glyphMat = new MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.0,
    depthWrite: false
  });
  for (let gli = 0; gli < 8; gli++) {
    const glA = (gli / 8) * 6.28;
    const glyph = new Mesh(new SphereGeometry(0.06, 4, 3), glyphMat);
    glyph.position.set(Math.cos(glA) * 2.5, OBELISK_H * 0.7 + gli * 0.5, Math.sin(glA) * 2.5);
    glyph.visible = false; g.add(glyph);
  }

  // Surface weathering scratches (faint marks on faces)
  const scratchMat = new MeshBasicMaterial({
    color: C.obeliskScratch, transparent: true, opacity: 0.08,
    depthWrite: false
  });
  for (let sci = 0; sci < 6; sci++) {
    const scA = sr() * 6.28, scY = 2 + sr() * OBELISK_H * 0.7;
    const scratch = new Mesh(new CylinderGeometry(0.008, 0.008, 0.5 + sr() * 0.5, 3), scratchMat);
    scratch.position.set(Math.cos(scA) * 1.6, scY, Math.sin(scA) * 1.6);
    scratch.rotation.z = (sr() - 0.5) * 0.8; scratch.rotation.y = -scA;
    g.add(scratch);
  }

  // Base rubble (scattered broken stone fragments around plinth)
  const rubbleMat = new MeshStandardMaterial({ color: C.obeliskRubble, roughness: 0.5, metalness: 0.4 });
  for (let rbi = 0; rbi < 12; rbi++) {
    const rba = sr() * 6.28, rbd = 3 + sr() * 2;
    const rbSz = 0.15 + sr() * 0.25;
    const rubble = new Mesh(new SphereGeometry(rbSz, 4, 3), rubbleMat);
    rubble.scale.set(1 + sr() * 0.5, 0.3 + sr() * 0.3, 1 + sr() * 0.5);
    rubble.position.set(Math.cos(rba) * rbd, rbSz * 0.15, Math.sin(rba) * rbd);
    rubble.rotation.set(sr(), sr(), sr()); g.add(rubble);
  }

  // Ancient inscription dots — hidden until quest finale
  const inscMat = new MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.0,
    depthWrite: false
  });
  for (let fi = 0; fi < ORB_N; fi++) {
    const fAng = (fi / ORB_N) * 6.28 + Math.PI / ORB_N;
    for (let di = 0; di < 5; di++) {
      const iy = 5 + di * 3.5 + sr() * 0.5;
      const iOff = (sr() - 0.5) * 0.4;
      const dot = new Mesh(new SphereGeometry(0.04, 4, 3), inscMat);
      dot.position.set(Math.cos(fAng) * 1.58 + Math.cos(fAng + 1.57) * iOff, iy,
        Math.sin(fAng) * 1.58 + Math.sin(fAng + 1.57) * iOff);
      dot.visible = false; g.add(dot);
    }
  }

  // Pinnacle orb — glowing pink sphere at tip with 4 purple rotating rings
  const pinnOrbMat = new MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.8,
    blending: AdditiveBlending, depthWrite: false
  });
  const pinnOrbMesh = new Mesh(new SphereGeometry(0.5, 12, 8), pinnOrbMat);
  pinnOrbMesh.position.y = OBELISK_H + 3; // at tip of capstone
  g.add(pinnOrbMesh);
  // Outer glow haze
  const pinnHazeMat = new MeshBasicMaterial({
    color: C.obeliskPink, transparent: true, opacity: 0.2,
    blending: AdditiveBlending, depthWrite: false
  });
  const pinnHaze = new Mesh(new SphereGeometry(0.9, 8, 6), pinnHazeMat);
  pinnHaze.position.y = OBELISK_H + 3;
  g.add(pinnHaze);
  pinnacleOrb = { mesh: pinnOrbMesh, haze: pinnHaze, mat: pinnOrbMat, hazeMat: pinnHazeMat };

  // 4 concentric purple rings with random rotation axes
  pinnacleRings = [];
  const ringRadii = [0.8, 1.1, 1.4, 1.8];
  const ringColors = [0xaa44ff, 0x9933ee, 0xbb55ff, 0x8822dd];
  for (let ri = 0; ri < 4; ri++) {
    const rMat = new MeshBasicMaterial({
      color: ringColors[ri], transparent: true, opacity: 0.4,
      blending: AdditiveBlending, depthWrite: false, side: DoubleSide
    });
    const rMesh = new Mesh(new TorusGeometry(ringRadii[ri], 0.02, 6, 24), rMat);
    rMesh.position.y = OBELISK_H + 3;
    // Random initial rotation axis
    rMesh.rotation.set(sr() * 6.28, sr() * 6.28, sr() * 6.28);
    g.add(rMesh);
    pinnacleRings.push({
      mesh: rMesh, mat: rMat,
      // Random rotation speeds per axis
      rx: (sr() - 0.5) * 2,
      ry: (sr() - 0.5) * 2,
      rz: (sr() - 0.5) * 1.5
    });
  }

  // Ground shadow disc (dark circle beneath obelisk)
  const shadowMat = new MeshBasicMaterial({
    color: C.black, transparent: true, opacity: 0.15, side: DoubleSide,
    depthWrite: false
  });
  const shadow = new Mesh(new CircleGeometry(4, 8), shadowMat);
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.005; g.add(shadow);

  g.position.set(0, -OBELISK_H, 0); // starts buried
  scene.add(g);
  obeliskGroup = g;
  // Dramatic obelisk light (rises with obelisk, casts colored glow)
  const obeliskLight = new PointLight(C.obeliskLight, 0, 30);
  g.add(obeliskLight);
  obeliskLight.position.set(0, OBELISK_H + 1, 0);
}
