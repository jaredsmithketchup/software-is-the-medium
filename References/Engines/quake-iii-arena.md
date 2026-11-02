---
type: Reference
title: Case Study — Quake III Arena (id Tech 3)
description: The 1999 engine as networking + VM platform — dedicated servers, delta+Huffman snapshots, .qvm game modules, fixed 20 Hz server sim — read as one fill of the universal software skeleton.
generated: { by: kilocode/subagent, at: 2026-11-01T18:20:00Z }
---
# Case Study — Quake III Arena (id Tech 3)

This is one of the per-engine case studies in this folder. Each one takes a real
engine apart and shows that it is one fill of the universal five-part skeleton
from [Software Is the Medium](../00-software-is-the-medium.md);
[`01-common-structure.md`](../01-common-structure.md) holds the cross-engine map and
[`02-world-models.md`](../02-world-models.md) explains how engines organize the game
world. No programming is needed; every term is defined on first use.

---

## 1. What it is

**Quake III Arena** (released December 1999, id Software) is an engine whose
defining idea is: *everything that is "the game" is a separate module.* The
engine core is C code, but the **game logic**, the **client-side game view**,
and the **user interface** all ship as **`.qvm` bytecode images** — compiled
from C by bundled tools (a retargeted **LCC** C compiler plus the **q3asm**
assembler) and executed on a virtual machine the engine hosts. A mod replaces
the game/UI modules and the data archives (`pk3` files) and never touches the
engine binary. On top of that it is a ruthlessly focused online arena shooter:
the **dedicated server** is a first-class build (no renderer, no input, no
audio), the network protocol runs over UDP with **delta-compressed snapshots**
and client-side prediction, and the world is a static **BSP + patch + shader**
level — with curve surfaces and programmable surface effects — drawn through a
fixed-function OpenGL pipeline.

**Name and era.** Engine **id Tech 3** (a retrospective label), working title
"Trinity". The GPL source release (August 2005, GNU GPL v2; see `COPYING.txt`)
contains the engine, the game modules' C source, the VM toolchain (`lcc`,
`q3asm`), the map compiler (`q3map`), the map editor (`q3radiant`), and the bot
library — but **no game data** (the base game's `pk3` archives are not in the
release). Note the license caveat printed in the README: parts of the release
(zlib-derived unpackers, LCC, MD4, JPEG) carry their own non-GPL licenses.

**Why it matters.** Quake III is the engine as a **networking + VM platform**:
it proved that a game could be "just modules and data on top of a network
machine," it made **dedicated servers and esports-grade netcode** normal, and
its VM design is the direct ancestor of how scripting and sandboxing still work
in engines today. In this folder it is the mature point of the id line
(DOOM → Quake → Q3A): the client/server split of Quake, the fixed-timestep
discipline of DOOM, the script layer of QuakeC — all formalized, fast, and
packaged for hundreds of concurrent players.

> **Come back to this.** Q3A = "the game is a module." Engine C code hosts
> three virtual machines (`game`, `cgame`, `ui`) that hold the gameplay, the
> client view, and the interfaces; dedicated servers and UDP netcode with
> delta-compressed snapshots make it an online machine; everything else (data,
> modules) ships as replaceable `pk3` archives. It is Quake's split and
> DOOM's fixed-tick discipline, engineered for the competitive arena.

---

## 2. How it's built and how it works

**The VM module system.** The engine (one executable) loads up to three
bytecode modules at runtime through a uniform interface (`vm.c`): the **game**
module (server-side rules, physics, AI), the **cgame** module (client-side view,
prediction, effects, HUD), and the **ui** module (menus). Each runs on a
virtual machine that has three realizations you could pick at startup: a pure
**interpreter**, a **just-in-time compiled-to-native** path (x86/PPC), or a
native **DLL** — the *same* C module moves between platforms by recompiling to
bytecode, exactly the portability idea of QuakeC with the speed of compiled
code. The boundary is a numbered **syscall** API: modules call `trap_*`
functions (find files, render polygons, play sounds), the engine fields them,
and the module address space is a single checked byte segment. Q3A's README and
the community reviews agree that ~30% of the released code is this toolchain —
compiler, assembler, VM, map tooling — evidence of how central the "modules as
data" idea was.

**Client and server.** Architecturally strict: a **server** owns the world and
simulates it at a **fixed 20 Hz** (`sv_fps` default, validated in `sv_main.c`),
sending every client a **snapshot** of the entities and player state it needs —
delta-compressed against the previous snapshot, Huffman-compressed, over
sequenced reliable/unreliable UDP channels (`net_chan.c`). A **client** sends
its **usercmd stream** (button/aim/impulse) each frame, parses arriving
snapshots, **predicts** its own movement by re-running the shared player mover
(`Pmove` in `bg_pmove.c` lives in shared code used both sides), then builds the
render scene. The engine talks to the renderer through a plug-able interface
table (`refexport_t`), so a software or different renderer could be swapped in.

**Single player = bots.** The same split even hosts your single-player
"opponents": bots are fake clients injected into the server (`sv_bot.c` +
**botlib**), and navigation uses precomputed **AAS** (area awareness) data built
by the `bspc` map tool. The engine's "loopback networking" path lets client and
server run in one process over in-memory channels — Quake's trick from before.

**The world and the renderer.** Levels are compiled by `q3map` into **BSP
version 46** lumps including geometry, **PVS** visibility, lightmaps, curve
**patch meshes** (ground/sloped surfaces built from bezier patches), and
references to **shader** definitions. `.shader` text files describe surface
appearance as stages — textures, `tcMod` transforms, deformations, fog,
parallax-ish effects — consumed **identically** at runtime (`tr_shader.c`) and
offline during light/vis. Rendering is fixed-function OpenGL behind a
**front-end / back-end split**: the front end culls (BSP + PVS + dynamic-light
bits), builds a sorted list of **draw surfaces** (`R_AddDrawSurf`) and serializes
them into a **render command buffer**; the back end re-plays that buffer into
OpenGL calls (`qgl*` wrapper) — optionally on a second thread (SMP) — ending in
a buffer swap.

> **Come back to this.** Q3A's machine has four layers: the **VM module system**
> (game/cgame/ui as `.qvm` bytecode, one syscall API, three execution
> realizations), the **client/server pair** joined by UDP snapshots (fixed 20 Hz
> server, predicting client, bots as fake clients), the **BSP+patch+shader
> world** compiled offline by `q3map`, and the **front-end/back-end renderer**
> that turns a culled draw-surface list into OpenGL calls and a swap.

---

## 3. The five-part skeleton, filled for Q3A

The same skeleton as every engine (see [`01-common-structure.md`](../01-common-structure.md)),
now parceled across three VMs and two addresses on a network.

| Part | Q3A's fill |
|---|---|
| **State** | server: the BSP v46 world + patches + a `gentity_t` array (every entity); client: **snapshots** and an entity-state ring (`cg_ents.c`) plus `playerState_t`; shared **configstrings** carry server info, media lists, team setup |
| **Logic** | the **game VM** (`GAME_RUN_FRAME`, caught by the server's 20 Hz loop) runs rules, AI, and **`Pmove`** (the player mover in `bg_pmove.c` — the *same code* the client runs to predict); the **cgame VM** (`CG_DrawActiveFrame`) predicts the local player and builds the view; the **ui VM** runs menus — all talking to engine C through syscalls |
| **Input** | keyboard/mouse/joystick → platform layer (`Sys_QueEvent`) → a central **event queue** (`Com_EventLoop`) → `CL_KeyEvent`/`CL_MouseEvent` → folded into a `usercmd_t` ring (`cl_input.c`) and sent to the server |
| **Output** | the renderer **front end** (cull + sort) → **draw-surf command buffer** → **back end** (`RB_ExecuteRenderCommands`) → OpenGL (`qgl*`) → `GLimp_EndFrame`/`SwapBuffers`; audio via `S_Update` (+ `snd_dma.c` mixer) to DirectSound/ALSA; UI drawn by the UI VM through renderer traps |
| **Clock** | server: **fixed 20 Hz** (`sv_fps`, `SV_Frame` with a `sv.timeResidual` accumulator calling `GAME_RUN_FRAME`); client: renders up to `com_maxfps` (default **85**) — interpolation and prediction bridge the two rates |

The revelation of the row: the clock is a *pair*. The simulation's clock (20 Hz,
fixed, catch-up) and the presentation clock (up to 85 FPS, variable) run
independently, connected by server-authoritative snapshots, client-side
prediction, and time interpolation. That two-clock decoupling — fixed sim tick +
high-rate client render — is the modern recipe, and Q3A is one of its earliest
fully-realized examples.

> **Come back to this.** Q3A's skeleton: state = BSP+patches+`gentity_t` on the
> server, snapshots + entity-state ring on the client; logic = three VMs
> (game/cgame/ui) plus shared `Pmove`; input = `Com_EventLoop` → `usercmd_t`
> ring; output = front-end → command buffer → back end → OpenGL → swap, plus
> the audio mixer and UI; clock = the 20 Hz server tick (fixed) paired with the
> ~85 FPS client render (variable). Same five slots as DOOM — spread across two
> processes and three interpreters.

---

## 4. A frame walk, end to end

Follow one frame through a connected game, using the real names.

1. **Devices → events.** The OS hands the engine keyboard/mouse/joystick
   activity. The platform layer converts everything into event records
   (`Sys_QueEvent`, `SE_KEY`, `SE_MOUSE`...) pushed onto one central event
   queue — the same queue that carries network packets and console text, so
   every input is a journalable event.
2. **Pace the frame.** `Com_Frame` (called every frame from `main`) first paces
   itself: it spins in `Com_EventLoop()` until at least `1000/com_maxfps` ms
   have elapsed (default 85 FPS), then executes queued console commands.
3. **Server sim, on its own clock.** `SV_Frame` runs the fixed-timestep world:
   while `sv.timeResidual >= 1000/sv_fps`, subtract one tick (50 ms at the
   default 20 Hz) and **`VM_Call(GAME_RUN_FRAME, svs.time)`** into the game
   module — that frame runs `Pmove` for every active client, ticks entity
   thinkers, moves doors/items/rockets. Then `SV_SendClientMessages` builds
   per-client snapshots (delta-compressed) and ships them over UDP.
4. **Your intent, sent.** `CL_Frame` runs on the client: `CL_SendCmd` packs your
   latest `usercmd_t`s (delta + Huffman) and transmits them; `CL_SetCGameTime`
   advances the client clock.
5. **Server state, received.** Incoming packets are parsed by `CL_ParseServerMessage`
   → `CL_ParseSnapshot`, which applies the delta into `cl.snap`/`cl.nextSnap`.
6. **Predict and draw via cgame.** `SCR_UpdateScreen` drives the frame: the
   client's **cgame VM** runs `CG_DrawActiveFrame` — it **predicts** your player
   state by re-running `Pmove` locally on the newest commands, builds the
   camera (the **refdef**), fills render lists, and calls back into the engine
   via `trap_R_RenderScene`.
7. **Renderer front end.** `RE_RenderScene` culls: BSP traversal + PVS,
   dynamic-light bits per surface — everything becomes entries in a sorted
   **draw-surface list** (`R_AddDrawSurf`) serialized into a **command buffer**.
8. **Renderer back end.** `R_IssueRenderCommands` → `RB_ExecuteRenderCommands`
   (synchronously, or on the SMP thread) replays the buffer: tessellate patches
   and meshes, set shader state, draw 2D overlays.
9. **Swap.** `RB_SwapBuffers` → `GLimp_EndFrame` → `SwapBuffers` presents the
   frame. `S_Update` mixes the surround-sound field; the loop closes on the
   player.

> **Come back to this.** One Q3A frame, in order: devices → `Com_EventLoop` →
   pace to `com_maxfps` → `SV_Frame` (fixed 20 Hz `GAME_RUN_FRAME`) → snapshots
   out; client `usercmd` out → snapshot in → cgame prediction + refdef →
   `RE_RenderScene` → draw-surf sort → command buffer → back end → OpenGL swap.
   The pipeline is DOOM-shaped; the difference is that the simulation and the
   picture are now two machines talking over wires with prediction to hide the
   distance.

---

## 5. World model: BSP + flat entities (the id family)

Q3A completes the family from [`02-world-models.md`](../02-world-models.md): a static,
precomputed **BSP world** plus a flat array of entities with **no scene graph,
no transform hierarchy**.

- **Server world:** `gentity_t` array over the BSP **brush model and patch**
  collision (CM_* collision code traces against BSP planes and bezier patches).
- **Render world:** `msurface_t` lists from the loaded BSP (v46), with the
  shared **PVS** used to cull; drawings happen through the draw-surface command
  buffer rather than by walking the entity list.
- **Client world:** a **snapshot/entity-state ring** — the client does not
  simulate the world; it interpolates what the server's snapshots describe.

**What it earns.** The same family wins: brute-force-fast static culling (PVS),
tight collision vs a fixed environment, and a server world compact enough to
simulate dozens of players at 20 Hz. The **patch surfaces** and **shaders** are
the family's answer to "the world is static" — richer geometry and richer *
appearance*, still authored offline and still immutable while playing.

**What it costs.** All the family debts, plus one of the sharpest: the renderer
and the simulation face *different* world descriptions, and the client only
knows what the network told it — so anything not in the snapshot (fine
collision response, exact positions between updates) must be predicted or
interpolated, which is exactly why Q3A's netcode is the elaborate machine it is.

> **Come back to this.** Q3A is the mature id BSP+flat-entities machine: static
> BSP plus patches plus shaders = the level; `gentity_t` array = the server
> world; snapshot ring = the client world; and the renderer consumes a draw-
> surface command buffer, not the entity list. The cost of all that precomputed
> static speed is precisely the complexity later engines spend on *networking*
> (see [`02-world-models.md`](../02-world-models.md) family #2).

---

## 6. Notable patterns worth a career

- **The VM module system.** Game, cgame, and UI as `.qvm` bytecode behind one
  syscall API, with interpreter / compiled-to-native / DLL realizations — code
  as *data you ship and swap*. The pattern behind mod support, sandboxing, and
  hot-updatable gameplay layers you will meet in modern tools.
- **Delta + Huffman networking.** Bit-level message codecs, per-key deltas of
  entities/player state against a baseline, whole-message Huffman compression,
  sequenced reliable channels over UDP. This "send only what changed, compress
  the rest" bundle is how fast competitive netcode stays fast.
- **Explicit client/server split.** Carmack called the Q3 split of client
  presentation vs server logic "the right thing" (in an interview quoted in the
  community's canonical Q3A source review). The boundary between "what the
  server owns" and "what the client shows" is a software-architecture choice,
  not a network detail.
- **Dedicated server as a product.** A first-class headless build (no renderer/
  audio), remote console (rcon), master-server heartbeats, `sv_pure`
  checksum-policed "pure servers." Competitive multiplayer infrastructure as a
  discipline.
- **Fixed-timestep server + interpolated client.** The 20 Hz authoritative sim
  decoupled from a high-rate render clock, bridged by prediction and
  interpolation — the template for modern physics/networked games.
- **Shaders as data with one definition.** `.shader` files drive render
  appearance at runtime *and* are consumed offline during light/vis — one asset,
  two pipelines, no drift.
- **Bots as fake clients.** Simulated players that plug into the normal client
  slot (`sv_bot.c`/botlib) so single-player is just multiplayer with AI —
  a design trick worth copying for testing and filler opponents.

> **Come back to this.** The career bundle from Q3A: VM-sandboxed gameplay
> modules, delta+Huffman network compression, an explicit client/server split,
> dedicated-server product thinking, fixed-server/interpolated-client clocks,
> data-defined shaders shared between tools and runtime, and bots as fake
> clients. Name five modern multiplayer engines and you have seen half of these
> ideas re-expressed.

---

## 7. Who works with this engine

- **Mod programmers** — write the `game`/`cgame`/`ui` modules in C, compile them
  to `.qvm` bytecode, wrap updates in `pk3`s; never touch the engine. The
  purest example of the "gameplay programmer" role from
  [Software Is the Medium](../00-software-is-the-medium.md).
- **Level designers / mappers** — build maps in Q3Radiant against the BSP +
  patch + shader pipeline; the shape they make *is* the culling and collision,
  and PVS-quality is decided by their geometry.
- **Shader / material technical artists** — author `.shader` files shared by
  the editor, the light compiler, and the runtime renderer.
- **Artists / animators** — model `.md3` models and their surfaces, the 2D art
  for the HUD/menus, the textures the shaders drive.
- **Engine programmers** — C on the core: VM, network, renderer front/back end,
  BSP/PVS; work on Windows/Linux/Mac ports.
- **Server administrators / community ops** — run dedicated servers with cvars
  and configs, enable `sv_pure`, run rcon, keep leagues and kill-and-fill
  servers stable — the dawn of professional esports infrastructure.
- **Tooling engineers** — the compiler/assembler (`lcc`, `q3asm`) and the map
  toolchain (`q3map`, `bspc`) were as much a product as the game; that lesson
  (ship the pipeline) persists in every modern studio.

> **Come back to this.** Q3A's team map is the modern one: gameplay programmers
> live in the VM layer, technical artists own shaders, mappers own the compiled
> world, server ops own the running game, and tooling engineers ship the
> pipeline. Every role feeds a *module or data file* — never the engine binary.

---

## 8. The lesson

> **The lesson.** Q3A is the proof-of-concept for the architecture the industry
> spent the next twenty years building: make the machine two machines (client,
> server), put the gameplay in sandboxed modules on top (game/cgame/ui VMs),
> make the world mostly static data plus shaders so it can be authored and
> culled efficiently, and spend the real engineering budget on *network
> compression, prediction, and latency hiding* (20 Hz fixed sim, delta+Huffman
> snapshots, client prediction, interpolation). Read it as the answer to the
> question "what must be true for two hundred people to fight in one world
> without feeling the wire?" — sandboxed logic, split clocks, and
> delta-shipped truth. Those structures are as alive today as they were in
> 1999.

**Dig deeper.** Official source release on GitHub: <https://github.com/id-Software/Quake-III-Arena>
(browse `code/`, `q3map/`, `q3asm/`, `lcc/`, `q3radiant/`; read `README.txt`).
Two carefully readable companions: the
[Quake 3 source-code review (Fabien Sanglard)](https://fabiensanglard.net/quake3/index.php)
("Quake 3 Source Code Review: Architecture") and
[id Tech 3 on Wikipedia](https://en.wikipedia.org/wiki/Id_Tech_3); the
community-maintained continuation is [ioquake3](https://github.com/ioquake/ioq3).
Companion case studies in this folder: [DOOM](doom.md), [Quake](quake.md).