import * as THREE from 'three';
import { WORLD_R, C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { getGroundY } from './terrain.js';

// ================================================================
// Procedural ground texture — bioluminescent forest floor
// Rich variety: mossy patches, glowing mycelium, leaf litter, ring patterns
// ================================================================

// Shared uniforms for player proximity glow + transform palette (updated per frame)
const groundUniforms = {
  uTime: { value: 0 },
  uPlayerX: { value: 0 },
  uPlayerZ: { value: 0 },
  uTransform: { value: 0 }  // 0 = normal forest, 1 = pink/purple finale
};

export function updateGroundUniforms(t, playerX, playerZ) {
  groundUniforms.uTime.value = t;
  groundUniforms.uPlayerX.value = playerX;
  groundUniforms.uPlayerZ.value = playerZ;
}

// Called by quest manager during TRANSFORM phase
export function setGroundTransform(val) {
  groundUniforms.uTransform.value = val;
}

function makeGroundTexture() {
  const S = 2048;
  const cv = document.createElement('canvas'); cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  const R = Math.random;

  // ---- 1. Base: dark earthy green ----
  ctx.fillStyle = '#223822'; ctx.fillRect(0, 0, S, S);

  // Large biome patches — mixed earth tones and muted greens
  const biomes = [
    { col: 'rgba(50,45,25,0.38)', n: 16, r: 130 },  // warm earth (dominant)
    { col: 'rgba(35,55,30,0.35)', n: 14, r: 120 },  // muted forest green
    { col: 'rgba(55,40,22,0.35)', n: 14, r: 115 },  // brown earth
    { col: 'rgba(45,55,28,0.32)', n: 12, r: 110 },  // olive
    { col: 'rgba(60,48,25,0.32)', n: 12, r: 105 },  // warm umber
    { col: 'rgba(30,50,32,0.30)', n: 10, r: 100 },  // deep green
    { col: 'rgba(65,50,28,0.28)', n: 10, r: 100 },  // golden earth
    { col: 'rgba(40,60,35,0.26)', n: 10, r: 95 },   // mossy
    { col: 'rgba(70,45,22,0.24)', n: 8, r: 90 },    // russet
    { col: 'rgba(45,35,18,0.22)', n: 8, r: 85 },    // dark loam
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

  // ---- 2. Organic cell noise (multi-scale, earthy with green) ----
  const cellPasses = [
    { n: 80, r: 25, colors: ['rgba(45,40,22,0.24)', 'rgba(38,55,30,0.20)', 'rgba(50,38,18,0.22)', 'rgba(35,48,25,0.18)', 'rgba(55,42,20,0.20)', 'rgba(30,52,32,0.16)'] },
    { n: 200, r: 10, colors: ['rgba(45,40,20,0.14)', 'rgba(35,50,28,0.12)', 'rgba(50,38,18,0.12)', 'rgba(30,48,28,0.10)', 'rgba(48,42,18,0.12)', 'rgba(28,45,30,0.08)'] },
    { n: 500, r: 4, colors: ['rgba(42,38,18,0.10)', 'rgba(35,48,25,0.08)', 'rgba(48,36,16,0.08)', 'rgba(30,45,28,0.06)', 'rgba(45,40,16,0.08)', 'rgba(25,42,28,0.05)'] },
  ];
  for (const pass of cellPasses) {
    for (let i = 0; i < pass.n; i++) {
      ctx.fillStyle = pass.colors[Math.floor(R() * pass.colors.length)];
      const cx = R() * S, cy = R() * S;
      ctx.beginPath(); ctx.arc(cx, cy, pass.r + R() * pass.r * 0.6, 0, 6.28); ctx.fill();
    }
  }

  // ---- 3. Bioluminescent mycelium network (glowing veins) ----
  const glowCols = ['rgba(50,180,90,0.10)', 'rgba(40,160,100,0.08)', 'rgba(65,145,170,0.07)', 'rgba(80,200,130,0.09)', 'rgba(55,155,135,0.08)'];
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

  // ---- 6. Leaf litter and debris (earthy mix) ----
  const leafCols = [
    'rgba(55,40,18,0.28)', 'rgba(50,50,22,0.25)', 'rgba(35,55,25,0.22)',
    'rgba(60,45,20,0.25)', 'rgba(45,52,22,0.22)', 'rgba(65,48,22,0.22)',
    'rgba(40,55,28,0.20)', 'rgba(55,42,16,0.20)',
    'rgba(70,50,22,0.22)', 'rgba(48,38,15,0.20)',
    'rgba(30,50,28,0.18)', 'rgba(60,55,25,0.16)'
  ];
  for (let i = 0; i < 3500; i++) {
    ctx.fillStyle = leafCols[Math.floor(R() * leafCols.length)];
    const lx = R() * S, ly = R() * S;
    const lr = 0.8 + R() * 2.5;
    ctx.beginPath(); ctx.arc(lx, ly, lr, 0, 6.28); ctx.fill();
  }

  // ---- 7. Moss and earth cluster blobs ----
  for (let mci = 0; mci < 50; mci++) {
    const mx = R() * S, my = R() * S;
    const mrad = 15 + R() * 35;
    const grad = ctx.createRadialGradient(mx, my, 0, mx, my, mrad);
    const mCol = R();
    if (mCol < 0.25) {
      grad.addColorStop(0, 'rgba(35,60,35,0.18)');   // muted moss
      grad.addColorStop(1, 'rgba(20,35,20,0)');
    } else if (mCol < 0.5) {
      grad.addColorStop(0, 'rgba(55,42,20,0.18)');   // warm earth
      grad.addColorStop(1, 'rgba(30,22,10,0)');
    } else if (mCol < 0.7) {
      grad.addColorStop(0, 'rgba(45,55,28,0.16)');   // olive
      grad.addColorStop(1, 'rgba(25,30,15,0)');
    } else if (mCol < 0.85) {
      grad.addColorStop(0, 'rgba(60,45,22,0.15)');   // brown loam
      grad.addColorStop(1, 'rgba(32,24,12,0)');
    } else {
      grad.addColorStop(0, 'rgba(38,65,40,0.14)');   // green accent
      grad.addColorStop(1, 'rgba(22,38,22,0)');
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

  // ---- 10. Bioluminescent spore spots ----
  const sporeCols = [
    'rgba(60,190,100,0.10)', 'rgba(50,175,130,0.08)', 'rgba(80,160,180,0.07)',
    'rgba(100,90,170,0.06)', 'rgba(160,130,60,0.05)', 'rgba(50,160,150,0.07)'
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

  // ---- 11. Dew/moisture highlights ----
  for (let dsi = 0; dsi < 150; dsi++) {
    const dx = R() * S, dy = R() * S;
    ctx.fillStyle = `rgba(90,150,110,${0.04 + R() * 0.04})`;
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
  // Earthy mix with muted greens — multiplies with canvas texture
  const biomes = [
    [0.65, 0.60, 0.38],  // earthy brown (common)
    [0.50, 0.70, 0.42],  // muted forest green
    [0.72, 0.58, 0.35],  // warm umber
    [0.55, 0.68, 0.40],  // olive
    [0.60, 0.55, 0.32],  // dark earth
    [0.45, 0.65, 0.45],  // mossy green
    [0.68, 0.62, 0.36],  // golden earth
    [0.48, 0.72, 0.48],  // forest accent
    [0.75, 0.55, 0.32],  // russet
    [0.55, 0.60, 0.38],  // dusty olive
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
    const brightness = 0.82 + n3 * 0.25;
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
    emissive: 0x152e18, emissiveIntensity: 0.25
  });

  // Inject procedural patterns + player proximity glow via shader
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = groundUniforms.uTime;
    shader.uniforms.uPlayerX = groundUniforms.uPlayerX;
    shader.uniforms.uPlayerZ = groundUniforms.uPlayerZ;
    shader.uniforms.uTransform = groundUniforms.uTransform;

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
      uniform float uTransform;
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

      float tF = uTransform; // 0 = forest, 1 = purple finale
      vec2 wp = vWorldPos.xz;

      // --- Mycelium vein glow (noise contour lines) ---
      float vn1 = gFbm(wp * 0.25 + 30.0);
      float vn2 = gFbm(wp * 0.15 + 80.0);
      float vein1 = smoothstep(0.47, 0.50, vn1) * smoothstep(0.53, 0.50, vn1);
      float vein2 = smoothstep(0.45, 0.49, vn2) * smoothstep(0.55, 0.49, vn2);
      float veins = max(vein1, vein2 * 0.7);
      float veinPulse = 0.7 + 0.3 * sin(uTime * 0.4 + vn1 * 8.0);
      // Forest: muted green veins | Finale: bright white-cyan veins
      vec3 veinColForest = vec3(0.08, 0.30, 0.16) * 0.4;
      vec3 veinColFinale = vec3(0.70, 0.85, 0.95) * 0.8;
      totalEmissiveRadiance += veins * mix(veinColForest, veinColFinale, tF) * veinPulse;

      // --- Organic ring patterns (growth rings from noise) ---
      float ringN = gNoise(wp * 0.06 + 10.0);
      float ring = sin(ringN * 25.0) * 0.5 + 0.5;
      ring = smoothstep(0.88, 1.0, ring) * mix(0.25, 0.45, tF);
      // Forest: muted green | Finale: pink-magenta
      vec3 ringColForest = vec3(0.06, 0.20, 0.10);
      vec3 ringColFinale = vec3(0.50, 0.15, 0.40);
      totalEmissiveRadiance += ring * mix(ringColForest, ringColFinale, tF);

      // --- Scattered fairy ring glows ---
      vec2 cell = floor(wp * 0.07);
      vec2 cellCenter = (cell + 0.5 + (vec2(gHash(cell), gHash(cell + 100.0)) - 0.5) * 0.6) / 0.07;
      float rd = length(wp - cellCenter);
      float ringR = 3.0 + gHash(cell + 200.0) * 4.0;
      float fRing = smoothstep(0.4, 0.0, abs(rd - ringR)) * step(0.75, gHash(cell + 300.0));
      // Forest: soft green | Finale: bright purple
      vec3 fRingColForest = vec3(0.07, 0.22, 0.12) * 0.5;
      vec3 fRingColFinale = vec3(0.40, 0.12, 0.55) * 0.8;
      totalEmissiveRadiance += fRing * mix(fRingColForest, fRingColFinale, tF);

      // --- Fine noise for per-pixel detail ---
      float fineN = gNoise(wp * 1.5) * 0.05;
      vec3 fineForest = vec3(0.04, 0.10, 0.05);
      vec3 fineFinale = vec3(0.12, 0.04, 0.15);
      totalEmissiveRadiance += fineN * mix(fineForest, fineFinale, tF);

      // --- Player proximity ground glow (8m radius) ---
      if (vPlayerDist2 < 64.0) {
        float pDist = sqrt(vPlayerDist2);
        float pGlow = (1.0 - pDist / 8.0);
        pGlow = pGlow * pGlow * pGlow;
        // Forest: green glow | Finale: pink-white glow
        vec3 pGlowForest = vec3(0.10, 0.32, 0.18) * 0.5;
        vec3 pGlowFinale = vec3(0.50, 0.25, 0.55) * 0.7;
        totalEmissiveRadiance += pGlow * mix(pGlowForest, pGlowFinale, tF);
      }

      // --- Finale: additional bright cyan/white veins ---
      if (tF > 0.01) {
        float fv1 = gFbm(wp * 0.35 + 55.0);
        float fv2 = gFbm(wp * 0.20 + 120.0);
        float fVein1 = smoothstep(0.46, 0.50, fv1) * smoothstep(0.54, 0.50, fv1);
        float fVein2 = smoothstep(0.44, 0.48, fv2) * smoothstep(0.56, 0.48, fv2);
        float fVeins = max(fVein1, fVein2 * 0.6);
        float fvPulse = 0.6 + 0.4 * sin(uTime * 0.6 + fv1 * 10.0);
        // White-cyan veins, only visible when transformed
        totalEmissiveRadiance += fVeins * vec3(0.80, 0.90, 1.00) * fvPulse * tF * 0.6;
        // Additional pink shimmer spots
        float shimmer = gNoise(wp * 0.8 + uTime * 0.05) * gNoise(wp * 0.4 + 20.0);
        shimmer = smoothstep(0.15, 0.25, shimmer) * 0.3;
        totalEmissiveRadiance += shimmer * vec3(0.45, 0.10, 0.50) * tF;
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
