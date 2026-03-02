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

## Narrative Constraints
- No exposition dumps — all story through brief discovery text + environmental clues
- No dialogue — the player is alone (or is accompanied by the world itself)
- No cutscenes — everything happens in-world during gameplay
- The story is optional — a player can complete the game without reading any text
- The manifesto's emotional core: preservation through attention, not possession
