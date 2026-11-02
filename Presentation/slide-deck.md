---
type: Reference
title: "Slide Deck — Software is the Medium: Game Engines are Software"
description: Refactored deck. Anatomy of software, anatomy of a game engine, the same anatomy in Quake, Doom 3, and Unreal 5, the weapon across every discipline, then cybernetics, symbolic vs connectionist, and AI as a new interface.
tags: [presentation, slide-deck, game-engines, medium, slides]
generated: { by: kilocode, at: 2026-11-02T07:00:00Z }
---

# Slide Deck — Software is the Medium: Game Engines are Software

Audience text is the **Content** line. The words to say are in
[`speaker-cards.md`](speaker-cards.md).

---

# ACT A — SOFTWARE

## S1 — Section 1 intro: Software is the Medium — Game Engines are Software *(divider)*

- **Goal:** the title is the thesis.
- **Content:** Software is the medium. Game engines are software. This talk is the anatomy of that medium, then the anatomy of an engine.
- **Visual:** title.
- **Refs:** `ch00` intro.

## S2 — You are making software

- **Goal:** name the blind spot.
- **Content:** Design, art, and audio are software work. The files you make are data. The engine is code that plays that data back. If you do not know the properties of software, you are working the medium blind.
- **Visual:** four roles, one medium.
- **Refs:** `ch00` intro, §7.

## S3 — The anatomy outlasts the tool

- **Goal:** why the anatomy, not the product.
- **Content:** Unreal, a custom engine, the next tool. The names change. The anatomy does not. Learn the anatomy once.
- **Visual:** tool names fading, five parts staying.
- **Refs:** `ch00` §8.

## S4 — Section 2 intro: Anatomy of software *(divider)*

- **Goal:** open the anatomy.
- **Content:** Five ideas. Code and data. Input, process, output. The loop. Latency. Then the five parts that hold all of it.
- **Visual:** the sequence.
- **Refs:** `ch00` §1–4.

## S5 — Code and data

- **Goal:** the two substances.
- **Content:** Code is the rules. Data is the values those rules act on. Press jump: the rule is code, the height is data. There is no third substance.
- **Visual:** two cards.
- **Refs:** `ch00` §1.

## S6 — Code can be stored as data

- **Goal:** the boundary is a decision.
- **Content:** Code can ship as a data file. QuakeC ships in progs.dat. Doom 3 scripts ship as data. Unreal Blueprints ship in .uasset files. A mod changes behavior by replacing data, not by recompiling the engine.
- **Visual:** code file and data file, arrow both ways.
- **Refs:** `ch00` §1.1–1.3.

## S7 — Input, process, output

- **Goal:** the shape of every program.
- **Content:** Input crosses in. Process is code acting on data. Output crosses out. A calculator and a game engine are the same three boxes. They differ in scale and speed.
- **Visual:** three boxes.
- **Refs:** `ch00` §2.

## S8 — The loop is cybernetics

- **Goal:** name the loop.
- **Content:** Output reaches a person. They perceive, decide, and act. That act is the next input. That feedback loop is cybernetics. A game with no player is a simulation. With a player, they are in the loop.
- **Visual:** input, process, output, return path.
- **Refs:** `ch00` §3.

## S9 — Latency

- **Goal:** the cost of the loop.
- **Content:** Latency is the chain: finger, device, OS, simulation, render, display, eye. Delays add. At 60 fps the budget is about 17 ms. Miss it, and the player feels the loop break.
- **Visual:** the chain, one budget.
- **Refs:** `ch00` §3.3–3.4.

## S10 — State, logic, input, output, clock

- **Goal:** the anatomy, named.
- **Content:** State is what is stored. Logic is code over data. Input is what crosses in. Output is what crosses out. The clock decides when. Every program is these five parts.
- **Visual:** five boxes.
- **Refs:** `ch00` §4.

---

# ACT B — THE ENGINE

## S11 — Section 3 intro: Anatomy of a game engine *(divider)*

- **Goal:** the extension.
- **Content:** A game engine is not a different kind of software. It is the same five parts, each one a subsystem, running hard real-time.
- **Visual:** five parts opening into subsystems.
- **Refs:** `ch00` §5, `ch01` §2.

## S12 — Five subsystems

- **Goal:** the engine anatomy, one row each.
- **Content:** State is the world model. Logic is physics, AI, and gameplay. Input is the input subsystem, device to command. Output is the renderer, audio, and UI. The clock is the frame loop.
- **Visual:** five rows.
- **Refs:** `ch01` §2.

## S13 — The frame loop is hard real-time

- **Goal:** the constraint that makes an engine an engine.
- **Content:** The frame must finish before the next refresh. That is hard real-time. Miss the deadline and the player feels it. The frame loop and the human loop are the same loop, at 60 to 144 Hz.
- **Visual:** frame deadline.
- **Refs:** `ch00` §5, `ch01` §4.

## S14 — The renderer reads state

- **Goal:** core versus channels.
- **Content:** State and logic are the core. Assets, audio, UI, and network are channels. The renderer is output. It reads state and draws it. It does not run the simulation.
- **Visual:** core in the middle, renderer downstream.
- **Refs:** `ch01` §3.

## S15 — The world model is the state slot

- **Goal:** three fills of state, named.
- **Content:** A scene graph stores parent-child transforms. BSP stores a compiled level plus a flat entity list. ECS stores columns of data and systems scan them. Most engines are one of these, or a mix.
- **Visual:** three state families.
- **Refs:** `ch02` §1–6.

## S16 — Section 4 intro: Quake, Doom 3, Unreal 5 *(divider)*

- **Goal:** prove the anatomy on real engines.
- **Content:** Same five rows. Read the row, not the brand.
- **Visual:** three columns.
- **Refs:** `Eng/QUAKE`, `Eng/DOOM3`, `Eng/UE5`.

## S17 — The same five rows

- **Goal:** the comparison.
- **Content:** Quake, Doom 3, and Unreal 5 fill the same slots. State, logic, input, output, clock. The names change. The anatomy does not.
- **Visual:** three-column table.
- **Refs:** `Eng/QUAKE`, `Eng/DOOM3`, `Eng/UE5`.

## S18 — What changes is the fill

- **Goal:** the differences, in one place.
- **Content:** Quake's clock is variable. Doom 3 simulates at a fixed 60 Hz and renders as fast as the display. Unreal's game thread is variable, and Chaos physics uses fixed substeps. Threads and world models change. The five parts do not.
- **Visual:** clock row highlighted.
- **Refs:** `ch01` §4–5.

---

# ACT C — THE WEAPON

## S19 — Section 5 intro: One weapon, every discipline *(divider)*

- **Goal:** one object that uses the whole anatomy.
- **Content:** A weapon is design, art, audio, and code, becoming frames and sound. Until gameplay code runs, it is inert data.
- **Visual:** the chain.
- **Refs:** `ch08` §1.

## S20 — Four stages, then the loop

- **Goal:** the chain, with owners.
- **Content:** Designers write the schema. Artists and audio produce the data. Import makes that data reachable. Gameplay code plays it. The renderer and the audio mixer are the output. The player's input closes the loop.
- **Visual:** six steps.
- **Refs:** `ch08` §1–5.

## S21 — Design and data do nothing yet

- **Goal:** stages 1 and 2.
- **Content:** Design decides role, feel, and numbers. That document is already a schema. Then model, rig, textures, and sound are files. Those files cannot fire. They are data.
- **Visual:** schema, then inert files.
- **Refs:** `ch08` §2–3.

## S22 — Import, then gameplay code

- **Goal:** stages 3 and 4.
- **Content:** Import turns files into assets. Soft references load on demand. Hard references stay loaded. Gameplay code reads the data and plays it: animation, sound, particles, damage. The button press is the input.
- **Visual:** files become a firing event.
- **Refs:** `ch08` §4–5.

## S23 — Frames and audio

- **Goal:** the output side, named.
- **Content:** The simulation publishes state. The renderer draws the mesh, materials, and animation. The audio mixer plays the sound. VFX spawn from the same event. None of that is the simulation. It is output, on the clock.
- **Visual:** state feeding render and audio.
- **Refs:** `ch08` §7–8.

## S24 — The same chain in Doom 3

- **Goal:** not an Unreal-only story.
- **Content:** Doom 3, 2004. Design, then .def and .decl data, then a placed entity, then idScript that plays them back. Gameplay code only plays what the earlier stages produced. The chain is the same.
- **Visual:** the four stages, id Tech labels.
- **Refs:** `ch08` §9, `Eng/DOOM3`.

---

# ACT D — THE DIRECTION

## S25 — Section 6 intro: Two kinds of software *(divider)*

- **Goal:** open the history without leaving the anatomy.
- **Content:** The loop you just learned has a history. Software split into two ways of making intelligence. The direction now is both, and a new interface on top.
- **Visual:** two branches.
- **Refs:** `ch09` §2–3, `ch10`.

## S26 — Cybernetics is the older loop

- **Goal:** history of the loop, one slide.
- **Content:** Cybernetics is the study of feedback. Norbert Wiener named it from the steersman: sense, correct, act. A thermostat does it. A player does it faster. The frame loop is that idea at display rate.
- **Visual:** sense, correct, act.
- **Refs:** `ch09` §2, `ch00` §3.

## S27 — Symbolic and connectionist

- **Goal:** the two minds, in software terms.
- **Content:** Symbolic software is rules over symbols. Scripts, Blueprints, state machines, C++. Connectionist software is learned weights. Neural nets, LLMs, neural rendering. Game logic is symbolic. The new pieces moving in are connectionist.
- **Visual:** two columns.
- **Refs:** `ch09` §3.

## S28 — The hybrid engine

- **Goal:** the direction, concretely.
- **Content:** The engine stays symbolic scaffolding. Neural subsystems replace pieces one at a time. Neural rendering already ships. The five parts do not go away. A learned renderer is still output. It still reads state.
- **Visual:** symbolic base, neural inserts.
- **Refs:** `ch10` §3.

## S29 — AI is a new interface

- **Goal:** the close of the argument.
- **Content:** A harness on your machine turns words into actions on the software. One direction: the software explains itself. The other: you say what to change, and it edits. The model is not the interface. The harness is.
- **Visual:** you, harness, software.
- **Refs:** `ch09` §1, §6.

## S30 — You still need the anatomy

- **Goal:** the catch.
- **Content:** You cannot aim the interface if you do not know the anatomy. You cannot ask about the renderer if you do not know the renderer reads state and does not run the simulation. The interface is new. The medium is not.
- **Visual:** anatomy under the harness.
- **Refs:** `ch09` §6, `ch00` §8.

## S31 — The interface changed. The medium did not.

- **Goal:** the last line.
- **Content:** The interface changed. The medium did not. Software is still code and data, input, process, output, on a clock. A game engine is still that anatomy, made large and hard real-time.
- **Visual:** the sentence.
- **Refs:** `ch00` §9, `ch09` §12, `ch10`.

## S32 — Questions

- **Goal:** use the anatomy to answer.
- **Content:** If a question stalls, ask which part it is: state, logic, input, output, or clock. Then ask who feeds that part. The reference is the long version of this talk.
- **Visual:** the five parts.
- **Refs:** `ch00` §10.
