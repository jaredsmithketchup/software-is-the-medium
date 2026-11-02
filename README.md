# Software is the Medium — Game Engines are Software

Reference and presentation notes for the thesis that software is the medium
every game-discipline practitioner works in, and that a game engine is that
medium at its most demanding: the generic structure every program has, made
interactive, performance-sensitive, and generally soft real-time.

## Contents

- `Reference/` — the career-length shelf document.
  - 11 chapters (`00`–`10`), from "data and code" up to "the coming times":
    common structure, world models, hardware & performance, concurrency &
    state, schemas & formats, spatial indexes, operating systems, the weapon
    example, AI & the medium.
  - `Reference/Engines/` — ten engine case studies: DOOM, Quake, Quake III
    Arena, DOOM 3, three.js, Babylon.js, Redot, Urho3D, OpenEngine, Unreal
    Engine.
- `Presentation/` — the presentation package derived from the reference:
  `presentation-overview.md` (structure and timing), `slide-deck.md` (S1–S32),
  and `speaker-cards.md` (one card per slide).
- `PLAN.md` — the plan that produced the presentation package, including the
  content-cut audit (what to trim and why the core spine survives).

## Live deck

The current source is a 32-slide talk, built for the existing GitHub Pages reveal.js site:

- **Slides:** https://jaredsmithketchup.github.io/software-is-the-medium/
- **Speaker view:** press `S` (or alt+s) — a second window opens with the
  matching speaker card for the current slide, the next-slide preview, and a
  timer. Put it on your screen; the first window is the one students see.
- Source of truth: `Presentation/slide-deck.md` (S1–S32) and
  `Presentation/speaker-cards.md` (one card per slide). Regenerate the site
  after editing them with `node scripts/build-deck.mjs` and commit `docs/`.

## How to start

Read `Reference/00-software-is-the-medium.md` first; it is the flagship
chapter. Then follow the reading order in the chapter table of `PLAN.md`, or
jump to `Presentation/presentation-overview.md` for the suggested 45-minute talk
plus 10-minute Q&A, or its 25-minute cutdown. The speaker cards include diagram
walks, backup answers, technical caveats, and a three-minute student exercise.
Local edits reach the published site only after the normal commit/push workflow.
