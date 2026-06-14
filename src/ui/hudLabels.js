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
 * @param {function():string} [seekLabelFn] optional callback that returns the
 *   tiered SEEK-phase label (from discoveries.getSeekHudLabel). When provided
 *   and questPhase is 'SEEK', its return value is used instead of the static
 *   fallback — so a stuck player eventually sees the required creature name.
 */
export function formatQuestHudTitle(questPhase, seekLabelFn) {
  if (questPhase === 'SEEK') {
    return (seekLabelFn && seekLabelFn()) || 'Seek the orbs...';
  }
  return questPhase === 'RISING'
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
