---
type: Overview
title: "Presentation Overview — Software is the Medium: Game Engines are Software"
description: How the Software is the Medium reference will be presented and summarized — a 14-section, ~77-minute structure (trimmed 64-slide deck) in four acts, with chapter citations and a standalone synopsis of every section. Derived per the presentation plan (Plans/2026-11-02_software-is-the-medium-presentation-plan.md).
tags: [presentation, overview, game-engines, medium, teaching]
generated: { by: kilocode/deepseek-v4-flash, at: 2026-11-02T04:00:27Z }
---

# Presentation Overview — Software is the Medium: Game Engines are Software

This document structures **how the reference is presented and summarized.** It is
deliverable #1 of the [presentation plan](../../Plans/2026-11-02_software-is-the-medium-presentation-plan.md).
It assumes the audience knows nothing
about engines; it moves top to bottom through the reference's own reading order.

Each section below is a **standalone synopsis**: a short paragraph of what the
section is communicating, then the high-level ideas as bullets. It is written so
that someone who has **not** read the reference still comes away knowing what the
section is about.

## 1. The thread (thesis)

> Software — and game engines as a specialized form of software — is the medium
> of this work. Learn the generic structure first, and every engine, era, and
> job is a new instance of something already understood.

The talk is one map built from four big ideas, each of which becomes a pin the
audience can hang every later detail on:

- **Everything in software is data or code.** Code is behavior (the rules, the
  instructions). Data is state (the values the code acts on). A game file is
  data until a program reads it into life.
- **Every program is input → process → output**, and the important part is the
  boundaries: things cross in, the program acts, things cross out — and this
  same three-part shape appears at every layer, from the human pressing a key to
  the CPU moving bytes.
- **Interactive software is a loop.** It does not just run once; it shows
  output, waits for input that depends on that output, and repeats — a
  goal-seeking feedback loop with a human inside it. The loop's clock and its
  speed (how long a round-trip takes) are what make games hard.
- **Every program hangs on one skeleton of five parts: state, logic, input,
  output, and a clock.** State is what the program remembers, logic is what
  changes it, input is what gets in, output is what comes out, and the clock
  decides *when*. Say "I'm stuck — where's the input? what's holding the state?"
  and most confusion starts to resolve.

From there, the reference does one move that turns all of this into a career
map: **a game engine is the same five-part skeleton, made large.** Every slot
becomes a whole subsystem — the state slot becomes the *world model* (the
engine's picture of the world and everything in it), the logic slot becomes
physics/AI/gameplay code, the clock becomes the *frame loop* that beats every
16.7 milliseconds at 60 fps. Different engines are still the same skeleton;
they differ only in how they stuff the five slots.

Collapse it for the audience this way:

> Data and code, wrapped in input → process → output ✅ input matters, brought
> to life by a loop; the loop hangs on five parts — state, logic, input, output,
> clock; an engine is that skeleton with every part made large; the world model
> is the part most people live in daily.

That last point is why the whole talk works for a mixed room: **the world model
is the engine's most-read state** — the thing artists fill, designers tune,
programmers simulate, and the renderer reads every frame to draw. Understand the
skeleton, look for the world model, and no engine you meet later is foreign.

If a discussion ever stalls, the escape is the map's own first question: *where
is the input, where is the output, what is in the middle?*

## 2. Audience and length

- Mixed-discipline audience (art, audio, design, engineering, production;
  students or early-career staff). No programming required.
- **Confirmed (2026-11-02):** mixed technical backgrounds; the audience is
  largely skeptical of AI. Keep every section at orientation level; never go
  deep into implementation.
- **Trimmed format (2026-11-02, primary trim applied):** the expanded deck
  (~88 min, 73 slides) was too deep in the machine block. The section budgets
  below now sum to **≈77 min of talk** (64 slides) plus Q&A, inside the 3-hour
  window. Section times are budgets, not deadlines; spend them on the parts
  the room reacts to.
- The deck is live at 64 slides (S1–S64) in
  [`slide-deck.md`](slide-deck.md); the machine block (§9–§11) is the trim
  zone, consolidated per the plan's §12 primary-trim audit.

## 3. How the reference maps onto the talk

The reference has 11 chapters; the talk has 14 sections in four acts. The
derivation (how `ch00`–`ch10` became these sections) is documented in
[the presentation plan, §7](../../Plans/2026-11-02_software-is-the-medium-presentation-plan.md).

| Act | Talk sections | Reference chapters |
|---|---|---|
| **A — Foundations** | 1–7 | `ch00` (flagship), `ch01` (common structure) |
| **B — The world and the machine** | 8–11 | `ch02–ch07` (world models; hardware; concurrency; schemas; spatial indexes; the OS) |
| **C — People and the chain** | 12 | `ch00` §7 + `ch08` (discipline map; the weapon) |
| **D — The new interface and the future** | 13–15 | `ch09` (AI), `ch10` (coming times), `ch00` §9 |

## 4. Source key

Relative to this folder (`Presentations/Software is the Medium - Game Engines are Software/`):

- `ch00` = [`00-software-is-the-medium.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/00-software-is-the-medium.md)
- `ch01` = [`01-common-structure.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/01-common-structure.md)
- `ch02` = [`02-world-models.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/02-world-models.md)
- `ch03` = [`03-hardware-and-performance.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/03-hardware-and-performance.md)
- `ch04` = [`04-concurrency-and-state.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/04-concurrency-and-state.md)
- `ch05` = [`05-schemas-and-formats.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/05-schemas-and-formats.md)
- `ch06` = [`06-spatial-indexes.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/06-spatial-indexes.md)
- `ch07` = [`07-operating-systems.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/07-operating-systems.md)
- `ch08` = [`08-the-weapon-example.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/08-the-weapon-example.md)
- `ch09` = [`09-ai-and-the-medium.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/09-ai-and-the-medium.md)
- `ch10` = [`10-the-coming-times.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/10-the-coming-times.md)
- `Eng/DOOM`, `Eng/Quake`, `Eng/Q3A`, `Eng/DOOM3`, `Eng/UE5`, `Eng/threejs`,
  `Eng/Babylon`, `Eng/redot`, `Eng/Urho3D`, `Eng/OpenEngine` =
  [`Engines/index.md`](../../References/Software%20is%20the%20Medium%20-%20Game%20Engines%20are%20Software/Engines/index.md)

## 5. Section-by-section plan

### Section 1 — Opening: the medium *(4 min · `ch00` intro, §8, §9)*

This section establishes the talk's single claim before any anatomy appears:
**software is the medium of this industry**, the way canvas is for a painter —
and game engines are software at its most demanding. It motivates why the whole
talk exists and lays out the map the audience will be given, so every later
point has a home before it is made.

- Every craft has a material with its own properties — paint on canvas, the
  instrument, steel and concrete. A maker who does not understand their material
  cannot make great work in it; a game maker who does not understand software is
  in the same situation.
- Game engines are the proof of how demanding the medium is: same structure as
  every program, made large, fast, and hard-realtime — yet knowable.
- Why this talk exists now (`ch00` §8): AI diffusing into every role, old team
  structures collapsing, a noisy industry. In that noise the durable anchor is
  **foundational knowledge, not tool fluency**.
- The promise: by the end, every person in the room knows where they sit in the
  machine — which slot their discipline feeds, what owns it, and where to look
  for answers.
- Preview the map: four acts — Foundations, The world and the machine, People
  and the chain, The interface and the future. **Foundations outlast tools.**

### Section 2 — Two substances: data & code *(6 min · `ch00` §1)*

This section strips "software" down to what it actually is made of. The claim is
simple and load-bearing: everything a program does is either **code** (the
active rules, behavior) or **data** (the passive values, state) — and the line
between the two is cut by design decisions, not by nature. This is the section
where non-programmers first see that "their" files are data, and that shipping a
game is a data activity.

- Two substances, and nothing else: **code** behaves — functions, instructions,
  "do this, then that"; **data** is acted on — numbers, text, bytes, state. This
  is the von Neumann model: a stored program operating on stored state.
- Game-relevant example runs through it all: "if the player presses jump, apply
  upward velocity" — the rule is code, the velocity is data, the player's height
  is data.
- The boundary is a **design instrument**, not a wall:
  - code travels as data — QuakeC into `progs.dat` bytecode, Quake III into
    `.qvm`, DOOM 3 into idScript, Unreal into Blueprint `.uasset`, Godot-family
    into script files;
  - data acts — DOOM's WAD files carry maps, sprites, sounds, even monster
    behavior tables; DOOM 3 uses `.decl` content files; in an ECS, components
    decide what an entity *is*.
- The career-long question: **"what belongs in code, what in data?"** Default
  answer: data — cheaper to change, easier to inspect, simpler to ship, and the
  layer non-programmers touch safely.
- Personal corollary worth repeating: **your work is data until code plays it
  back.** Everything an artist, designer, or audio person makes sits on the data
  side until a program reads it.

### Section 3 — The universal shape: IO & boundaries *(5 min · `ch00` §2)*

This section gives the program a shape. Every program, no matter how large, is
`input → process → output`; programs differ only in scale, speed, and where the
boundaries between the three are drawn. The punchline is that the boundaries
themselves are the architecture — a program is defined by what crosses its
edges.

- The universal shape: something comes in (keys, files, packets), something in
  the middle acts on it (code over data), something goes out (pixels, sound,
  writes to disk). Games have examples at hand for all three.
- The IO stack is **nested**: human → application → runtime → operating system →
  hardware → physical world. Every seam between layers is itself an IO exchange;
  a game is not one program but a stack of them, each with its own
  input/process/output.
- The strong claim to land: **"there is no such thing as software without IO —
  only software whose IO is hidden."** A program's interfaces are its spine.
- Where this talk uses it: whenever anyone is lost in a detail, the escape
  question is *where is the input, where is the output, what is in the middle?* —
  the same three boxes, at any scale.

### Section 4 — The loop: cybernetics & latency *(6 min · `ch00` §3)*

This section adds time. Interactive software does not just process; it
**loops** — it shows output, waits for input that depends on that output, and
runs again. That makes every game a *cybernetic* system: a goal-seeking loop
with a human inside it. Its critical parameter is **latency**, which means the
whole engineering discipline of real-time software is really a budget for time.

- The human–machine interface loop: output → the human perceives → decides →
  acts → that act returns as input → process → output again. Sense, think, act
  map one-to-one onto input, process, output.
- Cybernetics = goal-seeking by watching your own output and correcting. Loops
  converge or diverge; the human inside the game loop is what makes it demanding
  — a game without a player is just a simulation.
- Latency is the loop's vital sign: trace finger → device → OS → simulation →
  render → display → eye, and every hop adds latency; they stack, they never
  average. At 60 fps the whole frame is one ≈16.7 ms budget — that single number
  explains most of the engineering in this talk.
- Two gaits of software:
  - **pipeline** — one pass, no feedback: bake, compile, batch orders;
  - **loop** — output feeds the next input: a game is a pipeline running inside
    a hard-real-time loop, repeating every frame.
- If latency blows the budget, the human stops feeling in control — the game
  stops feeling like "you" and starts feeling like "a machine that sometimes
  answers".

### Section 5 — The five-part skeleton *(4 min · `ch00` §4 · `ch01` §1)*

This section gives every program a periodic table. Whatever the size or
language, every program is the same five parts — **state, logic, input, output,
clock** — and the most decisive of the five is the clock: *who decides when*. It
is the map's first reusable tool and the professional's head-start.

- The five parts, with plain-language jobs: state (what is remembered), logic
  (what changes it), input (what gets in), output (what comes out), clock (who
  decides when).
- The clock is the choice people actually argue about: **event-driven vs
  polled**. "Push vs pull" at web scale is the same decision wearing different
  clothes — decide who owns 'when' and most debates shrink.
- Two habits to offer the audience:
  - *find the clock first* — it tells you when everything else happens;
  - *name the part you're in* — when a discussion stalls, saying "we're in the
    input part" or "we're arguing about the clock" restores focus.
- `ch01`'s version of this: **the five parts are your map** for reading any
  program or engine, however big — this is the skeleton the rest of the talk
  fills with muscle.

### Section 6 — Engines: the skeleton scaled up *(7 min · `ch00` §5 · `ch01` §2–3)*

This section makes the jump from "every program" to "game engine". An engine is
the same five-part skeleton, only each slot has been blown up into a whole
subsystem — and it runs **hard real-time**: a frame must hit the display refresh
or the human loop breaks. The core move is showing that game engines are not a
new kind of thing; they are the same loop, made large.

- The fill table — each skeleton part becomes an engine subsystem:
  state → the world model; logic → physics, AI, gameplay; input → the input
  subsystem; output → renderer, audio, UI, network; clock → the frame loop.
- "Larger" means two specific things, not mystery:
  - every part is a program in its own right;
  - it is hard-real-time — presenting a frame at the next refresh is the whole
    design constraint.
- The decisive move: **the frame loop IS the HMI loop at 60–144 Hz.** Human
  output feeds device input all over again; the "frame" is just the beat.
- Concrete proof the talk must show: DOOM (1993) `D_DoomLoop` with fixed 35 Hz
  tics and `TryRunTics` catch-up vs Unreal Engine 5 `FEngineLoop::Tick` across
  game/render/RHI threads — one has a rasterizer, the other has threads; both
  are the same machine (`ch01` §6 Mermaid overlays).
- The renderer is a **downstream consumer of state** — it never lives inside
  the simulation; it reads the world and draws it.

### Section 7 — The clock & the four axes *(6 min · `ch01` §4–5)*

This section explains how engines differ once you accept they are the same
shape. Two parts of the engine are core — **state and simulation** — and the
rest are channels (assets in, audio out, UI overlay out, network in/out). When
you read an engine's differences, you are reading **fills, never new parts**:
the clock's beat, the world model, the process topology, the channels. The habit
to hand the room: *read the row, not the name*.

- The clock cadences (`ch01` §4):
  - **fixed** — DOOM 35 Hz, Q3A server 20 Hz, DOOM 3 60 Hz: repeatable and
    deterministic, but must catch up when it falls behind;
  - **variable** — Quake, Urho3D: simple and smooth, not repeatable;
  - **hybrid** — redot's FTI, UE5's Chaos substeps: fixed physics inside a
    variable frame, the modern both;
  - **app-owned** — three.js hands the clock to the application. It isn't gone;
    it moved.
  - The one line to keep: **every engine has a loop; only the beat changes** —
    and the beat decides how an engine feels.
- IO channels: assets in, audio out, UI overlay out, network in/out. The WAD
  vs `.pk3` vs `.uasset` sameness is one idea in different containers: the
  medium each engine happens to read.
- The four axes of difference: **world model, clock cadence, process topology,
  channel presence.** An engine never grows a sixth part — someone just stuffs
  one slot differently.

### Section 8 — World models *(9 min · `ch02`)*

This section gives the world model its full act: how the State slot is filled,
and why that single choice decides how an engine feels to work in — for
programmers *and* for everyone who feeds it content. It is the longest section
because it is where most disciplines first see their own work inside the
machine.

- Every engine answers three world-model questions, and those three answers
  *are* the world model: **stored how? related how? traversed how?**
- Three families:
  - **Scene graph** — a tree of objects with parent→child transform
    inheritance; three.js, Babylon.js, redot, Urho3D. Their answer to "how do
    dynamic things relate?" is a tree that people can read.
  - **BSP + flat entities** — a statically compiled level (binary space
    partitions) plus a flat list of entities placed absolutely; DOOM, Quake,
    Q3A, DOOM 3. Their answer to "how do I cull and collide static geometry?" is
    the gold standard, still the fast answer for static worlds.
  - **ECS / data-oriented** — tables of component arrays; systems run over
    component sets; OpenEngine. Their answer to "how do I process hundreds of
    thousands of things?" is machine-shaped, not human-shaped.
- The families are **not rivals**: scene graphs are for people, BSP is for
  static worlds, ECS is for mass. Production engines routinely blend them — a
  scene graph for dynamic objects, a static structure for the level, a flat
  list for the movers.
- Once you know a family you can predict its feel: what artists can attach,
  what designers can spawn, what tech art has to do to make level pieces "just
  work". **The family choice is a product decision**, not a style preference.
- The world model **is a state store**, and the comparison that clicks is Redux:
  - Redux: action → reducer → store → view. Engine: input → logic → world →
    frame loop → renderer → screen.
  - Differences: the engine **pulls** (re-reads everything every frame) instead
    of being notified; it is **spatial** instead of relational; and it
    **simulates** — you can rewind a reducer, you cannot rewind a simulation.
- UI is **screen-space**: a parallel overlay drawn on top, not an extension of
  the world (world-space UI and 2D are the carve-outs). Draw the HUD last, in
  screen space.
- The honest note to end on: pick the shape your team can feed — the world model
  you choose is the world your art, design, and audio have to live in every day.

### Section 9 — Hardware & performance *(3 min · `ch03` — S39–S40, trimmed)*

This section opens the machine — kept to the two ideas the audience can use. A
game does not run on one computer but on **two machines in one box** — a CPU
with a few deep lanes and a GPU with thousands of wide lanes — and every frame
is a budget split between them. The rest of the material (§9 bullets below)
informs the slides but is not preached: **two slides, one tool.**

- The two machines (`ch03` §1):
  - **CPU** — a few deep lanes: a generalist that can run any describable
    program, one careful step at a time (branchy, unpredictable logic);
  - **GPU** — thousands of wide lanes: an army that runs the same small recipe
    on enormous data at once (shading, rasterizing, math that looks like
    rendering).
  - SIMD says it compactly: one instruction, many thin legs. Compute shaders
    push general programs onto the wide lanes.
- Where the frame's time actually goes: **bound work** — a frame is CPU-bound,
  GPU-bound, IO-bound, or memory-bound. The bottleneck is usually hidden from
  casual inspection; users describe symptoms, not diagnoses. *(folded as one
  line onto S39)*
- The hands-on anchor: UE5 **`stat unit`** prints the bound question as rows —
  Frame vs Game vs Draw — and Unreal Insights shows the timeline. Method in one
  line: measure one variable at a time (the sandhills) or Amdahl (only the
  parallel share can benefit). *(S40)*
- Keep it light: the goal is the *mental model* (two machines, one budget), not
  a hardware lecture. *(two profiling strategies are folded, not preached)*

### Section 10 — Concurrency & state *(4 min · `ch04` — S41–S43, trimmed)*

This section teaches the two questions that reduce every concurrency and state
problem to a manageable shape: **who runs when** (control flow) and **whose copy
is the truth** (state). Three slides: control flow + the ladder in one line,
the state questions, and the UE5 names as the anchor.

- Control flow — two questions:
  - **who waits?** — on one thread, blocking work stands still; event loops
    handle the next thing instead of waiting;
  - **who decides the order?** — preemptive (the OS chooses) vs cooperative
    (coroutines/task graphs choose), with async I/O to keep going during slow
    reads.
  - The ladder in one line (folded into S41): one thread → event loop → threads
    → fibers → processes → the network. Every rung up buys capability and pays
    complexity.
- State — the same two-question trick:
  - **whose memory?** — shared (one whiteboard) vs message passing (mailboxes);
  - **whose copy is the truth, and how long may a copy be wrong?** — replication
    is *intentional copies*; staleness is the currency that buys parallelism.
  - Copies on purpose underwrite multiplayer: give one node the authority and
    let the rest be stale for exactly as long as the game tolerates.
- The summary question that carries the whole section — *who runs, who waits,
  who decides the order, whose copy is the truth?* — with UE5 naming the rungs
  in one slide (S43): game / render / RHI threads, latent actions, the task
  graph, replication + RPCs.

### Section 11 — Schemas · spatial indexes · the OS *(6 min · `ch05`–`ch07` — S44–S49, trimmed)*

This section covers three seams of the machine that every discipline touches
without quite having words for. **Trimmed to six slides**: the section intro
plus one idea per seam — the schema contract, the three format worlds, the map,
the landlord, and the observatory. Three short takes, one takeaway each.

#### 11a — Schemas: the contracts every read must keep *(S45–S46)*

Nothing works until the writer and the reader agree on what the data means.
That agreement is a **schema**: declared fields and types, order and layout, and
the rules that give the bytes meaning together. *(two slides: the contract, the
three worlds + evolution/determinism folded in)*

- A schema is three parts: **fields and types** (what exists), **order and
  layout** (where and how it is stored on disk or the wire), and **rules** (what
  the values mean together). Nothing means anything until all three are agreed.
- Formats split into three worlds, each a contract written for a different
  master (`ch05` §7–8):
  - **authoring** — for generality and humans, says everything, loads slowly
    (`.fbx`, `.gltf`, `.wav`);
  - **runtime** — for speed, designed to be loaded fast (`.uasset`, cooked
    content);
  - **wire** — for bandwidth and change, small and survives version drift
    (packets, snapshots, replication).
  - Engines convert from authoring → runtime → wire by design.
- **Schema evolution** and **determinism** in one line (on S46): evolution
  keeps old and new software talking; determinism is the contract byte-for-byte
  — a desync in multiplayer is a broken contract.
- The everyday shape of this idea: a designer moves a field in a config and
  every reader breaks — "the contract was violated, not the file."

#### 11b — Spatial indexes: the map, not the warehouse *(S47)*

Games constantly ask *"what is here?"* — what to draw, what to collide, what is
close. The answer is never to open every crate: engines keep a **spatial index**,
a map of *where things are*, derived from the world's state and kept honest as
things move. *(one slide — the analogy, the cache honesty, the shapes and
culling in one line each)*

- The map is a **cache of location metadata**, not the items themselves —
  "near door B?" reads an aisle, not the whole warehouse. It is derived from the
  world's state, so it must be **refit or rebuilt** when things move; an index
  that lies is worse than none.
- Map shapes in one line (folded onto S47): a **grid** of fixed aisles, or a
  **tree of boxes** (octree/BVH), or **BSP rooms** for static worlds — one
  structure per world model.
- The same map serves drawing and collision (folded onto S47): the culling
  ladder for draw calls, the broadphase for collision; real physics libraries
  ship two indexes (static + dynamic).

#### 11c — Operating systems: the scaffold and the observatory *(S48–S49)*

Software never touches hardware directly. The **operating system** is the
landlord of the machine — it allocates resources, isolates programs from each
other, mediates every touch of hardware, and keeps the books. *(two slides: the
landlord + day job in one line, and the observatory/diagnosis walk)*

- The OS is the scaffold: your game is a **process**, a running instance in a
  walled arena of virtual memory. Processes isolate — one program's bug is
  another program's wrong-data, but rarely another's crash.
- **System calls** are the only doors between user space and the kernel — every
  file read, every network send, every GPU submission rides through them. The
  day job in one line (folded onto S48): the OS schedules, issues tickets
  (handles), and fronts the GPU as a second venue.
- Blocking vs async I/O: a blocking syscall parks the calling thread until the
  job is done; async lets the program keep going. The GPU is a **second venue**
  through the same landlord, with its own device memory.
- The observatory: the OS keeps a **ledger** on every process and ships the
  tools (Task Manager, `stat unit`, Event Viewer) that read it — and the tools
  show only what the kernel knows, which is why a mysteriously broken tool is
  itself a clue.
- The delivered skill: the diagnosis walk, trimmed to three moves — **name it,
  watch it, read the ledger** — then ask whether the symptom is a game bug or
  an OS constraint. Sorting those two is the actual skill.

### Section 12 — The discipline map & the weapon *(8 min · `ch00` §7 · `ch08`)*

This section is the payoff of the map: where people sit, and the object that
chains them together. Every subsystem has **owners** and **feeders**; no one
owns the whole machine. The weapon — one rifle walked from concept to firing —
is the second half of the talk's proof that all the anatomy is one chain with a
player at the end.

- The discipline map (`ch00` §7):
  - every subsystem has owners (who build and maintain it — usually engineers)
    and feeders (who fill it — usually everyone else). Each discipline feeds a
    part someone else owns; **the handoff is where teams work or break**;
  - the one rule everyone agrees with: the **clock has no feeder** — no one
    feeds the clock, everyone obeys it;
  - boundary disagreements decode team conflict: name the slot, and the argument
    halves.
- The weapon as a four-stage chain (`ch08`):
  1. **Design** — decides what the weapon *is*: role, feel, spec. The design doc
     is already a schema.
  2. **Data production** — the inert substances: model, skeleton, textures,
     audio. Nothing does anything yet — it is data.
  3. **Integration** — import turns files into typed, reachable assets; soft vs
     hard references decide what loads when.
  4. **Gameplay code** — instantiation and playback: the code reads the recipe
     and orchestrates — fire → animation, sound, particles, damage.
- Close the circuit: the **player's finger is the input leg**, and what they
  see is the output leg — the whole weapon is the loop, on screen.
- Re-trace the same chain in **DOOM 3** (design → data → `.entity` → the
  idScript virtual machine) to prove it is not a UE5 story: **the skeleton is
  the constant, the engines are the variables.**
- The takeaway sentence to land hard: **stage 4 only plays back what stages 1–3
  produced.** No discipline owns the chain — it only feels great end-to-end when
  every handoff is understood.

### Section 13 — AI & the medium *(5 min · `ch09`)*

This section presents, factually and neutrally, what "talking to software"
actually is. The audience is cool toward AI, so the framing is descriptive, not
promotional: **an agent is four things** — backend, model, harness, knowledge —
and the harness is the only one that touches your machine. The section earns its
place because the ability to aim at software is exactly what the rest of this
talk built.

- The four pieces: the **backend** (inference service, cloud or local), the
  **model** (the trained brain it runs), the **harness** (the frontend on your
  machine — the piece that can read your files and act), and **knowledge** (your
  context: files, docs, notes). A model alone is a chat box; a harness turns
  words into actions.
- The interface flows both ways: **explain** (software → understanding — "walk
  me through the renderer") and **modify** (intent → software — "change the
  goal"). AI is the first interface that does both.
- A very short history gives it depth: the oldest idea in computing is a Greek
  boat being steered — feedback loops; cybernetics formalized it; two "minds"
  (symbolic and connectionist) have traded seasons since; two winters bracketed
  an era of hype; the current spring is the harness + hardware realization.
- The modern landscape in one breath: harnesses (Kilo, opencode, pi, Hermes),
  local-first (LM Studio), services (OpenRouter), hubs (Hugging Face); emerging
  standards (AGENTS.md, dotfolders, skills, MCP); a knowledge layer (RAG, vector
  databases, knowledge graphs, OKF/Obsidian) that teaches an agent your world by
  giving it a reading room.
- Trust comes last and always: harnesses gate what an agent may touch — scoped
  permissions and sandboxes — *know the door you open*.
- The catch to end on — and the whole talk's payoff: **you still have to know
  the medium to aim it.** You cannot ask for a tour of the renderer if you do
  not know a renderer exists. That is what this presentation gave everyone.
- Keep it neutral: no demos, no urgency, no pitch. The idea carries itself.

### Section 14 — The coming times & closing *(4 min · `ch10` · `ch00` §9)*

This section answers the future, then closes the map. The fear around AI is
real — it touches a large share of jobs — and the measured answer is that it is
**replacing some and complementing others**: the loop changes scale, not
membership. End on the medium: the interface changed, the medium didn't.

- The fear, stated fairly: AI pressure lands on roughly four in ten jobs — read
  as "exposed", not "doomed". The measured phrasing is **replacing some and
  complementing others**; both words matter.
- The cybernetic answer: software is a goal-seeking loop with a human inside;
  AI changes its speed, not its membership. This is symbiosis, not replacement —
  which is why the audience's existing skills remain the important half.
- The engine becomes **hybrid**: today's symbolic scaffolding stays; subsystems
  get handed to neural networks one at a time (neural rendering already ships).
- The metaverse as a **verb**: shared real-time simulated worlds are becoming
  the medium where agents learn about us — a game without a player is a
  simulation; with a human it is a goal-seeking loop.
- Close with the reference's spirit in one breath: ten rules, one medium — and
  the final line to leave the room with: **"The interface changed, the medium
  didn't."**

### Section 15 — Q&A *(15 min · all chapters)*

Point every question back to the map, and hand the room the shelf it came from.

- The reflex to teach during Q&A: *find the loop, find the clock, find the
  latency — and ask what data and code are doing inside it.* Any engine, any
  tool, any job: name the slot.
- Suggested further reading (`ch00` §10): id-Software's open-source DOOM, Quake,
  Q3A, and DOOM 3 on GitHub; three.js and Babylon.js; Godot; Unreal docs;
  cybernetics and von Neumann to go deeper.
- The one-relook offer: "read the reference once, top to bottom; after that,
  per task — stuck in a tool → find your slot; new engine → name its world-model
  family; who-does-what confusion → the weapon chain."

## 6. Cutdown plans

The primary version is the trimmed full one (≈77 min talk); cutdowns only ever
get shorter, never deeper.

| Version | When to use it | What to change |
|---|---|---|
| **Full (trimmed, ≈77 min talk)** | The 3-hour window; the primary version | As written in §5. |
| **Compressed (~50 min talk)** | The room is dragging or the slot tightens | §8 keeps its three families but loses the Redux comparison; §11 → one "three seams" sweep (schemas contract · the map · the OS ledger) in 3 minutes; §6 folds §7's clock into itself; §9–§10 merge to one slide; §13 keeps the four pieces and the catch, drops the landscape (S59). |
| **Fast (~35 min talk)** | Emergency trim | Acts C+D play at half tempo: §12's weapon chain becomes the anchor, §9–§11 become one combined slide, §14's final line closes. |

## 7. Deck mapping

The trimmed 64-slide deck is final in
[`slide-deck.md`](slide-deck.md); talking points are in
[`speaker-cards.md`](speaker-cards.md). Mapping:

- §1 → S1–S3 · §2 → S4–S7 · §3 → S8–S11 · §4 → S12–S16 · §5 → S17–S19 ·
  §6 → S20–S25 · §7 → S26–S29 · §8 → S30–S38 · §9 → S39–S40 ·
  §10 → S41–S43 · §11 → S44–S49 · §12 → S50–S55 · §13 → S56–S59 ·
  §14 → S60–S63 · §15 → S64.
