# Phase 2 Roadmap — Symbiotic Attunement

> Phase 2 transforms the forest from a passive exploration space into a narrative experience
> with meaningful gameplay mechanics. Reference: `MANIFESTO.md` for full design.

## Core Concept

Replace orb "collection" with **Symbiotic Attunement** — the player learns creature rhythms, matches their behavior, carries their frequency, and uses it to activate zone-restoration orbs. The world heals visually and sonically as the player progresses.

## Implementation Tiers

### Tier 1 — Core Loop (Must Build First)

| # | System | Files to Touch | Complexity | Status |
|---|--------|---------------|------------|--------|
| 1 | **The Dimming** — Local bioGlow suppression per zone | `main.js`, `constants.js` | Low | Not started |
| 2 | **Creature Attunement** — Behavior matching + frequency carry | `entities/fauna/*.js`, `main.js`, `core/player.js` | Medium | Not started |
| 3 | **Orb Activation Gate** — Require carried frequency | `quest/questManager.js` | Low | Not started |
| 4 | **Stillness/Curiosity** — Creatures approach stationary player | `entities/fauna/*.js` | Low | Not started |

**Tier 1 Definition of Done:** Player can stand still near a deer, match its walking pace to attune, carry its frequency (playerLight turns teal), walk to an orb, and activate it. The orb's zone blooms to full brightness. Repeat for all 5 zones.

### Tier 2 — World Enrichment

| # | System | Files to Touch | Complexity | Status |
|---|--------|---------------|------------|--------|
| 5 | **Fairy Ring Boost** — Super-jump + feather fall | `core/player.js`, `entities/magical/fairyRings.js` | Low | Not started |
| 6 | **Audio Sync Progression** — Layer gating by orbsFound | `systems/audio.js` | Low | Not started |
| 7 | **Player Light Evolution** — Color/intensity/range by sync level | `core/lighting.js` or `core/player.js` | Trivial | Not started |
| 8 | **Wisp Guides** — Target override toward unfound orbs | `entities/magical/wisps.js`, `main.js` | Low | Not started |
| 9 | **Weather Attunement Modifiers** — Rate scaling per creature+weather | `main.js` | Trivial | Not started |
| 10 | **Day/Night Gating** — bioGlow scales attunement + orb visibility | `main.js`, `quest/questManager.js` | Trivial | Not started |
| 11 | **Bubble Pop Micro-Rewards** — Zone-aware pop behavior | `entities/magical/bubbles.js`, `main.js` | Low | Not started |
| 12 | **Crystal Resonance Chains** — Harmonic tone + bioGlow corridor | `main.js`, `systems/audio.js` | Medium | Not started |
| 13 | **Dandelion Seed Wayfinding** — Seeds drift toward unfound orbs | `particles/seeds.js` | Low | Not started |
| 14 | **Obelisk Rune Reveal** — One face per orb, creature-colored | `entities/world/obelisk.js`, `quest/questManager.js` | Low | Not started |

### Tier 3 — Narrative & Polish

| # | System | Files to Touch | Complexity | Status |
|---|--------|---------------|------------|--------|
| 15 | **Dual-Narrative Text** — Child/adult perspective toggle | `systems/discoveries.js`, `ui/hud.js` | Low | Not started |
| 16 | **Sky Constellations** — Reveal star patterns per orb | `world/sky.js` | Low | Not started |
| 17 | **Shooting Star Wishes** — Poetic fragments triggered by sky-watching | `world/sky.js`, `systems/discoveries.js` | Low | Not started |
| 18 | **Ground Glyphs** — Hidden discovery markers revealed by stillness | `systems/discoveries.js`, `main.js` | Low | Not started |
| 19 | **Finale Narrative Text** — Overlay during COMPLETE/TRANSFORM | `quest/questManager.js` | Trivial | Not started |
| 20 | **Free Roam State** — Post-TRANSFORM peaceful endgame | `quest/questManager.js`, `systems/audio.js` | Low | Not started |
| 21 | **Echo-Visions** — Storm-sprint creature path traces | `main.js`, `systems/weather.js` | Medium | Not started |

## The Five Synchronization Zones

Each orb sits within a natural zone. No hard biome boundaries — zones are soft, defined by creature and flora density.

| Zone | Name | Creature | Attunement Method | Orb Activation |
|------|------|----------|-------------------|----------------|
| 1 | The Shallows | Jelly | Stand still, pulse-match (SPACE in rhythm) | Pulse rhythm near orb |
| 2 | The Deep Roots | Puffling | Sprint-match (SHIFT near puffling) | Sprint into orb |
| 3 | The Crystal Spires | Moth | Orbit-match (circle near moth) | Circle within orb range |
| 4 | The Canopy | Deer | Stride-match (walk same direction) | Walk (not sprint) into orb |
| 5 | The Convergence | Any | Any carried frequency | Standard proximity |

## New Constants Needed (for constants.js)

```js
export const ORB_RESTORE_R = 30;           // Restoration radius per orb
export const ATTUNE_RATE = 0.15;           // Attunement gain per second when matching
export const ATTUNE_DECAY = 0.05;          // Attunement loss per second when not matching
export const DIMMING_FACTOR = 0.35;        // bioGlow multiplier in unrestored zones
export const CURIOSITY_IDLE_TIME = 5;      // Seconds of stillness before curiosity triggers
export const FAIRY_BOOST_MULT = 3.5;       // Fairy ring jump multiplier
export const FEATHER_FALL_DURATION = 4;    // Seconds of slow fall
export const FEATHER_FALL_GRAVITY = 0.3;   // Gravity multiplier during feather fall
```

## Creature Attunement Details

| Creature | Detection | Player Must | Rate | Audio Feedback |
|----------|-----------|-------------|------|----------------|
| Jelly | < 6m | Stand still + tap SPACE in rhythm (±0.3s) | 0.15/s | Glass harmonica brightens |
| Puffling | < 8m | Sprint (SHIFT held) | 0.15/s | Chirp arpeggio quickens |
| Deer | 8-12m | Walk (WASD, no SHIFT) same direction (±45°) | 0.15/s | Horn tone rises |
| Moth | < 8m | Move laterally + look toward moth | 0.15/s | Flutter intensifies |

Weather modifiers multiply the base rate. bioGlow multiplies the rate. See MANIFESTO.md Section V for full tables.

## Player Light Evolution

| Sync Level | Color | Intensity | Range |
|------------|-------|-----------|-------|
| 0/5 | 0x668888 (default) | 0.4 | 12m |
| 1/5 | 0x88aacc | 0.6 | 16m |
| 2/5 | 0x66ddaa | 0.8 | 20m |
| 3/5 | 0xaaffcc | 1.0 | 25m |
| 4/5 | 0xddffee | 1.2 | 30m |
| 5/5 | 0xffffff | 1.5 | 40m |

## Recommended Build Order

1. **Dimming system** first — it's the visual foundation everything else builds on
2. **Creature attunement** — the core mechanic
3. **Orb activation gate** — connects attunement to quest progression
4. **Player light evolution** — immediate visual feedback for progression
5. **Audio sync progression** — sonic feedback layer
6. Build Tier 2 items in any order (they're independent)
7. Tier 3 narrative last (needs gameplay loop stable first)

## Explicitly Descoped

These are NOT planned for Phase 2 (see MANIFESTO.md Section XIV):
- Hard biome boundaries
- Full flight system (fairy ring boost replaces this)
- Custom shader pipeline / chromatic aberration
- Input sequence recording/replay
- Visual avatar mesh changes
- Separate ending cutscenes
- Howler.js migration
