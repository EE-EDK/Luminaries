// ================================================================
// Particle & entity spawning orchestration
// ================================================================
// Extracted from director() in main.js.
// Handles firefly spawning, spore emission, dandelion wind dispersal, leaf fall.

import { getGroundY } from '../world/terrain.js';

// Timers (module-scoped, persistent across frames)
let ffTimer = 0;
let spTimer = 0;

/**
 * Firefly spawning — reduced during rain, biased toward blooming flowers near crystals.
 */
export function spawnFireflies(dt, t, ctx) {
  const { dirState, player, crys_data, flowers, curRain, spawnFly, updateFlies } = ctx;
  ffTimer += dt;
  const rainDamper = Math.max(0.2, 1.0 - curRain * 0.8);
  const ffRate = (dirState === 'NEAR_CRYSTAL' ? 0.08 : 0.25) / rainDamper;
  const ffMax = Math.floor((dirState === 'NEAR_CRYSTAL' ? 120 : 100) * rainDamper);
  if (ffTimer > ffRate) {
    ffTimer = 0;
    const flyCount = updateFlies(0, t);
    if (flyCount < ffMax) {
      if (dirState === 'NEAR_CRYSTAL') {
        for (let i = 0; i < crys_data.length; i++) {
          const dx = crys_data[i].x - player.pos.x, dz = crys_data[i].z - player.pos.z;
          if (dx * dx + dz * dz < 100)
            spawnFly(crys_data[i].x, getGroundY(crys_data[i].x, crys_data[i].z) + 1, crys_data[i].z, 3 + Math.random() * 4);
        }
      } else if (Math.random() < 0.3 && flowers.length > 0) {
        const fl = flowers[Math.floor(Math.random() * flowers.length)];
        if (fl._react > 0.3) {
          const fx = fl.group.position.x, fz = fl.group.position.z;
          spawnFly(fx + (Math.random() - 0.5) * 2, getGroundY(fx, fz) + 0.5, fz + (Math.random() - 0.5) * 2, 4 + Math.random() * 6);
        }
      } else {
        const a = Math.random() * 6.28, d = 5 + Math.random() * 25;
        const flyX = player.pos.x + Math.cos(a) * d, flyZ = player.pos.z + Math.sin(a) * d;
        spawnFly(flyX, getGroundY(flyX, flyZ), flyZ, 6 + Math.random() * 10);
      }
    }
  }
}

/**
 * Spore emission from nearby mushrooms.
 */
export function spawnSpores(dt, ctx) {
  const { player, mush_data, spawnSpore } = ctx;
  spTimer += dt;
  if (spTimer > 0.2) {
    spTimer = 0;
    for (let i = 0; i < mush_data.length; i++) {
      const m = mush_data[i];
      const dx = m.x - player.pos.x, dz = m.z - player.pos.z;
      if (dx * dx + dz * dz < 200 && Math.random() < 0.15)
        spawnSpore(m.x, 0.6 * m.group.scale.x, m.z);
    }
  }
}

/**
 * Dandelion wind dispersal + leaf fall from trees.
 */
export function spawnWindParticles(dt, t, ctx) {
  const { player, dandelions, trees_data, windStrength, isStorming, spawnDandSeed, spawnLeaf } = ctx;

  // Dandelion auto-scatter in strong wind
  if (windStrength > 0.8 && Math.random() < 0.005) {
    for (let i = 0; i < dandelions.length; i++) {
      const dn = dandelions[i];
      if (!dn.dispersed && Math.random() < 0.1) {
        dn.dispersed = true;
        for (let s = 0; s < 8; s++) spawnDandSeed(dn.x, dn.h + 0.05, dn.z);
        for (let c = 2; c < dn.group.children.length; c++) dn.group.children[c].visible = false;
        dn.regrowTimer = 15 + Math.random() * 10;
      }
    }
  }

  // Leaf fall from trees during wind
  const leafSpawnChance = windStrength > 0.3 ? (windStrength - 0.3) * 0.02 : 0;
  const stormLeafBoost = isStorming ? 0.03 : 0;
  if (Math.random() < leafSpawnChance + stormLeafBoost) {
    for (let i = 0; i < trees_data.length; i++) {
      const tr = trees_data[i];
      const dx = tr.x - player.pos.x, dz = tr.z - player.pos.z;
      if (dx * dx + dz * dz < 900 && Math.random() < 0.15) {
        const canopyY = (tr.treeH || 10) * 0.7 + (tr.y || 0);
        spawnLeaf(tr.x, canopyY, tr.z);
        break;
      }
    }
  }
}
