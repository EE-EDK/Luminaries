import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';

// InstancedMesh for star motes — single draw call
let iMesh = null;
const starMotes = [];
let starTimer = 0;
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();
const baseColor = new THREE.Color(C.starMote);

export function initStarMotes(n) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1
  });
  iMesh = new THREE.InstancedMesh(GEO.starMote, mat, n);
  iMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  iMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.copy(baseColor);
    iMesh.setColorAt(i, tmpColor);
    starMotes.push({ x: 0, y: 0, z: 0, life: 0, max: 0, active: false, vy: 0, drift: 0 });
  }
  iMesh.count = n;
  scene.add(iMesh);
}

function spawnStarMote(playerPos) {
  let s = null;
  for (let i = 0; i < starMotes.length; i++) { if (!starMotes[i].active) { s = starMotes[i]; break; } }
  if (!s) return;
  s.x = playerPos.x + (Math.random() - 0.5) * 60;
  s.z = playerPos.z + (Math.random() - 0.5) * 60;
  s.y = 15 + Math.random() * 20;
  s.life = 6 + Math.random() * 6; s.max = s.life; s.active = true;
  s.vy = -0.15 - Math.random() * 0.3;
  s.drift = Math.random() * 6.28;
}

export function updateStarMotes(dt, t, playerPos) {
  starTimer += dt;
  if (starTimer > 0.15) { starTimer = 0; spawnStarMote(playerPos); }
  let needsColorUpdate = false;
  for (let i = 0; i < starMotes.length; i++) {
    const s = starMotes[i];
    if (!s.active) {
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    s.life -= dt;
    if (s.life <= 0 || s.y < 0.5) {
      s.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    s.y += s.vy * dt;
    s.drift += (Math.random() - 0.5) * 0.5 * dt;
    s.x += Math.sin(s.drift) * 0.1 * dt;
    s.z += Math.cos(s.drift) * 0.08 * dt;
    const frac = s.life / s.max;
    const twinkle = Math.sin(t * 4 + i) * 0.3 + 0.7;
    const opacity = frac * twinkle * 0.7;
    const scale = 0.5 + twinkle * 0.5;

    dummy.position.set(s.x, s.y, s.z);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    iMesh.setMatrixAt(i, dummy.matrix);

    tmpColor.copy(baseColor).multiplyScalar(opacity);
    iMesh.setColorAt(i, tmpColor);
    needsColorUpdate = true;
  }
  iMesh.instanceMatrix.needsUpdate = true;
  if (needsColorUpdate) iMesh.instanceColor.needsUpdate = true;
}
