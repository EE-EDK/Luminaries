# Luminaries

A first-person 3D exploration experience set in a procedurally generated bioluminescent forest. Navigate a nighttime world where every tree, creature, sound, and glow is generated in real time — no textures loaded, no audio files, no pre-built assets.

**[Play Now](https://ee-edk.github.io/Luminaries/)**

---

## The World

You awaken in a forest of light. Trees pulse with inner glow, mushrooms haze spores into the dark, crystals hum with proximity light, and creatures drift through the canopy. A day/night cycle shifts the sky from dusk amber through deep midnight, while weather sweeps from clear starlit calm to luminous storms with lightning.

Five golden orbs are scattered across the forest. Find them.

### What You'll Encounter

**Flora** — 500 template-instanced trees with procedural bark texture and 4-tier LOD. Mushroom clusters that pulse and emit spores. Crystal formations that cast proximity light. Fields of GPU-animated grass in purple, blue, and teal variants. Ferns, flowers, reeds, dandelions that disperse seeds in the wind. Exotic species: thornblooms, helixvines, snapthorns, spiral fronds, corpse blooms, orb bushes, lantern pods, veil moss.

**Fauna** — Luminous jellyfish drift and pulse with glass-harmonica voices. Pufflings hop through undergrowth with chirping arpeggios. Spirit deer walk with IK-driven legs and flee gracefully if you approach too fast. Moon moths orbit crystal formations with fluttering whispers.

**Sky** — 600+ stars, 3 galaxies, 5 nebulae, 8 constellation patterns, 6 anomalies. Aurora borealis waves. Shooting stars every 4-16 seconds. The entire dome rotates with the day/night cycle.

**Weather** — Six weather states: clear, misty, light rain, heavy rain, fog banks, and luminous storms. Wind drives particle systems (spores, seeds, leaves, rain). Lightning flashes illuminate the landscape. Weighted random transitions with smooth cosine blending.

**Audio** — Every sound is synthesized in real time via Web Audio API. Forest hum (brown noise layers), wind (filtered noise tracks weather), rain, thunder, frogs near ponds, crickets near grass. Each creature has a unique synthesized voice. Generative ambient music — harp, flute, drone, and chime over a major pentatonic scale. No audio files loaded.

**Particles** — Fireflies cluster near crystals and flowers, spores drift from mushrooms, dust bursts on landing, dandelion seeds ride the wind, star motes float in the canopy, bubble pops sparkle, leaves swirl in storms, footprints trail behind you, rain falls from the sky.

### The Quest

Collect all 5 golden orbs hidden across the forest. Each orb fires a laser beam to the central obelisk, which rises progressively. The fifth orb triggers a finale: glitter explosions, rainbow arcs, creature migration to center, and a world-wide color transformation.

---

## Controls

| Input | Action |
|-------|--------|
| **W A S D** | Move |
| **SPACE** | Jump |
| **SHIFT** | Sprint |
| **Click + Drag** | Look around |

Mobile devices get a virtual joystick (left side) and jump button (right side) automatically.

---

## Getting Started

```sh
git clone https://github.com/EE-EDK/Luminaries.git
cd Luminaries
npm install
npm run dev       # → http://localhost:5173
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |

---

## Architecture

```
src/
├── main.js              # Entry point — orchestration hub (2,356 lines)
├── constants.js         # All constants + color palette (C object)
├── core/                # Engine: renderer, camera, lighting, input, player, bloom
├── world/               # World gen: terrain, ground texture, sky dome, aurora
├── entities/
│   ├── flora/           # 16 plant types (trees, mushrooms, crystals, grass, ...)
│   ├── fauna/           # 4 creature types (jellies, pufflings, deer, moths)
│   ├── magical/         # 5 types (wisps, fairy rings, bubbles, ponds, orbs)
│   └── world/           # 4 types (rocks, obelisk, moat, rainbows)
├── particles/           # 9 pooled systems (fireflies, spores, dust, rain, ...)
├── systems/             # Audio, music, weather, day/night, discoveries, AI
├── quest/               # Quest state machine + laser effects
└── ui/                  # HUD + overlay
```

**64 source files. ~13,000 lines of code. Zero external assets.**

The `director()` function in `main.js` is the central update hub — every entity, particle, system, and UI element updates through it each frame. World generation uses seeded RNG (seed 42) for deterministic placement.

---

## Technical Highlights

### Procedural Everything
- **Terrain:** Value noise + FBM heightmap with ridge crests, knolls, terraces, gullies
- **Ground texture:** 2048x2048 canvas with 10 procedural layers + vertex-color biomes + shader uniforms
- **Sky:** 2048x1024 canvas dome with stars, galaxies, nebulae painted procedurally
- **Audio:** Full Web Audio API synthesis — brown/white noise buffers, oscillator chains, filter envelopes, shared reverb. Zero audio files.
- **Music:** Generative ambient via oscillators — harp plucks, flute tones, drone beds, chime sparkles

### Performance Engineering
- **Template instancing:** 500 trees rendered in ~40 draw calls (10 templates x 4 InstancedMesh each)
- **4-tier LOD:** Full detail < 20m, reduced 20-70m, impostor sprite 70-110m, hidden > 110m
- **GPU grass:** 1,200 patches animated entirely in vertex shader — zero CPU cost
- **Light budget:** Hard cap of 8 simultaneous lights with proximity-sorted crystal pool
- **Visibility culling:** Every entity type culled by squared-distance check (no sqrt in hot path)
- **Bloom:** UnrealBloomPass with emissive material pipeline (fallback flag for low-end devices)

### AI & Behavior
- **Senses:** `canSee()`, `canHear()`, `isNear()` — per-creature perception
- **Steering:** Flee, arrive, separation, cohesion, world bounds, obstacle avoidance
- **Deer IK:** Sin-based leg phase offsets with front/back 180 degree separation
- **State machines:** Per-creature (idle/walk/hop/flee/patrol), weather (6 states), day/night (4 phases), quest (5 phases)

---

## Technology

| Technology | Role |
|-----------|------|
| [Three.js](https://threejs.org/) r172+ | 3D rendering (ES module) |
| [Vite](https://vitejs.dev/) | Build system, dev server, hot reload |
| Web Audio API | Procedural audio synthesis |
| WebGL | Hardware-accelerated 3D graphics |
| ES Modules | Modern JavaScript module system |
| UnrealBloomPass | Post-processing glow pipeline |

---

## Project Status

**Phase 1: Foundation** — Complete. The core forest experience is fully built: terrain, sky, 29 entity types, 9 particle systems, procedural audio + music, 6-state weather, 4-phase day/night, 5-orb quest with laser/rainbow/transform finale.

**Phase 2: Symbiotic Attunement** — In progress. Adding narrative depth: creature attunement mechanics, zone-based restoration (The Dimming), dual-narrative text (child/adult perspectives), player light evolution, audio sync progression. See `MANIFESTO.md` for the full design.

---

## Documentation

| Document | Purpose |
|----------|---------|
| `CLAUDE.md` | Development instructions for AI-assisted coding |
| `reference/` | Architecture, entity registry, patterns, performance, audio, roadmap, narrative, manifesto |

---

## License

MIT
