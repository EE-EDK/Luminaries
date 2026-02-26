import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';
import { getGroundY } from '../world/terrain.js';

const flies = [];

export function initFlies(n) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? C.fireflyB : C.firefly, transparent: true, opacity: 0
    });
    const m = new THREE.Mesh(GEO.fly, mat);
    m.visible = false; scene.add(m);
    flies.push({ mesh: m, mat: mat, vel: new THREE.Vector3(), life: 0, max: 0,
      active: false, phase: Math.random() * 6.28, wander: Math.random() * 6.28 });
  }
}

export function spawnFly(px, py, pz, life) {
  let f = null;
  for (let i = 0; i < flies.length; i++) { if (!flies[i].active) { f = flies[i]; break; } }
  if (!f) { let best = Infinity; for (let i = 0; i < flies.length; i++) { if (flies[i].life < best) { best = flies[i].life; f = flies[i]; } } }
  f.mesh.position.set(px, py + 0.5 + Math.random() * 3, pz);
  f.mesh.visible = true; f.mat.opacity = 1;
  f.vel.set((Math.random() - .5) * 2, (Math.random() - .5), (Math.random() - .5) * 2);
  f.life = life; f.max = life; f.active = true; f.wander = Math.random() * 6.28;
}

export function updateFlies(dt, t) {
  let ac = 0;
  for (let i = 0; i < flies.length; i++) {
    const f = flies[i]; if (!f.active) continue;
    f.life -= dt;
    if (f.life <= 0) { f.active = false; f.mesh.visible = false; continue; }
    ac++;
    f.wander += (Math.random() - 0.5) * 3 * dt;
    f.vel.x += Math.cos(f.wander) * 1.5 * dt;
    f.vel.z += Math.sin(f.wander) * 1.5 * dt;
    f.vel.y += Math.sin(t * 2 + f.phase) * dt;
    f.vel.multiplyScalar(0.995);
    f.mesh.position.x += f.vel.x * dt;
    f.mesh.position.y += f.vel.y * dt;
    f.mesh.position.z += f.vel.z * dt;
    const flyGroundY = getGroundY(f.mesh.position.x, f.mesh.position.z) + 0.3;
    if (f.mesh.position.y < flyGroundY) { f.mesh.position.y = flyGroundY; f.vel.y = Math.abs(f.vel.y) * 0.5; }
    if (f.mesh.position.y > 12) f.vel.y -= 2 * dt;
    const pulse = Math.sin(t * 3 + f.phase) * 0.5 + 0.5;
    const frac = f.life / f.max;
    f.mat.opacity = frac * (0.4 + pulse * 0.6);
    f.mesh.scale.setScalar(0.6 + pulse * 0.6);
  }
  return ac;
}
