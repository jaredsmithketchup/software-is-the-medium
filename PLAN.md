---
type: Plan
title: "Software is the Medium — Presentation Package Plan"
description: Plan for deriving a presentation overview of the Software is the Medium reference, then producing the slide-deck description and per-slide speaker cards that follow from it. Revised 2026-11-02 with the expanded 73-slide format and a content-cut audit.
tags: [presentation, plan, game-engines, medium, overview, slide-deck, speaker-cards]
generated: { by: kilocode/deepseek-v4-flash, at: 2026-11-02T04:33:42Z }
---

# Software is the Medium — Presentation Package Plan

Plan for building the presentation material that summarizes and presents the
reference collection in
`../References/Software is the Medium - Game Engines are Software/`
(**11 chapters** plus **ten engine case studies**). Modeled on the earlier
[Game Engine Primer Presentation](2026-10-25_game-engine-primer-presentation.md),
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

Produced in order; each is an input to the next. All three documents in this
package are in the Presentations folder
(`Presentations/Software is the Medium - Game Engines are Software`); this plan
lives in `Plans/` per the vault naming convention.

| # | Deliverable | Purpose | Status |
|---|---|---|---|
| 1 | **Presentation overview** — [`presentation-overview.md`](../Presentations/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/presentation-overview.md) | Structures how the reference is summarized and presented: 14 sections, ~88 min talk, standalone synopses, cutdown plans | **done** — revised 2026-11-02 |
| 2 | **Slide deck description** — [`slide-deck.md`](../Presentations/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/slide-deck.md) | 73 slides (S1–S73): every section opens with an intro slide, then one-or-two-idea content slides, self-explanatory, with citations | **done** — revised 2026-11-02 |
| 3 | **Speaker cards** — [`speaker-cards.md`](../Presentations/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/speaker-cards.md) | One verbose-but-direct card per slide: focus line, short bullets, analogies/examples, transition | **done** — revised 2026-11-02 |
| 4 | **Built deck** (`.deckcraft` / `.pptx`) | Built once at the old 26-slide size (`D:\documents\software-is-the-medium-presentation\`) — **stale** against the 73-slide description; rebuild pending on the trimmed outline | **stale — rebuild after §12 trim** |

## 6. Source material

All in `../References/Software is the Medium - Game Engines are Software/`.

| Code | Chapter | What it carries | Reading order |
|---|---|---|---|
| `ch00` | [00-software-is-the-medium.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/00-software-is-the-medium.md) | The flagship: data + code, IO, loop/cybernetics, five-part skeleton, engine scaled-up, discipline map, career anchoring, ten rules | 1 |
| `ch01` | [01-common-structure.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/01-common-structure.md) | Cross-engine map: subsystem fills, channels, clock variants, four axes, Mermaid overlays | 2 |
| `ch02` | [02-world-models.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/02-world-models.md) | Scene graph vs BSP+entities vs ECS; deciding dimensions; state store; UI in screen space | 3 |
| `ch03` | [03-hardware-and-performance.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/03-hardware-and-performance.md) | CPU vs GPU, SIMD/SIMT, shader pipeline, bound work, profiling, stat unit / Unreal Insights | extended |
| `ch04` | [04-concurrency-and-state.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/04-concurrency-and-state.md) | Who runs when, whose copy — event loops, threads, coroutines, replication, staleness, UE5 names | extended |
| `ch05` | [05-schemas-and-formats.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/05-schemas-and-formats.md) | The shape-and-meaning contract: authoring/runtime/wire triangle, evolution, determinism | extended |
| `ch06` | [06-spatial-indexes.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/06-spatial-indexes.md) | "The map, not the warehouse": grids, octrees, BVH, BSP, culling ladder, broadphase | extended |
| `ch07` | [07-operating-systems.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/07-operating-systems.md) | The scaffold and observatory: processes, syscalls, scheduler, handles, crashes | extended |
| `ch08` | [08-the-weapon-example.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/08-the-weapon-example.md) | Synthesis: one rifle through the whole machine, UE5 then DOOM 3 | after extended |
| `ch09` | [09-ai-and-the-medium.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/09-ai-and-the-medium.md) | Backend/model/harness/knowledge; explain & modify; harness landscape; standards; knowledge layer | after `ch08` |
| `ch10` | [10-the-coming-times.md](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/10-the-coming-times.md) | Fear vs cybernetic answer; the hybrid engine; the metaverse as a verb | closing |
| `Eng` | [Engines/](../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/Engines/index.md) | Ten case studies: DOOM, Quake, Quake III Arena, DOOM 3, three.js, Babylon.js, redot, Urho3D, OpenEngine, Unreal Engine | touchpoints throughout |

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
   explains itself. Result: too much material — see the **content-cut audit in
   §12**, which trims the machine block and a handful of foldable slides while
   holding the core spine intact.
4. **Write the section outline.** 14 sections in 4 acts, each mapped to chapters
   and timed (overview §5). Section synopses are standalone: a paragraph plus
   high-level bullets readable without the reference.
5. **Derive the slide list.** 73 slides (S1–S73), each with a single takeaway
   (intro slides are signposts), recorded in `slide-deck.md`.
6. **Write speaker cards.** One card per slide: focus line, short direct
   bullets, then several analogies/examples to pick from, and a transition.
   Recorded in `speaker-cards.md`.
7. **Validate.** Coverage check — every chapter's takeaway appears in ≥1 section;
   timing check — section minutes sum to the budget; cutdown check — each
   section marks what to drop for the tighter versions (overview §6) and for the
   §12 trim.

## 8. The derived outline at a glance

Full section detail lives in [`presentation-overview.md`](../Presentations/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/presentation-overview.md).
The 14 sections + Q&A, with slide ranges from the expanded deck:

| # | Section | Slides | Source | Min |
|---|---|---|---|---|
| 1 | Opening: the medium | S1–S3 | `ch00` intro, §8 | 4 |
| 2 | Two substances: data & code | S4–S7 | `ch00` §1 | 6 |
| 3 | The universal shape: IO & boundaries | S8–S11 | `ch00` §2 | 5 |
| 4 | The loop: cybernetics & latency | S12–S16 | `ch00` §3 | 6 |
| 5 | The five-part skeleton | S17–S19 | `ch00` §4 · `ch01` §1 | 4 |
| 6 | Engines: the skeleton scaled up | S20–S25 | `ch00` §5 · `ch01` §2–3 | 7 |
| 7 | The clock & the four axes | S26–S29 | `ch01` §4–5 | 6 |
| 8 | World models | S30–S38 | `ch02` | 9 |
| 9 | Hardware & performance | S39–S43 | `ch03` | 6 |
| 10 | Concurrency & state | S44–S48 | `ch04` | 6 |
| 11 | Schemas · spatial indexes · the OS | S49–S58 | `ch05`–`ch07` | 12 |
| 12 | The discipline map & the weapon | S59–S64 | `ch00` §7 · `ch08` | 8 |
| 13 | AI & the medium | S65–S68 | `ch09` | 5 |
| 14 | The coming times & closing | S69–S72 | `ch10` · `ch00` §9 | 4 |
| 15 | Q&A | S73 | all | 15 |
| | **Talk total** | | | **≈88 min** (73 slides) |

**After the §12 trim:** aim ~55 slides / ~70 min talk + Q&A, keeping every
intro slide and the core spine.

## 9. Production timeline

| When | Milestone |
|---|---|
| **2026-11-02** | Documents derived and expanded: overview (revised), 73-slide deck description, speaker cards. 26-slide deck was built for the *previous* outline and is now stale. |
| **Next** | Apply the §12 trim to `slide-deck.md` and `speaker-cards.md` (cut the flagged slides, fold the merged ones). |
| After trim | Rebuild the deck per the trimmed `slide-deck.md` (DeckCraft, Slate theme, Montserrat/Lato — carry over the primer deck's styling), reusing chapter Mermaid diagrams. |
| Day 3–4 | Polish pass; fit/overflow audit; typography audit (see primer plan §8 field notes). |
| Day 5 | Dry-run with speaker cards; trim to slot; prepare Q&A. |

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

1. **Slot length — 3 hours available; the presentation was expanded to ~88 min
   of talk + Q&A** because compressing ideas onto shared slides made them
   unreadable. The section budgets in the overview sum to ≈88 min; Q&A flexes
   into the remaining window. With the §12 trim, the talk lands around ~70 min
   + Q&A — expanded pacing, less material.
2. **Depth — keep it shallow.** The audience has mixed technical background and
   limited deep interest, so everything stays at orientation level. The machine
   block (§9–§11, `ch03`–`ch07`) is where depth creeps in — the §12 audit is
   the countermeasure. Hold the line for the weapon chain (§12 / S59–S64) and
   the closing (S70–S72), the parts people actually relate to.
3. **AI — no live demo, no tools pitch.** Students are largely opposed to AI
   use, so §13 is presented factually and neutrally: what "talking to software"
   is, and the "know the medium to aim it" catch. S68 (tools landscape) stays
   optional/brief — do not spend real time on it.
4. **Content volume — too much material; cut to the core spine.** See §12 for
   the flagged cuts. Standing rule: cut material, not pacing — keep the intro
   slides and the expanded one-or-two-idea-per-slide shape.

Remaining open item:

- Record delivery in the vault log when the talk is given.

## 12. Content-cut audit — what to cut, and why the core survives

The expanded deck went too deep. These flags trim volume while keeping the
**spine intact**: medium → substances → IO → loop → skeleton → engine → world
models → discipline map/weapon → AI → closing. Nothing below touches the spine.

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

Net: machine block goes from **20 slides / 24 min** to **9 slides / ≈13 min**,
losing almost nothing the audience can use.

### Secondary trim — foldable one-idea slides

| Slides | Carry | Flag | Replace with |
|---|---|---|---|
| S3 (why this talk now) | foundations beat | **cut** | one line on S1: "foundations outlast tools" |
| S10 (nested IO stack) | layers repeat IO | **cut** | one line on S9: "the shape repeats at every layer — the seams ARE the architecture" |
| S16 (pipeline vs loop) | two gaits | **keep** — often the "Aha!" slide | — |
| S22 (hard real-time) | the frame deadline | **keep (short)** | merge the "deadline" line into S23 if time tightens further |
| S68 (tools landscape) | AI doors | **export to appendix** | don't show unless asked; notes keep it |

### Never cut — the spine

S1–S2 (medium), S4–S7 (substances), S8–S9 + S11 (shape + claim), S12–S15 (loop
and latency), S17–S19 (skeleton), S20–S24 (engine + frame loop + DOOM/UE5),
S26–S29 (clock + axes), S30–S38 (world models), S59–S64 (discipline map +
weapon), S65–S67 (AI four pieces + explain/modify), S69–S73 (closing + Q&A).

**Target after trim: ~55 slides / ~70 min talk**, cutdown floor ~45 min
(overview §6 still applies).

## 13. Origin of the expansion

The first packaged deck (26 slides, ~66 min — S1–S26) compressed multiple ideas
per slide to fit the time budget. Review found the sections unreadable: the
thesis, the overview synopses, and the slide descriptions each needed to explain
themselves standing alone. The response was to expand — more slides, section
intro slides, standalone content — and then the content audit in §12 to remove
the depth that expansion accidentally let in.