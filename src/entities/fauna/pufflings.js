// --- Puffling (round hopping creature — enhanced detail) ---
import { CircleGeometry, ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makePuff(x, z) {
  const g = new Group();
  const bodyMat = new MeshStandardMaterial({
    color: C.puffBody, emissive: C.puffGlow, emissiveIntensity: 0.3, roughness: 0.8
  });
  // Body (big round)
  const body = new Mesh(new SphereGeometry(0.3, 8, 6), bodyMat);
  body.position.y = 0.35; g.add(body);
  // Belly patch (lighter toned oval on front)
  const bellyMat = new MeshStandardMaterial({
    color: 0xfff0e0, emissive: C.puffGlow, emissiveIntensity: 0.15, roughness: 0.9
  });
  const belly = new Mesh(new SphereGeometry(0.18, 6, 4), bellyMat);
  belly.scale.set(0.7, 0.9, 0.3); belly.position.set(0, 0.32, 0.2); g.add(belly);
  // Head (slightly smaller, on top)
  const head = new Mesh(new SphereGeometry(0.22, 7, 5), bodyMat);
  head.position.y = 0.65; g.add(head);
  // Ears (2 small cones — tracked for wiggle animation)
  const ears = [];
  for (let i = -1; i <= 1; i += 2) {
    const ear = new Mesh(new ConeGeometry(0.06, 0.15, 4), bodyMat);
    ear.position.set(i * 0.13, 0.85, 0);
    ear.rotation.z = i * 0.3;
    g.add(ear);
    ears.push({ mesh: ear, side: i, baseRotZ: i * 0.3 });
    // Inner ear (pink)
    const innerEar = new Mesh(new ConeGeometry(0.03, 0.08, 4),
      new MeshStandardMaterial({ color: C.puffCheek, emissive: C.puffCheek, emissiveIntensity: 0.2 }));
    innerEar.position.set(i * 0.13, 0.84, 0.01); innerEar.rotation.z = i * 0.3; g.add(innerEar);
    ears.push({ mesh: innerEar, side: i, baseRotZ: i * 0.3 });
  }
  // Eyes (2 dark dots — tracked for blink animation)
  const eyeMat = new MeshBasicMaterial({ color: C.puffEye });
  const eyes = [];
  for (let i = -1; i <= 1; i += 2) {
    const eye = new Mesh(new SphereGeometry(0.035, 4, 4), eyeMat);
    eye.position.set(i * 0.09, 0.68, 0.18); g.add(eye);
    eyes.push(eye);
    // Eye highlight (white catch light)
    const hlMat = new MeshBasicMaterial({ color: 0xffffff });
    const hl = new Mesh(new SphereGeometry(0.012, 3, 3), hlMat);
    hl.position.set(i * 0.09 + i * 0.015, 0.695, 0.2); g.add(hl);
    eyes.push(hl);
  }
  // Nose (tiny dark dot)
  const noseMat = new MeshBasicMaterial({ color: 0x443333 });
  const nose = new Mesh(new SphereGeometry(0.015, 3, 3), noseMat);
  nose.position.set(0, 0.63, 0.22); g.add(nose);
  // Cheeks (2 pink spots)
  const chkMat = new MeshStandardMaterial({ color: C.puffCheek, emissive: C.puffCheek, emissiveIntensity: 0.3 });
  for (let i = -1; i <= 1; i += 2) {
    const chk = new Mesh(new SphereGeometry(0.04, 4, 3), chkMat);
    chk.position.set(i * 0.15, 0.61, 0.15); g.add(chk);
  }
  // Whisker nubs (4 tiny cylinders)
  const whiskMat = new MeshBasicMaterial({ color: 0xeeddcc, transparent: true, opacity: 0.5 });
  for (let i = -1; i <= 1; i += 2) {
    for (let j = 0; j < 2; j++) {
      const wh = new Mesh(new CylinderGeometry(0.002, 0.002, 0.06, 3), whiskMat);
      wh.position.set(i * 0.12, 0.62 - j * 0.03, 0.2);
      wh.rotation.z = i * 0.7 + j * i * 0.2; wh.rotation.x = -0.1; g.add(wh);
    }
  }
  // Feet (2 little spheres) with toe beans
  for (let i = -1; i <= 1; i += 2) {
    const foot = new Mesh(new SphereGeometry(0.07, 4, 3), bodyMat);
    foot.position.set(i * 0.12, 0.07, 0.05); foot.scale.set(1, 0.5, 1.3); g.add(foot);
    // Toe bean pads (3 tiny pink dots on sole)
    const beanMat = new MeshStandardMaterial({ color: 0xffaaaa, emissive: 0xff8888, emissiveIntensity: 0.1 });
    for (let bi = 0; bi < 3; bi++) {
      const ba = bi / 3 * 6.28;
      const bean = new Mesh(new SphereGeometry(0.012, 3, 3), beanMat);
      bean.position.set(i * 0.12 + Math.cos(ba) * 0.03, 0.03, 0.05 + Math.sin(ba) * 0.03);
      g.add(bean);
    }
  }
  // Tail pom (fluffy ball on back)
  const tailMat = new MeshStandardMaterial({
    color: 0xffffff, emissive: C.puffGlow, emissiveIntensity: 0.4, roughness: 0.9
  });
  const tail = new Mesh(new SphereGeometry(0.06, 5, 4), tailMat);
  tail.position.set(0, 0.38, -0.28); g.add(tail);

  // Fur tuft dots (tiny surface bumps on body)
  const furMat = new MeshStandardMaterial({
    color: C.puffBody, emissive: C.puffGlow, emissiveIntensity: 0.2, roughness: 1.0
  });
  for (let fi = 0; fi < 6; fi++) {
    const fa = sr() * 6.28, fEl = sr() * 1.2;
    const fur = new Mesh(new SphereGeometry(0.01, 3, 3), furMat);
    fur.position.set(Math.cos(fa) * 0.28, 0.25 + fEl * 0.2, Math.sin(fa) * 0.28);
    g.add(fur);
  }

  // Brow marks (tiny arched lines above eyes)
  const browMat = new MeshBasicMaterial({ color: C.puffBody });
  for (let i = -1; i <= 1; i += 2) {
    const brow = new Mesh(new CylinderGeometry(0.003, 0.003, 0.04, 3), browMat);
    brow.position.set(i * 0.09, 0.72, 0.17); brow.rotation.z = i * 0.3; g.add(brow);
  }

  // Tiny mouth line (faint smile)
  const mouthMat = new MeshBasicMaterial({ color: 0x553344, transparent: true, opacity: 0.5 });
  const mouth = new Mesh(new CylinderGeometry(0.002, 0.002, 0.03, 3), mouthMat);
  mouth.position.set(0, 0.59, 0.22); mouth.rotation.z = Math.PI / 2; g.add(mouth);

  // --- Orbiting sparkle motes ---
  const sparkMat = new MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0.6
  });
  const sparkles = [];
  for (let si = 0; si < 3; si++) {
    const spark = new Mesh(new SphereGeometry(0.01, 3, 3), sparkMat.clone());
    spark.position.set(0, 0.5, 0);
    g.add(spark);
    sparkles.push({ mesh: spark, mat: spark.material, phase: sr() * 6.28, orbitR: 0.28 + sr() * 0.1 });
  }

  // --- Body pattern spots ---
  const patternMat = new MeshBasicMaterial({
    color: C.puffGlow, transparent: true, opacity: 0.15, side: DoubleSide
  });
  for (let pi = 0; pi < 4; pi++) {
    const pa = sr() * 6.28, pEl = (sr() - 0.5) * 0.4;
    const pat = new Mesh(new CircleGeometry(0.02 + sr() * 0.012, 5), patternMat);
    pat.position.set(Math.cos(pa) * 0.27, 0.35 + pEl * 0.15, Math.sin(pa) * 0.27);
    pat.lookAt(0, 0.35, 0);
    g.add(pat);
  }

  // --- Tiny flower crown (40% chance) ---
  let crownMat = null;
  if (sr() < 0.4) {
    crownMat = new MeshStandardMaterial({
      color: C.flower, emissive: C.flowerGlow, emissiveIntensity: 0.3
    });
    // Petal ring
    for (let ci = 0; ci < 3; ci++) {
      const ca = (ci / 3) * 6.28;
      const petal = new Mesh(new ConeGeometry(0.015, 0.03, 3), crownMat);
      petal.position.set(Math.cos(ca) * 0.035, 0.88, Math.sin(ca) * 0.035);
      petal.rotation.z = -Math.cos(ca) * 0.5;
      petal.rotation.x = Math.sin(ca) * 0.5;
      g.add(petal);
    }
    // Center dot
    const bud = new Mesh(new SphereGeometry(0.01, 3, 3),
      new MeshStandardMaterial({ color: 0xffee44, emissive: 0xffdd22, emissiveIntensity: 0.4 }));
    bud.position.set(0, 0.89, 0); g.add(bud);
  }

  // Ground glow disc — subtle attunement importance hint
  const glowMat = new MeshBasicMaterial({
    color: C.puffGlow, transparent: true, opacity: 0.0, depthWrite: false, side: DoubleSide
  });
  const glowDisc = new Mesh(new CircleGeometry(0.5, 8), glowMat);
  glowDisc.rotation.x = -Math.PI / 2;
  glowDisc.position.y = 0.02;
  g.add(glowDisc);

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, body, head, ears, eyes, tail, sparkles, crownMat, bodyMat, glowMat,
    phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.8,
    hopTimer: 0, hopPhase: sr() * 6.28, homeX: x, homeZ: z, state: 'idle', idleTimer: sr() * 3,
    _init: true, _followT: 0, _scaredT: 0, _huddleTarget: -1,
    _baseY: 0, _lastTX: x, _lastTZ: z,
    _blinkTimer: 2 + Math.random() * 4, _blinkState: 0
  };
}
