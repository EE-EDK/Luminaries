// ================================================================
// Magical Store — state for world-wide magical phenomena
// ================================================================
export let bubblePulseTimer = 0;
export let bubblePulsePos = { x: 0, z: 0 };

export function setBubblePulse(x, z) {
  bubblePulseTimer = 2.0;
  bubblePulsePos.x = x;
  bubblePulsePos.z = z;
}

export function decayBubblePulse(dt) {
  if (bubblePulseTimer > 0) bubblePulseTimer -= dt;
}

export const lastVisitedCrystals = [];
export let crystalChainTimer = 0;
export let crystalChainPos = { x: 0, z: 0 };

export function addVisitedCrystal(idx) {
  if (lastVisitedCrystals[lastVisitedCrystals.length - 1] === idx) return false;
  lastVisitedCrystals.push(idx);
  if (lastVisitedCrystals.length > 5) lastVisitedCrystals.shift();
  return true;
}

export function setCrystalChainBoost(x, z) {
  crystalChainTimer = 5.0;
  crystalChainPos.x = x;
  crystalChainPos.z = z;
}

export function decayCrystalChain(dt) {
  if (crystalChainTimer > 0) crystalChainTimer -= dt;
}

export const reset = () => {
  bubblePulseTimer = 0;
  bubblePulsePos.x = 0;
  bubblePulsePos.z = 0;
  lastVisitedCrystals.length = 0;
  crystalChainTimer = 0;
  crystalChainPos.x = 0;
  crystalChainPos.z = 0;
};
