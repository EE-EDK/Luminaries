import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr, saveSeed, restoreSeed } from '../../utils/rng.js';

// Bioluminescent color palettes for canopy variety
const GLOW_PALETTES = [
  { leaf: 0x145528, glow: 0x22cc77, core: 0x44ffaa },  // emerald
  { leaf: 0x0e3828, glow: 0x33bbaa, core: 0x55ffcc },  // teal
  { leaf: 0x1a4420, glow: 0x44cc55, core: 0x77ff88 },  // lime-green
  { leaf: 0x103030, glow: 0x2299aa, core: 0x44ddee },  // cyan
  { leaf: 0x182844, glow: 0x3388cc, core: 0x55bbff },  // blue (rare)
];

// ================================================================
// Template instancing — 10 template trees, InstancedMesh rendering
// ================================================================
const TEMPLATE_COUNT = 10;
const templates = [];       // { opaqueGeo, glowGeo, treeH }
const instancedMeshes = []; // { opaque, glow, instances }

// ================================================================
// Billboard impostor — procedural glow texture for distant trees
// ================================================================
let _glowTexture = null;
function getGlowTexture() {
  if (_glowTexture) return _glowTexture;
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const c = canvas.getContext('2d');
  const grad = c.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(68, 255, 136, 0.55)');
  grad.addColorStop(0.25, 'rgba(34, 204, 100, 0.35)');
  grad.addColorStop(0.6, 'rgba(20, 120, 60, 0.12)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  c.fillStyle = grad;
  c.fillRect(0, 0, size, size);
  _glowTexture = new THREE.CanvasTexture(canvas);
  return _glowTexture;
}

// Create a billboard impostor sprite for a tree (1 draw call at distance)
export function makeTreeImpostor(treeH, groundY) {
  const mat = new THREE.SpriteMaterial({
    map: getGlowTexture(),
    color: 0x33cc88,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const sprite = new THREE.Sprite(mat);
  const canopyW = treeH * 0.55;
  sprite.scale.set(canopyW * 2.2, canopyW * 1.6, 1);
  sprite.position.y = groundY + treeH * 0.6;
  sprite.visible = false;
  scene.add(sprite);
  return sprite;
}

// ================================================================
// Build a template tree at origin (NOT added to scene)
// Uses the same procedural generation as the original makeTree
// ================================================================
function buildTemplateTree() {
  const g = new THREE.Group();
  const h = 6 + sr() * 10, r = 0.2 + sr() * 0.3;

  // Trunk
  const tM = new THREE.MeshStandardMaterial({
    color: 0x5a4030, roughness: 0.75,
    emissive: 0x1a3820, emissiveIntensity: 0.18
  });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r, h, 6), tM);
  trunk.position.y = h / 2;
  g.add(trunk);

  // Bioluminescent vein lines on trunk
  const veinM = new THREE.MeshStandardMaterial({
    color: 0x228855, emissive: C.leafGlow, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.25
  });
  const veinN = 2 + Math.floor(sr() * 3);
  for (let vi = 0; vi < veinN; vi++) {
    const va = vi / veinN * 6.28 + sr() * 0.5;
    const vH = h * 0.4 + sr() * h * 0.4;
    const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.015, vH, 3), veinM);
    vein.position.set(Math.cos(va) * r * 0.74, h * 0.15 + vH / 2, Math.sin(va) * r * 0.74);
    vein.userData._glow = true;
    g.add(vein);
  }

  // Exposed roots
  const rootM = new THREE.MeshStandardMaterial({
    color: 0x3a2c1a, roughness: 0.85,
    emissive: 0x182a14, emissiveIntensity: 0.12
  });
  const rootN = 3 + Math.floor(sr() * 3);
  for (let ri = 0; ri < rootN; ri++) {
    const ra = ri / rootN * 6.28 + sr() * 0.5;
    const rLen = 0.8 + sr() * 1.5;
    const root = new THREE.Mesh(new THREE.CylinderGeometry(0.02, r * 0.3, rLen, 4), rootM);
    root.position.set(Math.cos(ra) * r * 0.5, 0.08, Math.sin(ra) * r * 0.5);
    root.rotation.z = ra < 3.14 ? (1.2 + sr() * 0.3) : -(1.2 + sr() * 0.3);
    root.rotation.y = ra;
    g.add(root);
  }

  // Branches with multi-layered bioluminescent canopy clusters
  const bc = 3 + Math.floor(sr() * 4);
  for (let i = 0; i < bc; i++) {
    const by = h * (0.4 + sr() * 0.5), ang = sr() * Math.PI * 2, bl = 1.5 + sr() * 3;

    // Branch
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.06, bl, 4), tM);
    br.position.set(Math.cos(ang) * 0.3, by, Math.sin(ang) * 0.3);
    br.rotation.z = (sr() - 0.5) * 1.2; br.rotation.y = ang;
    g.add(br);

    // Glow palette for this cluster
    const pal = GLOW_PALETTES[Math.floor(sr() * GLOW_PALETTES.length)];
    const cx = Math.cos(ang) * (bl * 0.5);
    const cy = by + sr() * 1.5;
    const cz = Math.sin(ang) * (bl * 0.5);
    const leafSize = 1 + sr() * 2;

    // Inner glow core
    const coreM = new THREE.MeshStandardMaterial({
      color: pal.core, emissive: pal.core,
      emissiveIntensity: 0.7 + sr() * 0.5,
      transparent: true, opacity: 0.55, roughness: 0.3
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 0.3, 1), coreM);
    core.position.set(cx, cy, cz);
    core.userData._glow = true;
    g.add(core);

    // Mid canopy
    const midM = new THREE.MeshStandardMaterial({
      color: pal.leaf, emissive: pal.glow,
      emissiveIntensity: 0.25 + sr() * 0.25,
      transparent: true, opacity: 0.55, roughness: 0.7
    });
    const mid = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 0.75, 1), midM);
    mid.position.set(cx + (sr() - 0.5) * 0.4, cy + (sr() - 0.5) * 0.4, cz + (sr() - 0.5) * 0.4);
    mid.scale.set(1 + sr() * 0.4, 0.65 + sr() * 0.5, 1 + sr() * 0.4);
    mid.userData._glow = true;
    g.add(mid);

    // Outer haze — skip for instanced rendering (too faint, saves geometry)
    // Consume the sr() calls that haze positioning would have used
    // (none — haze reuses cx, cy, cz)

    // Hanging moss (sparse, consume sr() for consistency)
    if (sr() < 0.35) {
      sr(); sr(); // mLen, mOff
      sr(); // moss Y offset
    }
  }

  // Shelf fungi
  const fungN = Math.floor(sr() * 3);
  for (let fi = 0; fi < fungN; fi++) {
    const fy = 1 + sr() * h * 0.4;
    const fa = sr() * 6.28;
    const fungM = new THREE.MeshStandardMaterial({
      color: 0x5a3520, emissive: 0x331a08, emissiveIntensity: 0.06, roughness: 0.8
    });
    const fung = new THREE.Mesh(new THREE.SphereGeometry(0.08 + sr() * 0.08, 5, 3), fungM);
    fung.scale.set(1.5, 0.3, 1);
    fung.position.set(Math.cos(fa) * r * 0.8, fy, Math.sin(fa) * r * 0.8);
    fung.rotation.y = -fa;
    g.add(fung);
  }

  // Canopy underglow — skip for instanced rendering (very faint)
  sr(); // consume the sr() for underglow sphere size

  // Base soil mound
  const moundM = new THREE.MeshStandardMaterial({ color: 0x121008, roughness: 0.95 });
  const mound = new THREE.Mesh(new THREE.SphereGeometry(r * 2.5, 6, 3), moundM);
  mound.scale.set(1, 0.12, 1); mound.position.y = 0.02; g.add(mound);

  g.userData.treeH = h;
  return g;
}

// ================================================================
// Bake a solid color into vertex color attribute on a geometry
// ================================================================
function bakeVertexColors(geo, color) {
  const count = geo.attributes.position.count;
  const colors = new Float32Array(count * 3);
  const c = new THREE.Color(color);
  for (let i = 0; i < count; i++) {
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
}

// ================================================================
// Merge a template group into 2 BufferGeometries: opaque + glow
// ================================================================
function mergeTemplate(group) {
  const opaqueGeos = [];
  const glowGeos = [];

  group.updateMatrixWorld(true);

  group.traverse((child) => {
    if (!child.isMesh) return;
    const mat = child.material;
    const geo = child.geometry.clone();

    // Apply world transform to flatten vertices to group-local space
    geo.applyMatrix4(child.matrixWorld);

    // Strip UVs for consistent attribute layout before merging
    if (geo.attributes.uv) geo.deleteAttribute('uv');
    if (geo.attributes.uv1) geo.deleteAttribute('uv1');
    if (geo.attributes.uv2) geo.deleteAttribute('uv2');

    // Ensure normals exist
    if (!geo.attributes.normal) geo.computeVertexNormals();

    // Sort into opaque vs glow bucket
    const isGlow = child.userData._glow === true;

    if (isGlow) {
      // Bake emissive color for glow shader
      const emissiveColor = mat.emissive || new THREE.Color(0x44ffaa);
      bakeVertexColors(geo, emissiveColor);
      glowGeos.push(geo);
    } else {
      // Bake diffuse color for opaque parts
      bakeVertexColors(geo, mat.color);
      opaqueGeos.push(geo);
    }
  });

  return {
    opaqueGeo: opaqueGeos.length > 0 ? mergeGeometries(opaqueGeos) : null,
    glowGeo: glowGeos.length > 0 ? mergeGeometries(glowGeos) : null
  };
}

// ================================================================
// Initialize 10 template trees — call once during init
// Uses a separate RNG state to avoid shifting the world seed
// ================================================================
export function initTreeTemplates() {
  const savedSeed = saveSeed();
  // Use a separate seed for template generation
  restoreSeed(9999);

  for (let i = 0; i < TEMPLATE_COUNT; i++) {
    const group = buildTemplateTree();
    const treeH = group.userData.treeH;
    const merged = mergeTemplate(group);
    templates.push({
      opaqueGeo: merged.opaqueGeo,
      glowGeo: merged.glowGeo,
      treeH
    });

    // Dispose template group meshes (geometries were cloned during merge)
    group.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose();
        if (child.material.dispose) child.material.dispose();
      }
    });
  }

  // Restore original RNG state so world generation is unaffected
  restoreSeed(savedSeed);
}

// ================================================================
// Create InstancedMeshes for all tree positions
// Assigns each position to a template via round-robin with variation
// ================================================================
export function createTreeInstances(treePositions) {
  // Build assignment buckets: which positions go to which template
  const assignments = [];
  for (let i = 0; i < TEMPLATE_COUNT; i++) assignments.push([]);

  for (let i = 0; i < treePositions.length; i++) {
    const tp = treePositions[i];
    const tmplIdx = i % TEMPLATE_COUNT;
    // Per-instance variation: Y-rotation (golden angle) + scale
    const yRot = (i * 2.39996) % 6.28;
    const scale = 0.7 + (((i * 7 + 3) % 13) / 13) * 0.6;
    // Effective tree height = template height × scale
    const effectiveH = templates[tmplIdx].treeH * scale;
    tp.treeH = effectiveH;
    assignments[tmplIdx].push({ x: tp.x, z: tp.z, groundY: tp.groundY, yRot, scale, dataIdx: i });
  }

  // Shared materials
  const opaqueMat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.75,
    emissive: 0x1a3820, emissiveIntensity: 0.1
  });

  const glowMat = new THREE.MeshStandardMaterial({
    vertexColors: true, transparent: true, opacity: 0.45,
    roughness: 0.5, depthWrite: false
  });
  // Override emissive in fragment shader: use vertex colors as emissive source
  glowMat.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      'totalEmissiveRadiance = vColor * 2.0;'
    );
  };

  const mat4 = new THREE.Matrix4();
  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const scl = new THREE.Vector3();
  const yAxis = new THREE.Vector3(0, 1, 0);

  for (let ti = 0; ti < TEMPLATE_COUNT; ti++) {
    const tmpl = templates[ti];
    const instances = assignments[ti];
    if (instances.length === 0) {
      instancedMeshes.push({ opaque: null, glow: null, instances: [] });
      continue;
    }

    // Opaque InstancedMesh
    let opaqueMesh = null;
    if (tmpl.opaqueGeo) {
      opaqueMesh = new THREE.InstancedMesh(tmpl.opaqueGeo, opaqueMat.clone(), instances.length);
      opaqueMesh.castShadow = true;
      opaqueMesh.receiveShadow = true;
      for (let j = 0; j < instances.length; j++) {
        const inst = instances[j];
        pos.set(inst.x, inst.groundY, inst.z);
        quat.setFromAxisAngle(yAxis, inst.yRot);
        scl.set(inst.scale, inst.scale, inst.scale);
        mat4.compose(pos, quat, scl);
        opaqueMesh.setMatrixAt(j, mat4);
      }
      opaqueMesh.instanceMatrix.needsUpdate = true;
      scene.add(opaqueMesh);
    }

    // Glow InstancedMesh
    let glowMesh = null;
    if (tmpl.glowGeo) {
      const gMat = glowMat.clone();
      // Re-apply onBeforeCompile for cloned material
      gMat.onBeforeCompile = (shader) => {
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <emissivemap_fragment>',
          'totalEmissiveRadiance = vColor * 2.0;'
        );
      };
      glowMesh = new THREE.InstancedMesh(tmpl.glowGeo, gMat, instances.length);
      for (let j = 0; j < instances.length; j++) {
        const inst = instances[j];
        pos.set(inst.x, inst.groundY, inst.z);
        quat.setFromAxisAngle(yAxis, inst.yRot);
        scl.set(inst.scale, inst.scale, inst.scale);
        mat4.compose(pos, quat, scl);
        glowMesh.setMatrixAt(j, mat4);
      }
      glowMesh.instanceMatrix.needsUpdate = true;
      scene.add(glowMesh);
    }

    instancedMeshes.push({ opaque: opaqueMesh, glow: glowMesh, instances });
  }

  // Store back template/instance indices for LOD tracking
  for (let ti = 0; ti < instancedMeshes.length; ti++) {
    const im = instancedMeshes[ti];
    for (let j = 0; j < im.instances.length; j++) {
      const inst = im.instances[j];
      const tp = treePositions[inst.dataIdx];
      tp._tmplIdx = ti;
      tp._instIdx = j;
      tp._yRot = inst.yRot;
      tp._scale = inst.scale;
      tp._lod = -1; // force initial LOD update
    }
  }
}

// ================================================================
// Per-frame LOD update — manages instance visibility + wind sway
// Tier 0 (<20m): visible + wind sway rotation
// Tier 1 (20-70m): visible, static
// Tier 2 (70-110m): hidden (scale 0), impostor sprite visible
// Tier 3 (>110m): hidden, impostor hidden
// ================================================================
const _m4 = new THREE.Matrix4();
const _pos = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _scl = new THREE.Vector3();
const _euler = new THREE.Euler();
const _yAxis = new THREE.Vector3(0, 1, 0);
const _zeroM4 = new THREE.Matrix4().compose(
  new THREE.Vector3(0, -1000, 0),
  new THREE.Quaternion(),
  new THREE.Vector3(0, 0, 0)
);

export function updateTreeLOD(treePositions, px, py, pz, t, wAmp, wLeanX, wLeanZ) {
  const dirty = new Uint8Array(instancedMeshes.length);

  for (let i = 0; i < treePositions.length; i++) {
    const tr = treePositions[i];
    const tdx = tr.x - px, tdz = tr.z - pz;
    const tdy = (tr.groundY + (tr.treeH || 10) * 0.4) - py;
    const d2 = tdx * tdx + tdy * tdy + tdz * tdz;

    let newLod;
    if (d2 > 12100) newLod = 3;      // >110m hidden
    else if (d2 > 4900) newLod = 2;  // 70-110m impostor
    else if (d2 > 400) newLod = 1;   // 20-70m static
    else newLod = 0;                  // <20m wind sway

    const tmplIdx = tr._tmplIdx;
    const instIdx = tr._instIdx;
    const im = instancedMeshes[tmplIdx];

    // Handle impostor sprite
    if (tr.impostor) {
      const wantImpostor = newLod === 2;
      if (tr.impostor.visible !== wantImpostor) tr.impostor.visible = wantImpostor;
    }

    // Only update instance matrix when LOD changes or Tier 0 (wind sway each frame)
    if (newLod !== tr._lod || newLod === 0) {
      if (newLod >= 2) {
        // Hidden: zero-scale matrix far below ground
        if (tr._lod < 2) {
          if (im.opaque) im.opaque.setMatrixAt(instIdx, _zeroM4);
          if (im.glow) im.glow.setMatrixAt(instIdx, _zeroM4);
          dirty[tmplIdx] = 1;
        }
      } else {
        // Visible: compute actual transform
        _pos.set(tr.x, tr.groundY, tr.z);
        _scl.set(tr._scale, tr._scale, tr._scale);

        if (newLod === 0) {
          // Wind sway rotation (updates every frame for close trees)
          const tPhase = tr.x * 0.1 + tr.z * 0.13;
          _euler.set(
            Math.sin(t * 0.25 + tPhase + 1) * 0.003 * wAmp + wLeanZ * 0.15,
            tr._yRot,
            Math.sin(t * 0.3 + tPhase) * 0.004 * wAmp + wLeanX * 0.15
          );
          _quat.setFromEuler(_euler);
        } else {
          // Static rotation only
          _quat.setFromAxisAngle(_yAxis, tr._yRot);
        }

        _m4.compose(_pos, _quat, _scl);
        if (im.opaque) im.opaque.setMatrixAt(instIdx, _m4);
        if (im.glow) im.glow.setMatrixAt(instIdx, _m4);
        dirty[tmplIdx] = 1;
      }
      tr._lod = newLod;
    }
  }

  // Upload only dirty instance matrices
  for (let ti = 0; ti < instancedMeshes.length; ti++) {
    if (dirty[ti]) {
      const im = instancedMeshes[ti];
      if (im.opaque) im.opaque.instanceMatrix.needsUpdate = true;
      if (im.glow) im.glow.instanceMatrix.needsUpdate = true;
    }
  }
}

// ================================================================
// Transform all tree materials for quest finale (pink/purple theme)
// ================================================================
export function transformTreeMaterials() {
  const pinkShades = [
    { color: 0x551430, glow: 0xcc2277 },
    { color: 0x3a1040, glow: 0xaa33bb },
    { color: 0x441428, glow: 0xdd3388 },
    { color: 0x2a1050, glow: 0x8833cc },
    { color: 0x401830, glow: 0xcc4499 },
  ];
  for (let i = 0; i < instancedMeshes.length; i++) {
    const shade = pinkShades[i % pinkShades.length];
    const im = instancedMeshes[i];
    if (im.opaque) {
      im.opaque.material.color.set(shade.color);
      im.opaque.material.emissive.set(shade.glow);
      im.opaque.material.emissiveIntensity = 0.3;
      im.opaque.material.vertexColors = false;
      im.opaque.material.needsUpdate = true;
    }
    if (im.glow) {
      // Reset onBeforeCompile to use uniform emissive instead of vertex color
      im.glow.material.onBeforeCompile = () => {};
      im.glow.material.color.set(shade.glow);
      im.glow.material.emissive.set(shade.glow);
      im.glow.material.emissiveIntensity = 0.8;
      im.glow.material.vertexColors = false;
      im.glow.material.needsUpdate = true;
    }
  }
}

// ================================================================
// Get tree positions array reference for quest laser targeting
// (Quest uses tr.x, tr.z for laser endpoints)
// ================================================================
export function getInstancedMeshes() {
  return instancedMeshes;
}
