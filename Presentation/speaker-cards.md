---
type: Reference
title: "Speaker Cards - Software is the Medium: Game Engines are Software"
description: Read-aloud prompts, diagram walks, concrete examples, checks, technical caveats, and Q&A for the 34-slide student talk.
tags: [presentation, speaker-cards, game-engines, medium]
generated: { by: kilocode, at: 2026-11-02T07:00:00Z }
---

# Speaker Cards - Software is the Medium

Read **Say**, not every backup answer. **Show / ask** directs attention and checks understanding. **If asked** supplies depth without turning the talk into a technical lecture. **Next** is the transition.

46-minute route, including the S25 exercise: S1-S4 4 min; S5-S12 10 min; S13-S17 8 min; S18-S20 5 min; S21-S26 11 min; S27-S33 8 min. S34 adds 10 min Q&A. Reach S13 at 14:00, S21 at 27:00, S27 at 38:00. If behind, skip S8, S20, and S28 rather than speaking faster. Protect S12/S14, the weapon, and the ending. No live demo required.

The numbers for the example weapon are invented teaching values, not a claim about a shipped game. The five parts are questions about responsibilities, not five mandatory modules. Public engine documentation can change; distinguish original releases from ports and settings. The current cards correct several over-broad claims in the older reference chapters.

## S1 - Software is the Medium - Game Engines are Software

**Say**

- Imagine pressing fire. A number changes, a sound plays, and a flash appears. What connected those things? That is what we are going to make understandable.
- You do not need to become a programmer today. You need a map: what the engine remembers, what changes it, what goes in and out, and when it happens.
- We will build that map, follow a weapon through it, then use it to evaluate AI tools without needing to believe their marketing.

**Show / ask**

- Ask for a show of hands: design, art, sound, programming, or still exploring. All are legitimate starting points. Avoid making anyone explain their technical level publicly.

**Next**

- Before we start, here is the route we will follow.

## S2 - Six sections, four acts

**Say**

- Before we start, here is the route. The talk runs in four acts and six sections; I will come back to this map at every section change.
- Act A sets the medium: what software is, and what it is made of. We start with a button press and the two substances it touches.
- Act B zooms into engines: the same anatomy, then real engines — Quake, Doom 3, and Unreal 5 — seen through one lens.
- Act C follows one weapon across every discipline. Act D looks at AI and interfaces, then closes with the reusable questions.
- You do not need to hold all of it now; the section dividers will re-anchor you.

**Show / ask**

- Point to each act as you name it. Optionally ask what they most want to understand; you can weave one answer in later.

**If asked**

- The four acts are color-coded in the deck — indigo A, sky B, green C, purple D — visible on each divider.
- Timings: a 46-minute route with 10 minutes of Q&A at the end.

**Next**

- Each of those disciplines already contributes to a running software system.

## S3 - You are making software

**Say**

- An artist does not just deliver a beautiful image. They deliver an image with dimensions, compression, memory cost, and a material that knows how to use it.
- A designer's cooldown is a value with units. An audio clip has a duration and a loading cost. Engineering connects these contributions into behavior.
- Your craft remains your craft. Understanding the medium lets you predict what happens after your handoff.

**If asked**

- "Must everyone code?" No. Reading a profiler, checking an asset reference, or specifying units is already useful technical literacy. We are learning how to ask better questions, not erasing specialisms.
- Concrete handoff: a sound exists on disk, but a missing reference means the running weapon never finds it. The file can be excellent and the integration still wrong.

**Next**

- The editor will change. These questions travel with you.

## S4 - The anatomy outlasts the tool

**Say**

- On your first day in an unfamiliar engine, do not try to memorize every panel. Find one object and ask five questions.
- Where is its state? Which rule changes it? What triggers that rule? What result reaches the player? When does the work run?
- Product knowledge still matters. This map tells you where to start learning it.

**Show / ask**

- Use a door: open or closed is state; a key requirement is logic; interact is input; motion and sound are output; the update and animation schedule are timing.

**If asked**

- This is a useful abstraction, not a proof that every program has exactly five classes. Security, networking, persistence, and tools cross these responsibilities.

**Next**

- First, separate the rule from the values it operates on.

## S5 - Anatomy of software

**Say**

- We will take one button press apart: rules and values, input and output, feedback, and time. Then we will put the five labels on it.
- If a word is unfamiliar, attach it to the example. You do not need to memorize the terminology on first hearing.

**Next**

- Press jump. What is the instruction, and what is a number?

## S6 - Code and data

**Say**

- The rule says: if jump is requested and the player is grounded, set upward velocity. The configured jump speed is a value the designer can tune.
- Current velocity and grounded status are live state. They describe this player now, not the default for every player.
- Changing jump speed can make a higher jump. Allowing a second jump in mid-air changes the rule. Knowing which change you want saves a lot of random editing.

**Show / ask**

- Ask: is ammunition 30 a rule or state? State. Is "do not fire with zero ammunition" a rule? Yes.

**If asked**

- Configuration is also data. The configuration/live-state distinction is about use, not a different physical substance. Code itself is stored as bytes; its role is to supply instructions.

**Next**

- That is why a file can carry behavior, not just pictures and numbers.

## S7 - Code can be stored as data

**Say**

- A file extension does not tell you whether something can change behavior. A runtime may read a file as instructions.
- Quake compiles its gameplay language, QuakeC, into progs.dat. Unreal stores Blueprint graphs in assets. Those files need an engine that understands them.
- Some mods replace data or scripts without rebuilding engine code. Others need native code changes. The boundary is a design choice, not magic.

**If asked**

- A Blueprint is not "just data" in the sense of being behavior-free. A graph can express executable logic. Assets can also contain only content or configuration.
- Source trail: [Quake program loader and VM structures](https://github.com/id-Software/Quake/blob/master/WinQuake/pr_edict.c). Search for progs.dat and PR_LoadProgs.

**Next**

- That stored behavior rarely runs alone — it meets a config layer first.

## S8 - Data-driven: config binds data to code

**Say**

- Most games and apps are **data-driven**: values and rules live in files that code reads, bound together by a **config or asset layer**.
- A JavaScript or Python application reads JSON or YAML at run time. Change a value and the program behaves differently; the code that reads the file stays the same.
- In Unreal, Blueprints span that spectrum. A **Blueprint graph** is node logic that actually runs. A **Data-Only Blueprint** is just a container of properties that other code reads.
- The binding only works where the reading code already understands the file. "Data-driven" always means code, data, and a declared connection between them.

**If asked**

- This is the career-long question from ch00 §1.3: what belongs in code, and what in data? Unreal's own docs call the property-only case **Data-Only Blueprints** and recommend them for data inheritance; a graph Blueprint is stored as `.uasset` data but executes as logic.
- "Data-driven," "declarative configuration," and "the config layer" are the common names for the pattern. JSON and YAML are examples of a wider family — INI, TOML, DataTables, engine settings files. The relationship matters more than the format: a file the code reads to shape behavior.
- Epic's **Data Assets** are related but separate: `UDataAsset` instances that hold data without being Blueprints at all.

**Next**

- Whatever the file contains, follow what enters the program and what comes out.

## S9 - Input, process, output

**Say**

- A fire command arrives. Gameplay checks whether firing is allowed, spends ammunition, and checks what was hit. Then the result becomes pixels, sound, and interface updates.
- Input is a request. It is not a guarantee that the requested action happens. Empty ammunition should reject the request.
- The same model works for an import tool: source file in, conversion and validation, runtime asset out.

**Show / ask**

- Point left to right. Ask which box should decide whether the weapon has ammunition. The rules in the process, consulting state, not the muzzle-flash artwork.

**Next**

- The output changes what the player does next.

## S10 - The player closes the feedback loop

**Say**

- You aim, fire, see a miss, move slightly, and fire again. Your next action depends on the previous result. That is feedback.
- The software continues updating while you think. The frame loop is inside a larger human feedback loop; your brain is not making a fresh conscious decision every display refresh.
- Cybernetics studies control and communication through feedback. The useful idea here is correction by observing consequences.

**If asked**

- Feedback is not automatically beneficial. A delayed or misleading cue can make a player overcorrect. Camera smoothing can look pleasant while making aiming feel less direct.
- A simulation can run without a human. Human participation is not a universal definition separating every game from every simulation.

**Next**

- How long does that response take? That is a different question from frame rate.

## S11 - Frame rate is not response time

**Say**

- Divide one thousand milliseconds by sixty. You get about 16.7 milliseconds between frames at sixty frames per second.
- That is not a promise that your click reaches the screen in 16.7 milliseconds. The device must sample it, the simulation must consume it, rendering must run, and the display must present it. Queues can add waiting.
- Frame rate measures how frequently images arrive. Latency measures how old the response is. A conveyor belt can deliver frequently while carrying old packages.

**Show / ask**

- Trace the chain once. Ask: could a game be smooth but feel sluggish? Yes, because queued work can preserve throughput while increasing response delay.

**If asked**

- 120 fps gives 8.3 ms; 30 fps gives 33.3 ms. These are arithmetic intervals, not measured end-to-end latency. Networked actions may include additional network and server delay. Do not sum CPU and GPU frame timings blindly: work can overlap.

**Next**

- Now give the whole system five labels.

## S12 - State, logic, input, output, clock

**Say**

- State remembers: ammunition, health, position. Logic changes those facts according to rules. Input requests changes. Output presents results. Clock means when the work runs.
- The arrows matter more than the boxes. Rules read existing state and write new state. Output reads a representation of the result. Timing affects the entire journey.
- Keep this map. When someone says "the engine is broken," ask which boundary failed and what evidence they have.

**Show / ask**

- Point to state and ask "29 rounds: where?" Then logic: "the rule that spent one round: where?" Allow a pause; this is the comprehension check to protect.

**If asked**

- Clock can mean an event loop, simulation tick, task schedule, audio callback, or cooldown. There may be several clocks. These are responsibilities, not isolated physical boxes.

**Next**

- An engine packages reusable machinery for these responsibilities.

## S13 - Anatomy of a game engine

**Say**

- A game engine is reusable software for building and running interactive worlds. It commonly provides simulation support, rendering, audio, input, asset handling, and authoring tools.
- Your game adds the particular rules and content: what a weapon does, how a level looks, what winning means.
- The editor is the workshop. The runtime is the machinery running the shipped experience. Engines differ in where that boundary sits; some games use custom or minimal tools.

**If asked**

- "Is a renderer an engine?" It may be one component of an engine. A library that draws triangles does not necessarily provide gameplay, physics, asset tools, or a complete runtime. The label has fuzzy edges; ask what responsibilities it supplies.
- Not every engine is large or 3D. The same questions work for a small 2D framework.

**Next**

- Here are the responsibilities using the same five questions.

## S14 - Five subsystems

**Say**

- Input turns a device event into a gameplay command. Logic tests the rules. The world model stores the changed facts. Rendering, audio, and UI present them. The scheduler determines when those jobs happen.
- For our weapon: Fire comes in, the rule spends one round, state becomes 29, and the player sees and hears the shot.
- In a real engine each part crosses several modules and threads. The point is to locate responsibility, not force the source tree into five folders.

**Show / ask**

- "The ammunition display says 30 but the weapon has 29. Which boundary would you inspect?" Compare authoritative state with what the HUD reads. Do not immediately rewrite the firing rule.

**Next**

- Correct work still has to arrive on time.

## S15 - A frame is a time budget

**Say**

- At a sixty-frame target we aim to deliver a frame roughly every 16.7 milliseconds. Illustratively, twelve milliseconds of critical-path work fits; twenty-four does not.
- Games are generally soft real-time: being late hurts responsiveness or smoothness, but a missed frame is not automatically total system failure. Hard real-time systems require deadline guarantees for correctness.
- Find the bottleneck before optimizing. A faster shader does not fix a main thread waiting for an asset to load.

**If asked**

- CPU and GPU often work on different frames concurrently. Their times are not simply added to predict frame rate. Synchronization, queues, refresh policy, and the critical path matter.
- In Unreal, start with stat unit for Game, Draw, GPU, and Frame, then a timeline in Unreal Insights. Measure on the target hardware, including slow frames rather than only an average.

**Next**

- The image is one output of that work, not the world itself.

## S16 - The renderer reads state

**Say**

- Think of a scoreboard and the scorekeeper. The display reports a score; it does not necessarily decide which goal counts.
- Similarly, a headless server can track positions, hits, and health without drawing any pixels. The renderer makes a picture from state prepared for presentation.
- A flash is evidence that an effect appeared. It is not proof that the authoritative damage rule accepted a hit.

**If asked**

- Rendering systems do perform computation and can simulate cosmetic particles or other effects. The distinction is authority over gameplay, not "renderers never simulate."
- Clients may predict an effect before the server confirms the action. Rendering copies can intentionally lag the authoritative world. Authority and freshness are separate questions.

**Next**

- How are those world facts organized?

## S17 - Three ways to organize a world

**Say**

- A transform tree answers "what moves with what?" Move a hand and the attached weapon follows.
- A spatial index answers "what is near or potentially visible?" A BSP partitions space; other engines use grids or bounding-volume trees.
- Components answer "what data and capabilities does this thing have?" An ECS organizes entities by components and runs systems over matching data.
- These are not competing brands of world model. One engine can use all three for different jobs.

**If asked**

- ECS means entity-component-system. Not every ECS uses the same columnar storage, and not every component-based engine is an ECS. Unreal Actors and Components do not by themselves imply a pure ECS.
- A spatial index may be derived from world data. If a moving object is not reflected in the index, queries can give wrong answers even when its visible transform looks correct.

**Next**

- Let us use the questions on engines that actually shipped.

## S18 - Quake, Doom 3, Unreal 5

**Say**

- This is not a nostalgia test. Ignore names you do not recognize; identify the job each name performs.
- We are comparing the original Quake and DOOM 3 architectures with the configurable Unreal 5 family. Ports, later editions, and project settings can change important details.

**Next**

- Read one row across before reading one engine down.

## S19 - The same five rows

**Say**

- Start with state. Quake combines compiled world geometry with entities called edicts. DOOM 3 uses compiled render-world data and game objects such as idEntity. Unreal organizes gameplay around a UWorld, Actors, and Components.
- Those are different names and structures for facts about the world. Next, the logic row names the code that changes those facts.
- Do not recite the whole table. Pick Quake and walk down: world facts, C and QuakeC behavior, input commands, rendering and audio, host-frame timing. The new engine stops being a wall of unfamiliar words.

**If asked**

- Original DOOM 3 has a nominal 60 Hz game/user-command cadence; avoid claiming it has BFG's later render/simulation arrangement. Unreal physics substepping is configurable, not universally fixed by default.
- Primary sources: [Quake source](https://github.com/id-Software/Quake), [DOOM 3 game state and interface](https://github.com/id-Software/DOOM-3/blob/master/neo/game/Game_local.h), [DOOM 3 user-command timing](https://github.com/id-Software/DOOM-3/blob/master/neo/framework/UsercmdGen.h), [Epic physics substepping](https://dev.epicgames.com/documentation/en-us/unreal-engine/physics-sub-stepping-in-unreal-engine).

**Next**

- The timing row deserves one important distinction.

## S20 - Simulation and display can tick differently

**Say**

- Fixed-step simulation advances by the same amount of simulated time each update. Variable-step simulation uses the measured elapsed interval.
- A renderer may run at a different cadence, using previous and current states to interpolate a picture. It is a separate scheduling question.
- If simulation falls behind, the engine needs a policy: catch up, limit catch-up work, or slow simulated time. Unlimited catch-up can create even more lateness.

**If asked**

- Fixed step helps repeatability; it does not guarantee identical outcomes. Starting state, inputs, random seeds, execution order, floating-point behavior, and platform differences still matter.
- Epic's substepping divides a frame interval into smaller bounded steps according to settings. It should not be described as a universal fixed independent Chaos clock. See the source on S17.

**Next**

- Enough architecture. Follow one weapon through the whole team.

## S21 - One weapon, every discipline

**Say**

- The player experiences one weapon. The team creates a network of agreements: how it should feel, what assets it uses, which rules it obeys, and when feedback appears.
- A beautiful mesh cannot decide who was hit. A correct damage rule cannot by itself communicate satisfying impact. Neither contribution replaces the other.

**Show / ask**

- Invite each discipline to notice one handoff they could validate. Frame this as shared diagnosis, not finding someone to blame.

**Next**

- Separate making the content from running it.

## S22 - From authoring to a running game

**Say**

- At build time, people create designs, models, animation, and sound. Import and cooking convert or package them into forms suitable for the target platform.
- At run time, code loads the required assets, responds to input, updates state, and presents results. Cooking is not something every shot repeats.
- The contracts connect the stages: a socket name must match, meters and centimeters must agree, and a sound must be loaded before the event expects to play it.

**If asked**

- Build-time work can trade longer preparation for faster runtime loading. An editor asset and its cooked platform representation are not necessarily identical.
- Ownership differs by studio. A designer may script behavior; a technical artist may maintain import tools. Name the work before assigning the role.

**Next**

- A useful contract turns an intention into something we can test.

## S23 - Turn intent into a testable contract

**Say**

- "Make it deliberate" is design intent. It needs iteration and judgment. "Damage is 25 health points; cooldown is 0.2 seconds; magazine capacity is 30 rounds" is a testable starting contract.
- Distinguish capacity from current ammunition. Capacity is configuration; current ammunition changes while you play.
- Units and valid ranges matter. A negative cooldown or a milliseconds-versus-seconds mistake can break behavior even though the data loads successfully.

**Show / ask**

- Ask what should happen to a target with 100 health after one accepted unarmored hit. 75. State assumptions: no armor, critical multiplier, or other modifier in this teaching example.

**If asked**

- A design document informs a schema; it is not automatically a formal schema. Define names, types, units, constraints, and the meaning of values. Numeric tests do not prove that the weapon feels good; playtesting checks that goal.

**Next**

- Now the player presses fire.

## S24 - One shot: check, change, announce

**Say**

- First check ammunition and whether the cooldown has expired. If the request is rejected, do not spend ammunition or apply damage. A dry-fire sound is a separate allowed response.
- On an accepted shot, spend one round and start cooldown. Check the hit result; only a valid hit applies damage. In our simplified example ammunition goes 30 to 29 and a hit changes health from 100 to 75.
- Announce the shot so presentation systems can respond. This is a teaching sequence, not a claim that every engine uses this exact event API.

**If asked**

- Soft references identify assets without necessarily loading them. Code or an asset manager must request loading. Hard references create loading and lifetime dependencies; they do not mean an asset is immortal. Preload critical weapon feedback instead of blocking on first use.
- Source: [Epic asynchronous asset loading](https://dev.epicgames.com/documentation/en-us/unreal-engine/asynchronous-asset-loading-in-unreal-engine).
- In multiplayer, the authority validates the action; a client may predict feedback for responsiveness. Do not trust a client-provided damage result without validation.

**Next**

- One accepted action can have several visible and audible consequences.

## S25 - One event, several kinds of feedback

**Say**

- The shot can trigger animation, flash, sound, recoil, and the HUD update. These systems may run on different schedules; synchronizing their cues shapes perceived impact.
- Now use the map: a weapon flashes, but the target takes no damage. What would you inspect before changing anything?

**Show / ask: three-minute exercise**

- 30 seconds alone: label input, state, logic, output, and clock for this symptom.
- 60 seconds in pairs: choose the first boundary to inspect and what evidence would support your guess.
- 60 seconds: hear one or two answers. Ask "What observation would prove your hypothesis wrong?"
- 30 seconds debrief: presentation happened, but we do not yet know that a hit was accepted. Inspect the hit result and authoritative health before blaming the artwork.

**Answer key / if asked**

- Valid hypotheses include a collision-mask mismatch, an invulnerable target, a rejected server shot, or stale HUD state. Distinguish target health from the displayed health bar.
- If health changed but the HUD did not, inspect the state-to-UI path. If no hit was recorded, inspect the collision query and eligibility. There is no single diagnosis without evidence.

**Next**

- The same handoffs existed well before today's editors.

## S26 - The same chain in Doom 3

**Say**

- In DOOM 3, weapon definitions connect names and settings to assets and script behavior. C++ weapon code and the script system coordinate the running weapon.
- Meshes and animations, materials, and sound declarations feed their respective systems. It is not one mysterious "weapon file."
- We can ask the same questions: was the definition found, was the script state correct, did the projectile or hit logic run, and did output receive the result?

**If asked**

- Concrete formats include .def definitions, .script behavior, .md5mesh models, .md5anim animation, .mtr materials, and .sndshd sound declarations. "Declaration" names a system; do not invent a universal .decl extension.
- Source trail: [idWeapon implementation](https://github.com/id-Software/DOOM-3/blob/master/neo/game/Weapon.cpp), [declaration manager](https://github.com/id-Software/DOOM-3/blob/master/neo/framework/DeclManager.cpp). The source release does not grant unrestricted rights to proprietary game assets.

**Next**

- Now apply this same map to AI, without changing the standard of evidence.

## S27 - AI inside the same map

**Say**

- "AI in games" can mean a tool helping a developer write code, a model making decisions during play, or a model reconstructing images. Those are different responsibilities with different risks.
- Ask where it sits, what it reads, what it may change, how long it takes, and how failure is detected.
- You do not have to adopt a tool to understand or evaluate it.

**If asked**

- Traditional game AI includes authored behavior trees, search, and navigation. "AI" does not automatically mean an LLM or a neural network.

**Next**

- The useful bridge is feedback: propose, observe, and correct.

## S28 - Feedback turns a guess into an experiment

**Say**

- A player observes a miss and adjusts aim. A developer observes a failed test and adjusts a change. The pattern is goal, action, observation, comparison, correction.
- AI can propose the action, but it does not remove the need for a trustworthy observation. Asking the same model whether its answer looks correct is weaker than running the relevant test.
- Measure the actual goal. Faster code generation does not prove faster delivery of a working game.

**If asked**

- Wiener popularized cybernetics in his 1948 book about control and communication in animals and machines. Keep the history optional; the practical point is feedback and error correction, not a claim that all loops are equivalent.

**Next**

- Some behavior is written explicitly. Some is learned from examples.

## S29 - Symbolic and connectionist

**Say**

- An explicit rule can say "ammunition must be at least one." You can inspect it and test the boundary at zero.
- A neural model learns parameters from training. It may produce useful dialogue or code, but fluent output is not proof that the game's constraints were respected.
- Combine the approaches: an NPC proposes a trade in natural language; explicit inventory and currency rules decide whether the trade can execute.

**If asked**

- This is a contrast, not an exhaustive taxonomy of software. Numerical simulation is not usually called symbolic AI just because it is written in C++. Traditional AI includes more than these two labels.
- Learned models execute code over data too. Their weights are data. Explicit code can also contain bugs; the distinction does not mean rules are automatically correct or neural models are always random.

**Next**

- Here is a concrete learned component already used in games.

## S30 - A learned component still has a job

**Say**

- Neural upscaling, such as DLSS Super Resolution, reconstructs higher-resolution images from lower-resolution inputs using motion and previous-frame information.
- That is a specific job in the output pipeline. It does not establish that a target was hit, that inventory is consistent, or that a saved world can be restored correctly.
- For generated-world demonstrations, ask separate questions: does an object persist after leaving view, can a designer control a rule, can you replay a failure, and what does it cost to run?

**If asked**

- Super resolution and frame generation are different techniques. More generated display frames do not mean the gameplay simulation performed more updates.
- Source: [NVIDIA DLSS technology descriptions](https://developer.nvidia.com/rtx/dlss). Use this for the mechanism, not as independent evidence of every performance claim. Whether whole engines will be replaced remains a forecast, not established by upscaling.

**Next**

- AI can also sit outside the game, helping us work on its files.

## S31 - AI is a new interface

**Say**

- The model proposes an action. A surrounding application, often called a harness, supplies context, manages permissions, and invokes tools. Tool results feed the next step.
- A tool can read a file, modify it, or run a test. Those actions can be useful or damaging depending on access and validation.
- Keep the distinction: a confident message says what the model believes. A diff shows what changed. A test result shows what was actually checked.

**If asked**

- The harness can run locally, remotely, or across both. Do not assume "on my machine" means "no data leaves my machine." Check provider, tool, and storage policies before giving access to private files.
- Start read-only, scope permissions, exclude secrets, use version control, and require approval for destructive or publishing actions. Repository content can contain hostile instructions; reading a file should not grant it authority.

**Next**

- Knowing the anatomy lets you make a useful, bounded request.

## S32 - Give AI a boundary and a test

**Say**

- Instead of "fix my weapon," ask it to trace the fire command to the ammunition update and cite the relevant files. Inspect before editing.
- Then request one small change with explicit invariants: preserve damage, cooldown, and the authority boundary. Review the diff.
- Test ordinary behavior and the boundaries: empty ammunition, cooldown not expired, a hit, and a miss. Ask what it actually ran, and what remains untested.

**Concrete acceptance checks**

- Ammo zero: no accepted shot, no damage, no negative ammunition; dry-fire feedback may be allowed.
- Cooldown active: reject the extra request without spending another round.
- Valid hit: spend one round and apply exactly 25 damage under our stated assumptions.
- Valid miss: spend one round, start cooldown, but do not change target health.
- A passing unit test does not prove multiplayer correctness, good feel, or acceptable performance. Add those checks when the change touches them.

**Next**

- This is the durable skill, whether the next tool uses AI or not.

## S33 - The interface changed. The medium did not.

**Say**

- Find the state. Trace the rules. Follow the input and output. Measure the timing.
- In your next project, choose one door, jump, or weapon. Draw those five parts and follow one real action through them. If you cannot find a part, that is your next question, not a personal failure.
- The interface changed. The medium still needs to be understood. Your judgment is how you decide whether the result is right.

**Delivery**

- Pause after the final sentence. Do not promise guaranteed employment, inevitable replacement, or that mastering one tool future-proofs a career. This is a transferable learning method, not a prediction.

**Next**

- Let us use the map on your questions.

## S34 - Questions

**Say**

- Give me a concrete symptom or something you want to build. We will locate its state, rules, boundaries, and timing, then decide what to inspect.
- If no one volunteers, return to the flash-without-damage example. What evidence separates a missed hit from a stale health display?

**Q&A ammunition**

- "Which engine should I learn?" Choose a small achievable project and an engine with accessible tools, documentation, and support for your platform. Complete the loop from authoring to a playable build. Learn one well, then map the next using the same questions.
- "Does a game need an engine?" It needs software that fulfills the required responsibilities, whether supplied by a general engine, a framework, libraries, or custom code. There is no requirement to buy a branded product.
- "Can AI build the whole game?" It can automate portions with widely varying reliability. Scope, integration, validation, performance, licensing, and player experience still need to be established. A demo is not proof of maintainable production software.
- "Will it take our jobs?" Tasks and staffing may change; no one can responsibly guarantee your personal outcome. Strengthen portable abilities: diagnose systems, communicate constraints, judge quality, test work, and finish projects. AI use is not a prerequisite for understanding this map.
- "Why did generated code compile but fail?" Compilation checks some syntax and type rules, not whether the behavior matches the design, synchronizes correctly, or meets a time budget. Ask for the failing scenario and a regression test.
- "What should a non-programmer do tomorrow?" Trace one of your own assets from source file through import and reference to its visible or audible result. Record one format constraint, one loading constraint, and one timing constraint.
- "Where should I read next?" Start with the repository's reference for the relevant question, then check version-specific primary documentation. For engine behavior, prefer source and measured traces over confident summaries, including these notes.
- If unsure: "I can locate the responsibility, but I would need to inspect that engine version or measure that behavior before claiming an answer." This models the skill you are teaching.
