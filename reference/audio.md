# Audio System Reference

> Complete guide to the procedural Web Audio API sound system.
> File: `src/systems/audio.js` (32KB) + `src/systems/music.js` (10KB)

## Architecture

```
AudioContext
  └── masterGain ──→ destination
        ├── forestGain ──→ forestFilter ──→ forestNode (brown noise loop, co-prime lengths)
        ├── forest2Gain ──→ forest2Node (second brown noise layer)
        ├── windGain ──→ windFilter (200-800Hz bandpass) ──→ windNode (brown noise)
        ├── rainGain ──→ rainFilter (1200-3200Hz bandpass) ──→ rainNode (white noise)
        ├── waterGain ──→ waterFilter ──→ waterNode (proximity to ponds)
        ├── reverbGain ──→ reverbDelay (shared reverb send, dual delay 0.55s/0.79s)
        └── [transient voices: creatures, footsteps, interactions, music]
```

## Audio Layers

### Ambient (Always Active)
| Layer | Source | Modulation |
|-------|--------|------------|
| Forest hum | 2 brown noise buffers (co-prime lengths for non-repeating) | Volume by day phase |
| Wind | Brown noise → bandpass 200-800Hz | `windStrength` from weather.js |
| Rain | White noise → bandpass 1200-3200Hz | `rainRate` from weather.js |
| Thunder | Burst synthesis (noise + low osc + envelope) | `isStorming`, 2-5s spacing |
| Water | Filtered stream noise | Within 15m of pond, distance falloff |
| Frogs | Phase-pulsed tones | Within 20m of pond, night-weighted |
| Crickets | Periodic pings | Within 12m of grass, 1.5-4.5s intervals |

### Creature Sounds
| Creature | Synthesis | Frequency | Cooldown |
|----------|-----------|-----------|----------|
| Jelly | Glass harmonica: dual detuned sines, 4Hz vibrato, 1.2s glide | 360-420Hz | ~8s |
| Puffling | 3-note pentatonic arpeggio, 70ms between notes | 500-750Hz | ~6s |
| Deer | Warm distant horn: detuned triangles, slow 120ms attack | 100-130Hz | ~18s |
| Moth | Soft whisper-flutter: sine with FM, 8-12Hz LFO | 200-280Hz | ~10s |

All creature sounds use the `playCreatureSound(type, position, playerPos)` function with spatial volume falloff.

### Player Sounds
| Sound | Trigger | Method |
|-------|---------|--------|
| Footstep | Head bob zero-cross in `player.js` | `playFootstep()` |
| Jump | Space pressed while onGround | `playJumpSound()` |
| Land | Transition from !onGround to onGround | `playLandSound()` |

### Interactive Sounds
| Sound | Trigger | Function |
|-------|---------|----------|
| Bubble pop | Proximity to bubble | `playBubblePop()` |
| Fairy bounce | Jump in fairy ring | `playFairyBounce()` |
| Orb collect | Touch orb during quest | `playOrbCollect()` |
| Orb warble | Near uncollected orb | `playOrbWarble()` |
| Laser zap | Orb laser fires | `playLaserZap()` |
| Laser hum | Active laser beam | `playLaserHum()` |

### Music System (`music.js`)
- Generative ambient: harp, flute, drone, chime layers
- Major pentatonic scale
- `setupMusic(ctx, masterGain)` — called from audio.js init
- `updateMusic(dt)` — called per frame
- Tempo and volume respond to game state

## Audio Callback Pattern

**Critical:** Entity files NEVER import audio.js directly. All audio triggers pass through main.js via callback injection:

```js
// In main.js:
setAudioCallbacks({
  onFootstep: playFootstep,
  onJump: playJumpSound,
  onLand: playLandSound
});

// In questManager.js init:
initQuest({
  playOrbCollect: playOrbCollect,
  playLaserZap: playLaserZap,
  // ...
});
```

## Adding New Sounds

Pattern for any new sound in `audio.js`:

```js
export function playNewSound(param1, param2) {
  if (!initialized || muted) return;  // Guard — always first line

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 440;
  gain.gain.setValueAtTime(0.05, ctx.currentTime);  // Keep volumes LOW (0.02-0.08)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
  osc.connect(gain);
  connectWithReverb(gain, masterGain, 0.3);  // Shared reverb send
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.5);  // ALWAYS call .stop() to prevent node leak
}
```

**Rules:**
- Volumes: 0.02-0.08 per voice (never louder)
- Always `.stop(time)` to prevent accumulation
- Use `connectWithReverb(gain, masterGain, wetAmount)` for spatial feel
- Add `if (!initialized || muted) return` guard to every public function
- No audio files — everything is Web Audio API synthesis
- Howler.js is in package.json but completely unused
