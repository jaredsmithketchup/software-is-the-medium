---
type: Reference
title: "Speaker Cards — Software is the Medium: Game Engines are Software"
description: Companion helper cards for the trimmed 64-slide deck (S1–S64) — one direct card per slide with a focus line, short talking points, analogies and multiple examples, and the transition out. Machine block consolidated per the plan's §12 primary trim.
tags: [presentation, speaker-cards, game-engines, medium, talking-points]
generated: { by: kilocode/deepseek-v4-flash, at: 2026-11-02T04:44:02Z }
---

# Speaker Cards — Software is the Medium: Game Engines are Software

Companion to [`slide-deck.md`](slide-deck.md) and
[`presentation-overview.md`](presentation-overview.md). One card per slide —
**direct lines, not prose**. Hit the focus, say the bullet points, reach for an
analogy or example, and let the transition carry you. **Analogies and examples
are the engine** — every card lists several so you can pick what fits the room.

Delivery rules (from the plan):

- Orientation over completeness. If you feel a list coming on, cut it to one.
- Name the part you're in (state, logic, a channel, or the clock) whenever a
  question stalls.
- When lost: *where is the input, where is the output, what is in the middle?*
- **Trimmed format:** ~77 min talk + Q&A, inside the 3-hour window. Machine
  block (§9–§11) is now a fast sweep — S39–S49, one idea each.
- **Intro slides are 20-second signposts** — say the question, move on.
- **AI (S56–S59): factual, neutral.** No demos, no pitch. S59 optional.
- When trimming further: cut §11 to one-liners first, then S59; never the
  weapon (S50–S55) or the closing (S61–S63).

---

# ACT A — FOUNDATIONS

## S1 — The pattern of software

**Focus:** two claims — data + code, and the five-part skeleton.

- Software is the medium. Game engines ARE software.
- Made of exactly two substances: **data + code**.
- Every program hangs on five parts: **state, logic, input, output, clock**.
- Don't define yet — plant it. Section 5 earns it.
- One line at the corner: foundations outlast tools.

**Analogies/examples:** "five boxes, and what happens when you make each one
huge" — that's the whole talk.

**Transition:** "Before we open the boxes — what a medium is."

**Refs:** `ch00` intro, §1, §4, §8.

## S2 — You work in a medium

**Focus:** every craft has a material with properties; yours is software.

- Painter → paint + canvas. Musician → the instrument. Civil engineer → steel
  and concrete.
- Game developer → ??? The box is empty — we fill it in today.

**Analogies/examples:**
- "The painter who can't see how paint dries, mixes, thins — can't paint
  well, no matter the brush."
- "The civil engineer who ignores how concrete cures pours things that sink."
- "A guitarist who doesn't know how wood and air speak — just makes noise."

**Transition:** "So what IS software made of? Two substances."

**Refs:** `ch00` intro.

## S3 — Why this talk now

**Focus:** foundations outlast tools.

- The industry is noisy: AI in every role, structures collapsing, new tool every
  week.
- Anchor to foundational knowledge, not tool fluency.
- This is a map, not a manual.

**Analogies/examples:**
- "The tool you learn today dies in five years; the skeleton hasn't changed since
  von Neumann."
- "A compass isn't a route — but it works in every city."

**Transition:** "Strip software down — two substances, nothing else."

**Refs:** `ch00` §8.

## S4 — Section 2 intro: Data and code

**Focus:** what is software actually made of?

- Straight answer: two things.

**Transition:** "Everything running is an instruction about to run, or a value
being processed. Nothing else."

**Refs:** `ch00` §1.

## S5 — Two substances: code and data

**Focus:** code behaves; data is acted on.

- **Code** = active: rules, functions, "do this, then that."
- **Data** = passive: values, state, numbers, text.
- von Neumann: stored program over stored state. Still true.

**Analogies/examples:**
- "If the player presses jump, apply upward velocity" — rule = code, velocity =
  data.
- "Spreadsheet: formulas are code; the cells are data."

**Transition:** "The twist: they can wear each other's clothes."

**Refs:** `ch00` §1.

## S6 — The boundary is a design instrument

**Focus:** code and data swap by choice.

- Code travels as data: QuakeC → `progs.dat`; `.qvm`; idScript; Blueprints
  `.uasset`.
- Data acts: DOOM WAD carries behavior; DOOM 3 `.decl`; ECS components decide
  what an entity is.
- The line is a decision, not a law.

**Analogies/examples:**
- "Mods change games by swapping data files, never recompiling."
- "The recipe is data until the kitchen plays it — then it acts like code."

**Transition:** "That line is a career-long question."

**Refs:** `ch00` §1.1–1.3.

## S7 — The career question

**Focus:** what belongs in code, what in data?

- Default: **data** — cheaper to change, inspect, ship; safe for non-programmers.
- **Your work is data until code plays it back.**

**Analogies/examples:**
- "Tune the game by editing one number — designer owns the change."
- "Content patch vs program update — data ships in minutes, code in releases."

**Transition:** "What shape does all this live in? One shape, everywhere."

**Refs:** `ch00` §1.

## S8 — Section 3 intro: The universal shape

**Focus:** every program is input → process → output.

- "What shape does every program have on the inside?" — three boxes.

**Transition:** "Three boxes. Every program. No exceptions."

**Refs:** `ch00` §2.

## S9 — The universal shape

**Focus:** input → process → output, with examples.

- Input: keys, files, packets. Process: code over data. Output: pixels, sound.
- Programs differ in scale, speed, and where boundaries are drawn.

**Analogies/examples:**
- "Save button: click in, state written, file out."
- "Thermostat, save dialog, game engine — same three boxes, different sizes."

**Transition:** "And it repeats — nested at every layer."

**Refs:** `ch00` §2.

## S10 — The IO stack is nested

**Focus:** every layer is an IO exchange.

- Human → app → runtime → OS → hardware → physical world.
- A game is a stack of programs, not one.

**Analogies/examples:**
- "One keypress crosses four layers' IO in milliseconds."
- "Russian dolls — each one in/out on every seam."

**Transition:** "The seams ARE the architecture."

**Refs:** `ch00` §2.

## S11 — No software without IO

**Focus:** the strong claim.

- "No such thing as software without IO — only software whose IO is hidden."
- Boundaries are the architecture.
- Escape question: where's input, where's output, what's in the middle?

**Analogy:** "A lungless animal — a program with no boundaries doesn't survive
contact with the world."

**Transition:** "But software doesn't run once — it loops."

**Refs:** `ch00` §2.

## S12 — Section 4 intro: The loop

**Focus:** add time.

- Interactive software repeats, forever.

**Transition:** "Once it loops, that's cybernetics — the science of steering."

**Refs:** `ch00` §3.

## S13 — The human–machine interface loop

**Focus:** the loop, drawn with a person inside.

- Output → human perceives → decides → acts → act returns as input → repeat.
- Sense/think/act ↔ input/process/output.

**Analogy:** "Every 'responsive' or 'laggy' feeling is your body reading the
shape of this loop."

**Transition:** "Steering by feedback — cybernetics."

**Refs:** `ch00` §3.1–3.2.

## S14 — Cybernetics

**Focus:** goal-seeking by feedback.

- Watch your own output, correct, repeat.
- Loops converge or diverge.
- Game without a player = simulation; with a human = goal-seeking loop.

**Analogy:** "Thermostat vs pilot — your game has the most demanding human
imaginable at the controls."

**Transition:** "The loop's vital sign: latency."

**Refs:** `ch00` §3.1–3.2.

## S15 — Latency is the loop's vital sign

**Focus:** milliseconds are the job.

- Finger → device → OS → sim → render → display → eye.
- Delays stack, never average.
- 60 fps = one 16.7 ms budget for everything.

**Analogy:** "60 vs 144 Hz — the difference is 'you' versus 'it'."

**Transition:** "Two gaits of software."

**Refs:** `ch00` §3.3–3.4.

## S16 — Two gaits: pipeline and loop

**Focus:** once-through vs responsive.

- Pipeline: one pass, no feedback — bake, compile, batch.
- Loop: output feeds next input — responds, adapts.
- Game = pipeline inside a hard-real-time loop.

**Analogy:** "Compile = pipeline. Game running = loop. Same software."

**Transition:** "Now the bridge to every engine — the skeleton."

**Refs:** `ch00` §3.3–3.4.

## S17 — Section 5 intro: The five-part skeleton

**Focus:** the periodic table of programs.

- "Every program has five parts — guess them."

**Transition:** "Five parts, always."

**Refs:** `ch00` §4, `ch01` §1.

## S18 — State, logic, input, output, clock

**Focus:** name and define all five.

- State = remembered. Logic = changes it. Input = gets in. Output = goes out.
  Clock = decides when.
- Any program classifies into these boxes.

**Analogy:** "Web form: data = state, validation = logic, submit = input,
response = output, 'who runs when' = clock."

**Transition:** "The one you'll fight about: the clock."

**Refs:** `ch00` §4, `ch01` §1.

## S19 — The clock is the argument

**Focus:** event vs polled; two habits.

- Event-driven: "tell me when." Polled: "anything now?" — on a rhythm.
- Push vs pull — the same war, everywhere.
- Habits: find the clock first; name the part you're in.

**Analogy:** "The next 'engine feels laggy' argument is a clock argument."

**Transition:** "Skeleton, held up to an engine — one move, whole talk."

**Refs:** `ch00` §4, `ch01` §1.

## S20 — Section 6 intro: The engine

**Focus:** the skeleton, scaled up.

- Engine = same five slots, each blown up into a subsystem.

**Transition:** "Watch the slots get stuffed."

**Refs:** `ch00` §5, `ch01` §2.

## S21 — Every slot becomes a subsystem

**Focus:** the fill table.

- State → world model. Logic → physics/AI/gameplay. Input → input subsystem.
  Output → renderer/audio/UI. Clock → frame loop.
- Every part is a program in its own right.

**Analogy:** "'The engine is slow' means nothing — name the subsystem and it's
debuggable."

**Transition:** "And it runs on a deadline."

**Refs:** `ch00` §5.1, `ch01` §2.

## S22 — It is hard real-time

**Focus:** the frame deadline.

- Output must hit the refresh — missing it is failure, not "late."
- The human inside the loop sets the deadline.

**Analogy:** "A stutter mid-combat isn't a flaw — it's a deadline missed in
front of the person who set it."

**Transition:** "Engine heartbeat = human heartbeat."

**Refs:** `ch00` §5.

## S23 — The frame loop IS the human loop

**Focus:** one loop, 60–144 beats.

- Device → commands → update → world → render → screen → player acts → again.
- The frame is just the beat.

**Analogy:** "Your 60Hz monitor is the loop's metronome."

**Transition:** "See it in two iconic engines."

**Refs:** `ch00` §5.2, `ch01` §6.

## S24 — DOOM and Unreal: the same machine

**Focus:** proof by example.

- DOOM 1993: `D_DoomLoop`, 35 Hz tics, `TryRunTics` catch-up.
- UE5: `FEngineLoop::Tick`, game/render/RHI threads, Chaos substeps.
- Same loop, 33 years apart.

**Analogy:** "One has a rasterizer, the other threads — both are the same
machine."

**Transition:** "One correction, then how engines differ."

**Refs:** `ch01` §6, `Eng/DOOM`, `Eng/UE5`.

## S25 — The renderer is a downstream consumer

**Focus:** sim first, render after.

- The renderer reads state and draws — it's never inside the simulation.

**Analogy:** "Black screen, world still simulates — the renderer is a reader at
the end of the pipeline."

**Transition:** "Same skeleton — why do engines feel different? Fills."

**Refs:** `ch01` §3.

## S26 — Section 7 intro: How engines differ

**Focus:** fills, never new parts.

- Same five slots; the stuffing differs.

**Transition:** "First: the core/channel split."

**Refs:** `ch01` §4–5.

## S27 — Two parts are core; the rest are channels

**Focus:** state + sim are core; channels are lanes.

- Core: state, simulation. Channels: assets in, audio out, UI out, network.
- WAD vs `.pk3` vs `.uasset` — one idea, different containers.

**Analogy:** "three.js has no audio — an empty channel; the app holds it."

**Transition:** "The most decisive fill: the clock."

**Refs:** `ch01` §3.

## S28 — The clock's four beats

**Focus:** fixed, variable, hybrid, app-owned.

- Fixed: DOOM 35 Hz, Q3A 20 Hz, DOOM 3 60 Hz — repeatable, must catch up.
- Variable: Quake, Urho3D — smooth, not repeatable.
- Hybrid: redot FTI, UE5 Chaos — both.
- App-owned: three.js — the clock moved.

**Analogy:** "Fixed is a metronome, variable is a human drummer — same song,
not the same feel."

**Transition:** "Four knobs total."

**Refs:** `ch01` §4.

## S29 — The four axes of difference

**Focus:** world model, clock, topology, channels.

- No engine grows a sixth part.
- Habit: read the row, not the name.

**Analogy:** "Meet an engine → ask its four fill choices → you can predict how
it feels."

**Transition:** "The biggest knob is the world model — Act B."

**Refs:** `ch01` §5.

---

# ACT B — THE WORLD AND THE MACHINE

## S30 — Section 8 intro: World models

**Focus:** the biggest slot.

- How does an engine remember its world — and why does that decide how it feels
  to work in?
- Longest stretch — where most of you see your own work in the machine.

**Transition:** "Three questions — the answers ARE the world model."

**Refs:** `ch02`.

## S31 — Three questions

**Focus:** stored how? related how? traversed how?

- Those three answers = the world model. Predicts the rest of the engine.

**Analogy:** "'Your art attaches to what?' is the relation question — it decides
your daily workflow."

**Transition:** "Three families."

**Refs:** `ch02` §1.

## S32 — Three families at a glance

**Focus:** scene graph / BSP+entities / ECS.

- Scene graph: three.js, Babylon, redot, Urho3D.
- BSP + flat entities: DOOM, Quake, Q3A, DOOM 3.
- ECS: OpenEngine.

**Transition:** "The tree first."

**Refs:** `ch02` §1–4.

## S33 — Scene graphs: a tree for people

**Focus:** parent→child transforms.

- Children inherit transforms — torch moves with the hand.
- People-shaped: "attach node to node."

**Analogy:** "Attach a sword to a hand — the hand moves it for free."

**Transition:** "Now the static-world answer."

**Refs:** `ch02` §3–4.

## S34 — BSP + flat entities

**Focus:** compiled level + flat list.

- BSP = walls compiled into convex rooms, ultra cheap tests.
- Entities placed absolutely.
- Gold for static worlds; fights fully dynamic ones.

**Analogy:** "DOOM shipped on a 386 because a room test beats a world search."

**Transition:** "The machine-shaped answer: ECS."

**Refs:** `ch02` §5, `Eng/DOOM`, `Eng/Q3A`, `Eng/DOOM3`.

## S35 — ECS: data-oriented, machine-shaped

**Focus:** tables and systems.

- Data in columns — all positions together; systems sweep the sets.
- What an entity *is* is its data.
- Scales to tens of thousands.

**Analogy:** "A thousand bullets are a column, not a thousand objects."

**Transition:** "Not rivals — production blends them."

**Refs:** `ch02` §6, `Eng/OpenEngine`.

## S36 — They blend; choice is a product decision

**Focus:** pick the shape your team can feed.

- Scene graph for people, BSP for static, ECS for mass.
- The choice is the world your team lives in daily.

**Transition:** "Underneath all three — a store, with a famous cousin."

**Refs:** `ch02` §7–8.

## S37 — The world model is a state store

**Focus:** Redux, pulled and spatial.

- Redux: action → reducer → store → view. Engine: input → logic → world →
  render.
- Engines pull, are spatial, and simulate — you can rewind a store, not a
  simulation.

**Analogy:** "'Rewind the last second of gameplay?' — the world was integrated,
not derived. Nothing to revert."

**Transition:** "UI? Screen space, overlay."

**Refs:** `ch02` §7–8, `ch00` §6.4.

## S38 — Draw the HUD last, in screen space

**Focus:** UI overlays the world.

- UI = screen-space pixels on top.
- Exceptions: world-space UI, 2D.

**Analogy:** "Health bar over a head = exception; the pause menu = screen space,
full stop."

**Transition:** "Under it all — the machine. Two computers in one box."

**Refs:** `ch02` §7.

## S39 — Two machines in one box

**Focus:** scholar vs army — and the four ways a frame gets bound.

- CPU: few deep lanes, any program, one step at a time, branchy.
- GPU: thousands of wide lanes, one recipe, enormous data.
- SIMD: one instruction, many thin legs.
- One line to keep: every frame is bound by one of four things — CPU, GPU, IO,
  or memory. The bottleneck is invisible on purpose.

**Analogies/examples:**
- "Scholar writing prose vs an army painting a fence."
- "Smooth FPS but loading hitches → that's IO, and your FPS counter can't see
  it."

**Transition:** "One command prints the bound question."

**Refs:** `ch03` §1, §7.

## S40 — Stat unit and Unreal Insights

**Focus:** the tool, and the method behind it.

- `stat unit`: Frame vs Game vs Draw rows. Unreal Insights: the timeline.
- Read Game vs GPU and the diagnosis is half written.
- Method in one line: measure one variable at a time (sandhills), or Amdahl —
  only the parallel share can benefit.

**Analogies/examples:**
- "Game row pegged + GPU idle = simulation is your bottleneck — stop tuning
  shaders."
- "Why can't 8 cores fix it? — only the parallel share can."

**Transition:** "When things run at once, somebody decides who."

**Refs:** `ch03` §8–10, `Eng/UE5`.

## S41 — Control flow and the ladder

**Focus:** who waits? who decides the order?

- Blocking stands still; event loops handle the next thing.
- Preemptive (OS decides) vs cooperative (coroutines decide).
- Async I/O: start, keep going, collect later.
- The ladder in one line: one thread → event loop → threads → fibers →
  processes → the network. Every rung costs coordination.

**Analogies/examples:**
- "Loading screen = blocking; async = kettle's boiling while you set the cups."
- "You don't jump to networked — you climb, paying at every rung."

**Transition:** "Now the state half."

**Refs:** `ch04` §1–7.

## S42 — State: whose copy is the truth?

**Focus:** memory, truth, staleness.

- Whose memory: shared whiteboard vs mailboxes.
- Whose copy is truth; how long may a copy be wrong?
- Replication = intentional copies; staleness buys parallelism.

**Analogy:** "Your input is authoritative on your client; the server arbitrates;
your client is stale by design — milliseconds of wrong buy the whole game."

**Transition:** "Unreal has names for all of it."

**Refs:** `ch04` §8–13, §19–21.

## S43 — UE5 names them

**Focus:** names, then one question.

- Game/render/RHI threads; latent actions; task graph; replication + RPCs.
- The question: who runs, who waits, who decides, whose copy is truth?

**Analogy:** "Every 'engine's wonky' complaint reduces to one of those four
knots."

**Transition:** "Three quiet seams hold it together — last stretch of Act B."

**Refs:** `ch04` §9, §14–18, `Eng/UE5`.

## S44 — Section 11 intro: Three seams of the machine

**Focus:** contract, map, ledger.

- Schemas, spatial indexes, the OS — three short takes, one slide each.

**Transition:** "First: how does any byte know what it means?"

**Refs:** `ch05`–`ch07`.

## S45 — 11a · A schema is a three-part contract

**Focus:** fields, layout, rules.

- What exists, where and how, what it means together.
- Nothing means anything until writer and reader agree.

**Analogy:** "A file is just bytes; the schema makes it a model. 'The contract
was violated, not the file.'"

**Transition:** "Three worlds of format."

**Refs:** `ch05` §1.

## S46 — 11a · Three worlds of format

**Focus:** authoring, runtime, wire — and what they must keep.

- Authoring: for people, loads slow — `.fbx`, `.gltf`, `.wav`.
- Runtime: for speed — `.uasset`, cooked.
- Wire: for travel, survives change — packets, snapshots.
- One line: evolution keeps old and new talking; a desync is a broken contract.

**Analogies/examples:**
- "One truth, three clothes — for the designer, the disk, the network."
- "A desync in multiplayer is a writer and reader who stopped agreeing."

**Transition:** "Second seam: where things are."

**Refs:** `ch05` §7–9.

## S47 — 11b · The map, not the warehouse

**Focus:** "what is here?" without touching everything.

- A cache of where things are; refit or rebuild as things move.
- An index that lies is worse than none.
- Shapes in one line: a grid or a tree of boxes (octree/BVH) or BSP rooms —
  one structure per world model. The same map serves drawing and collision.

**Analogies/examples:**
- "Door B: open every crate vs read the aisle."
- "A stale map is worse than none — a rocket flies through a wall."

**Transition:** "Third seam: the landlord."

**Refs:** `ch06` §1–2.

## S48 — 11c · The OS: no direct touches

**Focus:** the landlord, and its day job.

- Your game is a process in a walled arena.
- System calls are the only doors to the kernel.
- Day job one line: the OS schedules, issues tickets (handles), and fronts the
  GPU as a second venue.

**Analogies/examples:**
- "The save file corrupts — you didn't touch the disk; you asked and got a
  seat."
- "A handle leak = a pile of unrenewed tickets — a diagnosable OS failure."

**Transition:** "And it keeps the books."

**Refs:** `ch07` §1–8.

## S49 — 11c · The observatory

**Focus:** read the ledger, don't guess.

- Tools show only what the kernel knows.
- The walk: name it, watch it, read the ledger — then game bug or OS
  constraint?

**Analogy:** "Crash + Task Manager tells you who died; the ledger tells you who
did what."

**Transition:** "Machine done. Act C — the people."

**Refs:** `ch07` §9–10.

---

# ACT C — PEOPLE AND THE CHAIN

## S50 — Section 12 intro: The discipline map

**Focus:** from machine to people.

- "Where do YOU sit in this machine — and what does your role feed?"

**Transition:** "Every subsystem has owners and feeders."

**Refs:** `ch00` §7.

## S51 — Owners and feeders

**Focus:** owners build; feeders fill.

- No one owns the whole machine.
- The clock has no feeder: everyone obeys it.
- Boundary disagreements = subsystem conflicts; name the slot.

**Analogy:** "'The build shows wrong state' — a state-machine boundary
argument, not a person problem."

**Transition:** "One object touches every row — a weapon."

**Refs:** `ch00` §7, `ch01` §2.

## S52 — The weapon: four stages

**Focus:** design → data → integration → gameplay code.

- Everything before the last stage is inert; stage 4 plays it back.

**Transition:** "First two stages — the schema and the substances."

**Refs:** `ch08` §1.

## S53 — Stages 1–2: design and data

**Focus:** nothing does anything yet.

- Design: role, feel, spec — the doc is already a schema.
- Data: model, skeleton, textures, audio — inert.

**Analogy:** "The best gunshot sound can't fire the gun by itself."

**Transition:** "Stages 3–4: from files to firing."

**Refs:** `ch08` §2–3.

## S54 — Stages 3–4: integration and playback

**Focus:** import turns files into assets; code plays them.

- Soft vs hard refs: streams as needed vs baked in.
- Stage 4 orchestrates: button → montage, sound, particles, damage.
- The player's finger is the input leg.

**Analogy:** "The fire button's full journey: input leg → stage 4 → stage 2's
sounds → output leg."

**Transition:** "Not a UE5 story — DOOM 3."

**Refs:** `ch08` §4–5.

## S55 — Re-traced in DOOM 3

**Focus:** the skeleton is the constant.

- Design → data → `.entity` → idScript VM. Same chain, 2004.
- Stage 4 only plays back what stages 1–3 produced.

**Analogy:** "Any boss, any weapon, any era — four stages. Constants stay,
engines change."

**Transition:** "A new interface arrived — Act D."

**Refs:** `ch08` §6, `Eng/DOOM3`.

---

# ACT D — THE INTERFACE AND THE FUTURE

## S56 — Section 13 intro: AI and the medium

**Focus:** new interface, same medium; neutral.

- "Some of you are skeptical of AI — fair. This isn't a pitch."

**Transition:** "Whatever your stance, an agent is four things."

**Refs:** `ch09`.

## S57 — An agent is four things

**Focus:** backend, model, harness, knowledge.

- Backend: inference service. Model: the brain. Harness: on YOUR machine — the
  only one that touches it. Knowledge: your context.

**Analogy:** "A model alone is a chat box; a harness turns words into actions —
power and risk share the same door."

**Transition:** "It goes both ways."

**Refs:** `ch09` §1.

## S58 — Explain and modify

**Focus:** understands you, and edits software.

- Explain: software → understanding.
- Modify: intent → software.
- The catch: you still must know the medium to aim it.

**Analogy:** "You can't request a tour of the renderer if you don't know a
renderer exists."

**Transition:** "Where the tools live — one breath."

**Refs:** `ch09` §6, `ch00` §8.1.

## S59 — Where the tools live *(optional — one breath)*

**Focus:** doors exist; no urging.

- Harnesses: Kilo, opencode, pi, Hermes. Local: LM Studio. Services:
  OpenRouter. Hubs: Hugging Face.
- Standards: AGENTS.md, dotfolders, skills, MCP.
- Trust: sandboxes and permissions — know the door you open.

**Analogy:** "'The GitHub of AI' — and then move on."

**Transition:** "The close — what does the future do to the loop?"

**Refs:** `ch09` §7–11.

## S60 — Section 14 intro: The coming times

**Focus:** the future and the loop.

- "What does the future do to the loop we just built?"

**Transition:** "Meet the fear straight."

**Refs:** `ch10`.

## S61 — The fear, and the cybernetic answer

**Focus:** scale changes, membership doesn't.

- Fear is real: ~40% of jobs exposed.
- Answer: replacing some AND complementing others — both words matter.
- Symbiosis, not replacement.

**Analogy:** "A smarter autopilot doesn't replace the steersman — it redeploys
them to stronger seas."

**Transition:** "The future machine, concretely."

**Refs:** `ch10` §1–2.

## S62 — The hybrid engine and the metaverse as a verb

**Focus:** scaffolding + neural inserts.

- Engine stays as symbolic scaffolding; neural subsystems move in one at a time.
- Neural rendering already ships.
- Shared real-time worlds: where agents learn about us.

**Analogy:** "No neural waterfall — one subsystem at a time, keep what works."

**Transition:** "One line, then sit down."

**Refs:** `ch10` §3–4.

## S63 — Closing: the medium didn't change

**Focus:** the final line.

- Ten rules, one medium — foundations outlast tools.
- **The interface changed. The medium didn't.**

**Analogy:** none — this IS the moment.

**Transition:** "Okay — who has a question?"

**Refs:** `ch00` §9, `ch10`.

## S64 — Q&A and further reading

**Focus:** hand them the shelf.

- Q&A reflex: find the loop, the clock, the latency; ask what data and code are
  doing inside it.
- Read once top to bottom; then per task — tool → your slot; engine → its world
  model; confusion → the weapon chain.
- Further reading: id-Software GitHub, three.js & Babylon.js, Godot, Unreal
  docs, cybernetics.

**Refs:** `ch00` §10, `engines`.