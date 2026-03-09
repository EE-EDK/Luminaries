// ================================================================
// Vegetation update loops — trees, grass, ferns, flowers, reeds,
// fantasy flora, ground glows, and reactive flora interactions
// ================================================================
// Extracted from main.js.

import { Quaternion } from 'three';
import { getLocalGlow } from '../systems/dimming.js';
import { updateTreeLOD } from '../entities/flora/trees.js';
import { updateGrassGlobals } from '../entities/flora/grass.js';
import { updateSnapthorns } from '../entities/flora/snapthorn.js';
import { createGround, updateGroundUniforms } from '../world/ground.js';
import { player } from '../core/player.js';
import { camera } from '../core/renderer.js';
import { windStrength, windX, windZ, isStorming, weatherState, getRainRate } from '../systems/weather.js';
import { bioGlow } from '../systems/dayNightCycle.js';
import { orbBoost } from '../state/gameState.js';
import { getSmoothedDimFactor } from './playerVisuals.js';
import {
  treeMeshes, treeImpostors, ferns, flowers, reeds, mush_data, crys_data,
  thornblooms, helixvines, snapthorns, spiralfronds, corpseblooms,
  orbbushes, lanternpods, veilmosses, groundGlows
} from '../state/entityStore.js';
import { initEnergyLines, energyLines, MAX_ENERGY_LINES } from '../entities/world/energyLines.js';

// Pre-allocated quaternion for slope sway (replaces _slopeSwayQuat from main.js)
const _slopeSwayQuat = new Quaternion();

export function updateVegetation(dt, t) {
  const smoothedDimFactor = getSmoothedDimFactor();

  const wAmp = 1.0 + windStrength * 1.5;
  const wLeanX = windX * 0.03;
  const wLeanZ = windZ * 0.03;
  const px = player.pos.x, py = player.pos.y, pz = player.pos.z;

  updateTreeLOD(treeMeshes, treeImpostors, px, py, pz, t, wAmp, wLeanX, wLeanZ, camera);

  const treeDim = smoothedDimFactor * orbBoost;
  for (let ti = 0; ti < treeMeshes.length; ti++) {
    const tm = treeMeshes[ti];
    if (tm.canopyMat) tm.canopyMat.emissiveIntensity = 1.2 * treeDim;
    if (tm.glowMat) tm.glowMat.emissiveIntensity = 0.4 * treeDim;
    if (tm.detailMat) tm.detailMat.emissiveIntensity = 0.5 * treeDim;
    if (tm.trunkMat) tm.trunkMat.emissiveIntensity = 0.6 * treeDim;
  }

  updateGrassGlobals(t, wAmp, wLeanX, wLeanZ, px, pz, smoothedDimFactor * orbBoost);
  updateGroundUniforms(t, px, pz);

  // Ferns
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    const fdx = f.group.position.x - px, fdy = f.group.position.y - py, fdz = f.group.position.z - pz;
    const fd2 = fdx * fdx + fdy * fdy + fdz * fdz;
    if (fd2 > 1600) { if (f.group.visible) f.group.visible = false; continue; }
    if (!f.group.visible) f.group.visible = true;
    if (fd2 > 900) continue;
    if (f.slopeQ) {
      f.group.quaternion.copy(f.slopeQ);
      _slopeSwayQuat.set(
        (Math.sin(t * 0.6 + f.phase + 1) * 0.02 + Math.sin(t * 1.8 + f.phase * 2.3) * 0.006) * wAmp * 0.5 + wLeanZ * 0.5, 0,
        (Math.sin(t * 0.8 + f.phase) * 0.03 + Math.sin(t * 2.2 + f.phase * 1.7) * 0.008) * wAmp * 0.5 + wLeanX * 0.5, 1
      ).normalize();
      f.group.quaternion.multiply(_slopeSwayQuat);
    }
  }

  // Flowers
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fldx = fl.group.position.x - px, fldy = fl.group.position.y - py, fldz = fl.group.position.z - pz;
    const fld2 = fldx * fldx + fldy * fldy + fldz * fldz;
    if (fld2 > 1600) { if (fl.group.visible) fl.group.visible = false; continue; }
    if (!fl.group.visible) fl.group.visible = true;
    if (fld2 > 900) continue;
    const p = Math.sin(t * 0.8 + fl.phase) * 0.5 + 0.5;
    fl.petalMat.emissiveIntensity = (0.5 + p * 0.7) * getLocalGlow(fl.group.position.x, fl.group.position.z, bioGlow * orbBoost);
    if (fl.slopeQ) {
      fl.group.quaternion.copy(fl.slopeQ);
      _slopeSwayQuat.set(
        (Math.sin(t * 0.7 + fl.phase + 1.5) * 0.02 * wAmp + wLeanZ * 0.3) * 0.5, 0,
        (Math.sin(t * 0.9 + fl.phase) * 0.04 + Math.sin(t * 2.1 + fl.phase * 1.4) * 0.008) * wAmp * 0.5 + wLeanX * 0.3, 1
      ).normalize();
      fl.group.quaternion.multiply(_slopeSwayQuat);
    }
    if (fl.stamens) {
      for (let si = 0; si < fl.stamens.length; si++) {
        fl.stamens[si].rotation.x = Math.sin(t * 1.5 + fl.phase + si * 2.1) * 0.06;
        fl.stamens[si].rotation.z = Math.sin(t * 1.2 + fl.phase + si * 1.7) * 0.04;
      }
    }
  }

  // Reeds
  for (let i = 0; i < reeds.length; i++) {
    const r = reeds[i];
    const rdx = r.group.position.x - px, rdy = r.group.position.y - py, rdz = r.group.position.z - pz;
    const rd2 = rdx * rdx + rdy * rdy + rdz * rdz;
    if (rd2 > 1600) { if (r.group.visible) r.group.visible = false; continue; }
    if (!r.group.visible) r.group.visible = true;
    if (rd2 > 900) continue;
    if (r.slopeQ) {
      r.group.quaternion.copy(r.slopeQ);
      _slopeSwayQuat.set(
        (Math.sin(t * 0.8 + r.phase + 2) * r.swayAmp * 0.5 * wAmp + wLeanZ) * 0.5, 0,
        (Math.sin(t * 1.1 + r.phase) * r.swayAmp * wAmp + wLeanX) * 0.5, 1
      ).normalize();
      r.group.quaternion.multiply(_slopeSwayQuat);
    }
  }

  // Thornbloom
  for (let i = 0; i < thornblooms.length; i++) {
    const tb = thornblooms[i];
    const p = Math.sin(t * 1.2 + tb.phase) * 0.5 + 0.5;
    const tbGlow = getLocalGlow(tb.group.position.x, tb.group.position.z, bioGlow * orbBoost);
    tb.orbMat.emissiveIntensity = (0.6 + p * 0.6) * tbGlow;
    tb.hazeMat.opacity = (0.06 + p * 0.06) * tbGlow;
    if (tb.slopeQ) {
      tb.group.quaternion.copy(tb.slopeQ);
      _slopeSwayQuat.set(
        (Math.sin(t * 0.4 + tb.phase + 1) * 0.015 * wAmp + wLeanZ * 0.3) * 0.5, 0,
        (Math.sin(t * 0.5 + tb.phase) * 0.02 * wAmp + wLeanX * 0.3) * 0.5, 1
      ).normalize();
      tb.group.quaternion.multiply(_slopeSwayQuat);
    }
  }

  // Helixvine
  for (let i = 0; i < helixvines.length; i++) {
    const hv = helixvines[i];
    for (let j = 0; j < hv.podMats.length; j++) {
      const p = Math.sin(t * 1.5 + hv.phase + j * 1.8) * 0.5 + 0.5;
      hv.podMats[j].emissiveIntensity = (0.5 + p * 0.7) * getLocalGlow(hv.group.position.x, hv.group.position.z, bioGlow * orbBoost);
    }
    if (hv.slopeQ) {
      hv.group.quaternion.copy(hv.slopeQ);
      _slopeSwayQuat.set(0, 0,
        (Math.sin(t * 0.35 + hv.phase) * 0.01 * wAmp + wLeanX * 0.2) * 0.5, 1
      ).normalize();
      hv.group.quaternion.multiply(_slopeSwayQuat);
    }
  }

  // Snapthorn
  updateSnapthorns(snapthorns, dt, t, bioGlow * orbBoost, getLocalGlow);

  // SpiralFrond
  for (let i = 0; i < spiralfronds.length; i++) {
    const sf = spiralfronds[i];
    const sdx = sf.x - px, sdz = sf.z - pz;
    const sd2 = sdx * sdx + sdz * sdz;
    if (sd2 > 1600) { if (sf.group.visible) sf.group.visible = false; continue; }
    if (!sf.group.visible) sf.group.visible = true;
    if (sd2 < 900) {
      for (let j = 0; j < sf.tipMats.length; j++) {
        const p = Math.sin(t * 1.8 + sf.phase + j * 1.5) * 0.5 + 0.5;
        sf.tipMats[j].emissiveIntensity = (0.5 + p * 0.7) * getLocalGlow(sf.x, sf.z, bioGlow * orbBoost);
      }
      if (sf.tipMeshes) {
        for (let ti = 0; ti < sf.tipMeshes.length; ti++) {
          const tm = sf.tipMeshes[ti];
          tm.mesh.position.y = tm.baseY + Math.sin(t * 1.5 + sf.phase + ti * 1.8) * 0.03;
        }
      }
      if (sf.slopeQ) {
        sf.group.quaternion.copy(sf.slopeQ);
        _slopeSwayQuat.set(
          (Math.sin(t * 0.35 + sf.phase + 1) * 0.01 * wAmp + wLeanZ * 0.2) * 0.5, 0,
          (Math.sin(t * 0.4 + sf.phase) * 0.015 * wAmp + wLeanX * 0.2) * 0.5, 1
        ).normalize();
        sf.group.quaternion.multiply(_slopeSwayQuat);
      }
    }
  }

  // CorpseBloom
  for (let i = 0; i < corpseblooms.length; i++) {
    const cb = corpseblooms[i];
    const cdx = cb.x - px, cdz = cb.z - pz;
    const cd2 = cdx * cdx + cdz * cdz;
    if (cd2 > 1600) { if (cb.group.visible) cb.group.visible = false; continue; }
    if (!cb.group.visible) cb.group.visible = true;
    if (cd2 < 900) {
      const cbGlow = getLocalGlow(cb.x, cb.z, bioGlow * orbBoost);
      cb.columnMat.emissiveIntensity = (0.5 + Math.sin(t * 0.8 + cb.phase) * 0.35) * cbGlow;
      cb.hazeMat.opacity = (0.05 + Math.sin(t * 0.8 + cb.phase) * 0.04) * cbGlow;
      for (let fi = 0; fi < cb.flies.length; fi++) {
        const flyAng = t * (2 + fi * 0.5) + fi * 2.1;
        const flyR = 0.2 + Math.sin(t * 0.7 + fi) * 0.08;
        const flyH = 0.1 + Math.sin(t * 1.3 + fi * 1.7) * 0.15;
        cb.flies[fi].position.set(Math.cos(flyAng) * flyR, cb.spadixY + flyH, Math.sin(flyAng) * flyR);
      }
      if (cb.slopeQ) {
        cb.group.quaternion.copy(cb.slopeQ);
        _slopeSwayQuat.set(0, 0,
          (Math.sin(t * 0.3 + cb.phase) * 0.01 * wAmp + wLeanX * 0.15) * 0.5, 1
        ).normalize();
        cb.group.quaternion.multiply(_slopeSwayQuat);
      }
    }
  }

  // OrbBush
  for (let i = 0; i < orbbushes.length; i++) {
    const ob = orbbushes[i];
    const odx = ob.x - px, odz = ob.z - pz;
    const od2 = odx * odx + odz * odz;
    if (od2 > 1600) { if (ob.group.visible) ob.group.visible = false; continue; }
    if (!ob.group.visible) ob.group.visible = true;
    if (od2 < 900) {
      for (let j = 0; j < ob.orbMats.length; j++) {
        const p = Math.sin(t * 2.0 + ob.phase + j * 1.3) * 0.5 + 0.5;
        ob.orbMats[j].emissiveIntensity = (0.5 + p * 0.7) * getLocalGlow(ob.x, ob.z, bioGlow * orbBoost);
      }
      if (ob.slopeQ) {
        ob.group.quaternion.copy(ob.slopeQ);
        _slopeSwayQuat.set(
          (Math.sin(t * 0.4 + ob.phase + 1) * 0.008 * wAmp + wLeanZ * 0.2) * 0.5, 0,
          (Math.sin(t * 0.45 + ob.phase) * 0.012 * wAmp + wLeanX * 0.2) * 0.5, 1
        ).normalize();
        ob.group.quaternion.multiply(_slopeSwayQuat);
      }
    }
  }

  // LanternPod
  for (let i = 0; i < lanternpods.length; i++) {
    const lp = lanternpods[i];
    const ldx = lp.x - px, ldz = lp.z - pz;
    const ld2 = ldx * ldx + ldz * ldz;
    if (ld2 > 1600) { if (lp.group.visible) lp.group.visible = false; continue; }
    if (!lp.group.visible) lp.group.visible = true;
    if (ld2 < 900) {
      for (let j = 0; j < lp.podMats.length; j++) {
        const p = Math.sin(t * 1.5 + lp.phase + j * 1.8) * 0.5 + 0.5;
        lp.podMats[j].emissiveIntensity = (0.5 + p * 0.6) * getLocalGlow(lp.x, lp.z, bioGlow * orbBoost);
      }
      if (lp.podMeshes) {
        for (let pi = 0; pi < lp.podMeshes.length; pi++) {
          const pod = lp.podMeshes[pi];
          pod.rotation.x = Math.sin(t * 0.6 + lp.phase + pi * 1.4) * 0.06 * wAmp;
          pod.rotation.z = Math.sin(t * 0.8 + lp.phase + pi * 0.9) * 0.04 * wAmp;
        }
      }
      if (lp.slopeQ) {
        lp.group.quaternion.copy(lp.slopeQ);
        _slopeSwayQuat.set(
          (Math.sin(t * 0.5 + lp.phase + 1) * 0.015 * wAmp + wLeanZ * 0.25) * 0.5, 0,
          (Math.sin(t * 0.6 + lp.phase) * 0.02 * wAmp + wLeanX * 0.25) * 0.5, 1
        ).normalize();
        lp.group.quaternion.multiply(_slopeSwayQuat);
      }
    }
  }

  // VeilMoss
  for (let i = 0; i < veilmosses.length; i++) {
    const vm = veilmosses[i];
    const vdx = vm.x - px, vdz = vm.z - pz;
    const vd2 = vdx * vdx + vdz * vdz;
    if (vd2 > 1600) { if (vm.group.visible) vm.group.visible = false; continue; }
    if (!vm.group.visible) vm.group.visible = true;
    if (vd2 < 900) {
      if (vm.veilRefs) {
        for (let j = 0; j < vm.veilRefs.length; j++) {
          const vr = vm.veilRefs[j];
          const d = vr.depth;
          vr.mesh.rotation.z = Math.sin(t * 0.8 + vm.phase + j * 0.7) * 0.06 * d * wAmp;
          vr.mesh.rotation.x = Math.sin(t * 0.5 + vm.phase + j * 0.9) * 0.04 * d * wAmp;
        }
      } else {
        for (let j = 0; j < vm.veilMats.length; j++) {
          vm.veilMats[j].rotation.z = Math.sin(t * 0.8 + vm.phase + j * 0.7) * 0.06 * wAmp;
        }
      }
      if (vm.slopeQ) {
        vm.group.quaternion.copy(vm.slopeQ);
        _slopeSwayQuat.set(0, 0,
          (Math.sin(t * 0.35 + vm.phase) * 0.01 * wAmp + wLeanX * 0.15) * 0.5, 1
        ).normalize();
        vm.group.quaternion.multiply(_slopeSwayQuat);
      }
    }
  }

  // Ground glow patches
  for (let i = 0; i < groundGlows.length; i++) {
    const gg = groundGlows[i];
    const gdx = gg.x - px, gdz = gg.z - pz;
    if (gdx * gdx + gdz * gdz > 3600) { gg.mesh.visible = false; continue; }
    gg.mesh.visible = true;
    const pulse = Math.sin(t * gg.speed + gg.phase) * 0.3 + 0.7;
    gg.mat.opacity = gg.baseOpacity * pulse * getLocalGlow(gg.x, gg.z, bioGlow * orbBoost);
  }
}

export function updateFloraReactions(dt, t) {
  const px = player.pos.x, py = player.pos.y, pz = player.pos.z;
  const curRain = getRainRate();
  const stormDroop = isStorming ? 0.6 : (curRain > 0.3 ? curRain * 0.4 : 0);

  // Flowers: bloom on proximity
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fx = fl.group.position.x, fz = fl.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 16 ? 1.0 : 0.0;
    fl._react = (fl._react || 0);
    fl._react += (target - fl._react) * dt * (target > 0 ? 4 : 1.5);
    const sc = (1.0 + fl._react * 0.15) * (1.0 - stormDroop * 0.12);
    const sy = (1.0 + fl._react * 0.05) * (1.0 - stormDroop * 0.15);
    fl.group.scale.set(sc, sy, sc);
    fl.petalMat.emissiveIntensity += fl._react * 0.6 * getLocalGlow(fx, fz, bioGlow * orbBoost) * (1.0 - stormDroop * 0.4);
  }

  // Mushrooms: bright pulse on proximity
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const ddx = m.x - px, ddz = m.z - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const touch = dist2 < 4 ? 1.0 : 0.0;
    m._touch = (m._touch || 0);
    m._touch += (touch - m._touch) * dt * (touch > 0 ? 6 : 1.5);
    const rainBoost = curRain * 0.4;
    m.capMat.emissiveIntensity += (m._touch * 1.5 + rainBoost) * getLocalGlow(m.x, m.z, bioGlow * orbBoost);
    const ms = 1.0 + m._touch * 0.08;
    m.group.scale.set(ms, 1.0 + m._touch * 0.04, ms);
  }

  // Ferns: curl inward
  for (let i = 0; i < ferns.length; i++) {
    const f = ferns[i];
    const fx = f.group.position.x, fz = f.group.position.z;
    const ddx = fx - px, ddz = fz - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    const target = dist2 < 2.25 ? 0.65 : 1.0;
    f._curl = (f._curl === undefined ? 1.0 : f._curl);
    f._curl += (target - f._curl) * dt * (target < 1.0 ? 4 : 1.5);
    f.group.scale.set(1.0 + (1 - f._curl) * 0.3, f._curl, 1.0 + (1 - f._curl) * 0.3);
  }

  // Crystal resonance chains
  initEnergyLines();
  const fogDampen = weatherState === 'FOG_BANK' ? 0.5 : 1.0;
  let crystalChainCount = 0;
  let lineIdx = 0;
  for (let i = 0; i < crys_data.length; i++) {
    const c = crys_data[i];
    const ddx = c.x - px, ddz = c.z - pz;
    if (ddx * ddx + ddz * ddz < 36) {
      for (let j = 0; j < crys_data.length; j++) {
        if (i === j) continue;
        const c2 = crys_data[j];
        const cdx = c.x - c2.x, cdz = c.z - c2.z;
        const cd2 = cdx * cdx + cdz * cdz;
        if (cd2 < 400) {
          crystalChainCount++;
          const chainStr = (1 - Math.sqrt(cd2) / 20) * 0.8 * fogDampen;
          c2.mat.emissiveIntensity += chainStr * getLocalGlow(c2.x, c2.z, bioGlow * orbBoost);
          if (lineIdx < MAX_ENERGY_LINES) {
            const el = energyLines[lineIdx];
            const posArr = el.geo.attributes.position.array;
            const cy1 = 1.0, cy2 = 1.0;
            posArr[0] = c.x; posArr[1] = cy1; posArr[2] = c.z;
            posArr[3] = c2.x; posArr[4] = cy2; posArr[5] = c2.z;
            el.geo.attributes.position.needsUpdate = true;
            el.geo.computeBoundingSphere();
            el.active = true;
            const pulse = Math.sin(t * 3 + i * 1.5 + j * 0.7) * 0.3 + 0.5;
            el.opacity = chainStr * pulse * getLocalGlow(c.x, c.z, bioGlow * orbBoost);
            el.line.material.opacity = el.opacity;
            el.line.visible = true;
            lineIdx++;
          }
        }
      }
    }
  }
  for (let i = lineIdx; i < MAX_ENERGY_LINES; i++) {
    const el = energyLines[i];
    if (el.line.visible) {
      el.opacity *= 0.85;
      el.line.material.opacity = el.opacity;
      if (el.opacity < 0.01) el.line.visible = false;
    }
  }
  return crystalChainCount;
}
