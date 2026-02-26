import * as THREE from 'three';
import { WORLD_R } from '../constants.js';
import { scene } from '../core/renderer.js';
import { getGroundY } from './terrain.js';

// ================================================================
// Procedural ground texture — bioluminescent forest floor
// Rich variety: mossy patches, bare earth, glowing mycelium, leaf litter
// ================================================================

function makeGroundTexture() {
  const S = 2048; // higher res for more detail
  const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  const R = Math.random;

  // ---- 1. Base: varied earth tones (not uniform) ----
  ctx.fillStyle = '#2a5038'; ctx.fillRect(0, 0, S, S);

  // Large biome patches (some mossy, some bare, some rich humus)
  const biomes = [
    { col: 'rgba(40,80,50,0.35)', n: 15, r: 120 },  // mossy green
    { col: 'rgba(60,50,25,0.25)', n: 12, r: 100 },  // brown earth
    { col: 'rgba(30,65,55,0.25)', n: 10, r: 110 },  // teal moss
    { col: 'rgba(55,70,35,0.2)', n: 8, r: 90 },     // olive
    { col: 'rgba(35,40,25,0.25)', n: 8, r: 80 },    // dark soil
  ];
  for (const b of biomes) {
    for (let i = 0; i < b.n; i++) {
      const x = R() * S, y = R() * S;
      const rad = b.r * (0.5 + R() * 0.8);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rad);
      grad.addColorStop(0, b.col);
      grad.addColorStop(0.6, b.col.replace(/[\d.]+\)$/, (parseFloat(b.col.match(/[\d.]+\)$/)[0]) * 0.4) + ')'));
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      // Tile-wrap
      for (let wx = -1; wx <= 1; wx++) {
        for (let wy = -1; wy <= 1; wy++) {
          ctx.beginPath(); ctx.arc(x + wx * S, y + wy * S, rad, 0, 6.28); ctx.fill();
        }
      }
    }
  }

  // ---- 2. Organic cell noise (multi-scale, varied colors) ----
  const cellPasses = [
    { n: 80, r: 25, colors: ['rgba(20,45,25,0.2)', 'rgba(35,55,28,0.18)', 'rgba(28,22,12,0.2)', 'rgba(15,38,30,0.15)'] },
    { n: 200, r: 10, colors: ['rgba(30,55,30,0.14)', 'rgba(45,35,18,0.12)', 'rgba(22,48,35,0.12)', 'rgba(38,28,14,0.1)'] },
    { n: 500, r: 4, colors: ['rgba(25,50,28,0.1)', 'rgba(40,30,15,0.08)', 'rgba(18,42,32,0.08)', 'rgba(32,25,10,0.06)'] },
  ];
  for (const pass of cellPasses) {
    for (let i = 0; i < pass.n; i++) {
      ctx.fillStyle = pass.colors[Math.floor(R() * pass.colors.length)];
      const cx = R() * S, cy = R() * S;
      ctx.beginPath(); ctx.arc(cx, cy, pass.r + R() * pass.r * 0.6, 0, 6.28); ctx.fill();
    }
  }

  // ---- 3. Bioluminescent mycelium network (glowing veins) ----
  const glowCols = ['rgba(60,200,100,0.06)', 'rgba(50,180,120,0.05)', 'rgba(80,160,200,0.04)', 'rgba(100,220,150,0.05)'];
  for (let vi = 0; vi < 25; vi++) {
    let vx = R() * S, vy = R() * S;
    const vCol = glowCols[Math.floor(R() * glowCols.length)];
    ctx.strokeStyle = vCol;
    ctx.lineWidth = 1 + R() * 2;
    ctx.beginPath(); ctx.moveTo(vx, vy);
    let vAng = R() * 6.28;
    const segs = 12 + Math.floor(R() * 16);
    for (let j = 0; j < segs; j++) {
      vAng += Math.sin(j * 0.6) * 0.5 + (R() - 0.5) * 0.4;
      vx += Math.cos(vAng) * (6 + R() * 10);
      vy += Math.sin(vAng) * (6 + R() * 10);
      ctx.lineTo(vx, vy);
    }
    ctx.stroke();
    // Glow nodes at junctions
    if (R() < 0.6) {
      const ng = ctx.createRadialGradient(vx, vy, 0, vx, vy, 6 + R() * 8);
      ng.addColorStop(0, vCol.replace('0.0', '0.1'));
      ng.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = ng;
      ctx.beginPath(); ctx.arc(vx, vy, 6 + R() * 8, 0, 6.28); ctx.fill();
    }
  }

  // ---- 4. Root veins (dark, organic) ----
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = `rgba(20,12,5,${0.15 + R() * 0.12})`;
    let sx = R() * S, sy = R() * S;
    let ang = R() * 6.28;
    ctx.beginPath(); ctx.moveTo(sx, sy);
    for (let j = 0; j < 10; j++) {
      ang += Math.sin(j * 0.7) * 0.5 + (R() - 0.5) * 0.35;
      sx += Math.cos(ang) * (8 + R() * 14);
      sy += Math.sin(ang) * (8 + R() * 14);
      ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

  // ---- 5. Leaf litter and debris (multi-colored, varied sizes) ----
  const leafCols = [
    'rgba(55,32,12,0.3)', 'rgba(70,42,18,0.25)', 'rgba(40,55,22,0.22)',
    'rgba(22,50,28,0.2)', 'rgba(60,45,20,0.25)', 'rgba(30,60,35,0.18)',
    'rgba(50,25,8,0.22)', 'rgba(65,55,25,0.18)'
  ];
  for (let i = 0; i < 3000; i++) {
    ctx.fillStyle = leafCols[Math.floor(R() * leafCols.length)];
    const lx = R() * S, ly = R() * S;
    const lr = 0.8 + R() * 2.5;
    ctx.beginPath(); ctx.arc(lx, ly, lr, 0, 6.28); ctx.fill();
  }

  // ---- 6. Moss cluster blobs (larger, softer, varied greens) ----
  for (let mci = 0; mci < 40; mci++) {
    const mx = R() * S, my = R() * S;
    const mrad = 15 + R() * 35;
    const grad = ctx.createRadialGradient(mx, my, 0, mx, my, mrad);
    const mCol = R();
    if (mCol < 0.4) {
      grad.addColorStop(0, 'rgba(45,90,50,0.18)');
      grad.addColorStop(1, 'rgba(25,55,30,0)');
    } else if (mCol < 0.7) {
      grad.addColorStop(0, 'rgba(35,75,60,0.16)');
      grad.addColorStop(1, 'rgba(20,50,38,0)');
    } else {
      grad.addColorStop(0, 'rgba(55,75,35,0.14)');
      grad.addColorStop(1, 'rgba(30,45,20,0)');
    }
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(mx, my, mrad, 0, 6.28); ctx.fill();
  }

  // ---- 7. Pebbles and small rocks ----
  for (let pi = 0; pi < 400; pi++) {
    const px = R() * S, py = R() * S;
    const pr = 1.5 + R() * 3.5;
    const pg = Math.floor(28 + R() * 42);
    ctx.fillStyle = `rgba(${pg},${pg - 4},${pg - 10},0.3)`;
    ctx.beginPath(); ctx.arc(px, py, pr, 0, 6.28); ctx.fill();
  }

  // ---- 8. Twig marks ----
  ctx.lineWidth = 0.7;
  for (let twi = 0; twi < 80; twi++) {
    const tx = R() * S, ty = R() * S;
    const tLen = 4 + R() * 18;
    const tAng = R() * 6.28;
    ctx.strokeStyle = `rgba(22,12,5,${0.15 + R() * 0.1})`;
    ctx.beginPath(); ctx.moveTo(tx, ty);
    ctx.lineTo(tx + Math.cos(tAng) * tLen, ty + Math.sin(tAng) * tLen);
    ctx.stroke();
  }

  // ---- 9. Bioluminescent spore spots (tiny glowing dots) ----
  const sporeCols = [
    'rgba(80,220,120,0.08)', 'rgba(60,200,160,0.07)', 'rgba(100,180,220,0.06)',
    'rgba(120,100,200,0.05)', 'rgba(200,150,80,0.04)', 'rgba(60,180,180,0.06)'
  ];
  for (let ri = 0; ri < 300; ri++) {
    const rx = R() * S, ry = R() * S;
    const sCol = sporeCols[Math.floor(R() * sporeCols.length)];
    ctx.fillStyle = sCol;
    ctx.beginPath(); ctx.arc(rx, ry, 1 + R() * 2, 0, 6.28); ctx.fill();
    // Tiny glow halo around some spore dots
    if (R() < 0.3) {
      const sg = ctx.createRadialGradient(rx, ry, 0, rx, ry, 4 + R() * 5);
      sg.addColorStop(0, sCol);
      sg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sg;
      ctx.beginPath(); ctx.arc(rx, ry, 4 + R() * 5, 0, 6.28); ctx.fill();
    }
  }

  // ---- 10. Dew/moisture highlights ----
  for (let dsi = 0; dsi < 150; dsi++) {
    const dx = R() * S, dy = R() * S;
    ctx.fillStyle = `rgba(120,180,130,${0.04 + R() * 0.04})`;
    ctx.beginPath(); ctx.arc(dx, dy, 0.5 + R() * 1.2, 0, 6.28); ctx.fill();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(5, 5);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createGround() {
  const groundTex = makeGroundTexture();
  // Subdivided plane for terrain displacement
  const size = WORLD_R * 3; // same coverage as before (1.5 * radius on each side)
  const segs = 200; // vertex density for smooth hills
  const geo = new THREE.PlaneGeometry(size, size, segs, segs);
  const posAttr = geo.attributes.position;
  const uvAttr = geo.attributes.uv;

  // Displace vertices using heightmap + clip to circular world
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const y = posAttr.getY(i); // PlaneGeometry XY, we'll rotate to XZ
    const dist = Math.sqrt(x * x + y * y);

    // Apply terrain height (stored in Z before rotation)
    if (dist < WORLD_R * 1.4) {
      posAttr.setZ(i, getGroundY(x, y));
    } else {
      posAttr.setZ(i, 0);
    }
  }
  geo.computeVertexNormals();

  const ground = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      map: groundTex, color: 0xeeffee, roughness: 0.75, metalness: 0.0,
      emissive: 0x1a3820, emissiveIntensity: 0.25
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  return ground;
}
