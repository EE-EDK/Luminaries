import { WORLD_R } from '../constants.js';

// ================================================================
// Procedural terrain heightmap — gentle rolling hills
// Uses layered Simplex noise for organic flow
// ================================================================

// 2D Simplex noise (compact implementation)
const Grad3 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [1, 0], [-1, 0],
  [0, 1], [0, -1], [0, 1], [0, -1]
];
const P = new Uint8Array(512);
const _perm = new Uint8Array(256);
for (let i = 0; i < 256; i++) _perm[i] = i;
// Simple shuffle for permutation table
let _seed = 123;
function _rng() { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647; }
for (let i = 255; i > 0; i--) {
  const j = Math.floor(_rng() * (i + 1));
  [_perm[i], _perm[j]] = [_perm[j], _perm[i]];
}
for (let i = 0; i < 512; i++) P[i] = _perm[i & 255];

const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;

function simplexNoise(xin, yin) {
  let n0, n1, n2;
  const s = (xin + yin) * F2;
  const i = Math.floor(xin + s);
  const j = Math.floor(yin + s);
  const t = (i + j) * G2;
  const X0 = i - t;
  const Y0 = j - t;
  const x0 = xin - X0;
  const y0 = yin - Y0;

  let i1, j1;
  if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }

  const x1 = x0 - i1 + G2;
  const y1 = y0 - j1 + G2;
  const x2 = x0 - 1.0 + 2.0 * G2;
  const y2 = y0 - 1.0 + 2.0 * G2;

  const ii = i & 255;
  const jj = j & 255;

  let t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 < 0) n0 = 0.0;
  else {
    t0 *= t0;
    const g = Grad3[P[ii + P[jj]] % 12];
    n0 = t0 * t0 * (g[0] * x0 + g[1] * y0);
  }

  let t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 < 0) n1 = 0.0;
  else {
    t1 *= t1;
    const g = Grad3[P[ii + i1 + P[jj + j1]] % 12];
    n1 = t1 * t1 * (g[0] * x1 + g[1] * y1);
  }

  let t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 < 0) n2 = 0.0;
  else {
    t2 *= t2;
    const g = Grad3[P[ii + 1 + P[jj + 1]] % 12];
    n2 = t2 * t2 * (g[0] * x2 + g[1] * y2);
  }

  return 70.0 * (n0 + n1 + n2);
}

// Simple 2D hash-based noise (fallback for landform features if needed)
function hash(x, y) {
  let h = (x * 374761393 + y * 668265263 + 1274126177) | 0;
  h = ((h ^ (h >> 13)) * 1274126177) | 0;
  return (h & 0x7fffffff) / 0x7fffffff;
}

// Layered noise (fractal brownian motion)
function fbm(x, y, octaves) {
  let val = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < octaves; i++) {
    val += simplexNoise(x * freq, y * freq) * amp;
    amp *= 0.5;
    freq *= 2;
  }
  return val;
}

// ================================================================
// Landform features — ridges, knolls, mounds, terraces, gullies
// Adds sharper, more dramatic terrain on top of the base noise
// ================================================================

// Ridge noise — abs(noise) creates sharp V-shaped creases
function ridgeNoise(x, y, octaves) {
  let val = 0, amp = 1.0, freq = 1, weight = 1.0;
  for (let i = 0; i < octaves; i++) {
    let n = Math.abs(simplexNoise(x * freq, y * freq)); // sharp crease at 0
    n = 1.0 - n; // invert so ridges peak upward
    n = n * n;    // sharpen the peaks
    n *= weight;
    weight = Math.min(1.0, n * 1.5); // detail follows the ridge spine
    val += n * amp;
    amp *= 0.45;
    freq *= 2.1;
  }
  return val;
}

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

// Cell noise — returns distance to nearest cell center for isolated dome features
function cellDist(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  let minD = 999;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const cx = ix + dx + hash(ix + dx, iy + dy) * 0.8 + 0.1;
      const cy = iy + dy + hash(iy + dy + 7, ix + dx + 3) * 0.8 + 0.1;
      const d = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
      if (d < minD) minD = d;
    }
  }
  return minD;
}

function landformHeight(x, z) {
  let lf = 0;

  // ---- 1. Ridge lines — sharp crests running across the terrain ----
  // Two ridge layers at different scales and orientations for variety
  const ridgeScale1 = 0.028;
  // Rotate coordinates ~35° for first ridge set
  const rx1 = x * 0.82 + z * 0.57;
  const rz1 = -x * 0.57 + z * 0.82;
  const ridge1 = ridgeNoise(rx1 * ridgeScale1 + 400, rz1 * ridgeScale1 + 500, 4);
  lf += ridge1 * 3.5; // up to ~3.5m tall ridges

  // Second ridge set at different angle (~70°) and coarser scale
  const ridgeScale2 = 0.018;
  const rx2 = x * 0.34 + z * 0.94;
  const rz2 = -x * 0.94 + z * 0.34;
  const ridge2 = ridgeNoise(rx2 * ridgeScale2 - 200, rz2 * ridgeScale2 + 150, 3);
  lf += ridge2 * 2.0; // broader, gentler ridges

  // ---- 2. Knolls — isolated rounded hills via cell noise ----
  // Sparse dome-shaped hills scattered across the world
  const knollScale = 0.045;
  const kd = cellDist(x * knollScale + 70, z * knollScale + 90);
  // Smooth dome falloff: 1 at center → 0 at edge of cell
  const knollDome = Math.max(0, 1.0 - kd * 1.6);
  const knollH = knollDome * knollDome * (3 - 2 * knollDome); // smoothstep shape
  // Vary height per cell using noise
  const knollAmp = 2.0 + fbm(x * 0.01 + 600, z * 0.01 + 700, 2) * 4.0; // 2-6m tall
  lf += knollH * knollAmp;

  // ---- 3. Mounds / hummocks — medium-frequency rounded bumps ----
  const moundN = fbm(x * 0.08 + 800, z * 0.08 + 900, 3);
  // Square to make them punchier — peaks sharper, flats flatter
  const moundH = moundN * moundN * 4.0; // up to ~1m
  lf += moundH;

  // ---- 4. Terraced shelves — subtle stepped ledges ----
  // Quantize a broad noise field into steps
  const terraceN = fbm(x * 0.025 - 300, z * 0.025 - 400, 3);
  const steps = 5; // number of terrace levels
  const terraced = Math.floor(terraceN * steps) / steps;
  // Blend between smooth and stepped (70% stepped for visible ledges)
  const terraceH = (terraceN * 0.3 + terraced * 0.7) * 3.0; // up to ~3m
  lf += terraceH;

  // ---- 5. Gullies — inverted ridges creating low channels ----
  const gullyScale = 0.04;
  const gx = x * 0.5 + z * 0.87;
  const gz = -x * 0.87 + z * 0.5;
  const gullyN = Math.abs(simplexNoise(gx * gullyScale + 150, gz * gullyScale + 250));
  // Only carve where gully is narrow (sharp channel)
  const gully = gullyN * gullyN; // squared = sharper channel walls
  lf -= (1.0 - gully) * 1.5; // carve down up to 1.5m

  return lf;
}

// Flat zone positions — ponds and obelisk get flat ground
// Populated during init
const flatZones = [];

export function registerFlatZone(x, z, radius) {
  flatZones.push({ x, z, r: radius });
}

// ================================================================
// Height cache — bilinear-interpolated lookup replaces ~15 noise
// layers per call. Built once after all flat zones are registered.
// ================================================================
let _cache = null;      // Float32Array
let _cacheW = 0;        // grid width (cells per side)
let _cacheOrigin = 0;   // world-space coordinate of grid cell (0,0)
let _cacheCellInv = 0;  // 1 / cellSize for fast division

export function buildHeightCache() {
  const cellSize = 1; // 1m resolution
  const diameter = WORLD_R * 2;
  const gridW = Math.ceil(diameter / cellSize) + 1; // +1 for fence-post
  const grid = new Float32Array(gridW * gridW);
  const origin = -WORLD_R;

  for (let gz = 0; gz < gridW; gz++) {
    const wz = origin + gz * cellSize;
    for (let gx = 0; gx < gridW; gx++) {
      grid[gz * gridW + gx] = _computeGroundY(origin + gx * cellSize, wz);
    }
  }

  _cache = grid;
  _cacheW = gridW;
  _cacheOrigin = origin;
  _cacheCellInv = 1 / cellSize;
}

// Pre-allocated temps for bilinear interpolation (no hot-path allocs)
let _bx = 0, _bz = 0, _ix = 0, _iz = 0, _fx = 0, _fz = 0;

// Uncached terrain computation — full noise stack
function _computeGroundY(x, z) {
  // Distance from world center (for edge falloff)
  const dist = Math.sqrt(x * x + z * z);

  // Edge falloff: flatten near world edge
  const edgeFade = 1 - smoothstep(Math.max(0, (dist - WORLD_R * 0.7) / (WORLD_R * 0.3)));

  // Center falloff: flatten near obelisk (world center)
  const centerFade = smoothstep(Math.min(1, dist / 10));

  // ---- Regional hilliness map ----
  // Large-scale noise determines whether an area is hilly, flat, or in-between.
  // This creates distinct terrain "zones" across the world.
  const regionScale = 0.012; // very large features (~80m wavelength)
  const regionNoise = fbm(x * regionScale + 200, z * regionScale + 300, 3);
  // Map to 0-1 range with some flat meadow areas (regionNoise < 0.3 → flat)
  const hilliness = smoothstep(Math.max(0, Math.min(1, (regionNoise - 0.15) * 2.0)));
  // hilliness: 0 = flat meadow, 0.5 = gentle rolling, 1.0 = hilly

  // ---- Layered terrain noise ----
  const scale = 0.035;
  const n1 = fbm(x * scale, z * scale, 4);           // broad rolling hills
  const n2 = fbm(x * scale * 2.7 + 50, z * scale * 2.7 + 50, 3); // medium bumps
  const n3 = simplexNoise(x * 0.15, z * 0.15);          // micro detail
  const n4 = fbm(x * scale * 0.6 - 100, z * scale * 0.6 - 100, 3); // very broad swells

  // Height composition:
  // - Broad swells (0-3m) present everywhere for gentle baseline
  // - Rolling hills (0-5m) scaled by hilliness
  // - Medium bumps (0-1.5m) scaled by hilliness
  // - Micro detail always present (0-0.2m)
  const baseHeight = n4 * 1.5;                           // gentle everywhere
  const hillHeight = n1 * 5.0 * hilliness;              // up to 5m in hilly areas
  const bumpHeight = n2 * 1.5 * hilliness;              // medium detail in hilly areas
  const microHeight = n3 * 0.2;                          // always present

  let height = baseHeight + hillHeight + bumpHeight + microHeight;

  // ---- Landform features — ridges, knolls, mounds, terraces, gullies ----
  // Additional layer with sharper, more dramatic terrain features
  // Scaled by hilliness so meadows stay relatively flat
  const lfRaw = landformHeight(x, z);
  // Full landforms in hilly areas, 30% in flat meadows for some baseline texture
  const lfScale = 0.3 + hilliness * 0.7;
  height += lfRaw * lfScale;

  // Apply edge and center falloff
  height *= edgeFade * centerFade;

  // Flatten near registered flat zones (ponds, fairy rings)
  for (let i = 0; i < flatZones.length; i++) {
    const fz = flatZones[i];
    const dx = x - fz.x, dz = z - fz.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    if (d < fz.r * 2.5) {
      const fade = smoothstep(Math.max(0, (d - fz.r * 0.5) / (fz.r * 2.0)));
      height *= fade;
    }
  }

  return height;
}

// Main height function — call from anywhere
// Returns ground Y at world position (x, z)
// Uses bilinear-interpolated cache when available, falls back to full computation during init
export function getGroundY(x, z) {
  if (!_cache) return _computeGroundY(x, z);

  // Map world coords to grid coords
  _bx = (x - _cacheOrigin) * _cacheCellInv;
  _bz = (z - _cacheOrigin) * _cacheCellInv;

  // Clamp to grid bounds
  _ix = _bx | 0; // fast floor for positive values
  _iz = _bz | 0;
  if (_ix < 0) _ix = 0;
  if (_iz < 0) _iz = 0;
  if (_ix >= _cacheW - 1) _ix = _cacheW - 2;
  if (_iz >= _cacheW - 1) _iz = _cacheW - 2;

  _fx = _bx - _ix;
  _fz = _bz - _iz;

  // Bilinear interpolation of 4 nearest grid points
  const row0 = _iz * _cacheW + _ix;
  const row1 = row0 + _cacheW;
  return (_cache[row0] * (1 - _fx) + _cache[row0 + 1] * _fx) * (1 - _fz)
       + (_cache[row1] * (1 - _fx) + _cache[row1 + 1] * _fx) * _fz;
}

// Get terrain normal at a point (for entity alignment)
export function getGroundNormal(x, z) {
  const e = 0.3; // sample offset
  const hC = getGroundY(x, z);
  const hR = getGroundY(x + e, z);
  const hF = getGroundY(x, z + e);
  // Cross product of tangent vectors gives normal
  // tangentX = (e, hR - hC, 0), tangentZ = (0, hF - hC, e)
  const nx = -(hR - hC) / e;
  const nz = -(hF - hC) / e;
  const ny = 1;
  const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
  return { x: nx / len, y: ny / len, z: nz / len };
}
