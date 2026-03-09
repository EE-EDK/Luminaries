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

// Nearest creature tracking lives in systems/registration.js (nearest export)
