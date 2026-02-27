import * as THREE from 'three';
import { SKY_R } from '../constants.js';
import { saveSeed, restoreSeed } from '../utils/rng.js';
import { scene } from '../core/renderer.js';

// ================================================================
// PROCEDURAL CANVAS SKY DOME — realistic fantasy night sky
// Single textured sphere instead of hundreds of mesh objects
// ================================================================

export const skyGroup = new THREE.Group();
let skyDomeMat = null;

// Twinkling star layer data
const TWINKLE_COUNT = 120;
let twinklePoints = null;
let twinkleSizes = null; // Float32Array of base sizes
let twinklePhases = null; // Float32Array of phase offsets
let twinkleSpeeds = null; // Float32Array of twinkle speeds
let twinkleSizeAttr = null; // BufferAttribute reference

// Shooting star state
const shootingStars = [];
const SHOOTING_STAR_MAX = 3;
let shootingStarTimer = 0;

// Helpers
function rgba(hex, a) {
  const r = (hex >> 16) & 255, g = (hex >> 8) & 255, b = hex & 255;
  return `rgba(${r},${g},${b},${a})`;
}

function softGlow(ctx, x, y, rx, ry, color, peak) {
  ctx.save();
  ctx.translate(x, y);
  if (Math.abs(ry / rx - 1) > 0.01) ctx.scale(1, ry / rx);
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
  grad.addColorStop(0, rgba(color, peak));
  grad.addColorStop(0.25, rgba(color, peak * 0.55));
  grad.addColorStop(0.55, rgba(color, peak * 0.15));
  grad.addColorStop(0.85, rgba(color, peak * 0.03));
  grad.addColorStop(1, rgba(color, 0));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, rx, 0, 6.2832);
  ctx.fill();
  ctx.restore();
}

// Paint nebula with horizontal wrapping (avoids seam)
function softGlowWrap(ctx, x, y, rx, ry, color, peak, W) {
  softGlow(ctx, x, y, rx, ry, color, peak);
  if (x - rx < 0) softGlow(ctx, x + W, y, rx, ry, color, peak);
  if (x + rx > W) softGlow(ctx, x - W, y, rx, ry, color, peak);
}

function paintSkyCanvas() {
  const W = 2048, H = 1024;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const R = Math.random;

  // ---- 1. Deep space base gradient ----
  const base = ctx.createLinearGradient(0, 0, 0, H);
  base.addColorStop(0, '#030610');
  base.addColorStop(0.2, '#050a18');
  base.addColorStop(0.4, '#0a1222');
  base.addColorStop(0.55, '#0c1828');
  base.addColorStop(0.75, '#081018');
  base.addColorStop(1, '#040810');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);

  // ---- 2. Large nebula base regions (broad color washes) ----
  const nebulae = [
    { x: 0.12, y: 0.22, rx: 0.18, ry: 0.14, col: 0x1a3366, a: 0.14 },
    { x: 0.42, y: 0.28, rx: 0.22, ry: 0.10, col: 0x2a1855, a: 0.12 },
    { x: 0.72, y: 0.18, rx: 0.16, ry: 0.12, col: 0x1a4466, a: 0.13 },
    { x: 0.88, y: 0.32, rx: 0.20, ry: 0.09, col: 0x331844, a: 0.10 },
    { x: 0.28, y: 0.12, rx: 0.14, ry: 0.18, col: 0x224488, a: 0.10 },
    { x: 0.58, y: 0.38, rx: 0.18, ry: 0.07, col: 0x442244, a: 0.08 },
    { x: 0.05, y: 0.40, rx: 0.15, ry: 0.10, col: 0x183355, a: 0.09 },
    { x: 0.52, y: 0.15, rx: 0.12, ry: 0.16, col: 0x2a3366, a: 0.07 },
  ];

  for (const n of nebulae) {
    softGlowWrap(ctx, n.x * W, n.y * H, n.rx * W, n.ry * H, n.col, n.a, W);
    // Random sub-clouds within each nebula
    for (let i = 0; i < 4; i++) {
      const sx = (n.x + (R() - 0.5) * n.rx) * W;
      const sy = (n.y + (R() - 0.5) * n.ry) * H;
      const srx = n.rx * W * (0.2 + R() * 0.35);
      const sry = n.ry * H * (0.2 + R() * 0.4);
      softGlowWrap(ctx, sx, sy, srx, sry, n.col, n.a * (0.4 + R() * 0.5), W);
    }
  }

  // ---- 3. Medium nebula wisps (more saturated detail clouds) ----
  const wispCols = [0x2244aa, 0x224466, 0x442266, 0x553355, 0x336688, 0x224455, 0x3a2266];
  for (let i = 0; i < 30; i++) {
    const wx = R() * W;
    const wy = R() * H * 0.55;
    const wrx = 40 + R() * 180;
    const wry = 25 + R() * 100;
    softGlowWrap(ctx, wx, wy, wrx, wry, wispCols[Math.floor(R() * wispCols.length)], 0.025 + R() * 0.035, W);
  }

  // ---- 4. Milky way band (luminous diagonal stripe) ----
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  const mwCenterY = 0.26;
  // Broad diffuse band
  for (let i = 0; i < 50; i++) {
    const t = i / 50;
    const mx = t * W;
    const my = (mwCenterY + Math.sin(t * Math.PI) * 0.06 + (R() - 0.5) * 0.02) * H;
    const mrx = W * 0.05 + R() * W * 0.035;
    const mry = H * 0.04 * (0.4 + R() * 0.6);
    softGlow(ctx, mx, my, mrx, mry, 0x445566, 0.025 + R() * 0.015);
  }
  // Brighter core regions
  for (let i = 0; i < 25; i++) {
    const t = 0.2 + R() * 0.6;
    const mx = t * W;
    const my = (mwCenterY + Math.sin(t * Math.PI) * 0.04) * H;
    softGlow(ctx, mx, my, W * 0.03 + R() * W * 0.02, H * 0.02 + R() * H * 0.01, 0x6688aa, 0.015 + R() * 0.012);
  }
  // Warm highlights in core
  for (let i = 0; i < 10; i++) {
    const t = 0.35 + R() * 0.3;
    const mx = t * W;
    const my = (mwCenterY + Math.sin(t * Math.PI) * 0.02) * H;
    softGlow(ctx, mx, my, W * 0.02, H * 0.012, 0x887766, 0.01 + R() * 0.008);
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.restore();

  // ---- 5. Dark dust lanes (cut through the milky way for realism) ----
  for (let i = 0; i < 12; i++) {
    const t = 0.1 + R() * 0.8;
    const dx = t * W;
    const dy = (mwCenterY + Math.sin(t * Math.PI) * 0.04 + (R() - 0.5) * 0.02) * H;
    const drx = 20 + R() * 60;
    const dry = 8 + R() * 20;
    softGlow(ctx, dx, dy, drx, dry, 0x020408, 0.15 + R() * 0.1);
  }

  // ---- 6. Dense star field ----
  const starCols = [
    '255,255,255', '220,230,255', '255,240,220', '200,215,255',
    '255,225,200', '240,240,255', '255,245,235'
  ];
  // Background dim stars (everywhere)
  for (let i = 0; i < 5000; i++) {
    const sx = R() * W;
    const sy = R() * H * 0.65; // upper 65% (visible hemisphere)
    const sz = 0.3 + R() * 0.7;
    const b = 0.1 + R() * 0.5;
    ctx.fillStyle = `rgba(${starCols[Math.floor(R() * starCols.length)]},${b})`;
    ctx.beginPath();
    ctx.arc(sx, sy, sz, 0, 6.28);
    ctx.fill();
  }
  // Milky way dense stars (concentrated in the band)
  for (let i = 0; i < 3000; i++) {
    const t = R();
    const sx = t * W;
    const bandY = (mwCenterY + Math.sin(t * Math.PI) * 0.06) * H;
    const sy = bandY + (R() - 0.5) * H * 0.1;
    if (sy < 0 || sy > H * 0.6) continue;
    const sz = 0.2 + R() * 0.6;
    const b = 0.2 + R() * 0.7;
    ctx.fillStyle = `rgba(${starCols[Math.floor(R() * starCols.length)]},${b})`;
    ctx.beginPath();
    ctx.arc(sx, sy, sz, 0, 6.28);
    ctx.fill();
  }

  // ---- 7. Bright prominent stars with glow halos ----
  for (let i = 0; i < 60; i++) {
    const sx = R() * W;
    const sy = R() * H * 0.58;
    const coreR = 1.2 + R() * 1.8;
    const haloR = 6 + R() * 14;
    const sc = R();
    let col;
    if (sc < 0.45) col = '255,255,255';
    else if (sc < 0.65) col = '210,225,255';
    else if (sc < 0.8) col = '255,230,200';
    else if (sc < 0.92) col = '190,210,255';
    else col = '255,200,180';
    // Halo
    const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, haloR);
    grad.addColorStop(0, `rgba(${col},0.5)`);
    grad.addColorStop(0.1, `rgba(${col},0.18)`);
    grad.addColorStop(0.35, `rgba(${col},0.04)`);
    grad.addColorStop(1, `rgba(${col},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(sx, sy, haloR, 0, 6.28);
    ctx.fill();
    // Spike cross (subtle diffraction)
    ctx.strokeStyle = `rgba(${col},0.12)`;
    ctx.lineWidth = 0.5;
    const spikeLen = haloR * 0.8;
    ctx.beginPath();
    ctx.moveTo(sx - spikeLen, sy); ctx.lineTo(sx + spikeLen, sy);
    ctx.moveTo(sx, sy - spikeLen); ctx.lineTo(sx, sy + spikeLen);
    ctx.stroke();
    // Core
    ctx.fillStyle = `rgba(${col},1)`;
    ctx.beginPath();
    ctx.arc(sx, sy, coreR, 0, 6.28);
    ctx.fill();
  }

  // ---- 8. Star clusters (dense pockets) ----
  for (let ci = 0; ci < 8; ci++) {
    const ccx = R() * W;
    const ccy = H * 0.08 + R() * H * 0.42;
    const cr = 50 + R() * 90;
    // Faint cluster glow
    softGlow(ctx, ccx, ccy, cr, cr * 0.7, 0x334466, 0.03);
    for (let si = 0; si < 100; si++) {
      const sa = R() * 6.28;
      const sd = R() * R() * cr; // concentrate toward center
      const sx = ccx + Math.cos(sa) * sd;
      const sy = ccy + Math.sin(sa) * sd * 0.65;
      if (sx < 0 || sx > W || sy < 0 || sy > H) continue;
      const sz = 0.2 + R() * 0.6;
      ctx.fillStyle = `rgba(255,255,255,${0.25 + R() * 0.6})`;
      ctx.beginPath();
      ctx.arc(sx, sy, sz, 0, 6.28);
      ctx.fill();
    }
  }

  // ---- 9. Distant colored nebula cores (tiny bright spots within nebulae) ----
  for (let i = 0; i < 15; i++) {
    const n = nebulae[Math.floor(R() * nebulae.length)];
    const cx = (n.x + (R() - 0.5) * n.rx * 0.5) * W;
    const cy = (n.y + (R() - 0.5) * n.ry * 0.5) * H;
    const cr = 3 + R() * 8;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 3);
    grad.addColorStop(0, rgba(n.col, 0.2));
    grad.addColorStop(0.3, rgba(n.col, 0.06));
    grad.addColorStop(1, rgba(n.col, 0));
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, cr * 3, 0, 6.28);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createSkyDome() {
  // Save RNG state so sky painting doesn't disrupt seeded world generation
  const savedSeed = saveSeed();

  const tex = paintSkyCanvas();
  // Only render upper hemisphere + a bit below equator (thetaLength < π).
  // The ground covers everything below the horizon; rendering the full sphere
  // exposes the south pole's UV convergence as a visible dark disc.
  const geo = new THREE.SphereGeometry(SKY_R, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.55);
  skyDomeMat = new THREE.MeshBasicMaterial({
    map: tex, side: THREE.BackSide, fog: false,
    transparent: false
  });
  const dome = new THREE.Mesh(geo, skyDomeMat);
  skyGroup.add(dome);

  // --- Twinkling star layer (Points — single draw call) ---
  createTwinkleStars();

  // --- Shooting star pool ---
  createShootingStars();

  scene.add(skyGroup);

  // Restore RNG state
  restoreSeed(savedSeed);
}

function createTwinkleStars() {
  const positions = new Float32Array(TWINKLE_COUNT * 3);
  const colors = new Float32Array(TWINKLE_COUNT * 3);
  twinkleSizes = new Float32Array(TWINKLE_COUNT);
  twinklePhases = new Float32Array(TWINKLE_COUNT);
  twinkleSpeeds = new Float32Array(TWINKLE_COUNT);

  const starColorOptions = [
    [1, 1, 1], [0.85, 0.9, 1], [1, 0.94, 0.86],
    [0.78, 0.84, 1], [1, 0.88, 0.78], [0.9, 0.95, 1]
  ];
  const R = Math.random;
  const r = SKY_R * 0.97;

  for (let i = 0; i < TWINKLE_COUNT; i++) {
    const theta = R() * Math.PI * 2;
    const phi = R() * Math.PI * 0.48; // upper hemisphere
    const x = r * Math.cos(theta) * Math.sin(phi);
    const y = r * Math.cos(phi);
    const z = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const col = starColorOptions[Math.floor(R() * starColorOptions.length)];
    colors[i * 3] = col[0];
    colors[i * 3 + 1] = col[1];
    colors[i * 3 + 2] = col[2];

    twinkleSizes[i] = 2.0 + R() * 4.0; // base point size
    twinklePhases[i] = R() * Math.PI * 2;
    twinkleSpeeds[i] = 0.5 + R() * 2.5; // varied twinkle rates
  }

  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  ptGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  twinkleSizeAttr = new THREE.Float32BufferAttribute(twinkleSizes.slice(), 1);
  twinkleSizeAttr.setUsage(THREE.DynamicDrawUsage);
  ptGeo.setAttribute('size', twinkleSizeAttr);

  const ptMat = new THREE.PointsMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    fog: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  twinklePoints = new THREE.Points(ptGeo, ptMat);
  skyGroup.add(twinklePoints);
}

function createShootingStars() {
  const trailMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0, fog: false,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  for (let i = 0; i < SHOOTING_STAR_MAX; i++) {
    const trail = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0, 12, 4),
      trailMat.clone()
    );
    trail.visible = false;
    skyGroup.add(trail);
    shootingStars.push({
      mesh: trail, mat: trail.material,
      active: false, life: 0, maxLife: 0,
      sx: 0, sy: 0, sz: 0, dx: 0, dy: 0, dz: 0
    });
  }
}

function spawnShootingStar() {
  let s = null;
  for (let i = 0; i < shootingStars.length; i++) {
    if (!shootingStars[i].active) { s = shootingStars[i]; break; }
  }
  if (!s) return;

  const R = Math.random;
  // Start from random upper sky position
  const theta = R() * Math.PI * 2;
  const phi = 0.1 + R() * 0.35;
  const r = SKY_R * 0.85;
  s.sx = r * Math.cos(theta) * Math.sin(phi);
  s.sy = r * Math.cos(phi);
  s.sz = r * Math.sin(theta) * Math.sin(phi);

  // Direction: mostly downward-diagonal
  const dTheta = theta + (R() - 0.5) * 1.0;
  const speed = 80 + R() * 120;
  s.dx = Math.cos(dTheta) * speed;
  s.dy = -speed * (0.5 + R() * 0.5);
  s.dz = Math.sin(dTheta) * speed;

  s.life = 0.5 + R() * 0.8;
  s.maxLife = s.life;
  s.active = true;
  s.mesh.visible = true;
}

export function updateSky(dt, t) {
  skyGroup.rotation.y = t * 0.003;

  // --- Twinkling stars ---
  if (twinkleSizeAttr) {
    const arr = twinkleSizeAttr.array;
    for (let i = 0; i < TWINKLE_COUNT; i++) {
      const base = twinkleSizes[i];
      const twinkle = Math.sin(t * twinkleSpeeds[i] + twinklePhases[i]);
      // Oscillate between 30% and 100% of base size
      arr[i] = base * (0.65 + twinkle * 0.35);
    }
    twinkleSizeAttr.needsUpdate = true;
  }

  // --- Shooting stars ---
  shootingStarTimer -= dt;
  if (shootingStarTimer <= 0) {
    shootingStarTimer = 4 + Math.random() * 12; // every 4-16 seconds
    spawnShootingStar();
  }
  for (let i = 0; i < shootingStars.length; i++) {
    const s = shootingStars[i];
    if (!s.active) continue;
    s.life -= dt;
    if (s.life <= 0) { s.active = false; s.mesh.visible = false; continue; }
    const frac = s.life / s.maxLife;
    // Move along trajectory
    s.sx += s.dx * dt;
    s.sy += s.dy * dt;
    s.sz += s.dz * dt;
    s.mesh.position.set(s.sx, s.sy, s.sz);
    // Orient along direction of travel
    s.mesh.lookAt(s.sx + s.dx, s.sy + s.dy, s.sz + s.dz);
    s.mesh.rotateX(Math.PI / 2);
    // Fade: bright at start, fading toward end
    s.mat.opacity = frac * 0.7;
    s.mesh.scale.setScalar(0.6 + frac * 0.4);
  }
}

// Modulate sky brightness via color tint (called by day/night cycle)
export function setSkyBrightness(brightness) {
  if (skyDomeMat) {
    const v = Math.max(0.15, brightness); // never fully black
    skyDomeMat.color.setRGB(v, v, v);
  }
}
