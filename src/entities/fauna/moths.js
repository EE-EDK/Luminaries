// --- Luna Moth (large glowing wings — enhanced detail) ---
import { ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeMoth(x, y, z) {
  const g = new Group();
  // Body (elongated cylinder)
  const bodyMat = new MeshStandardMaterial({
    color: C.mothBody, emissive: C.mothGlow, emissiveIntensity: 0.3, roughness: 0.7
  });
  const body = new Mesh(new CylinderGeometry(0.04, 0.05, 0.3, 5), bodyMat);
  body.rotation.x = Math.PI / 2; g.add(body);
  // Abdomen taper — tapered rear segment for realistic moth silhouette
  const abdomenMat = new MeshStandardMaterial({
    color: C.mothBody, emissive: C.mothGlow, emissiveIntensity: 0.35, roughness: 0.7
  });
  const abdomen = new Mesh(new ConeGeometry(0.045, 0.12, 5), abdomenMat);
  abdomen.rotation.x = Math.PI / 2 + 0.15; // slight upward curl
  abdomen.position.z = -0.2; g.add(abdomen);
  // Abdomen segment rings (3 subtle bands)
  const segMat = new MeshStandardMaterial({
    color: C.mothBody, emissive: C.mothGlow, emissiveIntensity: 0.5, roughness: 0.6
  });
  for (let si = 0; si < 3; si++) {
    const seg = new Mesh(new TorusGeometry(0.045, 0.006, 4, 8), segMat);
    seg.position.z = -0.05 + si * 0.06; seg.rotation.x = 0; g.add(seg);
  }
  // Head
  const head = new Mesh(new SphereGeometry(0.05, 5, 4), bodyMat);
  head.position.z = 0.18; g.add(head);
  // Compound eyes (2 dark faceted spheres)
  const eyeMat = new MeshStandardMaterial({ color: 0x112233, roughness: 0.2, metalness: 0.4 });
  for (let i = -1; i <= 1; i += 2) {
    const eye = new Mesh(new SphereGeometry(0.018, 4, 3), eyeMat);
    eye.position.set(i * 0.03, 0.01, 0.21); g.add(eye);
  }
  // Antennae (2 thin cylinders) with feathered tips — stored for sway animation
  const antennae = [];
  for (let i = -1; i <= 1; i += 2) {
    const antPivot = new Group();
    antPivot.position.set(i * 0.03, 0.03, 0.22);
    const ant = new Mesh(new CylinderGeometry(0.005, 0.005, 0.15, 3), bodyMat);
    ant.rotation.x = -0.6; ant.rotation.z = i * 0.4; antPivot.add(ant);
    // Feathered tip (tiny flattened sphere)
    const tipMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.7 });
    const tip = new Mesh(new SphereGeometry(0.015, 3, 3), tipMat);
    tip.scale.set(2, 0.5, 1);
    tip.position.set(i * 0.02, 0.09, 0.06); antPivot.add(tip);
    // Feathered barbs along antenna shaft
    for (let bi = 0; bi < 3; bi++) {
      const barb = new Mesh(new CylinderGeometry(0.001, 0.001, 0.02, 3), tipMat);
      barb.position.set(i * 0.005, 0.03 + bi * 0.025, 0.02 + bi * 0.01);
      barb.rotation.z = i * 0.6; antPivot.add(barb);
    }
    g.add(antPivot);
    antennae.push(antPivot);
  }
  // Wings (4 flattened spheres — 2 large, 2 small hindwings)
  const wingMat = new MeshStandardMaterial({
    color: C.mothWing, emissive: C.mothGlow, emissiveIntensity: 0.8,
    transparent: true, opacity: 0.6, side: DoubleSide, roughness: 0.4
  });
  // Pivots for wing flapping
  g._wingPivots = [];
  for (let i = -1; i <= 1; i += 2) {
    const pivot = new Group();
    pivot.position.set(i * 0.04, 0, 0.02);
    // Forewing
    const fw = new Mesh(new SphereGeometry(0.2, 6, 4), wingMat);
    fw.scale.set(1.8, 0.08, 1.2); fw.position.set(i * 0.18, 0, 0.02); pivot.add(fw);
    // Hindwing (smaller)
    const hw = new Mesh(new SphereGeometry(0.12, 5, 3), wingMat);
    hw.scale.set(1.5, 0.06, 1.0); hw.position.set(i * 0.12, 0, -0.1); pivot.add(hw);
    // Hindwing tail streamer
    const streamMat = new MeshStandardMaterial({
      color: C.mothWing, emissive: C.mothGlow, emissiveIntensity: 0.6,
      transparent: true, opacity: 0.45, side: DoubleSide
    });
    const stream = new Mesh(new PlaneGeometry(0.03, 0.12), streamMat);
    stream.position.set(i * 0.1, 0, -0.18); stream.rotation.y = i * 0.2; pivot.add(stream);
    // Wing spots — primary eye spot
    const spotMat = new MeshBasicMaterial({ color: C.mothSpot, transparent: true, opacity: 0.9 });
    const spot = new Mesh(new SphereGeometry(0.03, 4, 3), spotMat);
    spot.position.set(i * 0.2, 0.02, 0.03); pivot.add(spot);
    // Secondary smaller spot on hindwing
    const spot2 = new Mesh(new SphereGeometry(0.018, 3, 3), spotMat);
    spot2.position.set(i * 0.1, 0.02, -0.08); pivot.add(spot2);
    // Wing vein lines (2 radial thin cylinders per wing)
    const veinMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.25 });
    for (let vi = 0; vi < 2; vi++) {
      const vein = new Mesh(new CylinderGeometry(0.002, 0.002, 0.2, 3), veinMat);
      vein.position.set(i * 0.15, 0.01, -0.02 + vi * 0.06);
      vein.rotation.z = Math.PI / 2 + i * (0.15 + vi * 0.15); pivot.add(vein);
    }
    // Wing scale patterns — overlapping circles suggesting scale texture
    const scaleMat = new MeshBasicMaterial({
      color: C.mothWing, transparent: true, opacity: 0.15
    });
    for (let sci = 0; sci < 4; sci++) {
      const scale = new Mesh(new SphereGeometry(0.025 + sci * 0.005, 3, 3), scaleMat);
      scale.scale.set(1.2, 0.04, 0.8);
      scale.position.set(
        i * (0.1 + sci * 0.04),
        0.015,
        -0.04 + sci * 0.03
      );
      pivot.add(scale);
    }
    g.add(pivot);
    g._wingPivots.push({ pivot: pivot, side: i });
  }
  // Faint dust trail (tiny motes behind body) — stored for trailing animation
  const dustMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.25 });
  const dustMotes = [];
  for (let di = 0; di < 3; di++) {
    const dust = new Mesh(new SphereGeometry(0.008, 3, 3), dustMat);
    dust.position.set((sr() - 0.5) * 0.04, 0, -0.15 - di * 0.05);
    g.add(dust);
    dustMotes.push({ mesh: dust, baseZ: -0.15 - di * 0.05 });
  }

  // Proboscis (coiled feeding tube under head)
  const probMat = new MeshBasicMaterial({ color: 0x444433, transparent: true, opacity: 0.5 });
  const prob = new Mesh(new TorusGeometry(0.015, 0.003, 4, 8, Math.PI * 1.5), probMat);
  prob.position.set(0, -0.02, 0.2); prob.rotation.x = 0.4; g.add(prob);

  // Thorax fur dots (tiny bumps on body)
  const thoraxMat = new MeshStandardMaterial({
    color: C.mothBody, emissive: C.mothGlow, emissiveIntensity: 0.4, roughness: 1.0
  });
  for (let thi = 0; thi < 5; thi++) {
    const thA = sr() * 6.28;
    const fur = new Mesh(new SphereGeometry(0.008, 3, 3), thoraxMat);
    fur.position.set(Math.cos(thA) * 0.04, Math.sin(thA) * 0.04, sr() * 0.15 - 0.05);
    g.add(fur);
  }

  // Leg segments (3 pairs, tiny jointed sticks)
  const legMat = new MeshBasicMaterial({ color: C.mothBody, transparent: true, opacity: 0.4 });
  for (let li = -1; li <= 1; li += 2) {
    for (let lj = 0; lj < 3; lj++) {
      const leg = new Mesh(new CylinderGeometry(0.002, 0.002, 0.06, 3), legMat);
      leg.position.set(li * 0.04, -0.03, -0.05 + lj * 0.06);
      leg.rotation.z = li * 0.8; leg.rotation.x = -0.3; g.add(leg);
    }
  }

  // Wing edge fringe dots (tiny scallops along forewing edge)
  const fringeMat = new MeshBasicMaterial({ color: C.mothGlow, transparent: true, opacity: 0.35 });
  for (let i = -1; i <= 1; i += 2) {
    for (let fri = 0; fri < 5; fri++) {
      const fAngle = fri / 5 * Math.PI - Math.PI / 2;
      const frDot = new Mesh(new SphereGeometry(0.006, 3, 3), fringeMat);
      frDot.position.set(i * (0.3 + Math.cos(fAngle) * 0.05), Math.sin(fAngle) * 0.02, 0.02 + fri * 0.04);
      g.add(frDot);
    }
  }

  g.position.set(x, y, z); scene.add(g);
  return {
    group: g, wingMat: wingMat, phase: sr() * 6.28, orbitAng: sr() * 6.28,
    orbitR: 2 + sr() * 4, centerX: x, centerZ: z, floatY: y, flapSpeed: 6 + sr() * 4,
    antennae, dustMotes,
    _init: true, _state: 'patrol', _stT: 0, _attractTarget: null, _restTree: null,
    _prevMx: x, _prevMz: z, _prevY: y, _bank: 0,
    _transitionT: 0, _prevPx: x, _prevPz: z
  };
}
