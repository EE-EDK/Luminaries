import { Color, DynamicDrawUsage, InstancedBufferAttribute, InstancedMesh, MeshBasicMaterial, Object3D, SphereGeometry } from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';

// InstancedMesh for bubble pop fragments — single draw call
let iMesh = null;
const bubblePops = [];
const dummy = new Object3D();
const tmpColor = new Color();
const baseColor = new Color(C.bubblePop);
const popGeo = new SphereGeometry(0.02, 3, 3);

export function initBubblePops(n) {
  const mat = new MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1, depthWrite: false
  });
  iMesh = new InstancedMesh(popGeo, mat, n);
  iMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  iMesh.instanceColor = new InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.copy(baseColor);
    iMesh.setColorAt(i, tmpColor);
    bubblePops.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 0, active: false });
  }
  iMesh.count = n;
  iMesh.frustumCulled = false;
  scene.add(iMesh);
}

export function spawnBubblePop(px, py, pz, count) {
  for (let c = 0; c < count; c++) {
    let p = null;
    for (let i = 0; i < bubblePops.length; i++) { if (!bubblePops[i].active) { p = bubblePops[i]; break; } }
    if (!p) continue;
    const a = Math.random() * 6.28, elev = Math.random() * 3.14;
    const spd = 1 + Math.random() * 2;
    p.x = px; p.y = py; p.z = pz;
    p.vx = Math.cos(a) * Math.sin(elev) * spd;
    p.vy = Math.cos(elev) * spd;
    p.vz = Math.sin(a) * Math.sin(elev) * spd;
    p.life = 0.4 + Math.random() * 0.4; p.max = p.life; p.active = true;
  }
}

export function updateBubblePops(dt) {
  let needsColorUpdate = false;
  for (let i = 0; i < bubblePops.length; i++) {
    const p = bubblePops[i];
    if (!p.active) {
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    p.life -= dt;
    if (p.life <= 0) {
      p.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    p.vy -= 2 * dt;
    p.vx *= 0.97; p.vy *= 0.97; p.vz *= 0.97;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;
    const opacity = (p.life / p.max) * 0.8;

    dummy.position.set(p.x, p.y, p.z);
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
