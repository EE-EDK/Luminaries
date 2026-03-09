// ================================================================
// Audio barrel re-export — preserves existing import API
// ================================================================

// Core
export { initAudio, setAudioOrbCount, toggleMute, isMuted } from './core.js';

// Ambient layers
export { updateAudio } from './ambient.js';

// Creatures
export { playCreatureSound, playPufflingSinging, playAttunementFlash, playPufflingVocal } from './creatures.js';

// Player
export { playFootstep, playJumpSound, playLandSound, updateStepCooldown } from './player.js';

// Quest
export { playBubblePop, playOrbCollect, playOrbWarble, playOrbReject, playFairyBounce } from './quest.js';

// Laser
export { playLaserZap, playLaserHum, updateLaserHums, stopLaserHums } from './laser.js';

// Spirit hum + resonance drone
export { startSpiritHumAudio, updateSpiritHumAudio, stopSpiritHumAudio, playPitchLockSound, startResonanceDrone } from './spiritHum.js';

// Ambient creatures (frogs/crickets)
export { initAmbientSounds, updateAmbientSounds } from './ambientCreatures.js';

// Music bridge
export { updateMusic } from './music.js';
