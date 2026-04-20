// ================================================================
// Echo-Visions System — storm-triggered creature path tracing
// ================================================================
// During a luminous storm, when lightning flashes and the player
// is sprinting through a dimmed zone, the historical paths of
// nearby creatures become visible as glowing traces.

import { Line, BufferGeometry, BufferAttribute, MeshBasicMaterial, AdditiveBlending, DynamicDrawUsage, Vector3, Points, PointsMaterial } from 'three';
import { scene } from '../core/renderer.js';
import { isStorming, lightningFlash } from './weather.js';
import { player } from '../core/player.js';
import { isRestored } from './dimming.js';
import { C } from '../constants.js';
import { nearest } from './registration.js';
import { orbs } from '../state/entityStore.js';

const PATH_MAX = 40; // 20s of path data at 0.5s intervals
const paths = {
  jelly: [],
  puff: [],
  deer: [],
  moth: []
};

const lines = {};
const waypoints = {}; // Points for wayfinding trails
const colors = {
  jelly: C.jellyGlow,
  puff: C.puffGlow,
  deer: C.deerGlow,
  moth: C.mothGlow
};

let sampleTimer = 0;

export function initEchoVisions() {
  const types = ['jelly', 'puff', 'deer', 'moth'];
  types.forEach(t => {
    // 1. Historical path lines
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(new Float32Array(PATH_MAX * 3), 3));
    geo.attributes.position.setUsage(DynamicDrawUsage);
    const mat = new MeshBasicMaterial({
      color: colors[t], transparent: true, opacity: 0,
      blending: AdditiveBlending, depthWrite: false
    });
    const line = new Line(geo, mat);
    line.frustumCulled = false;
    scene.add(line);
    lines[t] = line;

    // 2. Wayfinding particle trails
    const pGeo = new BufferGeometry();
    const pCount = 20;
    pGeo.setAttribute('position', new BufferAttribute(new Float32Array(pCount * 3), 3));
    const pMat = new PointsMaterial({
      color: colors[t], size: 0.15, transparent: true, opacity: 0,
      blending: AdditiveBlending, depthWrite: false, sizeAttenuation: true
    });
    const pts = new Points(pGeo, pMat);
    pts.frustumCulled = false;
    scene.add(pts);
    waypoints[t] = { pts, geo: pGeo, mat: pMat, particles: [] };
    for (let i = 0; i < pCount; i++) {
      waypoints[t].particles.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0 });
    }
  });
}

export function updateEchoVisions(dt, t, sprinting) {
  sampleTimer += dt;
  if (sampleTimer > 0.5) {
    sampleTimer = 0;
    // Sample nearest creature of each type
    const types = ['jelly', 'puff', 'deer', 'moth'];
    for (let ti = 0; ti < types.length; ti++) {
      const type = types[ti];
      const pos = nearest[type + 'Pos'];
      if (pos && nearest[type + 'Dist2'] < 2500) {
        const path = paths[type];
        if (path.length >= PATH_MAX) {
          // Reuse oldest entry instead of shift+push (avoids allocation)
          const recycled = path.shift();
          recycled.x = pos.x; recycled.y = pos.y || 1.0; recycled.z = pos.z;
          path.push(recycled);
        } else {
          path.push({ x: pos.x, y: pos.y || 1.0, z: pos.z });
        }
      }
    }
  }

  const inDimmed = !isRestored(player.pos.x, player.pos.z);
  
  // Trigger: isStorming && lightningFlash > 0.5 && sprinting && inDimmedZone
  // Visible only during the peak of a lightning flash
  const active = isStorming && lightningFlash > 0.5 && sprinting && inDimmed;

  // Wayfinding: Find nearest unfound orb
  let nearestOrb = null;
  let minOrbD2 = Infinity;
  if (active) {
    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];
      if (o.found) continue;
      const dx = o.x - player.pos.x, dz = o.z - player.pos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < minOrbD2) {
        minOrbD2 = d2;
        nearestOrb = o;
      }
    }
  }
  
  const types = ['jelly', 'puff', 'deer', 'moth'];
  types.forEach(type => {
    const line = lines[type];
    const path = paths[type];
    const wp = waypoints[type];

    if (active && path.length > 1) {
      line.visible = true;
      line.material.opacity = (lightningFlash - 0.5) * 2.0 * 0.6; // soft traces
      const attr = line.geometry.attributes.position;
      const arr = attr.array;
      for (let i = 0; i < path.length; i++) {
        arr[i * 3] = path[i].x;
        arr[i * 3 + 1] = path[i].y;
        arr[i * 3 + 2] = path[i].z;
      }
      line.geometry.setDrawRange(0, path.length);
      attr.needsUpdate = true;

      // Wayfinding particles shoot from creature toward orb
      const pos = nearest[type + 'Pos'];
      if (pos && nearestOrb && nearest[type + 'Dist2'] < 1600) {
        wp.pts.visible = true;
        wp.mat.opacity = (lightningFlash - 0.5) * 2.0;
        
        const dx = nearestOrb.x - pos.x, dz = nearestOrb.z - pos.z;
        const dist = Math.sqrt(dx * dx + dz * dz) || 1;
        const dirX = dx / dist, dirZ = dz / dist;

        const pAttr = wp.geo.attributes.position;
        const pArr = pAttr.array;
        for (let i = 0; i < wp.particles.length; i++) {
          const p = wp.particles[i];
          if (p.life <= 0) {
            // Respawn at creature position
            p.x = pos.x + (Math.random() - 0.5) * 1.5;
            p.y = (pos.y || 1.0) + (Math.random() - 0.5) * 1.0;
            p.z = pos.z + (Math.random() - 0.5) * 1.5;
            const speed = 8 + Math.random() * 12;
            p.vx = dirX * speed + (Math.random() - 0.5) * 2;
            p.vy = (Math.random() - 0.5) * 2;
            p.vz = dirZ * speed + (Math.random() - 0.5) * 2;
            p.life = 0.5 + Math.random() * 0.8;
          }
          p.life -= dt;
          p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
          pArr[i * 3] = p.x; pArr[i * 3 + 1] = p.y; pArr[i * 3 + 2] = p.z;
        }
        pAttr.needsUpdate = true;
      } else {
        wp.pts.visible = false;
      }
    } else {
      line.visible = false;
      wp.pts.visible = false;
    }
  });
}
