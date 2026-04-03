// ================================================================
// Game State — shared reactive state that crosses system boundaries
// ================================================================
// Owns timers and values read/written by multiple systems (attunement,
// spirit hum, fauna, player visuals). Single source of truth.

// Dimming / orb progression
export let orbBoost = 1.15; // baseline +15%, then +5% per orb
export function setOrbBoost(val) { orbBoost = val; }

// Attunement visual state
export let attuneFlashTimer = 0;
export let attuneFlashType = null;
export let echoTimer = 0;
export function setAttuneFlash(timer, type) { attuneFlashTimer = timer; attuneFlashType = type; }
export function decayAttuneFlash(dt) { if (attuneFlashTimer > 0) attuneFlashTimer -= dt; }
export function setEchoTimer(val) { echoTimer = val; }
export function decayEchoTimer(dt) { if (echoTimer > 0) echoTimer -= dt; }

// Spirit hum resonance (written by spiritHumVisuals, read by fauna)
export let humResonanceType = null;
export let humResonanceStr = 0;
export function setHumResonance(type, str) { humResonanceType = type; humResonanceStr = str; }

// Feather fall (fairy ring super-jump)
export let featherFallTimer = 0;
export function setFeatherFallTimer(val) { featherFallTimer = val; }
export function decayFeatherFall(dt) { if (featherFallTimer > 0) featherFallTimer -= dt; }

// Bubble pop rewards (Phase 2)
export let bubblePulseTimer = 0;
export let bubblePulsePos = { x: 0, z: 0 };
export function setBubblePulse(x, z) { bubblePulseTimer = 2.0; bubblePulsePos.x = x; bubblePulsePos.z = z; }
export function decayBubblePulse(dt) { if (bubblePulseTimer > 0) bubblePulseTimer -= dt; }

// Crystal resonance chains (Phase 2)
export const lastVisitedCrystals = [];
export let crystalChainTimer = 0;
export let crystalChainPos = { x: 0, z: 0 };
export function addVisitedCrystal(idx) {
  if (lastVisitedCrystals[lastVisitedCrystals.length - 1] === idx) return false;
  lastVisitedCrystals.push(idx);
  if (lastVisitedCrystals.length > 5) lastVisitedCrystals.shift();
  return true;
}
export function setCrystalChainBoost(x, z) { crystalChainTimer = 5.0; crystalChainPos.x = x; crystalChainPos.z = z; }
export function decayCrystalChain(dt) { if (crystalChainTimer > 0) crystalChainTimer -= dt; }

// Nearest creature tracking lives in systems/registration.js (nearest export)
