import * as THREE from 'three';
import { SKY_R } from '../constants.js';
import { scene } from '../core/renderer.js';

// ================================================================
// Northern Lights (Aurora Borealis)
// ================================================================
// Subtle, ethereal aurora with many thin overlapping ribbons.
// Vertex-animated curtain shimmer. Muted desaturated colors.
// Only active during DEEP_NIGHT / NIGHT — zero cost otherwise.

const RIBBON_COUNT = 6;
const SEGMENTS = 64;
const ribbons = [];
let auroraGroup = null;

// Muted, desaturated color palette for soft aurora
const AURORA_COLORS = [
  new THREE.Color(0x1a7755), // muted green
  new THREE.Color(0x2a8877), // muted teal
  new THREE.Color(0x557766), // pale sage
  new THREE.Color(0x665588), // muted purple
  new THREE.Color(0x884466), // muted rose
  new THREE.Color(0x336655), // dark teal
];

export function initAurora() {
  auroraGroup = new THREE.Group();
  auroraGroup.visible = false;

  for (let r = 0; r < RIBBON_COUNT; r++) {
    // Thinner, more numerous ribbons with variation
    const widthMult = 1.2 + r * 0.2 + Math.sin(r * 1.7) * 0.15;
    const width = SKY_R * widthMult;
    // Taller ribbons for a more diffuse, wispy look
    const heightMult = 0.10 + r * 0.012 + Math.sin(r * 2.3) * 0.02;
    const height = SKY_R * heightMult;
    // More vertical rows for gradient falloff
    const geo = new THREE.PlaneGeometry(width, height, SEGMENTS, 3);

    // Curve the ribbon into an arc across the sky
    const posArr = geo.attributes.position.array;
    const rows = 4; // 0=top .. 3=bottom
    const vertCount = (SEGMENTS + 1) * rows;
    const arcSpan = Math.PI * (0.45 + r * 0.08 + Math.sin(r * 0.9) * 0.05);
    const arcStart = -arcSpan / 2;
    // Tighter elevation clustering with slight spread
    const elevation = (0.25 + r * 0.04 + Math.sin(r * 1.3) * 0.02) * Math.PI;
    // Less azimuth spread so ribbons overlap more
    const azimuthOffset = r * 0.18 - 0.45;

    for (let i = 0; i < vertCount; i++) {
      const col = Math.floor(i / rows);
      const row = i % rows;
      const t = col / SEGMENTS;
      const azimuth = arcStart + t * arcSpan + azimuthOffset;

      // Spread rows across ribbon height
      const rowFrac = row / (rows - 1); // 0=top, 1=bottom
      const elevOffset = (rowFrac - 0.5) * 0.05;
      const elev = elevation + elevOffset;
      const skyR = SKY_R * 0.92;

      posArr[i * 3] = Math.sin(azimuth) * Math.sin(elev) * skyR;
      posArr[i * 3 + 1] = Math.cos(elev) * skyR;
      posArr[i * 3 + 2] = Math.cos(azimuth) * Math.sin(elev) * skyR;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.position.setUsage(THREE.DynamicDrawUsage);
    geo.computeVertexNormals();

    // Vertex colors for animation
    const colors = new Float32Array(vertCount * 3);
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.attributes.color.setUsage(THREE.DynamicDrawUsage);

    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false
    });

    const mesh = new THREE.Mesh(geo, mat);
    auroraGroup.add(mesh);

    ribbons.push({
      mesh, mat, geo,
      colorArr: colors,
      posArr,
      vertCount,
      rows,
      segments: SEGMENTS,
      phase: r * 1.7 + Math.sin(r * 0.8) * 0.5,
      speed: 0.15 + r * 0.05 + Math.sin(r * 2.1) * 0.03,
      colorShift: r * 1.1,
      elevation,
      arcStart,
      arcSpan,
      azimuthOffset
    });
  }

  scene.add(auroraGroup);
}

// Fade state
let currentOpacity = 0;

export function updateAurora(dt, t, dayPhase, bioGlow, weatherState) {
  if (!auroraGroup) return;

  // Visible during DEEP_NIGHT and partially NIGHT, hidden in storms/fog
  const obscured = weatherState === 'HEAVY_RAIN' || weatherState === 'LUMINOUS_STORM' || weatherState === 'FOG_BANK';
  let targetOpacity = 0;
  if (!obscured) {
    if (dayPhase === 'DEEP_NIGHT') targetOpacity = 0.25;
    else if (dayPhase === 'NIGHT') targetOpacity = 0.08;
  }

  // Smooth fade in/out
  const fadeSpeed = targetOpacity > currentOpacity ? 0.2 : 0.4;
  currentOpacity += (targetOpacity - currentOpacity) * fadeSpeed * dt;

  if (currentOpacity < 0.005) {
    auroraGroup.visible = false;
    return;
  }
  auroraGroup.visible = true;

  const skyR = SKY_R * 0.92;

  // Animate each ribbon
  for (let r = 0; r < ribbons.length; r++) {
    const rb = ribbons[r];
    const colors = rb.colorArr;
    const posArr = rb.posArr;
    const segs = rb.segments;
    const rows = rb.rows;

    // More uniform opacity across ribbons
    rb.mat.opacity = currentOpacity * (0.5 + r * 0.05);

    for (let col = 0; col <= segs; col++) {
      const u = col / segs; // 0..1 along ribbon

      // Multiple waves for organic shimmer
      const wave1 = Math.sin(u * 6 + t * rb.speed + rb.phase) * 0.5 + 0.5;
      const wave2 = Math.sin(u * 3 - t * rb.speed * 0.4 + rb.phase * 1.3) * 0.5 + 0.5;
      const drift = Math.sin(u * 1.5 + t * 0.07) * 0.5 + 0.5;
      // Slow large-scale fade — sections of ribbon appear and disappear
      const swell = Math.sin(u * 1.2 + t * 0.05 + rb.phase * 0.7) * 0.5 + 0.5;

      const brightness = (wave1 * 0.3 + wave2 * 0.25 + drift * 0.2 + swell * 0.25) * currentOpacity;

      // Color blend along palette
      const colorIdx = (u * 3 + t * 0.08 + rb.colorShift) % AURORA_COLORS.length;
      const ci = Math.floor(colorIdx);
      const cf = colorIdx - ci;
      const c1 = AURORA_COLORS[ci % AURORA_COLORS.length];
      const c2 = AURORA_COLORS[(ci + 1) % AURORA_COLORS.length];

      const cr = (c1.r + (c2.r - c1.r) * cf) * brightness;
      const cg = (c1.g + (c2.g - c1.g) * cf) * brightness;
      const cb = (c1.b + (c2.b - c1.b) * cf) * brightness;

      // Curtain shimmer — gently undulate vertex Y positions
      const curtainAmp = skyR * 0.025;
      const curtainWave = Math.sin(u * 5 + t * 0.3 + rb.phase) * curtainAmp
        + Math.sin(u * 2.5 - t * 0.15 + rb.phase * 0.6) * curtainAmp * 0.5;

      // Apply per-row with vertical gradient falloff
      for (let row = 0; row < rows; row++) {
        const idx = col * rows + row;
        const rowFrac = row / (rows - 1); // 0=top, 1=bottom

        // Vertical gradient: top fades to near-zero, bottom brightest, middle soft
        // Creates a soft diffuse edge instead of hard bands
        let rowAlpha;
        if (rowFrac < 0.33) rowAlpha = rowFrac * 1.2; // top edge fades in
        else if (rowFrac > 0.67) rowAlpha = (1 - rowFrac) * 1.5; // bottom edge fades out
        else rowAlpha = 0.7 + Math.sin(rowFrac * Math.PI) * 0.3; // middle peak

        colors[idx * 3] = cr * rowAlpha;
        colors[idx * 3 + 1] = cg * rowAlpha;
        colors[idx * 3 + 2] = cb * rowAlpha;

        // Update vertex position Y for curtain shimmer
        const azimuth = rb.arcStart + u * rb.arcSpan + rb.azimuthOffset;
        const elevOffset = (rowFrac - 0.5) * 0.05;
        const elev = rb.elevation + elevOffset;
        // Add curtain undulation to Y, scaled by row (more at bottom)
        const shimmerY = curtainWave * (0.3 + rowFrac * 0.7);
        posArr[idx * 3 + 1] = Math.cos(elev) * skyR + shimmerY;
      }
    }

    rb.geo.attributes.color.needsUpdate = true;
    rb.geo.attributes.position.needsUpdate = true;
  }
}
