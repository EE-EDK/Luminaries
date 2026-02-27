// --- Rainbow ribbons (wide translucent glowing bands with shimmer texture) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, OBELISK_H } from '../../constants.js';
export const rainbowArcs = [];

function buildRibbonGeo(arcPts, ribbonWidth, segments, addVertexColors, baseColor) {
  const verts = [];
  const colors = addVertexColors ? [] : null;
  const uvs = [];

  for (let j = 0; j < segments; j++) {
    const p0 = arcPts[j], p1 = arcPts[j + 1];
    const dx = p1.x - p0.x, dy = p1.y - p0.y, dz = p1.z - p0.z;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    const nx = -dz / len, nz = dx / len;
    // Vary width along arc for organic feel — wider at apex, thinner at feet
    const frac = (j + 0.5) / segments;
    const widthMod = 0.7 + Math.sin(frac * Math.PI) * 0.5; // peak at center
    const hw = (ribbonWidth * widthMod) / 2;

    const bl = [p0.x + nx * hw, p0.y, p0.z + nz * hw];
    const br = [p0.x - nx * hw, p0.y, p0.z - nz * hw];
    const tl = [p1.x + nx * hw, p1.y, p1.z + nz * hw];
    const tr = [p1.x - nx * hw, p1.y, p1.z - nz * hw];
    verts.push(...bl, ...tl, ...br, ...br, ...tl, ...tr);

    const u0 = j / segments, u1 = (j + 1) / segments;
    uvs.push(u0, 0, u1, 0, u0, 1, u0, 1, u1, 0, u1, 1);

    if (addVertexColors && baseColor) {
      // Edge-bright / center-soft gradient + arc-position variation
      const edgeBright = 1.2;  // edges glow brighter
      const centerDim = 0.6;   // center is softer
      const arcPulse = 0.85 + Math.sin(frac * Math.PI * 3) * 0.15; // shimmer bands

      // bl=edge, br=edge, tl=edge, tr=edge (left=edge, right=edge)
      const eb = edgeBright * arcPulse;
      const cb = centerDim * arcPulse;
      // Tri 1: bl(edge), tl(edge), br(edge)  — all edge side 1
      colors.push(baseColor.r * eb, baseColor.g * eb, baseColor.b * eb);
      colors.push(baseColor.r * eb, baseColor.g * eb, baseColor.b * eb);
      colors.push(baseColor.r * cb, baseColor.g * cb, baseColor.b * cb);
      // Tri 2: br(center), tl(edge), tr(center)
      colors.push(baseColor.r * cb, baseColor.g * cb, baseColor.b * cb);
      colors.push(baseColor.r * eb, baseColor.g * eb, baseColor.b * eb);
      colors.push(baseColor.r * cb, baseColor.g * cb, baseColor.b * cb);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  if (colors) {
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  }
  geo.computeVertexNormals();
  return geo;
}

export function makeRainbows() {
  for (let i = 0; i < 6; i++) {
    const col = C.rainbow[i];
    const ang = (i / 6) * 6.28;
    const r = 6 + i * 0.8;
    const h = OBELISK_H + 6 + i * 2.5;
    const ribbonWidth = 1.0 - i * 0.05; // wide ribbons

    const arcPts = [];
    const segments = 32; // more segments for smoother curve
    for (let j = 0; j <= segments; j++) {
      const frac = j / segments;
      const a = ang + frac * Math.PI;
      const px = Math.cos(a) * r;
      const pz = Math.sin(a) * r;
      const py = Math.sin(frac * Math.PI) * h;
      arcPts.push(new THREE.Vector3(px, py, pz));
    }

    const baseColor = new THREE.Color(col);
    const ribbonGeo = buildRibbonGeo(arcPts, ribbonWidth, segments, true, baseColor);

    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0,
      side: THREE.DoubleSide, depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(ribbonGeo, mat);
    mesh.visible = false;
    scene.add(mesh);

    // Inner bright core line along ribbon center
    const curve = new THREE.CatmullRomCurve3(arcPts);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const coreGeo = new THREE.TubeGeometry(curve, segments, 0.03, 4, false);
    const coreLine = new THREE.Mesh(coreGeo, coreMat);
    coreLine.visible = false;
    scene.add(coreLine);

    // Shimmer sparkles along arc (8 per band — small bright dots that travel)
    const sparkles = [];
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    for (let si = 0; si < 8; si++) {
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 3), sparkMat.clone());
      spark.visible = false;
      scene.add(spark);
      sparkles.push({ mesh: spark, mat: spark.material, phase: si / 8, speed: 0.15 + Math.random() * 0.1 });
    }

    // Ground glow pools at endpoints (wider)
    const poolMat = new THREE.MeshBasicMaterial({
      color: col, transparent: true, opacity: 0, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const p0 = arcPts[0], pEnd = arcPts[arcPts.length - 1];
    const pool0 = new THREE.Mesh(new THREE.CircleGeometry(1.2, 8), poolMat);
    pool0.rotation.x = -Math.PI / 2; pool0.position.set(p0.x, 0.03, p0.z);
    pool0.visible = false; scene.add(pool0);
    const pool1 = new THREE.Mesh(new THREE.CircleGeometry(1.2, 8), poolMat.clone());
    pool1.rotation.x = -Math.PI / 2; pool1.position.set(pEnd.x, 0.03, pEnd.z);
    pool1.visible = false; scene.add(pool1);

    rainbowArcs.push({
      mesh, mat, coreLine, coreMat, curve, sparkles,
      pools: [pool0, pool1], poolMat,
      targetOpacity: 0
    });
  }

  // Secondary outer faint arc (wide ribbon with vertex colors)
  const secPts = [];
  const secR = 10, secH = OBELISK_H + 14;
  const secSegments = 32;
  for (let j = 0; j <= secSegments; j++) {
    const frac = j / secSegments;
    const a = frac * Math.PI;
    secPts.push(new THREE.Vector3(Math.cos(a) * secR, Math.sin(frac * Math.PI) * secH, Math.sin(a) * secR));
  }
  const secColor = new THREE.Color(0xeeddff);
  const secGeo = buildRibbonGeo(secPts, 1.5, secSegments, true, secColor);
  const secMat = new THREE.MeshBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0,
    side: THREE.DoubleSide, depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const secMesh = new THREE.Mesh(secGeo, secMat);
  secMesh.visible = false;
  scene.add(secMesh);
  rainbowArcs.push({ mesh: secMesh, mat: secMat, targetOpacity: 0 });
}

// Animate rainbow sparkles traveling along arcs
export function updateRainbowSparkles(t) {
  for (let i = 0; i < rainbowArcs.length; i++) {
    const arc = rainbowArcs[i];
    if (!arc.sparkles || !arc.curve) continue;
    if (!arc.mesh.visible) continue;

    // Core line follows main opacity
    if (arc.coreLine) {
      arc.coreLine.visible = arc.mesh.visible;
      arc.coreMat.opacity = arc.mat.opacity * 0.4;
    }

    // Animate traveling sparkles
    for (let si = 0; si < arc.sparkles.length; si++) {
      const sp = arc.sparkles[si];
      sp.phase += sp.speed * 0.016; // ~60fps step
      if (sp.phase > 1) sp.phase -= 1;
      const pt = arc.curve.getPoint(sp.phase);
      sp.mesh.position.copy(pt);
      sp.mesh.visible = arc.mesh.visible;
      const twinkle = Math.sin(t * 8 + si * 2.1) * 0.5 + 0.5;
      sp.mat.opacity = arc.mat.opacity * twinkle * 0.7;
    }

    // Ground glow pools
    if (arc.pools) {
      for (let pi = 0; pi < arc.pools.length; pi++) {
        arc.pools[pi].visible = arc.mesh.visible;
        if (arc.poolMat) arc.poolMat.opacity = arc.mat.opacity * 0.3;
      }
    }
  }
}
