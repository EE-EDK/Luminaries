// ================================================================
// Audio Crystals — Resonance chains and cluster harmonies
// ================================================================
// When the player enters a cluster of crystals, they begin to
// vibrate in sympathy. The more crystals in the chain, the richer
// the harmonic stack.

import { ctx, initialized, muted, masterGain, connectWithReverb } from './core.js';
import { emit, Events } from '../../kernel/eventBus.js';

// Major Pentatonic (C D E G A)
const SCALE = [0, 2, 4, 7, 9];
const BASE_FREQ = 261.63; // C4

function noteFreq(degree, octShift) {
  const len = SCALE.length;
  const oct = Math.floor(degree / len) + (octShift || 0);
  const idx = ((degree % len) + len) % len;
  return BASE_FREQ * Math.pow(2, oct + SCALE[idx] / 12);
}

let clusterNodes = [];
let clusterGains = [];
let activeClusterIdx = -1;
let currentChainSize = 0;

// Pre-calculated clusters
let clusters = [];

export function initCrystalClusters(crys_data) {
  const CLUSTER_DIST_SQ = 144; // 12m
  const visited = new Set();
  clusters = [];

  for (let i = 0; i < crys_data.length; i++) {
    if (visited.has(i)) continue;
    const cluster = [i];
    visited.add(i);
    
    // Simple BFS to find all connected crystals
    const queue = [i];
    while (queue.length > 0) {
      const idx = queue.shift();
      const c1 = crys_data[idx];
      for (let j = 0; j < crys_data.length; j++) {
        if (visited.has(j)) continue;
        const c2 = crys_data[j];
        const dx = c1.x - c2.x, dz = c1.z - c2.z;
        if (dx * dx + dz * dz < CLUSTER_DIST_SQ) {
          visited.add(j);
          cluster.push(j);
          queue.push(j);
        }
      }
    }
    
    if (cluster.length >= 2) {
      // Calculate center
      let cx = 0, cz = 0;
      for (const idx of cluster) {
        cx += crys_data[idx].x;
        cz += crys_data[idx].z;
      }
      clusters.push({
        indices: cluster,
        x: cx / cluster.length,
        z: cz / cluster.length,
        radius: 10 + cluster.length * 2
      });
    }
  }
}

export function updateCrystalResonance(dt, playerPos) {
  if (!initialized || muted || !playerPos) return;

  let nearestIdx = -1;
  let minDistSq = Infinity;

  for (let i = 0; i < clusters.length; i++) {
    const c = clusters[i];
    const dx = c.x - playerPos.x, dz = c.z - playerPos.z;
    const d2 = dx * dx + dz * dz;
    const r2 = c.radius * c.radius;
    if (d2 < r2 && d2 < minDistSq) {
      minDistSq = d2;
      nearestIdx = i;
    }
  }

  if (nearestIdx !== activeClusterIdx) {
    if (nearestIdx === -1) {
      stopClusterHarmonies();
    } else {
      startClusterHarmonies(nearestIdx);
    }
    activeClusterIdx = nearestIdx;
  }

  if (activeClusterIdx !== -1) {
    const c = clusters[activeClusterIdx];
    const dist = Math.sqrt(minDistSq);
    const intensity = 1.0 - Math.min(dist / c.radius, 1.0);
    
    for (let i = 0; i < clusterGains.length; i++) {
      const targetVol = intensity * (i === 0 ? 0.04 : 0.02);
      clusterGains[i].gain.setTargetAtTime(targetVol, ctx.currentTime, 0.1);
    }

    // Phase 2: Emit resonance event for visual feedback
    emit(Events.CRYSTAL_CHAIN, {
      indices: c.indices,
      intensity: intensity,
      chainSize: currentChainSize
    });
  }
}

function startClusterHarmonies(idx) {
  stopClusterHarmonies();
  const cluster = clusters[idx];
  currentChainSize = cluster.indices.length;
  const now = ctx.currentTime;

  // Root drone
  const rootFreq = noteFreq(0, -2);
  addHarmonicLayer(rootFreq, 0.04, 'sine');

  // Harmonized layers based on chain size
  if (currentChainSize >= 3) {
    addHarmonicLayer(noteFreq(2, -2), 0.02, 'sine'); // Fifth
  }
  if (currentChainSize >= 5) {
    addHarmonicLayer(noteFreq(4, -1), 0.015, 'triangle'); // Octave + Third
  }
  if (currentChainSize >= 8) {
    addHarmonicLayer(noteFreq(7, -1), 0.01, 'sine'); // Octave + Fifth
  }

  // Shimmer layer
  const shimmerOsc = ctx.createOscillator();
  shimmerOsc.type = 'sine';
  shimmerOsc.frequency.value = noteFreq(0, 1);
  const shimmerGain = ctx.createGain();
  shimmerGain.gain.value = 0;
  
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.2;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.005;
  lfo.connect(lfoGain).connect(shimmerGain.gain);
  
  shimmerOsc.connect(shimmerGain);
  connectWithReverb(shimmerGain, masterGain, 0.8);
  
  shimmerOsc.start(now);
  lfo.start(now);
  clusterNodes.push(shimmerOsc, lfo);
  clusterGains.push(shimmerGain);
}

function addHarmonicLayer(freq, vol, type) {
  const osc = ctx.createOscillator();
  osc.type = type;
  osc.frequency.value = freq;
  const gain = ctx.createGain();
  gain.gain.value = 0;
  osc.connect(gain);
  connectWithReverb(gain, masterGain, 0.6);
  osc.start();
  clusterNodes.push(osc);
  clusterGains.push(gain);
}

function stopClusterHarmonies() {
  const now = ctx.currentTime;
  for (const g of clusterGains) {
    g.gain.linearRampToValueAtTime(0, now + 1.0);
  }
  const nodes = clusterNodes;
  const gains = clusterGains;
  setTimeout(() => {
    for (const n of nodes) { try { n.stop(); n.disconnect(); } catch(e) {} }
    for (const g of gains) { try { g.disconnect(); } catch(e) {} }
  }, 1100);
  clusterNodes = [];
  clusterGains = [];
  currentChainSize = 0;
}
