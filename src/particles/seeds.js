import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';

// InstancedMesh for dandelion seeds — single draw call
let iMesh = null;
const dandSeeds = [];
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();
const baseColor = new THREE.Color(C.dandSeed);

export function initDandSeeds(n) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1
  });
  iMesh = new THREE.InstancedMesh(GEO.dandSeed, mat, n);
  iMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  iMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.copy(baseColor);
    iMesh.setColorAt(i, tmpColor);
    dandSeeds.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 0,
      active: false, drift: 0 });
  }
  iMesh.count = n;
  scene.add(iMesh);
}

export function spawnDandSeed(px, py, pz) {
  let s = null;
  for (let i = 0; i < dandSeeds.length; i++) { if (!dandSeeds[i].active) { s = dandSeeds[i]; break; } }
  if (!s) return;
  s.x = px + (Math.random() - 0.5) * 0.1; s.y = py; s.z = pz + (Math.random() - 0.5) * 0.1;
  const a = Math.random() * 6.28;
  s.vx = Math.cos(a) * 0.5 + Math.random() * 0.3; s.vy = 0.6 + Math.random() * 0.8; s.vz = Math.sin(a) * 0.5;
  s.life = 4 + Math.random() * 5; s.max = s.life; s.active = true;
  s.drift = Math.random() * 6.28;
}

// Wind influence (set by main.js)
let _windX = 0, _windZ = 0, _windStr = 0;
export function setSeedWind(wx, wz, ws) { _windX = wx; _windZ = wz; _windStr = ws; }

export function updateDandSeeds(dt, t) {
  let needsColorUpdate = false;
  for (let i = 0; i < dandSeeds.length; i++) {
    const s = dandSeeds[i];
    if (!s.active) {
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    s.life -= dt;
    if (s.life <= 0) {
      s.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    s.drift += (Math.random() - 0.5) * 1.5 * dt;
    s.vx += Math.sin(s.drift) * 0.3 * dt;
    s.vz += Math.cos(s.drift) * 0.2 * dt;
    // Wind influence — seeds scatter farther during storms (Item 9)
    s.vx += _windX * 0.5 * dt;
    s.vz += _windZ * 0.5 * dt;
    s.vy += (0.15 + _windStr * 0.1 - s.vy) * dt * 0.5;
    s.vx *= 0.998; s.vy *= 0.998; s.vz *= 0.998;
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.z += s.vz * dt;
    const frac = s.life / s.max;
    const opacity = frac * 0.7 * (0.6 + Math.sin(t * 2 + i) * 0.4);
    const scale = 0.8 + Math.sin(t * 3 + i * 0.5) * 0.3;

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
