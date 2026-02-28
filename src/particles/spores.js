import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';

// InstancedMesh for all spores — single draw call
let iMesh = null;
const spores = [];
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();
const baseColor = new THREE.Color(C.spore);

export function initSpores(n) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1
  });
  iMesh = new THREE.InstancedMesh(GEO.spore, mat, n);
  iMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  iMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.setHex(C.spore);
    iMesh.setColorAt(i, tmpColor);
    spores.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 0, active: false });
  }
  iMesh.count = n;
  iMesh.frustumCulled = false;
  scene.add(iMesh);
}

export function spawnSpore(px, py, pz) {
  let s = null, si = -1;
  for (let i = 0; i < spores.length; i++) { if (!spores[i].active) { s = spores[i]; si = i; break; } }
  if (!s) { let best = Infinity; for (let i = 0; i < spores.length; i++) { if (spores[i].life < best) { best = spores[i].life; s = spores[i]; si = i; } } }
  s.x = px; s.y = py; s.z = pz;
  s.vx = (Math.random() - .5) * 0.3; s.vy = 0.4 + Math.random() * 0.4; s.vz = (Math.random() - .5) * 0.3;
  s.life = 3 + Math.random() * 3; s.max = s.life; s.active = true;
}

// Wind influence parameters (set by main.js)
let _windX = 0, _windZ = 0;
export function setSporeWind(wx, wz) { _windX = wx; _windZ = wz; }

export function updateSpores(dt) {
  let ac = 0;
  let needsColorUpdate = false;
  for (let i = 0; i < spores.length; i++) {
    const s = spores[i];
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
    ac++;
    s.vy += 0.3 * dt;
    // Wind influence on spores (Item 9)
    s.vx += _windX * 0.3 * dt;
    s.vz += _windZ * 0.3 * dt;
    s.vx *= 0.997; s.vy *= 0.997; s.vz *= 0.997;
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.z += s.vz * dt;
    const opacity = (s.life / s.max) * 0.7;

    dummy.position.set(s.x, s.y, s.z);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    iMesh.setMatrixAt(i, dummy.matrix);

    tmpColor.copy(baseColor).multiplyScalar(opacity);
    iMesh.setColorAt(i, tmpColor);
    needsColorUpdate = true;
  }
  iMesh.instanceMatrix.needsUpdate = true;
  if (needsColorUpdate) iMesh.instanceColor.needsUpdate = true;
  return ac;
}
