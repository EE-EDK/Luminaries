// ================================================================
// Orb Store — bioluminescence boost state
// Canonical orb count: getQuestState().orbsFound (quest/questState.js)
// ================================================================
export let orbBoost = 1.15; // baseline +15%, then +5% per orb

export function setOrbBoost(val) {
  orbBoost = val;
}

export const reset = () => {
  orbBoost = 1.15;
};
