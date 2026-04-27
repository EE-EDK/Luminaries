// ================================================================
// Discovery Moments — First Encounter Rewards
// ================================================================
import { on, emit, Events } from '../kernel/eventBus.js';
import { getPerspective, isDiscovered, markDiscovered } from '../state/narrativeState.js';
import { DISCOVERY_LABELS, ORB_NARRATIVE, ORB_STAGE_HINTS } from '../quest/config.js';
import { getOrbsFound } from '../quest/questState.js';
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
  on(Events.ORB_COLLECTED, (d) => {
    showOrbDiscovery(d.orbsFound - 1);
    const perspective = getPerspective();
    const stageHints = ORB_STAGE_HINTS[perspective] || ORB_STAGE_HINTS.child;
    const nextHint = stageHints[Math.min(d.orbsFound, stageHints.length - 1)];
    if (nextHint && d.orbsFound < 5) {
      setTimeout(() => { showNarrativeText(nextHint, 5.5); }, 900);
    }
  });
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

// ================================================================
// Proximity-Based First Encounter Discoveries
// ================================================================
const DISCOVERY_RANGE_SQ = 64; // 8m squared

export function checkDiscoveries(pos, deers, puffs, jellies, moths, fairyRings, ponds) {
  const px = pos.x, pz = pos.z;
  checkEntityGroup(px, pz, deers, 'deer');
  checkEntityGroup(px, pz, puffs, 'puffling');
  checkEntityGroup(px, pz, jellies, 'jelly');
  checkEntityGroup(px, pz, moths, 'moth');
  checkEntityGroup(px, pz, fairyRings, 'fairyRing');
  checkEntityGroup(px, pz, ponds, 'pond');
}

function checkEntityGroup(px, pz, entities, key) {
  if (isDiscovered(key) || !entities || entities.length === 0) return;
  for (let i = 0; i < entities.length; i++) {
    const e = entities[i];
    const ep = e.position || e;
    const dx = (ep.x || 0) - px, dz = (ep.z || 0) - pz;
    if (dx * dx + dz * dz < DISCOVERY_RANGE_SQ) {
      showDiscovery(key);
      return;
    }
  }
}

// ================================================================
// Idle Hints — tiered clarity (cryptic → plain) from (1) stand-still time
// since last move and (2) how many idle hints we’ve already shown this run.
// ================================================================
// Slots: [0] explore · [1] hum · [2] quest / “orbs” · [3] fairy rings
const IDLE_HINTS_CHILD = [
  [
    'Something remembers the way by light alone—whose glow pulls you strongest?',
    'The bright hums recall old paths—cross the dim until a shine leans toward you.',
    'Walk toward the strongest biolights; answers pool where the forest shines loudest.',
    'Head for glowing mushrooms, crystals, and water—clues gather in the bright places.',
  ],
  [
    'Between silence and song the wood leans closer—what if you almost sang?',
    'The creatures know a breath that isn’t quite speech—stillness helps them hear you.',
    'Hold RIGHT-CLICK to hum softly; the grove listens for that thin thread of sound.',
    'Hold RIGHT-CLICK near friends—pufflings and others teach hums the gold will answer.',
  ],
  [
    'What fell from the gray needle as five sleeping coals, and wakes only for stolen voices?',
    'Five borrowed songs fit five hidden locks—the tower counts, but never tells which first.',
    'Five golden sun-seeds hide in the wild; each opens only to the creature lesson it names.',
    'Find five glowing orbs—carry puffling, jelly, deer, then moth songs to them in order.',
  ],
  [
    'Some circles of caps drink the heaviness from your thoughts—then the earth lets go.',
    'Old mushroom rings thin the mind’s weight—step through, and jumping feels like falling upward.',
    'In a restored fairy ring, your leap forgets the ground for a little while.',
    'Stand in an active mushroom circle to super-jump; restored sectors only.',
  ],
];
const IDLE_HINTS_ADULT = [
  [
    'Bioluminescent vectors imply objective gradients—follow ascending photon flux.',
    'Coherent glow clusters on non-random geometry—steer toward peak signature.',
    'Navigate toward dominant bioluminescence; mission-critical markers cluster there.',
    'Proceed toward high-glow features—mushroom beds, crystal chains, open water.',
  ],
  [
    'Sub-vocal carrier may couple to local fauna—test near-field harmonic injection.',
    'Fauna interface favors sustained sub-threshold tone—stillness improves SNR.',
    'RIGHT-CLICK: resonance tuning; maintain carrier until coupling locks.',
    'RIGHT-CLICK near micro-fauna to sample teachable frequencies for anchor handshake.',
  ],
  [
    'Lattice log: five dormant ignitions; each demands a specific borrowed bio-key.',
    'Five offline anchors—staged key schedule; obelisk enforces order without broadcasting it.',
    'Recover five orbital nodes; sequence fixed—match carrier species to stage index.',
    'Objective: five gold resonance orbs—pair each collection with the required carried frequency.',
  ],
  [
    'Hyphal loops compile transient boundary code—expect non-Newtonian hop gains.',
    'Closed mycelial meshes relax local g′—restored cells favor elevated jump integrals.',
    'Fairy-ring sectors: brief g attenuation; exploit for vertical mobility.',
    'Mechanic: mushroom circles grant super-jump + feather fall in restored zones.',
  ],
];

/** How many idle-hint lines we’ve shown this session (persists across short walks). */
let idleHintsShownSession = 0;
let lastHintIndex = -1;
let hintCooldown = 0;
let stageHintTimer = 0;
let lastStageHintOrbCount = -1;

const SEEK_HUD_LABELS = {
  child: [
    'The needle dreams of five stolen sparks...',
    'Five gold sleeps wait—each yields to a borrowed voice.',
    'Seek five sun-seeds; wake them in the grove’s order.',
    'Find five glowing orbs—match each stage’s creature song.',
  ],
  adult: [
    'Lattice: five dormant anchor ignitions.',
    'Five offline nodes—staged bio-keys required.',
    'Recover five resonance anchors in enforced order.',
    'Quest: five gold orbs—correct carrier per stage.',
  ],
};

/**
 * @param {number} idleTime seconds since last movement
 * @returns {number} 0 = most cryptic, 3 = most explicit
 */
export function getHintClarityTier(idleTime) {
  const base = Math.min(3, Math.max(0, Math.floor((idleTime - 15) / 40)));
  const sessionBump = Math.min(1, Math.floor(idleHintsShownSession / 5));
  return Math.min(3, base + sessionBump);
}

/** SEEK-phase HUD line — escalates with the same tier model as idle hints. */
export function getSeekHudLabel() {
  const perspective = getPerspective();
  const tier = getHintClarityTier(playerIdleTime);
  const rows = SEEK_HUD_LABELS[perspective] || SEEK_HUD_LABELS.child;
  return rows[tier];
}

export function checkIdleHints(idleTime) {
  const orbCount = getOrbsFound();
  if (orbCount !== lastStageHintOrbCount) {
    stageHintTimer = 0;
    lastStageHintOrbCount = orbCount;
  }
  if (orbCount < 5) {
    stageHintTimer += 0.016;
    if (stageHintTimer >= 300) {
      const perspective = getPerspective();
      const stageHints = ORB_STAGE_HINTS[perspective] || ORB_STAGE_HINTS.child;
      const nextHint = stageHints[Math.min(orbCount, stageHints.length - 1)];
      if (nextHint) showNarrativeText(nextHint, 5.0);
      stageHintTimer = 0;
      hintCooldown = Math.max(hintCooldown, 45);
      return;
    }
  }
  if (hintCooldown > 0) { hintCooldown -= 0.016; return; }
  if (idleTime < 15) return;
  const perspective = getPerspective();
  const table = perspective === 'child' ? IDLE_HINTS_CHILD : IDLE_HINTS_ADULT;
  const tier = getHintClarityTier(idleTime);
  lastHintIndex = (lastHintIndex + 1) % table.length;
  idleHintsShownSession += 1;
  const text = table[lastHintIndex][tier];
  showNarrativeText(text, tier >= 2 ? 5.2 : 4.2);
  hintCooldown = 30;
}

// ================================================================
// Orb Interaction Hints
// ================================================================
export function showOrbRejectHint() {
  const perspective = getPerspective();
  const orbCount = getOrbsFound();
  const stageHints = ORB_STAGE_HINTS[perspective] || ORB_STAGE_HINTS.child;
  const stageHint = stageHints[Math.min(orbCount, stageHints.length - 1)];
  const text = perspective === 'child'
    ? 'The orb doesn\'t like that sound...'
    : 'Frequency mismatch — recalibrate resonance';
  showNarrativeText(stageHint ? `${text} ${stageHint}` : text, 4.2);
}

export function showOrbListening() {
  const perspective = getPerspective();
  const text = perspective === 'child'
    ? 'The orb is listening...'
    : 'Node entering receptive state...';
  showNarrativeText(text, 2.5);
}
