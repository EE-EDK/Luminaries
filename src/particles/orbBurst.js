// ================================================================
// Orb Collection Burst — golden motes explode from collected orb
// ================================================================
// Spawned at the moment of orb collection. Particles radiate outward
// then drift downward like embers, fading over several seconds.

import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';

const ORB_BURST_COUNT = 150;
let mesh = null;
const particles = [];
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();
const goldColor = new THREE.Color(C.orbGold);
const glowColor = new THREE.Color(C.orbGlow);

export function initOrbBurst() {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const geo = new THREE.SphereGeometry(0.05, 4, 3);
  mesh = new THREE.InstancedMesh(geo, mat, ORB_BURST_COUNT);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(ORB_BURST_COUNT * 3), 3);
  mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

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
      phase: Math.random() * 6.28
    });
  }
  mesh.count = ORB_BURST_COUNT;
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);
}

export function spawnOrbBurst(cx, cy, cz) {
  mesh.visible = true;
  for (let i = 0; i < ORB_BURST_COUNT; i++) {
    const p = particles[i];
    p.x = cx; p.y = cy; p.z = cz;
    // Spherical burst — mostly upward and outward
    const theta = Math.random() * 6.28;
    const phi = Math.random() * Math.PI * 0.8; // bias upward
    const speed = 1.5 + Math.random() * 4;
    p.vx = Math.sin(phi) * Math.cos(theta) * speed;
    p.vy = Math.cos(phi) * speed * 0.6 + 1.0 + Math.random() * 1.5;
    p.vz = Math.sin(phi) * Math.sin(theta) * speed;
    p.life = 3 + Math.random() * 4;
    p.max = p.life;
    p.active = true;
    // Color: 70% gold, 30% warm white
    const c = Math.random() < 0.7 ? goldColor : glowColor;
    const colorArr = mesh.instanceColor.array;
    colorArr[i * 3] = c.r * (0.8 + Math.random() * 0.4);
    colorArr[i * 3 + 1] = c.g * (0.8 + Math.random() * 0.4);
    colorArr[i * 3 + 2] = c.b * (0.6 + Math.random() * 0.4);
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
