// ================================================================
// Discovery Moments — First Encounter Rewards
// ================================================================
import { on, emit, Events } from '../kernel/eventBus.js';
import { getPerspective, isDiscovered, markDiscovered } from '../state/narrativeState.js';
import { DISCOVERY_LABELS, ORB_NARRATIVE } from '../quest/config.js';
import { glyphs_data } from '../state/entityStore.js';
import { player, playerIdleTime } from '../core/player.js';

let discoveryEl = null;
let fadeTimer = 0;
let fadeText = '';

export function initDiscoveries() {
  discoveryEl = document.createElement('div');
  discoveryEl.id = 'discovery-text';
  discoveryEl.style.cssText =
    'position:fixed;top:28%;left:50%;transform:translateX(-50%);' +
    'font-family:Georgia,serif;font-size:22px;color:#ccffee;' +
    'text-shadow:0 0 12px #44ffaa,0 0 30px #228866;' +
    'pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;' +
    'letter-spacing:3px;text-transform:uppercase;';
  document.body.appendChild(discoveryEl);

  // Subscribe to kernel events
  on(Events.ORB_COLLECTED, (d) => { showOrbDiscovery(d.orbsFound - 1); });
}

export function updateDiscoveries(dt, t) {
  if (fadeTimer > 0) {
    fadeTimer -= dt;
    if (fadeTimer <= 0 && discoveryEl) {
      discoveryEl.style.opacity = '0';
    }
  }

  // Ground Glyphs / Discovery Markers Reveal Logic
  const px = player.pos.x, pz = player.pos.z;
  for (let i = 0; i < glyphs_data.length; i++) {
    const g = glyphs_data[i];
    if (g.revealed) {
      // Gentle pulse while revealed
      g.mat.opacity = 0.4 + Math.sin(t * 2.0 + i) * 0.1;
      continue;
    }
    
    const dx = g.x - px, dz = g.z - pz;
    const d2 = dx * dx + dz * dz;
    
    // Reveal condition: within 3m AND idle for 2+ seconds
    if (d2 < 9 && playerIdleTime > 2.0) {
      g.timer += dt;
      if (g.timer > 1.5) { // 1.5s additional holding time to reveal
        g.revealed = true;
        showDiscovery('glyph'); // Generic glyph discovery
        emit(Events.DISCOVERY, { type: 'glyph', id: i });
      }
      // Faint preview glow while charging
      g.mat.opacity = Math.min(g.timer / 1.5, 0.4);
    } else {
      // Decay charge if player moves away or breaks idle
      g.timer = Math.max(g.timer - dt * 2, 0);
      g.mat.opacity = Math.min(g.timer / 1.5, 0.4);
    }
  }
}

export function showDiscovery(key) {
  if (isDiscovered(key)) return;
  markDiscovered(key);
  
  const perspective = getPerspective();
  const labelSet = DISCOVERY_LABELS[key];
  if (!labelSet) return;

  fadeText = labelSet[perspective] || labelSet.child;
  fadeTimer = 5.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
  emit(Events.DISCOVERY, { key, text: fadeText, perspective });
}

export function showOrbDiscovery(orbIndex) {
  const perspective = getPerspective();
  const textSet = ORB_NARRATIVE[perspective] || ORB_NARRATIVE.child;
  const text = textSet[orbIndex];
  if (!text) return;
  fadeText = text;
  fadeTimer = 6.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

export function showNarrativeText(text, duration) {
  fadeText = text;
  fadeTimer = duration || 5.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

export function showFinaleText() {
  const perspective = getPerspective();
  const text = perspective === 'child' ? 'The Obelisk Is Whole!' : 'Structural Alignment Complete';
  showNarrativeText(text, 8.0);
}

export function showTransformText() {
  const perspective = getPerspective();
  const text = perspective === 'child' ? 'The Forest Is Awakening!' : 'Planetary Biome Re-Initialization';
  showNarrativeText(text, 10.0);
}

export function showFreeRoamText() {
  const perspective = getPerspective();
  const text = perspective === 'child' ? 'A New Dawn for the Forest' : 'Stable Equilibrium Achieved';
  showNarrativeText(text, 12.0);
}
