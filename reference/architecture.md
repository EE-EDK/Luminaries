# Architecture Reference

> Quick-reference for understanding how Luminaries is wired together.
> Read this first when starting a new session.

## System Dependency Graph

```
index.html
  └── src/main.js (~1,100 lines — bootstrap + scheduler)
        │
        ├── BOOTSTRAP ─────────────────────────────────────────
        │   ├── core/renderer.js     → renderer, camera, scene, clock
        │   ├── core/geometries.js   → GEO (shared geometry pool)
        │   ├── core/lighting.js     → hemiLight, moon, moon2, playerLight, orbLight, crystalLights[5]
        │   ├── core/postprocessing.js → EffectComposer + UnrealBloomPass
        │   ├── core/input.js        → keys, yaw, pitch, mouse/touch/joystick
        │   └── core/player.js       → player {pos, vel, onGround}, updatePlayer()
        │
        ├── WORLD GENERATION (seeded RNG, seed=42) ────────────
        │   ├── world/terrain.js     → getGroundY(), registerFlatZone()
        │   ├── world/ground.js      → createGround() → 2048² canvas + vertex biomes + shader
        │   ├── world/sky.js         → createSkyDome() → stars, galaxies, nebulae, constellations
        │   └── world/aurora.js      → initAurora() → animated aurora bands
        │
        ├── ENTITY PLACEMENT (populate() function) ────────────
        │   ├── entities/flora/       → 16 types (trees, mushrooms, crystals, grass, ...)
        │   ├── entities/fauna/       → 4 types (jellies, pufflings, deer, moths)
        │   ├── entities/magical/     → 5 types (wisps, fairyRings, bubbles, ponds, orbs)
        │   └── entities/world/       → 4 types (rocks, obelisk, moat, rainbows)
        │
        ├── PARTICLE INIT ─────────────────────────────────────
        │   └── particles/            → 11 systems (fireflies, spores, dust, seeds, starMotes,
        │                               bubblePops, leaves, footprints, rain, resonanceRings, orbBurst)
        │
        ├── SYSTEM INIT ───────────────────────────────────────
        │   ├── systems/audio.js      → initAudio() → Web Audio API graph
        │   ├── systems/music.js      → setupMusic() → generative ambient music
        │   ├── systems/weather.js    → initWeather() → 6-state machine
        │   ├── systems/dayNightCycle.js → initDayNight() → 4-phase cycle
        │   ├── systems/dimming.js    → initDimming() → sector-based bioGlow suppression (Phase 2)
        │   ├── systems/discoveries.js → initDiscoveries() → first-encounter tracker
        │   ├── systems/spiritHum.js  → Spirit hum state machine (pitch lock + resonance detection)
        │   └── systems/ai/           → senses.js + steering.js (used by fauna)
        │
        ├── QUEST INIT ────────────────────────────────────────
        │   ├── quest/questState.js   → initQuestState(), updateQuestState() → 5-phase state machine
        │   ├── quest/questVisuals.js → Three.js rendering + effects for orbs/obelisk/lasers
        │   ├── quest/config.js       → QuestPhases, QUEST_CONFIG, ORB_CREATURE_SEQUENCE
        │   └── quest/lasers.js       → makeLaser() → beam + glitter effects
        │
        └── ANIMATION LOOP ────────────────────────────────────
            loop(t):
              dt = clock.getDelta()
              updatePlayer(dt)           → physics, collision, camera bob
              updateDimming(dt)          → advance sector restoration waves
              director(dt, t)            → ALL per-frame entity/system updates (includes _directorQuest → updateQuestState(dt) + updateQuestVisuals(dt, t))
              global dimming effects     → exposure, fog, saturation, lights
              postRender()               → bloom compose + render
```

## Data Flow: How State Moves

```
constants.js ──→ Entity counts, physics values, colors (C object)
     │              Immutable. Never changes at runtime.
     │
kernel/ ───────→ Modular infrastructure layer
     │   eventBus.js   → Typed pub/sub (Events.ORB_COLLECTED, etc.)
     │   scheduler.js  → Ordered phase runner (Phase.FAUNA_UPDATE, etc.)
     │   context.js    → Pre-allocated per-frame snapshot (dt, player, bioGlow...)
     │
main.js ───────→ Bootstrap + entity arrays (module-scoped; entity state lives in state/)
     │           director() calls runScheduler() which runs all systems in phase order.
     │
     ├─→ Systems registered with scheduler (phase order):
     │     crystalProximity(10) → particleSpawn(20) → floraGlow(30) →
     │     crystalVisuals(32) → spatialHashUpdate(35) → spiritHum(38) →
     │     fauna(40) → attunement(60) → sky(70) → vegetation(80) →
     │     rocks(90) → magical(100) → particles(110) → quest(120) →
     │     footprints(130) → audio(140) → discoveries(150) → perfReport(160)
     │
     ├─→ Event bus: cross-cutting concerns flow through eventBus
     │     Quest emits ORB_COLLECTED → audio, dimming, discoveries subscribe
     │     Player emits FOOTSTEP, JUMP, LAND → audio subscribes
     │
     └─→ Audio callbacks: BOTH event bus AND legacy callback injection work.
           audio.js subscribes to events in initAudio().
           Legacy callbacks remain for backward compatibility during migration.
```

## Spawn Order (Critical for Correct Heights)

```
1. registerFlatZone()  → Ponds, fairy rings register their flat areas
2. Trees placed        → getGroundY() now accounts for flat zones
3. Other flora/fauna   → Heights sampled after all flat zones registered
4. Particles init      → Pre-allocated pools, no placement
5. Quest init          → Orb positions, obelisk at world center
```

## The Director Pattern

`director(dt, t)` in main.js is the central update hub. Order matters:

1. **Crystal proximity** → sets `dirState` ('NEAR_CRYSTAL' | 'EXPLORE')
2. **Firefly spawning** → rate varies by dirState, rain, flower reactivity
3. **Spore emission** → proximity to mushrooms
4. **Mushroom glow** → pulse + visibility cull (50m)
5. **Crystal glow** → rotation + light intensity
6. **Crystal proximity lights** → sort nearest 5, assign to lightpool
7. **Jelly update** → drift, pulse, visibility cull (55m)
8. **Puffling update** → hop/idle/wander states, visibility cull (40m)
9. **Deer update** → walk/pause/look/flee AI, IK legs, visibility cull (60m)
10. **Moth update** → orbit/patrol, wing flap, visibility cull (45m)
10b. **Spirit hum** → `updateHum()` with input Y + nearest creature distances
10c. **Spirit hum audio** → `startSpiritHumAudio` / `updateSpiritHumAudio` / `stopSpiritHumAudio`
10d. **Resonance rings** → `spawnResonanceRing()` at ~3Hz when resonance > 0, `updateResonanceRings(dt)`
11. **Wisp update** → target tracking, scatter, glow
12. **Flora updates** → ferns, flowers, reeds, dandelions, snapthorns, etc.
13. **Bubble update** → drift, bob, proximity pop
14. **Weather update** → state transitions, wind, fog, lightning, rain
15. **Day/night update** → phase interpolation, bioGlow, sky colors
16. **Aurora update** → wave animation
17. **Particle updates** → all 11 systems
18. **Audio update** → ambient volumes, music, step cooldown
19. **Sky update** → shooting stars, twinkle
20. **Discovery checks** → first-encounter triggers
21. **HUD update** → FPS, position, quest status

## Key Module Interfaces

### Entity Builder Pattern
Every entity module exports a `make*()` function:
```js
// Returns: { group: THREE.Group, x, z, ...behaviorState }
const entity = makeMush(x, z, groundY);
scene.add(entity.group);
entityArray.push(entity);
```

### Particle Pool Pattern
```js
initFlies(scene);              // Pre-allocate pool
spawnFly(x, y, z, lifetime);   // Activate one particle
updateFlies(dt, t);            // Advance all active particles
```

### Audio Callback Pattern
```js
// audio.js is never imported by entity files
// Instead, callbacks are passed through main.js:
initQuestVisuals({
  onCollect: playOrbCollect,
  onLaser: playLaserZap,
  // ...
});
```

## File Size Distribution

| Directory | Files | Lines | Purpose |
|-----------|-------|-------|---------|
| `main.js` | 1 | ~1,100 | Bootstrap + director subsystem functions |
| `kernel/` | 3 (+tests) | ~250 | Event bus, scheduler, context |
| `core/` | 6 | ~450 | Engine infrastructure |
| `world/` | 4 | ~1,200 | World generation |
| `entities/` | 29 | ~5,500 | Entity builders |
| `particles/` | 12 | ~1,200 | Particle systems |
| `systems/` | 14 | ~3,000 | Audio, weather, day/night, AI, spiritHum, echoes, wizard, pufflingChat, registration |
| `quest/` | 4 | ~1,100 | Quest state, visuals, config, lasers |
| `state/` | 8 | ~400 | Game state stores (orbStore, playerStore, etc.) |
| `updates/` | 5 | ~800 | Extracted fauna/vegetation/magical/spawning |
| `ui/` | 2 | ~100 | HUD elements |
| `utils/` | 3 | ~80 | RNG, math helpers, spatial hash |
| **Total** | **~91** | **~15,000** | |
