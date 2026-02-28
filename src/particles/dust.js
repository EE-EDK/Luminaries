import * as THREE from 'three';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';
import { getGroundY } from '../world/terrain.js';

// InstancedMesh for all dust motes — single draw call
let iMesh = null;
const dustMotes = [];
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();
const baseColor = new THREE.Color(0x88aa77);

export function initDustMotes(n) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1
  });
  iMesh = new THREE.InstancedMesh(GEO.dustMote, mat, n);
  iMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  iMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.copy(baseColor);
    iMesh.setColorAt(i, tmpColor);
    dustMotes.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 0, active: false });
  }
  iMesh.count = n;
  iMesh.frustumCulled = false;
  scene.add(iMesh);
}

export function spawnDustBurst(px, pz, count) {
  for (let c = 0; c < count; c++) {
    let d = null;
    for (let i = 0; i < dustMotes.length; i++) { if (!dustMotes[i].active) { d = dustMotes[i]; break; } }
    if (!d) continue;
    const a = Math.random() * 6.28, spd = 1 + Math.random() * 2;
    d.x = px + Math.cos(a) * 0.2; d.y = getGroundY(px, pz) + 0.1; d.z = pz + Math.sin(a) * 0.2;
    d.vx = Math.cos(a) * spd; d.vy = 0.5 + Math.random() * 1.5; d.vz = Math.sin(a) * spd;
    d.life = 0.6 + Math.random() * 0.6; d.max = d.life; d.active = true;
  }
}

export function updateDustMotes(dt) {
  let needsColorUpdate = false;
  for (let i = 0; i < dustMotes.length; i++) {
    const d = dustMotes[i];
    if (!d.active) {
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    d.life -= dt;
    if (d.life <= 0) {
      d.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    d.vy -= 3 * dt;
    d.vx *= 0.96; d.vy *= 0.96; d.vz *= 0.96;
    d.x += d.vx * dt;
    d.y += d.vy * dt;
    d.z += d.vz * dt;
    const dustGroundY = getGroundY(d.x, d.z) + 0.05;
    if (d.y < dustGroundY) { d.y = dustGroundY; d.vy = 0; d.vx *= 0.8; d.vz *= 0.8; }
    const opacity = (d.life / d.max) * 0.4;

    dummy.position.set(d.x, d.y, d.z);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    iMesh.setMatrixAt(i, dummy.matrix);

    tmpColor.copy(baseColor).multiplyScalar(opacity);
    iMesh.setColorAt(i, tmpColor);
    needsColorUpdate = true;
  }
  iMesh.instanceMatrix.needsUpdate = true;
  if (needsColorUpdate) iMesh.instanceColor.needsUpdate = true;
}
