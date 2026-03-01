import { WORLD_R } from '../constants.js';

// ================================================================
// Procedural terrain heightmap — gentle rolling hills
// Uses layered sine-based noise (no dependencies needed)
// ================================================================

// Simple 2D hash-based noise (value noise approximation)
function hash(x, y) {
  let h = (x * 374761393 + y * 668265263 + 1274126177) | 0;
  h = ((h ^ (h >> 13)) * 1274126177) | 0;
  return (h & 0x7fffffff) / 0x7fffffff;
}

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

function valueNoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = smoothstep(x - ix), fy = smoothstep(y - iy);
  const a = hash(ix, iy), b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}

// Layered noise (fractal brownian motion)
function fbm(x, y, octaves) {
  let val = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < octaves; i++) {
    val += valueNoise(x * freq, y * freq) * amp;
    amp *= 0.5;
    freq *= 2;
  }
  return val;
}

// ================================================================
// Landform features — ridges, knolls, mounds, terraces, gullies
// Adds sharper, more dramatic terrain on top of the base noise
// ================================================================

// Ridge noise — abs(noise - 0.5) creates sharp V-shaped creases
function ridgeNoise(x, y, octaves) {
  let val = 0, amp = 1.0, freq = 1, weight = 1.0;
  for (let i = 0; i < octaves; i++) {
    let n = Math.abs(valueNoise(x * freq, y * freq) - 0.5) * 2; // 0..1 with sharp crease at 0
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
  const gullyN = Math.abs(valueNoise(gx * gullyScale + 150, gz * gullyScale + 250) - 0.5) * 2;
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

// Main height function — call from anywhere
// Returns ground Y at world position (x, z)
export function getGroundY(x, z) {
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
  const n3 = valueNoise(x * 0.15, z * 0.15);          // micro detail
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
