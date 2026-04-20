// ================================================================
// Orb Store — progression and bioluminescence boost state
// ================================================================
export let orbBoost = 1.15; // baseline +15%, then +5% per orb
export let orbsFound = 0;

export function setOrbBoost(val) {
  orbBoost = val;
}

export function setOrbsFound(val) {
  orbsFound = val;
}

export const reset = () => {
  orbBoost = 1.15;
  orbsFound = 0;
};
