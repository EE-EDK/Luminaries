# Luminaries — Game Guide

*A living document. Updated as the world grows.*

---

## What Is Luminaries?

Luminaries is a meditative first-person exploration through a procedurally generated bioluminescent forest. There are no enemies, no health bars, no timers. The world is alive — every glow, every sound, every creature exists to be observed, not conquered.

You are a small light in a vast dark forest. The forest once sang. Now it is quiet. Five anchors of light remain, buried beneath the dark. Find them.

---

## Themes

**Bioluminescence as Language** — The forest communicates through light. Mushrooms pulse in waves, crystals hum when you draw near, jellyfish drift with glass-harmonica voices. Light is not decoration — it is the forest speaking.

**Symbiosis, Not Extraction** — Progress comes from listening and moving with the world, not taking from it. The creatures are not resources. They are partners. Match their rhythms. Carry their songs.

**Restoration Over Conquest** — Something dimmed this forest. Your role is not to defeat whatever caused it, but to remind the forest of what it was. Each orb you restore is a memory recovered, not a trophy earned.

**The Tension Between Wonder and Understanding** — Two voices narrate this world. One sees magic. One sees data. Both are true. The forest holds space for the child who marvels and the scientist who measures. The story lives in the overlap.

---

## How to Play

### Controls

| Input | Action |
|-------|--------|
| **W A S D** | Move |
| **SPACE** | Jump (or tap rhythm near jellyfish to attune) |
| **SHIFT** | Sprint |
| **TAB** | Toggle narrative perspective (Child / Adult) |
| **Right-click (hold)** | Spirit Hum — move mouse up/down to control pitch |
| **Click + Drag** | Look around |

On mobile, a virtual joystick appears on the left, jump/sprint buttons on the right, and a vertical **HUM slider** on the left edge for pitch control (drag up/down).

### Tips for Exploration

- **Walk, don't sprint.** The forest reveals itself to those who move slowly. Sprint past a crystal and you miss its hum. Walk near a deer and it may not flee.
- **Stand still.** Pause near creatures. Watch their rhythms. After a few seconds, they may approach you. The forest rewards patience.
- **Match their rhythms.** Each creature has a unique attunement method. Sprint with pufflings, walk with deer, stand still and tap SPACE near jellyfish, circle around moths. When you're in sync, your light changes color.
- **Carry the frequency.** Once attuned, hurry to an orb before the frequency fades. Orbs won't activate without a carried frequency.
- **Follow the wisps.** When you're carrying a frequency or standing still long enough, your companion wisps drift toward the nearest unfound orb.
- **Jump in fairy rings.** In restored zones, fairy ring mushroom circles grant super-jumps with a slow feather-fall descent.
- **Look up during shooting stars.** They carry fragments of the forest's story, gated by how many orbs you've found.
- **Press Tab.** Toggle between the child's wonder and the scientist's data. Both perspectives describe the same world.
- **Follow the light.** Brighter areas often hold discoveries. Dim areas hold mysteries — and zones waiting to be restored.
- **Listen.** Every creature has a unique synthesized voice. Frogs sing near ponds. Crickets chirp near grass. The wind tells you the weather. As you find orbs, the creatures sing more often.

---

## The World

### Flora

The forest floor is carpeted with life:

- **Trees** — 500 procedural trees with bark texture, swaying in the wind. Their canopies glow faintly from within.
- **Mushrooms** — Clusters that pulse with bioluminescent light and release drifting spores. Step near a cluster and the rhythm changes — faster, brighter, then settling back.
- **Crystals** — Mineral formations that cast colored light onto their surroundings. Approach and they brighten. Chain three crystal interactions and the forest notices.
- **Grass** — Fields of purple, blue, and teal grass animated entirely on the GPU, swaying with the wind.
- **Exotic Species** — Thornblooms, helixvines, snapthorns, spiral fronds, corpse blooms, orb bushes, lantern pods, veil moss. Each procedurally placed and unique.

### Fauna

Four creature types inhabit the forest, each with distinct behavior and voice:

- **Spirit Deer** — Graceful walkers with IK-driven legs. They flee if you approach too fast, but walk slowly nearby and they may tolerate your presence. Their call is a warm, distant horn.
- **Pufflings** — Small round creatures that hop through the undergrowth with chirping arpeggios. Energetic and curious, they scatter when startled but return quickly.
- **Luminous Jellyfish** — Translucent drifters that pulse with a slow, meditative rhythm. Their glass-harmonica voices echo through the canopy.
- **Moon Moths** — Orbital creatures that circle crystal formations with soft, fluttering whispers.

### Sky

The dome above holds 600+ stars, 3 galaxies, 5 nebulae, 8 constellation patterns, and 6 anomalies. Aurora borealis waves ripple across the sky. Shooting stars streak every 4-16 seconds — each one carries a fragment of the forest's story.

### Weather

Six weather states cycle with weighted random transitions:

- **Clear** — Starlit calm. Baseline exploration.
- **Misty** — Soft haze. Creatures move more slowly.
- **Light Rain** — Gentle drops. Small creatures become more active.
- **Heavy Rain** — Downpour. The world hunkers down.
- **Fog Banks** — Thick fog. Visibility drops but creatures are calmer.
- **Luminous Storm** — Lightning illuminates the landscape. Electrical energy excites the moths.

### Day/Night Cycle

The world breathes on a continuous cycle through four phases:

- **Dusk** — Warm amber light. Good visibility. Creatures settling in.
- **Night** — Full darkness. Bioluminescence at its brightest. Creatures active.
- **Deep Night** — Maximum glow. The best time for discovery.
- **Dawn** — The world quiets. Creatures drowsy. A moment to reflect.

---

## The Quest

### The Dimming

The forest dims in five angular sectors radiating from the center. Each sector is suppressed — muted colors, reduced bioluminescence — until its orb is restored. When you activate an orb, a restoration wave blooms outward, returning the zone to full luminosity.

### Creature Attunement (Two-Phase Unlock)

Five golden orbs are hidden across the forest. But orbs won't activate for just anyone — you must carry a creature's frequency to unlock them. Each creature requires a **two-phase unlock**:

**Phase 1 — Spirit Hum (Discover their frequency):**
Hold right-click to hum, then move your mouse up/down to sweep pitch. When you're near a creature's frequency, you'll see glowing rings and hear resonance. Sustain the match for 2 seconds to lock the pitch.

| Creature | Pitch Hint | Character |
|----------|-----------|-----------|
| **Deer** | Low hum (~120 Hz) | Deep and warm |
| **Moth** | Mid-low (~240 Hz) | Gentle flutter |
| **Jellyfish** | Mid-high (~390 Hz) | Glass harmonica shimmer |
| **Puffling** | High (~550 Hz) | Bright chirp |

**Phase 2 — Resonance Behavior (Perform their dance):**
With pitch locked, perform the creature-specific action to build attunement. Neither humming alone nor behavior alone unlocks — both are required.

| Creature | How to Attune | What Happens |
|----------|---------------|--------------|
| **Jellyfish** | Stand still within 6m, tap SPACE in their rhythm (~2s) | Glass-harmonica voice brightens |
| **Puffling** | Sprint (SHIFT) within 8m | Chirp arpeggio quickens |
| **Deer** | Walk (no sprint) within 8-12m, same direction | Horn tone rises |
| **Moth** | Move within 8m, look toward the moth | Flutter intensifies |

When attuned, your player light shifts color (cyan for jelly, seafoam for puffling, lime for moth, warm for deer). Carry this frequency to an orb to activate it. The frequency decays over time, so move with purpose.

### Orb Activation

When you collect an orb, it fires a laser beam to the central obelisk. The obelisk rises with each connection. A constellation appears in the sky — one per orb, shaped after the creature types. Discovery text marks each moment in your chosen narrative perspective.

The fifth orb triggers a finale: glitter explosions, rainbow arcs across the sky, creatures migrating to the center, and a world-wide color transformation. After the transformation, the world enters **Free Roam** — the dimming is gone, all fairy rings are active, and the forest is at peace.

### Player Light Evolution

Your light grows as you restore the forest:

| Orbs Found | Color | Intensity | Range |
|------------|-------|-----------|-------|
| 0 | Dim teal | Low | 12m |
| 1-2 | Blue-green | Medium | 16-20m |
| 3-4 | Bright green-white | High | 25-30m |
| 5 | Pure white | Maximum | 40m |

---

## Discovery Moments

The first time you encounter something new, atmospheric text appears briefly on screen. Press **Tab** to toggle between the child's wonder and the scientist's data:

| Encounter | Child Perspective | Adult Perspective |
|-----------|-------------------|-------------------|
| Spirit Deer | "Spirit Deer — it glows like starlight" | "Cervidae luminaris — bioluminescent antler tissue" |
| Puffling | "Puffling — a tiny bouncing friend!" | "Organism: micro-fauna, rapid locomotion pattern" |
| Luminous Jelly | "Luminous Jelly — floating like a dream" | "Medusozoa suspensa — photonic membrane detected" |
| Moon Moth | "Moon Moth — dancing with the crystals" | "Lepidoptera lunaris — orbital harmonic resonance" |
| Fairy Ring | "Fairy Ring — the mushrooms are whispering" | "Mycorrhizal network node — substrate frequency detected" |
| Moonlit Pond | "Moonlit Pond — the water remembers the sky" | "Aquatic substrate — residual luminance signature" |

These moments are quiet acknowledgments — the forest noting that you noticed.

---

## The Story

### Two Voices, One World

Luminaries tells its story through two narrative layers that describe the same events in different languages:

**The Child's Voice — "The Magic Garden"**
> *"Once, this forest sang. Every root hummed with light. Every canopy blazed. Then the glow began to dim. The songs grew quiet."*

You are **The Spark**, a tiny light-spirit awakened in a sleepy forest. The Dimming — "Sleepy Dust" — made the animals quiet and the plants go dark. Dance with the forest's friends. Wake the Sun-Seeds. Bring color and music back.

**The Scientist's Voice — "The Chronobiological Archive"**
> *`// BIOSENSOR ARRAY v4.2 — Historical luminance baseline detected`*
> *`// WARNING: Sector luminance decay — 73% loss over 2,400 cycles`*

You are an **Autonomic Diagnostic Routine** within a decaying biological hard drive. The Dimming is an entropic Chronophage — data corruption accelerating time. Your purpose: recalibrate the environment's clock by syncing with surviving biological metronomes.

**The Hidden Truth** — Behind both voices lies a third story: an architect who built this place to preserve the world as their child once saw it. The child's perspective *is* the original data. The adult's perspective is the maintenance routine. The player keeps something beautiful alive.

### Narrative Philosophy

- No exposition dumps — all story through brief discovery text and environmental clues
- No dialogue — you are alone, accompanied only by the world itself
- No cutscenes — everything happens in-world during gameplay
- The story is optional — you can complete the game without reading any text
- **Core message:** Preservation through attention, not possession

---

## What's Coming Next

The following features are planned but not yet implemented:

- **Weather Attunement Modifiers** — Fog calms deer (easier attunement), rain energizes pufflings, storms excite moths
- **Day/Night Phase Gating** — bioGlow scales attunement rate; some discoveries only visible at certain times
- **Bubble Pop Micro-Rewards** — Zone-aware bubble behavior with small bonuses
- **Crystal Resonance Chains** — Chain 3+ crystal interactions for harmonic tones and bioGlow corridors
- **Dandelion Seed Wayfinding** — Seeds drift subtly toward unfound orbs
- **Obelisk Rune Reveal** — One creature-colored rune face revealed per orb
- **Ground Glyphs** — Hidden discovery markers revealed by standing still in the right places
- **Echo-Visions** — Sprint through a storm to see ghostly traces of creature paths

---

## Story Considerations for Development

These notes guide ongoing narrative development:

1. **The dual narrative is not a gimmick** — it's structural. Every piece of discovery text, every environmental cue, every creature behavior should read coherently from both perspectives.

2. **Weather affects gameplay, not just visuals** — Fog calms deer (easier attunement). Rain energizes pufflings. Storms excite moths. The ecosystem is interconnected.

3. **The five zones are thematic, not geographic** — Each zone is defined by its dominant flora/fauna, not by hard boundaries. The forest blends at the edges.

4. **Stillness is a mechanic** — Standing still near creatures triggers curiosity responses. The game rewards patience as a core design principle.

5. **The finale is emotional, not spectacular** — Yes, there are glitter explosions and rainbow arcs. But the real payoff is the text: *"You did it, little Spark. The garden will remember you."* / *"Time-lock engaged. You saved not the data, but the rhythm."*

6. **The shooting stars carry story fragments** — Gated by orbs found. At 0 orbs: *"Make a wish!"* At 4 orbs: *"The stars feel closer tonight."* / *"Fragment: ...time cannot take what has been loved."*

7. **The universal message** — The player didn't conquer the forest. They remembered it *with* it. They kept something beautiful alive through attention and synchrony. The forest wasn't a resource to extract from — it was a conversation to participate in.

---

*This guide is a living document and will be updated as new features, creatures, and story elements are added to Luminaries.*
