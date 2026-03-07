// ================================================================
// Magical entity updates — wisps, fairy rings, bubbles, ponds, echo bloom
// ================================================================
// Extracted from main.js.

import { EYE_H, WISP_N, FAIRY_RING_R, FAIRY_BOUNCE, BUBBLE_POP_R, JUMP_IMPULSE, WORLD_R } from '../constants.js';
import { sr } from '../utils/rng.js';
import { getLocalGlow, isRestored } from '../systems/dimming.js';
import { getPlayerFrequency } from '../systems/attunement.js';
import { spawnBubblePop } from '../particles/bubblePops.js';

export function updateWisps(wisps, dt, t, ctx) {
  const { player, playerIdleTime, sprinting, questPhase, orbs } = ctx;
  const carriedFreq = getPlayerFrequency();
  let guideOrb = null;
  if ((playerIdleTime > 5 || carriedFreq) && (questPhase === 'SEEK' || questPhase === 'RISING')) {
    let bestD = Infinity;
    for (let oi = 0; oi < orbs.length; oi++) {
      if (orbs[oi].found) continue;
      const odx = orbs[oi].x - player.pos.x, odz = orbs[oi].z - player.pos.z;
      const od2 = odx * odx + odz * odz;
      if (od2 < bestD) { bestD = od2; guideOrb = orbs[oi]; }
    }
  }
  for (let i = 0; i < wisps.length; i++) {
    const w = wisps[i];
    const orbitAng = t * 0.5 + w.phase + (i / WISP_N) * 6.28;
    const orbitR = sprinting ? 4 + i * 2 : 1.5 + i * 0.8;
    const orbitY = sprinting ? 3 + i : 1.2 + Math.sin(t * 0.7 + w.phase) * 0.5;
    w.targetX = player.pos.x + Math.cos(orbitAng) * orbitR;
    w.targetY = player.pos.y - EYE_H + orbitY;
    w.targetZ = player.pos.z + Math.sin(orbitAng) * orbitR;
    if (i === 0 && guideOrb) {
      const guideFrac = carriedFreq ? 0.5 : Math.min((playerIdleTime - 5) / 3, 0.6);
      const midX = (player.pos.x + guideOrb.x) * 0.5;
      const midZ = (player.pos.z + guideOrb.z) * 0.5;
      w.targetX += (midX - player.pos.x) * guideFrac;
      w.targetZ += (midZ - player.pos.z) * guideFrac;
      w.targetY += 0.5;
    }
    const followRate = sprinting ? 0.8 : 2.5;
    w.velX += (w.targetX - w.group.position.x) * followRate * dt;
    w.velY += (w.targetY - w.group.position.y) * followRate * dt;
    w.velZ += (w.targetZ - w.group.position.z) * followRate * dt;
    w.velX *= 0.92; w.velY *= 0.92; w.velZ *= 0.92;
    w.group.position.x += w.velX * dt * 4;
    w.group.position.y += w.velY * dt * 4;
    w.group.position.z += w.velZ * dt * 4;
    const p = Math.sin(t * 2 + w.phase) * 0.5 + 0.5;
    w.glowMat.opacity = 0.3 + p * 0.4;
    w.hazeMat.opacity = 0.08 + p * 0.12;
    const sa = t * (2.5 + i * 0.5) + w.phase;
    const sparkR = 0.14 + Math.sin(t * 1.3 + w.phase) * 0.06;
    const ch = w.group.children[5];
    ch.position.set(Math.cos(sa) * sparkR, Math.sin(sa * 1.5) * 0.08, Math.sin(sa) * sparkR);
    for (let ti = 0; ti < w.tendrils.length; ti++) {
      const td = w.tendrils[ti];
      const wave = Math.sin(t * 3 + ti * 2.1 + w.phase) * 0.3;
      const radius = 0.08 + Math.sin(t * 2 + ti * 1.5) * 0.04;
      td.mesh.position.x = Math.cos(td.baseAng + wave) * radius;
      td.mesh.position.z = Math.sin(td.baseAng + wave) * radius;
      td.mesh.rotation.y = td.baseAng + wave;
      td.mesh.rotation.z = Math.PI / 3 + Math.sin(t * 2.5 + ti) * 0.2;
    }
    for (let ei = 0; ei < w.embers.length; ei++) {
      const eOff = (ei + 1) * 0.08;
      w.embers[ei].position.y = -0.06 - eOff + Math.sin(t * 4 + ei * 1.4 + w.phase) * 0.03;
      w.embers[ei].position.x = Math.sin(t * 2.5 + ei * 2 + w.phase) * 0.06;
      w.embers[ei].material.opacity = 0.2 + Math.sin(t * 5 + ei * 1.7) * 0.15;
    }
    w.facet.rotation.y += dt * 1.5;
    w.facet.rotation.x += dt * 0.7;
    w.halo.rotation.z += dt * 0.3;
    w.halo2.rotation.y += dt * 0.2;
  }
}

export function updateFairyRings(fairyRings, dt, t, ctx) {
  const { player, bioGlow, _orbBoost, playFairyBounce } = ctx;
  let featherFallTriggered = false;
  for (let i = 0; i < fairyRings.length; i++) {
    const fr = fairyRings[i];
    const dx = fr.x - player.pos.x, dz = fr.z - player.pos.z;
    const dist2 = dx * dx + dz * dz;
    const inRing = dist2 < (FAIRY_RING_R + 0.5) * (FAIRY_RING_R + 0.5);
    const targetGlow = inRing ? 1.0 : 0.0;
    fr.glowIntensity += (targetGlow - fr.glowIntensity) * dt * 3;
    fr.discMat.opacity = fr.glowIntensity * 0.5 * (0.6 + Math.sin(t * 2 + fr.phase) * 0.4);
    fr.mushMat.emissiveIntensity = (0.2 + fr.glowIntensity * 0.8) * getLocalGlow(fr.x, fr.z, bioGlow * _orbBoost);
    if (inRing && player.vel.y > 0 && player.vel.y <= JUMP_IMPULSE + 0.5) {
      const ringRestored = isRestored(fr.x, fr.z);
      if (ringRestored) {
        player.vel.y = JUMP_IMPULSE * 3.5;
        featherFallTriggered = true;
      } else {
        player.vel.y = JUMP_IMPULSE + FAIRY_BOUNCE;
      }
      fr.glowIntensity = 1.5;
      playFairyBounce();
    }
    const sporeAlpha = 0.08 + fr.glowIntensity * 0.25;
    fr.sporeMat.opacity = sporeAlpha;
    for (let si = 0; si < fr.spores.length; si++) {
      const sp = fr.spores[si];
      sp.drift += dt * 0.3;
      sp.mesh.position.y += sp.speed * dt * (0.5 + fr.glowIntensity);
      sp.mesh.position.x = sp.baseX + Math.sin(t * 0.8 + sp.drift) * 0.15;
      sp.mesh.position.z = sp.baseZ + Math.cos(t * 0.6 + sp.drift) * 0.12;
      if (sp.mesh.position.y > 0.8) sp.mesh.position.y = 0.03;
      sp.mesh.scale.setScalar(0.6 + Math.sin(t * 2 + si) * 0.4);
    }
    for (let gwi = 0; gwi < fr.glowWorms.length; gwi++) {
      const pulse = Math.sin(t * 1.5 + gwi * 1.3 + fr.phase) * 0.5 + 0.5;
      fr.glowWorms[gwi].material.opacity = 0.1 + pulse * 0.4 + fr.glowIntensity * 0.3;
    }
  }
  return { featherFallTriggered };
}

export function updateBubbles(bubbles, dt, t, ctx) {
  const { player, playBubblePop } = ctx;
  for (let i = 0; i < bubbles.length; i++) {
    const b = bubbles[i];
    if (b.popped) {
      b.popTimer -= dt;
      if (b.popTimer <= 0) {
        b.popped = false; b.group.visible = true;
        const a = sr() * 6.28, d = 8 + sr() * WORLD_R * 0.5;
        b.homeX = Math.cos(a) * d; b.homeZ = Math.sin(a) * d;
        b.floatY = 0.5 + sr() * 4;
        b.group.position.set(b.homeX, b.floatY, b.homeZ);
      }
      continue;
    }
    b.driftAng += dt * 0.2;
    const tx = b.homeX + Math.sin(b.driftAng) * 3;
    const tz = b.homeZ + Math.cos(b.driftAng * 0.7) * 3;
    b.group.position.x += (tx - b.group.position.x) * dt * 0.5;
    b.group.position.z += (tz - b.group.position.z) * dt * 0.5;
    b.group.position.y = b.floatY + Math.sin(t * 0.6 + b.phase) * b.bobAmp;
    const hue = (t * 0.1 + b.phase) % 1;
    b.shellMat.color.setRGB(
      Math.sin(hue * 6.28) * 0.15 + 0.7,
      Math.sin(hue * 6.28 + 2.09) * 0.15 + 0.7,
      Math.sin(hue * 6.28 + 4.19) * 0.15 + 0.8
    );
    b.shellMat.opacity = 0.18 + Math.sin(t * 1.5 + b.phase) * 0.08;
    const bdx = b.group.position.x - player.pos.x;
    const bdy = b.group.position.y - player.pos.y;
    const bdz = b.group.position.z - player.pos.z;
    if (bdx * bdx + bdy * bdy + bdz * bdz < BUBBLE_POP_R * BUBBLE_POP_R * b.sc * b.sc) {
      b.popped = true; b.popTimer = 8 + Math.random() * 8;
      b.group.visible = false;
      spawnBubblePop(b.group.position.x, b.group.position.y, b.group.position.z, 6);
      playBubblePop(b.group.position, player.pos);
    }
  }
}

export function updatePonds(ponds, dt, t, ctx) {
  const { bioGlow, _orbBoost, getRainRate } = ctx;
  const curRain = getRainRate();
  for (let i = 0; i < ponds.length; i++) {
    const po = ponds[i];
    const padBob = 0.015 + curRain * 0.01;
    for (let j = 0; j < po.pads.length; j++) {
      po.pads[j].mesh.position.y = 0.05 + Math.sin(t * (0.8 + curRain * 0.4) + po.pads[j].phase) * padBob;
    }
    const rainGlowBoost = curRain * 0.08;
    const pondGlow = getLocalGlow(po.x, po.z, bioGlow * _orbBoost);
    po.waterMat.emissiveIntensity = (0.15 + rainGlowBoost + Math.sin(t * 1.0 + po.phase) * 0.1) * pondGlow;
    const fp = Math.sin(t * 1.2 + po.phase) * 0.5 + 0.5;
    po.flMat.emissiveIntensity = (0.3 + fp * 0.5) * pondGlow;
    const rippleSpeed = 0.25 + curRain * 0.2;
    const rippleAlpha = 0.12 + curRain * 0.08;
    for (let ri = 0; ri < po.ripples.length; ri++) {
      const rp = po.ripples[ri];
      const cycle = ((t * rippleSpeed + rp.phase) % 1.0);
      const scale = 0.2 + cycle * po.pondR * 0.8;
      rp.mesh.scale.setScalar(scale);
      rp.mesh.material.opacity = (1.0 - cycle) * rippleAlpha;
    }
    const tadSpeedMult = 1.0 + curRain * 0.5;
    for (let tdi = 0; tdi < po.tadpoles.length; tdi++) {
      const td = po.tadpoles[tdi];
      td.ang += td.speed * tadSpeedMult * dt;
      const tx = Math.cos(td.ang) * td.orbR;
      const tz = Math.sin(td.ang) * td.orbR;
      td.body.position.x = tx;
      td.body.position.z = tz;
      td.body.rotation.y = td.ang + Math.PI / 2;
      const tailOff = 0.02;
      td.tail.position.x = tx - Math.cos(td.ang) * tailOff;
      td.tail.position.z = tz - Math.sin(td.ang) * tailOff;
      td.tail.rotation.y = td.ang;
      td.tail.rotation.z = Math.PI / 2 + Math.sin(t * (8 + curRain * 2) + tdi * 3) * 0.4;
    }
  }
}

export function updateEchoBloom(dt, t, ctx) {
  const { player, bioGlow, _orbBoost, crys_data, mush_data, flowers, getEchoBloomRing, echoBloom } = ctx;

  echoBloom.timer -= dt;
  if (echoBloom.timer <= 0) {
    echoBloom.timer = 0.5;
    for (let i = 0; i < crys_data.length; i++) {
      const c = crys_data[i];
      const dx = c.x - player.pos.x, dz = c.z - player.pos.z;
      if (dx * dx + dz * dz < 36) {
        echoBloom.center = { x: c.x, z: c.z }; echoBloom.radius = 0; break;
      }
    }
  }

  const ring = getEchoBloomRing();
  if (!echoBloom.center) {
    ring.visible = false;
    return;
  }
  echoBloom.radius += dt * 12;
  if (echoBloom.radius > 30) {
    echoBloom.center = null; echoBloom.radius = 0;
    ring.visible = false;
    return;
  }
  ring.visible = true;
  ring.position.set(echoBloom.center.x, 0.15, echoBloom.center.z);
  ring.scale.setScalar(echoBloom.radius);
  ring.material.opacity = (1.0 - echoBloom.radius / 30) * 0.45;

  const wave = echoBloom.radius;
  const waveW = 4.0;
  for (let i = 0; i < mush_data.length; i++) {
    const m = mush_data[i];
    const dx = m.x - echoBloom.center.x, dz = m.z - echoBloom.center.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    if (Math.abs(d - wave) < waveW) {
      const waveFrac = 1 - Math.abs(d - wave) / waveW;
      m.capMat.emissiveIntensity = Math.max(m.capMat.emissiveIntensity, (m.base + waveFrac * 2.0) * getLocalGlow(m.x, m.z, bioGlow * _orbBoost));
    }
  }
  for (let i = 0; i < flowers.length; i++) {
    const fl = flowers[i];
    const fx = fl.group.position.x - echoBloom.center.x;
    const fz = fl.group.position.z - echoBloom.center.z;
    const d = Math.sqrt(fx * fx + fz * fz);
    if (Math.abs(d - wave) < waveW) {
      const waveFrac = 1 - Math.abs(d - wave) / waveW;
      fl.petalMat.emissiveIntensity = Math.max(fl.petalMat.emissiveIntensity, (0.3 + waveFrac * 1.5) * getLocalGlow(fl.group.position.x, fl.group.position.z, bioGlow * _orbBoost));
    }
  }
}
