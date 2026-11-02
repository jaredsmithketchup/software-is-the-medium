---
type: Reference
title: Case Study — DOOM 3 (id Tech 4)
description: The id engine that grew up — a reusable C++ core with the game as a plug-in DLL, a fixed 60 Hz input tick, a static .proc world plus dynamic entities, and stencil shadows that made darkness the feature.
generated: { by: kilocode/subagent, at: 2026-11-01T18:30:00Z }
---

# Case Study — DOOM 3 (id Tech 4)

The id engine that "grew up." DOOM 3 (released 2004) was still a game you
bought, but under the hood it was reorganized as a **reusable engine core
with the game as a separate plug-in**. It also made a bet that lighting, not
geometry, sells horror — the signature look is darkness plus stencil
shadow volumes.

## What it is

- **What it is:** a first-person shooter game and the engine behind it, known
  inside id Software as **id Tech 4**. The same engine and its variants powered
  Doom 3, Doom 3: Resurrection of Evil (the "d3xp" game module in the source),
  and licensed titles such as Quake 4 and Prey.
- **Era:** 2004 release; published as open source under the GNU GPL in 2011 —
  the tree this case study is based on.
- **Positioning:** the id lineage (DOOM, Quake, Quake III Arena) shipped "a
  game with an engine inside it." DOOM 3 is the moment the engine comes out of
  the game: a C++ engine core plus a **game DLL** that speaks a fixed
  `idGame` interface. The engine and the game are finally different programs.
- **Language:** C++, with OpenGL rendering in the GPL source tree (the original
  commercial Windows build had a DirectX 9 path that the open release omits).
- **License:** GNU GPL v3 for the engine source; the game *data* is not
  included and remains under its original end-user license.
- **Marquee technology:** stencil shadow volumes and per-pixel dynamic
  lighting — every light is re-computed, and darkness is a gameplay element.

> **Come back to this.** DOOM 3 is the moment a game company decides to build "an
> engine, then games on top of it" instead of "a game with rezzed-up internals."
> Everything that follows — the DLL boundary, the fixed tick, the declarative
> data — exists to make that division possible.

## How it's built and how it works, in plain language

**Two programs, one machine.** Think of the engine core as a movie projector
and the game as the film. The projector owns the screen, the clock, asset
reading, drawing, sound, and the operating system. The film decides what
exists in the world and what happens next. The two halves only talk through a
narrow doorway — the `idGame` interface — so a different game module (like
Resurrection of Evil) drops into the same projector.

**The engine core, by subsystem.** The tiny, reusable parts live in *idLib*:
strings, dictionaries, math, containers, and a SIMD layer that picks processor
fast-paths at runtime. Above it, the *framework* handles startup, the event
loop, the console, command and variable systems, the **declaration manager**
(which reads `.decl` data files), the **`.pk4` file system** (zip archives),
and **usercmd generation** (input → per-tick command packets). The *renderer*
holds the OpenGL pipeline, the static `.proc` world, materials, images, and the
stencil-shadow backend. Sound, the declarative `.gui` GUI system, a collision
module, and a per-OS platform layer finish the core.

**The game module.** A C++ class hierarchy of `idEntity` world objects (player,
AI, weapons, lights, movers, triggers), AI state machines, physics, and an
embedded **script interpreter** — a bytecode virtual machine used for level
logic and AI behaviour.

**Content is data, and data is content.** Game data ships in `.pk4` zip
archives, and huge amounts of "gameplay" are plain-text `.decl` declarations —
materials, entity definitions, skins, particles, articulated figures, sounds.
Tuning a weapon is editing a text file, not rebuilding a DLL. This "data is
code, code is data" split is one of id Tech 4's biggest workflow ideas.

**The world is pre-built, not constructed.** Levels are authored in a map
editor and compiled offline by the `dmap` tool into a static `.proc` world
file the renderer can travel fast. All the dynamic content sits in a flat
entity list above it — see the World model section.

> **Come back to this.** The architecture is a boundary plan: core vs game
> (DLL + interface), code vs data (`.decl`), static vs dynamic (`.proc` +
> entity list), and fixed vs free (60 Hz tic + display-rate render). Name the
> boundary, and you have described the engine.

## The five-part skeleton, filled in this engine's terms

The same five slots from the [common structure](../01-common-structure.md) —
state, logic, input, output, clock — fit DOOM 3 like this:

| Part | What fills it in DOOM 3 |
|---|---|
| **State** | the static `.proc` world (compiled offline from maps) plus a flat list of dynamic `idEntity` objects; in-memory assets come from `.pk4` zips and `.decl` declarations |
| **Logic** | `idGameLocal::RunFrame`, called once per 60 Hz tic: AI, physics, movers, triggers, weapons, and id Script threads read and mutate entity state |
| **Input** | hardware events (keyboard, mouse) → `idEventLoop` → `idUsercmdGen` builds one `usercmd_t` command packet per 60 Hz tic |
| **Output** | `idRenderSystem` Begin/Draw/EndFrame → `idRenderWorld` and the OpenGL stencil-shadow backend → `GLimp_SwapBuffers` to the monitor; audio leaves through `idSoundSystem` to an OpenAL device |
| **Clock** | **two clocks.** Simulation runs on a fixed **60 Hz usercmd tic** (`USERCMD_HZ`); rendering runs as often as the display asks. Each display frame, the engine runs however many simulation tics it "owes," then draws once |

The crisp contrast to remember: at the other extreme of [the framing
reference](../00-software-is-the-medium.md), three.js hands its clock to the
application; DOOM 3 owns both clocks but keeps simulation fixed and rendering
free. The payoff is that gameplay behaves identically no
matter what refresh rate the monitor has.

> **Come back to this.** DOOM 3 keeps a rock-fixed simulation heartbeat (60 Hz)
> underneath a display-rate renderer. One clock for truth, one clock for
> showing the truth — the classic answer to "the game feels different on
> different screens."

## A frame walk, end to end

Trace one frame on a 120 Hz monitor while the simulation tick is 60 Hz:

1. **Input:** the OS delivers mouse and keyboard activity as window events. The
   platform layer (`Sys_GenerateEvents`) pumps them into the event loop
   (`idEventLoop`), which feeds `idUsercmdGen`, the input-to-command converter.
2. **Frame step:** the main loop (`idCommonLocal::Frame`) runs the event loop,
   steps the network tick (`idAsyncNetwork::RunFrame`), then asks the session
   (`idSessionLocal::Frame`) to produce a frame.
3. **Tic pacing:** the session checks where the simulation is. Against a
   120 Hz display it will typically find it owes two 60 Hz simulation tics for
   every render frame.
4. **Usercmd:** for each owed tic, `RunGameTic` grabs the current `usercmd_t`
   (the captured button and mouse state) from `usercmdGen`.
5. **Game logic:** it calls `idGameLocal::RunFrame(&cmd)` inside the game DLL —
   physics, AI, movers, weapons, and script threads all advance exactly one
   60 Hz step using that command. Results (positions, animations, sounds) are
   written back to entity state and published to `idRenderWorld` (for drawing)
   and `idSoundWorld` (for audio).
6. **Render:** once the owed tics are done, `UpdateScreen` calls
   `renderSystem->BeginFrame`, then `Draw()` — the GUI surfaces, the 3D world,
   the console — then `renderSystem->EndFrame`, which finishes with
   `GLimp_SwapBuffers`, handing the finished image to the display driver.
7. **Screen:** the monitor shows the new image; the loop begins again on the
   next display refresh.

The takeaway is the division of labour: input and gameplay happen in fixed
60 Hz steps, and rendering is a downstream consumer that absorbs the
difference. That is why the renderer is never "inside" the simulation —
a shape the [common structure](../01-common-structure.md) describes across all
ten engines.

> **Come back to this.** Events become commands, commands become one 60 Hz game
> step, the step publishes world state, and a display-rate render pass turns that
> state into pixels. Five concepts, one frame.

## World model

Family: **BSP + flat entities** — the id lineage, as mapped in
[world-models](../02-world-models.md). The static level is compiled offline into a
`.proc` world used for fast visibility and collision. The dynamic content is a
flat list of `idEntity` objects, each positioned absolutely; there is **no
runtime transform hierarchy**. What the family buys: fast static culling and
collision against a precomputed world, and a predictable flat entity list. What
it costs: no built-in parenting — attaching a weapon to a hand means game code
*positioning* the model there every frame — and the static world cannot change
at runtime. "Attach to" is spelled "move there every frame" in this family.

> **Come back to this.** Two structures, two purposes: an immutable world the
> renderer can trust, and a flat list of things that move. Keeping them separate
> is the id Tech answer to "how do I organize the world?" — see the companion
> note for the scene-graph alternative that three.js and Babylon use.

## Notable patterns worth a career

- **Fixed timestep plus data-driven declarations.** Simulation ticks at a fixed
  60 Hz regardless of display rate, and nearly everything gameplay-shaped is a
  `.decl` file rather than compiled code — materials, entity definitions, skins,
  particles, sounds. Tuning a weapon means changing a text file, not rebuilding
  a DLL.
- **Game as a plug-in (DLL behind an interface).** `idGame` defines the
  boundary between engine and game: one engine core, many game modules (DOOM 3,
  Resurrection of Evil). This is interface/plugin thinking applied to a whole
  game.
- **Stencil shadow volumes.** Each dynamic light extrudes shadow-volume
  geometry through the scene, giving hard-edged real-time shadows that made
  darkness a feature. Worth knowing: the GPL release omits the depth-fail
  variant nicknamed "Carmack's Reverse," as its README notes.
- **Zip archives with an override order.** `.pk4` files layer — higher-numbered
  packs override lower ones — so a mod can ship one new pack that replaces
  files in the base packs without touching anything else.
- **SIMD abstraction.** Math hot paths select an implementation at runtime
  (generic, MMX, SSE, 3DNow) rather than assuming one CPU feature set.

> **Come back to this.** Four ideas recur across the industry: fixed-timestep
> simulation, data over code, engines as plug-in hosts, and archives as
> replaceable layers. DOOM 3 happened to have all four in one product.

## Who works with this engine

- **Gameplay / AI programmers** — the game DLL in C++, plus the embedded id
  Script bytecode VM for level and AI logic.
- **Level designers** — build maps in the Radiant map editor and run the offline
  compile chain (`dmap` → `.proc`, `aas` for bot navigation), place entities,
  and light rooms.
- **Technical artists** — write `.material`, `.skin`, particle, and
  articulated-figure `.decl` files; export character models.
- **Audio designers** — sound definitions as declarations, mixed through the
  OpenAL backend.
- **Tools programmers and generalists** — the offline compilers, the GUI system,
  and the save-game and demo machinery.
- **Network engineers** — LAN/Internet netcode with client and server in one
  process, plus dedicated servers.

> **Come back to this.** Every discipline touches a different boundary: the
> designer touches the data, the artist the declarations, the programmer the
> DLL and the tools, the audio person the sound decls.

## The lesson

> DOOM 3 is the answer to "what happens when an engine stops being a game you
> can poke and becomes a machine that runs games?" The answer: it grows a real
> boundary — a core that owns the clock and the pixels, and a plug-in that owns
> the world and the rules. Underneath everything ticks a fixed 60 Hz heartbeat,
> so whatever appears on screen, the game always thinks at 60 Hz.
> **Interpretation:** the boundary and the heartbeat are the two ideas worth
> taking from id Tech 4 into any engine job, native or web.

**Dig deeper:** official source — [https://github.com/id-Software/DOOM-3](https://github.com/id-Software/DOOM-3)
· the games are still sold on Steam ([DOOM 3](https://store.steampowered.com/app/9050/),
[Resurrection of Evil](https://store.steampowered.com/app/9070/)) · the framing
for this whole folder — [software-is-the-medium](../00-software-is-the-medium.md).
