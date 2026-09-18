// ================================================================
// World snapshot — read the live game into a save, and back again
// ================================================================
// This is the only module that knows both the save schema and the game
// systems. saveState.js owns the envelope and storage; this owns the ORDER.
//
// The order below is not arbitrary. Restoring by replaying events (the obvious
// shortcut, since debugGrantOrbs already exists) fires ORB_COLLECTED per orb,
// and that one event drives a restoration wave, a constellation fade, a rune
// fade, an orb burst, a resonance drone, discovery text and a camera pan. A
// player who loads a save has already seen all of that. Every step here sets
// state directly and emits nothing; the visual modules have matching `instant`
// entry points so the world looks lived-in on the very first frame.

import { ORB_N } from '../constants.js';
import { on, Events } from '../kernel/eventBus.js';
import { getBootSeed } from '../utils/rng.js';
import { SaveError } from './saveState.js';

import { getQuestSnapshot, restoreQuestState, getQuestPhase, getOrbsFound } from '../quest/questState.js';
import { restoreQuestVisuals } from '../quest/questVisuals.js';
import { setSectorRestored, prepareLocalGlowFrame } from '../systems/dimming.js';
import { revealConstellation, getWishesTriggered, setWishesTriggered } from '../world/sky.js';
import { syncCameraPanOrbs } from '../updates/playerVisuals.js';
import {
  getPerspective, isTruthRevealed, getDiscoveredKeys, restoreNarrative,
} from './narrativeState.js';
import { getRevealedGlyphs, restoreGlyphs } from '../systems/discoveries.js';
import { isWizardEncounterDone, setWizardEncounterDone } from '../systems/wizardPufflingEvent.js';
import { getWorldTime, setWorldTime } from '../systems/dayNightCycle.js';
import { getWeatherSnapshot, restoreWeatherSnapshot, WEATHER_STATE_NAMES } from '../systems/weather.js';
import { player } from '../core/player.js';
import { EYE_H } from '../constants.js';
import { yaw, pitch, setYaw, setPitch, unlockTruthControlHint } from '../core/input.js';
import { getGroundY } from '../world/terrain.js';
import { getPlayerFrequency, restorePlayerFrequency, getJellyPostTimerRaw } from '../systems/attunement.js';
import { isAudioInitialized, playLaserHum, startResonanceDrone } from '../systems/audio.js';
import { QuestPhases } from '../quest/config.js';
import { getQuestState } from '../quest/questState.js';

/** Validation options for saveState — the weather whitelist lives in weather.js. */
export const validateOpts = { weatherStates: WEATHER_STATE_NAMES };

/**
 * @brief Read the live game into a save-shaped snapshot (no envelope).
 * @return {object} snapshot for makeSaveEnvelope
 */
export function buildSnapshot() {
  return {
    quest: getQuestSnapshot(),
    world: {
      time: getWorldTime(),
      weather: getWeatherSnapshot(),
      wishes: getWishesTriggered(),
    },
    narrative: {
      perspective: getPerspective(),
      truthRevealed: isTruthRevealed(),
      wizardDone: isWizardEncounterDone(),
      discovered: getDiscoveredKeys(),
      glyphs: getRevealedGlyphs(),
    },
    player: {
      x: player.pos.x,
      z: player.pos.z,
      yaw,
      pitch,
      frequency: getPlayerFrequency() || null,
      jellyTimer: Math.min(getJellyPostTimerRaw(), 600),
    },
  };
}

/**
 * @brief Push a validated save back into the live game.
 *
 * Call after every boot init (populate → initDimming → initQuestState →
 * initQuestVisuals) and before the intro hands over. Throws SaveError when the
 * save belongs to a different world.
 * @param {object} snap a save validated by saveState.readSave
 * @param {{autosave?:{suspend:Function, resume:Function}}} [deps]
 */
export function applySnapshot(snap, deps = {}) {
  const autosave = deps.autosave || null;
  if (autosave) autosave.suspend();
  try {
    if (snap.seed !== undefined && snap.seed !== getBootSeed()) {
      throw new SaveError(`save is from seed ${snap.seed}, this world is seed ${getBootSeed()}`);
    }

    // 1. Progression first — everything below reads it.
    restoreQuestState(snap.quest);

    // 2. Restoration: sectors already swept, waves finished.
    for (const c of snap.quest.collected) setSectorRestored(c.orbIndex, { instant: true });
    prepareLocalGlowFrame();

    // 3. Sky: constellations already faded in, wishes already spent.
    for (let i = 0; i < snap.quest.collected.length && i < ORB_N; i++) {
      revealConstellation(i, { instant: true });
    }
    setWishesTriggered(snap.world.wishes);

    // 4. Obelisk, runes, lasers, HUD.
    restoreQuestVisuals();

    // 5. Tell the constellation pan these orbs are old news, before the first frame.
    syncCameraPanOrbs(getOrbsFound());

    // 6. Narrative: what the player knows, silently.
    restoreNarrative(snap.narrative);
    restoreGlyphs(snap.narrative.glyphs);
    if (snap.narrative.truthRevealed) unlockTruthControlHint();
    if (snap.narrative.wizardDone) setWizardEncounterDone();

    // 7. Clock and weather.
    setWorldTime(snap.world.time);
    restoreWeatherSnapshot(snap.world.weather);

    // 8. The player themselves.
    const gy = getGroundY(snap.player.x, snap.player.z);
    player.pos.set(snap.player.x, gy + EYE_H, snap.player.z);
    player.vel.set(0, 0, 0);
    player.onGround = true;
    setYaw(snap.player.yaw);
    setPitch(snap.player.pitch);
    restorePlayerFrequency(snap.player.frequency, snap.player.jellyTimer);

    // 9. Ambience that needs an AudioContext — deferred if there isn't one yet.
    startAudioForSnapshot();
  } finally {
    if (autosave) autosave.resume();
  }
  return true;
}

/**
 * @brief Start the standing laser hums and the resonance drone for the restored
 * progress. Audio initialises on the first user gesture, and the Continue click
 * is swallowed by the button, so this usually runs on AUDIO_READY instead.
 */
export function startAudioForSnapshot() {
  const run = () => {
    const state = getQuestState();
    if (getQuestPhase() !== QuestPhases.FREE_ROAM) {
      for (let i = 0; i < state.orbs.length; i++) {
        const o = state.orbs[i];
        if (o.found) playLaserHum(o.x, o.z);
      }
    }
    if (state.orbsFound > 0) startResonanceDrone(state.orbsFound);
  };
  if (isAudioInitialized()) run();
  else on(Events.AUDIO_READY, run);
}
