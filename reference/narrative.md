# Narrative & Lore Quick Reference

> Distilled from `reference/MANIFESTO.md`. Reference this for tone, terminology, and story context.

## The Story (Two Layers)

### Child Layer: "The Magic Garden"
You are **The Spark**, a tiny light-spirit awakened in a sleepy forest. **The Dimming** is "Sleepy Dust" that made the animals quiet and plants go dark. By dancing with forest friends and waking **Sun-Seeds** (Orbs), you bring color and music back.

**Voice:** Short sentences, wonder-filled. Nature metaphors: "sleepy," "sparkly," "friends." No darkness beyond "sleepy." Discovery text: 8-15 words max.

### Adult Layer: "The Chronobiological Archive"
You are an **Autonomic Diagnostic Routine** within a decaying biological hard drive (the Archive). The Dimming is an entropic **Chronophage** — data corruption that accelerates time. Your purpose: recalibrate the environment's clock by syncing with surviving **Biological Metronomes** (creatures).

**Voice:** Clinical, archival, slightly melancholic. Technical metaphors: "oscillation," "entropy," "calibration." Subtext of loss. Discovery text: 10-20 words, formatted as log entries.

### The Hidden Third Layer
The Architect who built the Archive was a parent preserving the world as their child once saw it. The child perspective IS the original data. The adult perspective is the maintenance routine. The player keeps something beautiful alive.

## Key Terminology

| Concept | Child Term | Adult Term | System Reference |
|---------|-----------|------------|-----------------|
| Quest progress | Sun-Seeds found | Synchronization Index | `orbsFound` |
| World darkness | Sleepy Dust | Entropic Chronophage | `bioGlow` dimming factor |
| Creature rhythm | Dancing with friends | Biological Metronome sync | Attunement mechanic |
| Orb activation | Waking a Sun-Seed | Sync node activation | `questManager.js` |
| Zone restoration | Making the garden glow | Reducing local entropy | `ORB_RESTORE_R` radius |
| Player | The Spark | Diagnostic Routine | Camera/playerLight |
| Obelisk | The Big Crystal | Central Archive Index | `entities/world/obelisk.js` |
| Fairy ring boost | Jumping really high! | Breaking gravitational lock | SPACE in activated ring |

## Creature Metaphors

| Creature | Child Reading | Adult Reading | Rhythm |
|----------|--------------|---------------|--------|
| Jelly | Floating friend | Pulse Metronome (0.5Hz) | Meditative, slow bob |
| Puffling | Bouncy buddy | Bounce Metronome (2Hz) | Fast, staccato hops |
| Deer | Quiet friend | Stride Metronome (0.8Hz) | Graceful, steady walk |
| Moth | Spinning friend | Orbit Metronome (1.2Hz) | Hypnotic circular |

## Discovery Text Examples

### First Encounters (existing system, expand for dual-narrative)
| Trigger | Child | Adult |
|---------|-------|-------|
| Deer (12m) | "A glowing deer! It walks so quietly..." | "Biological Metronome detected. Gait: 0.8Hz oscillation." |
| Puffling (8m) | "A fuzzy little hopper!" | "High-frequency bounce pattern logged. 2Hz." |
| Jelly (10m) | "A floating glow-friend!" | "Pulse Metronome acquired. Phase-locked oscillation." |
| Moth (8m) | "Pretty spinning wings!" | "Orbital Metronome tracked. Radius 3.2m." |
| Fairy ring (4m) | "A circle of tiny mushrooms! Magic!" | "Mycelial relay node. Spore telemetry active." |
| Pond (5m) | "A sparkly pool!" | "Aquatic resonance chamber detected." |
| First orb | "A Sun-Seed! The forest feels warmer." | "Sync node activated. Local entropy -20%." |

### Shooting Star Wishes (gated by orbsFound)
| Orbs | Child | Adult |
|------|-------|-------|
| 0 | "Make a wish!" | "Archival fragment: ...system boot, cycle 1." |
| 1 | "The stars are listening..." | "Fragment: ...I built this place for her." |
| 2 | "Someone drew pictures in the sky." | "Fragment: ...oscillations matched her heartbeat." |
| 3 | "I wonder who lived here before." | "Fragment: ...I hope she remembers the fireflies." |
| 4 | "The stars feel closer tonight." | "Fragment: ...time cannot take what has been loved." |

### Finale
| Phase | Child | Adult |
|-------|-------|-------|
| COMPLETE | "All the Sun-Seeds are home! Waking up..." | "SYNC INDEX: 5/5. ARCHIVE INTEGRITY: 100%." |
| TRANSFORM | "You did it, little Spark. The garden will remember you." | "Time-lock engaged. You saved not the data, but the rhythm." |
| FREE_ROAM | "The garden is yours now. Explore forever." | "Epoch preserved. Free traversal authorized." |

## Perspective Toggle
- Toggle key: `Tab` (or UI button)
- State: `perspective: 'child' | 'adult'`
- Affects only discovery text display, not gameplay
- Default: `'child'` (accessible, universal)

## Wizard-Puffling Encounter

The wizard encounter is the narrative's central "truth reveal" moment — a cinematic boss-less event that unlocks the dual-narrative payoff. Implemented in `src/systems/wizardPufflingEvent.js`.

### Trigger
Fires once per session after the player has accumulated **~18 seconds of cumulative walking** (`TRIGGER_WANDER_SECONDS = 18`, wall-clock time where `speed² > 0.06`). Resets automatically on game restart via `resetWizardEncounter()` called from `go()`.

### Beat Sequence

| Beat | State | Key Action |
|------|-------|-----------|
| Trigger fires | `idle → approach` | Wizard puffling (purple, wizard hat) spawns 16–24 m from player. Hint: *"A wizard approaches?"* |
| Approach | `approach` | Wizard hop-runs toward standoff point (3–5 m from player). Camera locks onto wizard. La-la vocalizations every ~2.35s. |
| Confront | `confront` | Wizard arrives, bobs inspecting the player. At ~0.85s: speaks *"Another dead soul"*. |
| Wait hum | `waitHum` | After ~6.8s of confront: prompt *"Hum to answer it… (press F)"* appears. Wizard waits for the player to press **F** to arm spirit hum. |
| Proclaim | `proclaim` | Once hum is armed: wizard declares *"NOW you see BOTH worlds at once!"*. Camera stays locked. |
| Pre-beam | `prebeam` | Brief 2.5s pause before the sky beam fires. |
| Smite | `smite` | Pink sky laser descends onto the wizard (1.25s fade-in, hold, 2.1s fade-out). Wizard glows, shouts *"AhhhhHHHH!"*, then despawns in a smoke puff. |
| Hand-back | `handBack` | 0.6s smooth eased return of camera to the player's saved look angles. |
| Done | `done` | Encounter complete; state is `'done'` for the rest of the session. |

### Truth Reveal Payoff

When the encounter ends (after smite), `revealTruth()` fires:
- Sets `_truthRevealed = true` in `src/state/narrativeState.js` (one-way, permanent for session).
- Emits `Events.PERSPECTIVE_CHANGED` with `{ truthRevealed: true }`.
- From this point on, `dualLine()` in `discoveries.js` returns **both** the child line (primary) and the adult line (smaller subtitle) for all discovery text, regardless of which Tab perspective is active.
- The HUD controls hint updates to include *"TAB: the truth · the veil is lifted"* via `unlockTruthControlHint()`.

### Debug Access
`LumiDebug.spawnWizard()` — triggers a fresh approach encounter immediately regardless of walk timer. `LumiDebug.unlockTruth()` — fires the truth reveal directly without the encounter.

---

## Puffling Cryptic Chat

Pufflings speak in short, context-sensitive cryptic lines displayed as speech bubbles positioned above the speaking puffling's head. Implemented in `src/systems/pufflingChat.js`.

### Message Pools

| Context | Condition | Flavor |
|---------|-----------|--------|
| `MESSAGES_CARRYING` | Player carries a creature frequency | Urging, celebratory ("carry our voice to the orbs!") |
| `MESSAGES_ATTUNING` | Attunement > 0.5 | Encouraging, movement-themed |
| `MESSAGES_NEAR_ORB` | Within 20 m of an unfound orb | Directional hints in puffling language |
| `MESSAGES_GENERAL` | 25% random override | Ambient lore, forest observations |
| `MESSAGES_RESTORED` | Sector restored, no higher-priority match | Joyful, celebratory |
| `MESSAGES_DIMMED` | Sector dimmed, fallback | Melancholic fragments |

Each pool has `child` and `adult` variants. The active variant is chosen via `getPerspective()` from `src/state/narrativeState.js`, so toggling Tab changes puffling speech language too.

### Timing
- Display duration: **5 seconds** (× `READ_DWELL_MULT = 1.5`)
- Cooldown between chats: **8–14 seconds**
- Bubble fades out during the last 0.8s of its display

### Rendering
`initPufflingChat()` creates a fixed DOM element (`#puffling-chat`). Each frame, `updatePufflingChat(dt, rendererDom)` projects the speaking puffling's 3D position to screen NDC coordinates and positions the bubble above its head. If the puffling is behind the camera (`z > 1`), the bubble is hidden.

## Narrative Constraints
- No exposition dumps — all story through brief discovery text + environmental clues
- No dialogue — the player is alone (or is accompanied by the world itself)
- No cutscenes — everything happens in-world during gameplay
- The story is optional — a player can complete the game without reading any text
- The manifesto's emotional core: preservation through attention, not possession
