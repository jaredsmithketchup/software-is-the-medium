---
type: Reference
title: "Slide Deck — Software is the Medium: Game Engines are Software"
description: Plain-language 64-slide deck (S1–S64). One idea per slide. Audience text is short sentences. Speaker script lives in speaker-cards.md.
tags: [presentation, slide-deck, game-engines, medium, slides]
generated: { by: kilocode, at: 2026-11-02T06:20:00Z }
---

# Slide Deck — Software is the Medium: Game Engines are Software

Audience text is the **Content** line, split into short sentences. The words to
say are in [`speaker-cards.md`](speaker-cards.md).

---

# ACT A — FOUNDATIONS

## S1 — Section 1 intro: Software is the Medium — Game Engines are Software *(divider)*

- **Goal:** show the whole talk in one picture.
- **Content:** Software is the medium. Game engines are software. Five parts. Four acts.
- **Visual:** data and code chips, five boxes, four-act bar.
- **Refs:** `ch00` intro, §1, §4, §8.

## S2 — You work in a medium

- **Goal:** make "medium" concrete.
- **Content:** A painter has to know paint. A musician has to know the instrument. You have to know software. That is what this talk is.
- **Visual:** four jobs, the last box filling in.
- **Refs:** `ch00` intro.

## S3 — Why this, today

- **Goal:** give them a reason to stay.
- **Content:** Tools change every year. The shape of software does not. Learn the shape. The tools get easier.
- **Visual:** noise into one card: foundations.
- **Refs:** `ch00` §8.

## S4 — Section 2 intro: Code and data *(divider)*

- **Goal:** name the first cut.
- **Content:** Software is code and data. Nothing else.
- **Visual:** code card and data card.
- **Refs:** `ch00` §1.

## S5 — Code and data

- **Goal:** the definition they keep.
- **Content:** Code is the rules. Data is the values those rules act on. Press jump: the rule is code, the height is data.
- **Visual:** two cards, jump example.
- **Refs:** `ch00` §1.

## S6 — Code and data can trade places

- **Goal:** the boundary is a decision, not a law.
- **Content:** A rule can be saved in a file. A file can change what the game does. A mod swaps that file and does not recompile the engine. You decide which is which.
- **Visual:** two cards, arrow both ways.
- **Refs:** `ch00` §1.1–1.3.

## S7 — The question you keep

- **Goal:** one career question.
- **Content:** What belongs in code, and what belongs in data? Prefer data. Your work is data until code plays it back.
- **Visual:** one question, two answers, takeaway strip.
- **Refs:** `ch00` §1.

## S8 — Section 3 intro: Input, process, output *(divider)*

- **Goal:** give every program a shape.
- **Content:** Every program is input, process, output. Something comes in. Code acts on data. Something goes out.
- **Visual:** three boxes.
- **Refs:** `ch00` §2.

## S9 — Input, process, output

- **Goal:** the three boxes, with examples.
- **Content:** Input: keys, files, packets. Process: code over data. Output: pixels, sound, saved files. Scale and speed change. The shape does not.
- **Visual:** three boxes and arrows.
- **Refs:** `ch00` §2.

## S10 — The same shape, stacked

- **Goal:** the shape repeats at every layer.
- **Content:** You, the game, the operating system, the hardware. Each layer is input, process, output. A game is a stack of programs, not one.
- **Visual:** six layers, an exchange at every seam.
- **Refs:** `ch00` §2.

## S11 — No software without IO

- **Goal:** the claim, then the escape question.
- **Content:** There is no software without IO. Only software whose IO is hidden. When you are lost: where is the input, where is the output, what is in the middle?
- **Visual:** the sentence, three ghosted boxes.
- **Refs:** `ch00` §2.

## S12 — Section 4 intro: The loop *(divider)*

- **Goal:** add time.
- **Content:** Interactive software does not run once. It loops.
- **Visual:** a loop arrow.
- **Refs:** `ch00` §3.

## S13 — A person is in the loop

- **Goal:** draw the person.
- **Content:** Output reaches the person. They perceive, decide, and act. That act returns as the next input. Then process runs again.
- **Visual:** input, process, output, with the return path.
- **Refs:** `ch00` §3.1–3.2.

## S14 — Cybernetics

- **Goal:** name the idea, then say it in plain words.
- **Content:** Cybernetics is watching your own output and correcting. A game with no player is a simulation. Put a person in the loop, and they are steering.
- **Visual:** look, correct, repeat.
- **Refs:** `ch00` §3.1–3.2.

## S15 — Latency

- **Goal:** why milliseconds matter.
- **Content:** Latency is the chain: finger, device, OS, simulation, render, display, eye. Delays add. At 60 fps the whole chain shares about 17 ms.
- **Visual:** a chain of delays, one budget bar.
- **Refs:** `ch00` §3.3–3.4.

## S16 — Pipeline and loop

- **Goal:** two kinds of software.
- **Content:** A pipeline runs once: a bake, a compile, a batch. A loop feeds output back into the next input. A game is a pipeline inside a loop that cannot be late.
- **Visual:** a straight arrow beside a loop.
- **Refs:** `ch00` §3.3–3.4.

## S17 — Section 5 intro: Five parts *(divider)*

- **Goal:** the skeleton.
- **Content:** Every program has five parts. Name them, and most confusion gets smaller.
- **Visual:** five boxes.
- **Refs:** `ch00` §4, `ch01` §1.

## S18 — Five parts. That is a program.

- **Goal:** define each part in one line.
- **Content:** State is what is remembered. Logic is what changes it. Input is what gets in. Output is what comes out. The clock decides when.
- **Visual:** five boxes, one job each.
- **Refs:** `ch00` §4, `ch01` §1.

## S19 — Event-driven or polled

- **Goal:** the clock, and two habits.
- **Content:** Event-driven waits for an event. Polled checks on a timer. Find the clock first. Then name the part you are in.
- **Visual:** event versus polled, clock highlighted.
- **Refs:** `ch00` §4, `ch01` §1.

## S20 — Section 6 intro: An engine is the same thing, built big *(divider)*

- **Goal:** the move that makes the talk useful.
- **Content:** An engine is not a new kind of software. It is the same five parts, each one a subsystem.
- **Visual:** five boxes, each opening into a list.
- **Refs:** `ch00` §5, `ch01` §2.

## S21 — Each part becomes a subsystem

- **Goal:** the fill table.
- **Content:** State becomes the world model. Logic becomes physics, AI, and gameplay. Input becomes the input system. Output becomes the renderer, audio, and UI. The clock becomes the frame loop.
- **Visual:** five rows, part to subsystem.
- **Refs:** `ch00` §5.1, `ch01` §2.

## S22 — Hard real-time

- **Goal:** the constraint that rules engines.
- **Content:** A frame must finish before the next refresh. Miss it, and the player feels it. That hard real-time deadline explains more engine design than any feature list.
- **Visual:** frame strip, deadline flag.
- **Refs:** `ch00` §5.

## S23 — The frame loop

- **Goal:** one loop, not two.
- **Content:** Device, commands, update, world, render, display, the player sees it, the player acts. Then it repeats. The frame loop and the human loop are the same loop.
- **Visual:** eight steps, then it repeats.
- **Refs:** `ch00` §5.2, `ch01` §6.

## S24 — DOOM and Unreal are the same machine

- **Goal:** prove it with two engines.
- **Content:** DOOM in 1993 and Unreal today run the same loop. One is simple. One is threaded. The five parts did not change.
- **Visual:** two columns, same five parts.
- **Refs:** `ch01` §6, `Eng/DOOM`, `Eng/UE5`.

## S25 — The renderer reads the world

- **Goal:** correct the common mistake.
- **Content:** The renderer does not live inside the simulation. It reads world state and draws it. A black screen does not mean the simulation stopped.
- **Visual:** world, then an arrow, then the renderer.
- **Refs:** `ch01` §3.

## S26 — Section 7 intro: Same skeleton, different choices *(divider)*

- **Goal:** why engines feel different.
- **Content:** The five parts stay. What changes is how each part is implemented. No engine adds a sixth part.
- **Visual:** five ghosted boxes, a stamp: fills, never new parts.
- **Refs:** `ch01` §4–5.

## S27 — Core and channels

- **Goal:** core versus channels.
- **Content:** Core is state and simulation. Channels are assets, audio, UI, and network. A WAD, a pk3, and a uasset are different containers for the same channel.
- **Visual:** a spine, pipes on the sides.
- **Refs:** `ch01` §3.

## S28 — Fixed, variable, hybrid

- **Goal:** the clock's four beats.
- **Content:** A fixed timestep is repeatable, and must catch up. A variable timestep is smooth, and not repeatable. Hybrid keeps fixed physics inside a variable frame. Sometimes the app owns the clock. The loop stays. The timestep changes.
- **Visual:** four rows.
- **Refs:** `ch01` §4.

## S29 — Four ways engines differ

- **Goal:** the whole difference list.
- **Content:** World model. Timestep. How work is threaded. Which channels exist. No engine grows a sixth part. Read those four, not the brand name.
- **Visual:** four cards.
- **Refs:** `ch01` §5.

---

# ACT B — THE WORLD AND THE MACHINE

## S30 — Section 8 intro: World models *(divider)*

- **Goal:** open the longest section, on the state slot.
- **Content:** The world model is how the engine stores the world. That choice decides what your day feels like.
- **Visual:** the state box, enlarged.
- **Refs:** `ch02`.

## S31 — Three questions make the world model

- **Goal:** the classification key.
- **Content:** How is it stored? How are things related? How do you search it? Those three answers are the world model. Everything else follows.
- **Visual:** three question cards.
- **Refs:** `ch02` §1.

## S32 — Scene graph, BSP, ECS

- **Goal:** the landscape, before any depth.
- **Content:** Scene graph. BSP plus a flat entity list. ECS. Most engines are one of these, or a mix.
- **Visual:** three columns of engine names.
- **Refs:** `ch02` §1–4, `engines`.

## S33 — Scene graph

- **Goal:** what a scene graph is for.
- **Content:** A scene graph is a parent-child transform tree. Attach a sword to a hand, and the hand moves the sword. The cost is traversing the tree every frame.
- **Visual:** a small tree, sword on a hand.
- **Refs:** `ch02` §3–4.

## S34 — BSP and a flat list

- **Goal:** the id Tech family, in one line.
- **Content:** BSP pre-cuts the level into rooms, so the engine can reject whole rooms at once. Entities sit in a flat list. Fast for a static world. Weak if everything moves.
- **Visual:** split rooms beside a flat list.
- **Refs:** `ch02` §5, `Eng/DOOM`, `Eng/Q3A`, `Eng/DOOM3`.

## S35 — ECS

- **Goal:** ECS without the jargon first.
- **Content:** Put the same kind of fact in one column. Let a system sweep that column. A thousand bullets are one list, not a thousand objects. What a thing is, is the data on it.
- **Visual:** a table, a system sweeping rows.
- **Refs:** `ch02` §6, `Eng/OpenEngine`.

## S36 — Pick the shape your team can feed

- **Goal:** kill the one-true-way idea.
- **Content:** Scene graphs for people. BSP for static levels. ECS for large counts. Shipping engines mix them. The choice is what your team works in every day.
- **Visual:** three columns into one card.
- **Refs:** `ch02` §7–8.

## S37 — The world model is a state store

- **Goal:** the store, and why a game is not a web app.
- **Content:** The world model is a state store. Input updates it. The renderer reads it. A game samples that store every frame, and it simulates. You can rewind a store. You cannot rewind a simulation the same way.
- **Visual:** two flows, three differences.
- **Refs:** `ch02` §7–8, `ch00` §6.4.

## S38 — The HUD is not in the world

- **Goal:** UI is an overlay.
- **Content:** Draw the world first. Draw the HUD last, in screen space. A health bar stuck to a head is the exception. The pause menu is not in the world.
- **Visual:** world layer, UI layer on top.
- **Refs:** `ch02` §7.

## S39 — CPU and GPU

- **Goal:** CPU, GPU, and what a frame can be stuck on.
- **Content:** The CPU does a few hard jobs, one step at a time. The GPU does one simple job on a huge amount of data. A frame gets stuck on the CPU, the GPU, loading, or memory. The counter often hides which one.
- **Visual:** one careful worker, one large crew, four chips.
- **Refs:** `ch03` §1, §7.

## S40 — stat unit

- **Goal:** one tool, one method.
- **Content:** In Unreal, stat unit prints Frame, Game, and Draw. If Game is high and Draw is low, stop tuning shaders. Change one thing at a time. Only the part that can run in parallel gets faster when you add cores.
- **Visual:** a fake stat-unit block.
- **Refs:** `ch03` §8–10, `Eng/UE5`.

## S41 — Who waits, and who picks the order?

- **Goal:** two questions, then stop.
- **Content:** Blocking means everything stops. An event loop does the next ready thing. The operating system can cut you off, or your code can yield on purpose. Each step up — threads, processes, network — costs more coordination.
- **Visual:** two questions, a short ladder.
- **Refs:** `ch04` §1–7.

## S42 — Authority and replication

- **Goal:** memory and truth.
- **Content:** Shared memory is one copy. Message passing sends copies. Replication keeps those copies on purpose, and they go stale. On a network, one machine is authoritative. A few milliseconds of staleness is how the game stays playable.
- **Visual:** whiteboard versus mail, a staleness line.
- **Refs:** `ch04` §8–13, §19–21.

## S43 — Unreal already named this

- **Goal:** hang the questions on one real engine.
- **Content:** Game thread, render thread, RHI thread. Latent actions wait. The task graph orders work. Replication is the copy on the network. Ask: who runs, who waits, who decides the order, whose copy is true?
- **Visual:** three threads, the four-part question.
- **Refs:** `ch04` §9, §14–18, `Eng/UE5`.

## S44 — Section 11 intro: Three quiet seams *(divider)*

- **Goal:** three short ideas, then leave the machine.
- **Content:** Schema, spatial index, and the operating system. Three seams. Then people.
- **Visual:** three chips: schema, spatial index, OS.
- **Refs:** `ch05`–`ch07`.

## S45 — A schema is a contract

- **Goal:** schema in one breath.
- **Content:** A schema is three agreements: what fields exist, how they are laid out, and what the values mean together. If the reader breaks and the file looks fine, the agreement was broken. Not the file.
- **Visual:** one card, three parts.
- **Refs:** `ch05` §1.

## S46 — Authoring, runtime, and wire

- **Goal:** authoring, runtime, wire.
- **Content:** Authoring files are for people, and they load slowly. Runtime files are cooked for speed. Wire formats are packets. Same data, three formats. A desync means the two sides stopped agreeing on the schema.
- **Visual:** three vertices.
- **Refs:** `ch05` §7–9.

## S47 — A spatial index

- **Goal:** why a spatial index exists.
- **Content:** A spatial index answers what is near a point without testing everything. It is a cache of positions. If it is stale, it is worse than none. The same index serves rendering and collision.
- **Visual:** warehouse beside a map.
- **Refs:** `ch06` §1–2.

## S48 — The OS and system calls

- **Goal:** no direct hardware access.
- **Content:** The game does not touch the disk or the GPU directly. It makes a system call. The OS schedules the process, issues handles, and fronts the GPU.
- **Visual:** app, kernel, hardware, one door.
- **Refs:** `ch07` §1–8.

## S49 — Read the OS counters

- **Goal:** the diagnosis habit.
- **Content:** Task Manager and stat unit show what the kernel recorded. Name the process, watch it, read the counters. Then ask: game bug, or an OS limit?
- **Visual:** a ledger, two outcomes.
- **Refs:** `ch07` §9–10.

---

# ACT C — PEOPLE AND THE CHAIN

## S50 — Section 12 intro: Where you sit *(divider)*

- **Goal:** from the machine to the room.
- **Content:** Art, audio, design, and code do not own the whole machine. Each one feeds a part of it. This section is where you find your seat.
- **Visual:** four role cards.
- **Refs:** `ch00` §7.

## S51 — Owners and feeders

- **Goal:** owners and feeders.
- **Content:** Owners build and maintain a part. Feeders fill it. Nobody owns the whole machine. The clock has no feeder. Everyone obeys it. A lot of team fights are two people standing on different sides of one box.
- **Visual:** owner column, feeder column, clock row marked.
- **Refs:** `ch00` §7, `ch01` §2.

## S52 — One weapon, four stages

- **Goal:** one object that touches every job.
- **Content:** Design, data, engine integration, gameplay code. Until gameplay code runs, the weapon is inert data.
- **Visual:** four chevrons.
- **Refs:** `ch08` §1.

## S53 — Design it. Make the files. Nothing fires yet.

- **Goal:** stages 1 and 2.
- **Content:** Design decides what the weapon is. That document is already a schema. Then art and audio produce the data: model, rig, textures, sound. Those files do nothing yet.
- **Visual:** two cards, the second full of inert files.
- **Refs:** `ch08` §2–3.

## S54 — Import, then gameplay code

- **Goal:** stages 3 and 4.
- **Content:** Import turns files into assets. Soft references load on demand. Hard references stay loaded. Gameplay code plays the asset: animation, sound, particles, damage. The button press is the input.
- **Visual:** files become a firing loop.
- **Refs:** `ch08` §4–5.

## S55 — Same chain in DOOM 3

- **Goal:** this is not an Unreal story.
- **Content:** DOOM 3 used the same four stages in 2004. Design, data, a placed entity, a script that plays them. Gameplay code only plays what the earlier stages produced. Engines change. The chain does not.
- **Visual:** the same four steps, id Tech labels.
- **Refs:** `ch08` §6, `Eng/DOOM3`.

---

# ACT D — THE INTERFACE AND THE FUTURE

## S56 — Section 13 intro: Talking to software *(divider)*

- **Goal:** neutral, not a pitch.
- **Content:** This is not a pitch. Talking to software is four pieces. Not a magic box.
- **Visual:** four chips.
- **Refs:** `ch09`.

## S57 — Backend, model, harness, knowledge

- **Goal:** the four pieces, plainly.
- **Content:** A backend runs the model. The model is the trained brain. The harness is the program on your machine, and the only piece that touches your files. Knowledge is your files, docs, and notes. A model alone is a chat box. A harness turns words into actions.
- **Visual:** four cards, harness marked.
- **Refs:** `ch09` §1.

## S58 — It can explain, and it can change things

- **Goal:** two directions, and the catch.
- **Content:** One way: software explains itself to you. The other way: you say what you want, and it edits the software. You still have to know the medium, or you cannot aim it.
- **Visual:** you, harness, files, both directions.
- **Refs:** `ch09` §6, `ch00` §8.1.

## S59 — Where the tools live

- **Goal:** one breath, or skip.
- **Content:** Harnesses, local runners, model services, and hubs. Standards for how agents read a repo. Permissions are the trust boundary. Names if asked. Do not tour them.
- **Visual:** three layers, a lock on the trust line.
- **Refs:** `ch09` §7–11.

## S60 — Section 14 intro: What comes next *(divider)*

- **Goal:** open the close.
- **Content:** What does the future do to the loop we just built? It changes the tools. It does not change the medium.
- **Visual:** a loop.
- **Refs:** `ch10`.

## S61 — The fear, and the plain answer

- **Goal:** meet the fear, then answer it.
- **Content:** The fear is real. Some jobs get replaced. Some get help. Both are true. The loop gets larger. You do not leave it.
- **Visual:** two panels, one loop across both.
- **Refs:** `ch10` §1–2.

## S62 — The hybrid engine

- **Goal:** the future machine, in ordinary terms.
- **Content:** The engine stays as the structure. Subsystems get replaced by learned models, one at a time. Neural rendering already ships. Shared real-time worlds are where those models watch people play.
- **Visual:** a base bar, a few inserts.
- **Refs:** `ch10` §3–4.

## S63 — The interface changed. The medium did not.

- **Goal:** the last line, once.
- **Content:** The interface changed. The medium did not. Foundations outlast tools. The map still fits the next engine, the next job, and the next year.
- **Visual:** one sentence, nothing else.
- **Refs:** `ch00` §9, `ch10`.

## S64 — Questions, and where to read next

- **Goal:** hand them the shelf, then take questions.
- **Content:** If a question stalls, ask where the input is, where the output is, and what is in the middle. Then ask which of the five parts it is. The reference is the long version of this talk. Read it once, then use it per task.
- **Visual:** where to go next.
- **Refs:** `ch00` §10, `engines`.
