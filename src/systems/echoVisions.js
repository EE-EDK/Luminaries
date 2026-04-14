// ================================================================
// Echo-Visions System — storm-triggered creature path tracing
// ================================================================
// During a luminous storm, when lightning flashes and the player
// is sprinting through a dimmed zone, the historical paths of
// nearby creatures become visible as glowing traces.

import { Line, BufferGeometry, BufferAttribute, MeshBasicMaterial, AdditiveBlending, DynamicDrawUsage, Vector3 } from 'three';
import { scene } from '../core/renderer.js';
import { isStorming, lightningFlash } from './weather.js';
import { player } from '../core/player.js';
import { isRestored } from './dimming.js';
import { C } from '../constants.js';
import { nearest } from './registration.js';

const PATH_MAX = 40; // 20s of path data at 0.5s intervals
const paths = {
  jelly: [],
  puff: [],
  deer: [],
  moth: []
};

const lines = {};
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
  
  const types = ['jelly', 'puff', 'deer', 'moth'];
  types.forEach(type => {
    const line = lines[type];
    const path = paths[type];
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
    } else {
      line.visible = false;
    }
  });
}
