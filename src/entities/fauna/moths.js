// --- Luna Moth (Actias luna — large glowing wings with trailing tails) ---
//
// FIELD LOG (Dr. Chen, acoustic lab, supplemental note):
//   The luna specimens defy classification. Wingspan approaches 20cm
//   in some individuals — far beyond documented Actias luna norms.
//   Their bioluminescence peaks at 520nm. No known lepidopteran
//   produces light at this wavelength. The eyespots... pulse.
//   I've checked the instruments. The eyespots are pulsing.

import { CircleGeometry, ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, Shape, ShapeGeometry, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Wing shape helpers — procedural luna moth wing silhouettes
// ================================================================

function _makeForewingShape(side) {
  const s = new Shape();
  const m = side; // 1 = right, -1 = left
  // Start at wing root (body attachment)
  s.moveTo(0, 0);
  // Leading edge — sweeps forward and outward with slight curve
  s.quadraticCurveTo(m * 0.08, 0.12, m * 0.22, 0.14);
  // Apex — broad rounded tip
  s.quadraticCurveTo(m * 0.30, 0.12, m * 0.32, 0.06);
  // Outer edge — gentle scallop down
  s.quadraticCurveTo(m * 0.30, 0.0, m * 0.26, -0.04);
  // Trailing edge — curves back to body
  s.quadraticCurveTo(m * 0.15, -0.06, 0, -0.02);
  s.lineTo(0, 0);
  return s;
}

function _makeHindwingShape(side) {
  const s = new Shape();
  const m = side;
  // Start at wing root
  s.moveTo(0, 0);
  // Leading edge — forward sweep (shorter than forewing)
  s.quadraticCurveTo(m * 0.06, 0.04, m * 0.2, 0.04);
  // Outer edge — broad rounded
  s.quadraticCurveTo(m * 0.28, 0.0, m * 0.24, -0.08);
  // Lower lobe — distinctive luna moth round lobe
  s.quadraticCurveTo(m * 0.2, -0.12, m * 0.14, -0.1);
  // Tail attachment point
  s.quadraticCurveTo(m * 0.1, -0.08, 0, -0.02);
  s.lineTo(0, 0);
  return s;
}

// ================================================================
// Builder
// ================================================================

export function makeMoth(x, y, z) {
  const g = new Group();

  // ---- Body ----
  // White furry thorax (luna moths have thick white fur)
  const furMat = new MeshStandardMaterial({
    color: C.mothFur, emissive: C.mothGlow, emissiveIntensity: 0.25, roughness: 1.0
  });
  const thorax = new Mesh(new SphereGeometry(0.05, 6, 5), furMat);
  thorax.scale.set(1, 0.9, 1.4);
  thorax.position.z = 0.05; g.add(thorax);

  // Abdomen — tapered, slightly fuzzy, with segment bands
  const abdMat = new MeshStandardMaterial({
    color: C.mothAbdomen, emissive: C.mothGlow, emissiveIntensity: 0.2, roughness: 0.8
  });
  const abdomen = new Mesh(new ConeGeometry(0.04, 0.18, 5), abdMat);
  abdomen.rotation.x = Math.PI / 2 + 0.1; // slight upward curl
  abdomen.position.z = -0.1; g.add(abdomen);

  // Abdomen segment rings (3 subtle bands)
  const segMat = new MeshStandardMaterial({
    color: C.mothSegment, emissive: C.mothGlow, emissiveIntensity: 0.35, roughness: 0.6
  });
  for (let si = 0; si < 3; si++) {
    const seg = new Mesh(new TorusGeometry(0.035, 0.005, 4, 8), segMat);
    seg.position.z = -0.03 - si * 0.04; g.add(seg);
  }

  // ---- Head ----
  const headMat = new MeshStandardMaterial({
    color: C.mothFur, emissive: C.mothGlow, emissiveIntensity: 0.3, roughness: 0.9
  });
  const head = new Mesh(new SphereGeometry(0.04, 5, 4), headMat);
  head.position.z = 0.16; g.add(head);

  // Compound eyes (2 large dark iridescent spheres)
  const eyeMat = new MeshStandardMaterial({
    color: C.mothEye, emissive: C.mothEyeEmissive, emissiveIntensity: 0.3, roughness: 0.1, metalness: 0.5
  });
  for (let i = -1; i <= 1; i += 2) {
    const eye = new Mesh(new SphereGeometry(0.02, 5, 4), eyeMat);
    eye.position.set(i * 0.028, 0.012, 0.19); g.add(eye);
  }

  // ---- Feathered Antennae (prominent plume-like, characteristic of luna moths) ----
  const antennae = [];
  const antMat = new MeshStandardMaterial({
    color: C.mothAntenna, emissive: C.mothGlow, emissiveIntensity: 0.3, roughness: 0.6
  });
  const antTipMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.7, depthWrite: false });

  for (let i = -1; i <= 1; i += 2) {
    const antPivot = new Group();
    antPivot.position.set(i * 0.025, 0.025, 0.19);

    // Main antenna shaft (curved forward)
    const shaft = new Mesh(new CylinderGeometry(0.004, 0.003, 0.14, 3), antMat);
    shaft.rotation.x = -0.5; shaft.rotation.z = i * 0.3;
    shaft.position.set(i * 0.01, 0.05, 0.03); antPivot.add(shaft);

    // Feathered barbs — 5 pairs fanning out (luna moths have broad feathered antennae)
    for (let bi = 0; bi < 5; bi++) {
      const barbLen = 0.015 + (bi < 3 ? bi * 0.008 : (4 - bi) * 0.008); // taper at ends
      const barb = new Mesh(new CylinderGeometry(0.001, 0.001, barbLen, 3), antTipMat);
      const yOff = 0.02 + bi * 0.018;
      barb.position.set(i * (0.012 + bi * 0.002), yOff, 0.01 + bi * 0.008);
      barb.rotation.z = i * 0.7;
      antPivot.add(barb);
      // Mirror barb on other side of shaft
      const barb2 = new Mesh(new CylinderGeometry(0.001, 0.001, barbLen, 3), antTipMat);
      barb2.position.set(i * (0.008 - bi * 0.001), yOff, 0.01 + bi * 0.008);
      barb2.rotation.z = i * 0.3;
      antPivot.add(barb2);
    }

    // Glowing tip
    const tip = new Mesh(new SphereGeometry(0.008, 3, 3), antTipMat);
    tip.position.set(i * 0.025, 0.1, 0.06); antPivot.add(tip);

    g.add(antPivot);
    antennae.push(antPivot);
  }

  // ---- Wings ----
  const wingMat = new MeshStandardMaterial({
    color: C.mothWing, emissive: C.mothGlow, emissiveIntensity: 0.7,
    transparent: true, opacity: 0.55, depthWrite: false, side: DoubleSide, roughness: 0.4
  });

  // Dark leading edge material (characteristic brown/maroon margin)
  const edgeMat = new MeshStandardMaterial({
    color: C.mothEdge, emissive: C.mothGlow, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.6, depthWrite: false, side: DoubleSide, roughness: 0.5
  });

  // Eyespot materials — translucent center + colored ring
  const spotRingMat = new MeshBasicMaterial({
    color: C.mothSpotRing, transparent: true, opacity: 0.85, depthWrite: false
  });
  const spotCenterMat = new MeshBasicMaterial({
    color: C.mothSpot, transparent: true, opacity: 0.7, depthWrite: false
  });
  const spotDarkMat = new MeshBasicMaterial({
    color: C.mothSpotDark, transparent: true, opacity: 0.5, depthWrite: false
  });

  // Tail streamer material
  const tailMat = new MeshStandardMaterial({
    color: C.mothWing, emissive: C.mothGlow, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.4, depthWrite: false, side: DoubleSide
  });

  // Wing vein material
  const veinMat = new MeshBasicMaterial({
    color: C.mothGlow, transparent: true, opacity: 0.2, depthWrite: false
  });

  g._wingPivots = [];
  const tails = [];

  for (let i = -1; i <= 1; i += 2) {
    const pivot = new Group();
    pivot.position.set(i * 0.04, 0, 0.04);

    // Forewing — proper luna moth silhouette
    const fwShape = _makeForewingShape(i);
    const fwGeo = new ShapeGeometry(fwShape, 6);
    const fw = new Mesh(fwGeo, wingMat);
    fw.rotation.x = Math.PI / 2;
    fw.position.y = 0.005;
    pivot.add(fw);

    // Forewing dark leading edge stripe
    const edgeStripe = new Mesh(new PlaneGeometry(0.03, 0.28), edgeMat);
    edgeStripe.rotation.x = Math.PI / 2;
    edgeStripe.position.set(i * 0.02, 0.008, 0.06);
    edgeStripe.rotation.z = i * -0.15;
    pivot.add(edgeStripe);

    // Forewing eyespot — layered rings for realistic appearance
    const fwSpotX = i * 0.2, fwSpotZ = 0.04;
    // Outer dark ring
    const spotOuter = new Mesh(new CircleGeometry(0.032, 8), spotDarkMat);
    spotOuter.rotation.x = -Math.PI / 2; spotOuter.position.set(fwSpotX, 0.01, fwSpotZ); pivot.add(spotOuter);
    // Yellow ring
    const spotYellow = new Mesh(new CircleGeometry(0.025, 8), spotRingMat);
    spotYellow.rotation.x = -Math.PI / 2; spotYellow.position.set(fwSpotX, 0.012, fwSpotZ); pivot.add(spotYellow);
    // Transparent center (the "eye")
    const spotCenter = new Mesh(new CircleGeometry(0.015, 6), spotCenterMat);
    spotCenter.rotation.x = -Math.PI / 2; spotCenter.position.set(fwSpotX, 0.014, fwSpotZ); pivot.add(spotCenter);

    // Hindwing — rounder with lower lobe
    const hwShape = _makeHindwingShape(i);
    const hwGeo = new ShapeGeometry(hwShape, 6);
    const hw = new Mesh(hwGeo, wingMat);
    hw.rotation.x = Math.PI / 2;
    hw.position.set(0, 0.003, -0.04);
    pivot.add(hw);

    // Hindwing eyespot
    const hwSpotX = i * 0.16, hwSpotZ = -0.05;
    const hSpotOuter = new Mesh(new CircleGeometry(0.025, 7), spotDarkMat);
    hSpotOuter.rotation.x = -Math.PI / 2; hSpotOuter.position.set(hwSpotX, 0.008, hwSpotZ); pivot.add(hSpotOuter);
    const hSpotYellow = new Mesh(new CircleGeometry(0.019, 7), spotRingMat);
    hSpotYellow.rotation.x = -Math.PI / 2; hSpotYellow.position.set(hwSpotX, 0.01, hwSpotZ); pivot.add(hSpotYellow);
    const hSpotCenter = new Mesh(new CircleGeometry(0.012, 5), spotCenterMat);
    hSpotCenter.rotation.x = -Math.PI / 2; hSpotCenter.position.set(hwSpotX, 0.012, hwSpotZ); pivot.add(hSpotCenter);

    // Long tail streamer — the signature luna moth feature
    // Built as 3 connected planes for a graceful twisted trail
    for (let ti = 0; ti < 3; ti++) {
      const tLen = 0.08 - ti * 0.015;
      const tail = new Mesh(new PlaneGeometry(0.018 - ti * 0.003, tLen), tailMat);
      tail.position.set(i * (0.13 - ti * 0.01), -0.005, -0.12 - ti * 0.07);
      tail.rotation.y = i * (0.15 + ti * 0.12); // increasing twist
      tail.rotation.x = 0.1 + ti * 0.05; // slight droop
      pivot.add(tail);
      tails.push(tail);
    }

    // Wing veins — 3 radiating lines per wing pair
    for (let vi = 0; vi < 3; vi++) {
      const vAngle = -0.3 + vi * 0.25;
      const vLen = 0.18 - vi * 0.02;
      const vein = new Mesh(new CylinderGeometry(0.0015, 0.001, vLen, 3), veinMat);
      vein.rotation.x = Math.PI / 2;
      vein.rotation.z = i * (0.3 + vi * 0.2);
      vein.position.set(i * (0.1 + vi * 0.04), 0.006, 0.02 - vi * 0.03);
      pivot.add(vein);
    }

    // Wing margin scallops — tiny dots along outer edge for texture
    const scallMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.3, depthWrite: false });
    for (let sci = 0; sci < 6; sci++) {
      const sa = sci / 6 * Math.PI * 0.8 - 0.2;
      const sr2 = 0.25 + Math.sin(sa * 3) * 0.02;
      const scallop = new Mesh(new SphereGeometry(0.004, 3, 3), scallMat);
      scallop.position.set(i * (sr2 * Math.cos(sa) + 0.05), 0.008, sr2 * Math.sin(sa) - 0.03);
      pivot.add(scallop);
    }

    g.add(pivot);
    g._wingPivots.push({ pivot: pivot, side: i });
  }

  // ---- Legs (3 pairs, thin jointed) ----
  const legMat = new MeshBasicMaterial({ color: C.mothLeg, transparent: true, opacity: 0.35, depthWrite: false });
  for (let i = -1; i <= 1; i += 2) {
    for (let lj = 0; lj < 3; lj++) {
      const leg = new Mesh(new CylinderGeometry(0.002, 0.002, 0.05, 3), legMat);
      leg.position.set(i * 0.035, -0.025, 0.02 + lj * 0.04);
      leg.rotation.z = i * 0.7; leg.rotation.x = -0.2; g.add(leg);
    }
  }

  // ---- Thorax fur tufts (fluffy white patches) ----
  for (let thi = 0; thi < 7; thi++) {
    const thA = sr() * 6.28;
    const fur = new Mesh(new SphereGeometry(0.01, 3, 3), furMat);
    fur.position.set(Math.cos(thA) * 0.045, Math.sin(thA) * 0.04, 0.05 + sr() * 0.08);
    g.add(fur);
  }

  // ---- Faint dust trail (wing scale particles) ----
  const dustMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.2, depthWrite: false });
  const dustMotes = [];
  for (let di = 0; di < 4; di++) {
    const dust = new Mesh(new SphereGeometry(0.006, 3, 3), dustMat);
    dust.position.set((sr() - 0.5) * 0.04, 0, -0.18 - di * 0.04);
    g.add(dust);
    dustMotes.push({ mesh: dust, baseZ: -0.18 - di * 0.04 });
  }

  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, wingMat: wingMat, tails, phase: sr() * 6.28, orbitAng: sr() * 6.28,
    orbitR: 2 + sr() * 4, centerX: x, centerZ: z, floatY: y, flapSpeed: 6 + sr() * 4,
    antennae, dustMotes,
    _init: true, _state: 'patrol', _stT: 0, _attractTarget: null, _restTree: null,
    _prevMx: x, _prevMz: z, _prevY: y, _bank: 0,
    _transitionT: 0, _prevPx: x, _prevPz: z
  };
}
