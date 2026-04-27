// --- Puffling (round hopping creature — enhanced detail) ---
import { CircleGeometry, ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makePuff(x, z, opts = {}) {
  const wizardHat = !!opts.wizardHat;
  const disableAccessories = !!opts.disableAccessories;
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

  // Rounded fur nubs — replaces flat alpha planes that looked like squares.
  const furMat = new MeshStandardMaterial({
    color: C.puffBody, emissive: C.puffGlow, emissiveIntensity: 0.08, roughness: 0.95
  });
  for (let fi = 0; fi < 10; fi++) {
    const fa = sr() * 6.28;
    const fy = 0.3 + sr() * 0.35;
    const fr = 0.25 + sr() * 0.05;
    const nub = new Mesh(new SphereGeometry(0.035 + sr() * 0.01, 6, 5), furMat);
    nub.position.set(Math.cos(fa) * fr, fy, Math.sin(fa) * fr);
    nub.scale.set(1.0 + sr() * 0.25, 0.75 + sr() * 0.2, 1.0 + sr() * 0.25);
    shell.add(nub);
  }

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
    brow.rotation.z = i * 0.2;
    shell.add(brow);
    brows.push(brow);
  }

  // --- SYMBIOTIC ACCESSORIES (Moss or Mushroom) ---
  const accChance = sr();
  if (!disableAccessories && accChance < 0.3) {
    // Small mushroom
    const mushCap = new Mesh(new SphereGeometry(0.06, 10, 8), new MeshStandardMaterial({ color: C.puffMushroom }));
    mushCap.scale.set(1, 0.5, 1); mushCap.position.set(0.15, 0.85, -0.1); shell.add(mushCap);
  } else if (!disableAccessories && accChance < 0.6) {
    // Moss patch
    const moss = new Mesh(new SphereGeometry(0.1, 10, 8), new MeshStandardMaterial({ color: C.puffMoss }));
    moss.scale.set(1, 0.3, 1.2); moss.position.set(-0.12, 0.55, -0.2); shell.add(moss);
  }

  let crownMat = null;
  if (wizardHat) {
    crownMat = new MeshStandardMaterial({
      color: 0x2a1658, emissive: 0x5533aa, emissiveIntensity: 0.35, roughness: 0.45, metalness: 0.1
    });
    const brim = new Mesh(new CylinderGeometry(0.16, 0.2, 0.02, 16), crownMat);
    brim.position.set(0, 0.86, 0);
    shell.add(brim);
    const cone = new Mesh(new ConeGeometry(0.11, 0.28, 16), crownMat);
    cone.position.set(0, 1.02, 0);
    cone.rotation.z = -0.18;
    shell.add(cone);
    const starMat = new MeshBasicMaterial({ color: 0x88ccff });
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

  // Tail pom
  const tail = new Mesh(new SphereGeometry(0.06, 10, 8), new MeshStandardMaterial({ color: C.puffTail, roughness: 0.9 }));
  tail.position.set(0, 0.38, -0.28); shell.add(tail);

  // --- SPORE TRAIL MOTES ---
  const sporeMat = new MeshBasicMaterial({ color: C.puffGlow, transparent: true, opacity: 0.6, depthWrite: false });
  const spores = [];
  for (let si = 0; si < 4; si++) {
    const spore = new Mesh(new SphereGeometry(0.01, 6, 5), sporeMat);
    spore.position.set(0, 0.3, -0.3 - si * 0.1);
    g.add(spore);
    spores.push(spore);
  }

  // Ground glow
  const glowMat = new MeshBasicMaterial({ color: C.puffGlow, transparent: true, opacity: 0.1, depthWrite: false, side: DoubleSide });
  const glowDisc = new Mesh(new CircleGeometry(0.5, 8), glowMat);
  glowDisc.rotation.x = -Math.PI / 2; glowDisc.position.y = 0.02; g.add(glowDisc);

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, shell, body, head, ears, eyes, brows, tail, spores, core, bodyMat, glowMat, crownMat,
    phase: sr() * 6.28, wanderAng: sr() * 6.28, speed: 0.6 + sr() * 0.8,
    hopTimer: 0, hopPhase: sr() * 6.28, homeX: x, homeZ: z, state: 'idle', idleTimer: sr() * 3,
    _init: true, _baseY: 0, _lastTX: x, _lastTZ: z,
    _blinkTimer: 2 + Math.random() * 4, _blinkState: 0
  };
}

export function updatePuff(p, dt, playerPos) {
  const g = p.group;
  p.phase += dt * 2.0;

  // 1. STATE & WANDER
  const distSq = g.position.distanceToSquared(playerPos);
  if (distSq < 16) {
    p.state = 'scared';
    p.idleTimer = 0;
  }

  if (p.state === 'idle') {
    p.idleTimer -= dt;
    if (p.idleTimer <= 0) {
      p.state = 'hop';
      p.hopTimer = 0.6 + Math.random() * 0.4;
      p.wanderAng += (Math.random() - 0.5) * 2.0;
    }
    // Idle wiggle
    p.shell.rotation.z = Math.sin(p.phase * 2) * 0.05;
  } else if (p.state === 'hop' || p.state === 'scared') {
    const isScared = p.state === 'scared';
    const speedMult = isScared ? 2.5 : 1.0;
    
    p.hopPhase += dt * 10 * speedMult;
    const jump = Math.abs(Math.sin(p.hopPhase));
    
    // Move forward
    g.position.x += Math.sin(p.wanderAng) * p.speed * speedMult * dt * (jump > 0.2 ? 1 : 0);
    g.position.z += Math.cos(p.wanderAng) * p.speed * speedMult * dt * (jump > 0.2 ? 1 : 0);
    g.position.y = jump * 0.4;

    // 2. SQUASH & STRETCH
    // Stretch when going up, squash when landing
    const sq = 1.0 - jump * 0.2;
    const st = 1.0 + jump * 0.3;
    p.shell.scale.set(sq, st, sq);

    if (p.state === 'hop') {
      p.hopTimer -= dt;
      if (p.hopTimer <= 0 && jump < 0.1) {
        p.state = 'idle';
        p.idleTimer = 1 + Math.random() * 2;
      }
    } else if (isScared && distSq > 49) {
      p.state = 'idle';
    }
  }

  // 3. CORE GLOW PULSE
  p.core.material.opacity = 0.5 + Math.sin(p.phase * 4) * 0.3;
  p.core.scale.setScalar(0.9 + Math.sin(p.phase * 4) * 0.1);

  // 4. EXPRESSIVE BROWS
  const browTilt = (distSq < 25) ? -0.4 : 0.2; // Grumpy/scared if close
  p.brows.forEach((b, i) => {
    b.rotation.z = (i === 0 ? 1 : -1) * browTilt;
  });

  // 5. BLINKING
  p._blinkTimer -= dt;
  if (p._blinkTimer <= 0) {
    p._blinkState = 1.0;
    p._blinkTimer = 2 + Math.random() * 5;
  }
  if (p._blinkState > 0) {
    p._blinkState -= dt * 10;
    const bs = Math.max(0, p._blinkState);
    p.eyes.forEach(e => {
      if (e.geometry.type === 'SphereGeometry') e.scale.y = bs < 0.1 ? 0.1 : 1.0;
    });
  }

  // 6. SPORE TRAIL
  p.spores.forEach((s, i) => {
    const targetX = p._lastTX;
    const targetZ = p._lastTZ;
    s.position.lerp({ x: targetX, y: 0.3, z: targetZ }, 0.1);
    s.material.opacity = 0.6 * (1.0 - i / 4);
  });
  p._lastTX = g.position.x; p._lastTZ = g.position.z;

  g.rotation.y = p.wanderAng;
}
