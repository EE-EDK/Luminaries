import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Grass Patch — GPU vertex shader sway (zero CPU per-frame cost)
// ================================================================
// Wind sway + player proximity flatten run entirely on the GPU.
// Each patch gets its own material instance with onBeforeCompile
// injecting custom vertex shader code. WebGL caches the compiled
// shader program so only uniform uploads differ between patches.

// Shared uniforms updated once per frame from main.js
const sharedUniforms = {
  uTime: { value: 0 },
  uWindAmp: { value: 1.0 },
  uWindLeanX: { value: 0 },
  uWindLeanZ: { value: 0 },
  uPlayerX: { value: 0 },
  uPlayerZ: { value: 0 }
};

// Call once per frame to update wind/player uniforms for all patches
export function updateGrassGlobals(t, wAmp, wLeanX, wLeanZ, playerX, playerZ) {
  sharedUniforms.uTime.value = t;
  sharedUniforms.uWindAmp.value = wAmp;
  sharedUniforms.uWindLeanX.value = wLeanX;
  sharedUniforms.uWindLeanZ.value = wLeanZ;
  sharedUniforms.uPlayerX.value = playerX;
  sharedUniforms.uPlayerZ.value = playerZ;
}

// palette: [base1, base2, mid, tip1, tip2, tip3, clover, cloverBr, emissive] hex array (optional)
export function makeGrassPatch(cx, cz, radius, density, palette) {
  const geo = new THREE.BufferGeometry();
  const verts = [], colors = [], heights = [];
  const count = density || 20;
  const colBase1 = new THREE.Color(palette ? palette[0] : 0x0a2010);
  const colBase2 = new THREE.Color(palette ? palette[1] : 0x152e18);
  const colMid = new THREE.Color(palette ? palette[2] : 0x2a6035);
  const colTip1 = new THREE.Color(palette ? palette[3] : 0x44ee55);
  const colTip2 = new THREE.Color(palette ? palette[4] : 0x77ffcc);
  const colTip3 = new THREE.Color(palette ? palette[5] : 0xddff66);
  const tmpC = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const ang = sr() * 6.28, dist = sr() * radius;
    const lx = Math.cos(ang) * dist, lz = Math.sin(ang) * dist;
    const h = 0.25 + sr() * 0.65;
    const w = 0.03 + sr() * 0.05;
    const lean = (sr() - 0.5) * 0.2;
    const leanZ = (sr() - 0.5) * 0.2;
    const curveMag = (sr() - 0.5) * 0.12;
    const bc = sr() < 0.5 ? colBase1 : colBase2;
    const tipSel = sr();
    const tc = tipSel < 0.4 ? colTip1 : (tipSel < 0.7 ? colTip2 : colTip3);

    const h1 = h * 0.35, h2 = h * 0.7;
    const lean1 = lean * 0.3, lean2 = lean * 0.7;
    const leanZ1 = leanZ * 0.3, leanZ2 = leanZ * 0.7;
    // Segment 1: base quad (2 tris)
    verts.push(lx - w, 0.01, lz);
    verts.push(lx + w, 0.01, lz);
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    heights.push(0, 0, 0.35);
    colors.push(bc.r, bc.g, bc.b, bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + w, 0.01, lz);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    heights.push(0, 0.35, 0.35);
    colors.push(bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 2: mid quad (2 tris)
    const w2 = w * 0.65;
    verts.push(lx + lean1 - w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    heights.push(0.35, 0.35, 0.7);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + lean1 + w * 0.9, h1, lz + leanZ1);
    verts.push(lx + lean2 + w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    heights.push(0.35, 0.7, 0.7);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 3: tip triangle
    verts.push(lx + lean2 - w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 + w2, h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean + curveMag * 2, h, lz + leanZ + curveMag * 1.5);
    heights.push(0.7, 0.7, 1.0);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    colors.push(tc.r, tc.g, tc.b);
  }
  // Ground cover: clover-like triangles
  const cloverCol = new THREE.Color(palette ? palette[6] : 0x1a5528);
  const cloverBr = new THREE.Color(palette ? palette[7] : 0x33aa55);
  const cloverN = Math.floor(count * 0.3);
  for (let ci = 0; ci < cloverN; ci++) {
    const ca = sr() * 6.28, cd = sr() * radius * 0.9;
    const clx = Math.cos(ca) * cd, clz = Math.sin(ca) * cd;
    const csz = 0.02 + sr() * 0.03;
    verts.push(clx - csz, 0.01, clz);
    verts.push(clx + csz, 0.01, clz);
    verts.push(clx, 0.03 + sr() * 0.02, clz + csz);
    heights.push(0, 0, 0.05);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverBr.r, cloverBr.g, cloverBr.b);
  }
  // Static geometry — no DynamicDrawUsage, no origPos needed
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute('bladeHeight', new THREE.Float32BufferAttribute(heights, 1));
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.7, side: THREE.DoubleSide,
    emissive: palette ? palette[8] : 0x44ff66, emissiveIntensity: 0.15
  });

  // Inject GPU sway into the vertex shader — same math as the old CPU path
  // but runs entirely on the GPU with zero per-frame CPU cost
  const patchX = cx, patchZ = cz;
  mat.onBeforeCompile = (shader) => {
    // Bind shared uniforms (updated once per frame for all patches)
    shader.uniforms.uTime = sharedUniforms.uTime;
    shader.uniforms.uWindAmp = sharedUniforms.uWindAmp;
    shader.uniforms.uWindLeanX = sharedUniforms.uWindLeanX;
    shader.uniforms.uWindLeanZ = sharedUniforms.uWindLeanZ;
    shader.uniforms.uPlayerX = sharedUniforms.uPlayerX;
    shader.uniforms.uPlayerZ = sharedUniforms.uPlayerZ;
    // Per-patch constants (set once at compile time)
    shader.uniforms.uPatchX = { value: patchX };
    shader.uniforms.uPatchZ = { value: patchZ };

    // Declare uniforms + attribute + glow varying in vertex shader
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      attribute float bladeHeight;
      uniform float uTime;
      uniform float uWindAmp;
      uniform float uWindLeanX;
      uniform float uWindLeanZ;
      uniform float uPlayerX;
      uniform float uPlayerZ;
      uniform float uPatchX;
      uniform float uPatchZ;
      varying float vGlow;
      `
    );

    // Apply sway + player flatten in model space
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      if (bladeHeight > 0.01) {
        float hFrac = bladeHeight;
        float hf2 = hFrac * hFrac;
        float worldX = uPatchX + position.x;
        float worldZ = uPatchZ + position.z;

        // Wind sway — same formula as original CPU path
        float swayX = (sin(uTime * 0.7 + worldX * 0.05) * 0.06
                     + sin(uTime * 1.3 + worldZ * 0.08) * 0.03) * uWindAmp * hf2;
        float swayZ = (sin(uTime * 0.9 + worldZ * 0.06) * 0.04
                     + sin(uTime * 1.7 + worldX * 0.04) * 0.02) * uWindAmp * hf2;
        transformed.x += swayX + uWindLeanX * hFrac;
        transformed.z += swayZ + uWindLeanZ * hFrac;

        // Player proximity flatten (1.2m radius)
        float pdx = position.x - (uPlayerX - uPatchX);
        float pdz = position.z - (uPlayerZ - uPatchZ);
        float pd2 = pdx * pdx + pdz * pdz;
        if (pd2 < 1.44) {
          float proximity = 1.0 - sqrt(pd2) / 1.2;
          float flatten = proximity * proximity * 0.7;
          float pAng = atan(pdx, pdz);
          transformed.x += sin(pAng) * flatten * hFrac * 0.15;
          transformed.z += cos(pAng) * flatten * hFrac * 0.15;
          transformed.y *= (1.0 - flatten * hFrac);
        }

        // Proximity glow (6m radius, quadratic falloff)
        vGlow = pd2 < 36.0 ? (1.0 - sqrt(pd2) / 6.0) * hFrac : 0.0;
        vGlow *= vGlow;
      } else {
        vGlow = 0.0;
      }
      `
    );

    // Fragment shader: declare glow varying + boost emissive near player
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      varying float vGlow;
      `
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 10.0);
      `
    );
  };

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cx, 0, cz);
  scene.add(mesh);
  return { mesh, geo, cx, cz };
}
