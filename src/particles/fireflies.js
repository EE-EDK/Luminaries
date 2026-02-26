import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';
import { getGroundY } from '../world/terrain.js';

// InstancedMesh for all fireflies — single draw call
let iMesh = null;
const flies = [];
const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();

export function initFlies(n) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 1
  });
  iMesh = new THREE.InstancedMesh(GEO.fly, mat, n);
  iMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  iMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

  // Initialize all instances as invisible (scale 0)
  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    const c = i % 3 === 0 ? C.fireflyB : C.firefly;
    tmpColor.setHex(c);
    iMesh.setColorAt(i, tmpColor);
    flies.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 0,
      active: false, phase: Math.random() * 6.28, wander: Math.random() * 6.28, colorHex: c });
  }
  iMesh.count = n;
  scene.add(iMesh);
}

export function spawnFly(px, py, pz, life) {
  let f = null, fi = -1;
  for (let i = 0; i < flies.length; i++) { if (!flies[i].active) { f = flies[i]; fi = i; break; } }
  if (!f) { let best = Infinity; for (let i = 0; i < flies.length; i++) { if (flies[i].life < best) { best = flies[i].life; f = flies[i]; fi = i; } } }
  f.x = px; f.y = py + 0.5 + Math.random() * 3; f.z = pz;
  f.vx = (Math.random() - .5) * 2; f.vy = (Math.random() - .5); f.vz = (Math.random() - .5) * 2;
  f.life = life; f.max = life; f.active = true; f.wander = Math.random() * 6.28;
}

export function updateFlies(dt, t) {
  let ac = 0;
  let needsColorUpdate = false;
  for (let i = 0; i < flies.length; i++) {
    const f = flies[i];
    if (!f.active) {
      // Keep invisible
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    f.life -= dt;
    if (f.life <= 0) {
      f.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    ac++;
    f.wander += (Math.random() - 0.5) * 3 * dt;
    f.vx += Math.cos(f.wander) * 1.5 * dt;
    f.vz += Math.sin(f.wander) * 1.5 * dt;
    f.vy += Math.sin(t * 2 + f.phase) * dt;
    f.vx *= 0.995; f.vy *= 0.995; f.vz *= 0.995;
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    f.z += f.vz * dt;
    const flyGroundY = getGroundY(f.x, f.z) + 0.3;
    if (f.y < flyGroundY) { f.y = flyGroundY; f.vy = Math.abs(f.vy) * 0.5; }
    if (f.y > 12) f.vy -= 2 * dt;
    const pulse = Math.sin(t * 3 + f.phase) * 0.5 + 0.5;
    const frac = f.life / f.max;
    const opacity = frac * (0.4 + pulse * 0.6);
    const s = (0.6 + pulse * 0.6);

    dummy.position.set(f.x, f.y, f.z);
    dummy.scale.setScalar(s);
    dummy.updateMatrix();
    iMesh.setMatrixAt(i, dummy.matrix);

    // Modulate color brightness for opacity effect
    tmpColor.setHex(f.colorHex);
    tmpColor.multiplyScalar(opacity);
    iMesh.setColorAt(i, tmpColor);
    needsColorUpdate = true;
  }
  iMesh.instanceMatrix.needsUpdate = true;
  if (needsColorUpdate) iMesh.instanceColor.needsUpdate = true;
  return ac;
}
