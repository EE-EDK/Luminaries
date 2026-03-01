# Luminaries

A first-person 3D exploration experience set in a procedurally generated bioluminescent forest. Built with Three.js and Vite.

https://ee-edk.github.io/Luminaries/

## Play

```sh
npm install
npm run dev     # http://localhost:5173
```

Or open the deployed version at the link above.

## Controls

| Input | Action |
|-------|--------|
| WASD | Move |
| SPACE | Jump |
| SHIFT | Sprint |
| Click + Drag | Look around |

Mobile devices get an on-screen joystick and jump button automatically.

## The World

Navigate a nighttime forest filled with glowing life:

- **Flora** — 500 instanced trees with procedural bark texture, mushrooms, crystals, ferns, flowers, reeds, grass, dandelions, thornblooms, helixvines, snapthorns
- **Fauna** — Floating jellyfish, pufflings, glowing deer, and moths
- **Magical elements** — Wisps, fairy rings, bubbles, star motes, ponds with lily pads
- **Sky** — Stars, galaxies, nebulae, constellations, aurora, day/night cycle
- **Weather** — Dynamic system: clear, misty, rain, fog banks, luminous storms
- **Audio** — Fully procedural soundscape via Web Audio API: ambient forest, creature calls, weather, generative background music (harp/flute/lute)
- **Particles** — Fireflies, spores, dust motes, dandelion seeds, bubble pops

## Quest

Collect all 5 golden orbs scattered across the forest. Each orb triggers a flash, fly-up, and laser beam to the obelisk. Completing the quest triggers a finale with glitter explosions, rainbows, and a world transformation.

## Performance

Target: 20 FPS minimum. Tree rendering uses template instancing (10 templates, ~40 draw calls for 500 trees) with 4-tier LOD (full detail, reduced, impostor sprite, hidden).

## Tech

- **Three.js r172+** — ES module 3D rendering
- **Vite** — Build system with hot reload
- **Web Audio API** — Procedural audio (no audio files)
- **Post-processing** — UnrealBloomPass for bioluminescent glow
- **Seeded RNG** — Deterministic world generation (seed 42)
