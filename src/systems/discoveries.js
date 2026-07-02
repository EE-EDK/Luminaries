// ================================================================
// Discovery Moments — First Encounter Rewards
// ================================================================
import { on, emit, Events } from '../kernel/eventBus.js';
import { getPerspective, isDiscovered, isTruthRevealed, markDiscovered } from '../state/narrativeState.js';
import { DISCOVERY_LABELS, ORB_NARRATIVE, ORB_STAGE_HINTS, ORB_CREATURE_SEQUENCE, CREATURE_NAMES, QuestPhases } from '../quest/config.js';
import { getOrbsFound } from '../quest/questState.js';
import { glyphs_data } from '../state/entityStore.js';
import { player, playerIdleTime } from '../core/player.js';

/** Multiplier for on-screen narrative / discovery copy so lines remain readable (intro uses separate timings). */
export const READ_DWELL_MULT = 1.5;

let discoveryEl = null;
let fadeTimer = 0;
let fadeText = '';

function dwellSec(base) {
  return base * READ_DWELL_MULT;
}

/**
 * Renders the discovery overlay. When `secondary` is provided (the
 * wizard has lifted the veil — both worlds visible at once), it is shown
 * as a smaller subtitle beneath the primary line. Otherwise plain text.
 */
function renderDiscovery(primary, secondary) {
  fadeText = secondary ? `${primary} / ${secondary}` : primary;
  if (!discoveryEl) return;
  if (secondary) {
    discoveryEl.innerHTML =
      `${primary}<span style="display:block;margin-top:6px;` +
      `font-size:0.62em;letter-spacing:2px;color:#a8d8ff;` +
      `text-shadow:0 0 10px #3399ff;opacity:0.85;">${secondary}</span>`;
  } else {
    discoveryEl.textContent = primary;
  }
  discoveryEl.style.opacity = '1';
}

/**
 * Picks the dual-narrative line(s) from a {child, adult} label set.
 * Once the truth is revealed, both lines are shown (child primary,
 * adult secondary). Before that, only the active perspective's line.
 * @returns {{primary: string, secondary: string|null}}
 */
function dualLine(set) {
  const child = set.child;
  const adult = set.adult;
  if (isTruthRevealed() && child && adult && child !== adult) {
    return { primary: child, secondary: adult };
  }
  const perspective = getPerspective();
  return { primary: set[perspective] || child, secondary: null };
}

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

  // Endgame overlay text — QUEST_PHASE was emitted by questState.js but had no
  // subscriber, so the finale/transform/free-roam lines never displayed.
  on(Events.QUEST_PHASE, (d) => {
    if (d.phase === QuestPhases.FINALE) showFinaleText();
    else if (d.phase === QuestPhases.TRANSFORM) showTransformText();
    else if (d.phase === QuestPhases.FREE_ROAM) showFreeRoamText();
  });

  // Crystal resonance chain discovery — CRYSTAL_VISITED (updates/vegetation.js,
  // chain of ≥3 crystals) previously had no listener, making the 'crystalChain'
  // discovery label unreachable.
  on(Events.CRYSTAL_VISITED, () => showDiscovery('crystalChain'));
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

  const { primary, secondary } = dualLine(labelSet);
  fadeTimer = dwellSec(5.0);
  renderDiscovery(primary, secondary);
  emit(Events.DISCOVERY, { key, text: fadeText, perspective });
}

export function showOrbDiscovery(orbIndex) {
  const childText = ORB_NARRATIVE.child[orbIndex];
  const adultText = ORB_NARRATIVE.adult[orbIndex];
  const { primary, secondary } = dualLine({ child: childText, adult: adultText });
  if (!primary) return;
  fadeTimer = dwellSec(6.0);
  renderDiscovery(primary, secondary);
}

export function showNarrativeText(text, duration) {
  fadeText = text;
  fadeTimer = dwellSec(duration ?? 5.0);
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
    'Press F to hum softly, then Q or E to sweep the pitch — the grove listens for that thin thread of sound.',
    'Press F near friends and sweep pitch with Q or E — pufflings and others teach hums the gold will answer.',
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
    'F: carrier injection; Q/E: sweep pitch; maintain carrier until coupling locks.',
    'F near micro-fauna to sample teachable frequencies; Q/E for anchor-frequency sweep handshake.',
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

// Tiers 0-2 are poetic/cryptic; tier 3 uses a {creature} placeholder filled at runtime.
const SEEK_HUD_LABELS = {
  child: [
    'The needle dreams of five stolen sparks...',
    'Five gold sleeps wait—each yields to a borrowed voice.',
    'Seek five sun-seeds; wake them in the grove’s order.',
    'Find a {creature}—borrow its hum, then touch the orb.',
  ],
  adult: [
    'Lattice: five dormant anchor ignitions.',
    'Five offline nodes—staged bio-keys required.',
    'Recover five resonance anchors in enforced order.',
    'Attune to {creature}, then collect the next orb.',
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

/** SEEK-phase HUD line — escalates with the same tier model as idle hints.
 *  Tier 3 (most explicit) injects the required creature name so a stuck player
 *  eventually sees the concrete species they need to attune to. */
export function getSeekHudLabel() {
  const perspective = getPerspective();
  const tier = getHintClarityTier(playerIdleTime);
  const rows = SEEK_HUD_LABELS[perspective] || SEEK_HUD_LABELS.child;
  let label = rows[tier];
  if (label && label.indexOf('{creature}') !== -1) {
    const orbCount = getOrbsFound();
    const creatureKey = ORB_CREATURE_SEQUENCE[Math.min(orbCount, ORB_CREATURE_SEQUENCE.length - 1)] || 'any';
    const names = CREATURE_NAMES[perspective] || CREATURE_NAMES.child;
    const creatureName = names[creatureKey] || creatureKey;
    label = label.replace('{creature}', creatureName);
  }
  return label;
}

/**
 * @param {number} idleTime seconds since last movement
 * @param {number} [dt=0.016] wall-clock seconds elapsed since the last call.
 *   Passed explicitly so this check can run on a throttled (N-frame) cadence
 *   without its hint/cooldown timers drifting — the caller accumulates dt across
 *   skipped frames. Defaults to a 60 FPS frame so existing call sites are unchanged.
 */
export function checkIdleHints(idleTime, dt = 0.016) {
  const orbCount = getOrbsFound();
  if (orbCount !== lastStageHintOrbCount) {
    stageHintTimer = 0;
    lastStageHintOrbCount = orbCount;
  }
  if (orbCount < 5) {
    stageHintTimer += dt;
    if (stageHintTimer >= 60) {
      const perspective = getPerspective();
      const stageHints = ORB_STAGE_HINTS[perspective] || ORB_STAGE_HINTS.child;
      const nextHint = stageHints[Math.min(orbCount, stageHints.length - 1)];
      if (nextHint) showNarrativeText(nextHint, 5.0);
      stageHintTimer = 0;
      hintCooldown = Math.max(hintCooldown, 45);
      return;
    }
  }
  if (hintCooldown > 0) { hintCooldown -= dt; return; }
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
/**
 * Shown when the player touches an orb but doesn't have the right frequency.
 * @param {string} required  creature key required by this orb ('jelly'|'deer'|'moth'|'puff'|'any')
 * @param {string|null} got  creature key the player is carrying, or null if no carrier
 */
export function showOrbRejectHint(required, got) {
  const perspective = getPerspective();
  const names = CREATURE_NAMES[perspective] || CREATURE_NAMES.child;
  const requiredName = names[required] || required || 'a forest friend';

  let rejectText;
  if (got === null || got === undefined) {
    // No carrier at all — tell them which species to find
    rejectText = perspective === 'child'
      ? `The orb hums quietly... seek a ${requiredName} and hum with it first`
      : `No carrier frequency — attune to ${requiredName} before approaching`;
  } else if (required === 'any') {
    // 'any' slot rejected — shouldn't normally happen; fall back gracefully
    rejectText = perspective === 'child'
      ? 'The orb hums quietly... it wants to hear you hum back'
      : 'No carrier frequency detected — initiate spirit hum [F]';
  } else {
    // Wrong creature — name both what they have and what's needed
    const gotName = names[got] || got;
    rejectText = perspective === 'child'
      ? `The orb doesn't know that voice... it listens for a ${requiredName}`
      : `Frequency mismatch — ${gotName} signal rejected; ${requiredName} signature required`;
  }

  // First call: show the reject reason immediately
  showNarrativeText(rejectText, 4.2);

  // Second call: follow up ~9 s later with the poetic stage hint
  const orbCount = getOrbsFound();
  const stageHints = ORB_STAGE_HINTS[perspective] || ORB_STAGE_HINTS.child;
  const stageHint = stageHints[Math.min(orbCount, stageHints.length - 1)];
  if (stageHint) {
    // Reset stage hint timer so the next proactive hint doesn't double-fire too soon
    stageHintTimer = 0;
    setTimeout(() => { showNarrativeText(stageHint, 5.0); }, 9000);
  }
}

export function showOrbListening() {
  const perspective = getPerspective();
  const text = perspective === 'child'
    ? 'The orb is listening...'
    : 'Node entering receptive state...';
  showNarrativeText(text, 2.5);
}
