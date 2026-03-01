// --- Spirit Deer (ethereal translucent — enhanced detail) ---
// ARCHIVE NOTE (Monitoring Station C, automated transcript):
//   Subject classification: Cervidae luminalis (unofficial).
//   They flee when approached but not from fear. The antler
//   bioluminescence spikes 200% during retreat — they're not hiding.
//   They're leading. Follow one long enough and it will circle back
//   to something important. We don't know how they know.
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeDeer(x, z) {
  const g = new THREE.Group();
  const bMat = new THREE.MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.7, roughness: 0.3
  });
  // Body (elongated sphere) — faces +Z locally
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 7, 5), bMat);
  body.scale.set(1, 0.8, 1.5); body.position.y = 0.9; g.add(body);
  // Chest marking
  const chestMat = new THREE.MeshStandardMaterial({
    color: 0xccf0ff, emissive: C.deerGlow, emissiveIntensity: 0.8,
    transparent: true, opacity: 0.5
  });
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.15, 5, 4), chestMat);
  chest.scale.set(0.8, 0.6, 0.5); chest.position.set(0, 0.78, 0.25); g.add(chest);

  // === HEAD/NECK PIVOT (rotates for look + bob) ===
  const neckPivot = new THREE.Group();
  neckPivot.position.set(0, 1.15, 0.3); // pivot at base of neck
  // Neck
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.4, 5), bMat);
  neck.position.set(0, 0.1, 0.08); neck.rotation.x = -0.4; neckPivot.add(neck);
  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 5), bMat);
  head.position.set(0, 0.22, 0.2); neckPivot.add(head);
  // Snout
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.07, 4, 3), bMat);
  snout.scale.set(1, 0.7, 1.4); snout.position.set(0, 0.17, 0.35); neckPivot.add(snout);
  // Nose tip
  const noseMat = new THREE.MeshBasicMaterial({ color: 0x224455 });
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), noseMat);
  nose.position.set(0, 0.17, 0.43); neckPivot.add(nose);
  // Eyes
  const eyeM = new THREE.MeshBasicMaterial({ color: C.deerEye });
  for (let i = -1; i <= 1; i += 2) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.025, 4, 3), eyeM);
    eye.position.set(i * 0.09, 0.25, 0.28); neckPivot.add(eye);
    const ehl = new THREE.Mesh(new THREE.SphereGeometry(0.008, 3, 3),
      new THREE.MeshBasicMaterial({ color: 0xffffff }));
    ehl.position.set(i * 0.085, 0.26, 0.29); neckPivot.add(ehl);
    const lashMat = new THREE.MeshBasicMaterial({ color: C.deerBody, transparent: true, opacity: 0.5 });
    const lash = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.03, 3), lashMat);
    lash.position.set(i * 0.1, 0.27, 0.28); lash.rotation.z = i * 0.6; neckPivot.add(lash);
  }
  // Ears
  for (let i = -1; i <= 1; i += 2) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 4), bMat);
    ear.position.set(i * 0.1, 0.37, 0.15); ear.rotation.z = i * 0.4; neckPivot.add(ear);
  }
  // Antlers
  const antMat = new THREE.MeshStandardMaterial({
    color: C.deerAntler, emissive: C.deerGlow, emissiveIntensity: 0.8,
    transparent: true, opacity: 0.8
  });
  for (let i = -1; i <= 1; i += 2) {
    const a1 = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.25, 3), antMat);
    a1.position.set(i * 0.08, 0.42, 0.12); a1.rotation.z = i * 0.5; neckPivot.add(a1);
    const a2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 0.15, 3), antMat);
    a2.position.set(i * 0.15, 0.55, 0.10); a2.rotation.z = i * 0.8; neckPivot.add(a2);
    const a3 = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.1, 3), antMat);
    a3.position.set(i * 0.11, 0.50, 0.16); a3.rotation.z = i * 0.3; a3.rotation.x = -0.5; neckPivot.add(a3);
    const tipGlow = new THREE.Mesh(new THREE.SphereGeometry(0.012, 3, 3),
      new THREE.MeshBasicMaterial({ color: C.deerGlow, transparent: true, opacity: 0.8 }));
    tipGlow.position.set(i * 0.18, 0.61, 0.09); neckPivot.add(tipGlow);
  }
  // Jawline
  const jawMat = new THREE.MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.3,
    transparent: true, opacity: 0.5
  });
  const jaw = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.02, 0.1, 3), jawMat);
  jaw.position.set(0, 0.11, 0.28); jaw.rotation.x = 0.3; neckPivot.add(jaw);
  // Nostrils
  const nostrilMat = new THREE.MeshBasicMaterial({ color: 0x112222 });
  for (let ni = -1; ni <= 1; ni += 2) {
    const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.006, 3, 3), nostrilMat);
    nostril.position.set(ni * 0.02, 0.16, 0.42); neckPivot.add(nostril);
  }
  g.add(neckPivot);

  // === JOINTED LEGS (4 legs, each with upper pivot + lower pivot) ===
  const legDefs = [
    { x: -0.15, z: 0.3, label: 'FL' },  // front-left
    { x: 0.15, z: 0.3, label: 'FR' },   // front-right
    { x: -0.15, z: -0.3, label: 'BL' }, // back-left
    { x: 0.15, z: -0.3, label: 'BR' }   // back-right
  ];
  const hoofMat = new THREE.MeshStandardMaterial({
    color: 0x667788, emissive: C.deerGlow, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.7
  });
  const legPivots = [];
  for (let li = 0; li < 4; li++) {
    const ld = legDefs[li];
    // Upper leg pivot (at hip/shoulder)
    const upperPivot = new THREE.Group();
    upperPivot.position.set(ld.x, 0.65, ld.z);
    const upperLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.35, 4), bMat);
    upperLeg.position.y = -0.175; // hang down from pivot
    upperPivot.add(upperLeg);
    // Lower leg pivot (at knee)
    const lowerPivot = new THREE.Group();
    lowerPivot.position.set(0, -0.35, 0);
    const lowerLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.3, 4), bMat);
    lowerLeg.position.y = -0.15;
    lowerPivot.add(lowerLeg);
    // Hoof at bottom of lower leg
    const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.032, 0.04, 4), hoofMat);
    hoof.position.y = -0.3; lowerPivot.add(hoof);
    // Fetlock tuft
    const fetMat = new THREE.MeshStandardMaterial({
      color: 0xddeeff, emissive: C.deerGlow, emissiveIntensity: 0.3,
      transparent: true, opacity: 0.5
    });
    const fet = new THREE.Mesh(new THREE.SphereGeometry(0.025, 3, 3), fetMat);
    fet.scale.set(1.3, 0.5, 1.3); fet.position.y = -0.25; lowerPivot.add(fet);

    upperPivot.add(lowerPivot);
    g.add(upperPivot);
    legPivots.push({ upper: upperPivot, lower: lowerPivot, isFront: li < 2, side: ld.x < 0 ? -1 : 1 });
  }

  // === TAIL PIVOT ===
  const tailPivot = new THREE.Group();
  tailPivot.position.set(0, 1.1, -0.55);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.15, 4), new THREE.MeshStandardMaterial({
    color: 0xffffff, emissive: C.deerGlow, emissiveIntensity: 1.0, transparent: true, opacity: 0.8
  }));
  tailPivot.add(tail);
  g.add(tailPivot);

  // Body spots
  const spotMat = new THREE.MeshBasicMaterial({ color: 0xccffee, transparent: true, opacity: 0.3 });
  for (let si = 0; si < 4; si++) {
    const sp = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), spotMat);
    sp.position.set((sr() - 0.5) * 0.25, 0.8 + sr() * 0.3, (sr() - 0.5) * 0.4);
    g.add(sp);
  }
  // Rib hints
  const ribMat = new THREE.MeshBasicMaterial({ color: C.deerBody, transparent: true, opacity: 0.15 });
  for (let rbi = 0; rbi < 3; rbi++) {
    const rib = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, 0.2, 3), ribMat);
    rib.position.set(0.3, 0.85 - rbi * 0.06, 0);
    rib.rotation.z = Math.PI / 2 + 0.3; g.add(rib);
  }
  // Dew drops on fur
  const dewMat = new THREE.MeshStandardMaterial({
    color: 0xeeffff, emissive: 0xaaddff, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.4, roughness: 0.0, metalness: 0.5
  });
  for (let dwi = 0; dwi < 3; dwi++) {
    const dew = new THREE.Mesh(new THREE.SphereGeometry(0.008, 3, 3), dewMat);
    dew.position.set((sr() - 0.5) * 0.3, 0.9 + sr() * 0.3, (sr() - 0.5) * 0.35);
    g.add(dew);
  }

  // --- Ethereal mane along neck ---
  const maneMat = new THREE.MeshStandardMaterial({
    color: 0xddeeff, emissive: C.deerGlow, emissiveIntensity: 0.4,
    transparent: true, opacity: 0.3, side: THREE.DoubleSide
  });
  const manePlanes = [];
  for (let mi = 0; mi < 5; mi++) {
    const mane = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.08 + sr() * 0.04), maneMat);
    mane.position.set(0, 0.1 + mi * 0.055, 0.04 - mi * 0.015);
    mane.rotation.x = -0.2 + sr() * 0.15;
    mane.rotation.z = (sr() - 0.5) * 0.25;
    neckPivot.add(mane);
    manePlanes.push(mane);
  }

  // --- Antler branch-point orbs ---
  const branchOrbMat = new THREE.MeshBasicMaterial({
    color: C.deerGlow, transparent: true, opacity: 0.5
  });
  const branchOrbs = [];
  for (let i = -1; i <= 1; i += 2) {
    // At first antler junction
    const orb1 = new THREE.Mesh(new THREE.SphereGeometry(0.012, 3, 3), branchOrbMat.clone());
    orb1.position.set(i * 0.1, 0.47, 0.11); neckPivot.add(orb1);
    branchOrbs.push(orb1);
    // At second junction
    const orb2 = new THREE.Mesh(new THREE.SphereGeometry(0.01, 3, 3), branchOrbMat.clone());
    orb2.position.set(i * 0.14, 0.53, 0.12); neckPivot.add(orb2);
    branchOrbs.push(orb2);
  }

  // --- Ghostly trail spheres ---
  const trailMat = new THREE.MeshBasicMaterial({
    color: C.deerGlow, transparent: true, opacity: 0.08,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const trailSpheres = [];
  for (let ti = 0; ti < 3; ti++) {
    const trail = new THREE.Mesh(
      new THREE.SphereGeometry(0.06 - ti * 0.012, 4, 3), trailMat.clone()
    );
    trail.position.set(0, 0.8, -0.6 - ti * 0.35);
    scene.add(trail); // added to scene, not group — so they trail in world space
    trailSpheres.push({ mesh: trail, mat: trail.material, prevX: x, prevY: 0, prevZ: z });
  }

  // --- Body rune markings ---
  const runeMat = new THREE.MeshBasicMaterial({
    color: C.deerGlow, transparent: true, opacity: 0.2, side: THREE.DoubleSide
  });
  for (let ri = 0; ri < 3; ri++) {
    const ra = sr() * 6.28;
    const rune = new THREE.Mesh(new THREE.CircleGeometry(0.03 + sr() * 0.015, 5), runeMat);
    rune.position.set(
      (ri === 1 ? -1 : 1) * 0.32,
      0.8 + sr() * 0.25,
      (sr() - 0.5) * 0.3
    );
    rune.rotation.y = (ri === 1 ? -1 : 1) * Math.PI / 2;
    g.add(rune);
  }

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, mat: bMat, manePlanes, branchOrbs, trailSpheres,
    phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.4,
    walkTimer: 0, legCycle: 0, homeX: x, homeZ: z, state: 'walk', pauseTimer: 0,
    neckPivot: neckPivot, legPivots: legPivots, tailPivot: tailPivot,
    fleeTimer: 0, headLook: 0, headBob: 0,
    _init: true, _stT: 0, _drinkTgt: null, _zigTimer: 0, _zigDir: 1,
    _baseY: 0, _lastTX: x, _lastTZ: z
  };
}
