import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { getGroundY } from '../world/terrain.js';

// ================================================================
// Bioluminescent Footprint Trails
// ================================================================
// InstancedMesh pool of flat quads on the ground. Single draw call.
// Glow briefly then fade. Rain accelerates decay.

const POOL = 40;
const LIFETIME = 8.0; // seconds

let iMesh = null;
const prints = [];
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();
const baseColor = new THREE.Color(0x44ddaa);

// Track player position for spawn spacing
let lastX = 0, lastZ = 0;
let inited = false;

function createFootShape() {
  const s = new THREE.Shape();
  // 3-toed dinosaur/reptile foot — approx 0.28 wide, 0.45 tall
  // Origin at center of the shape. Y points forward (toes up).

  // Start at heel center (bottom)
  s.moveTo(0, -0.18);

  // Right side of pad — curve outward
  s.quadraticCurveTo(0.10, -0.17, 0.11, -0.06);

  // Right toe — angled outward ~25deg
  s.lineTo(0.10, -0.02);
  s.lineTo(0.13, 0.12);
  s.quadraticCurveTo(0.125, 0.14, 0.11, 0.12);
  s.lineTo(0.08, 0.0);

  // Valley between right and center toe
  s.quadraticCurveTo(0.05, -0.02, 0.03, 0.0);

  // Center toe — longest, pointing straight up
  s.lineTo(0.03, 0.05);
  s.lineTo(0.02, 0.22);
  s.quadraticCurveTo(0, 0.245, -0.02, 0.22);
  s.lineTo(-0.03, 0.05);
  s.lineTo(-0.03, 0.0);

  // Valley between center and left toe
  s.quadraticCurveTo(-0.05, -0.02, -0.08, 0.0);

  // Left toe — angled outward ~25deg
  s.lineTo(-0.11, 0.12);
  s.quadraticCurveTo(-0.125, 0.14, -0.13, 0.12);
  s.lineTo(-0.10, -0.02);

  // Left side of pad — curve back to heel
  s.lineTo(-0.11, -0.06);
  s.quadraticCurveTo(-0.10, -0.17, 0, -0.18);

  return new THREE.ShapeGeometry(s);
}

export function initFootprints() {
  const geo = createFootShape();
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1,
    blending: THREE.AdditiveBlending, depthWrite: false,
    side: THREE.DoubleSide
  });
  iMesh = new THREE.InstancedMesh(geo, mat, POOL);
  iMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  iMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(POOL * 3), 3);
  iMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  // Hide all instances initially
  dummy.position.set(0, -100, 0);
  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < POOL; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.setScalar(0);
    iMesh.setColorAt(i, tmpColor);
    prints.push({ active: false, life: 0, maxLife: LIFETIME, x: 0, z: 0 });
  }
  iMesh.count = POOL;
  iMesh.frustumCulled = false;
  scene.add(iMesh);
  inited = true;
}

export function spawnFootprint(x, z, angle, sprinting) {
  if (!inited) return;

  // Spacing check — only spawn every ~0.8m (or 0.5m sprinting)
  const dx = x - lastX, dz = z - lastZ;
  const d2 = dx * dx + dz * dz;
  const threshold = sprinting ? 0.25 : 0.64;
  if (d2 < threshold) return;
  lastX = x; lastZ = z;

  // Find inactive slot (or oldest)
  let slot = null, si = -1;
  for (let i = 0; i < prints.length; i++) {
    if (!prints[i].active) { slot = prints[i]; si = i; break; }
  }
  if (!slot) {
    let oldest = Infinity;
    for (let i = 0; i < prints.length; i++) {
      if (prints[i].life < oldest) { oldest = prints[i].life; slot = prints[i]; si = i; }
    }
  }

  const groundY = getGroundY(x, z);
  slot.active = true;
  slot.life = LIFETIME;
  slot.maxLife = LIFETIME;
  slot.x = x;
  slot.z = z;

  // Slight random offset for alternating left/right foot feel
  const side = (si % 2 === 0 ? 1 : -1);
  const offX = Math.sin(angle + Math.PI / 2) * 0.12 * side;
  const offZ = Math.cos(angle + Math.PI / 2) * 0.12 * side;

  const scale = sprinting ? 1.15 : 1.0;
  dummy.position.set(x + offX, groundY + 0.015, z + offZ);
  dummy.rotation.set(-Math.PI / 2, 0, -angle + (Math.random() - 0.5) * 0.15);
  dummy.scale.set(scale, scale, scale);
  dummy.updateMatrix();
  iMesh.setMatrixAt(si, dummy.matrix);

  // Brighter start color when sprinting
  const brightness = sprinting ? 0.9 : 0.6;
  tmpColor.copy(baseColor).multiplyScalar(brightness);
  iMesh.setColorAt(si, tmpColor);
}

export function updateFootprints(dt, rainRate) {
  if (!inited) return;

  const decayMult = 1.0 + (rainRate || 0) * 1.5; // rain washes prints faster
  let needsColor = false;

  for (let i = 0; i < prints.length; i++) {
    const p = prints[i];
    if (!p.active) continue;

    p.life -= dt * decayMult;
    if (p.life <= 0) {
      p.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      tmpColor.setScalar(0);
      iMesh.setColorAt(i, tmpColor);
      needsColor = true;
      continue;
    }

    // Fade color based on remaining life
    const frac = p.life / p.maxLife;
    // Smooth ease-out fade
    const alpha = frac * frac;
    tmpColor.copy(baseColor).multiplyScalar(alpha * 0.6);
    iMesh.setColorAt(i, tmpColor);
    needsColor = true;
  }

  iMesh.instanceMatrix.needsUpdate = true;
  if (needsColor) iMesh.instanceColor.needsUpdate = true;
}
