// ================================================================
// Orb Collection Burst — golden motes explode from collected orb
// ================================================================
// Spawned at the moment of orb collection. Particles radiate outward
// then drift downward like embers, fading over several seconds.

import { AdditiveBlending, Color, DynamicDrawUsage, InstancedBufferAttribute, InstancedMesh, MeshBasicMaterial, Object3D, SphereGeometry } from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { sr } from '../utils/rng.js';

const ORB_BURST_COUNT = 150;
let mesh = null;
const particles = [];
const dummy = new Object3D();
const tmpColor = new Color();
const goldColor = new Color(C.orbGold);
const glowColor = new Color(C.orbGlow);

export function initOrbBurst() {
  const mat = new MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1,
    blending: AdditiveBlending, depthWrite: false
  });
  const geo = new SphereGeometry(0.05, 4, 3);
  mesh = new InstancedMesh(geo, mat, ORB_BURST_COUNT);
  mesh.instanceMatrix.setUsage(DynamicDrawUsage);
  mesh.instanceColor = new InstancedBufferAttribute(new Float32Array(ORB_BURST_COUNT * 3), 3);
  mesh.instanceColor.setUsage(DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < ORB_BURST_COUNT; i++) {
    mesh.setMatrixAt(i, dummy.matrix);
    tmpColor.copy(goldColor);
    mesh.setColorAt(i, tmpColor);
    particles.push({
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      life: 0, max: 0, active: false,
      phase: sr() * 6.28
    });
  }
  mesh.count = ORB_BURST_COUNT;
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);
}

export function spawnOrbBurst(cx, cy, cz) {
  if (!mesh) return;
  mesh.visible = true;
  const colorArr = mesh.instanceColor.array;
  for (let i = 0; i < ORB_BURST_COUNT; i++) {
    const p = particles[i];
    p.x = cx; p.y = cy; p.z = cz;
    // Spherical burst — mostly upward and outward
    const theta = sr() * 6.28;
    const phi = sr() * Math.PI * 0.8; // bias upward
    const speed = 1.5 + sr() * 4;
    p.vx = Math.sin(phi) * Math.cos(theta) * speed;
    p.vy = Math.cos(phi) * speed * 0.6 + 1.0 + sr() * 1.5;
    p.vz = Math.sin(phi) * Math.sin(theta) * speed;
    p.life = 3 + sr() * 4;
    p.max = p.life;
    p.active = true;
    // Color: 70% gold, 30% warm white
    const c = sr() < 0.7 ? goldColor : glowColor;
    colorArr[i * 3] = c.r * (0.8 + sr() * 0.4);
    colorArr[i * 3 + 1] = c.g * (0.8 + sr() * 0.4);
    colorArr[i * 3 + 2] = c.b * (0.6 + sr() * 0.4);
  }
  mesh.instanceColor.needsUpdate = true;
}

export function updateOrbBurst(dt, t) {
  if (!mesh || !mesh.visible) return;
  let anyActive = false;
  let needsColor = false;
  for (let i = 0; i < ORB_BURST_COUNT; i++) {
    const p = particles[i];
    if (!p.active) {
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    anyActive = true;
    p.life -= dt;
    if (p.life <= 0 || p.y < -1) {
      p.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    // Gravity + drift
    p.vy -= 1.2 * dt;
    p.vx *= 0.992; p.vz *= 0.992;
    // Gentle flutter
    p.vx += Math.sin(t * 2.5 + p.phase) * 0.15 * dt;
    p.vz += Math.cos(t * 2.0 + p.phase * 1.3) * 0.12 * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;

    const frac = p.life / p.max;
    const sparkle = Math.sin(t * 5 + p.phase) * 0.3 + 0.7;
    const scale = (0.4 + sparkle * 0.6) * Math.min(frac * 2, 1);

    dummy.position.set(p.x, p.y, p.z);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);

    // Fade color intensity as particles die
    tmpColor.copy(goldColor).multiplyScalar(frac * sparkle);
    mesh.setColorAt(i, tmpColor);
    needsColor = true;
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (needsColor) mesh.instanceColor.needsUpdate = true;
  if (!anyActive) mesh.visible = false;
}
