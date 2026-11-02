---
type: Reference
title: "Speaker Cards — Software is the Medium: Game Engines are Software"
description: Spoken script for the refactored deck. Read Say. Use Need only if asked. Then say Next.
tags: [presentation, speaker-cards, game-engines, medium]
generated: { by: kilocode, at: 2026-11-02T07:00:00Z }
---

# Speaker Cards — Software is the Medium: Game Engines are Software

Read **Say**. **Need** is only if someone asks, or if you blank. Then **Next**.

If you fall behind, cut S18 and S26 first. Do not cut the engine anatomy (S12),
the three engines (S17), the weapon (S20–S24), or the last line (S31).

Lost? Point at a part: state, logic, input, output, clock.

---

## S1 — Software is the Medium — Game Engines are Software

**Say**

- Software is the medium. Game engines are software.
- Say the title, then stop. The rest of the talk is the anatomy of that sentence.
- First the anatomy of software. Then the same anatomy as an engine. Then one weapon, so every discipline can see their part. Then where this is going.

**Next**

- Most of you are already making software. That is the part people miss.

## S2 — You are making software

**Say**

- If you design, model, animate, or make sound, you are making software.
- Your files are data. The engine is code that plays that data back.
- The properties of software are the properties of your job. If you do not know them, you are working the medium blind.

**Need**

- A texture, a sound, a damage number, a Blueprint graph. All of it is software. Some of it is data. Some of it is code stored as data.

**Next**

- The tool will change. The anatomy will not.

## S3 — The anatomy outlasts the tool

**Say**

- Unreal today. Something else in five years. A custom engine at the next studio.
- Learn the product manual and you start over. Learn the anatomy and you can read the next engine.
- That is the whole reason for this talk.

**Next**

- Anatomy of software. Five ideas. Stay with me.

## S4 — Anatomy of software

**Pace:** this block is the foundation. Do not rush S10.

**Say**

- Code and data. Input, process, output. The loop. Latency. Then five parts that hold all of it.

**Next**

- Two substances. Nothing else.

## S5 — Code and data

**Say**

- Code is the rules. Data is the values.
- Press jump. The rule is code. How high you are is data.
- A spreadsheet is the same cut. Formulas are code. Cells are data.

**Need**

- The old name, if a programmer asks: von Neumann. A stored program acting on stored state. You do not need the name.

**Next**

- That split is not locked.

## S6 — Code can be stored as data

**Say**

- A rule can live in a file. A file can change what the game does.
- Quake compiled QuakeC into progs.dat. The code shipped as data.
- Doom 3 scripts ship as data. Unreal Blueprints ship in .uasset files.
- A mod replaces a data file. Nobody recompiles the engine. The game still changes.
- So you decide what is a rule in the program, and what is a value in a file.

**Next**

- Every program, including that file, has a shape.

## S7 — Input, process, output

**Say**

- Input crosses in. A key, a file, a packet.
- Process is code acting on data.
- Output crosses out. Pixels, audio, a file written to disk.
- A calculator and an engine are the same three boxes. Scale and speed change. The shape does not.

**Need**

- There is no software without IO. Only software whose IO is hidden. If you are lost later: where is the input, where is the output, what is the process?

**Next**

- Games do not run once. They loop.

## S8 — The loop is cybernetics

**Say**

- Output reaches a person. They perceive, decide, and act. That act is the next input.
- That feedback loop has a name: cybernetics.
- Keep the word. It is the name of a system that watches its own output and corrects.
- A game with no player is a simulation. Put a player in it, and they are in the loop.

**Need**

- Sense, think, act is the same three boxes. Do not teach a second theory.

**Next**

- The price of the loop is latency.

## S9 — Latency

**Say**

- Finger, device, OS, simulation, render, display, eye.
- Those delays add. They do not average.
- At 60 fps the budget is about 17 milliseconds. At 144 Hz it is tighter.
- Miss the budget, and the player feels the loop break. That is what lag is.

**Next**

- Now the five parts. This is the anatomy. Learn these names.

## S10 — State, logic, input, output, clock

**Say**

- State: what is stored.
- Logic: code over data.
- Input: what crosses in.
- Output: what crosses out.
- Clock: when it runs.
- Any program fits these boxes. A web form does. An engine does. Point at the box if you get lost for the rest of the day.

**Next**

- Hold that diagram up to a game engine.

## S11 — Anatomy of a game engine

**Say**

- An engine is not a new kind of software.
- Same five parts. Each one is now a subsystem. And it has a deadline.

**Next**

- Read the rows.

## S12 — Five subsystems

**Say**

- State is the world model. The picture of the world and everything in it.
- Logic is physics, AI, and gameplay. Code over that data.
- Input is the input subsystem. A device event becomes a command the game can read.
- Output is the renderer, the audio mixer, and the UI.
- The clock is the frame loop.
- "The engine is slow" means nothing. Name the subsystem.

**Next**

- Why the deadline is the whole job.

## S13 — The frame loop is hard real-time

**Say**

- The frame must finish before the next refresh. That is hard real-time.
- Ordinary software can be late. A game cannot, or the player feels it.
- The frame loop and the human loop are the same loop. The display is the metronome. 60 to 144 times a second.

**Next**

- One mistake people make about that output row.

## S14 — The renderer reads state

**Say**

- State and logic are the core. They hold the world.
- Assets, audio, UI, and network are channels. They move data across a boundary.
- The renderer is a channel. It reads state and draws it. It does not run the simulation.
- Black screen, world still simulating: the renderer is a reader, not the owner of the facts.

**Next**

- The state slot has a name: the world model. Three ways to store it.

## S15 — The world model is the state slot

**Say**

- Scene graph: a parent-child transform tree. Attach a sword to a hand. The hand moves the sword.
- BSP: the level is compiled into rooms, plus a flat list of entities. Quake and Doom 3 live here.
- ECS: the same kind of fact in one column. A system scans the column.
- You do not need to pick a winner. You need to know which one your engine uses, because that is the state you feed.

**Next**

- Same rows. Three real engines.

## S16 — Quake, Doom 3, Unreal 5

**Say**

- Do not memorize the brands. Read the row.
- State, logic, input, output, clock. If you can fill those five, you can read the engine.

**Next**

- Here they are.

## S17 — The same five rows

**Say**

- Quake. State is a BSP world plus edicts. Logic is QuakeC and the physics step. Input is a usercmd. Output is the renderer and the audio mix. Clock is a variable frame.
- Doom 3. State is a compiled .proc world plus idEntity objects. Logic is RunFrame and idScript. Input is a usercmd at 60 Hz. Output is the renderer and OpenAL. Clock is a fixed 60 Hz simulation, and render runs as fast as the display.
- Unreal 5. State is a UWorld of Actors. Logic is actor tick plus Chaos. Input is Enhanced Input. Output is a render thread, the audio mixer, and UMG. Clock is a variable game frame with fixed physics substeps.
- Thirty years. Same five rows.

**Need**

- QuakeC lived in progs.dat. Doom 3 data lived in .decl and .def files. Unreal content lives in .uasset files. That is S6 again: code and data, stored as files.

**Next**

- What actually changes.

## S18 — What changes is the fill

**Say**

- The clock is the row people feel. Quake varies the frame. Doom 3 locks simulation at 60 and renders separately. Unreal varies the game thread and locks physics inside it.
- The world model changes. Threads change. Unreal splits game, render, and RHI.
- Nobody adds a sixth part.

**Need**

- If someone asks why Doom 3 can hitch while the sim is fine: the sim owes tics, then it draws once. Render and simulation are different clocks.

**Next**

- One object that uses every row, and every job in the room. A weapon.

## S19 — One weapon, every discipline

**Say**

- This is the slide I will not rush.
- A weapon is not a mesh. It is design, art, audio, and code, becoming frames and sound.
- Until gameplay code runs, it is inert data. It cannot fire.

**Next**

- Four stages, then the loop.

## S20 — Four stages, then the loop

**Say**

- Designers write what the weapon is. That is a schema.
- Artists and audio produce the data. Model, rig, textures, sound.
- Import makes that data an asset the engine can find.
- Gameplay code plays the data. Animation, sound, particles, damage.
- The renderer and the audio mixer are the output.
- The player's button is the input that closes the loop.
- Design, art, audio, code. One anatomy. If your file is wrong, name the stage, not the person.

**Next**

- The first two stages do nothing by themselves.

## S21 — Design and data do nothing yet

**Say**

- Design decides role, feel, and the numbers. Fire rate, damage, recoil. That document is already a schema. Later code will have to agree with it.
- Then the files. A mesh does not fire. A gunshot does not fire. They sit on disk.
- The best sound in the room cannot pull the trigger. It is data.

**Next**

- Then someone imports it, and someone writes the code that plays it.

## S22 — Import, then gameplay code

**Say**

- Import turns files into assets. In Unreal that is the path into .uasset, then cook.
- A soft reference loads when needed. A hard reference stays loaded. That choice is what hits the frame.
- Gameplay code does not invent the gun. It reads the data and orchestrates it.
- Fire: montage, sound, particles, damage. The finger on the button is the input leg from the start of the talk.

**Next**

- What the player actually gets. Frames and audio.

## S23 — Frames and audio

**Say**

- The simulation publishes state. It does not draw.
- The renderer reads that state and draws the mesh, the materials, the animation.
- The audio mixer reads the event and plays the sound.
- VFX spawn from the same event.
- All of that is output, on the clock. If the frame misses 17 ms, the player feels the weapon late. That is latency, not "the art is wrong."

**Next**

- This is not an Unreal story.

## S24 — The same chain in Doom 3

**Say**

- 2004. Same four stages.
- Design. Then .def and .decl data. Then a placed entity. Then idScript that plays them back.
- The script only plays what the earlier stages produced.
- Engines change. The chain does not. Any weapon, any year.

**Next**

- Last block. Where this is going. The anatomy stays. The interface changes.

## S25 — Two kinds of software

**Say**

- The loop has a history. Software that tries to be intelligent split into two kinds.
- I am not pitching a product. I am naming the split, then the interface on top of it.

**Next**

- The loop's older name.

## S26 — Cybernetics is the older loop

**Say**

- Norbert Wiener named cybernetics from the steersman. You watch the result, and you correct.
- A thermostat. A player. A frame loop.
- You already know this. S8 was this idea. History did not invent a second loop.

**Need**

- 1948, Cybernetics. Say the year only if asked.

**Next**

- The split inside AI. Two ways to write software.

## S27 — Symbolic and connectionist

**Say**

- Symbolic software is rules over symbols. A script. A Blueprint. A state machine. C++. If this, then that.
- Connectionist software is learned weights. A neural net. An LLM. Neural rendering. The behavior is in the weights, not in a rule you can read.
- Your game logic is symbolic. The new pieces moving into the pipeline are connectionist.
- "It hallucinated" and "just add a rule" are the two kinds bumping into each other. Name which one you are talking to.

**Need**

- 1943, McCulloch and Pitts, the artificial neuron. 1956, the Dartmouth workshop, symbolic AI. Connectionism is the older idea. It waited on computers. Say the dates only if asked.

**Next**

- What an engine looks like when both are in the box.

## S28 — The hybrid engine

**Say**

- The engine we just mapped stays. It is symbolic scaffolding. State, logic, input, output, clock.
- Neural subsystems replace pieces one at a time. Not a rewrite. Neural rendering already ships.
- A learned renderer is still output. It still reads state. It still does not run the simulation.
- The anatomy tells you where a new piece is allowed to sit.

**Next**

- And there is a new way to talk to that anatomy.

## S29 — AI is a new interface

**Say**

- This is not a demo, and it is not a pitch.
- A model alone is a chat box. A harness on your machine turns words into actions on the files.
- One direction: the software explains itself.
- The other direction: you say what to change, and it edits the software.
- The harness is the interface. It is also the only piece that touches your machine. Power and risk are the same door.

**Need**

- Four pieces, if asked: backend runs the model, model is the weights, harness is on your machine, knowledge is your files. Do not tour products.

**Next**

- The catch. This is the point of the whole talk.

## S30 — You still need the anatomy

**Say**

- You cannot aim that interface if you do not know the anatomy.
- You cannot ask for a tour of the renderer if you do not know the renderer reads state and does not run the simulation.
- You cannot ask why the weapon is late if you cannot tell input latency from a missed frame from a bad asset reference.
- The interface is new. The medium is not.

**Next**

- One line. Then I stop.

## S31 — The interface changed. The medium did not.

**Say**

- The interface changed.
- The medium did not.
- Software is still code and data. Input, process, output. State, logic, input, output, clock.
- A game engine is still that anatomy, made large, and hard real-time.
- Stop. Do not add a second ending.

**Next**

- Questions.

## S32 — Questions

**Say**

- If I stall, I am going to do what I told you to do. Which part is it? State, logic, input, output, or clock. Who feeds that part?
- The reference is the long version. Read it once. After that, use it per task. An engine question goes to the five rows. A weapon question goes to the four stages.
