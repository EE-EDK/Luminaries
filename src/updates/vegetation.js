// ================================================================
// Vegetation update loops — trees, grass, ferns, flowers, reeds,
// fantasy flora, ground glows, and reactive flora interactions
// ================================================================
// Extracted from main.js. Since the 2026-09-16 entity pass every plant's
// motion (wind sway, brush-aside, storm droop, flutter, bob, orbit,
// pendulum, tentacle wave) runs in the shared vertex shader
// (entities/_motion.js); this file only writes per-plant glow, applies
// each plant's slope tilt once, culls the merged types by distance, and
// uploads the instanced flora's dirty matrices / tints.

import { getLocalGlow } from '../systems/dimming.js';
import { updateTreeLOD, treeCanopyLivingPulse } from '../entities/flora/trees.js';
import { updateGrassGlobals } from '../entities/flora/grass.js';
import { updateSnapthorns } from '../entities/flora/snapthorn.js';
import { updateMotionGlobals } from '../entities/_motion.js';
import { isReducedMotion } from '../core/player.js';
import { updateAllInstancedFlora } from '../entities/_instancedFlora.js';
import { createGround, updateGroundUniforms } from '../world/ground.js';
import { player } from '../core/player.js';
import { camera } from '../core/renderer.js';
import { windStrength, windX, windZ, isStorming, weatherState, getRainRate } from '../systems/weather.js';
import { bioGlow } from '../systems/dayNightCycle.js';
import { isSkyTransformed } from '../world/sky.js';
import { orbBoost, addVisitedCrystal, lastVisitedCrystals, setCrystalChainBoost } from '../state/gameState.js';
import { getSmoothedDimFactor } from './playerVisuals.js';
import {
  treeMeshes, treeImpostors, ferns, flowers, reeds, mush_data, crys_data,
  thornblooms, helixvines, snapthorns, spiralfronds, corpseblooms,
  orbbushes, lanternpods, veilmosses, groundGlows
} from '../state/entityStore.js';
import { initEnergyLines, energyLines, MAX_ENERGY_LINES } from '../entities/world/energyLines.js';
import { playCrystalChime } from '../systems/audio.js';
import { emit, Events } from '../kernel/eventBus.js';

/** Base opacities from trees.js (instanced canopy / underglow) */
const _TREE_CANOPY_BASE_OP = 0.55;
const _TREE_GLOW_BASE_OP = 0.15;
/** Extra emissive swing so canopy pulse reads against bloom / night grades (pulse.* already modulates). */
const _CANOPY_PULSE_EM_GAIN = 1.12;

/** Cull + near-band test shared by every merged flora type (squared distances). */
const CULL_D2 = 1600;   // 40 m — hide
const NEAR_D2 = 900;    // 30 m — only plants inside get their glow written

/**
 * @brief Apply the slope tilt populate.js stored on the record exactly once.
 * (The old per-frame `quaternion.copy(slopeQ).multiply(sway)` is gone — sway is GPU.)
 */
function applySlopeOnce(e) {
  if (e.slopeQ && !e._slopeApplied) {
    e.group.quaternion.copy(e.slopeQ);
    e._slopeApplied = true;
  }
}

/** Distance gate: returns true when the plant is inside the near band (and visible). */
function nearGate(e, px, pz) {
  const dx = e.group.position.x - px, dz = e.group.position.z - pz;
  const d2 = dx * dx + dz * dz;
  if (d2 > CULL_D2) { if (e.group.visible) e.group.visible = false; return false; }
  if (!e.group.visible) e.group.visible = true;
  return d2 < NEAR_D2;
}

export function updateVegetation(dt, t) {
  if (updateVegetation._decorHalf === undefined) updateVegetation._decorHalf = 0;
  updateVegetation._decorHalf ^= 1;
  const decorEarly = updateVegetation._decorHalf === 1;

  const smoothedDimFactor = getSmoothedDimFactor();

  const wAmp = 1.0 + windStrength * 1.5;
  const wLeanX = windX * 0.03;
  const wLeanZ = windZ * 0.03;
  const px = player.pos.x, py = player.pos.y, pz = player.pos.z;
  const glowBase = bioGlow * orbBoost;

  // Shared GPU motion globals — one uniform block for every baked plant / creature.
  const curRain = getRainRate();
  const droop = isStorming ? 0.6 : (curRain > 0.3 ? curRain * 0.4 : 0);
  const bloom = Math.min(1, Math.max(0, (bioGlow - 0.65) / 0.85));
  // Reduced motion calms the canopy too: a forest swaying at full amplitude
  // fills the whole screen with movement even when the camera is still.
  updateMotionGlobals(t, isReducedMotion() ? wAmp * 0.35 : wAmp, wLeanX, wLeanZ, px, pz, droop, bloom);

  const treeDim = smoothedDimFactor * orbBoost;
  updateTreeLOD(treeMeshes, treeImpostors, px, py, pz, t, wAmp, wLeanX, wLeanZ, camera, treeDim, bioGlow);

  for (let ti = 0; ti < treeMeshes.length; ti++) {
    const tm = treeMeshes[ti];
    const pulse = treeCanopyLivingPulse(ti, t, treeDim);
    if (tm.canopyMat) {
      tm.canopyMat.emissiveIntensity = 1.38 * treeDim * pulse.em * bioGlow * _CANOPY_PULSE_EM_GAIN;
      tm.canopyMat.opacity = _TREE_CANOPY_BASE_OP * pulse.op;
    }
    if (tm.glowMat) {
      tm.glowMat.emissiveIntensity = 0.48 * treeDim * pulse.em * 1.06 * bioGlow * _CANOPY_PULSE_EM_GAIN;
      tm.glowMat.opacity = _TREE_GLOW_BASE_OP * pulse.op;
    }
    if (tm.detailMat) tm.detailMat.emissiveIntensity = 0.5 * treeDim * (0.92 + 0.08 * pulse.em) * bioGlow;
    if (tm.trunkMat) tm.trunkMat.emissiveIntensity = (isSkyTransformed() ? 0.28 : 0.6) * treeDim;
  }

  updateGrassGlobals(t, wAmp, wLeanX, wLeanZ, px, pz, smoothedDimFactor * orbBoost);
  updateGroundUniforms(t, px, pz);

  // Ferns (instanced) — sector-restoration glow only
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    if (!nearGate(f, px, pz)) continue;
    if (f.glowMat) {
      const fGlow = getLocalGlow(f.group.position.x, f.group.position.z, glowBase);
      f.glowMat.emissiveIntensity = f.glowBase * fGlow;
      if (f.curlMat) f.curlMat.emissiveIntensity = f.curlBase * fGlow;
    }
  }

  // Flowers (instanced) — breathing glow; stamens quiver on the GPU
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    if (!nearGate(fl, px, pz)) continue;
    const p = Math.sin(t * 0.8 + fl.phase) * 0.5 + 0.5;
    fl.petalMat.emissiveIntensity = (0.5 + p * 0.7) * getLocalGlow(fl.group.position.x, fl.group.position.z, glowBase);
    if (fl.stamens) {
      for (let si = 0; si < fl.stamens.length; si++) {
        fl.stamens[si].rotation.x = Math.sin(t * 1.5 + fl.phase + si * 2.1) * 0.06;
        fl.stamens[si].rotation.z = Math.sin(t * 1.2 + fl.phase + si * 1.7) * 0.04;
      }
    }
  }

  // Reeds (instanced) — stalk + plume share one tint (plume baked 2.3× brighter)
  for (let i = 0; i < reeds.length; i++) {
    const r = reeds[i];
    if (!nearGate(r, px, pz)) continue;
    if (r.stalkMat) r.stalkMat.emissiveIntensity = r.stalkBase * getLocalGlow(r.group.position.x, r.group.position.z, glowBase);
  }

  // Thornbloom — now distance-culled (was updated for every plant every frame)
  for (let i = 0; i < thornblooms.length; i++) {
    const tb = thornblooms[i];
    applySlopeOnce(tb);
    if (!nearGate(tb, px, pz)) continue;
    const p = Math.sin(t * 1.2 + tb.phase) * 0.5 + 0.5;
    const tbGlow = getLocalGlow(tb.group.position.x, tb.group.position.z, glowBase);
    tb.orbMat.emissiveIntensity = (0.6 + p * 0.6) * tbGlow;
    tb.hazeMat.opacity = (0.06 + p * 0.06) * tbGlow;
  }

  // Helixvine — now distance-culled; one pod material per vine
  for (let i = 0; i < helixvines.length; i++) {
    const hv = helixvines[i];
    applySlopeOnce(hv);
    if (!nearGate(hv, px, pz)) continue;
    const hGlow = getLocalGlow(hv.group.position.x, hv.group.position.z, glowBase);
    for (let j = 0; j < hv.podMats.length; j++) {
      const p = Math.sin(t * 1.5 + hv.phase + j * 1.8) * 0.5 + 0.5;
      hv.podMats[j].emissiveIntensity = (0.5 + p * 0.7) * hGlow;
    }
  }

  // Snapthorn — glow only (tentacle wave + reach on the GPU); culled inside
  for (let i = 0; i < snapthorns.length; i++) applySlopeOnce(snapthorns[i]);
  updateSnapthorns(snapthorns, dt, t, glowBase, getLocalGlow, px, pz);

  // SpiralFrond — one body material + one tip material per plant
  for (let i = 0; i < spiralfronds.length; i++) {
    const sf = spiralfronds[i];
    applySlopeOnce(sf);
    if (!nearGate(sf, px, pz)) continue;
    const sfGlow = getLocalGlow(sf.x, sf.z, glowBase);
    const p = Math.sin(t * 1.8 + sf.phase) * 0.5 + 0.5;
    for (let j = 0; j < sf.tipMats.length; j++) sf.tipMats[j].emissiveIntensity = (0.5 + p * 0.7) * sfGlow;
    // Spiral bodies brighten with the sector so the silhouette is never dark
    // in restored / FREE_ROAM zones (was a fixed dim emissive).
    const sfBody = 0.85 + Math.sin(t * 1.2 + sf.phase) * 0.15;
    sf.bodyMat.emissiveIntensity = sf.bodyBase * 4.0 * sfBody * sfGlow;
    if (sf.leafletMat) sf.leafletMat.emissiveIntensity = sf.leafletBase * 4.0 * sfBody * sfGlow;
    if (sf.leafMat) sf.leafMat.emissiveIntensity = sf.leafBase * 5.0 * sfGlow;
  }

  // CorpseBloom — column pulse + haze; flies orbit on the GPU
  for (let i = 0; i < corpseblooms.length; i++) {
    const cb = corpseblooms[i];
    applySlopeOnce(cb);
    if (!nearGate(cb, px, pz) || !decorEarly) continue;
    const cbGlow = getLocalGlow(cb.x, cb.z, glowBase);
    cb.columnMat.emissiveIntensity = (0.5 + Math.sin(t * 0.8 + cb.phase) * 0.35) * cbGlow;
    cb.hazeMat.opacity = (0.05 + Math.sin(t * 0.8 + cb.phase) * 0.04) * cbGlow;
    for (let fi = 0; fi < cb.flies.length; fi++) {
      const flyAng = t * (2 + fi * 0.5) + fi * 2.1;
      const flyR = 0.2 + Math.sin(t * 0.7 + fi) * 0.08;
      const flyH = 0.1 + Math.sin(t * 1.3 + fi * 1.7) * 0.15;
      cb.flies[fi].position.set(Math.cos(flyAng) * flyR, cb.spadixY + flyH, Math.sin(flyAng) * flyR);
    }
  }

  // OrbBush — one orb material per bush (orbs bob on the GPU)
  for (let i = 0; i < orbbushes.length; i++) {
    const ob = orbbushes[i];
    applySlopeOnce(ob);
    if (!nearGate(ob, px, pz) || !decorEarly) continue;
    const oGlow = getLocalGlow(ob.x, ob.z, glowBase);
    for (let j = 0; j < ob.orbMats.length; j++) {
      const p = Math.sin(t * 2.0 + ob.phase + j * 1.3) * 0.5 + 0.5;
      ob.orbMats[j].emissiveIntensity = (0.5 + p * 0.7) * oGlow;
    }
  }

  // LanternPod — one pod material per plant (pendulum on the GPU)
  for (let i = 0; i < lanternpods.length; i++) {
    const lp = lanternpods[i];
    applySlopeOnce(lp);
    if (!nearGate(lp, px, pz) || decorEarly) continue;
    const lGlow = getLocalGlow(lp.x, lp.z, glowBase);
    for (let j = 0; j < lp.podMats.length; j++) {
      const p = Math.sin(t * 1.5 + lp.phase + j * 1.8) * 0.5 + 0.5;
      lp.podMats[j].emissiveIntensity = (0.5 + p * 0.6) * lGlow;
    }
    if (lp.podMeshes) {
      for (let pi = 0; pi < lp.podMeshes.length; pi++) {
        const pod = lp.podMeshes[pi];
        pod.rotation.x = Math.sin(t * 0.6 + lp.phase + pi * 1.4) * 0.06 * wAmp;
        pod.rotation.z = Math.sin(t * 0.8 + lp.phase + pi * 0.9) * 0.04 * wAmp;
      }
    }
  }

  // VeilMoss — curtain ripple on the GPU; sector glow on the veil material
  for (let i = 0; i < veilmosses.length; i++) {
    const vm = veilmosses[i];
    applySlopeOnce(vm);
    if (!nearGate(vm, px, pz) || decorEarly) continue;
    if (vm.veilMat) vm.veilMat.emissiveIntensity = 0.15 * getLocalGlow(vm.x, vm.z, glowBase);
    if (vm.veilRefs) {
      for (let j = 0; j < vm.veilRefs.length; j++) {
        const vr = vm.veilRefs[j];
        vr.mesh.rotation.z = Math.sin(t * 0.8 + vm.phase + j * 0.7) * 0.06 * vr.depth * wAmp;
        vr.mesh.rotation.x = Math.sin(t * 0.5 + vm.phase + j * 0.9) * 0.04 * vr.depth * wAmp;
      }
    }
  }

  // Ground glow patches
  for (let i = 0; i < groundGlows.length; i++) {
    const gg = groundGlows[i];
    const gdx = gg.x - px, gdz = gg.z - pz;
    if (gdx * gdx + gdz * gdz > 3600) { gg.mesh.visible = false; continue; }
    gg.mesh.visible = true;
    if (!decorEarly) {
      const pulse = Math.sin(t * gg.speed + gg.phase) * 0.3 + 0.7;
      gg.mat.opacity = gg.baseOpacity * pulse * getLocalGlow(gg.x, gg.z, glowBase);
    }
  }

  // Upload dirty instance matrices / glow tints for ferns, flowers, mushrooms, reeds.
  updateAllInstancedFlora();
}

export function updateFloraReactions(dt, t) {
  const px = player.pos.x, pz = player.pos.z;
  const curRain = getRainRate();
  const stormDroop = isStorming ? 0.6 : (curRain > 0.3 ? curRain * 0.4 : 0);

  // Flowers: bloom on proximity (scale change re-uploads that instance's matrix)
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fx = fl.group.position.x, fz = fl.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 16 ? 1.0 : 0.0;
    fl._react = (fl._react || 0);
    if (target === 0 && fl._react < 0.002) { if (fl._react !== 0) { fl._react = 0; fl.group.scale.set(1, 1, 1); } continue; }
    fl._react += (target - fl._react) * dt * (target > 0 ? 4 : 1.5);
    const sc = (1.0 + fl._react * 0.15) * (1.0 - stormDroop * 0.12);
    const sy = (1.0 + fl._react * 0.05) * (1.0 - stormDroop * 0.15);
    fl.group.scale.set(sc * fl._baseScale, sy * fl._baseScale, sc * fl._baseScale);
    fl.petalMat.emissiveIntensity += fl._react * 0.6 * getLocalGlow(fx, fz, bioGlow * orbBoost) * (1.0 - stormDroop * 0.4);
  }

  // Mushrooms: bright pulse on proximity
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const ddx = m.x - px, ddz = m.z - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const touch = dist2 < 4 ? 1.0 : 0.0;
    m._touch = (m._touch || 0);
    const rainBoost = curRain * 0.4;
    if (touch === 0 && m._touch < 0.002) {
      if (m._touch !== 0) { m._touch = 0; m.group.scale.setScalar(m._baseScale); }
      if (rainBoost > 0 && m.group.visible) m.capMat.emissiveIntensity += rainBoost * getLocalGlow(m.x, m.z, bioGlow * orbBoost);
      continue;
    }
    m._touch += (touch - m._touch) * dt * (touch > 0 ? 6 : 1.5);
    m.capMat.emissiveIntensity += (m._touch * 1.5 + rainBoost) * getLocalGlow(m.x, m.z, bioGlow * orbBoost);
    const ms = 1.0 + m._touch * 0.08;
    m.group.scale.set(ms * m._baseScale, (1.0 + m._touch * 0.04) * m._baseScale, ms * m._baseScale);
  }

  // Ferns: curl inward
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    const fx = f.group.position.x, fz = f.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 2.25 ? 0.65 : 1.0;
    f._curl = (f._curl === undefined ? 1.0 : f._curl);
    if (target === 1.0 && f._curl > 0.998) { if (f._curl !== 1.0) { f._curl = 1.0; f.group.scale.setScalar(f._baseScale); } continue; }
    f._curl += (target - f._curl) * dt * (target < 1.0 ? 4 : 1.5);
    const w = (1.0 + (1 - f._curl) * 0.3) * f._baseScale;
    f.group.scale.set(w, f._curl * f._baseScale, w);
  }

  // Wave 3: Crystal resonance chains (sequential + reward)
  initEnergyLines();
  const fogDampen = weatherState === 'FOG_BANK' ? 0.5 : 1.0;
  let lineIdx = 0;
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const dx = c.x - px, dz = c.z - pz;
    const distSq = dx * dx + dz * dz;

    // Visit detection (4m radius)
    if (distSq < 16) {
      if (addVisitedCrystal(i)) {
        const len = lastVisitedCrystals.length;
        if (len >= 2) {
          const prevIdx = lastVisitedCrystals[len - 2];
          const prevC = crys_data[prevIdx];
          const cdx = c.x - prevC.x, cdz = c.z - prevC.z;
          const cd2 = cdx * cdx + cdz * cdz;

          if (cd2 < 144) { // Consecutive crystals within 12m
            playCrystalChime(0.5 + len * 0.2);
            if (lineIdx < MAX_ENERGY_LINES) {
              const el = energyLines[lineIdx];
              const posArr = el.geo.attributes.position.array;
              posArr[0] = prevC.x; posArr[1] = 1.0; posArr[2] = prevC.z;
              posArr[3] = c.x; posArr[4] = 1.0; posArr[5] = c.z;
              el.geo.attributes.position.needsUpdate = true;
              el.geo.computeBoundingSphere();
              el.active = true;
              el.opacity = 0.8 * fogDampen * getLocalGlow(c.x, c.z, bioGlow * orbBoost);
              el.line.material.opacity = el.opacity;
              el.line.visible = true;
              lineIdx++;
            }
            if (len >= 3) {
              setCrystalChainBoost(c.x, c.z);
              // Proximity/discovery concern — distinct from the audio resonance
              // CRYSTAL_CHAIN payload ({indices,intensity}). Keeps payloads unmixed.
              emit(Events.CRYSTAL_VISITED, { count: len, x: c.x, z: c.z });
            }
          }
        }
      }
    }

    // NOTE: crystal emissiveIntensity is owned solely by crystalVisuals.js
    // (updateCrystalVisuals). The former proximity pulse here is folded into
    // that system's idle branch, which multiplies idle emissive by local glow.
  }

  // Cleanup/fade unused lines
  for (let i = lineIdx; i < MAX_ENERGY_LINES; i++) {
    const el = energyLines[i];
    if (el.line.visible) {
      el.opacity *= 0.94;
      el.line.material.opacity = el.opacity;
      if (el.opacity < 0.01) el.line.visible = false;
    }
  }
  return lastVisitedCrystals.length;
}
