// ================================================================
// Audio System — Barrel re-export from audio/ sub-modules
// ================================================================
// Split into category modules under ./audio/ for maintainability.
// This file preserves the existing import API.
//
// LAB NOTE (Dr. Chen, acoustic analysis):
//   Every sound in this forest is synthesized from pure waveforms.
//   No recordings. No samples. Just math. And yet — participants
//   consistently report the soundscape feels "alive" and "aware."
//   One subject described hearing her own name in the wind harmonics.
//   We checked. It's a 3rd-order lowpass on brown noise. There are
//   no names. There shouldn't be names.

import { setEventSubscriber } from './audio/core.js';
import { on, Events } from '../kernel/eventBus.js';
import { stopResonanceDrone } from './audio/spiritHum.js';

// Wire up event bus subscriptions + mute-stop coupling
// This runs after AudioContext initializes (called by core.js initAudio)
import { playOrbCollect, playOrbWarble, playOrbReject, playFairyBounce, playBubblePop } from './audio/quest.js';
import { playFootstep, playJumpSound, playLandSound } from './audio/player.js';
import { playCreatureSound, playAttunementFlash } from './audio/creatures.js';
import { playPitchLockSound } from './audio/spiritHum.js';
import { toggleMute as _coreToggleMute } from './audio/core.js';

setEventSubscriber(() => {
  on(Events.ORB_COLLECTED, () => { playOrbCollect(); });
  on(Events.ORB_REJECTED, () => { playOrbReject(); });
  on(Events.FOOTSTEP, (d) => { playFootstep(d.sprinting, d.nearWater); });
  on(Events.JUMP, () => { playJumpSound(); });
  on(Events.LAND, (d) => { playLandSound(d.impactStrength); });
  on(Events.FAIRY_BOUNCE, () => { playFairyBounce(); });
  on(Events.BUBBLE_POP, (d) => { playBubblePop(d.position, d.playerPos); });
  on(Events.CREATURE_SOUND, (d) => { playCreatureSound(d.type, d.position, d.playerPos); });
  on(Events.CREATURE_ATTUNED, (d) => { playAttunementFlash(d.pos, d.playerPos, d.type); });
  on(Events.PITCH_LOCKED, (d) => { playPitchLockSound(d.type); });
});

// Override toggleMute to also stop drone
export function toggleMute() {
  const result = _coreToggleMute();
  if (result) stopResonanceDrone();
  return result;
}

// Re-export everything from sub-modules
export { initAudio, setAudioOrbCount, isMuted } from './audio/core.js';
export { updateAudio } from './audio/ambient.js';
export { initCrystalClusters, updateCrystalResonance } from './audio/crystals.js';
export { playCreatureSound, playPufflingSinging, playAttunementFlash, playPufflingVocal } from './audio/creatures.js';
export { playFootstep, playJumpSound, playLandSound, updateStepCooldown } from './audio/player.js';
export { playBubblePop, playOrbCollect, playOrbWarble, playOrbReject, playFairyBounce, playCrystalChime } from './audio/quest.js';
export { playLaserZap, playLaserHum, updateLaserHums, stopLaserHums } from './audio/laser.js';
export { startSpiritHumAudio, updateSpiritHumAudio, stopSpiritHumAudio, playPitchLockSound, startResonanceDrone } from './audio/spiritHum.js';
export { initAmbientSounds, updateAmbientSounds } from './audio/ambientCreatures.js';
export { updateMusic } from './audio/music.js';
