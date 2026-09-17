import { BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Mesh, MeshStandardMaterial } from 'three';
import { WORLD_R } from '../../constants.js';
import { scene } from '../../core/renderer.js';
import { sr } from '../../utils/rng.js';
import { getMeshGroundY } from '../../world/terrain.js';

// ================================================================
// Grass Patch — GPU vertex shader sway (zero CPU per-frame cost)
// ================================================================
// Wind sway + player proximity flatten run entirely on the GPU.
// Patches are built individually (so populate.js can re-ground each blade
// after the puffling-home plateaus reshape the terrain), then merged into
// ~30 world-space chunks by chunkGrassPatches(): one material, one draw call
// per chunk instead of one per patch (1,440 patches → ~30 draws). The
// palette's emissive colour is baked per vertex (`emisColor`) so chunks can
// mix palettes and the finale recolour can still tint patch by patch.

// Shared uniforms updated once per frame from main.js
const sharedUniforms = {
  uTime: { value: 0 },
  uWindAmp: { value: 1.0 },
  uWindLeanX: { value: 0 },
  uWindLeanZ: { value: 0 },
  uPlayerX: { value: 0 },
  uPlayerZ: { value: 0 },
  uGlowMult: { value: 1.0 }
};

// Call once per frame to update wind/player uniforms for all patches
export function updateGrassGlobals(t, wAmp, wLeanX, wLeanZ, playerX, playerZ, glowMult) {
  sharedUniforms.uTime.value = t;
  sharedUniforms.uWindAmp.value = wAmp;
  sharedUniforms.uWindLeanX.value = wLeanX;
  sharedUniforms.uWindLeanZ.value = wLeanZ;
  sharedUniforms.uPlayerX.value = playerX;
  sharedUniforms.uPlayerZ.value = playerZ;
  if (glowMult !== undefined) sharedUniforms.uGlowMult.value = glowMult;
}

// palette: [base1, base2, mid, tip1, tip2, tip3, clover, cloverBr, emissive] hex array (optional)
export function makeGrassPatch(cx, cz, radius, density, palette) {
  const geo = new BufferGeometry();
  const verts = [], colors = [], heights = [];
  // Per-vertex baked terrain-contour offset (dy). Stored so populate.js can re-ground each
  // blade against the FINAL mesh surface after puffling-home plateaus reshape the terrain
  // (those are registered AFTER grass is built, which otherwise leaves blades floating/sunk).
  const contours = [];
  const emis = [];
  const count = density || 20;
  const emisCol = new Color(palette ? palette[8] : 0x44ff66);
  const colBase1 = new Color(palette ? palette[0] : 0x0a2010);
  const colBase2 = new Color(palette ? palette[1] : 0x152e18);
  const colMid = new Color(palette ? palette[2] : 0x2a6035);
  const colTip1 = new Color(palette ? palette[3] : 0x44ee55);
  const colTip2 = new Color(palette ? palette[4] : 0x77ffcc);
  const colTip3 = new Color(palette ? palette[5] : 0xddff66);
  const tmpC = new Color();
  // Ground height at patch center — blade offsets are relative to this.
  // Sample the RENDERED mesh surface (getMeshGroundY), not the finer 1m cache,
  // so blade bases sit on the terrain chords the GPU actually draws. On convex
  // hill crowns the 1m cache bulges above the coarse mesh, which made grass float.
  const centerY = getMeshGroundY(cx, cz);
  for (let i = 0; i < count; i++) {
    const ang = sr() * 6.28, dist = sr() * radius;
    const lx = Math.cos(ang) * dist, lz = Math.sin(ang) * dist;
    // Height offset so each blade follows terrain contour (rendered surface)
    const dy = getMeshGroundY(cx + lx, cz + lz) - centerY;
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
    verts.push(lx - w, dy, lz);
    verts.push(lx + w, dy, lz);
    verts.push(lx + lean1 - w * 0.9, dy + h1, lz + leanZ1);
    heights.push(0, 0, 0.35);
    colors.push(bc.r, bc.g, bc.b, bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + w, dy, lz);
    verts.push(lx + lean1 + w * 0.9, dy + h1, lz + leanZ1);
    verts.push(lx + lean1 - w * 0.9, dy + h1, lz + leanZ1);
    heights.push(0, 0.35, 0.35);
    colors.push(bc.r, bc.g, bc.b);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 2: mid quad (2 tris)
    const w2 = w * 0.65;
    verts.push(lx + lean1 - w * 0.9, dy + h1, lz + leanZ1);
    verts.push(lx + lean1 + w * 0.9, dy + h1, lz + leanZ1);
    verts.push(lx + lean2 - w2, dy + h2, lz + leanZ2 + curveMag);
    heights.push(0.35, 0.35, 0.7);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    verts.push(lx + lean1 + w * 0.9, dy + h1, lz + leanZ1);
    verts.push(lx + lean2 + w2, dy + h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 - w2, dy + h2, lz + leanZ2 + curveMag);
    heights.push(0.35, 0.7, 0.7);
    tmpC.copy(bc).lerp(colMid, 0.4);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    // Segment 3: tip triangle
    verts.push(lx + lean2 - w2, dy + h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean2 + w2, dy + h2, lz + leanZ2 + curveMag);
    verts.push(lx + lean + curveMag * 2, dy + h, lz + leanZ + curveMag * 1.5);
    heights.push(0.7, 0.7, 1.0);
    tmpC.copy(colMid).lerp(tc, 0.3);
    colors.push(tmpC.r, tmpC.g, tmpC.b, tmpC.r, tmpC.g, tmpC.b);
    colors.push(tc.r, tc.g, tc.b);
    // One contour entry per vertex pushed for this blade (count-agnostic — backfills to match).
    while (contours.length < verts.length / 3) { contours.push(dy); emis.push(emisCol.r, emisCol.g, emisCol.b); }
  }
  // Ground cover: clover-like triangles
  const cloverCol = new Color(palette ? palette[6] : 0x1a5528);
  const cloverBr = new Color(palette ? palette[7] : 0x33aa55);
  const cloverN = Math.floor(count * 0.3);
  for (let ci = 0; ci < cloverN; ci++) {
    const ca = sr() * 6.28, cd = sr() * radius * 0.9;
    const clx = Math.cos(ca) * cd, clz = Math.sin(ca) * cd;
    const cdy = getMeshGroundY(cx + clx, cz + clz) - centerY;
    const csz = 0.02 + sr() * 0.03;
    verts.push(clx - csz, cdy, clz);
    verts.push(clx + csz, cdy, clz);
    verts.push(clx, cdy + 0.02 + sr() * 0.02, clz + csz);
    heights.push(0, 0, 0.05);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverCol.r, cloverCol.g, cloverCol.b);
    colors.push(cloverBr.r, cloverBr.g, cloverBr.b);
    while (contours.length < verts.length / 3) { contours.push(cdy); emis.push(emisCol.r, emisCol.g, emisCol.b); }
  }
  // Static geometry — no DynamicDrawUsage, no origPos needed
  geo.setAttribute('position', new Float32BufferAttribute(verts, 3));
  geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geo.setAttribute('bladeHeight', new Float32BufferAttribute(heights, 1));
  // Contour offset per vertex (relative to the patch-center ground). Re-grounded in populate.js.
  geo.setAttribute('baseContour', new Float32BufferAttribute(contours, 1));
  geo.setAttribute('emisColor', new Float32BufferAttribute(emis, 3));
  geo.computeVertexNormals();

  const mat = makeGrassMaterial(cx, cz);

  const mesh = new Mesh(geo, mat);
  mesh.position.set(cx, 0, cz);
  scene.add(mesh);
  return { mesh, geo, cx, cz, palette };
}

/** Base emissive intensity for every blade (was the per-patch material's emissiveIntensity). */
const GRASS_EMISSIVE = 0.35;

/**
 * @brief Grass material: GPU sway / flatten / proximity glow, per-vertex emissive colour.
 * @param {number} patchX local-space origin x (0 for world-space chunks)
 * @param {number} patchZ
 */
export function makeGrassMaterial(patchX, patchZ) {
  const mat = new MeshStandardMaterial({
    vertexColors: true, roughness: 0.7, side: DoubleSide,
    emissive: 0xffffff, emissiveIntensity: GRASS_EMISSIVE
  });
  mat.customProgramCacheKey = () => 'lumGrass';
  // Inject GPU sway into the vertex shader — same math as the old CPU path
  // but runs entirely on the GPU with zero per-frame CPU cost
  mat.onBeforeCompile = (shader) => {
    // Bind shared uniforms (updated once per frame for all patches)
    shader.uniforms.uTime = sharedUniforms.uTime;
    shader.uniforms.uWindAmp = sharedUniforms.uWindAmp;
    shader.uniforms.uWindLeanX = sharedUniforms.uWindLeanX;
    shader.uniforms.uWindLeanZ = sharedUniforms.uWindLeanZ;
    shader.uniforms.uPlayerX = sharedUniforms.uPlayerX;
    shader.uniforms.uPlayerZ = sharedUniforms.uPlayerZ;
    shader.uniforms.uGlowMult = sharedUniforms.uGlowMult;
    // Per-patch constants (set once at compile time)
    shader.uniforms.uPatchX = { value: patchX };
    shader.uniforms.uPatchZ = { value: patchZ };

    // Declare uniforms + attribute + glow varying in vertex shader
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      attribute float bladeHeight;
      attribute vec3 emisColor;
      varying vec3 vEmisColor;
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
      vEmisColor = emisColor;
      `
    );

    // Fragment shader: declare glow varying + boost emissive near player
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      varying float vGlow;
      varying vec3 vEmisColor;
      uniform float uGlowMult;
      `
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      totalEmissiveRadiance *= vEmisColor * (1.0 + vGlow * 10.0) * uGlowMult;
      `
    );
  };
  return mat;
}

// ================================================================
// Chunk merge — call once after populate.js has re-grounded every patch.
// ================================================================
/**
 * @brief Merge patch meshes into world-space chunk meshes (one draw call each).
 * Each grassPatches entry keeps cx / cz (ambient crickets) and gains
 * `mesh` → its chunk mesh plus `range` = [firstVertex, endVertex) inside it,
 * which the finale recolour uses to tint patch by patch.
 * @param {Array} grassPatches records from makeGrassPatch
 * @param {number} [cellSize=24] chunk cell edge (m)
 * @return {Mesh[]} chunk meshes
 */
export function chunkGrassPatches(grassPatches, cellSize = 24) {
  const cells = new Map();
  for (let i = 0; i < grassPatches.length; i++) {
    const gp = grassPatches[i];
    const kx = Math.floor((gp.cx + WORLD_R) / cellSize), kz = Math.floor((gp.cz + WORLD_R) / cellSize);
    const key = kx * 1000 + kz;
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(gp);
  }
  const chunkMat = makeGrassMaterial(0, 0);
  const chunks = [];
  for (const list of cells.values()) {
    let total = 0;
    for (const gp of list) total += gp.geo.attributes.position.count;
    const pos = new Float32Array(total * 3), col = new Float32Array(total * 3), hgt = new Float32Array(total), emi = new Float32Array(total * 3);
    let v = 0;
    for (const gp of list) {
      const g = gp.geo, n = g.attributes.position.count;
      const P = g.attributes.position.array, Cc = g.attributes.color.array, H = g.attributes.bladeHeight.array, E = g.attributes.emisColor.array;
      const ox = gp.mesh.position.x, oy = gp.mesh.position.y, oz = gp.mesh.position.z;
      for (let i = 0; i < n; i++) {
        pos[(v + i) * 3] = P[i * 3] + ox; pos[(v + i) * 3 + 1] = P[i * 3 + 1] + oy; pos[(v + i) * 3 + 2] = P[i * 3 + 2] + oz;
      }
      col.set(Cc, v * 3); hgt.set(H, v); emi.set(E, v * 3);
      gp.range = [v, v + n];
      v += n;
      scene.remove(gp.mesh);
      g.dispose();
      gp.mesh.material.dispose();
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new Float32BufferAttribute(col, 3));
    geo.setAttribute('bladeHeight', new Float32BufferAttribute(hgt, 1));
    geo.setAttribute('emisColor', new Float32BufferAttribute(emi, 3));
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    const mesh = new Mesh(geo, chunkMat);
    scene.add(mesh);
    chunks.push(mesh);
    for (const gp of list) { gp.mesh = mesh; gp.geo = geo; }
  }
  return chunks;
}
