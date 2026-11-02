---
type: Reference
title: "Slide Deck — Software is the Medium: Game Engines are Software"
description: Trimmed slide deck description (64 slides, S1–S64) — every section opens with an intro slide, then one-or-two-idea content slides, each self-explanatory. Machine block consolidated per the plan's §12 primary trim. Citations throughout.
tags: [presentation, slide-deck, game-engines, medium, slides]
generated: { by: kilocode/deepseek-v4-flash, at: 2026-11-02T04:44:02Z }
---

# Slide Deck — Software is the Medium: Game Engines are Software

Slide-level descriptions for the presentation planned in
[the presentation plan](../../Plans/2026-11-02_software-is-the-medium-presentation-plan.md)
and structured in [`presentation-overview.md`](presentation-overview.md).

## How this deck is organized

- One slide = **one or two ideas at most**. If a slide needs a third thought, it
  gets split.
- **Every section opens with an intro slide** (a divider): it names the chapter,
  says what question the section answers, and shows where it sits on the
  four-act map. Dividers are ~20 seconds.
- Rendering rule: a single Mermaid diagram may animate in parts, but **no slide
  argues two independent points visually.** 64 slides ≈ 77 min of talk (about
  1.2 min/slide, dividers faster, content slides slower).
- **Machine block trimmed (2026-11-02):** the deep machine chapters (§9–§11)
  consolidated from 20 slides to 11 — only the audience-usable core ideas
  remain (see the plan's §12 primary-trim audit).

## Deck-wide notes

- **Format:** 960×540 widescreen; **Slate** theme (dark `#111827` background,
  indigo `#6366F1` accent); **Montserrat** headings, **Lato** body; outer drop
  shadow on shapes; accent colors carry meaning.
- **Act colors:** A Foundations = indigo · B World & machine = sky · C People &
  chain = green · D Interface & future = purple. Intro slides use the act color
  full-bleed.
- **Diagram reuse:** several chapters ship Mermaid diagrams that translate
  directly into slide shapes (flagged in "Visual"); convert to styled vector
  shapes rather than screenshots.
- **Corners:** every slide labels its act + section in a corner chip.
- **Fit audit:** nothing past x=960 / y=540 after building; run the overflow
  audit before exporting.

## Confirmed constraints (2026-11-02)

- **Length:** ~77 min talk + Q&A inside the 3-hour window (trimmed from ≈88).
- **Depth:** orientation level throughout; the audience is mixed-discipline and
  skeptical of AI. §11 is a six-slide sweep of the three seams, not a dive.
- **AI neutrality:** S56–S59 are factual, not promotional. **No live demo.**
  S59 is optional — one breath, or skip.
- **Where budget pressure hits:** cut §11 to its one-liners first, then S59;
  never cut the weapon (§12 → S50–S55) or the closing (S61–S63).

---

# ACT A — FOUNDATIONS

## S1 — Section 1 intro: The pattern of software *(divider)*

- **Goal:** open with the whole talk's structure, shown as one pattern the
  audience will recognize everywhere.
- **Content:** "Software is the Medium" with the subtitle **"Game Engines are
  Software"**; the talk's two structural claims: `data + code` and **the
  five-part software skeleton — state, logic, input, output, clock.** One line
  under them: every program, every engine, every era is this pattern, made
  large. Corner note: "foundations outlast tools."
- **Visual:** full-bleed indigo; Montserrat 40pt title top-left; the two claims
  as large chips (DATA + CODE beside the five skeleton boxes: STATE · LOGIC ·
  INPUT · OUTPUT · CLOCK); four-act mini-map as a thin spectrum bar at the
  bottom.
- **Refs:** `ch00` intro, §1, §4, §8.

## S2 — You work in a medium

- **Goal:** make "medium" concrete so the abstraction lands.
- **Content:** every maker works in a material with its own properties: a
  painter must understand paint and canvas, a musician their instrument, a civil
  engineer steel and concrete — and a **game developer** must understand
  software. The rest of the talk is the properties of that medium.
- **Visual:** four discipline cards across the top (PAINTER · MUSICIAN · CIVIL
  ENGINEER · GAME DEVELOPER), each with a box beneath listing the properties of
  its medium — "paint dries, mixes, spreads" · "range, timbre, how air speaks"
  · "bears load, cures, fails" · the fourth box empty, filling in across the
  whole talk. Pull-quote under it.
- **Refs:** `ch00` intro.

## S3 — Why this talk now

- **Goal:** justify the investment; give the audience an anchor.
- **Content:** AI diffusion into every role, old team structures collapsing, a
  noisy industry — in that noise, anchor to **foundational knowledge, not tool
  fluency**. Orientation beats completeness.
- **Visual:** three "noise" chips converging into one "foundations" shield card;
  single line at the bottom.
- **Refs:** `ch00` §8.

## S4 — Section 2 intro: Data and code *(divider)*

- **Goal:** name the first substance lab.
- **Content:** "Section 2 · The two substances"; question chip: "What is
  software actually made of?"; index: section = code + data.
- **Visual:** indigo divider, two large cards peeking (CODE / DATA) behind the
  question.
- **Refs:** `ch00` §1.

## S5 — Two substances: code and data

- **Goal:** the load-bearing definition.
- **Content:** **code** = behavior, the active rules; **data** = state, the
  passive values; von Neumann: a stored program (code) over stored state
  (data). Example: "if the player presses jump, apply upward velocity".
- **Visual:** two big accent cards (CODE indigo / DATA sky) with 3 example
  bullets each; a "no third substance" banner underneath.
- **Refs:** `ch00` §1.

## S6 — The boundary is a design instrument

- **Goal:** show the line between code and data is chosen, not given.
- **Content:** code travels as data (QuakeC → `progs.dat`, `.qvm`, idScript,
  Blueprint `.uasset`); data acts (DOOM WAD maps/sprites/sounds, DOOM 3 `.decl`,
  ECS components).
- **Visual:** two cards with a swap arrow between; file-format chips on each
  side; bidirectional arrow labeled "swap".
- **Refs:** `ch00` §1.1–1.3.

## S7 — The career question

- **Goal:** give every discipline a question they will carry forever.
- **Content:** "what belongs in code, what in data?" Default: **data** — cheaper
  to change, inspect, ship; the layer non-programmers touch safely. Corollary:
  **your work is data until code plays it back.**
- **Visual:** big question box with two answer halves (CODE / DATA); amber
  takeaway strip at the bottom.
- **Refs:** `ch00` §1.

## S8 — Section 3 intro: The universal shape *(divider)*

- **Goal:** introduce IO before the loop.
- **Content:** "Section 3 · IO and boundaries"; question: "what shape does every
  program have on the inside?"
- **Visual:** sky-tinted divider with a single `input → process → output` strip
  drawn across the middle.
- **Refs:** `ch00` §2.

## S9 — The universal shape

- **Goal:** the three-box shape, with game examples.
- **Content:** input (keys, files, packets) → process (code over data) →
  output (pixels, sound, writes). Differences are only scale, speed, and where
  the boundaries are drawn.
- **Visual:** three accent boxes with arrows; small example labels under each;
  no other content on the slide.
- **Refs:** `ch00` §2.

## S10 — The IO stack is nested

- **Goal:** show the same shape at every layer.
- **Content:** human → application → runtime → operating system → hardware →
  physical world; every seam between layers is itself an IO exchange. A game is
  a stack of programs, not one.
- **Visual:** six stacked layer boxes with up/down arrows at every seam (reuse
  `ch00` §2 Mermaid).
- **Refs:** `ch00` §2.

## S11 — "No software without IO"

- **Goal:** land the section's strong claim.
- **Content:** **"there is no such thing as software without IO — only software
  whose IO is hidden."** The boundaries ARE the architecture; a program's
  interfaces are its spine. The escape question: where's the input, where's the
  output, what's in the middle?
- **Visual:** the quote as a centered statement; the three boxes ghosted in the
  background; a small "escape question" footer.
- **Refs:** `ch00` §2.

## S12 — Section 4 intro: The loop *(divider)*

- **Goal:** add time to the shape.
- **Content:** "Section 4 · The loop and latency"; question: "what happens when
  software doesn't stop — but repeats, forever?"
- **Visual:** divider with a circular arrow motif drawn in indigo.
- **Refs:** `ch00` §3.

## S13 — The human–machine interface loop

- **Goal:** picture the loop with a person inside it.
- **Content:** output → the human perceives → decides → acts → that act returns
  as input → process → output again. Sense/think/act maps 1:1 onto
  input/process/output.
- **Visual:** U-shaped belt diagram: INPUT → PROCESS → OUTPUT boxes on top, the
  return belt underneath labeled "perceive → decide → act"; a small HUMAN node
  on the belt.
- **Refs:** `ch00` §3.1–3.2.

## S14 — Cybernetics

- **Goal:** give the loop its name and its stakes.
- **Content:** cybernetics = watching your own output and correcting; loops
  converge or diverge. A game without a player is a simulation; with a human it
  is a goal-seeking loop.
- **Visual:** the sense/think/act triangle; "converge vs diverge" arrows;
  one-line definition banner.
- **Refs:** `ch00` §3.1–3.2.

## S15 — Latency is the loop's vital sign

- **Goal:** show why milliseconds are the whole discipline.
- **Content:** the latency chain finger → device → OS → simulation → render →
  display → eye; hops stack, never average. At 60 fps one frame = ≈16.7 ms for
  everything.
- **Visual:** a chain of small boxes with "+ms" stubs between them; below it a
  16.7 ms budget bar being competed for.
- **Refs:** `ch00` §3.3–3.4.

## S16 — Two gaits: pipeline and loop

- **Goal:** contrast software that happens once vs software that responds.
- **Content:** **pipeline** = one pass, no feedback (bake, compile, batch);
  **loop** = output feeds the next input. A game engine is a pipeline running
  inside a hard-real-time loop. If latency blows the budget, the game feels like
  a machine that sometimes answers.
- **Visual:** one one-direction arrow strip vs one circular arrow strip, side by
  side; takeaway line beneath.
- **Refs:** `ch00` §3.3–3.4.

## S17 — Section 5 intro: The five-part skeleton *(divider)*

- **Goal:** the periodic table of programs.
- **Content:** "Section 5 · The skeleton"; question: "every program has five
  parts — what are they?"
- **Visual:** five empty boxes in a row (STATE, LOGIC, INPUT, OUTPUT, CLOCK
  filled in on later slides); indigo divider.
- **Refs:** `ch00` §4, `ch01` §1.

## S18 — State, logic, input, output, clock

- **Goal:** name and define every part.
- **Content:** state = what is remembered; logic = what changes it; input = what
  gets in; output = what comes out; clock = who decides *when*.
- **Visual:** five accent-coded boxes in a row, each with its one-line job under
  it; nothing else.
- **Refs:** `ch00` §4, `ch01` §1.

## S19 — The clock is the decision people argue about

- **Goal:** the most decisive part, plus two habits.
- **Content:** event-driven vs polled = "who owns 'when'"; the web's push/pull
  war is the same decision. Habits: *find the clock first*; *name the part
  you're in*.
- **Visual:** split card (event vs polled); two habit chips beneath; clock box
  highlighted from S18.
- **Refs:** `ch00` §4, `ch01` §1.

## S20 — Section 6 intro: The engine *(divider)*

- **Goal:** the skeleton, made large.
- **Content:** "Section 6 · Engines are the skeleton scaled up"; claim: an engine
  is not a new kind of thing — five slots, each a full subsystem.
- **Visual:** the five-part row from S18, each box visually "exploding" into a
  subsystem list on this intro's right half.
- **Refs:** `ch00` §5, `ch01` §2.

## S21 — Every slot becomes a subsystem

- **Goal:** the fill table.
- **Content:** state → world model; logic → physics/AI/gameplay; input → input
  subsystem; output → renderer/audio/UI; clock → frame loop. Every part is a
  program in its own right.
- **Visual:** five rows: skeleton part (accent) → arrow → subsystem card (panel
  fill); one row per part.
- **Refs:** `ch00` §5.1, `ch01` §2.

## S22 — It is hard real-time

- **Goal:** the constraint that rules every engine.
- **Content:** a frame must be presented by the next display refresh or the
  human loop breaks. That single constraint explains more engine design than
  anything else.
- **Visual:** the frame-loop strip with a small red "deadline" flag at the
  refresh point; red banner at the bottom.
- **Refs:** `ch00` §5.

## S23 — The frame loop IS the human loop

- **Goal:** the decisive identification.
- **Content:** device → commands → update → world → render → screen → player
  perceives → acts → again, at 60–144 Hz. The human loop and the frame loop are
  the same loop; the frame is just the beat.
- **Visual:** circular arrow strip with the loop steps; "frame = beat" callout
  box.
- **Refs:** `ch00` §5.2, `ch01` §6.

## S24 — DOOM and Unreal: the same machine

- **Goal:** prove it with the two canonical engines.
- **Content:** DOOM (1993) `D_DoomLoop` — fixed 35 Hz tics, `TryRunTics`
  catch-up; UE5 `FEngineLoop::Tick` — game/render/RHI threads, Chaos substeps.
  One has a rasterizer, the other has threads; both are the same loop.
- **Visual:** two filled skeleton diagrams side by side (from `ch01` §6 Mermaid
  overlays); "same skeleton" banner between them.
- **Refs:** `ch01` §6, `Eng/DOOM`, `Eng/UE5`.

## S25 — The renderer is a downstream consumer

- **Goal:** correct the biggest mental error about engines.
- **Content:** the renderer never lives inside the simulation; it reads the
  world's state each frame and draws it.
- **Visual:** simulation box → arrow → renderer box downstream, with a "reads
  state" label on the arrow.
- **Refs:** `ch01` §3.

## S26 — Section 7 intro: How engines differ *(divider)*

- **Goal:** same shape, different stuffing.
- **Content:** "Section 7 · The clock and the four axes"; question: "if all
  engines are the same skeleton, why do they feel so different?"
- **Visual:** the five-part row ghosted; a "fills, never new parts" stamp.
- **Refs:** `ch01` §4–5.

## S27 — Two parts are core; the rest are channels

- **Goal:** the core/channel split.
- **Content:** core = state + simulation; channels = assets in, audio out, UI
  overlay out, network in/out. The WAD vs `.pk3` vs `.uasset` sameness: one
  idea, different containers.
- **Visual:** a vertical core spine with channel cards branching off each side;
  tiny format chips (WAD/.pk3/.uasset) under the channels.
- **Refs:** `ch01` §3.

## S28 — The clock's four beats

- **Goal:** the cadence table.
- **Content:** **fixed** — DOOM 35 Hz, Q3A server 20 Hz, DOOM 3 60 Hz (repeatable,
  must catch up); **variable** — Quake, Urho3D (smooth, not repeatable);
  **hybrid** — redot FTI, UE5 Chaos (fixed physics in a variable frame);
  **app-owned** — three.js (the clock moved to the app). "Every engine has a
  loop; only the beat changes."
- **Visual:** four rows: beat name card + engine/fact card; metronome motif as
  the column head.
- **Refs:** `ch01` §4.

## S29 — The four axes of difference

- **Goal:** the complete difference list.
- **Content:** world model, clock cadence, process topology, channel presence.
  No engine grows a sixth part. Habit: **read the row, not the name**.
- **Visual:** four axis cards in a 2×2; the "read the row" habit banner beneath.
- **Refs:** `ch01` §5.

---

# ACT B — THE WORLD AND THE MACHINE

## S30 — Section 8 intro: World models *(divider)*

- **Goal:** Act B opening + the State slot in focus.
- **Content:** "Act B · Section 8 · World models"; question: "how does an engine
  remember its world — and why does that decide how it feels to work in?"
- **Visual:** full-bleed sky divider; the STATE box from the skeleton highlighted
  and enlarged.
- **Refs:** `ch02`.

## S31 — Three questions, and the three answers ARE the world model

- **Goal:** the classification key.
- **Content:** stored how? related how? traversed how? — three answers, and the
  world model is just those answers. Everything else derives from them.
- **Visual:** three question cards in a row; "= the world model" tag after them.
- **Refs:** `ch02` §1.

## S32 — Three families at a glance

- **Goal:** the landscape before any depth.
- **Content:** scene graph (three.js, Babylon.js, redot, Urho3D); BSP + flat
  entities (DOOM, Quake, Q3A, DOOM 3); ECS / data-oriented (OpenEngine).
- **Visual:** three columns with engine logo chips beneath each (from `ch02`
  §9 Mermaid).
- **Refs:** `ch02` §1–4, `engines`.

## S33 — Scene graphs: a tree for people

- **Goal:** what the scene graph is for.
- **Content:** objects in a parent→child transform tree; why artists and
  designers love it: attach a sword to a hand and the hand moves the sword for
  free. Cost: traversing the tree every frame.
- **Visual:** a small branching tree diagram; "people first" caption; example
  bubble: attach weapon to hand.
- **Refs:** `ch02` §3–4.

## S34 — BSP + flat entities: the static-world answer

- **Goal:** the id Tech family.
- **Content:** a compiled static level (binary space partitions = rooms you can
  cheaply test) plus a flat list of entities placed absolutely. The fastest way
  to cull and collide static geometry. Not suited to fully dynamic worlds.
- **Visual:** a room-split diagram (BSP) + a flat entity list beside it; "gold
  standard for static geometry" caption.
- **Refs:** `ch02` §5, `Eng/DOOM`, `Eng/Q3A`, `Eng/DOOM3`.

## S35 — ECS: data-oriented, machine-shaped

- **Goal:** the tables-and-systems family.
- **Content:** component arrays in tables; systems run over component sets.
  Trades human-shaped thinking for machine-shaped speed — great for tens of
  thousands of entities. What an entity *is* is its data.
- **Visual:** three-column table diagram with systems sweeping rows; "machine
  first" caption.
- **Refs:** `ch02` §6, `Eng/OpenEngine`.

## S36 — They blend; choice is a product decision

- **Goal:** kill the "one true family" idea.
- **Content:** scene graphs for people, BSP for static levels, ECS for mass —
  production engines blend them. The family choice is a product decision: it
  decides what your art/design/audio live in daily.
- **Visual:** three columns fusing into one "your team feeds this shape" card;
  one-line takeaway banner.
- **Refs:** `ch02` §7–8.

## S37 — The world model is a state store

- **Goal:** the Redux comparison that clicks.
- **Content:** Redux: action → reducer → store → view; engine: input → logic →
  world → frame loop → renderer → screen. Differences: engines **pull** every
  frame, are **spatial**, and **simulate** — you can rewind a store, not a
  simulation.
- **Visual:** two aligned flow strips (Redux / engine) with the differences as
  three callouts beneath.
- **Refs:** `ch02` §7–8, `ch00` §6.4.

## S38 — Draw the HUD last, in screen space

- **Goal:** UI is not an extension of the world.
- **Content:** UI is a screen-space overlay drawn on top, not part of the world
  model (world-space UI and 2D are the carve-outs).
- **Visual:** a world layer and a UI overlay layer separated by a line; two
  chips (world-space UI, 2D) as exceptions.
- **Refs:** `ch02` §7.

## S39 — Two machines in one box

- **Goal:** the machine's core idea — two processors, one frame budget.
- **Content:** CPU = a few deep lanes (a generalist, branchy, one step at a
  time); GPU = thousands of wide lanes (an army, one recipe on enormous data).
  SIMD: one instruction, many thin legs. **A frame is bound by one of four
  things — CPU, GPU, IO, or memory.**
- **Visual:** "a scholar vs an army" split (from `ch03` §1); four "bound"
  chips as a footer banner; no profiling detail.
- **Refs:** `ch03` §1, §7.

## S40 — Stat unit and Unreal Insights

- **Goal:** the one practical tool, and the method behind it.
- **Content:** UE5 `stat unit` prints the bound question as rows — Frame vs Game
  vs Draw — and Unreal Insights shows the timeline. Read Game vs GPU and the
  diagnosis is half written. Method in one line: measure one variable at a time
  (the sandhills), or Amdahl — the parallelizable share caps your gain.
- **Visual:** a mock "stat unit" console block (rows); two small strategy chips.
- **Refs:** `ch03` §8–10, `Eng/UE5`.

## S41 — Control flow: who waits, who decides the order?

- **Goal:** the two control-flow questions, plus the ladder.
- **Content:** **who waits?** (blocking stands still; event loops handle the
  next thing); **who decides the order?** (preemptive — the OS chooses; or
  cooperative — coroutines/task graphs choose). Async I/O keeps going during
  slow reads. One line: coordination gets pricier every rung — one thread →
  event loop → threads → fibers → processes → the network.
- **Visual:** two question cards with example strips; a small four-rung ladder
  graphic.
- **Refs:** `ch04` §1–7.

## S42 — State: whose memory, whose copy is the truth?

- **Goal:** the state questions.
- **Content:** whose memory? (shared whiteboard vs mailboxes); whose copy is
  authoritative, and how long may a copy be wrong? Replication = intentional
  copies; **staleness buys parallelism**; on the network one node gets the
  authority.
- **Visual:** two question cards (memory / truth); a "staleness = currency"
  banner linking them.
- **Refs:** `ch04` §8–13, §19–21.

## S43 — UE5 names them

- **Goal:** anchor everything to a real engine and a single summary question.
- **Content:** game / render / RHI threads, latent actions (coroutines), the
  task graph, replication + RPCs. The question: *who runs, who waits, who
  decides the order, whose copy is the truth?*
- **Visual:** UE5 thread timeline (Game/Render/RHI); the four-knot question as
  the takeaway banner.
- **Refs:** `ch04` §9, §14–18, `Eng/UE5`.

## S44 — Section 11 intro: Three seams of the machine *(divider)*

- **Goal:** the machine's three quiet seams, one slide each.
- **Content:** "Section 11 · Schemas, spatial indexes, the OS"; question: "what
  do every discipline's handoffs have in common?" — three chips: CONTRACT · MAP
  · LEDGER.
- **Visual:** sky divider with three chips (CONTRACT / MAP / LEDGER) in a row.
- **Refs:** `ch05`–`ch07`.

## S45 — 11a · A schema is a three-part contract

- **Goal:** what "schema" means in one line.
- **Content:** fields and types (what exists), order and layout (where and how),
  rules (what the values mean together). Nothing means anything until writer
  and reader agree on all three. One line: the reader breaks, the file was
  fine — "the contract was violated, not the file."
- **Visual:** one contract card dissected into its three parts; example chip at
  the bottom.
- **Refs:** `ch05` §1.

## S46 — 11a · Three worlds of format

- **Goal:** authoring, runtime, wire — and the requirements they serve.
- **Content:** **authoring** — for people, says everything, loads slowly
  (`.fbx`, `.gltf`, `.wav`); **runtime** — for speed (`.uasset`, cooked);
  **wire** — for bandwidth and change (packets, snapshots, replication). One
  line: schema evolution keeps old and new talking; determinism is the contract
  byte-for-byte — a desync is a broken contract.
- **Visual:** the triangle (authoring / runtime / wire) from `ch05` §10; format
  samples at each vertex; desync note as a corner tag.
- **Refs:** `ch05` §7–9.

## S47 — 11b · The map, not the warehouse

- **Goal:** the map idea, its honesty, and where the shapes fit.
- **Content:** "what is near door B?" — open every crate (naive) vs read the map
  (spatial index). It is a **cache of where things are**, refit or rebuilt as
  things move; an index that lies is worse than none. Shapes in one line:
  a grid or a tree of boxes (octree/BVH) or BSP rooms — one structure per
  world model. The same map serves drawing and collision.
- **Visual:** warehouse vs map side-by-side (reuse `ch06` §1 Mermaid);
  two small shape chips.
- **Refs:** `ch06` §1–2.

## S48 — 11c · The OS: no direct touches

- **Goal:** the landlord, and its day job in one line.
- **Content:** the OS is the landlord: allocation and isolation; your game is a
  **process** in a walled arena of virtual memory; system calls are the only
  doors to the kernel. Day job: the OS schedules, issues tickets (handles), and
  fronts the GPU as a second venue.
- **Visual:** app box → kernel ring → hardware boxes, a "grant a seat" flow
  (from `ch07` §1); "no direct touches" banner.
- **Refs:** `ch07` §1–8.

## S49 — 11c · The observatory

- **Goal:** the diagnosis skill — read the ledger, don't guess.
- **Content:** the OS keeps a ledger on every process and ships the tools (Task
  Manager, `stat unit`, Event Viewer) that read it — and the tools show only
  what the kernel shows. The walk: name it, watch it, read the ledger — then
  ask: game bug or OS constraint?
- **Visual:** a ledger/table mock; the numbered diagnosis chips; "game bug vs OS
  constraint" divider.
- **Refs:** `ch07` §9–10.

---

# ACT C — PEOPLE AND THE CHAIN

## S50 — Section 12 intro: The discipline map *(divider)*

- **Goal:** Act C opening — from machine to people.
- **Content:** "Act C · Section 12 · People and the chain"; question: "where do
  YOU sit in this machine — and what does your role feed?"
- **Visual:** full-bleed green divider; a row of small role chips (art · audio ·
  design · code) spanning the bottom.
- **Refs:** `ch00` §7.

## S51 — Owners and feeders

- **Goal:** the social structure of the skeleton.
- **Content:** every subsystem has **owners** (build and maintain — usually
  engineers) and **feeders** (fill it — usually everyone else). No one owns the
  whole machine; the clock has no feeder — everyone obeys it. Boundary
  disagreements decode team conflict.
- **Visual:** the subsystem table with owner/feeder columns; "no single owner"
  banner; the clock row highlighted.
- **Refs:** `ch00` §7, `ch01` §2.

## S52 — The weapon: one rifle, four stages

- **Goal:** the chain that ties every discipline together.
- **Content:** design → data production → engine integration → gameplay code.
  Everything before the last stage is inert data; stage 4 plays it back.
- **Visual:** four chevrons (design → data → integration → gameplay code) with
  discipline tags beneath each (from `ch08` §1 Mermaid).
- **Refs:** `ch08` §1.

## S53 — Stages 1–2: design and data

- **Goal:** the schema and the substances.
- **Content:** stage 1 design decides what the weapon *is* (role, feel, spec —
  the doc is already a schema). Stage 2 produces the inert data: model,
  skeleton, textures, audio. **Nothing does anything yet.**
- **Visual:** two cards; stage 2 card with an "empty boxes" motif (files but no
  movement).
- **Refs:** `ch08` §2–3.

## S54 — Stages 3–4: integration and playback

- **Goal:** from files to firing.
- **Content:** stage 3 import turns files into typed, reachable assets (soft vs
  hard references decide what loads when). Stage 4 gameplay code reads the
  recipe and orchestrates — fire → animation, sound, particles, damage — and the
  player's finger is the input leg.
- **Visual:** two cards with the circuit closing: stage 4 output → player input
  arrow; fire-loop icons.
- **Refs:** `ch08` §4–5.

## S55 — Re-traced in DOOM 3: the skeleton is the constant

- **Goal:** prove it is not a UE5 story.
- **Content:** the same chain in DOOM 3: design → data → `.entity` → the
  idScript VM. The takeaway: **stage 4 only plays back what stages 1–3
  produced**; the skeleton is the constant, the engines are the variables.
- **Visual:** the four-chevron chain with id Tech labels under each stage;
  takeaway banner.
- **Refs:** `ch08` §6, `Eng/DOOM3`.

---

# ACT D — THE INTERFACE AND THE FUTURE

## S56 — Section 13 intro: AI and the medium *(divider)*

- **Goal:** Act D opening; neutral framing.
- **Content:** "Act D · Section 13 · AI and the medium"; question: "what does
  'talking to software' actually consist of?" Framed as fact, not promotion.
- **Visual:** full-bleed purple divider; four chips behind the title (backend ·
  model · harness · knowledge).
- **Refs:** `ch09`.

## S57 — An agent is four things

- **Goal:** the four-piece model.
- **Content:** **backend** (inference service, cloud or local) · **model** (the
  trained brain) · **harness** (the frontend on YOUR machine — the only piece that
  touches it) · **knowledge** (your context: files, docs, notes). A model alone
  is a chat box; a harness turns words into actions.
- **Visual:** four stacked cards; the harness card highlighted as "the only one
  on your machine".
- **Refs:** `ch09` §1.

## S58 — Explain and modify

- **Goal:** the two-way interface.
- **Content:** **explain** — software → understanding ("walk me through the
  renderer"); **modify** — intent → software ("change the goal"). The catch, and
  the payoff of this whole talk: **you still must know the medium to aim it.**
- **Visual:** two-way loop graphic (you ↔ harness ↔ files); the catch as a
  quote box. No product screenshots.
- **Refs:** `ch09` §6, `ch00` §8.1.

## S59 — Where the tools live *(optional — one breath)*

- **Goal:** mention the landscape exists; no urging.
- **Content:** harnesses (Kilo, opencode, pi, Hermes), local (LM Studio),
  services (OpenRouter), hubs (Hugging Face); standards (AGENTS.md, dotfolders,
  skills, MCP); knowledge (RAG, vector DBs, OKF/Obsidian); sandboxes/permissions
  as the trust boundary.
- **Visual:** a three-layer stack (Harnesses → Services → Hubs) with one line
  each; lock icon on the trust note.
- **Refs:** `ch09` §7–11.

## S60 — Section 14 intro: The coming times *(divider)*

- **Goal:** open the close.
- **Content:** "Section 14 · The coming times"; question: "what does the future
  do to the loop we just built?"
- **Visual:** purple divider; a large looping arrow motif.
- **Refs:** `ch10`.

## S61 — The fear, and the cybernetic answer

- **Goal:** meet the fear honestly, answer it with the talk's own model.
- **Content:** the fear is real (AI pressure on ~40% of jobs); the measured
  answer is **replacing some and complementing others** — the loop changes
  scale, not membership. Symbiosis, not replacement.
- **Visual:** a two-panel (red "replacing" slab vs indigo "complementing"
  slab); the loop arrow drawn across both.
- **Refs:** `ch10` §1–2.

## S62 — The hybrid engine and the metaverse as a verb

- **Goal:** what the future machine looks like.
- **Content:** today's engine stays as symbolic scaffolding; subsystems hand to
  neural networks one at a time (neural rendering already ships); shared
  real-time worlds are the medium where agents learn from us.
- **Visual:** a hybrid-engine bar (symbolic base, neural inserts); "metaverse =
  verb" caption.
- **Refs:** `ch10` §3–4.

## S63 — Closing: "The interface changed, the medium didn't."

- **Goal:** the final line, said once.
- **Content:** ten rules, one medium — foundations outlast tools; the interface
  changed, the medium didn't. The map holds for every engine, era, and job.
- **Visual:** dark closing slide, short statement centered, nothing else.
- **Refs:** `ch00` §9, `ch10`.

## S64 — Q&A and further reading

- **Goal:** point away from the deck, into the reference and the open source.
- **Content:** Q&A reflex: find the loop, the clock, the latency — ask what data
  and code are doing inside it. Read the reference once top to bottom, then per
  task. Further reading: id-Software GitHub (DOOM/Quake/Q3A/DOOM 3), three.js &
  Babylon.js, Godot, Unreal docs, cybernetics.
- **Visual:** a "where to go" card list; closing dark background.
- **Refs:** `ch00` §10, `engines`.