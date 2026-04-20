// ================================================================
// Spirit Hum Store — resonance state between player and creatures
// ================================================================
export let humResonanceType = null;
export let humResonanceStr = 0;

export function setHumResonance(type, str) {
  humResonanceType = type;
  humResonanceStr = str;
}

export const reset = () => {
  humResonanceType = null;
  humResonanceStr = 0;
};
