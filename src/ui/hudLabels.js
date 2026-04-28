/**
 * @file hudLabels.js
 * @brief Pure string helpers for HUD copy (unit-tested). DOM assembly stays in hud.js.
 */

export const PHASE_LABELS = {
  DUSK: 'Dusk',
  NIGHT: 'Night',
  DEEP_NIGHT: 'Deep Night',
  DAWN: 'Dawn',
};

export const WEATHER_LABELS = {
  CLEAR: 'Clear',
  MISTY: 'Misty',
  LIGHT_RAIN: 'Light Rain',
  HEAVY_RAIN: 'Heavy Rain',
  FOG_BANK: 'Fog',
  LUMINOUS_STORM: 'Storm',
};

/**
 * @param {string} questPhase exported quest phase id (e.g. SEEK, RISING)
 */
export function formatQuestHudTitle(questPhase) {
  return questPhase === 'SEEK'
    ? 'Seek the orbs...'
    : questPhase === 'RISING'
      ? 'The obelisk stirs...'
      : questPhase === 'COMPLETE'
        ? 'Convergence!'
        : 'Luminaries';
}

export function formatDayPhaseLabel(timePhase, labels = PHASE_LABELS) {
  return labels[timePhase] || 'Night';
}

export function formatWeatherLabel(weatherState, labels = WEATHER_LABELS) {
  return labels[weatherState] || 'Clear';
}
