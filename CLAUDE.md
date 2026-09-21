# CLAUDE.md — Luminaries

## What This Is

Luminaries is a first-person 3D bioluminescent forest built with Three.js r172+ / Vite / Web Audio API. 29,422 lines across 134 ES module files (measured 2026-09-18: `find src -name '*.js' -not -path '*__tests__*'`). Procedurally generated terrain, textures, audio, and music — zero external assets loaded at runtime.

**Live:** https://ee-edk.github.io/Luminaries/

## Quick Start

```sh
npm install          # First time
npm run dev          # http://localhost:5173
npm run build        # Production build to docs/ (vite outDir; gitignored — Pages builds it from the workflow)
npm test             # Run unit tests (kernel modules)
```

## Read when

| File | What It Covers | Read When |
|------|---------------|-----------|
| `CLAUDE.full.md` | Full always-on agent notes (architecture, rules, file map, debt) | Project-wide architecture or conventions beyond this stub |
| `reference/architecture.md` | System dependency graph, data flow, spawn order, director pattern, module interfaces | Architecture tasks only |
| `reference/dashboard.html` | Single-page dashboard of the whole `reference/` shelf: doc index, architecture, budgets, entities, audio, quest, status, drift list (open in a browser; kunzhub layout) | Orienting in a new session, or finding which reference doc to open |
| `reference/entities.md` | Complete registry: all 29 entity types, 11 particle systems, counts, cull distances, builders | Adding/modifying entities |
| `reference/patterns.md` | 10 canonical code patterns with full examples (entity builder, particle pool, culling, state machine, etc.) | Writing any new code |
| `reference/performance.md` | Hard limits: light budget, draw calls, FPS, particles, memory rules | Adding visual features |
| `reference/audio.md` | Web Audio API graph, synthesis patterns, layer reference, callback injection + event bus | Audio work |
| `reference/procedural-audio-engine-protocol.md` | Production methodology for zero-asset Web Audio API synthesis (voice pools, scheduling, anti-clicking, spatial audio) | Audio architecture |
| `reference/unified_webgl_protocol_v4.1.md` | Legacy monolithic protocol (v4.1) — still valid for Luminaries-specific patterns | Historical reference |
| `reference/phase-1-summary.md` | Everything built in Phase 1, completion checklist, known debt | Understanding current state |
| `reference/phase-2-roadmap.md` | 21 prioritized implementation items for Phase 2 (from MANIFESTO.md) | Planning Phase 2 work |
| `reference/phase-3-plan-2026-09-18.md` | **APPROVED** Phase 3: persistence, onboarding, atmosphere, creature life, positional audio, field notebook, fauna GPU rig, mobile, accessibility — 11 workstreams in 5 sprints (narrative cohesion added by owner), measured baseline in §0, decisions in §5 | Planning anything after the entity rework |
| `reference/MANIFESTO.md` | Full Phase 2 design: Symbiotic Attunement, The Dimming, dual-narrative, all mechanics | Understanding the vision |

Do not read CLAUDE.full.md unless the task needs project-wide architecture or conventions beyond this stub.