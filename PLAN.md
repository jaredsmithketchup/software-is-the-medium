---
type: Plan
title: "Software is the Medium — Presentation Package Plan"
description: Presentation planning history with the current 37-slide delivery budget in section 8. Current slides and notes live in Presentation; the existing reveal.js publishing workflow is unchanged.
tags: [presentation, plan, game-engines, medium, overview, slide-deck, speaker-cards]
generated: { by: kilocode/deepseek-v4-flash, at: 2026-11-02T04:33:42Z }
---

# Software is the Medium — Presentation Package Plan

Plan for building the presentation material that summarizes and presents the
reference collection in
`Reference/`
(**11 chapters** plus **ten engine case studies**). Modeled on the earlier
`2026-10-25_game-engine-primer-presentation.md`,
which this plan extends and supersedes for the current, larger reference.

## 1. Problem statement

- The reference argues that **software is the medium** every game-discipline
  practitioner works in, and that game engines are that medium at its most
  demanding: the same generic structure every program has, made large, fast,
  and hard-realtime.
- Teams (and students entering the industry) rarely share a mental model of the
  software being built. Artists, audio, design, engineering, and production all
  touch the engine, but few know where their discipline sits, what it feeds, and
  what it overlaps.
- The reference is a **career-length shelf document** (≈8,000 lines of chapters
  plus ten engine case studies). Its value
  is low if nobody ever reads it; the presentation is the *forced first read* —
  the overview decides what the shared map is and how it is communicated.

## 2. Thesis / framing

> Software — and game engines as a specialized form of software — is the medium
> these people have chosen to work in. Foundations outlast tools.

Every part of the presentation traces back to one spine, borrowed from the
reference itself (its chapter 9 "medium reminder"):

**data and code → IO and boundaries → the loop and latency → the five-part
skeleton → the engine as the skeleton scaled up → the world model as the State
fill → the discipline map as who feeds what → AI as the new interface.**

## 3. Audience

Assumed audience for this package (confirmed 2026-11-02 — see §11):

- Students in a video game development program, or a mixed-discipline studio
  team (art, audio, design, engineering, production).
- **"Varying levels of technical knowledge"** — the material must be digestible
  from absolute beginner to hobbyist-programmer.
- **Confirmed: mixed technical backgrounds; the audience largely opposes AI
  use.** Keep everything at orientation level; gloss, don't go deep; cut detail
  at the first sign of drag (see §11 decisions 2–4 and the §12 audit).
- Goal at the end: a rough concept of game-engine structure, where their
  discipline sits, and enough orientation to source information on their own.

## 4. Desired learning outcomes

By the end, an audience member should be able to answer:

1. What is software made of? (data + code)
2. How is every program shaped? (input → process → output, nested IO, the loop)
3. What five parts does every program — and every engine — have, and which
   subsystem fills which slot?
4. What does every engine do identically, and where do engines actually differ?
   (the clock cadence, the world model, four fill axes)
5. What are the three world-model families, and which engine belongs to which?
6. Where does my discipline sit — who owns what, who feeds what? (the weapon
   chain)
7. What does "talking to software" actually consist of? (backend · model ·
   harness · knowledge; explain · modify)

## 5. Deliverables

Produced in order; each is an input to the next. The three package documents
live in `Presentation/`; this plan is `PLAN.md` at the repo root (mirrored to the
vault's `Plans/` per the vault naming convention).

| # | Deliverable | Purpose | Status |
|---|---|---|---|
| 1 | **Presentation overview** — [`presentation-overview.md`](Presentation/presentation-overview.md) | Structures how the reference is summarized and presented: 15 sections, ~77 min talk + Q&A, standalone synopses, cutdown plans | **done** — trimmed 2026-11-02 |
| 2 | **Slide deck description** — [`slide-deck.md`](Presentation/slide-deck.md) | 64 slides (S1–S64): every section opens with an intro slide, then one-or-two-idea content slides, self-explanatory, with citations; machine block consolidated per §12 | **done** — trimmed 2026-11-02 |
| 3 | **Speaker cards** — [`speaker-cards.md`](Presentation/speaker-cards.md) | One card per slide (S1–S64): focus line, short bullets, analogies/examples, transition | **done** — trimmed 2026-11-02 |
| 4 | **Published deck** (reveal.js site) | 64-slide web deck generated from `slide-deck.md` + `speaker-cards.md` by `scripts/build-deck.mjs` into `docs/`, published on GitHub Pages; speaker cards become the presenter view (press `S`) | **done** — published 2026-11-02 |

## 6. Source material

All in `Reference/`.

| Code | Chapter | What it carries | Reading order |
|---|---|---|---|
| `ch00` | [00-software-is-the-medium.md](Reference/00-software-is-the-medium.md) | The flagship: data + code, IO, loop/cybernetics, five-part skeleton, engine scaled-up, discipline map, career anchoring, ten rules | 1 |
| `ch01` | [01-common-structure.md](Reference/01-common-structure.md) | Cross-engine map: subsystem fills, channels, clock variants, four axes, Mermaid overlays | 2 |
| `ch02` | [02-world-models.md](Reference/02-world-models.md) | Scene graph vs BSP+entities vs ECS; deciding dimensions; state store; UI in screen space | 3 |
| `ch03` | [03-hardware-and-performance.md](Reference/03-hardware-and-performance.md) | CPU vs GPU, SIMD/SIMT, shader pipeline, bound work, profiling, stat unit / Unreal Insights | extended |
| `ch04` | [04-concurrency-and-state.md](Reference/04-concurrency-and-state.md) | Who runs when, whose copy — event loops, threads, coroutines, replication, staleness, UE5 names | extended |
| `ch05` | [05-schemas-and-formats.md](Reference/05-schemas-and-formats.md) | The shape-and-meaning contract: authoring/runtime/wire triangle, evolution, determinism | extended |
| `ch06` | [06-spatial-indexes.md](Reference/06-spatial-indexes.md) | "The map, not the warehouse": grids, octrees, BVH, BSP, culling ladder, broadphase | extended |
| `ch07` | [07-operating-systems.md](Reference/07-operating-systems.md) | The scaffold and observatory: processes, syscalls, scheduler, handles, crashes | extended |
| `ch08` | [08-the-weapon-example.md](Reference/08-the-weapon-example.md) | Synthesis: one rifle through the whole machine, UE5 then DOOM 3 | after extended |
| `ch09` | [09-ai-and-the-medium.md](Reference/09-ai-and-the-medium.md) | Backend/model/harness/knowledge; explain & modify; harness landscape; standards; knowledge layer | after `ch08` |
| `ch10` | [10-the-coming-times.md](Reference/10-the-coming-times.md) | Fear vs cybernetic answer; the hybrid engine; the metaverse as a verb | closing |
| `Eng` | [Engines/](Reference/Engines/index.md) | Ten case studies: DOOM, Quake, Quake III Arena, DOOM 3, three.js, Babylon.js, redot, Urho3D, OpenEngine, Unreal Engine | touchpoints throughout |

## 7. Deriving the overview — the method

Steps used to get from the reference to `presentation-overview.md`, kept here so
the derivation can be re-run or trimmed:

1. **Inventory.** Catalog the 11 chapters + engine folder; record each chapter's
   "come back to this" boxes as the candidate takeaways (§6 above).
2. **Map to the primer spine.** The older primer plan already proved the spine
   (medium → substances → loop → skeleton → engine → world models → discipline
   map → AI). The new chapters slot in:
   | Primer section (2026-10-25) | New reference material |
   |---|---|
   | The medium / substances / loop / skeleton | `ch00` (unchanged core) |
   | Subsystem map + clock | `ch01` (now has the clock table, channels, four axes, Mermaid) |
   | World models | `ch02` (now full family study) |
   | Weapon | `ch08` (now the full synthesis, UE5 + DOOM 3) |
   | AI as interface | `ch09` (now the full chapter) + `ch10` (new closing) |
   | — (no primer equivalent) | **New block "The machine":** `ch03–ch07` (hardware, concurrency & state, schemas, spatial indexes, the OS) |
3. **Expand and breathe.** First pass at ≤26 slides proved too compressed — each
   idea was crammed onto a shared slide. **Expansion decision (2026-11-02):**
   ~88 min of talk, 73 slides, one-or-two ideas per slide, and **every section
   opens with its own intro slide** so content can breathe and each slide
   explains itself. Result: too much material — the **content-cut audit in
   §12** trimmed the machine block and a handful of foldable slides while
   holding the core spine intact.
4. **Write the section outline.** 15 sections in 4 acts (Q&A included), each
   mapped to chapters and timed (overview §5). Section synopses are standalone:
   a paragraph plus high-level bullets readable without the reference.
5. **Derive the slide list.** 64 slides (S1–S64) after the §12 trim, each with
   a single takeaway (intro slides are signposts), recorded in `slide-deck.md`.
6. **Write speaker cards.** One card per slide: focus line, short direct
   bullets, then several analogies/examples to pick from, and a transition.
   Recorded in `speaker-cards.md`.
7. **Validate.** Coverage check — every chapter's takeaway appears in ≥1 section;
   timing check — section minutes sum to the budget; cutdown check — each
   section marks what to drop for the tighter versions (overview §6) and for the
   §12 trim.

## 8. The derived outline at a glance

Full section detail lives in [`presentation-overview.md`](Presentation/presentation-overview.md).
Current suggested budget, mirrored from overview section 5. The older expansion,
delivery records, and cut audit elsewhere in this plan are historical, not the
current slide map. This revision is local until the normal publishing workflow runs.

| # | Section | Slides | Source | Min |
|---|---|---|---|---|
| 1 | Software is the medium | S1-S4 | ch00 | 4 |
| 2 | Anatomy of software | S5-S14 | ch00 | 12 |
| 3 | Anatomy of a game engine | S15-S20 | ch00-ch02 | 9 |
| 4 | Quake, Doom 3, Unreal 5 | S21-S23 | Engine cases, ch01 | 5 |
| 5 | One weapon, every discipline | S24-S29 | ch08 | 11 |
| 6 | AI, interfaces, and takeaways | S30-S36 | ch09-ch10, ch00 | 8 |
| Q&A | Questions and further reading | S37 | All | 10 |
| | **Delivery total** | **S1-S36** | | **49** |
| | **Including Q&A** | **S1-S37** | | **59** |

The 49-minute budget includes the three-minute S28 exercise. For a 25-minute
route, see overview section 7; Q&A remains additional.

## 9. Production timeline

| When | Milestone |
|---|---|
| **2026-11-02** | Documents derived, expanded, and **trimmed**: overview (revised), 64-slide deck description (S1–S64), speaker cards (S1–S64). |
| **2026-11-02** | Deck site built and published: reveal.js web deck generated into `docs/`, live on GitHub Pages (audience slides + speaker view via `S`). |
| **Next** | Polish pass on the live deck: fit/overflow check at 960×540, typography audit; rehearse with the cards to trim to slot. |
| Before talk | Dry-run with speaker cards; trim to slot; prepare Q&A. |

## 10. Notes on delivery style

- The speaker prefers **short, direct bullet prompts over prose** — the cards in
  `speaker-cards.md` are the safety net, not a script.
- The speaker **uses analogies and multiple examples heavily** — every card
  carries a small pool to pick from; choose the one that fits the room.
- Aim for **orientation over completeness**, exactly per `ch00` §8: the talk
  succeeds if people leave knowing where they sit in the machine, not if they can
  recite subsystem lists.
- Anchor every abstraction in the culturally significant engines (DOOM, Quake,
  Quake III Arena, DOOM 3) already analyzed in the reference's `Engines/` folder.

## 11. Decisions (resolved 2026-11-02)

1. **Slot length — 3 hours available; the talk is ~77 min + Q&A on 64 slides**
   (trimmed from the ~88 min / 73-slide expansion). Q&A flexes into the
   remaining window. The section budgets in the overview sum to ≈77 min.
2. **Depth — keep it shallow.** The audience has mixed technical background and
   limited deep interest, so everything stays at orientation level. The machine
   block (§9–§11, `ch03`–`ch07`) is where depth creeps in — the §12 audit is
   the applied countermeasure (S39–S49, one idea each). Hold the line for the
   weapon chain (§12 / S50–S55) and the closing (S60–S63), the parts people
   actually relate to.
3. **AI — no live demo, no tools pitch.** Students are largely opposed to AI
   use, so §13 is presented factually and neutrally: what "talking to software"
   is, and the "know the medium to aim it" catch. S59 (tools landscape) stays
   optional/brief — do not spend real time on it.
4. **Content volume — cut material, not pacing.** Applied via §12. The final
   deck keeps every intro slide and the one-or-two-idea-per-slide shape.

Remaining open item:

- Record delivery — date, room, and how it went — in this plan (or README)
  after the talk is given; the repo is the record, not the vault log.

## 12. Historical content-cut audit — 64-slide predecessor

The expanded deck went too deep. These flags trimmed volume while keeping the
**spine intact**: medium → substances → IO → loop → skeleton → engine → world
models → discipline map/weapon → AI → closing. The trim was applied on
2026-11-02; the deck is now 64 slides (S1–S64, ≈77 min + Q&A). Slide numbers
in the tables below refer to the **pre-trim 73-slide draft** — after the trim
the deck was renumbered, so the tables are a decision record, not a 1:1 map to
the final slides. Authoritative ranges live in `slide-deck.md` and overview §5.
Nothing below touches the spine.

### The primary trim zone — the machine block (S39–S58)

This is the whole of `ch03`–`ch07`, which the audience cannot use day-one and
which the plan (decision 2) forbids going deep on. It is the biggest cut target.

| Slides | What they carry | Flag | Replace with |
|---|---|---|---|
| S39 (hardware intro) | section divider | **cut** | fold the "two machines, one budget" one-liner onto S40 |
| S40 (two machines) | CPU/GPC scholar-vs-army — **core machine idea** | **keep** | — |
| S41 (bound work) | CPU/GPU/IO/memory bound | **keep one line** | merge onto S40 ("a frame is bound by one of four things") |
| S42 (two profiling strategies) | sandhills + Amdahl | **cut** | one line on S43: "measure one variable, or compute the parallel ceiling" |
| S43 (stat unit) | the practical tool — **core machine idea** | **keep** | — |
| S44 (concurrency intro) | section divider | **cut** | merge title into S45 |
| S45 (control flow) | who waits, who decides — **core** | **keep** | — |
| S46 (the ladder) | one thread → network | **cut** | one line on S45 ("coordination gets pricier every rung") |
| S47 (state) | whose copy is truth; staleness — **core** | **keep** | — |
| S48 (UE5 names) | engine anchor | **keep (short)** | trim to the thread row + the one summary question |
| S50 (schema contract) | fields/layout/rules — **core idea** | **keep** | — |
| S51 (three format worlds) | authoring/runtime/wire | **keep (short)** | trim examples to `.fbx`/`.uasset`/packet |
| S52 (evolution/snapshots) | determinism, desync | **cut** | one line on S51 ("keeps old and new talking; a desync is a broken contract") |
| S53 (map not warehouse) | the analogy — **core idea** | **keep** | — |
| S54 (map shapes) | grid/octree/BVH/BSP/PVS | **cut** | two shapes on S53 ("a grid or a tree of boxes — one structure per world model") |
| S55 (culling ladder) | frustum → PVS, broadphase | **cut** | one line on S53 ("the same map serves drawing and collision") |
| S56 (OS no direct touches) | the landlord — **core idea** | **keep** | — |
| S57 (OS day job) | scheduler/handles/GPU venue | **cut** | one line on S56 ("the OS schedules, issues tickets, and fronts the GPU too") |
| S58 (OS observatory) | ledger + 5-move diagnosis — **core idea** | **keep** | trim the walk to "name it, watch it, read the ledger" |

Net in the final deck: the machine block lands at **11 slides / ≈13 min**
across §9–§11 (S39–S49), losing almost nothing the audience can use.

### Secondary trim — foldable one-idea slides

| Slides | Carry | Flag | Replace with |
|---|---|---|---|
| S3 (why this talk now) | foundations beat | **cut** | one line on S1: "foundations outlast tools" |
| S10 (nested IO stack) | layers repeat IO | **cut** | one line on S9: "the shape repeats at every layer — the seams ARE the architecture" |
| S16 (pipeline vs loop) | two gaits | **keep** — often the "Aha!" slide | — |
| S22 (hard real-time) | the frame deadline | **keep (short)** | merge the "deadline" line into S23 if time tightens further |
| S68 (tools landscape) | AI doors | **export to appendix** | don't show unless asked; notes keep it |

### Never cut — the spine (final numbering)

S1–S3 (opening: the medium), S4–S7 (substances), S8–S11 (shape + claim),
S12–S16 (loop and latency), S17–S19 (skeleton), S20–S25 (engine + frame loop +
DOOM/UE5), S26–S29 (clock + axes), S30–S38 (world models), S39–S49 (machine
core one-liners), S50–S55 (discipline map + weapon), S56–S58 (AI: four pieces +
explain/modify), S60–S64 (closing + Q&A). Flanking optional slides (S59 tools
landscape, and the S3/S10/S16-style foldables from the tables above) go before
the spine does.

**Final after trim: 64 slides / ≈77 min talk + 15 min Q&A** (S1–S64).
Cutdown floor ~45 min (overview §6 still applies).

## 13. Origin of the expansion

The first packaged deck (26 slides, ~66 min — S1–S26) compressed multiple ideas
per slide to fit the time budget. Review found the sections unreadable: the
thesis, the overview synopses, and the slide descriptions each needed to explain
themselves standing alone. The response was to expand — more slides, section
intro slides, standalone content — and then the content audit in §12 to remove
the depth that expansion accidentally let in.

## 14. Publication and source of truth

- **This repo is the source of truth.** The `D:\agents_workspace\.vault`
  mirror is derivative; when they disagree, the repo wins. Do not import vault
  copies over repo files.
- **Live deck:** https://jaredsmithketchup.github.io/software-is-the-medium/
  (public repo, GitHub Pages from `main` → `/docs`). Audience view is the
  slides; press `S` for the speaker view (current slide + that slide's speaker
  card + next-slide preview + timer) — move it to the presenter's screen.
- **Regeneration:** after editing `Presentation/slide-deck.md` or
  `Presentation/speaker-cards.md`, run `node scripts/build-deck.mjs` and commit
  the changed `docs/index.html`. Pages redeploys automatically.
- **Numbers discipline:** section budgets/timings quote overview §5 and the
  slide docs; PLAN.md §8 mirrors them. When you change timing, change the
  overview first, then regenerate this table.
- See `AGENTS.md` for full repo conventions.
