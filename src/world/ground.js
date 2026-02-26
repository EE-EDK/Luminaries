import * as THREE from 'three';
import { WORLD_R } from '../constants.js';
import { scene } from '../core/renderer.js';

// ================================================================
// Procedural ground texture via canvas (fantasy organic — spirals, loops, no grid)
// ================================================================

function makeGroundTexture() {
  const S = 1024;
  const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  // Base color — bright enough to catch moonlight and ambient
  ctx.fillStyle = '#1a3828'; ctx.fillRect(0, 0, S, S);

  // === TILE-BREAKING: paint edges that wrap seamlessly ===
  for (let ei = 0; ei < 20; ei++) {
    const ex = Math.random() * S, ey = Math.random() * S;
    const er = 40 + Math.random() * 80;
    const eGrad = ctx.createRadialGradient(ex, ey, 0, ex, ey, er);
    const ec = Math.random();
    if (ec < 0.4) {
      eGrad.addColorStop(0, 'rgba(30,60,35,0.25)');
      eGrad.addColorStop(1, 'rgba(20,42,24,0)');
    } else if (ec < 0.7) {
      eGrad.addColorStop(0, 'rgba(40,35,18,0.2)');
      eGrad.addColorStop(1, 'rgba(25,30,18,0)');
    } else {
      eGrad.addColorStop(0, 'rgba(35,70,40,0.22)');
      eGrad.addColorStop(1, 'rgba(20,48,28,0)');
    }
    ctx.fillStyle = eGrad;
    for (let wx = -1; wx <= 1; wx++) {
      for (let wy = -1; wy <= 1; wy++) {
        ctx.beginPath(); ctx.arc(ex + wx * S, ey + wy * S, er, 0, 6.28); ctx.fill();
      }
    }
  }

  // Layered organic noise
  const cellNs = [60, 200, 600];
  const alphas = [0.18, 0.12, 0.08];
  const cellRs = [30, 12, 5];
  for (let pass = 0; pass < 3; pass++) {
    for (let ci = 0; ci < cellNs[pass]; ci++) {
      const cx = Math.random() * S, cy = Math.random() * S;
      const r = Math.random();
      if (r < 0.25) ctx.fillStyle = 'rgba(8,16,8,' + alphas[pass] + ')';
      else if (r < 0.5) ctx.fillStyle = 'rgba(20,45,25,' + alphas[pass] + ')';
      else if (r < 0.75) ctx.fillStyle = 'rgba(30,55,28,' + alphas[pass] + ')';
      else ctx.fillStyle = 'rgba(28,22,12,' + alphas[pass] + ')';
      ctx.beginPath(); ctx.arc(cx, cy, cellRs[pass] + Math.random() * cellRs[pass] * 0.5, 0, 6.28); ctx.fill();
    }
  }

  // Fantasy spirals
  for (let spi = 0; spi < 12; spi++) {
    const spx = Math.random() * S, spy = Math.random() * S;
    const spR = 30 + Math.random() * 60;
    const spTurns = 1.5 + Math.random() * 3;
    const spDir = Math.random() < 0.5 ? 1 : -1;
    const spSteps = Math.floor(40 + Math.random() * 40);
    const spCol = Math.random();
    if (spCol < 0.4) ctx.strokeStyle = 'rgba(35,65,30,0.1)';
    else if (spCol < 0.7) ctx.strokeStyle = 'rgba(25,50,35,0.08)';
    else ctx.strokeStyle = 'rgba(45,35,20,0.07)';
    ctx.lineWidth = 1 + Math.random() * 2;
    ctx.beginPath();
    for (let si = 0; si < spSteps; si++) {
      const t = si / spSteps;
      const a = t * spTurns * 6.28 * spDir;
      const r = t * spR;
      const px = spx + Math.cos(a) * r;
      const py = spy + Math.sin(a) * r;
      if (si === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    const spGrad = ctx.createRadialGradient(spx, spy, 0, spx, spy, spR * 0.6);
    spGrad.addColorStop(0, 'rgba(30,60,35,0.06)');
    spGrad.addColorStop(1, 'rgba(15,30,15,0)');
    ctx.fillStyle = spGrad;
    ctx.beginPath(); ctx.arc(spx, spy, spR * 0.6, 0, 6.28); ctx.fill();
  }

  // Fantasy loops / circles
  for (let li = 0; li < 8; li++) {
    const lx = Math.random() * S, ly = Math.random() * S;
    const lr = 15 + Math.random() * 35;
    ctx.strokeStyle = 'rgba(35,55,30,' + (0.06 + Math.random() * 0.06) + ')';
    ctx.lineWidth = 1.5 + Math.random() * 2;
    ctx.beginPath(); ctx.arc(lx, ly, lr, 0, 6.28); ctx.stroke();
    if (Math.random() < 0.6) {
      ctx.strokeStyle = 'rgba(40,65,35,0.04)';
      ctx.beginPath(); ctx.arc(lx, ly, lr * 0.6, 0, 6.28); ctx.stroke();
    }
  }

  // Flowing curves (organic vein networks)
  for (let vi = 0; vi < 15; vi++) {
    let vx = Math.random() * S, vy = Math.random() * S;
    ctx.strokeStyle = 'rgba(22,40,18,' + (0.08 + Math.random() * 0.08) + ')';
    ctx.lineWidth = 0.8 + Math.random() * 1.5;
    ctx.beginPath(); ctx.moveTo(vx, vy);
    let vAng = Math.random() * 6.28;
    for (let vj = 0; vj < 20; vj++) {
      vAng += Math.sin(vj * 0.5) * 0.4 + (Math.random() - 0.5) * 0.3;
      vx += Math.cos(vAng) * (5 + Math.random() * 8);
      vy += Math.sin(vAng) * (5 + Math.random() * 8);
      ctx.lineTo(vx, vy);
    }
    ctx.stroke();
  }

  // Scatter tiny leaf litter dots
  for (let i = 0; i < 4000; i++) {
    const lx = Math.random() * S, ly = Math.random() * S;
    const lr = 1 + Math.random() * 2.5;
    const c = Math.random();
    if (c < 0.25) ctx.fillStyle = 'rgba(50,28,10,0.3)';
    else if (c < 0.4) ctx.fillStyle = 'rgba(65,40,18,0.22)';
    else if (c < 0.6) ctx.fillStyle = 'rgba(18,45,22,0.25)';
    else if (c < 0.8) ctx.fillStyle = 'rgba(35,60,30,0.2)';
    else ctx.fillStyle = 'rgba(45,32,15,0.18)';
    ctx.beginPath(); ctx.arc(lx, ly, lr, 0, 6.28); ctx.fill();
  }

  // Pebble scatter
  for (let pi = 0; pi < 600; pi++) {
    const px = Math.random() * S, py = Math.random() * S;
    const pr = 1.5 + Math.random() * 3;
    const pg = Math.floor(25 + Math.random() * 40);
    ctx.fillStyle = 'rgba(' + pg + ',' + (pg - 3) + ',' + (pg - 8) + ',0.25)';
    ctx.beginPath(); ctx.arc(px, py, pr, 0, 6.28); ctx.fill();
  }

  // Twig marks
  ctx.lineWidth = 0.8;
  for (let twi = 0; twi < 100; twi++) {
    const tx = Math.random() * S, ty = Math.random() * S;
    const tLen = 3 + Math.random() * 16;
    const tAng = Math.random() * 6.28;
    ctx.strokeStyle = 'rgba(20,10,4,0.2)';
    ctx.beginPath(); ctx.moveTo(tx, ty);
    ctx.lineTo(tx + Math.cos(tAng) * tLen, ty + Math.sin(tAng) * tLen);
    ctx.stroke();
  }

  // Tiny fantasy rune dots
  const runeColors = ['rgba(80,200,120,0.06)', 'rgba(120,80,180,0.05)', 'rgba(180,120,60,0.04)',
    'rgba(60,150,180,0.05)', 'rgba(150,100,200,0.04)'];
  for (let ri = 0; ri < 200; ri++) {
    const rx = Math.random() * S, ry = Math.random() * S;
    ctx.fillStyle = runeColors[Math.floor(Math.random() * runeColors.length)];
    ctx.beginPath(); ctx.arc(rx, ry, 0.8 + Math.random() * 1.5, 0, 6.28); ctx.fill();
  }

  // Moss cluster blobs
  for (let mci = 0; mci < 30; mci++) {
    const mx = Math.random() * S, my = Math.random() * S;
    const mrad = 12 + Math.random() * 25;
    const grad = ctx.createRadialGradient(mx, my, 0, mx, my, mrad);
    if (Math.random() < 0.6) {
      grad.addColorStop(0, 'rgba(28,60,30,0.1)');
      grad.addColorStop(1, 'rgba(15,35,18,0)');
    } else {
      grad.addColorStop(0, 'rgba(38,50,22,0.08)');
      grad.addColorStop(1, 'rgba(20,30,12,0)');
    }
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(mx, my, mrad, 0, 6.28); ctx.fill();
  }

  // Dew highlights
  for (let dsi = 0; dsi < 120; dsi++) {
    const dx = Math.random() * S, dy = Math.random() * S;
    ctx.fillStyle = 'rgba(100,160,110,0.06)';
    ctx.beginPath(); ctx.arc(dx, dy, 0.5 + Math.random() * 1, 0, 6.28); ctx.fill();
  }

  // Root veins
  ctx.lineWidth = 1;
  for (let i = 0; i < 40; i++) {
    ctx.strokeStyle = 'rgba(25,14,5,0.18)';
    let sx = Math.random() * S, sy = Math.random() * S;
    let ang = Math.random() * 6.28;
    ctx.beginPath(); ctx.moveTo(sx, sy);
    for (let j = 0; j < 8; j++) {
      ang += Math.sin(j * 0.7) * 0.5 + (Math.random() - 0.5) * 0.4;
      sx += Math.cos(ang) * (10 + Math.random() * 15);
      sy += Math.sin(ang) * (10 + Math.random() * 15);
      ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createGround() {
  const groundTex = makeGroundTexture();
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(WORLD_R * 1.5, 64),
    new THREE.MeshStandardMaterial({
      map: groundTex, color: 0xddeedd, roughness: 0.85, metalness: 0.0,
      emissive: 0x0a1a10, emissiveIntensity: 0.15
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  return ground;
}
