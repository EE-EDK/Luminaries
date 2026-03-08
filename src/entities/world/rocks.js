// ================================================================
// Rock Formations — SDF procedural rocks with instanced rendering
// ================================================================
// Generates rock shapes via Signed Distance Fields + marching cubes,
// renders with multi-LOD InstancedMesh for minimal draw calls.
// Adapted from https://discourse.threejs.org/t/100k-procedural-rocks/89578
// Five rock types with distinct color palettes + vertex color variation.
import {
  BufferAttribute, BufferGeometry, Color, DynamicDrawUsage,
  Float32BufferAttribute, Frustum, IcosahedronGeometry,
  InstancedMesh, Matrix4, MeshStandardMaterial, Object3D,
  SphereGeometry, Sphere, StaticDrawUsage, Uint32BufferAttribute, Vector3
} from 'three';
import { scene } from '../../core/renderer.js';
import {
  C, PEBBLE_N, ROCK_N, BOULDER_N, ROCK_SHAPES,
  ROCK_LOD_DISTS, ROCK_LOD_RES, ROCK_VIEW_DIST2,
  ROCK_SDF_CUTS_MIN, ROCK_SDF_CUTS_MAX, ROCK_GROUND_SINK
} from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Rock type definitions
// ================================================================
const ROCK_TYPES = [
  { palette: 'rockGranite',   roughness: 0.88, metalness: 0.04 },
  { palette: 'rockSandstone', roughness: 0.92, metalness: 0.02 },
  { palette: 'rockLimestone', roughness: 0.85, metalness: 0.03 },
  { palette: 'rockSlate',     roughness: 0.90, metalness: 0.06 },
  { palette: 'rockBasalt',    roughness: 0.94, metalness: 0.04 },
];

// ================================================================
// Vertex color variation — subtle grain and weathering
// ================================================================
const _vc = new Color();
const _vcBase = new Color();
const _vcHi = new Color();
const _vcDark = new Color();

function applyVertexColors(geo, pal) {
  const pos = geo.attributes.position;
  const count = pos.count;
  const colors = new Float32Array(count * 3);
  _vcBase.set(pal[0]);
  _vcHi.set(pal[1]);
  _vcDark.set(pal[2]);
  for (let i = 0; i < count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
    const heightT = Math.max(0, Math.min(1, (py / len) * 0.5 + 0.5));
    const grain = Math.sin(px * 11.3 + pz * 7.7) * 0.5 + 0.5;
    _vc.copy(_vcBase);
    _vc.lerp(_vcHi, heightT * 0.35 + grain * 0.2);
    _vc.lerp(_vcDark, (1 - heightT) * 0.25);
    colors[i * 3] = _vc.r;
    colors[i * 3 + 1] = _vc.g;
    colors[i * 3 + 2] = _vc.b;
  }
  geo.setAttribute('color', new BufferAttribute(colors, 3));
}

// ================================================================
// SDF Rock Generator — sphere with smooth plane cuts
// ================================================================
function createRockSDF(seed) {
  // Use a local mini-RNG seeded from the provided seed so sr() state is unaffected
  let _ls = seed;
  const lr = () => { _ls = (_ls * 16807) % 2147483647; return (_ls & 0x7fffffff) / 0x7fffffff; };

  const numCuts = ROCK_SDF_CUTS_MIN + Math.floor(lr() * (ROCK_SDF_CUTS_MAX - ROCK_SDF_CUTS_MIN));
  const cuts = [];
  for (let i = 0; i < numCuts; i++) {
    // Random direction on unit sphere
    const theta = lr() * Math.PI * 2;
    const phi = Math.acos(2 * lr() - 1);
    const dx = Math.sin(phi) * Math.cos(theta);
    const dy = Math.sin(phi) * Math.sin(theta);
    const dz = Math.cos(phi);
    cuts.push({
      dx, dy, dz,
      radius: 1.4 + lr() * 1.1,    // 1.4 – 2.5
      ratio: 0.6 + lr() * 0.25,     // 0.6 – 0.85
      k: 0.02 + lr() * 0.06,        // smooth blend factor
    });
  }

  const scaleX = 0.75 + lr() * 0.5;   // 0.75 – 1.25
  const scaleY = 0.6 + lr() * 0.4;    // 0.6 – 1.0
  const scaleZ = 0.75 + lr() * 0.5;

  const sdf = (x, y, z) => {
    const px = x / scaleX, py = y / scaleY, pz = z / scaleZ;
    let d = Math.sqrt(px * px + py * py + pz * pz) - 1.05;
    for (let i = 0; i < cuts.length; i++) {
      const c = cuts[i];
      const spx = px + c.dx * c.radius;
      const spy = py + c.dy * c.radius;
      const spz = pz + c.dz * c.radius;
      const sd = Math.sqrt(spx * spx + spy * spy + spz * spz) - c.radius * c.ratio;
      const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (-sd - d)) / c.k));
      d = d * (1 - h) + -sd * h + c.k * h * (1 - h);
    }
    if (d > 0.3) d = 0.3;
    return d;
  };

  return { sdf, scaleX, scaleY, scaleZ };
}

// ================================================================
// Marching Cubes — converts SDF to BufferGeometry
// ================================================================
const edgeTable = new Int32Array([
  0x0,0x109,0x203,0x30a,0x406,0x50f,0x605,0x70c,0x80c,0x905,
  0xa0f,0xb06,0xc0a,0xd03,0xe09,0xf00,0x190,0x99,0x393,0x29a,
  0x596,0x49f,0x795,0x69c,0x99c,0x895,0xb9f,0xa96,0xd9a,0xc93,
  0xf99,0xe90,0x230,0x339,0x33,0x13a,0x636,0x73f,0x435,0x53c,
  0xa3c,0xb35,0x83f,0x936,0xe3a,0xf33,0xc39,0xd30,0x3a0,0x2a9,
  0x1a3,0xaa,0x7a6,0x6af,0x5a5,0x4ac,0xbac,0xaa5,0x9af,0x8a6,
  0xfaa,0xea3,0xda9,0xca0,0x460,0x569,0x663,0x76a,0x66,0x16f,
  0x265,0x36c,0xc6c,0xd65,0xe6f,0xf66,0x86a,0x963,0xa69,0xb60,
  0x5f0,0x4f9,0x7f3,0x6fa,0x1f6,0xff,0x3f5,0x2fc,0xdfc,0xcf5,
  0xfff,0xef6,0x9fa,0x8f3,0xbf9,0xaf0,0x650,0x759,0x453,0x55a,
  0x256,0x35f,0x55,0x15c,0xe5c,0xf55,0xc5f,0xd56,0xa5a,0xb53,
  0x859,0x950,0x7c0,0x6c9,0x5c3,0x4ca,0x3c6,0x2cf,0x1c5,0xcc,
  0xfcc,0xec5,0xdcf,0xcc6,0xbca,0xac3,0x9c9,0x8c0,0x8c0,0x9c9,
  0xac3,0xbca,0xcc6,0xdcf,0xec5,0xfcc,0xcc,0x1c5,0x2cf,0x3c6,
  0x4ca,0x5c3,0x6c9,0x7c0,0x950,0x859,0xb53,0xa5a,0xd56,0xc5f,
  0xf55,0xe5c,0x15c,0x55,0x35f,0x256,0x55a,0x453,0x759,0x650,
  0xaf0,0xbf9,0x8f3,0x9fa,0xef6,0xfff,0xcf5,0xdfc,0x2fc,0x3f5,
  0xff,0x1f6,0x6fa,0x7f3,0x4f9,0x5f0,0xb60,0xa69,0x963,0x86a,
  0xf66,0xe6f,0xd65,0xc6c,0x36c,0x265,0x16f,0x66,0x76a,0x663,
  0x569,0x460,0xca0,0xda9,0xea3,0xfaa,0x8a6,0x9af,0xaa5,0xbac,
  0x4ac,0x5a5,0x6af,0x7a6,0xaa,0x1a3,0x2a9,0x3a0,0xd30,0xc39,
  0xf33,0xe3a,0x936,0x83f,0xb35,0xa3c,0x53c,0x435,0x73f,0x636,
  0x13a,0x33,0x339,0x230,0xe90,0xf99,0xc93,0xd9a,0xa96,0xb9f,
  0x895,0x99c,0x69c,0x795,0x49f,0x596,0x29a,0x393,0x99,0x190,
  0xf00,0xe09,0xd03,0xc0a,0xb06,0xa0f,0x905,0x80c,0x70c,0x605,
  0x50f,0x406,0x30a,0x203,0x109,0x0,
]);

/* eslint-disable */
const triTable=[[-1],[0,8,3,-1],[0,1,9,-1],[1,8,3,9,8,1,-1],[1,2,10,-1],[0,8,3,1,2,10,-1],[9,2,10,0,2,9,-1],[2,8,3,2,10,8,10,9,8,-1],[3,11,2,-1],[0,11,2,8,11,0,-1],[1,9,0,2,3,11,-1],[1,11,2,1,9,11,9,8,11,-1],[3,10,1,11,10,3,-1],[0,10,1,0,8,10,8,11,10,-1],[3,9,0,3,11,9,11,10,9,-1],[9,8,10,10,8,11,-1],[4,7,8,-1],[4,3,0,7,3,4,-1],[0,1,9,8,4,7,-1],[4,1,9,4,7,1,7,3,1,-1],[1,2,10,8,4,7,-1],[3,4,7,3,0,4,1,2,10,-1],[9,2,10,9,0,2,8,4,7,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1],[8,4,7,3,11,2,-1],[11,4,7,11,2,4,2,0,4,-1],[9,0,1,8,4,7,2,3,11,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1],[3,10,1,3,11,10,7,8,4,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1],[4,7,11,4,11,9,9,11,10,-1],[9,5,4,-1],[9,5,4,0,8,3,-1],[0,5,4,1,5,0,-1],[8,5,4,8,3,5,3,1,5,-1],[1,2,10,9,5,4,-1],[3,0,8,1,2,10,4,9,5,-1],[5,2,10,5,4,2,4,0,2,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1],[9,5,4,2,3,11,-1],[0,11,2,0,8,11,4,9,5,-1],[0,5,4,0,1,5,2,3,11,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1],[10,3,11,10,1,3,9,5,4,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1],[5,4,8,5,8,10,10,8,11,-1],[9,7,8,5,7,9,-1],[9,3,0,9,5,3,5,7,3,-1],[0,7,8,0,1,7,1,5,7,-1],[1,5,3,3,5,7,-1],[9,7,8,9,5,7,10,1,2,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1],[2,10,5,2,5,3,3,5,7,-1],[7,9,5,7,8,9,3,11,2,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1],[11,2,1,11,1,7,7,1,5,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1],[10,6,5,-1],[0,8,3,5,10,6,-1],[9,0,1,5,10,6,-1],[1,8,3,1,9,8,5,10,6,-1],[1,6,5,2,6,1,-1],[1,6,5,1,2,6,3,0,8,-1],[9,6,5,9,0,6,0,2,6,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1],[2,3,11,10,6,5,-1],[11,0,8,11,2,0,10,6,5,-1],[0,1,9,2,3,11,5,10,6,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1],[6,3,11,6,5,3,5,1,3,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1],[6,5,9,6,9,11,11,9,8,-1],[5,10,6,4,7,8,-1],[4,3,0,4,7,3,6,5,10,-1],[1,9,0,5,10,6,8,4,7,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1],[6,1,2,6,5,1,4,7,8,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1],[10,4,9,6,4,10,-1],[4,10,6,4,9,10,0,8,3,-1],[10,0,1,10,6,0,6,4,0,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1],[1,4,9,1,2,4,2,6,4,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1],[0,2,4,4,2,6,-1],[8,3,2,8,2,4,4,2,6,-1],[10,4,9,10,6,4,11,2,3,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1],[6,4,8,11,6,8,-1],[7,10,6,7,8,10,8,9,10,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1],[10,6,7,10,7,1,1,7,3,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1],[7,3,2,6,7,2,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1],[7,11,6,-1],[7,6,11,-1],[3,0,8,11,7,6,-1],[0,1,9,11,7,6,-1],[8,1,9,8,3,1,11,7,6,-1],[10,1,2,6,11,7,-1],[1,2,10,3,0,8,6,11,7,-1],[2,9,0,2,10,9,6,11,7,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1],[7,2,3,6,2,7,-1],[7,0,8,7,6,0,6,2,0,-1],[2,7,6,2,3,7,0,1,9,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1],[10,7,6,10,1,7,1,3,7,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1],[7,6,10,7,10,8,8,10,9,-1],[6,8,4,11,8,6,-1],[3,6,11,3,0,6,0,4,6,-1],[8,6,11,8,4,6,9,0,1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1],[6,8,4,6,11,8,2,10,1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1],[0,4,2,4,6,2,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1],[1,9,4,1,4,2,2,4,6,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1],[10,1,0,10,0,6,6,0,4,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1],[4,9,5,7,6,11,-1],[0,8,3,4,9,5,11,7,6,-1],[5,0,1,5,4,0,7,6,11,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1],[9,5,4,10,1,2,7,6,11,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1],[6,9,5,6,11,9,11,8,9,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1],[6,11,3,6,3,5,5,3,1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1],[9,5,6,9,6,0,0,6,2,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1],[0,3,8,5,6,10,-1],[10,5,6,-1],[11,5,10,7,5,11,-1],[11,5,10,11,7,5,8,3,0,-1],[5,11,7,5,10,11,1,9,0,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1],[11,1,2,11,7,1,7,5,1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1],[0,8,7,0,7,1,1,7,5,-1],[9,0,3,9,3,5,5,3,7,-1],[9,8,7,5,9,7,-1],[5,8,4,5,10,8,10,11,8,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1],[5,10,2,5,2,4,4,2,0,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1],[8,4,5,8,5,3,3,5,1,-1],[0,4,5,1,0,5,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1],[9,4,5,-1],[4,11,7,4,9,11,9,10,11,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1],[4,9,1,4,1,7,7,1,3,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1],[4,0,3,7,4,3,-1],[4,8,7,-1],[9,10,8,10,11,8,-1],[3,0,9,3,9,11,11,9,10,-1],[0,1,10,0,10,8,8,10,11,-1],[3,1,10,11,3,10,-1],[1,2,11,1,11,9,9,11,8,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1],[0,2,11,8,0,11,-1],[3,2,11,-1],[2,3,8,2,8,10,10,8,9,-1],[9,10,2,0,9,2,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1],[1,10,2,-1],[1,3,8,9,1,8,-1],[0,9,1,-1],[0,3,8,-1],[-1]];
/* eslint-enable */

// Reusable vertex weld map
const _vmap = new Map();

function marchingCubes(res, sdf, bounds) {
  const [x0, x1, y0, y1, z0, z1] = bounds;
  const dx = (x1 - x0) / (res - 1);
  const dy = (y1 - y0) / (res - 1);
  const dz = (z1 - z0) / (res - 1);

  // Sample SDF field
  const field = new Float32Array(res * res * res);
  for (let k = 0, idx = 0; k < res; k++)
    for (let j = 0; j < res; j++)
      for (let i = 0; i < res; i++, idx++)
        field[idx] = sdf(x0 + i * dx, y0 + j * dy, z0 + k * dz);

  // Pre-allocate output buffers
  const maxVerts = res * res * res * 5;
  const positions = new Float32Array(maxVerts * 3);
  const indices = new Uint32Array(maxVerts * 3);
  let vertexCount = 0;
  let indexCount = 0;

  _vmap.clear();

  const getVert = (vx, vy, vz) => {
    const ix = (vx * 100) | 0;
    const iy = (vy * 100) | 0;
    const iz = (vz * 100) | 0;
    const key = ((ix + 512) << 20) | ((iy + 512) << 10) | (iz + 512);
    if (_vmap.has(key)) return _vmap.get(key);
    const vi = vertexCount;
    positions[vi * 3] = vx;
    positions[vi * 3 + 1] = vy;
    positions[vi * 3 + 2] = vz;
    vertexCount++;
    _vmap.set(key, vi);
    return vi;
  };

  // Reusable scratch arrays
  const cx = new Float32Array(8), cy = new Float32Array(8), cz = new Float32Array(8);
  const vals = new Float32Array(8);
  const vx = new Float32Array(12), vy = new Float32Array(12), vz = new Float32Array(12);

  for (let k = 0; k < res - 1; k++) {
    for (let j = 0; j < res - 1; j++) {
      for (let i = 0; i < res - 1; i++) {
        const x = x0 + i * dx, y = y0 + j * dy, z = z0 + k * dz;
        cx[0] = x; cy[0] = y; cz[0] = z;
        cx[1] = x + dx; cy[1] = y; cz[1] = z;
        cx[2] = x + dx; cy[2] = y + dy; cz[2] = z;
        cx[3] = x; cy[3] = y + dy; cz[3] = z;
        cx[4] = x; cy[4] = y; cz[4] = z + dz;
        cx[5] = x + dx; cy[5] = y; cz[5] = z + dz;
        cx[6] = x + dx; cy[6] = y + dy; cz[6] = z + dz;
        cx[7] = x; cy[7] = y + dy; cz[7] = z + dz;

        const base = k * res * res + j * res + i;
        vals[0] = field[base];
        vals[1] = field[base + 1];
        vals[2] = field[base + 1 + res];
        vals[3] = field[base + res];
        vals[4] = field[base + res * res];
        vals[5] = field[base + 1 + res * res];
        vals[6] = field[base + 1 + res + res * res];
        vals[7] = field[base + res + res * res];

        let ci = 0;
        for (let n = 0; n < 8; n++) if (vals[n] < 0) ci |= 1 << n;
        const e = edgeTable[ci];
        if (!e) continue;

        // Edge interpolation pairs: [v1, v2] for edges 0-11
        const ep = [
          [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]
        ];
        for (let ei = 0; ei < 12; ei++) {
          if (!(e & (1 << ei))) continue;
          const a = ep[ei][0], b = ep[ei][1];
          const va = vals[a], vb = vals[b];
          const t = Math.abs(va - vb) < 1e-10 ? 0 : -va / (vb - va);
          vx[ei] = cx[a] + t * (cx[b] - cx[a]);
          vy[ei] = cy[a] + t * (cy[b] - cy[a]);
          vz[ei] = cz[a] + t * (cz[b] - cz[a]);
        }

        const tri = triTable[ci];
        for (let t = 0; tri[t] !== -1; t += 3) {
          const ia = getVert(vx[tri[t]], vy[tri[t]], vz[tri[t]]);
          const ib = getVert(vx[tri[t + 1]], vy[tri[t + 1]], vz[tri[t + 1]]);
          const ic = getVert(vx[tri[t + 2]], vy[tri[t + 2]], vz[tri[t + 2]]);
          if (ia !== ib && ib !== ic && ic !== ia) {
            indices[indexCount++] = ia;
            indices[indexCount++] = ic;
            indices[indexCount++] = ib;
          }
        }
      }
    }
  }

  const geom = new BufferGeometry();
  geom.setAttribute('position', new Float32BufferAttribute(positions.subarray(0, vertexCount * 3), 3));
  geom.setIndex(new Uint32BufferAttribute(indices.subarray(0, indexCount), 1));
  geom.computeVertexNormals();
  return geom;
}

// ================================================================
// Impostor geometry for distant LOD
// ================================================================
function createImpostor(avgRadius, squash) {
  const geom = new IcosahedronGeometry(1, 0);
  geom.scale(avgRadius * 1.2, avgRadius * squash * 1.2, avgRadius * 1.2);
  return geom;
}

// ================================================================
// Measure rock geometry bounding info
// ================================================================
function measureGeometry(geom) {
  const pos = geom.attributes.position.array;
  const count = pos.length / 3;
  let cx = 0, cy = 0, cz = 0;
  let minY = Infinity, maxY = -Infinity;
  for (let v = 0; v < count; v++) {
    cx += pos[v * 3]; cy += pos[v * 3 + 1]; cz += pos[v * 3 + 2];
    if (pos[v * 3 + 1] < minY) minY = pos[v * 3 + 1];
    if (pos[v * 3 + 1] > maxY) maxY = pos[v * 3 + 1];
  }
  cx /= count; cy /= count; cz /= count;
  let totalDist = 0;
  for (let v = 0; v < count; v++) {
    const ddx = pos[v * 3] - cx, ddy = pos[v * 3 + 1] - cy, ddz = pos[v * 3 + 2] - cz;
    totalDist += Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz);
  }
  return {
    avgRadius: totalDist / count,
    squash: (maxY - minY) / 2 / (totalDist / count),
    bottomY: minY,
    height: maxY - minY,
  };
}

// ================================================================
// Instanced procedural rock system
// ================================================================
const MAX_INSTANCES = 500; // ROCK_N + BOULDER_N headroom
const FLOATS_PER = 8;     // x, z, groundY, scale, rotY, shapeIdx, squash, colR

// Module state
let _meshes = [];          // InstancedMesh array [shape × lod]
let _instanceData = null;  // Float32Array of all instance params
let _allMatrices = null;   // Float32Array of all pre-computed 4x4 matrices
let _instanceCount = 0;
let _shapeInfos = [];      // per-shape { avgRadius, squash, bottomY, height }
let _numLods = 0;

// Pre-allocated culling objects (zero allocation in update loop)
const _frustum = new Frustum();
const _projMatrix = new Matrix4();
const _cullSphere = new Sphere(new Vector3(), 0);
const _tempObj = new Object3D();

// Shared material for all instanced rocks
const _rockMat = new MeshStandardMaterial({
  vertexColors: true,
  roughness: 0.90,
  metalness: 0.03,
  fog: false,
});

export function initProceduralRocks() {
  _numLods = ROCK_LOD_RES.length;
  _instanceData = new Float32Array(MAX_INSTANCES * FLOATS_PER);
  _instanceCount = 0;

  // Generate shape templates
  const shapeLODs = [];
  _shapeInfos = [];

  for (let s = 0; s < ROCK_SHAPES; s++) {
    const seed = s * 7919 + 1337;
    const { sdf } = createRockSDF(seed);
    const bounds = [-1.5, 1.5, -1.5, 1.5, -1.5, 1.5];

    // Generate highest-res geometry first to measure bounding info
    const highGeom = marchingCubes(ROCK_LOD_RES[0], sdf, bounds);
    const info = measureGeometry(highGeom);
    _shapeInfos[s] = info;

    // Pick a rock type palette for this shape
    const type = ROCK_TYPES[s % ROCK_TYPES.length];
    const pal = C[type.palette];

    // Generate all LOD geometries
    const lods = [];
    for (let l = 0; l < _numLods; l++) {
      const res = ROCK_LOD_RES[l];
      let geom;
      if (res <= 0) {
        // Impostor
        geom = createImpostor(info.avgRadius, info.squash);
      } else if (l === 0) {
        geom = highGeom; // reuse already-computed highest res
      } else {
        geom = marchingCubes(res, sdf, bounds);
      }
      applyVertexColors(geom, pal);
      lods.push(geom);
    }
    shapeLODs.push(lods);
  }

  // Create InstancedMesh per (shape × LOD)
  _meshes = [];
  for (let s = 0; s < ROCK_SHAPES; s++) {
    for (let l = 0; l < _numLods; l++) {
      const geom = shapeLODs[s][l];
      const mesh = new InstancedMesh(geom, _rockMat, MAX_INSTANCES);
      mesh.count = 0;
      mesh.frustumCulled = false;
      mesh.castShadow = l <= 1;
      mesh.receiveShadow = l <= 1;
      mesh.instanceMatrix.setUsage(DynamicDrawUsage);
      scene.add(mesh);
      _meshes.push(mesh);
    }
  }
}

export function placeProceduralRock(x, z, groundY, isBoulder) {
  if (_instanceCount >= MAX_INSTANCES) return { colR: 0.5 };
  const idx = _instanceCount * FLOATS_PER;

  // Scale: boulders are bigger
  const baseScale = isBoulder
    ? 1.2 + sr() * 1.8   // 1.2 – 3.0
    : 0.3 + sr() * 0.5;  // 0.3 – 0.8

  const squash = 0.4 + sr() * 0.5; // vertical squash 0.4 – 0.9

  _instanceData[idx + 0] = x;
  _instanceData[idx + 1] = z;
  _instanceData[idx + 2] = groundY;
  _instanceData[idx + 3] = baseScale;
  _instanceData[idx + 4] = sr() * Math.PI * 2; // rotY
  _instanceData[idx + 5] = Math.floor(sr() * ROCK_SHAPES); // shape index
  _instanceData[idx + 6] = squash;
  _instanceData[idx + 7] = baseScale * (isBoulder ? 0.65 : 0.55); // collision radius

  _instanceCount++;
  return { colR: baseScale * (isBoulder ? 0.65 : 0.55) };
}

export function finalizeProceduralRocks() {
  // Pre-compute all instance matrices
  _allMatrices = new Float32Array(_instanceCount * 16);

  for (let i = 0; i < _instanceCount; i++) {
    const idx = i * FLOATS_PER;
    const x = _instanceData[idx + 0];
    const z = _instanceData[idx + 1];
    const groundY = _instanceData[idx + 2];
    const scale = _instanceData[idx + 3];
    const rotY = _instanceData[idx + 4];
    const shape = _instanceData[idx + 5];
    const squash = _instanceData[idx + 6];

    const info = _shapeInfos[shape];
    const yOffset = -info.bottomY * scale * squash - info.height * scale * squash * ROCK_GROUND_SINK;

    _tempObj.position.set(x, groundY + yOffset, z);
    _tempObj.rotation.set(0, rotY, 0);
    _tempObj.scale.set(scale, scale * squash, scale);
    _tempObj.updateMatrix();
    _tempObj.matrix.toArray(_allMatrices, i * 16);
  }
}

// Working counts for LOD assignment (pre-allocated)
let _workingCounts = null;

export function updateProceduralRocks(px, py, pz, cam) {
  if (!_meshes.length) return;

  // Update frustum from camera
  _projMatrix.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
  _frustum.setFromProjectionMatrix(_projMatrix);

  // Initialize working counts array once
  if (!_workingCounts) {
    _workingCounts = new Uint32Array(ROCK_SHAPES * _numLods);
  }
  _workingCounts.fill(0);

  for (let i = 0; i < _instanceCount; i++) {
    const idx = i * FLOATS_PER;
    const x = _instanceData[idx + 0];
    const z = _instanceData[idx + 1];
    const scale = _instanceData[idx + 3];

    // Squared distance cull
    const ddx = x - px, ddz = z - pz;
    const dist2 = ddx * ddx + ddz * ddz;
    if (dist2 > ROCK_VIEW_DIST2) continue;

    // Frustum cull
    _cullSphere.center.x = x;
    _cullSphere.center.y = _instanceData[idx + 2] + scale * 0.4;
    _cullSphere.center.z = z;
    _cullSphere.radius = scale * 1.7;
    if (!_frustum.intersectsSphere(_cullSphere)) continue;

    // LOD selection
    let lod = _numLods - 1;
    for (let l = 0; l < _numLods - 1; l++) {
      if (dist2 < ROCK_LOD_DISTS[l + 1]) { lod = l; break; }
    }

    const shape = _instanceData[idx + 5] | 0;
    const bucket = shape * _numLods + lod;
    const j = _workingCounts[bucket];
    if (j >= MAX_INSTANCES) continue;

    const mesh = _meshes[bucket];
    const matIdx = i * 16;
    mesh.instanceMatrix.array.set(_allMatrices.subarray(matIdx, matIdx + 16), j * 16);
    _workingCounts[bucket]++;
  }

  // Commit counts and flag updates
  for (let bucket = 0; bucket < _meshes.length; bucket++) {
    const mesh = _meshes[bucket];
    const count = _workingCounts[bucket];
    if (count !== mesh.count) {
      mesh.count = count;
      if (count > 0) {
        mesh.instanceMatrix.clearUpdateRanges();
        mesh.instanceMatrix.addUpdateRange(0, count * 16);
        mesh.instanceMatrix.needsUpdate = true;
      }
    } else if (count > 0) {
      // Count same but content may have changed (different rocks visible)
      mesh.instanceMatrix.clearUpdateRanges();
      mesh.instanceMatrix.addUpdateRange(0, count * 16);
      mesh.instanceMatrix.needsUpdate = true;
    }
  }
}

// ================================================================
// Pebble InstancedMesh — scattered tiny stones, 1 draw call
// (Kept unchanged from original system)
// ================================================================
let pebbleMesh = null;
const _pebDummy = new Object3D();

function displaceSmooth(geo, amplitude, seed) {
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
    const nx = px / len, ny = py / len, nz = pz / len;
    const n1 = Math.sin(px * 4.3 + seed) * Math.sin(py * 3.7 + pz * 2.1 + seed * 0.7);
    const n2 = Math.sin(pz * 5.1 + seed * 1.3) * Math.sin(px * 2.9 + py * 4.7) * 0.5;
    const n3 = Math.sin((px + py) * 3.1 + seed * 2.1) * Math.sin((pz - px) * 2.7) * 0.3;
    const disp = (n1 + n2 + n3) * amplitude;
    pos.setX(i, px + nx * disp);
    pos.setY(i, py + ny * disp);
    pos.setZ(i, pz + nz * disp);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

export function initPebbles() {
  const geo = new SphereGeometry(1, 6, 5);
  displaceSmooth(geo, 0.08, 42.7);
  const mat = new MeshStandardMaterial({
    color: C.rockBase, roughness: 0.90, metalness: 0.03
  });
  pebbleMesh = new InstancedMesh(geo, mat, PEBBLE_N);
  pebbleMesh.instanceMatrix.setUsage(StaticDrawUsage);
  pebbleMesh.count = 0;
  scene.add(pebbleMesh);
  return pebbleMesh;
}

const _pebColor = new Color();
const PEBBLE_COLORS = [0x8a8a90, 0x9a8a70, 0xa0a098, 0x607080, 0x7a7a82, 0x706860, 0x908880];

export function addPebble(x, z, groundY) {
  if (!pebbleMesh) return;
  const idx = pebbleMesh.count;
  if (idx >= PEBBLE_N) return;

  const sz = 0.04 + sr() * 0.10;
  _pebDummy.position.set(x, groundY + sz * 0.08, z);
  _pebDummy.rotation.set(sr() * 0.5, sr() * 6.28, sr() * 0.5);
  _pebDummy.scale.set(
    sz * (0.9 + sr() * 0.5),
    sz * (0.2 + sr() * 0.3),
    sz * (0.9 + sr() * 0.5)
  );
  _pebDummy.updateMatrix();
  pebbleMesh.setMatrixAt(idx, _pebDummy.matrix);

  _pebColor.set(PEBBLE_COLORS[Math.floor(sr() * PEBBLE_COLORS.length)]);
  pebbleMesh.setColorAt(idx, _pebColor);

  pebbleMesh.count = idx + 1;
}

export function finalizePebbles() {
  if (!pebbleMesh) return;
  pebbleMesh.instanceMatrix.needsUpdate = true;
  if (pebbleMesh.instanceColor) pebbleMesh.instanceColor.needsUpdate = true;
}
