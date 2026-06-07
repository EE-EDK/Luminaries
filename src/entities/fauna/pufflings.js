// --- Puffling (round hopping creature — enhanced detail) ---
import { ConeGeometry, CylinderGeometry, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makePuff(x, z, opts = {}) {
  const wizardHat = !!opts.wizardHat;
  const skipSceneAdd = !!opts.skipSceneAdd;
  const eyeColor = opts.eyeColor || C.puffEye;
  const g = new Group();

  // Shell group — holds all body parts, receives squash/stretch during hops
  const shell = new Group();
  g.add(shell);

  const bodyMat = new MeshStandardMaterial({
    color: C.puffBody, emissive: C.puffGlow, emissiveIntensity: 0.5, roughness: 0.8
  });
  // Body (big round)
  const body = new Mesh(new SphereGeometry(0.3, 14, 10), bodyMat);
  body.position.y = 0.35; shell.add(body);

  // --- INTERNAL CORE GLOW ---
  const coreMat = new MeshBasicMaterial({ color: C.puffGlow, transparent: true, opacity: 0.8, depthWrite: false });
  const core = new Mesh(new SphereGeometry(0.12, 10, 8), coreMat);
  core.position.y = 0.35; shell.add(core);

  // Belly patch
  const bellyMat = new MeshStandardMaterial({
    color: C.puffBelly, emissive: C.puffGlow, emissiveIntensity: 0.15, roughness: 0.9
  });
  const belly = new Mesh(new SphereGeometry(0.18, 10, 8), bellyMat);
  belly.scale.set(0.7, 0.9, 0.3); belly.position.set(0, 0.32, 0.2); shell.add(belly);
  
  // Head
  const head = new Mesh(new SphereGeometry(0.22, 12, 9), bodyMat);
  head.position.y = 0.65; shell.add(head);

  // Ears
  const ears = [];
  for (let i = -1; i <= 1; i += 2) {
    const ear = new Mesh(new ConeGeometry(0.06, 0.15, 8), bodyMat);
    ear.position.set(i * 0.13, 0.85, 0); ear.rotation.z = i * 0.3; shell.add(ear);
    ears.push({ mesh: ear, side: i, baseRotZ: i * 0.3 });
  }

  // Eyes & Expressive Brows
  const eyeMat = new MeshBasicMaterial({ color: eyeColor });
  const eyes = [];
  const brows = [];
  for (let i = -1; i <= 1; i += 2) {
    const eye = new Mesh(new SphereGeometry(0.035, 10, 8), eyeMat);
    eye.position.set(i * 0.09, 0.68, 0.18); shell.add(eye);
    eyes.push(eye);
    
    // Brow mesh
    const brow = new Mesh(new PlaneGeometry(0.06, 0.02), new MeshBasicMaterial({ color: C.puffBrow }));
    brow.position.set(i * 0.09, 0.74, 0.19);
    brow.rotation.z = i * -0.18;
    shell.add(brow);
    brows.push(brow);
  }

  // Face details: tiny cute nose + simple mouth flap.
  const noseMat = new MeshBasicMaterial({ color: 0x101010 });
  const nose = new Mesh(new SphereGeometry(0.016, 8, 6), noseMat);
  nose.position.set(0, 0.64, 0.225);
  nose.scale.set(1, 0.85, 1.2);
  shell.add(nose);
  const mouthMat = new MeshBasicMaterial({ color: 0x191919, transparent: true, opacity: 0.92 });
  const mouth = new Mesh(new SphereGeometry(0.024, 8, 6), mouthMat);
  mouth.position.set(0, 0.595, 0.22);
  mouth.scale.set(1.0, 0.22, 0.55);
  shell.add(mouth);

  let crownMat = null;
  if (wizardHat) {
    crownMat = new MeshStandardMaterial({
      color: C.puffHatBody, emissive: C.puffHatEmissive, emissiveIntensity: 0.35, roughness: 0.45, metalness: 0.1
    });
    const brim = new Mesh(new CylinderGeometry(0.16, 0.2, 0.02, 16), crownMat);
    brim.position.set(0, 0.86, 0);
    shell.add(brim);
    const cone = new Mesh(new ConeGeometry(0.11, 0.28, 16), crownMat);
    cone.position.set(0, 1.02, 0);
    cone.rotation.z = -0.18;
    shell.add(cone);
    const starMat = new MeshBasicMaterial({ color: C.puffHatStar });
    for (let si = 0; si < 3; si++) {
      const star = new Mesh(new SphereGeometry(0.012, 6, 5), starMat);
      star.position.set((sr() - 0.5) * 0.08, 0.94 + sr() * 0.12, 0.08 + sr() * 0.06);
      shell.add(star);
    }
  }

  // Feet
  for (let i = -1; i <= 1; i += 2) {
    const foot = new Mesh(new SphereGeometry(0.07, 10, 8), bodyMat);
    foot.position.set(i * 0.12, 0.07, 0.05); foot.scale.set(1, 0.5, 1.3); shell.add(foot);
  }

  // --- SPORE TRAIL MOTES ---
  const sporeMat = new MeshBasicMaterial({ color: C.puffGlow, transparent: true, opacity: 0.6, depthWrite: false });
  const spores = [];
  for (let si = 0; si < 4; si++) {
    const spore = new Mesh(new SphereGeometry(0.01, 6, 5), sporeMat);
    spore.position.set(0, 0.3, -0.3 - si * 0.1);
    g.add(spore);
    spores.push(spore);
  }

  g.position.set(x, 0, z);
  if (!skipSceneAdd) scene.add(g);
  return {
    group: g, shell, body, head, ears, eyes, brows, nose, mouth, spores, core,
    bodyMat, bellyMat, crownMat,
    phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.8,
    hopTimer: 0, hopPhase: sr() * 6.28, homeX: x, homeZ: z, state: 'idle', idleTimer: sr() * 3,
    _init: true, _baseY: 0, _lastTX: x, _lastTZ: z,
    _blinkTimer: 2 + Math.random() * 4, _blinkState: 0, _talkTimer: 0
  };
}
