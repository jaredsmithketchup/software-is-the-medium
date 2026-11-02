---
type: Reference
title: "Speaker Cards — Software is the Medium: Game Engines are Software"
description: Spoken script for S1–S64. Read Say. Use Need only if asked or if you blank. Then say Next and move.
tags: [presentation, speaker-cards, game-engines, medium, talking-points]
generated: { by: kilocode, at: 2026-11-02T06:20:00Z }
---

# Speaker Cards — Software is the Medium: Game Engines are Software

Read **Say** out loud. It is the script. **Need** is the fact you reach for if
someone asks, or if you blank. **Next** is the handoff. Do not add a third idea.

If you fall behind: say the first Say line, say Next, and move. Never cut the
gun (S50–S55) or the last line (S63). Cut S59 first, then shorten S44–S49.

Pace: about 77 minutes of talk, then questions. Section openers are 15 seconds.

Lost in the room? Ask: where is the input, where is the output, what is in the middle?
Then name the part: state, logic, input, output, or clock.

---

## S1 — Software is the Medium — Game Engines are Software

**Pace:** section 1, 4 minutes. This slide is 20 seconds.

**Say**

- Software is the medium. Game engines are software.
- Point at the five boxes. Every program sits on these: state, logic, input, output, clock.
- Do not define them yet. By the end you will know which box your job feeds.

**Need**

- Two substances on the chips: data and code. Four acts on the bar. That is the whole map.

**Next**

- First: what a medium even is.

## S2 — You work in a medium

**Say**

- A painter who does not understand paint cannot paint well, no matter the brush.
- A musician has the instrument. A civil engineer has steel and concrete.
- Your medium is software. The rest of today is the properties of that medium.

**Need**

- Paint dries, mixes, and fails in specific ways. Software does too. That is all "medium" means.

**Next**

- Why bother, when the tools keep changing?

## S3 — Why this, today

**Say**

- The industry is noisy. New tool every year. AI in every role. Teams shifting.
- The tool you learn this year will be replaced. The shape under it will not.
- This is a map, not a manual. Orientation beats completeness.

**Need**

- If they want the line: foundations outlast tools.

**Next**

- Strip it down. Software is two things.

## S4 — Two things

**Pace:** section 2, 6 minutes. 15 seconds.

**Say**

- What is software made of?
- Two things. I am going to name them, then show you that you already work in one of them.

**Next**

- Code, and data.

## S5 — Code and data

**Say**

- Code is the rules. Do this, then that.
- Data is the values those rules act on. Numbers, text, files, how high you are.
- Press jump. The rule is code. The upward speed, and your height, are data.
- There is no third substance.

**Need**

- Spreadsheet: formulas are code, cells are data. Same cut.
- The old name, if a programmer asks: von Neumann. A stored program acting on stored state. You do not need the name.

**Next**

- But they are not stuck that way.

## S6 — Code and data can trade places

**Say**

- Last slide split them. Code is the rule. Data is the value. Jump is the rule. Height is the value.
- That split is not locked. You can save a rule in a file. You can make a file change what the game does.
- A mod does this. It replaces a data file. Nobody recompiles the engine. The game still changes.
- So you decide: does this live in the program, or in a file someone can edit?

**Need**

- Code shipped as a data file: QuakeC compiled into progs.dat. Quake III .qvm. DOOM 3 idScript. Unreal Blueprints stored in .uasset.
- Data that changes behavior: a DOOM WAD holds maps, sprites, sounds, and behavior tables. DOOM 3 .decl files.

**Next**

- That decision is the question you keep.

## S7 — The question you keep

**Say**

- What belongs in code, and what belongs in data?
- Default answer: data. Cheaper to change, easier to inspect, safer for people who do not write the engine.
- Your work — art, audio, design — is data until code plays it back.

**Need**

- A number in a file can ship in a content patch. A code change waits for a build. That is why the default is data.

**Next**

- What shape does all of this live in?

## S8 — Input, process, output

**Pace:** section 3, 5 minutes. 15 seconds.

**Say**

- Every program is three things: input, process, output.
- Input comes in. Process is code acting on data. Output goes out.

**Next**

- Same three boxes. No exceptions.

## S9 — Input, process, output

**Say**

- Input: a key, a file, a network packet.
- Process: code over data.
- Output: pixels, sound, a file written to disk.
- A calculator, a save dialog, and a game engine are the same three boxes. They differ in size, speed, and where you draw the boundary.

**Need**

- Save button: the click is input, writing the state is process, the file is output.

**Next**

- And the same shape stacks.

## S10 — The same shape, stacked

**Say**

- You, the game, the runtime, the operating system, the hardware, the physical world.
- Every seam is the same exchange: input, process, output.
- A game is not one program. It is a stack of them.
- One keypress crosses several of those seams before you see a result.

**Next**

- So here is the claim.

## S11 — No software without IO

**Say**

- There is no software without IO. Only software whose IO is hidden.
- The boundaries are the architecture.
- When you are lost, ask: where is the input, where is the output, what is in the middle?

**Need**

- "In the middle" means process. Do not rename the three boxes. The question points at them.

**Next**

- So far the shape runs once. Games do not.

## S12 — It repeats

**Pace:** section 4, 6 minutes. 15 seconds.

**Say**

- Software you play does not finish. It repeats.
- That one fact is why games are hard.

**Next**

- Put a person in it.

## S13 — A person is in the loop

**Say**

- Point at the top row. Input, process, output.
- Point at the return path. The person perceives the output, decides, and acts.
- That act is the next input.
- If the game feels responsive or laggy, your body is reading the shape of this loop.

**Need**

- Perceive, decide, act maps onto input, process, output. Same three boxes. Not a second theory.

**Next**

- That steering has a name. Cybernetics.

## S14 — Cybernetics

**Say**

- Cybernetics means you watch the output and correct.
- Keep the word. It is the name of the loop with a person in it.
- A game with no player is a simulation. Put a person in the loop, and they are steering.
- A thermostat does this. A player does it faster, and cares more.

**Next**

- The limit on that loop is time.

## S15 — Time is the limit

**Say**

- Finger, device, operating system, simulation, picture, screen, eye.
- Those delays add. They do not average.
- At 60 frames a second, the whole chain shares about 17 milliseconds.
- That is why milliseconds are the job.

**Need**

- 60 fps is about 16.7 ms. 144 Hz is a tighter budget, which is why it feels like "you" instead of "it."
- If they ask where the time goes: every hop stacks. A 10 ms hole in a 17 ms budget is a hitch you can see.

**Next**

- Two kinds of software. Do not mix them up.

## S16 — Pipeline and loop

**Say**

- A pipeline runs once and is done. A bake. A compile. A batch export.
- A loop feeds the output back in as the next input. A game does this.
- A game engine is a pipeline sitting inside a loop that is not allowed to be late.
- If the loop misses its time, the machine sometimes answers. That is what lag feels like.

**Next**

- Now the five parts. This is the bridge to every engine.

## S17 — Five parts

**Pace:** section 5, 4 minutes. 15 seconds.

**Say**

- Every program has five parts.
- If you can name which one you are in, most arguments get smaller.

**Next**

- Here they are.

## S18 — Five parts. That is a program.

**Say**

- State: what is remembered.
- Logic: what changes it.
- Input: what gets in.
- Output: what comes out.
- Clock: who decides when.
- Any program you meet fits these boxes. A web form does. A game does.

**Need**

- Web form: the fields are state, validation is logic, submit is input, the response is output, and "who runs when" is the clock.

**Next**

- The one people fight about is the clock.

## S19 — The fight is about when

**Say**

- One style waits to be told. An event. "Tell me when."
- The other checks on a rhythm. "Anything now?"
- Push versus pull is the same fight, on the web and in an engine.
- Two habits: find the clock first. Then name the part you are in.

**Need**

- The next "this engine feels laggy" argument is usually a clock argument.

**Next**

- Hold those five boxes up to an engine.

## S20 — An engine is the same thing, built big

**Pace:** section 6, 7 minutes. 15 seconds.

**Say**

- An engine is not a new kind of thing.
- Same five slots. Each one is now a department.

**Next**

- Watch the slots get filled.

## S21 — Each part becomes a department

**Say**

- State becomes the world model. That is the picture of the world and everything in it.
- Logic becomes physics, AI, and gameplay code.
- Input becomes the input system. Output becomes picture, sound, and UI.
- The clock becomes the frame loop.
- "The engine is slow" means nothing. Name the department, and it becomes debuggable.

**Next**

- And it runs on a deadline.

## S22 — It has a deadline

**Say**

- The next picture has to be ready when the screen refreshes.
- Miss it, and it is not "a bit late." The person in the loop feels a break.
- A stutter in a fight is a missed deadline, in front of the person who set it.
- That one constraint explains more engine design than any feature list.

**Next**

- The engine's heartbeat and the person's heartbeat are the same loop.

## S23 — The frame is the person's loop

**Say**

- Walk the numbers. Device, commands, update, world.
- Then render, screen, you see it, you act.
- Then it repeats.
- The frame is one beat of that loop. Your monitor is the metronome.

**Need**

- 60 to 144 times a second. Do not list the steps twice.

**Next**

- Same loop in 1993 and today.

## S24 — DOOM and Unreal are the same machine

**Say**

- Left: DOOM, 1993. A fixed 35 Hz tick. If the machine falls behind, it catches up.
- Right: Unreal 5. A tick, split across threads.
- One draws simply. One threads. Both are the same five parts.
- 33 years. The skeleton did not change.

**Need**

- DOOM: D_DoomLoop, TryRunTics, TICRATE 35.
- Unreal: FEngineLoop::Tick. Game thread, render thread, RHI thread. Chaos is the physics substeps.
- Say the names only if someone asks.

**Next**

- One correction before we move on. The picture is not the world.

## S25 — The picture is not the world

**Say**

- The renderer does not live inside the simulation.
- It reads the world's state each frame and draws it.
- Black screen, world still simulating: the renderer is a reader at the end, not the owner of the facts.

**Next**

- Same skeleton. Why do engines feel different?

## S26 — Same shape, different fill

**Pace:** section 7, 6 minutes. 15 seconds.

**Say**

- They feel different because the fill changes.
- Nobody adds a sixth part.

**Next**

- First cut: core, and channels.

## S27 — Core and channels

**Say**

- Core is state and the simulation. That is the game.
- Channels are the pipes: assets in, audio out, UI out, network.
- A WAD, a pk3, and a uasset are different containers for the same idea.
- three.js has no built-in audio. That is an empty channel. The app holds it.

**Next**

- The fill people argue about most is the clock.

## S28 — Four ways to keep time

**Say**

- Fixed: a metronome. Repeatable. If you fall behind, you must catch up.
- Variable: a human drummer. Smooth. Not the same twice.
- Hybrid: fixed physics inside a variable frame. Most modern engines live here.
- Sometimes the app owns the clock, and the engine does not.
- Every engine has a loop. Only the beat changes.

**Need**

- Fixed: DOOM 35 Hz, Quake III server about 20 Hz, DOOM 3 60 Hz.
- Variable: original Quake, Urho3D.
- Hybrid: redot's frame interpolation, Unreal Chaos.
- App-owned: three.js. requestAnimationFrame lives in the page, not in a hidden engine clock.

**Next**

- Four knobs. That is the whole difference list.

## S29 — Four ways engines differ

**Say**

- How the world is stored.
- How time is kept.
- How work is split across threads and processes.
- Which pipes exist.
- Meet an engine, ask those four, and you can predict how it feels to work in. Read the fill, not the brand.

**Next**

- The biggest knob is how the world is remembered. That is the next stretch. It is the long one, and it is where most of you will see your own work.

## S30 — How the world is remembered

**Pace:** section 8, 9 minutes. Do not linger on the opener.

**Say**

- How does the engine remember the world?
- That choice decides what your Tuesday feels like. Art, design, and audio live inside this choice.

**Next**

- Three questions. The answers are the world model.

## S31 — Three questions. That is the world.

**Say**

- How is it stored?
- How are things related?
- How do you search it?
- Those three answers are the world model. The rest of the engine follows from them.
- "What does my art attach to?" is the relation question. It decides your daily workflow.

**Next**

- Three families. Then we will say they mix.

## S32 — Three ways to remember a world

**Say**

- A tree, built for people. three.js, Babylon, redot, Urho3D.
- A baked map, plus a flat list of things placed in it. DOOM, Quake, Quake III, DOOM 3.
- Tables, built for the machine. OpenEngine is the example on the shelf.
- Do not memorize the logos. Memorize the three shapes.

**Next**

- The tree first, because most of you have touched one.

## S33 — A tree people can use

**Say**

- Things hang off other things. A child inherits the parent's move.
- Attach a sword to a hand. Move the hand. The sword comes along. You did not write a second animation.
- That is why artists and designers like it.
- The cost: the engine walks that tree every frame.

**Next**

- Now the static-world answer. This is how DOOM fit on a 386.

## S34 — BSP and a flat list

**Say**

- BSP means the level is pre-cut into rooms. The engine can reject a whole room without looking inside it.
- Entities are a flat list, placed in the map. They are not hanging off a tree.
- Fast for a world that does not reshape itself. It fights you if everything moves.

**Need**

- BSP is binary space partition. Say "pre-cut rooms" if the room goes blank. DOOM shipped on a 386 because a room test beats searching the whole world.

**Next**

- The machine-shaped answer.

## S35 — ECS

**Say**

- ECS: entity, component, system.
- Put every position in one column. A system sweeps that column.
- A thousand bullets are one list, not a thousand little objects.
- What a thing is, is the data attached to it. That is the point of this family. It scales. It is harder for a person to read.

**Need**

- The name is ECS: entity, component, system. Entity is the id. Components are the columns. Systems are the sweeps.

**Next**

- These are not rivals.

## S36 — Pick the shape your team can feed

**Say**

- Trees for people. Baked maps for static levels. Tables when you have tens of thousands of things.
- Shipping engines mix them. A tree for the characters, a spatial structure for the level, tables for the bullets.
- The choice is a product decision. It is the world your team lives in every day.

**Next**

- Under all three: a box of facts.

## S37 — The world is a box of facts

**Say**

- Input changes the facts. The picture reads the facts. It does not own them.
- If you know Redux: action, store, view. Same shape.
- Three differences, and then we leave it. A game pulls every frame. The facts are spatial. And you can rewind a store. You cannot rewind a simulation the same way, because the world was stepped forward, not derived.

**Need**

- "Can we rewind the last second of gameplay?" Only if you stored the facts, or can re-simulate from a seed. The picture cannot give them back.

**Next**

- UI is not part of that box.

## S38 — The HUD is not in the world

**Say**

- Draw the world first. Draw the HUD last, in screen pixels.
- The pause menu is not in the world. Full stop.
- A health bar stuck to a head, or a fully 2D game, is the exception. Name it as an exception so it does not break the rule.

**Next**

- Under the world is the machine. Two kinds of computer, one deadline. This block is fast. Three minutes.

## S39 — Two kinds of computer, one frame

**Pace:** section 9, 3 minutes. Do not open a hardware lecture.

**Say**

- The CPU is one careful worker. Few lanes, hard jobs, one step at a time, lots of branching.
- The GPU is a large crew. One recipe, enormous data.
- A frame gets stuck on one of four things: CPU, GPU, loading, or memory.
- Smooth frame rate with hitching loads is the loading one. The FPS counter cannot see it.

**Need**

- SIMD, if asked: one instruction, many thin legs. A detail. Do not teach it.
- Scholar writing prose versus an army painting a fence. Use it if the room is lost. Otherwise skip the metaphor.

**Next**

- One command prints the question.

## S40 — Read the numbers. Don't guess.

**Say**

- In Unreal, stat unit prints Frame, Game, and Draw.
- Game high, Draw low: the simulation is the problem. Stop tuning shaders.
- Unreal Insights is the timeline, if you need the longer view.
- Change one thing at a time. Adding cores only speeds the part that can run in parallel.

**Need**

- The parallel-share limit is Amdahl's law. Say the plain version. Skip the name unless asked.

**Next**

- When several things run at once, two questions. Four minutes, then we leave the machine.

## S41 — Who waits, and who picks the order?

**Pace:** section 10, 4 minutes.

**Say**

- Who waits? Blocking means the whole thing stands still. A loading screen is blocking. An event loop does the next ready thing while a slow read is in flight.
- Who picks the order? The operating system can cut you off. Or your code yields on purpose. Coroutines and task graphs are the second kind.
- Each step up costs more coordination. One thread, then an event loop, then threads, then separate processes, then the network. You pay at every rung.

**Need**

- Async is the kettle boiling while you set the cups. Use it once. Do not build the ladder on the slide.

**Next**

- The other half is whose copy is real.

## S42 — Whose copy is the real one?

**Say**

- Shared memory is one whiteboard. Messages are mail. Both are ways to share facts.
- Copies are useful. They go stale on purpose. That staleness is what buys you parallel work.
- On a network, one machine is the authority. Your client is wrong by a few milliseconds, by design. That wrongness is how the game stays playable.

**Need**

- Your input is authoritative on your machine until the server says otherwise. Replication is an intentional copy. An RPC is a message, not a shared whiteboard.

**Next**

- Unreal already has names for all of this. One slide, then three quiet seams.

## S43 — Unreal already named this

**Say**

- Game thread, render thread, RHI thread.
- Latent actions are code that waits without freezing the frame.
- The task graph orders the work. Replication and RPCs are the network copies.
- The question, and then we stop: who runs, who waits, who decides the order, whose copy is true?
- Every "the engine is wonky" complaint is one of those four.

**Next**

- Three seams. Six minutes. Then people.

## S44 — Three quiet seams

**Pace:** section 11, 6 minutes. One idea each. Do not open the chapters.

**Say**

- A contract for what bytes mean.
- A map of where things are.
- A landlord between you and the hardware.
- Then we are done with the machine.

**Next**

- The contract.

## S45 — A file means nothing until both sides agree

**Say**

- A file is bytes. It means nothing until the writer and the reader agree.
- Three agreements: what fields exist, how they are laid out, and what the values mean together.
- If the tool crashes and the file looks fine, the agreement was broken. Not the file.

**Need**

- That agreement is a schema. Say the word once, then use "contract."

**Next**

- Same truth, three sets of clothes.

## S46 — Three clothes for the same truth

**Say**

- Authoring files are for people. fbx, gltf, wav. They say a lot. They load slowly.
- Runtime files are for speed. Cooked assets. A uasset.
- Packets are for the wire. Small, and able to change without breaking old clients.
- A multiplayer desync is two sides that stopped agreeing. Same bug as a reader that does not match the writer.

**Next**

- Second seam. Where things are.

## S47 — A map, not a warehouse

**Say**

- What is near this door? You can open every crate. Or you can read the aisle map.
- The map is a cache of where things are. When things move, you update the map or rebuild it.
- If the map lies, it is worse than no map. A rocket goes through a wall.
- The same map serves drawing and collision. One structure, two customers.

**Need**

- Shapes, only if asked: a grid, a tree of boxes, or the pre-cut rooms from the DOOM slide. One shape per world model. Do not list octree and BVH unless an engineer asks.

**Next**

- Third seam. The landlord.

## S48 — The operating system is the landlord

**Say**

- Your game does not touch the disk. It does not touch the GPU. It asks.
- The operating system is the landlord. It schedules, it hands out tickets, and it fronts the GPU as a second venue.
- Your game is a process, in a walled room of memory.
- A corrupted save is not you touching the disk. You asked, and you got a seat. If the seat was bad, that is a different bug than a bad mesh.

**Need**

- The ticket is a handle. A handle leak is a pile of unreturned tickets. Say that only if the room is technical.

**Next**

- And it keeps the books.

## S49 — Read the record. Don't guess.

**Say**

- The OS keeps a record of every process. The tools only show what that record knows.
- Task Manager, stat unit, Event Viewer. Same habit.
- Name it. Watch it. Read the record. Then ask: game bug, or a limit the OS imposed?
- Crash plus Task Manager tells you who died. The record tells you who did what.

**Next**

- Machine is done. Now the room. This is the part I will not rush.

## S50 — Where you sit

**Pace:** section 12, 8 minutes. Stay here.

**Say**

- Art, audio, design, code. You do not own the whole machine.
- You feed a part of it. The next slides are how to find your seat, and how one gun touches every seat.

**Next**

- Someone builds the box. Someone fills it.

## S51 — Someone builds it. Someone fills it.

**Say**

- Owners build and maintain a part. Usually engineering.
- Feeders fill it. Usually everyone else. Art fills files. Design fills numbers and rules-as-data. Audio fills sound files.
- Nobody owns the whole machine.
- The clock has no feeder. Everyone obeys it. You do not negotiate the frame deadline.
- A lot of "the build is wrong" fights are two people standing on different sides of one box. Name the box, and the fight gets smaller.

**Next**

- One object touches every row. A gun.

## S52 — One gun, four steps

**Say**

- Design it.
- Make the files.
- Hook the files into the engine.
- Code plays them back.
- Until that last step, the gun does nothing. It is inert data.

**Next**

- The first two steps. Nothing fires.

## S53 — Design it. Make the files. Nothing fires yet.

**Say**

- Design decides what the gun is. Role, feel, the numbers. That document is already a contract. Writer and reader will have to agree later.
- Then the files: model, rig, textures, sound.
- The best gunshot in the world cannot fire the gun. It is a file. It sits there.

**Next**

- Then someone hooks it up, and someone plays it.

## S54 — Hook it up. Then code plays it.

**Say**

- Import turns files into assets the engine can find.
- Some references load when needed. Some are baked in, and come along whether you wanted them or not. That choice is what loads when.
- Gameplay code reads the recipe. Fire: animation, sound, particles, damage.
- The finger on the button is the input leg of the loop from the start of the talk. Stage four is the middle. The sound you made in stage two is the output.

**Need**

- Soft reference: load when needed. Hard reference: baked in. Say the plain version first.

**Next**

- This is not an Unreal story.

## S55 — Same chain in DOOM 3

**Say**

- 2004. Same four steps.
- Design. Files. A placed entity. A script that plays them back.
- The last step only plays what the first three made.
- Engines change. The chain does not. Any weapon, any boss, any year.

**Need**

- DOOM 3: the placed thing is an .entity. The playback is idScript, running in a little virtual machine. Names only if asked.

**Next**

- A new interface showed up. I am not going to pitch it. Five minutes, factual.

## S56 — Talking to software

**Pace:** section 13, 5 minutes. Neutral. No demo.

**Say**

- Some of you are skeptical of AI. That is fine. This is not a pitch, and there is no demo.
- Talking to software is four pieces. Not a magic box.

**Next**

- Here they are.

## S57 — An agent is four pieces

**Say**

- A backend runs the model. Cloud or on a machine you own.
- The model is the trained brain.
- The harness is the program on your machine. It is the only piece that touches your files. That is the power, and that is the risk. Same door.
- Knowledge is your files, docs, and notes. Not the model's memory of the internet.
- A model alone is a chat box. A harness turns words into actions.

**Next**

- It goes both ways. And there is a catch.

## S58 — It can explain, and it can change things

**Say**

- One direction: the software explains itself. "Walk me through the renderer."
- The other direction: you say what you want changed, and it edits the software.
- The catch is the point of this whole talk. You still have to know the medium, or you cannot aim it.
- You cannot ask for a tour of the renderer if you do not know a renderer exists, and that it is not the world.

**Next**

- Where the tools live. One breath, or skip if we are behind.

## S59 — Where the tools live

**Say**

- Skip this slide if you are behind. If you say it, say this and stop.
- There are harnesses, local runners, services that host models, and hubs that store them.
- There are written standards for how an agent reads a repo.
- Permissions are the trust boundary. Know which door you opened.

**Need**

- Only if asked: harnesses such as Kilo, opencode, pi, Hermes. Local: LM Studio. Service: OpenRouter. Hub: Hugging Face. Standards: AGENTS.md, skills, MCP. Do not tour them. Do not recommend one.

**Next**

- Last section. Four minutes. What the future does to the loop.

## S60 — What comes next

**Pace:** section 14, 4 minutes, including the close.

**Say**

- What does the future do to the loop we just built?
- It changes the tools. It does not change the medium.

**Next**

- Meet the fear straight.

## S61 — The fear, and the plain answer

**Say**

- The fear is real. Do not wave it off.
- Some jobs get replaced. Some get help. Both sentences are true. Do not drop either one.
- The loop gets larger. You do not leave it. A stronger autopilot does not delete the person at the wheel. It moves them.

**Need**

- The figure, only if asked: the IMF said AI exposes about 40% of jobs globally, about 60% in advanced economies. Exposed is not the same as replaced. About half of the exposed jobs are complemented. Do not debate the number. Say both words: replaced, and helped.
- Source if they press: IMF, January 2024, "AI Will Transform the Global Economy."

**Next**

- What the machine itself looks like. Plain version.

## S62 — The engine stays. Parts get smarter.

**Say**

- The engine we just mapped stays. It is the scaffolding.
- Pieces get handed to learned systems one at a time. Not a waterfall. Keep what works.
- Neural rendering already ships. That is not a prediction.
- Shared real-time worlds are where those systems watch people play, and learn from the loop with a human in it.

**Need**

- Do not say "metaverse" unless someone uses the word. If they do: it is a verb, a thing people do together in real time, not a product name.

**Next**

- One line. Then I sit down.

## S63 — The interface changed. The medium did not.

**Say**

- The interface changed.
- The medium did not.
- Foundations outlast tools. The map still fits the next engine, the next job, and the next year.
- Stop. Do not add a second ending.

**Next**

- Questions.

## S64 — Questions, and where to read next

**Say**

- If a question stalls, I am going to do what I told you to do. Where is the input, where is the output, what is in the middle? Which of the five parts is it?
- The long version of this talk is the reference. Read it once, top to bottom. After that, use it per task. A tool question goes to your slot. An engine question goes to its world model. A "how does this gun work" question goes to the four steps.
- Further reading, if they want shelves: id Software's public source for DOOM, Quake, Quake III, and DOOM 3. three.js and Babylon.js. Godot. Unreal's docs.

**Need**

- Do not open a new topic in the answer. Point at a part, then stop.
