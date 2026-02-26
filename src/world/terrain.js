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
  const centerFade = smoothstep(Math.min(1, dist / 8));

  // Layered terrain noise
  const scale = 0.035; // Controls hill frequency (larger = more frequent)
  const n1 = fbm(x * scale, z * scale, 4); // broad rolling hills
  const n2 = fbm(x * scale * 2.7 + 50, z * scale * 2.7 + 50, 3); // medium bumps
  const n3 = valueNoise(x * 0.15, z * 0.15); // micro detail

  // Combine: broad hills (0-2.5m) + medium bumps (0-0.8m) + micro (0-0.15m)
  let height = n1 * 2.5 + n2 * 0.8 + n3 * 0.15;

  // Apply edge and center falloff
  height *= edgeFade * centerFade;

  // Flatten near registered flat zones (ponds, fairy rings)
  for (let i = 0; i < flatZones.length; i++) {
    const fz = flatZones[i];
    const dx = x - fz.x, dz = z - fz.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    if (d < fz.r * 2) {
      const fade = smoothstep(Math.max(0, (d - fz.r * 0.5) / (fz.r * 1.5)));
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
