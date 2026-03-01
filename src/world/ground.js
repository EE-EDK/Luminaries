import * as THREE from 'three';
import { WORLD_R, C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { getGroundY } from './terrain.js';

// ================================================================
// Procedural ground texture — bioluminescent forest floor
// Rich variety: mossy patches, glowing mycelium, leaf litter, ring patterns
// ================================================================

// Shared uniforms for player proximity glow (updated once per frame)
const groundUniforms = {
  uTime: { value: 0 },
  uPlayerX: { value: 0 },
  uPlayerZ: { value: 0 }
};

export function updateGroundUniforms(t, playerX, playerZ) {
  groundUniforms.uTime.value = t;
  groundUniforms.uPlayerX.value = playerX;
  groundUniforms.uPlayerZ.value = playerZ;
}

function makeGroundTexture() {
  const S = 2048;
  const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  const R = Math.random;

  // ---- 1. Base: rich dark green (visible, not black) ----
  ctx.fillStyle = '#2a4a2e'; ctx.fillRect(0, 0, S, S);

  // Large biome patches — green-dominant with earth accents
  const biomes = [
    { col: 'rgba(40,75,40,0.40)', n: 16, r: 130 },  // forest green
    { col: 'rgba(50,85,45,0.35)', n: 14, r: 120 },  // bright moss
    { col: 'rgba(30,60,35,0.38)', n: 14, r: 115 },  // deep green
    { col: 'rgba(55,70,30,0.32)', n: 12, r: 110 },  // olive green
    { col: 'rgba(35,55,45,0.35)', n: 10, r: 100 },  // teal-green
    { col: 'rgba(60,50,28,0.28)', n: 10, r: 100 },  // warm earth accent
    { col: 'rgba(45,80,50,0.30)', n: 10, r: 105 },  // emerald
    { col: 'rgba(70,55,25,0.22)', n: 8, r: 90 },    // golden earth accent
    { col: 'rgba(25,65,50,0.28)', n: 8, r: 95 },    // deep teal
    { col: 'rgba(50,40,22,0.20)', n: 6, r: 85 },    // brown accent (sparse)
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
      for (let wx = -1; wx <= 1; wx++) {
        for (let wy = -1; wy <= 1; wy++) {
          ctx.beginPath(); ctx.arc(x + wx * S, y + wy * S, rad, 0, 6.28); ctx.fill();
        }
      }
    }
  }

  // ---- 2. Organic cell noise (multi-scale, green-shifted) ----
  const cellPasses = [
    { n: 80, r: 25, colors: ['rgba(35,60,30,0.25)', 'rgba(45,70,35,0.22)', 'rgba(28,50,28,0.22)', 'rgba(40,55,25,0.20)', 'rgba(55,45,20,0.18)', 'rgba(30,65,40,0.18)'] },
    { n: 200, r: 10, colors: ['rgba(40,65,35,0.16)', 'rgba(50,55,28,0.14)', 'rgba(30,55,30,0.14)', 'rgba(35,70,40,0.12)', 'rgba(45,50,22,0.12)', 'rgba(28,60,38,0.10)'] },
    { n: 500, r: 4, colors: ['rgba(40,60,30,0.12)', 'rgba(50,50,25,0.10)', 'rgba(30,55,28,0.10)', 'rgba(35,65,35,0.08)', 'rgba(48,45,18,0.08)', 'rgba(25,58,35,0.06)'] },
  ];
  for (const pass of cellPasses) {
    for (let i = 0; i < pass.n; i++) {
      ctx.fillStyle = pass.colors[Math.floor(R() * pass.colors.length)];
      const cx = R() * S, cy = R() * S;
      ctx.beginPath(); ctx.arc(cx, cy, pass.r + R() * pass.r * 0.6, 0, 6.28); ctx.fill();
    }
  }

  // ---- 3. Bioluminescent mycelium network (prominent glowing veins) ----
  const glowCols = ['rgba(60,220,110,0.14)', 'rgba(50,200,130,0.12)', 'rgba(80,180,220,0.10)', 'rgba(100,240,160,0.13)', 'rgba(70,190,170,0.11)'];
  for (let vi = 0; vi < 45; vi++) {
    let vx = R() * S, vy = R() * S;
    const vCol = glowCols[Math.floor(R() * glowCols.length)];
    ctx.strokeStyle = vCol;
    ctx.lineWidth = 1.5 + R() * 2.5;
    ctx.beginPath(); ctx.moveTo(vx, vy);
    let vAng = R() * 6.28;
    const segs = 14 + Math.floor(R() * 20);
    for (let j = 0; j < segs; j++) {
      vAng += Math.sin(j * 0.6) * 0.5 + (R() - 0.5) * 0.4;
      vx += Math.cos(vAng) * (6 + R() * 10);
      vy += Math.sin(vAng) * (6 + R() * 10);
      ctx.lineTo(vx, vy);
    }
    ctx.stroke();
    // Glow nodes at junctions
    if (R() < 0.7) {
      const nr = 6 + R() * 10;
      const ng = ctx.createRadialGradient(vx, vy, 0, vx, vy, nr);
      ng.addColorStop(0, vCol.replace(/[\d.]+\)$/, '0.18)'));
      ng.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = ng;
      ctx.beginPath(); ctx.arc(vx, vy, nr, 0, 6.28); ctx.fill();
    }
    // Branch forks
    if (R() < 0.5 && vi < 30) {
      let bx = vx, by = vy, bAng = vAng + (R() - 0.5) * 1.5;
      ctx.strokeStyle = vCol.replace(/[\d.]+\)$/, (parseFloat(vCol.match(/[\d.]+\)$/)[0]) * 0.6) + ')');
      ctx.lineWidth = 1 + R() * 1.5;
      ctx.beginPath(); ctx.moveTo(bx, by);
      for (let bj = 0; bj < 6; bj++) {
        bAng += (R() - 0.5) * 0.6;
        bx += Math.cos(bAng) * (4 + R() * 8);
        by += Math.sin(bAng) * (4 + R() * 8);
        ctx.lineTo(bx, by);
      }
      ctx.stroke();
    }
  }

  // ---- 4. Ring patterns (fairy ring / growth ring motifs) ----
  for (let ri = 0; ri < 20; ri++) {
    const rx = R() * S, ry = R() * S;
    const rr = 20 + R() * 60;
    const ringGreen = R() < 0.7;
    const ringCol = ringGreen
      ? `rgba(50,${140 + Math.floor(R() * 60)},${60 + Math.floor(R() * 40)},${0.06 + R() * 0.06})`
      : `rgba(${100 + Math.floor(R() * 60)},${80 + Math.floor(R() * 40)},40,${0.05 + R() * 0.04})`;
    ctx.strokeStyle = ringCol;
    ctx.lineWidth = 1.5 + R() * 3;
    ctx.beginPath(); ctx.arc(rx, ry, rr, 0, 6.28); ctx.stroke();
    // Inner ring for some
    if (R() < 0.4) {
      ctx.lineWidth = 0.8 + R() * 1.5;
      ctx.beginPath(); ctx.arc(rx, ry, rr * (0.6 + R() * 0.2), 0, 6.28); ctx.stroke();
    }
    // Tile-wrap rings
    for (let wx = -1; wx <= 1; wx++) {
      for (let wy = -1; wy <= 1; wy++) {
        if (wx === 0 && wy === 0) continue;
        ctx.strokeStyle = ringCol;
        ctx.lineWidth = 1.5 + R() * 3;
        ctx.beginPath(); ctx.arc(rx + wx * S, ry + wy * S, rr, 0, 6.28); ctx.stroke();
      }
    }
  }

  // ---- 5. Root veins (dark, organic) ----
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = `rgba(15,25,12,${0.2 + R() * 0.15})`;
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

  // ---- 6. Leaf litter and debris (green-shifted) ----
  const leafCols = [
    'rgba(40,65,25,0.28)', 'rgba(55,50,20,0.25)', 'rgba(35,70,30,0.25)',
    'rgba(25,55,30,0.22)', 'rgba(50,60,22,0.22)', 'rgba(30,75,40,0.20)',
    'rgba(60,45,18,0.20)', 'rgba(45,55,20,0.18)',
    'rgba(65,55,25,0.22)', 'rgba(70,50,20,0.18)',
    'rgba(35,60,35,0.22)', 'rgba(50,80,40,0.16)'
  ];
  for (let i = 0; i < 3500; i++) {
    ctx.fillStyle = leafCols[Math.floor(R() * leafCols.length)];
    const lx = R() * S, ly = R() * S;
    const lr = 0.8 + R() * 2.5;
    ctx.beginPath(); ctx.arc(lx, ly, lr, 0, 6.28); ctx.fill();
  }

  // ---- 7. Moss cluster blobs (prominent, green-dominant) ----
  for (let mci = 0; mci < 60; mci++) {
    const mx = R() * S, my = R() * S;
    const mrad = 15 + R() * 40;
    const grad = ctx.createRadialGradient(mx, my, 0, mx, my, mrad);
    const mCol = R();
    if (mCol < 0.35) {
      grad.addColorStop(0, 'rgba(40,80,45,0.22)');
      grad.addColorStop(1, 'rgba(22,45,25,0)');
    } else if (mCol < 0.6) {
      grad.addColorStop(0, 'rgba(35,90,50,0.20)');
      grad.addColorStop(1, 'rgba(20,50,30,0)');
    } else if (mCol < 0.8) {
      grad.addColorStop(0, 'rgba(50,70,35,0.18)');
      grad.addColorStop(1, 'rgba(28,40,20,0)');
    } else {
      grad.addColorStop(0, 'rgba(45,85,55,0.16)');
      grad.addColorStop(1, 'rgba(25,48,30,0)');
    }
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(mx, my, mrad, 0, 6.28); ctx.fill();
  }

  // ---- 8. Pebbles and small rocks ----
  for (let pi = 0; pi < 300; pi++) {
    const px = R() * S, py = R() * S;
    const pr = 1.5 + R() * 3;
    const pg = Math.floor(30 + R() * 40);
    ctx.fillStyle = `rgba(${pg + 5},${pg},${pg - 8},0.25)`;
    ctx.beginPath(); ctx.arc(px, py, pr, 0, 6.28); ctx.fill();
  }

  // ---- 9. Twig marks ----
  ctx.lineWidth = 0.7;
  for (let twi = 0; twi < 60; twi++) {
    const tx = R() * S, ty = R() * S;
    const tLen = 4 + R() * 16;
    const tAng = R() * 6.28;
    ctx.strokeStyle = `rgba(18,28,12,${0.15 + R() * 0.1})`;
    ctx.beginPath(); ctx.moveTo(tx, ty);
    ctx.lineTo(tx + Math.cos(tAng) * tLen, ty + Math.sin(tAng) * tLen);
    ctx.stroke();
  }

  // ---- 10. Bioluminescent spore spots (brighter) ----
  const sporeCols = [
    'rgba(80,240,120,0.14)', 'rgba(60,220,160,0.12)', 'rgba(100,200,230,0.10)',
    'rgba(130,110,220,0.08)', 'rgba(200,170,80,0.06)', 'rgba(60,200,190,0.10)'
  ];
  for (let ri = 0; ri < 400; ri++) {
    const rx = R() * S, ry = R() * S;
    const sCol = sporeCols[Math.floor(R() * sporeCols.length)];
    ctx.fillStyle = sCol;
    ctx.beginPath(); ctx.arc(rx, ry, 1 + R() * 2.5, 0, 6.28); ctx.fill();
    if (R() < 0.4) {
      const sr2 = 5 + R() * 6;
      const sg = ctx.createRadialGradient(rx, ry, 0, rx, ry, sr2);
      sg.addColorStop(0, sCol);
      sg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sg;
      ctx.beginPath(); ctx.arc(rx, ry, sr2, 0, 6.28); ctx.fill();
    }
  }

  // ---- 11. Dew/moisture highlights (greener) ----
  for (let dsi = 0; dsi < 200; dsi++) {
    const dx = R() * S, dy = R() * S;
    ctx.fillStyle = `rgba(100,200,140,${0.05 + R() * 0.05})`;
    ctx.beginPath(); ctx.arc(dx, dy, 0.5 + R() * 1.5, 0, 6.28); ctx.fill();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Simple 2D hash for vertex color noise (independent from terrain.js internals)
function ghash(x, y) {
  let h = (x * 127961 + y * 372143 + 918273) | 0;
  h = ((h ^ (h >> 13)) * 517261) | 0;
  return (h & 0x7fffffff) / 0x7fffffff;
}
function gsmooth(t) { return t * t * (3 - 2 * t); }
function gnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = gsmooth(x - ix), fy = gsmooth(y - iy);
  const a = ghash(ix, iy), b = ghash(ix + 1, iy);
  const c = ghash(ix, iy + 1), d = ghash(ix + 1, iy + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}
function gfbm(x, y, oct) {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += gnoise(x * f, y * f) * a; a *= 0.5; f *= 2; }
  return v;
}

export function createGround() {
  const groundTex = makeGroundTexture();
  const size = WORLD_R * 3;
  const segs = 200;
  const geo = new THREE.PlaneGeometry(size, size, segs, segs);
  const posAttr = geo.attributes.position;

  // --- Vertex color biomes ---
  // Green-dominant palette — multiplies with the canvas texture
  const biomes = [
    [0.55, 0.90, 0.55],  // forest green (most common)
    [0.50, 0.85, 0.50],  // deep forest
    [0.60, 0.95, 0.60],  // bright moss
    [0.45, 0.80, 0.55],  // teal-green
    [0.65, 0.85, 0.45],  // olive-green
    [0.70, 0.70, 0.40],  // earthy accent
    [0.40, 0.75, 0.60],  // cool green
    [0.55, 0.95, 0.65],  // emerald
    [0.75, 0.65, 0.38],  // warm earth accent
    [0.50, 0.88, 0.58],  // soft green
  ];
  const vCount = posAttr.count;
  const colorArr = new Float32Array(vCount * 3);

  for (let i = 0; i < vCount; i++) {
    const x = posAttr.getX(i);
    const y = posAttr.getY(i);
    const dist = Math.sqrt(x * x + y * y);

    if (dist < WORLD_R * 1.4) {
      posAttr.setZ(i, getGroundY(x, -y));
    } else {
      posAttr.setZ(i, 0);
    }

    const wx = x, wz = -y;

    const n1 = gfbm(wx * 0.025 + 100, wz * 0.025 + 200, 3);
    const n2 = gfbm(wx * 0.06 + 300, wz * 0.06 + 400, 2);
    const n3 = gnoise(wx * 0.15 + 500, wz * 0.15 + 600);
    const n4 = gfbm(wx * 0.04 - 150, wz * 0.04 - 250, 3);

    const biomeIdx = Math.floor(n1 * biomes.length * 0.999);
    const biome2Idx = Math.floor(n4 * biomes.length * 0.999);
    const b1 = biomes[biomeIdx], b2 = biomes[biome2Idx];

    const blend = gsmooth(n2);
    const brightness = 0.90 + n3 * 0.25;
    const r = (b1[0] * (1 - blend) + b2[0] * blend) * brightness;
    const g = (b1[1] * (1 - blend) + b2[1] * blend) * brightness;
    const b = (b1[2] * (1 - blend) + b2[2] * blend) * brightness;

    const hY = getGroundY(wx, wz);
    const hTint = 1.0 + hY * 0.06;

    colorArr[i * 3] = r * hTint;
    colorArr[i * 3 + 1] = g * hTint;
    colorArr[i * 3 + 2] = b * hTint;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colorArr, 3));
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    map: groundTex, vertexColors: true, roughness: 0.75, metalness: 0.0,
    emissive: 0x1a3820, emissiveIntensity: 0.35
  });

  // Inject procedural patterns + player proximity glow via shader
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = groundUniforms.uTime;
    shader.uniforms.uPlayerX = groundUniforms.uPlayerX;
    shader.uniforms.uPlayerZ = groundUniforms.uPlayerZ;

    // Vertex shader: compute world position + player distance, pass to fragment
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      uniform float uPlayerX;
      uniform float uPlayerZ;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <fog_vertex>',
      `#include <fog_vertex>
      vec4 gWorldPos = modelMatrix * vec4(transformed, 1.0);
      vWorldPos = gWorldPos.xyz;
      float gpdx = gWorldPos.x - uPlayerX;
      float gpdz = gWorldPos.z - uPlayerZ;
      vPlayerDist2 = gpdx * gpdx + gpdz * gpdz;
      `
    );

    // Fragment shader: procedural patterns + proximity glow
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      uniform float uTime;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;

      // GLSL noise for procedural patterns
      float gHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float gNoise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = gHash(i), b = gHash(i + vec2(1.0, 0.0));
        float c = gHash(i + vec2(0.0, 1.0)), d = gHash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float gFbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += gNoise(p) * a;
          p *= 2.0; a *= 0.5;
        }
        return v;
      }
      `
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>

      vec2 wp = vWorldPos.xz;

      // --- Mycelium vein glow (noise contour lines) ---
      float vn1 = gFbm(wp * 0.25 + 30.0);
      float vn2 = gFbm(wp * 0.15 + 80.0);
      float vein1 = smoothstep(0.47, 0.50, vn1) * smoothstep(0.53, 0.50, vn1);
      float vein2 = smoothstep(0.45, 0.49, vn2) * smoothstep(0.55, 0.49, vn2);
      float veins = max(vein1, vein2 * 0.7);
      // Subtle pulse on mycelium
      float veinPulse = 0.7 + 0.3 * sin(uTime * 0.4 + vn1 * 8.0);
      totalEmissiveRadiance += veins * vec3(0.12, 0.45, 0.25) * veinPulse * 0.5;

      // --- Organic ring patterns (growth rings from noise) ---
      float ringN = gNoise(wp * 0.06 + 10.0);
      float ring = sin(ringN * 25.0) * 0.5 + 0.5;
      ring = smoothstep(0.88, 1.0, ring) * 0.35;
      totalEmissiveRadiance += ring * vec3(0.08, 0.30, 0.15);

      // --- Scattered fairy ring glows ---
      vec2 cell = floor(wp * 0.07);
      vec2 cellCenter = (cell + 0.5 + (vec2(gHash(cell), gHash(cell + 100.0)) - 0.5) * 0.6) / 0.07;
      float rd = length(wp - cellCenter);
      float ringR = 3.0 + gHash(cell + 200.0) * 4.0;
      float fRing = smoothstep(0.4, 0.0, abs(rd - ringR)) * step(0.75, gHash(cell + 300.0));
      totalEmissiveRadiance += fRing * vec3(0.10, 0.35, 0.20) * 0.6;

      // --- Fine noise for per-pixel detail ---
      float fineN = gNoise(wp * 1.5) * 0.08;
      totalEmissiveRadiance += fineN * vec3(0.05, 0.15, 0.08);

      // --- Player proximity ground glow (8m radius) ---
      if (vPlayerDist2 < 64.0) {
        float pDist = sqrt(vPlayerDist2);
        float pGlow = (1.0 - pDist / 8.0);
        pGlow = pGlow * pGlow * pGlow;
        totalEmissiveRadiance += pGlow * vec3(0.15, 0.50, 0.30) * 0.6;
      }
      `
    );
  };

  const ground = new THREE.Mesh(geo, mat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  return ground;
}
