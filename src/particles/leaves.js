import { AdditiveBlending, Color, DoubleSide, DynamicDrawUsage, InstancedBufferAttribute, InstancedMesh, MeshBasicMaterial, Object3D, PlaneGeometry } from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { sr } from '../utils/rng.js';

// Batch 2 Item 5: Leaf fall particle system
// Glowing leaves detach from tree canopies during wind, drift down with tumble

let iMesh = null;
const leaves = [];
const dummy = new Object3D();
const tmpColor = new Color();
const leafColors = [
  new Color(C.leafGlow),
  new Color(C.fernGlow),
  new Color(C.spiralFrond),
  new Color(C.echoBloom),
  new Color(C.jellyGlow)
];

// Wind state (set from main.js)
let _windX = 0, _windZ = 0, _windStr = 0;
export function setLeafWind(wx, wz, ws) { _windX = wx; _windZ = wz; _windStr = ws; }

export function initLeaves(n) {
  const leafGeo = new PlaneGeometry(0.12, 0.08);
  const mat = new MeshBasicMaterial({
    color: C.white, transparent: true, opacity: 1,
    side: DoubleSide, depthWrite: false,
    blending: AdditiveBlending
  });
  iMesh = new InstancedMesh(leafGeo, mat, n);
  iMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  iMesh.instanceColor = new InstancedBufferAttribute(new Float32Array(n * 3), 3);
  iMesh.instanceColor.setUsage(DynamicDrawUsage);

  dummy.scale.setScalar(0);
  dummy.updateMatrix();
  for (let i = 0; i < n; i++) {
    iMesh.setMatrixAt(i, dummy.matrix);
    tmpColor.setHex(C.black);
    iMesh.setColorAt(i, tmpColor);
    leaves.push({
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      rx: 0, ry: 0, rz: 0,    // tumble rotation
      rvx: 0, rvy: 0, rvz: 0, // rotation velocity
      life: 0, max: 0,
      active: false,
      colorIdx: 0
    });
  }
  iMesh.count = n;
  iMesh.frustumCulled = false;
  scene.add(iMesh);
}

export function spawnLeaf(px, py, pz) {
  let leaf = null;
  for (let i = 0; i < leaves.length; i++) {
    if (!leaves[i].active) { leaf = leaves[i]; break; }
  }
  if (!leaf) return;
  leaf.x = px + (sr() - 0.5) * 2;
  leaf.y = py + sr() * 2;
  leaf.z = pz + (sr() - 0.5) * 2;
  const a = sr() * 6.28;
  leaf.vx = Math.cos(a) * 0.3;
  leaf.vy = -0.2 - sr() * 0.3;
  leaf.vz = Math.sin(a) * 0.3;
  // Tumble
  leaf.rvx = (sr() - 0.5) * 4;
  leaf.rvy = (sr() - 0.5) * 3;
  leaf.rvz = (sr() - 0.5) * 2;
  leaf.rx = sr() * 6.28;
  leaf.ry = sr() * 6.28;
  leaf.rz = sr() * 6.28;
  leaf.life = 4 + sr() * 4;
  leaf.max = leaf.life;
  leaf.active = true;
  leaf.colorIdx = Math.floor(sr() * leafColors.length);
}

export function updateLeaves(dt, t) {
  let needsColor = false;
  for (let i = 0; i < leaves.length; i++) {
    const l = leaves[i];
    if (!l.active) {
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    l.life -= dt;
    if (l.life <= 0 || l.y < -0.5) {
      l.active = false;
      dummy.position.set(0, -100, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      iMesh.setMatrixAt(i, dummy.matrix);
      continue;
    }
    // Wind drift
    l.vx += _windX * 0.4 * dt;
    l.vz += _windZ * 0.4 * dt;
    // Flutter side-to-side
    l.vx += Math.sin(t * 3 + i * 1.7) * 0.5 * dt;
    l.vz += Math.cos(t * 2.5 + i * 2.1) * 0.3 * dt;
    // Gentle gravity
    l.vy -= 0.3 * dt;
    // Air resistance
    l.vx *= 0.995;
    l.vy = Math.max(l.vy, -0.8); // terminal velocity
    l.vz *= 0.995;
    l.x += l.vx * dt;
    l.y += l.vy * dt;
    l.z += l.vz * dt;
    // Tumble rotation
    l.rx += l.rvx * dt;
    l.ry += l.rvy * dt;
    l.rz += l.rvz * dt;

    const frac = l.life / l.max;
    const glow = frac * (0.6 + Math.sin(t * 2 + i * 0.8) * 0.4);
    const scale = 0.8 + frac * 0.4;

    dummy.position.set(l.x, l.y, l.z);
    dummy.rotation.set(l.rx, l.ry, l.rz);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    iMesh.setMatrixAt(i, dummy.matrix);

    tmpColor.copy(leafColors[l.colorIdx]).multiplyScalar(glow);
    iMesh.setColorAt(i, tmpColor);
    needsColor = true;
  }
  iMesh.instanceMatrix.needsUpdate = true;
  if (needsColor) iMesh.instanceColor.needsUpdate = true;
}
