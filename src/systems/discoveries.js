// ================================================================
// Discovery Moments — First Encounter Rewards
// ================================================================
import { on, emit, Events } from '../kernel/eventBus.js';
import { dualLine, dualText, pairAt, speak } from '../narrative/voice.js';
import { getPerspective, isDiscovered, isTruthRevealed, markDiscovered } from '../state/narrativeState.js';
import { DISCOVERY_LABELS, ORB_NARRATIVE, ORB_STAGE_HINTS, ORB_CREATURE_SEQUENCE, QuestPhases } from '../quest/config.js';
import { getOrbsFound } from '../quest/questState.js';
import { glyphs_data } from '../state/entityStore.js';
import { player, playerIdleTime } from '../core/player.js';
import { entityPosition } from '../utils/entityPos.js';

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
 * The render context: who is reading, and whether they have been shown that
 * both readings are true. Read fresh on every call — a line shown before the
 * wizard and a line shown after it are the same line in two different states.
 * @return {{voice:'child'|'adult', truthRevealed:boolean}}
 */
function ctx() {
  return { voice: getPerspective(), truthRevealed: isTruthRevealed() };
}

/**
 * The glossary key for a creature slot. ORB_CREATURE_SEQUENCE speaks in quest
 * keys ('puff', 'any'); the glossary's catch-all is 'carrier' because "any" is
 * not a thing the player can be told to go and find.
 * @param {string} questKey
 * @return {string}
 */
function creatureTerm(questKey) {
  return questKey === 'any' ? 'carrier' : (questKey || 'carrier');
}

/** The line currently on screen, kept so Tab can re-render it in the other
 *  voice without waiting for it to fade. Either a pair or a single string. */
let liveSet = null;
let liveText = null;

export function initDiscoveries() {
  discoveryEl = document.createElement('div');
  discoveryEl.id = 'discovery-text';
  discoveryEl.style.cssText =
    'position:fixed;top:28%;left:50%;transform:translateX(-50%);' +
    'font-family:Georgia,serif;font-size:calc(22px * var(--lumi-text-scale));color:#ccffee;' +
    'text-shadow:0 0 12px #44ffaa,0 0 30px #228866;' +
    'pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;' +
    'letter-spacing:3px;text-transform:uppercase;';
  document.body.appendChild(discoveryEl);

  // Subscribe to kernel events
  on(Events.ORB_COLLECTED, (d) => {
    showOrbDiscovery(d.orbsFound - 1);
    const i = Math.min(d.orbsFound, ORB_STAGE_HINTS.child.length - 1);
    const nextHint = pairAt(ORB_STAGE_HINTS.child, ORB_STAGE_HINTS.adult, i);
    if (d.orbsFound < 5) {
      setTimeout(() => { showNarrativePair(nextHint, 5.5); }, 900);
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

  // Tab, and the wizard's reveal, re-render whatever is on screen right now.
  // PERSPECTIVE_CHANGED has been emitted since the perspective toggle shipped
  // and until now had no subscriber that showed anything: a player who pressed
  // Tab mid-line watched the old voice finish its five seconds. The fade timer
  // is left alone — this is the same line, in the other register, not a new
  // one earning fresh reading time.
  on(Events.PERSPECTIVE_CHANGED, () => {
    if (fadeTimer <= 0) return;
    if (liveSet) {
      const { primary, secondary } = dualLine(liveSet, ctx());
      if (primary) renderDiscovery(primary, secondary);
    } else if (liveText) {
      fadeText = speak(liveText, getPerspective());
      if (discoveryEl) discoveryEl.textContent = fadeText;
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

  liveSet = labelSet; liveText = null;
  const { primary, secondary } = dualLine(labelSet, ctx());
  fadeTimer = dwellSec(5.0);
  renderDiscovery(primary, secondary);
  emit(Events.DISCOVERY, { key, text: fadeText, perspective });
}

export function showOrbDiscovery(orbIndex) {
  const set = pairAt(ORB_NARRATIVE.child, ORB_NARRATIVE.adult, orbIndex);
  const { primary, secondary } = dualLine(set, ctx());
  if (!primary) return;          // an index past the end of the table
  liveSet = set; liveText = null;
  fadeTimer = dwellSec(6.0);
  renderDiscovery(primary, secondary);
}

/** @brief Indices of revealed ground glyphs (for saves). */
export function getRevealedGlyphs() {
  const out = [];
  for (let i = 0; i < glyphs_data.length; i++) if (glyphs_data[i].revealed) out.push(i);
  return out;
}

/**
 * @brief Restore revealed glyphs without showing their discovery text.
 * The player already read it; a load should not replay 12 lines.
 * @param {number[]} indices
 */
export function restoreGlyphs(indices) {
  if (!Array.isArray(indices)) return false;
  for (const i of indices) {
    const g = glyphs_data[i];
    if (!g) continue;
    g.revealed = true;
    g.timer = 1.5;
    g.mat.opacity = 0.4;
  }
  return true;
}

export function showNarrativeText(text, duration) {
  // One choke point for control names and story terms: every single-voice
  // line passes here, so {hum}, {pitch} and {t:orb} come out right on a phone
  // and in the chosen register whether or not the author of that particular
  // string remembered either exists.
  //
  // Deliberately NOT routed through dualLine. One string is one voice: a line
  // whose only variable part is a control name would otherwise come out twice
  // after the reveal — "press F" above "F: carrier" — which is a rendering
  // fault wearing the costume of a second register. Surfaces that have two
  // real halves call showNarrativePair instead.
  liveText = text; liveSet = null;
  fadeText = speak(text, getPerspective());
  fadeTimer = dwellSec(duration ?? 5.0);
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

/**
 * @brief Is a line still on screen?
 *
 * For callers that queue lines and would rather wait their turn than cut
 * another one off: the fragments, which are the rarest text in the game and
 * the worst to lose half a sentence of.
 * @return {boolean}
 */
export function isNarrativeBusy() { return fadeTimer > 0; }

/**
 * @brief Show a {child, adult} pair — one voice now, both after the reveal.
 * @param {{child?:string, adult?:string}} set
 * @param {number} [duration] seconds before it fades
 */
export function showNarrativePair(set, duration) {
  const { primary, secondary } = dualLine(set, ctx());
  if (!primary) return;
  liveSet = set; liveText = null;
  fadeTimer = dwellSec(duration ?? 5.0);
  renderDiscovery(primary, secondary);
}

// The three endgame cards. The child half named the thing "the Obelisk",
// which is the word the source code uses for it and the word neither voice
// uses — the glossary's {t:obelisk} says "Big Crystal" to a child and
// "Central Archive Index" to a routine.
const ENDGAME = {
  finale:    { child: 'The {t:obelisk} Is Whole!',  adult: 'Structural Alignment Complete' },
  transform: { child: 'The Forest Is Awakening!',   adult: 'Planetary Biome Re-Initialization' },
  freeRoam:  { child: 'A New Dawn for the Forest',  adult: 'Stable Equilibrium Achieved' },
};

export function showFinaleText() { showNarrativePair(ENDGAME.finale, 8.0); }

export function showTransformText() { showNarrativePair(ENDGAME.transform, 10.0); }

export function showFreeRoamText() { showNarrativePair(ENDGAME.freeRoam, 12.0); }

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
    // Where the thing actually is — see entityPos.js for the origin bug this
    // closed. A record with no readable position is skipped, not treated as
    // standing at (0, 0).
    const ep = entityPosition(entities[i]);
    if (!ep) continue;
    const dx = ep.x - px, dz = ep.z - pz;
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
    '{humInstruction} — the grove listens for that thin thread of sound.',
    '{hum} near friends and sweep pitch with {pitch} — pufflings and others teach hums the gold will answer.',
  ],
  [
    'What fell from the gray needle as five sleeping coals, and wakes only for stolen voices?',
    'Five borrowed songs fit five hidden locks—the tower counts, but never tells which first.',
    'Five golden {t:orbs|lower} hide in the wild; each opens only to the creature lesson it names.',
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
    '{hum} injection; {pitch} pitch; maintain carrier until coupling locks.',
    '{hum} near micro-fauna to sample teachable frequencies; {pitch} for anchor-frequency handshake.',
  ],
  [
    'Lattice log: five dormant ignitions; each demands a specific borrowed bio-key.',
    'Five offline anchors—staged key schedule; the {t:obelisk} enforces order without broadcasting it.',
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
    'Seek five {t:orbs|lower}; wake them in the grove’s order.',
    'Find a {creature}—borrow its hum, then touch the orb.',
  ],
  adult: [
    'Lattice: five dormant anchor ignitions.',
    'Five offline nodes—staged bio-keys required.',
    'Recover five {t:orbs|lower} in enforced order.',
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
/**
 * @param {number} [idleTime] seconds since last movement. Injectable because
 *   the most explicit tier — the only one that names a species — needs over
 *   two minutes of standing still to reach, and a gate that waited that long
 *   would instead be a gate that checked the cryptic tier and called it done.
 */
export function getSeekHudLabel(idleTime = playerIdleTime) {
  const tier = getHintClarityTier(idleTime);
  const set = pairAt(SEEK_HUD_LABELS.child, SEEK_HUD_LABELS.adult, tier);
  // {creature} becomes a glossary token rather than a looked-up name, so each
  // half names the species in its own register — "moon moth" above "orbital
  // pollinator" — instead of both halves carrying whichever one the current
  // perspective happened to pick.
  const orbCount = getOrbsFound();
  const questKey = ORB_CREATURE_SEQUENCE[Math.min(orbCount, ORB_CREATURE_SEQUENCE.length - 1)] || 'any';
  const token = `{t:${creatureTerm(questKey)}}`;
  const withName = (t) => (t ? t.replace('{creature}', token) : t);
  // The HUD title is one text node: no room for a subtitle, so both registers
  // land on the one line once the veil is lifted.
  return dualText({ child: withName(set.child), adult: withName(set.adult) }, ctx());
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
      const i = Math.min(orbCount, ORB_STAGE_HINTS.child.length - 1);
      showNarrativePair(pairAt(ORB_STAGE_HINTS.child, ORB_STAGE_HINTS.adult, i), 5.0);
      stageHintTimer = 0;
      hintCooldown = Math.max(hintCooldown, 45);
      return;
    }
  }
  if (hintCooldown > 0) { hintCooldown -= dt; return; }
  if (idleTime < 15) return;
  const tier = getHintClarityTier(idleTime);
  // The two hint tables are parallel: same four slots, same four tiers. The
  // rotation is over slots and must stay in step across a perspective change,
  // so it is indexed once and both halves come from the same cell.
  lastHintIndex = (lastHintIndex + 1) % IDLE_HINTS_CHILD.length;
  idleHintsShownSession += 1;
  showNarrativePair(pairAt(IDLE_HINTS_CHILD[lastHintIndex], IDLE_HINTS_ADULT[lastHintIndex], tier),
    tier >= 2 ? 5.2 : 4.2);
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
  // Species names are glossary tokens, not names looked up in the current
  // perspective: the adult half of this pair has to say "biological
  // metronome" even while the child half above it says "deer".
  const want = `{t:${creatureTerm(required)}}`;
  const have = `{t:${creatureTerm(got)}}`;

  let set;
  if (got === null || got === undefined) {
    // No carrier at all — name the species to go and find.
    set = {
      child: `The {t:orb|lower} hums quietly... seek a ${want} and hum with it first`,
      adult: `No carrier frequency — attune to ${want} before approaching`,
    };
  } else if (required === 'any') {
    // An 'any' slot refusing a carrier should not happen; say something true.
    set = {
      child: 'The {t:orb|lower} hums quietly... it wants to hear you hum back',
      adult: 'No carrier frequency detected — initiate spirit hum ({hum})',
    };
  } else {
    // Wrong creature — name what they are carrying and what is wanted.
    set = {
      child: `The {t:orb|lower} doesn't know that voice... it listens for a ${want}`,
      adult: `Frequency mismatch — ${have} signal rejected; ${want} signature required`,
    };
  }
  showNarrativePair(set, 4.2);

  // Then, ~9 s later, the poetic stage hint for where they are in the quest.
  const i = Math.min(getOrbsFound(), ORB_STAGE_HINTS.child.length - 1);
  const stageHint = pairAt(ORB_STAGE_HINTS.child, ORB_STAGE_HINTS.adult, i);
  // Reset the timer so the next proactive hint does not double-fire.
  stageHintTimer = 0;
  setTimeout(() => { showNarrativePair(stageHint, 5.0); }, 9000);
}

export function showOrbListening() {
  showNarrativePair({
    child: 'The {t:orb|lower} is listening...',
    adult: 'Node entering receptive state...',
  }, 2.5);
}
