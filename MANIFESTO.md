# LUMINARIES: THE DUAL-NARRATIVE MANIFESTO (v2 — Aligned)

**Technical Framework:** Three.js r172+ / WebGL / Vite / Web Audio API
**Core Objective:** Symbiotic Attunement — Synchronizing with a living world to restore its fading light.

---

## I. EXECUTIVE SUMMARY & PHILOSOPHY

Luminaries is an interactive simulation that functions as both a "Living Storybook" for younger players and a "Hard Sci-Fi Mystery" for mature audiences. It rejects traditional inventory-based "gathering" and replaces it with **Symbiotic Attunement** — the act of learning the forest's rhythms and harmonizing with them.

The `✦ 0 / 5` counter in the UI is not a collection tally; it is the **Synchronization Index** of the world. Progress is achieved not by taking from the environment, but by observing its creatures' rhythms and aligning your behavior to heal **The Dimming**.

The world already breathes: trees sway with wind (`weather.js` → `windX/windZ`), mushrooms pulse with bioluminescent heartbeats, crystals cast proximity light, the sky cycles through dusk/night/deep-night/dawn (`dayNightCycle.js`), weather sweeps from clear to luminous storm (`weather.js`), and creatures navigate with vision cones, hearing, and flocking behaviors (`ai/senses.js`, `ai/steering.js`). This manifesto gives that breathing a purpose.

---

## II. THE DUAL-LAYER NARRATIVE

The world is read differently depending on the maturity of the player's observation. The existing `discoveries.js` system — which shows ephemeral text on first encounters — becomes the vehicle for both layers.

### A. The Child's Perspective (The Magic Garden)

You are **The Spark**, a tiny light-spirit awakened in a sleepy forest. The Dimming is "Sleepy Dust" that has made the animals quiet and the plants go dark. By dancing with friends and waking up the Sun-Seeds (Orbs), you bring the color and music back to the world.

**Discovery text examples (child layer):**
- First deer encounter (12m): *"A glowing deer! It walks so quietly..."*
- First fairy ring (4m): *"A circle of tiny mushrooms! They look magical!"*
- First orb collected: *"A Sun-Seed! The forest feels warmer already."*

### B. The Adult's Perspective (The Chronobiological Archive)

You are an **Autonomic Diagnostic Routine** within a massive, decaying biological hard drive (the Archive). The Dimming is an entropic **Chronophage** — a data corruption that accelerates time until organic matter becomes dust. Your purpose is to recalibrate the environment's internal clock by syncing with surviving **Biological Metronomes** (the creatures) to preserve the epoch before the system fails.

**Discovery text examples (adult layer):**
- First deer encounter (12m): *"Biological Metronome detected. Gait pattern: 0.8Hz oscillation, quadrupedal IK."*
- First fairy ring (4m): *"Mycelial relay node. Spore telemetry indicates dormant network capacity."*
- First orb collected: *"Synchronization node activated. Local entropy rate reduced by 20%."*

**Implementation:** The `discoveries.js` module already tracks first encounters and displays text via a DOM overlay with 3s display + CSS fade. Add a `perspective` state (`'child'` | `'adult'`) toggled via a UI button or key (e.g., `Tab`). The `checkDiscoveries()` function selects text from two parallel string maps based on current perspective.

---

## III. MECHANICAL INPUTS & SYMBOLISM

The existing input system (`core/input.js`) already provides WASD, SHIFT, SPACE, click+drag, mobile joystick, and touch buttons. These controls are repurposed narratively:

| Input | Existing System | Child Reading | Adult Reading |
|-------|-----------------|---------------|---------------|
| **WASD** | `getInput()` → world-space velocity vector | Walking through the garden | Temporal Pathing — maintaining coherence with the time-stream |
| **SHIFT** | Sprint (1.8× via `SPRINT_MULT`) + FOV lerp 65°→78° | Racing with animal friends | Frequency Modulation — matching high-vibration kinetic energy |
| **SPACE** | Jump (`JUMP_IMPULSE=8`, gravity `GRAVITY=15`) | Hopping over dim patches | Breaking a Gravitational Lock caused by high-density entropy |
| **Click+Drag** | `yaw`/`pitch` with `MOUSE_SENS=0.003`, clamped | Finding sparkly paths | Visual Spectrometry — analyzing entropic particle flows |

**Mobile:** The existing virtual joystick (`#joy-zone`, 52px radius) and jump button (`#btn-jump`) serve identically. The left zone controls movement; the right zone controls look. Sprint is handled by `touchSprint`.

No new input mechanics are required. The existing `keys` object, `getInput()` function, and mobile touch handlers are complete.

---

## IV. THE DIMMING (Replaces "Green Rot")

The Dimming is the central antagonist — not a new system, but a **reinterpretation of the existing `bioGlow` multiplier** from `dayNightCycle.js`.

### Current System

`bioGlow` already modulates between 0.65 (dawn) and 1.5 (deep night), and `main.js` reads it to scale emissive intensity on all flora. The world already dims and brightens with the day/night cycle.

### The Dimming Extension

Each of the 5 Orbs has a **restoration radius**. Before an Orb is activated, its zone is suppressed — `bioGlow` is locally reduced for all entities within that Orb's domain. After activation, the zone blooms to full intensity.

**Implementation approach:**
- Each orb already stores `x`, `z` position. Define a `restoreR` (restoration radius, ~25-35m) per orb.
- In `main.js director()`, when updating emissive materials on flora, compute each entity's distance to nearest *activated* orb. If within `restoreR`, use full `bioGlow`. If not within any activated orb's radius, multiply `bioGlow` by a dimming factor (0.3–0.5).
- The existing crystal proximity system, mushroom glow pulse, and flower emissive intensity all already read emissive values — this change propagates naturally.
- **Visual result:** Before orb collection, the forest is dim and muted. Each orb "lights up" a region. By 5/5, the entire world is at full luminosity.

### Dimming Feedback on Player

**Existing system:** `playerLight` (PointLight, 0x668888, intensity 0.6, range 20m) already follows the player via `player.js`.

- In dimmed zones, reduce `playerLight.intensity` to 0.3 and `playerLight.distance` to 12m.
- In restored zones, boost to 0.8 intensity and 25m range.
- The existing `currentFOV`/`targetFOV` lerp could also narrow FOV slightly (60° instead of 65°) in dimmed zones, creating a claustrophobic feel.

### Audio Response to Dimming

**Existing system:** `audio.js` already modulates forest hum volume by day phase and drives ambient layers (frogs, crickets, water) by proximity.

- In dimmed zones, reduce forest hum volume and increase filter cutoff (sounds become thin, distant).
- In restored zones, enable additional harmonic layers in the forest hum.
- The existing creature sound cooldowns (`playCreatureSound()`) could be shortened in restored zones (creatures "sing" more often when healthy).

---

## V. THE CREATURES AS BIOLOGICAL METRONOMES

The 4 existing creature types already have distinct, rhythmic behavior patterns driven by state machines. The manifesto reinterprets their existing animations as **frequencies the player must learn to attune with**.

### Jelly — The Pulse Metronome
**File:** `entities/fauna/jellies.js`
**Existing behavior:** Drift state with wobble oscillation (0.5–1.0 amplitude), synchronized pulse with other jellies (`_pulseSync`), vertical bob via `sin()` at variable frequencies. Bell opacity + glow modulation.
**Rhythm:** Slow, meditative, ~0.5Hz vertical pulse. The player attunes by **standing still** near a jelly and matching its pulse by **tapping SPACE** in rhythm with its vertical bob.
**Audio signature:** Glass harmonica (dual detuned sines, 360–420Hz, 4Hz vibrato, 1.2s glide). Already in `playCreatureSound('jelly')`.

### Puffling — The Bounce Metronome
**File:** `entities/fauna/pufflings.js`
**Existing behavior:** `hop` state with hop physics timer, `idle` with ear wiggle + blink, `wander` with speed variation. Hyperactive, skittish, social.
**Rhythm:** Fast, staccato, ~2Hz hop cycle. The player attunes by **sprinting** (SHIFT) near a puffling, matching its frenetic energy.
**Audio signature:** Musical chirp (3-note pentatonic arpeggio, 500–750Hz, 70ms between notes). Already in `playCreatureSound('puff')`.

### Deer — The Stride Metronome
**File:** `entities/fauna/deer.js`
**Existing behavior:** `walk` with IK-like leg pivots (sin-based phase offsets, front/back legs 180° apart), `pause`, `look` (head rotation via neckPivot), `flee` (rapid movement away from player at `DEER_FLEE_R=8m`).
**Rhythm:** Graceful, ~0.8Hz stride. The player attunes by **walking at normal speed** (WASD without SHIFT) in the **same direction** as the deer, matching its pace without triggering flee.
**Audio signature:** Warm distant horn (detuned triangles, 100–130Hz, slow 120ms attack). Already in `playCreatureSound('deer')`.

### Moth — The Orbit Metronome
**File:** `entities/fauna/moths.js`
**Existing behavior:** `patrol` orbit around `centerX/centerZ` at `orbitR`, wing flapping at `flapSpeed` (6–10 rad/s), vertical bob (`bobAmp` 0.3–0.7).
**Rhythm:** Hypnotic, orbital, ~1.2Hz wing cycle. The player attunes by **circling** (WASD in a curve) near a moth, matching its orbital pattern via mouse look direction.
**Audio signature:** Soft whisper-flutter (sine with FM, 200–280Hz, 8–12Hz LFO). Already in `playCreatureSound('moth')`.

### Attunement Mechanic

**Implementation approach:**
- Each creature gets an `attunement` float (0.0–1.0), stored on its data object.
- Per frame, the AI senses module (`canSee`, `canHear`, `isNear`) already detects player proximity. Add a **behavior matching** check:
  - **Jelly:** Player within 6m AND `keys['Space']` pressed at rhythm matching jelly's bob phase (±0.3s tolerance).
  - **Puffling:** Player within 8m AND sprinting (`keys['ShiftLeft']`).
  - **Deer:** Player within 12m (but > 8m flee radius) AND walking (WASD active, no SHIFT) AND facing similar direction (yaw within ±45° of deer heading).
  - **Moth:** Player within 8m AND moving laterally (WASD active) AND looking toward moth (pitch/yaw alignment check).
- When matching, `attunement` increases at ~0.15/s. When not matching, it decays at 0.05/s.
- At `attunement >= 1.0`, the creature emits a bright flash (boost emissiveIntensity to 2.0 for 0.5s), plays its creature sound, and the player "carries" that creature's frequency.

### Carrying a Frequency

- The player can carry **one frequency at a time**, stored as `playerFrequency: 'jelly' | 'puff' | 'deer' | 'moth' | null`.
- `playerLight` color shifts to match the creature's palette while carrying:
  - Jelly: `C.jellyGlow` (cyan)
  - Puffling: `C.puffGlow` (warm pink)
  - Deer: antler glow color (teal)
  - Moth: `C.mothGlow` (green)
- This is a simple color lerp on the existing `playerLight.color`.

### Wisps as Attunement Guides

**File:** `entities/magical/wisps.js`

The manifesto's original draft overlooked wisps entirely, but they are natural narrative companions. Wisps already have velocity-based following behavior (`velX/velY/velZ`), a `targetX/targetY/targetZ` tracking system, and a scatter state for erratic movement.

**Mechanic:** After the player attunes with a creature and carries its frequency, the nearest wisp "adopts" the player. It sets its `targetX/Z` to a point halfway between the player and the corresponding zone's dormant Orb, drifting ahead as a living compass.

- The wisp's core color shifts to match the carried frequency (same palette as playerLight).
- When the player is heading toward the Orb, the wisp drifts calmly ahead. When heading away, it scatters erratically and dims.
- Once the player reaches the Orb and activates it, the wisp bursts bright and returns to free-roaming.

**Child discovery (first wisp guide):** *"A little light wants to show you something!"*
**Adult discovery:** *"Navigation beacon acquired. Following signal vector to target node."*

**Implementation:** In the wisp update loop, check if `playerFrequency !== null`. If so, find the nearest wisp within 20m and override its `targetX/Z` to lerp toward the midpoint between player and the matching orb. The wisp's existing velocity-based movement handles the rest. No new movement code — just a new target source.

### Stillness as a Mechanic

**Existing system:** `playerIdleTime` is already tracked in `player.js` — it increments when player speed < 0.5 m/s.

Standing still for 5+ seconds near any creature triggers a **curiosity response** — the creature transitions to a new `curious` state and approaches the player instead of the player approaching it.

| Creature | Normal Behavior Near Player | Curiosity Response |
|----------|---------------------------|-------------------|
| Jelly | Drifts aimlessly | Floats closer, pulses brighten |
| Puffling | Hops away if startled | Cautiously hops toward player, ears forward |
| Deer | Flees at 8m (`DEER_FLEE_R`) | Deer's flee radius shrinks to 4m; it turns to look |
| Moth | Ignores player, orbits | Orbit center shifts toward player position |

This is the inverse of the flee response and rewards patience. It makes attunement easier for players who observe first — a core philosophical alignment with the manifesto's message.

**Implementation:** In each creature's update function, add: `if (playerIdleTime > 5 && isNear(playerPos, creaturePos, curiosityRange))`, set `state = 'curious'`. The `curious` state uses the existing `seek()` steering behavior from `ai/steering.js` to approach the player slowly. The creature reverts to its previous state if the player moves.

### Weather as Attunement Modifier

**Existing system:** `weather.js` exports `weatherState` (6 states), `windStrength`, `isStorming`, `lightningFlash`.

Weather conditions modify attunement difficulty, making the world feel responsive and strategic:

| Weather State | Effect on Attunement |
|---------------|---------------------|
| **CLEAR** | Baseline — no modifier |
| **MISTY** | Jelly attunement 1.5× faster (jellies pulse more slowly in low visibility — wider timing window) |
| **LIGHT_RAIN** | Puffling attunement 1.3× faster (pufflings hop more actively in rain — easier to sprint-match) |
| **HEAVY_RAIN** | All attunement 0.7× (creatures hunker down, less expressive behavior) |
| **FOG_BANK** | Deer attunement 1.5× faster (deer are calmer in fog — flee radius effectively shrinks to 6m) |
| **LUMINOUS_STORM** | Moth attunement 1.5× faster (moths orbit tighter around crystals during storms — easier to track). All other attunement 0.8× |

**Implementation:** Multiply the attunement increase rate (0.15/s baseline) by a weather modifier looked up from the creature type + current `weatherState`. Pure arithmetic in the existing attunement check, no new systems.

### Day/Night Phase Gating

**Existing system:** `dayNightCycle.js` exports `bioGlow` (0.65–1.5) and `phase` ('DUSK', 'NIGHT', 'DEEP_NIGHT', 'DAWN'). The 10-minute cycle is a major system with no current narrative role.

`bioGlow` already peaks at DEEP_NIGHT (1.5×), meaning orbs are brightest and easiest to spot during deep night. The manifesto extends this:

- **Attunement rate scales with `bioGlow`:** At deep night (bioGlow=1.5), attunement builds 1.5× faster. At dawn (bioGlow=0.65), attunement builds at 0.65× speed.
- **Creature activity scales with phase:** Creatures are more behaviorally expressive at night (wider state transitions, longer active periods). At dawn, they become drowsy (longer idle/pause states, shorter wander distances).
- **Orb visibility:** Unfound orbs pulse more brightly at deep night (existing proximity glow in `questManager.js` already uses `sin(t * 1.5 + phase)` — multiply amplitude by `bioGlow`).

This creates natural play rhythms: **explore at dusk** (visibility decent, creatures settling), **attune at night** (creatures active, attunement moderate), **collect at deep night** (maximum attunement speed, orbs brightest), **rest at dawn** (world quiets, reflect on progress).

**Implementation:** Multiply attunement rate by `bioGlow` (already an exported float). Multiply orb proximity glow amplitude by `bioGlow` in `updateQuest()`. No new systems.

---

## VI. THE FIVE SYNCHRONIZATION ZONES (The ✦ 0 / 5 Structure)

The world is **one continuous forest** (no hard biome boundaries), but each Orb sits within a natural zone defined by the existing procedural placement. The 5 zones are characterized by which creature and flora dominate nearby.

### Zone 1: The Shallows (Pond Zone)
**Dominant features:** Ponds (`entities/magical/ponds.js`), reeds, lily pads, tadpoles, water grass
**Creature:** Jelly (drifts near water)
**Attunement:** Pulse-match with a jelly → carry Jelly frequency → perform pulse rhythm near dormant Orb
**Orb activation:** Standing within `ORB_TOUCH_R` while carrying Jelly frequency and tapping SPACE in pulse rhythm
**Restored effect:** Pond ripple rings intensify, frog ambient layer (`updateAmbientSounds`) volume doubles, water surface emissive increases

### Zone 2: The Deep Roots (Mushroom Zone)
**Dominant features:** Mushroom clusters, fairy rings (`entities/magical/fairyRings.js`), mycelium threads, spore haze
**Creature:** Puffling (hops through mushroom clusters)
**Attunement:** Sprint-match with a puffling → carry Puffling frequency → sprint circles around dormant Orb
**Orb activation:** Entering `ORB_TOUCH_R` while sprinting with Puffling frequency
**Restored effect:** Mushroom glow pulse amplitude doubles, fairy ring spore haze thickens, new spore particles spawn in restored area

### Zone 3: The Crystal Spires (Crystal Zone)
**Dominant features:** Crystal formations (`entities/flora/crystals.js`), prismatic halos, mineral stains, filament wisps
**Creature:** Moth (orbits crystal light sources)
**Attunement:** Orbit-match with a moth → carry Moth frequency → orbit the dormant Orb
**Orb activation:** Circling within `ORB_SENSE_R` while carrying Moth frequency
**Restored effect:** Crystal proximity lights (`crystalLights` array) double in intensity, energy line resonance chains become visible, crystal satellite gems begin orbiting

### Zone 4: The Canopy (Tree Zone)
**Dominant features:** Dense tree groves (`entities/flora/trees.js` — 500 instanced), ferns, flowers, dandelions
**Creature:** Deer (walks through tree gaps)
**Attunement:** Stride-match with a deer → carry Deer frequency → walk steadily toward dormant Orb
**Orb activation:** Walking (not sprinting) into `ORB_TOUCH_R` while carrying Deer frequency
**Restored effect:** Tree canopy emissive glow pulses (currently static), flower emissive intensity peaks, dandelion seeds disperse spontaneously, grass sway amplitude increases

### Zone 5: The Convergence (Obelisk Zone)
**Dominant features:** Obelisk (`entities/world/obelisk.js`), moat, rocks, open clearing
**Creature:** All four — requires carrying ANY frequency
**Attunement:** Any creature frequency will work for the final Orb
**Orb activation:** Standard proximity with any carried frequency
**Restored effect:** Triggers the existing COMPLETE → FINALE → TRANSFORM sequence

### Dandelion Seeds as Wayfinding

**File:** `entities/flora/dandelions.js`

Dandelions already disperse 8 seed particles when the player walks within 1.2m, with wind-driven physics and a 15–25s regrowth timer. Currently, dispersed seeds drift in the wind direction from `weather.js`.

**New behavior:** In restored zones, dispersed seeds drift **toward the nearest unactivated orb** instead of following random wind. The player never sees a compass or arrow — just seeds that seem to "know where to go." Observant players follow them.

- **Child reading:** *"The seeds are looking for a new home..."* (discovery text on first directional drift)
- **Adult reading:** *"Spore telemetry indicates unresolved synchronization node bearing 215°."*

**Implementation:** In `seeds.js` `updateDandSeeds()`, when computing particle velocity, check if the seed's origin is within any orb's `restoreR`. If so, add a gentle bias vector (0.3 m/s) toward the nearest unfound orb's `x/z` position. The existing wind force still applies — seeds spiral and wobble naturally, but trend in the right direction. When all orbs are found, seeds revert to pure wind drift.

### Crystal Resonance Chains

**Existing system:** `main.js` already has energy lines (`initEnergyLines()`, 15 `MAX_ENERGY_LINES`) and crystal chain resonance visualization. The `discoveries.js` system already tracks `crystalChainCount`.

**New mechanic:** When the player walks between two crystals within 12m of each other, the energy line connecting them brightens and emits a harmonic tone:

- **Audio:** A rising perfect fifth interval (Web Audio API — two sine oscillators at 1:1.5 frequency ratio, 0.8s duration)
- **Visual:** The energy line between the two crystals brightens from 0.1 to 0.6 opacity over 0.5s, then decays
- Linking 3+ crystals in sequence triggers a **resonance cascade** — a 5-second `bioGlow` boost (1.5× multiplier) in a corridor between all linked crystals
- The resonance cascade also temporarily reveals nearby hidden ground glyphs (see Section XI.C)

**Child discovery (first chain of 3):** *"The crystals are singing to each other!"*
**Adult discovery:** *"Resonance cascade initiated. Temporal coherence corridor established."*

**Implementation:** The crystal proximity sort already runs per frame in the director loop. Track which crystals the player has visited in order (a small circular buffer of last 5 crystal indices). When two consecutive crystals are within 12m of each other, fire the energy line. When 3+ form a chain, boost local `bioGlow`.

### Zone Restoration Cascade

When an Orb activates, the existing quest mechanics already fire:
1. Orb flashes for 1.5s (`_flashing` state in `questManager.js`)
2. Orb flies up to obelisk tip (`flyUp` state, ascent at 0.8× lerp rate)
3. Laser beam shoots from ground to obelisk tip (`makeLaserFn`)
4. Obelisk rises one rung (`rungHeight = OBELISK_H / 5`, rise speed 8 units/s with 25–30Hz rumble shake)
5. `orbsFound` increments, HUD updates (`✦ X / 5`)
6. `orbLight` intensity and range increase

**New addition:** The bioGlow restoration dome expands from the orb's position over 3–5 seconds, bringing local flora to full emissive intensity. This is a visual wave radiating outward — entities update their emissive based on distance to the activation point vs. elapsed time since activation.

### Obelisk Progressive Rune Reveal

**Existing system:** The obelisk (`entities/world/obelisk.js`) already has hidden rune carvings (glowing line segments on each face), capstone edge highlights, floating glyphs (8 orbital motes), and ancient inscription dots (20 hidden dots). All are set to `visible: false` until the finale.

**New behavior:** Instead of revealing all runes at once during the finale, reveal them **progressively — one face per orb collected.** Each face's runes glow in the color of the creature whose frequency was used to activate that orb:

| Orb # | Obelisk Face | Rune Color | Creature |
|--------|-------------|------------|----------|
| 1 | North face | `C.jellyGlow` (cyan) | Jelly |
| 2 | East face | `C.puffGlow` (warm pink) | Puffling |
| 3 | South face | `C.mothGlow` (green) | Moth |
| 4 | West face | `C.jellyGlow`/`C.puffGlow`/etc. (whichever creature was used) | Variable |
| 5 | All + floating glyphs | `C.orbGold` (bright gold) | Convergence |

By 4/5, four faces of the obelisk are lit in different creature colors — a visible progress tracker observable from across the world. The obelisk becomes a beacon that tells the player exactly how far they've come.

At 5/5, the floating glyphs orbit outward, the inscription dots light up, and the capstone edge highlights activate — the full existing finale reveal, now feeling like a culmination rather than a sudden switch.

**Implementation:** The rune meshes are already children of `obeliskGroup`. Group them by face (4 groups of ~5 runes each). In `updateQuest()`, when `orbsFound` increases, set the corresponding face group to `visible: true` and lerp their material's emissive color to the creature color over 2s. Track which creature frequency was carried when each orb was collected in a `orbCreatureMap[]` array.

---

## VII. FAIRY RING BOOST (Replaces "Flight")

The existing 8 fairy rings (`FAIRY_RING_N=8`) each contain 8–13 mushrooms arranged in a circle with spore haze, moss patches, mycelium web threads, glow worm dots, and a center stone.

### Current State
- `fairyRings` array stores `{ group, x, z, active, glowIntensity, spores[] }`
- Spore haze particles animate with phase-based drift
- `active` flag exists but is only used during finale

### Fairy Ring Boost Mechanic

When the player **jumps** (SPACE) while standing inside an **activated** fairy ring (one within a restored zone):

1. **Super-jump impulse:** `player.vel.y = JUMP_IMPULSE * 3.5` (existing physics handles the arc)
2. **Slow-fall:** For 4 seconds after launch, reduce `GRAVITY` effect to 0.3× (feather fall)
3. **Visual:** Ring mushrooms flash bright, spore haze explodes upward, `playFairyBounce()` audio fires (already exists in `audio.js`)
4. **Camera:** Widen FOV to 90° during ascent (existing `targetFOV` lerp handles this)

**Implementation:** In `player.js updatePlayer()`, add fairy ring proximity check. If `onGround && keys['Space'] && insideActivatedRing`, apply boosted impulse and set a `featherFallTimer`. While timer > 0, multiply gravity by 0.3.

This gives vertical exploration without a full flight system. Players reach treetop level (~15m) and drift down, seeing the forest from above — revealing orb glow patterns, creature migration paths, and the obelisk's growing light.

### Fairy Ring Activation
Fairy rings activate when they fall within a restored zone (within `restoreR` of any collected orb). Their `active` flag is already tracked. Inactive rings remain visually dim (base mushroom glow only).

---

## VIII. BUBBLE POPS AS MICRO-REWARDS

**File:** `entities/magical/bubbles.js`, `particles/bubblePops.js`

Bubbles already have drift behavior (`driftSpeed` 0.3–0.8 m/s), vertical bob (`bobAmp` 0.3–0.7), a `popped` state with pop timer, and `playBubblePop()` audio in `audio.js`. Currently bubbles pop on proximity (`BUBBLE_POP_R=1.5m`) with a burst particle effect.

### Restored Zone Behavior

In a **restored zone** (within `restoreR` of a collected orb), popping a bubble releases a brief **bioGlow micro-pulse** — a 2-second local brightness boost (1.5× `bioGlow` multiplier) within a 3m radius of the pop location. Flora within this radius flash brighter momentarily, then decay back to normal. The pop particle effect already exists; the glow pulse is a new per-frame check on nearby entities.

### Dimmed Zone Behavior

In a **dimmed zone** (outside all restoration radii), bubbles don't pop. The player's proximity pushes them gently away instead (repulsion force of ~0.5 m/s). They deflect and wobble but refuse to burst — a subtle environmental cue that the zone is "unhealthy."

**Child discovery (first restored pop):** *"Pop! The bubble made everything sparkle!"*
**Adult discovery:** *"Membrane rupture released stored photonic charge. Local luminance spike: +50%, 2s decay."*

**Implementation:** In the bubble proximity check, add a zone state conditional. If restored: pop normally + trigger glow pulse (iterate nearby flora, temporarily multiply emissiveIntensity). If dimmed: instead of popping, add a repulsion vector to the bubble's drift (`bubble.x += (bubble.x - player.x) * 0.5 * dt`).

---

## IX. PLAYER LIGHT EVOLUTION

The player's visual evolution uses **only the existing `playerLight`** (PointLight at `0x668888`, intensity 0.6, range 20m).

| Sync Level | Player Light Color | Intensity | Range | Visual Effect |
|------------|-------------------|-----------|-------|---------------|
| 0/5 | `0x668888` (default teal) | 0.4 | 12m | Dim, barely visible |
| 1/5 | `0x88aacc` (light blue) | 0.6 | 16m | Steady glow |
| 2/5 | `0x66ddaa` (seafoam) | 0.8 | 20m | Warm pulse |
| 3/5 | `0xaaffcc` (bright mint) | 1.0 | 25m | Strong radiance |
| 4/5 | `0xddffee` (near-white) | 1.2 | 30m | Nearby flora reacts |
| 5/5 | `0xffffff` (pure white) | 1.5 | 40m | Walking sun, Dimming clears on proximity |

**At 3/5:** The existing `checkDiscoveries()` system gains an extra trigger — when looking toward a hidden Orb from > 20m away, a faint directional hint appears in discovery text: *"Something glimmers to the north..."* (child) or *"Anomalous photon signature bearing 340°"* (adult).

**At 5/5:** The Dimming clears passively within `playerLight.distance` — the player becomes a walking restoration zone. This is purely cosmetic since by 5/5 all zones are already restored, but it provides a satisfying visual payoff during the FINALE phase.

### Dimming Feedback

Staying in heavily dimmed areas (far from any restored zone AND no orbs collected) for > 10s:
- `playerLight` flickers (intensity oscillates via `sin(t * 12) * 0.3`)
- Audio: Forest hum becomes filtered (existing `audio.js` filter modulation, reduce cutoff frequency)
- Camera: Subtle FOV narrowing (62° instead of 65°, existing `targetFOV` system)
- **Recovery:** Move toward any fairy ring, crystal, or creature. Proximity to any of these resets the dimming feedback timer.

This uses `playerIdleTime` (already tracked in `player.js`) combined with a new `dimmingExposure` timer.

---

## X. AUDIO SYNCHRONIZATION

The audio system (`systems/audio.js`) already provides a rich procedural soundscape. The manifesto's "world heartbeat becoming more complex" maps directly to existing systems.

### Current Audio Layers

| Layer | Source | Trigger |
|-------|--------|---------|
| Forest hum | 2 noise buffers (co-prime lengths) | Always active, volume by day phase |
| Wind | Filtered noise, freq 200–800Hz | `windStrength` from weather.js |
| Rain | Filtered noise, freq 1200–3200Hz | `rainRate` from weather.js |
| Thunder | Burst synthesis | `isStorming` flag, 2–5s spacing |
| Frogs | Phase-pulsed tones | Within 20m of pond, night/deep-night weighted |
| Crickets | Periodic pings | Within 12m of grass, 1.5–4.5s intervals |
| Water | Filtered stream | Within 15m of pond |
| Creature calls | Per-type synthesis | Proximity + cooldown (4–18s per type) |
| Footsteps | Impact synthesis | Head bob zero-cross in `player.js` |

### Sync-Gated Audio Progression

As `orbsFound` increases, new layers activate:

| Orbs | New Layer | Description |
|------|-----------|-------------|
| 0 | Baseline | Forest hum + wind + weather only. Creature sounds at full cooldown (sparse). |
| 1 | +Resonance drone | Low harmonic (60Hz triangle + 120Hz sine) fades in, amplitude follows `bioGlow` |
| 2 | +Creature chorus | Creature sound cooldowns halved (calls twice as often). Frog layer gains second pitch. |
| 3 | +Mycelial hum | New mid-frequency layer (300–500Hz filtered noise, AM at 0.5Hz) — represents fairy ring network activating. Triggered within 8m of any fairy ring. |
| 4 | +Harmonic cascade | All creature sounds gain reverb send increase (0.4 → 0.7). Wind filter sweep range widens. Cricket pings gain melodic variation. |
| 5 | +Full symphony | All layers at maximum. Thunder during storms gains musical pitch (tuned to key). Obelisk emits sustained chord (fundamental + 3rd + 5th). Existing `playOrbCollect()` tone rings continuously during FINALE phase. |

### Creature Sound Integration

The existing `playCreatureSound(type, position, playerPos)` already handles spatial volume falloff. For attunement, when the player matches a creature's rhythm:
- Play the creature sound at 1.5× volume with reduced cooldown
- Add a second harmonic (octave above) to signal "sync in progress"
- On full attunement (1.0), play a special ascending 4-note arpeggio (new synthesis, same Web Audio API approach)

---

## XI. ENVIRONMENTAL LITERACY

### A. The Sky as History Log

**Existing system:** `world/sky.js` paints a 2048×1024 canvas dome with 5000+ background stars, 60 bright stars with glow halos + diffraction spikes, 8 star clusters, 8 nebulae, and a milky way band. 120 stars twinkle via GPU-driven size oscillation. Up to 3 shooting stars active at once.

**New layer:** As each orb is collected, a constellation "lights up" — 5 of the existing bright stars are connected by faint line segments forming an animal shape:

| Orb # | Constellation | Shape | Creature Reference |
|--------|--------------|-------|--------------------|
| 1 | The Drifter | Jellyfish bell + tentacles | Jelly |
| 2 | The Hopper | Round body + long ears | Puffling |
| 3 | The Orbiter | Spread wings + tail streamer | Moth |
| 4 | The Strider | Antlered head + legs | Deer |
| 5 | The Convergence | Pentagon connecting all four | All creatures |

**Child reading:** *"Look! A star-bear appeared!"* (discovery text)
**Adult reading:** *"Constellation CRX-1 decoded. Pattern matches Metronome gait signature."* (discovery text)

**Implementation:** Add a `constellations` array of `{ stars: [indices], lines: THREE.LineSegments, visible: false }`. When `orbsFound` increases, set the corresponding constellation's `visible = true` and fade in its lines over 3s. The lines use `THREE.LineBasicMaterial` with additive blending and low opacity (0.15–0.25) to look ethereal.

### B. Shooting Star Wishes

**Existing system:** `world/sky.js` already spawns shooting stars every 4–16 seconds (up to 3 active at once). Each has a velocity of 80–200 m/s, a life of 0.5–1.3s, and a trail cone mesh that scales with life fraction.

**New mechanic:** If the player is looking upward (`pitch < -0.5`, i.e., camera tilted toward sky) when a shooting star crosses their approximate view frustum, a discovery-style text triggers — a brief poetic fragment. These are the "wishes" of the Archive.

Each wish is unique, gated by `orbsFound` (one new wish unlocks per sync level, 5 total). Once seen, a wish doesn't repeat. The wishes form a fragmented narrative that only the attentive sky-watcher pieces together.

| Orbs | Child Wish | Adult Wish |
|------|-----------|------------|
| 0 | *"Make a wish!"* | *"Archival fragment intercepted: ...system boot sequence, cycle 1."* |
| 1 | *"The stars are listening..."* | *"Fragment: ...I built this place for her. So she could always..."* |
| 2 | *"Someone drew pictures in the sky."* | *"Fragment: ...the oscillations matched her heartbeat. I had to preserve..."* |
| 3 | *"I wonder who lived here before."* | *"Fragment: ...I hope she remembers the fireflies."* |
| 4 | *"The stars feel closer tonight."* | *"Fragment: ...time cannot take what has been loved. Archival epoch locked."* |

**Implementation:** In the shooting star update loop, when a star is active, compute its approximate screen-space position. If `pitch < -0.5` (looking up) and the star is within a generous angular cone of the player's look direction (±40°), trigger the discovery text for the current orb tier. Track `wishSeen[orbsFound]` to prevent repeats. Uses the existing `discoveries.js` DOM overlay.

### C. Ground Glyphs (Discovery Points)

**Existing system:** `world/ground.js` generates a 2048×2048 procedural canvas texture with biome patches, cell noise, mycelium veins, root networks, leaf litter, moss clusters, pebbles, and dew highlights.

**New layer:** 10–15 hidden "glyph" markers scattered on the ground — small circular areas (1m radius) where the ground texture has a faintly different pattern (subtle spiral in the mycelium layer). These are nearly invisible unless the player is close (< 3m) AND stationary (< 0.5 speed for 2+ seconds).

When revealed:
- **Child:** Cute footprint symbols appear (discovery text: *"Little paw prints! Someone was here before you."*)
- **Adult:** Archivist log fragments (discovery text: *"Archive entry 7.3: The subject's circadian oscillation was... beautiful."*)

**Implementation:** Add to the `discoveries.js` system as a new discovery category. Ground glyphs are position-based triggers that also require low player speed (`playerIdleTime` already tracked in `player.js`). The glyph visual can be a small emissive `THREE.Mesh` (RingGeometry, flat on ground) that fades in when conditions are met.

### D. Echo-Visions

**Existing system:** The weather system includes `LUMINOUS_STORM` state with lightning flashes (`lightningFlash` 0–1, exponential decay). The player light already flickers.

**New mechanic:** During a luminous storm, if the player sprints (`keys['ShiftLeft']`) through a dimmed zone, the lightning flash momentarily reveals "echo traces" — faint afterimages of creature paths.

**Implementation:** When `isStorming && lightningFlash > 0.5 && playerSpeed > MOVE_SPEED * SPRINT_MULT * 0.8`, enable a set of pre-placed `THREE.Line` objects (creature patrol paths stored from their `wander` states). These lines flash visible for the duration of `lightningFlash > 0.3` (about 0.5s per flash), using additive blending at low opacity.

---

## XII. THE CONVERGENCE (THE ENDINGS)

The existing quest state machine already provides a dramatic multi-phase ending:

```
SEEK → RISING → COMPLETE (12s) → FINALE (30s) → TRANSFORM (13s)
```

### Existing Finale Sequence (Preserved)

1. **COMPLETE phase (0–12s):**
   - Obelisk emissive ramps 0 → 1.5
   - Pinnacle orb scales 1.0 → 1.5, opacity 0.9 → 1.0
   - Rings spin 1× → 5× speed
   - t=3s: Glitter explosion (200 particles, pink/purple, flutter physics)
   - t=3s: Moat fades in over 4s (opacity 0 → 0.6)
   - t=4s: Rainbow arcs fade in over 2s (6 colored ribbons + secondary arc, sparkle chains)
   - All creatures migrate toward center (deer walk, puffs hop, jellies float, moths orbit-shrink)

2. **FINALE phase (12–42s):**
   - Sustained obelisk/moat/rainbow emission
   - Creature gathering continues (arrive within 8m of center)
   - Rainbow meshes rotate slowly

3. **TRANSFORM phase (42–55s):**
   - Pink lasers shoot from obelisk tip to all 500 tree positions (staggered over 3s)
   - Full-screen white flash (3s brighten → 4s hold → 3s dim)
   - During flash: `transformTreeMaterials()` shifts all tree colors green → pink/purple
   - Ground vertex colors shift green/teal → purple
   - Lasers fade out post-transform

### Dual-Narrative Ending Enhancement

**During COMPLETE phase,** display finale text via the discovery system:

**Child ending (displayed at t=1s):**
> *"All the Sun-Seeds are home! The forest is waking up..."*

**Adult ending (displayed at t=1s):**
> *"SYNCHRONIZATION INDEX: 5/5. ARCHIVE INTEGRITY: 100%. EPOCH PRESERVATION: ENGAGED."*

**During TRANSFORM phase (t=6s, during white flash):**

**Child (centered overlay text, large, fading):**
> *"You did it, little Spark. The garden will remember you."*

**Adult (centered overlay text, monospace, fading):**
> *"Time-lock engaged. The Archive will persist. You have saved what mattered most — not the data, but the rhythm."*

**Synthesis:** Both perspectives see the same sunrise (the white flash and pink tree transformation). The child feels joy; the adult feels bittersweet relief.

**Implementation:** Add overlay text to the existing `questManager.js` COMPLETE/TRANSFORM handlers. Use the same DOM technique as `flashPlane` (already created in `initFlashOverlay()`). Text fades in/out on the same timers.

### Post-TRANSFORM: Free Roam

The current implementation has no defined state after TRANSFORM completes. The player is left in a pink/purple world with no objectives and no further feedback. This creates a deflating "now what?" moment.

**New state: `FREE_ROAM`** — entered after `transformTimer > 13` (flash fully dimmed).

**World behavior in FREE_ROAM:**
- The Dimming is permanently gone. All `bioGlow` modulation returns to the base day/night cycle values (no dimming factor anywhere).
- All fairy rings are active — the player can super-jump from any ring.
- Creature attunement happens **passively** — just being within 8m of any creature for 3 seconds syncs. No behavior matching required. The forest is at peace.
- The player's `playerLight` remains at 5/5 evolution (white, 1.5 intensity, 40m range).
- Creature sounds play at **minimum cooldown** (constant ambient chorus).
- The HUD quest label changes from `✦ 5 / 5` to simply `✦ Luminaries`.

**New ambient layer:** A sustained harmonic chord (root + major 3rd + 5th + octave, built from sine oscillators in `audio.js`) plays softly beneath all other audio — the world's "completed heartbeat." Volume modulates gently with `bioGlow`.

**Discovery text (triggered once, 10s after entering FREE_ROAM):**
- **Child:** *"The garden is yours now. Explore forever."*
- **Adult:** *"Epoch preserved. Archive entering maintenance mode. Free traversal authorized."*

**Implementation:** Add `'FREE_ROAM'` to the quest phase enum. In `updateQuest()`, after `transformTimer > 13`, set `questPhase = 'FREE_ROAM'`. In the FREE_ROAM handler: disable dimming factor, set all fairy ring `active = true`, reduce attunement threshold to near-instant, update HUD label. The sustained chord is a new audio layer gated on `questPhase === 'FREE_ROAM'`.

---

## XIII. TECHNICAL IMPLEMENTATION PRIORITIES

### What Already Exists (No Changes Needed)
- Player controls (WASD/SHIFT/SPACE/mouse/mobile) — `core/input.js`
- Quest state machine (SEEK → RISING → COMPLETE → FINALE → TRANSFORM) — `quest/questManager.js`
- 5 Orbs with proximity detection, flash, fly-up, laser — `entities/magical/orbs.js`
- Obelisk incremental rise + finale sequence — `quest/questManager.js`
- Creature state machines with distinct rhythms — `entities/fauna/*.js`
- Procedural audio (all layers) — `systems/audio.js`
- Day/night cycle with `bioGlow` — `systems/dayNightCycle.js`
- Weather with wind, rain, fog, storms, lightning — `systems/weather.js`
- AI senses (vision, hearing, proximity) — `systems/ai/senses.js`
- AI steering (seek, flee, wander, flock) — `systems/ai/steering.js`
- Discovery text system — `systems/discoveries.js`
- Bloom post-processing — `core/postprocessing.js`
- Crystal proximity lights — `core/lighting.js`
- Fairy rings with spore haze — `entities/magical/fairyRings.js`
- Dandelion dispersal — `entities/flora/dandelions.js`
- Bubble pop — `entities/magical/bubbles.js`
- HUD + overlay — `ui/hud.js`, `ui/overlay.js`

### New Systems (Ordered by Priority)

**Tier 1 — Core Loop (implements the manifesto's central mechanic):**

1. **Dimming System** — Modulate `bioGlow` per-entity based on distance to restored zones
   - Touch: `main.js` (director loop), `constants.js` (new `ORB_RESTORE_R` constant)
   - Complexity: Low — arithmetic per entity per frame, already in the hot path
   - Risk: None — purely visual, additive to existing system

2. **Creature Attunement** — Behavior-matching detection + frequency carry
   - Touch: `entities/fauna/*.js` (add `attunement` field), `main.js` (matching logic), `core/player.js` (carry state + light color)
   - Complexity: Medium — input pattern detection per creature type
   - Risk: Low — non-destructive, adds state without changing existing behavior

3. **Orb Activation Gate** — Require carried frequency to collect orbs
   - Touch: `quest/questManager.js` (gate touch detection on `playerFrequency`)
   - Complexity: Low — single conditional added to existing touch check
   - Risk: Low — falls back gracefully (without frequency, orb just doesn't activate)

4. **Stillness / Curiosity Response** — Creatures approach stationary player
   - Touch: `entities/fauna/*.js` (new `curious` state), `ai/steering.js` (`seek` already exists)
   - Complexity: Low — new state with existing steering behavior
   - Risk: None — additive behavior, doesn't change existing states

**Tier 2 — World Enrichment:**

5. **Fairy Ring Boost** — Super-jump + feather fall from activated rings
   - Touch: `core/player.js` (boost logic), `entities/magical/fairyRings.js` (activation state)
   - Complexity: Low — modify jump impulse conditionally, add decay timer

6. **Audio Sync Progression** — Gate audio layers by `orbsFound`
   - Touch: `systems/audio.js` (layer gating)
   - Complexity: Low — conditional volume/enable per layer

7. **Player Light Evolution** — Scale playerLight by sync level
   - Touch: `core/lighting.js` or `core/player.js`
   - Complexity: Trivial — lerp color/intensity/range by `orbsFound`

8. **Wisp Guides** — Wisps track toward unactivated orb when player carries frequency
   - Touch: `entities/magical/wisps.js` (target override), `main.js` (frequency check)
   - Complexity: Low — change target source, existing movement handles rest

9. **Weather Attunement Modifiers** — Weather state scales attunement rate per creature
   - Touch: `main.js` (attunement rate multiplier lookup)
   - Complexity: Trivial — multiply rate by weather-indexed table

10. **Day/Night Phase Gating** — `bioGlow` scales attunement rate and orb visibility
    - Touch: `main.js` (attunement rate), `quest/questManager.js` (orb glow amplitude)
    - Complexity: Trivial — multiply by exported float

11. **Bubble Pop Micro-Rewards** — Restored-zone pops emit bioGlow pulse; dimmed-zone bubbles deflect
    - Touch: `entities/magical/bubbles.js` (zone check), `main.js` (glow pulse)
    - Complexity: Low — conditional pop behavior + nearby entity emissive boost

12. **Crystal Resonance Chains** — Walking between crystals triggers harmonic tone + bioGlow corridor
    - Touch: `main.js` (crystal visit tracking), `systems/audio.js` (interval tone)
    - Complexity: Medium — tracking visit order, computing chain geometry

13. **Dandelion Seed Wayfinding** — Dispersed seeds drift toward nearest unfound orb in restored zones
    - Touch: `particles/seeds.js` (velocity bias)
    - Complexity: Low — add directional vector to existing wind drift

14. **Obelisk Progressive Rune Reveal** — One face lights per orb, colored by creature used
    - Touch: `entities/world/obelisk.js` (face grouping), `quest/questManager.js` (reveal trigger)
    - Complexity: Low — visibility toggle + color lerp on existing meshes

**Tier 3 — Narrative & Polish:**

15. **Dual-Narrative Discovery Text** — Two text maps + perspective toggle
    - Touch: `systems/discoveries.js`, `ui/hud.js` (toggle button)
    - Complexity: Low — data authoring is the main effort

16. **Sky Constellations** — Reveal star patterns per orb
    - Touch: `world/sky.js` (add line segments)
    - Complexity: Low — static geometry, visibility toggle

17. **Shooting Star Wishes** — Poetic fragments triggered by sky-watching during shooting stars
    - Touch: `world/sky.js` (frustum check), `systems/discoveries.js` (text display)
    - Complexity: Low — angular cone check + discovery trigger

18. **Ground Glyphs** — Hidden discovery markers revealed by stillness
    - Touch: `systems/discoveries.js`, `main.js`
    - Complexity: Low — position triggers + small meshes

19. **Finale Narrative Text** — Overlay text during COMPLETE/TRANSFORM
    - Touch: `quest/questManager.js`
    - Complexity: Trivial — DOM text on timer

20. **Post-TRANSFORM Free Roam** — Peaceful post-game state with all systems unlocked
    - Touch: `quest/questManager.js` (new phase), `systems/audio.js` (sustained chord)
    - Complexity: Low — new phase handler, disable dimming, activate all rings

21. **Echo-Visions** — Storm-sprint creature path traces
    - Touch: `main.js`, `systems/weather.js`
    - Complexity: Medium — requires storing creature patrol history

---

## XIV. WHAT THIS MANIFESTO DOES NOT REQUIRE

The following elements from the original manifesto are **explicitly descoped** because they would require systems that don't exist and would be disproportionately expensive to build:

- **Hard biome boundaries** — The world remains one continuous forest. Zones are soft, defined by orb restoration radius.
- **Full flight system** — Replaced by fairy ring super-jump + feather fall. Achievable within existing physics.
- **Chromatic aberration / glitch shaders** — Replaced by bioGlow modulation + playerLight flickering. No custom shader pipeline needed.
- **Input sequence recording/replay** — Replaced by simpler behavior matching (sprint/walk/jump/still detection). No sequence buffer needed.
- **Visual avatar mesh changes** (wings, star-child model) — Replaced by playerLight evolution. No new meshes attached to camera.
- **Separate ending cutscenes** — Both narratives use the same existing TRANSFORM sequence with different overlay text.
- **Howler.js migration** — The Web Audio API synthesis in `audio.js` is already superior for procedural soundscapes. Howler.js remains unused.

---

## XV. NARRATIVE TONE GUIDE

### Child Layer Voice
- Short sentences, wonder-filled
- Nature metaphors: "sleepy," "sparkly," "friends," "dancing"
- No technical terms, no darkness beyond "sleepy"
- Discovery text: 8–15 words max
- Finale text: Warm, celebratory, affirming

### Adult Layer Voice
- Clinical, archival, slightly melancholic
- Technical metaphors: "oscillation," "entropy," "calibration," "epoch"
- Subtext of loss: the Archive was built to preserve something precious
- Discovery text: 10–20 words, formatted as log entries
- Finale text: Philosophical, bittersweet — you saved a memory, not the thing itself

### The Unspoken Third Layer
Neither narrative tells the player directly, but the environmental details imply: the Architect who built the Archive was a parent trying to freeze time — to preserve the world as their child once saw it. The child perspective IS the original data. The adult perspective is the diagnostic routine that maintains it. The player, regardless of which layer they read, is performing the same act: keeping something beautiful alive.

This is communicated through:
- Ground glyphs (child's drawings / Archivist logs)
- Constellation patterns (fairy-tale animals / technical schematics)
- The obelisk's rune carvings (already exist, hidden until finale — reinterpret as either "magic symbols" or "data headers")
- The TRANSFORM: green → pink isn't corruption — it's the Archive's memory of spring, finally unlocked.
