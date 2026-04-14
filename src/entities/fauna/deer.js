// --- Spirit Deer (ethereal translucent — enhanced detail) ---
// ARCHIVE NOTE (Monitoring Station C, automated transcript):
//   Subject classification: Cervidae luminalis (unofficial).
//   They flee when approached but not from fear. The antler
//   bioluminescence spikes 200% during retreat — they're not hiding.
//   They're leading. Follow one long enough and it will circle back
//   to something important. We don't know how they know.
import { AdditiveBlending, CircleGeometry, ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeDeer(x, z) {
  const g = new Group();
  const bMat = new MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.7,
    transparent: true, opacity: 0.7, depthWrite: false, roughness: 0.3
  });
  // Body (elongated sphere) — faces +Z locally
  const body = new Mesh(new SphereGeometry(0.4, 7, 5), bMat);
  body.scale.set(1, 0.8, 1.5); body.position.y = 0.9; g.add(body);
  // Chest marking
  const chestMat = new MeshStandardMaterial({
    color: C.deerChest, emissive: C.deerGlow, emissiveIntensity: 0.8,
    transparent: true, opacity: 0.5, depthWrite: false
  });
  const chest = new Mesh(new SphereGeometry(0.15, 5, 4), chestMat);
  chest.scale.set(0.8, 0.6, 0.5); chest.position.set(0, 0.78, 0.25); g.add(chest);

  // === HEAD/NECK PIVOTS (rotates for look + bob + lag) ===
  const neckBase = new Group();
  neckBase.position.set(0, 1.15, 0.3); // pivot at base of neck
  g.add(neckBase);

  const neckMid = new Group();
  neckMid.position.set(0, 0.15, 0.08); 
  neckBase.add(neckMid);

  const headBase = new Group();
  headBase.position.set(0, 0.07, 0.12);
  neckMid.add(headBase);

  // Neck
  const neck = new Mesh(new CylinderGeometry(0.08, 0.12, 0.4, 5), bMat);
  neck.position.set(0, 0.1, 0.08); neck.rotation.x = -0.4; neckBase.add(neck);
  // Head
  const head = new Mesh(new SphereGeometry(0.14, 6, 5), bMat);
  head.position.set(0, 0, 0); headBase.add(head);
  // Snout
  const snout = new Mesh(new SphereGeometry(0.07, 4, 3), bMat);
  snout.scale.set(1, 0.7, 1.4); snout.position.set(0, -0.05, 0.15); headBase.add(snout);
  // Nose tip
  const noseMat = new MeshBasicMaterial({ color: C.deerNose });
  const nose = new Mesh(new SphereGeometry(0.02, 3, 3), noseMat);
  nose.position.set(0, -0.05, 0.23); headBase.add(nose);
  // Eyes
  const eyeM = new MeshBasicMaterial({ color: C.deerEye });
  for (let i = -1; i <= 1; i += 2) {
    const eye = new Mesh(new SphereGeometry(0.025, 4, 3), eyeM);
    eye.position.set(i * 0.09, 0.03, 0.08); headBase.add(eye);
    const ehl = new Mesh(new SphereGeometry(0.008, 3, 3),
      new MeshBasicMaterial({ color: C.deerEyeHighlight }));
    ehl.position.set(i * 0.085, 0.04, 0.09); headBase.add(ehl);
    const lashMat = new MeshBasicMaterial({ color: C.deerBody, transparent: true, opacity: 0.5, depthWrite: false });
    const lash = new Mesh(new CylinderGeometry(0.002, 0.002, 0.03, 3), lashMat);
    lash.position.set(i * 0.1, 0.05, 0.08); lash.rotation.z = i * 0.6; headBase.add(lash);
  }
  // Ears (stored for twitch animation)
  const ears = [];
  for (let i = -1; i <= 1; i += 2) {
    const earPivot = new Group();
    earPivot.position.set(i * 0.1, 0.15, -0.05);
    const ear = new Mesh(new ConeGeometry(0.04, 0.14, 4), bMat);
    ear.rotation.z = i * 0.4;
    earPivot.add(ear);
    // Inner ear detail — lighter concave surface
    const innerEarMat = new MeshBasicMaterial({
      color: C.deerInnerEar, transparent: true, opacity: 0.25, depthWrite: false
    });
    const innerEar = new Mesh(new ConeGeometry(0.025, 0.1, 3), innerEarMat);
    innerEar.rotation.z = i * 0.4;
    innerEar.position.set(i * 0.01, 0.01, 0.005);
    earPivot.add(innerEar);
    headBase.add(earPivot);
    ears.push(earPivot);
  }
  // Antlers
  const antMat = new MeshStandardMaterial({
    color: C.deerAntler, emissive: C.deerGlow, emissiveIntensity: 0.8,
    transparent: true, opacity: 0.8, depthWrite: false
  });
  const tipGlowMat = new MeshBasicMaterial({ color: C.deerGlow, transparent: true, opacity: 0.8, depthWrite: false });
  const velvetMat = new MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.3, depthWrite: false, roughness: 1.0
  });
  for (let i = -1; i <= 1; i += 2) {
    // Main beam
    const a1 = new Mesh(new CylinderGeometry(0.015, 0.02, 0.25, 3), antMat);
    a1.position.set(i * 0.08, 0.20, -0.08); a1.rotation.z = i * 0.5; headBase.add(a1);
    // First tine (forward)
    const a2 = new Mesh(new CylinderGeometry(0.01, 0.015, 0.15, 3), antMat);
    a2.position.set(i * 0.15, 0.33, -0.10); a2.rotation.z = i * 0.8; headBase.add(a2);
    // Second tine (backward-angled)
    const a3 = new Mesh(new CylinderGeometry(0.008, 0.012, 0.1, 3), antMat);
    a3.position.set(i * 0.11, 0.28, -0.04); a3.rotation.z = i * 0.3; a3.rotation.x = -0.5; headBase.add(a3);
    // Third tine (upper forward fork)
    const a4 = new Mesh(new CylinderGeometry(0.006, 0.01, 0.12, 3), antMat);
    a4.position.set(i * 0.17, 0.38, -0.06); a4.rotation.z = i * 0.6; a4.rotation.x = -0.3; headBase.add(a4);
    // Fourth tine (crown point)
    const a5 = new Mesh(new CylinderGeometry(0.005, 0.008, 0.08, 3), antMat);
    a5.position.set(i * 0.13, 0.36, -0.14); a5.rotation.z = i * 0.2; a5.rotation.x = 0.4; headBase.add(a5);
    // Tip glows at each tine end
    const tipGlow1 = new Mesh(new SphereGeometry(0.012, 3, 3), tipGlowMat);
    tipGlow1.position.set(i * 0.18, 0.39, -0.11); headBase.add(tipGlow1);
    const tipGlow2 = new Mesh(new SphereGeometry(0.008, 3, 3), tipGlowMat);
    tipGlow2.position.set(i * 0.20, 0.43, -0.07); headBase.add(tipGlow2);
    const tipGlow3 = new Mesh(new SphereGeometry(0.007, 3, 3), tipGlowMat);
    tipGlow3.position.set(i * 0.15, 0.40, -0.15); headBase.add(tipGlow3);
    // Velvet texture bumps along main beam
    for (let vi = 0; vi < 3; vi++) {
      const velvet = new Mesh(new SphereGeometry(0.006, 3, 3), velvetMat);
      velvet.scale.set(1.3, 0.6, 1.0);
      velvet.position.set(i * (0.09 + vi * 0.025), 0.22 + vi * 0.06, -0.08);
      headBase.add(velvet);
    }
  }
  // Jawline
  const jawMat = new MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.3,
    transparent: true, opacity: 0.5, depthWrite: false
  });
  const jaw = new Mesh(new CylinderGeometry(0.01, 0.02, 0.1, 3), jawMat);
  jaw.position.set(0, -0.11, 0.08); jaw.rotation.x = 0.3; headBase.add(jaw);
  // Nostrils
  const nostrilMat = new MeshBasicMaterial({ color: C.deerNostril });
  for (let ni = -1; ni <= 1; ni += 2) {
    const nostril = new Mesh(new SphereGeometry(0.006, 3, 3), nostrilMat);
    nostril.position.set(ni * 0.02, -0.06, 0.22); headBase.add(nostril);
  }

  // === JOINTED LEGS (4 legs, each with upper pivot + lower pivot) ===
  const legDefs = [
    { x: -0.15, z: 0.3, label: 'FL' },  // front-left
    { x: 0.15, z: 0.3, label: 'FR' },   // front-right
    { x: -0.15, z: -0.3, label: 'BL' }, // back-left
    { x: 0.15, z: -0.3, label: 'BR' }   // back-right
  ];
  const hoofMat = new MeshStandardMaterial({
    color: C.deerHoof, emissive: C.deerGlow, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.7, depthWrite: false
  });
  const legPivots = [];
  for (let li = 0; li < 4; li++) {
    const ld = legDefs[li];
    // Upper leg pivot (at hip/shoulder)
    const upperPivot = new Group();
    upperPivot.position.set(ld.x, 0.65, ld.z);
    const upperLeg = new Mesh(new CylinderGeometry(0.025, 0.035, 0.35, 4), bMat);
    upperLeg.position.y = -0.175; // hang down from pivot
    upperPivot.add(upperLeg);
    // Lower leg pivot (at knee)
    const lowerPivot = new Group();
    lowerPivot.position.set(0, -0.35, 0);
    const lowerLeg = new Mesh(new CylinderGeometry(0.02, 0.03, 0.3, 4), bMat);
    lowerLeg.position.y = -0.15;
    lowerPivot.add(lowerLeg);
    // Hoof at bottom of lower leg
    const hoof = new Mesh(new CylinderGeometry(0.04, 0.032, 0.04, 4), hoofMat);
    hoof.position.y = -0.3; lowerPivot.add(hoof);
    // Fetlock tuft
    const fetMat = new MeshStandardMaterial({
      color: C.deerFetlock, emissive: C.deerGlow, emissiveIntensity: 0.3,
      transparent: true, opacity: 0.5, depthWrite: false
    });
    const fet = new Mesh(new SphereGeometry(0.025, 3, 3), fetMat);
    fet.scale.set(1.3, 0.5, 1.3); fet.position.y = -0.25; lowerPivot.add(fet);

    upperPivot.add(lowerPivot);
    g.add(upperPivot);
    legPivots.push({ upper: upperPivot, lower: lowerPivot, isFront: li < 2, side: ld.x < 0 ? -1 : 1 });
  }

  // === TAIL PIVOT ===
  const tailPivot = new Group();
  tailPivot.position.set(0, 1.1, -0.55);
  const tail = new Mesh(new ConeGeometry(0.05, 0.15, 4), new MeshStandardMaterial({
    color: C.deerTailTip, emissive: C.deerGlow, emissiveIntensity: 1.0, transparent: true, opacity: 0.8, depthWrite: false
  }));
  tailPivot.add(tail);
  g.add(tailPivot);

  // === SHOULDER / HIP MUSCLE DEFINITION ===
  const muscleMat = new MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.45, depthWrite: false, roughness: 0.4
  });
  // Front shoulders
  for (let i = -1; i <= 1; i += 2) {
    const shoulder = new Mesh(new SphereGeometry(0.08, 4, 3), muscleMat);
    shoulder.scale.set(0.6, 0.9, 0.8);
    shoulder.position.set(i * 0.2, 0.82, 0.22);
    g.add(shoulder);
  }
  // Rear haunches (larger)
  for (let i = -1; i <= 1; i += 2) {
    const haunch = new Mesh(new SphereGeometry(0.1, 4, 3), muscleMat);
    haunch.scale.set(0.6, 0.9, 1.0);
    haunch.position.set(i * 0.22, 0.85, -0.25);
    g.add(haunch);
  }

  // === THROAT / CHIN DETAIL ===
  const throatMat = new MeshStandardMaterial({
    color: C.deerThroat, emissive: C.deerGlow, emissiveIntensity: 0.3,
    transparent: true, opacity: 0.35, depthWrite: false
  });
  const throat = new Mesh(new SphereGeometry(0.04, 4, 3), throatMat);
  throat.scale.set(0.8, 1.2, 0.6);
  throat.position.set(0, 0.06, 0.22);
  neckBase.add(throat);
  // Dewlap — thin hanging membrane
  const dewlapMat = new MeshStandardMaterial({
    color: C.deerBody, emissive: C.deerGlow, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.2, depthWrite: false, side: DoubleSide
  });
  const dewlap = new Mesh(new PlaneGeometry(0.04, 0.06), dewlapMat);
  dewlap.position.set(0, 0.01, 0.24);
  neckBase.add(dewlap);

  // === BELLY MARKING ===
  const bellyMat = new MeshStandardMaterial({
    color: C.deerBelly, emissive: C.deerGlow, emissiveIntensity: 0.25,
    transparent: true, opacity: 0.25, depthWrite: false, side: DoubleSide
  });
  const belly = new Mesh(new PlaneGeometry(0.18, 0.6), bellyMat);
  belly.position.set(0, 0.65, 0);
  belly.rotation.x = Math.PI / 2;
  g.add(belly);

  // Body spots
  const spotMat = new MeshBasicMaterial({ color: C.deerSpot, transparent: true, opacity: 0.3, depthWrite: false });
  for (let si = 0; si < 4; si++) {
    const sp = new Mesh(new SphereGeometry(0.02, 3, 3), spotMat);
    sp.position.set((sr() - 0.5) * 0.25, 0.8 + sr() * 0.3, (sr() - 0.5) * 0.4);
    g.add(sp);
  }
  // Rib hints
  const ribMat = new MeshBasicMaterial({ color: C.deerBody, transparent: true, opacity: 0.15, depthWrite: false });
  for (let rbi = 0; rbi < 3; rbi++) {
    const rib = new Mesh(new CylinderGeometry(0.002, 0.002, 0.2, 3), ribMat);
    rib.position.set(0.3, 0.85 - rbi * 0.06, 0);
    rib.rotation.z = Math.PI / 2 + 0.3; g.add(rib);
  }
  // Dew drops on fur
  const dewMat = new MeshStandardMaterial({
    color: C.deerDew, emissive: C.deerDewEmissive, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.4, depthWrite: false, roughness: 0.0, metalness: 0.5
  });
  for (let dwi = 0; dwi < 3; dwi++) {
    const dew = new Mesh(new SphereGeometry(0.008, 3, 3), dewMat);
    dew.position.set((sr() - 0.5) * 0.3, 0.9 + sr() * 0.3, (sr() - 0.5) * 0.35);
    g.add(dew);
  }

  // --- Ethereal mane along neck ---
  const maneMat = new MeshStandardMaterial({
    color: C.deerMane, emissive: C.deerGlow, emissiveIntensity: 0.4,
    transparent: true, opacity: 0.3, depthWrite: false, side: DoubleSide
  });
  const manePlanes = [];
  for (let mi = 0; mi < 5; mi++) {
    const mane = new Mesh(new PlaneGeometry(0.05, 0.08 + sr() * 0.04), maneMat);
    mane.position.set(0, 0.1 + mi * 0.055, 0.04 - mi * 0.015);
    mane.rotation.x = -0.2 + sr() * 0.15;
    mane.rotation.z = (sr() - 0.5) * 0.25;
    neckBase.add(mane);
    manePlanes.push(mane);
  }

  // --- Antler branch-point orbs ---
  const branchOrbMat = new MeshBasicMaterial({
    color: C.deerGlow, transparent: true, opacity: 0.5, depthWrite: false
  });
  const branchOrbs = [];
  for (let i = -1; i <= 1; i += 2) {
    // At first antler junction
    const orb1 = new Mesh(new SphereGeometry(0.012, 3, 3), branchOrbMat.clone());
    orb1.position.set(i * 0.1, 0.25, -0.09); headBase.add(orb1);
    branchOrbs.push(orb1);
    // At second junction
    const orb2 = new Mesh(new SphereGeometry(0.01, 3, 3), branchOrbMat.clone());
    orb2.position.set(i * 0.14, 0.31, -0.08); headBase.add(orb2);
    branchOrbs.push(orb2);
  }

  // --- Ghostly trail spheres ---
  const trailMat = new MeshBasicMaterial({
    color: C.deerGlow, transparent: true, opacity: 0.08,
    blending: AdditiveBlending, depthWrite: false
  });
  const trailSpheres = [];
  for (let ti = 0; ti < 3; ti++) {
    const trail = new Mesh(
      new SphereGeometry(0.06 - ti * 0.012, 4, 3), trailMat.clone()
    );
    trail.position.set(0, 0.8, -0.6 - ti * 0.35);
    g.add(trail); // added to group for proper cleanup
    trailSpheres.push({ mesh: trail, mat: trail.material, prevX: x, prevY: 0, prevZ: z });
  }

  // --- Body rune markings ---
  const runeMat = new MeshBasicMaterial({
    color: C.deerGlow, transparent: true, opacity: 0.2, depthWrite: false, side: DoubleSide
  });
  for (let ri = 0; ri < 3; ri++) {
    const ra = sr() * 6.28;
    const rune = new Mesh(new CircleGeometry(0.03 + sr() * 0.015, 5), runeMat);
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
    group: g, mat: bMat, manePlanes, branchOrbs, trailSpheres, ears,
    phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.4,
    walkTimer: 0, legCycle: 0, homeX: x, homeZ: z, state: 'walk', pauseTimer: 0,
    neckBasePivot: neckBase, 
    neckMidPivot: neckMid, 
    headPivot: headBase, 
    legPivots, tailPivot,
    fleeTimer: 0, headLook: 0, headBob: 0,
    earTwitchTimer: 0, earTwitchVal: 0,
    _init: true, _stT: 0, _drinkTgt: null, _zigTimer: 0, _zigDir: 1,
    _baseY: 0, _lastTX: x, _lastTZ: z
  };
}

export function updateDeer(d, dt, playerPos) {
  const g = d.group;
  d.phase += dt * 1.5;

  // 1. STATE & WANDER LOGIC
  const distToPlayerSq = g.position.distanceToSquared(playerPos);
  if (distToPlayerSq < 25) { // Flee!
    d.state = 'flee';
    d.fleeTimer = 3;
  }

  if (d.state === 'flee') {
    d.fleeTimer -= dt;
    if (d.fleeTimer <= 0) d.state = 'walk';
    // Move away from player
    const dx = g.position.x - playerPos.x;
    const dz = g.position.z - playerPos.z;
    d.wanderAng = Math.atan2(dx, dz);
    g.position.x += Math.sin(d.wanderAng) * d.speed * 2.5 * dt;
    g.position.z += Math.cos(d.wanderAng) * d.speed * 2.5 * dt;
    d.walkTimer += dt * 2.5;
  } else if (d.state === 'walk') {
    g.position.x += Math.sin(d.wanderAng) * d.speed * dt;
    g.position.z += Math.cos(d.wanderAng) * d.speed * dt;
    d.walkTimer += dt;
    if (Math.random() < 0.005) { d.state = 'pause'; d.pauseTimer = 1 + Math.random() * 2; }
    // Subtle wandering
    d.wanderAng += (Math.random() - 0.5) * 0.5 * dt;
  } else if (d.state === 'pause') {
    d.pauseTimer -= dt;
    if (d.pauseTimer <= 0) d.state = 'walk';
    // Look around while paused
    d.headLook = Math.sin(d.phase * 0.5) * 0.4;
  }

  // 2. REFINED HEAD & NECK MOTION
  // Neck base bobs with walk, Mid neck adds secondary lag, Head tilts independently
  const bob = (d.state === 'pause') ? Math.sin(d.phase * 0.8) * 0.05 : Math.sin(d.walkTimer * 8) * 0.1;
  d.neckBasePivot.rotation.x = -0.2 + bob;
  d.neckMidPivot.rotation.x = -0.1 + bob * 0.5;

  // Head look/tilt (curiosity)
  d.headPivot.rotation.y = d.headLook;
  d.headPivot.rotation.z = Math.sin(d.phase * 0.4) * 0.15; // idle tilt

  // 3. LEG ANIMATION (Synchronized 4-beat gait)
  const cyc = d.walkTimer * 8;
  d.legPivots.forEach((lp, i) => {
    const offset = [0, Math.PI, Math.PI * 0.5, Math.PI * 1.5][i];
    const s = Math.sin(cyc + offset);
    lp.upper.rotation.x = s * 0.4;
    lp.lower.rotation.x = Math.max(0, -s * 0.6); // fold knee
  });

  // 4. TAIL & EARS
  d.tailPivot.rotation.z = Math.sin(d.phase * 2) * 0.3;
  d.tailPivot.rotation.x = 0.5 + Math.sin(d.phase) * 0.2;
  
  d.earTwitchTimer -= dt;
  if (d.earTwitchTimer <= 0) {
    d.earTwitchTimer = 2 + Math.random() * 5;
    d.earTwitchVal = 0.5;
  }
  d.earTwitchVal *= 0.9;
  d.ears.forEach((e, i) => {
    e.rotation.x = (i === 0 ? 1 : -1) * d.earTwitchVal * Math.sin(d.phase * 20);
  });

  // 5. MANE ANIMATION (sway)
  d.manePlanes.forEach((m, i) => {
    m.rotation.z = Math.sin(d.phase + i * 0.5) * 0.1;
  });

  // 6. TRAIL SPHERES (Delayed follow)
  d.trailSpheres.forEach((ts, i) => {
    const lerp = 0.05 - i * 0.01;
    ts.mesh.position.x += (g.position.x - ts.mesh.position.x) * lerp;
    ts.mesh.position.z += (g.position.z - ts.mesh.position.z) * lerp;
    ts.mesh.position.y = 0.8 + Math.sin(d.phase + i) * 0.1;
    ts.mat.opacity = 0.08 * (1 - i * 0.3);
  });

  // 7. GROUND CLAMP — use stored base Y (set by populate/update)
  g.position.y = d._baseY;
}
