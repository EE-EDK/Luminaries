import * as THREE from 'three';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';
import { getGroundY } from '../world/terrain.js';

const dustMotes = [];

export function initDustMotes(n) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: 0x88aa77, transparent: true, opacity: 0 });
    const m = new THREE.Mesh(GEO.dustMote, mat); m.visible = false; scene.add(m);
    dustMotes.push({ mesh: m, mat: mat, vel: new THREE.Vector3(), life: 0, max: 0, active: false });
  }
}

export function spawnDustBurst(px, pz, count) {
  for (let c = 0; c < count; c++) {
    let d = null;
    for (let i = 0; i < dustMotes.length; i++) { if (!dustMotes[i].active) { d = dustMotes[i]; break; } }
    if (!d) continue;
    const a = Math.random() * 6.28, spd = 1 + Math.random() * 2;
    d.mesh.position.set(px + Math.cos(a) * 0.2, getGroundY(px, pz) + 0.1, pz + Math.sin(a) * 0.2);
    d.mesh.visible = true; d.mat.opacity = 0.5;
    d.vel.set(Math.cos(a) * spd, 0.5 + Math.random() * 1.5, Math.sin(a) * spd);
    d.life = 0.6 + Math.random() * 0.6; d.max = d.life; d.active = true;
  }
}

export function updateDustMotes(dt) {
  for (let i = 0; i < dustMotes.length; i++) {
    const d = dustMotes[i]; if (!d.active) continue;
    d.life -= dt;
    if (d.life <= 0) { d.active = false; d.mesh.visible = false; continue; }
    d.vel.y -= 3 * dt; d.vel.multiplyScalar(0.96);
    d.mesh.position.x += d.vel.x * dt;
    d.mesh.position.y += d.vel.y * dt;
    d.mesh.position.z += d.vel.z * dt;
    const dustGroundY = getGroundY(d.mesh.position.x, d.mesh.position.z) + 0.05;
    if (d.mesh.position.y < dustGroundY) { d.mesh.position.y = dustGroundY; d.vel.y = 0; d.vel.x *= 0.8; d.vel.z *= 0.8; }
    d.mat.opacity = (d.life / d.max) * 0.4;
  }
}
