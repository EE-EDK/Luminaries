// ================================================================
// Crystal Visuals Update — Coupled to Audio Resonance Chains
// ================================================================
import { on, Events } from '../kernel/eventBus.js';
import { crys_data } from '../state/entityStore.js';

let activeIndices = [];
let targetIntensity = 0;
let currentIntensity = 0;

export function initCrystalVisuals() {
  // Listen for crystal resonance events from the audio system
  on(Events.CRYSTAL_CHAIN, (data) => {
    activeIndices = data.indices;
    targetIntensity = data.intensity;
  });
}

export function updateCrystalVisuals(dt, t) {
  // Smoothly lerp intensity for visual fluidity
  currentIntensity += (targetIntensity - currentIntensity) * dt * 3.0;
  
  // We don't want to reset targetIntensity to 0 every frame because 
  // the audio system only emits when a cluster is active.
  // However, if the audio system stops emitting (cluster inactive),
  // we need a way to fade out.
  // Actually, the audio system emits every frame while active.
  // To handle fade out, we can decay targetIntensity if no event was received.
  // But a better way is for the audio system to emit intensity 0 when stopping.
  // Let's check stopClusterHarmonies in audio/crystals.js.
  
  // Update all crystals. Only those in activeIndices get the pulse.
  for (let i = 0; i < crys_data.length; i++) {
    const crys = crys_data[i];
    const mat = crys.mat;
    
    let pulseIdx = activeIndices.indexOf(i);
    if (pulseIdx !== -1) {
      // In a resonance chain! Pulse in sequence based on index position in chain.
      // Offset pulse by index to create a "wave" effect through the cluster.
      const seqOffset = pulseIdx * 0.5;
      const pulse = Math.sin(t * 4.0 - seqOffset) * 0.5 + 0.5;
      const boost = currentIntensity * (0.5 + pulse * 1.5);
      mat.emissiveIntensity = 1.0 + boost;
      
      // Scale pulse slightly
      const sc = 1.0 + currentIntensity * 0.05 * pulse;
      crys.group.scale.setScalar(sc);
    } else {
      // Idle pulse
      const idle = Math.sin(t * 1.5 + crys.phase) * 0.2 + 0.8;
      mat.emissiveIntensity = idle;
      crys.group.scale.setScalar(1.0);
    }
  }
  
  // Decay targetIntensity slightly each frame in case audio stops emitting
  targetIntensity *= Math.pow(0.1, dt);
}
