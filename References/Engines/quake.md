---
type: Reference
title: Case Study — Quake (id Tech 2)
description: The 1996 engine that went network-first and scripted — QuakeC bytecode game logic, a BSP+PVS world, client/server split, two renderers — read as one fill of the universal software skeleton.
generated: { by: kilocode/subagent, at: 2026-11-01T18:20:00Z }
---
# Case Study — Quake (id Tech 2)

This is one of the per-engine case studies in this folder. Each takes a real
engine apart and shows it is one fill of the universal five-part skeleton from
[Software Is the Medium](../00-software-is-the-medium.md), with
[`01-common-structure.md`](../01-common-structure.md) holding the cross-engine map and
[`02-world-models.md`](../02-world-models.md) explaining how engines organize the game
world. No programming is needed; every term is defined on first use.

---

## 1. What it is

**Quake** (released June 1996, id Software) is DOOM's successor and the engine
that turned three DOOM-sized ideas up a notch: it is **true 3D** (texture-mapped
polygon worlds with floors that can slope and stairs, dynamic lights, and
polygon monsters), it introduced **QuakeC** — a scripting language for the
*game rules themselves*, compiled to a `progs.dat` bytecode file and run on an
interpreter inside the engine — and it organized the game as **client and
server** from the start, even in single-player, so that the same machinery could
serve one player on one machine or thirty over the Internet.

**Era and pedigree.** The engine is **id Tech 2**, a retrospective label. The
1999 GPL source release (GNU GPL v2, per `readme.txt`) contains the complete
source for the **WinQuake / GLQuake** combined client+server, plus
**QuakeWorld** (`qwsv`, the dedicated server; `qw-qc/`, the game script source).
It requires the original *id1* game data (the shareware data works) and builds
for Windows/DOS/Linux. The renderer carries optional x86 assembly for the
software path — a `#define` makes it pure C at the cost of roughly half the
software-rendering speed, which tells you how hard the CPU budget was.

**Why it matters.** Three milestones in one engine, each still in daily use:
**gameplay as scripted data** (the birth of mainstream modding — Team Fortress,
Counter-Strike-style gameplay, total conversions, all began here), the
**dedicated server** as a first-class binary (`qwsv`), and the **client/server
architecture** that single-player Realtime QuakeWorld used — with the
client-side prediction that Quake III later refined. Quake is the bridge: the
whole world in one program (DOOM) on one side, the split client/server
machine (commercial online shooters, and Quake III in this folder) on the other.

> **Come back to this.** Quake = DOOM's shape made network-first: the world is
> still a static BSP level, but the *game* is a script (`progs.dat`, QuakeC)
> running on a virtual machine in the engine, and the whole thing is built as a
> client plus a server — sometimes in one process, sometimes on two machines.

---

## 2. How it's built and how it works

**The script inside the engine: QuakeC and the VM.** In DOOM, game behavior was
C code plus data tables. In Quake, the game rules (entity behavior, AI,
weapons, even the GUI logic of "how the game runs") are written in **QuakeC**, a
C-style language, compiled *offline* to a `progs.dat` bytecode file. At runtime
the engine runs a small **virtual machine** — `PR_ExecuteProgram` in the source —
which interprets that bytecode over a flat memory area (`pr_globals`). The
script calls back into the engine through a fixed table of **builtins**
(precache a model, spawn an entity, cast a trace line, play a sound...). This is
the first mainstream "mod without rebuilding the engine" design: a mod just
ships its own `progs.dat` (and maybe its own game folder via the `-game` switch).

**The world: BSP plus MDL models.** The level is still a **BSP tree** — here
format **BSP v29**, a WAD-like lump file containing geometry, textures, lighting,
nodes, leaves, and crucially a **PVS** (see below). Static level + a flat array
of **entities** (called **edicts**), where edict 0 is literally "the world".
Collision works by **hull traces**: the engine slides player boxes (a point, a
narrow box, a wide box, and a monster box) against the BSP's clip geometry.

**Client and server, one machine or two.** In regular (WinQuake/GLQuake)
single-player and LAN play, one process contains *both* a server (which owns and
simulates the world) and a client (which reads your input, sends it to the
server as `usercmd_t`, receives world updates, and renders). When the server is
local ("the loopback driver"), that handoff happens in memory. **QuakeWorld**
splits them for the Internet: a dedicated server binary `qwsv` (no renderer, no
input, no audio — just a world plus a UDP socket), and a separate client that
connects over UDP. `qwfwd` was a UDP proxy letting several local players share
one upstream connection.

**Two renderers, one game.** You could run Quake with a **software
rasterizer** (the classic `R_RenderView_` engine path that fills a surface
cache and scans edges — the path DOOM fans know) or with an **OpenGL
immediate-mode renderer** (`R_RenderView` in `gl_rmain.c`) that draws lightmaps
and dynamic lights directly. The game doesn't care which: the renderer is just
the output half of the machine. `SCR_UpdateScreen` composes the 3D view with the
status bar, console, and menus before the final blit or `SwapBuffers`.

**The loop.** `Host_Frame` runs the whole thing each frame: filter the time
(see the clock, next section), collect key/mouse, execute console commands,
pump the network, send your commands to the (local or remote) server, run the
server half (`SV_RunClients` → `SV_Physics` → `SV_SendClientMessages`), read
what came back, render, mix audio, repeat. The dedicated server instead loops on
a `select()` on its UDP socket, sleeping to a tick rate when idle.

> **Come back to this.** Quake's engine is four parts: a **QuakeC virtual
> machine** (the game as bytecode), a **BSP v29 + edicts** world with hull
> collision, a **client/server pair** (loopback in one process, or UDP across
> machines via QuakeWorld's `qwsv`), and two interchangeable **renderers**
> (software or OpenGL) behind one composite-to-screen path.

---

## 3. The five-part skeleton, filled for Quake

Same skeleton as DOOM — see [`01-common-structure.md`](../01-common-structure.md) —
but note where the fills shifted.

| Part | Quake's fill |
|---|---|
| **State** | the static BSP v29 world with its **PVS visibility data**, plus the `edict_t` array (edict 0 = the world object) holding every entity's state, plus the QuakeC global variables (`pr_globals`) that act as the script's working memory |
| **Logic** | `SV_Physics` steps every edict according to its `movetype` (client, push/pusher, none, noclip, step, toss/BOUNCE/FLY) against hull traces, and calls into the QuakeC VM (`PR_ExecuteProgram`) for entity AI, the world think, and everything the game rules need to do |
| **Input** | keyboard/mouse → `Sys_SendKeyEvents` + `IN_Commands` → folded into a **`usercmd_t`** (`CL_BaseMove`): move axes, view angles, buttons/impulse bits — a record of intent sent to the server |
| **Output** | the software rasterizer **or** the OpenGL renderer → `SCR_UpdateScreen` → final blit (`VID_Update`) or `SwapBuffers`; audio mixed per-channel in `S_Update` (`snd_dma.c`) and handed to a platform DMA driver; console/menu/status-bar overlays |
| **Clock** | **variable** frametime clamped to at most 1/72 s (`Host_FilterTime`), bounded to ≤0.1 s per frame; `sys_ticrate` (default 0.05 = 20 Hz) paces an idle/dedicated server; `sv.time` and the QuakeC `frametime` drive all simulation |

Notice the deliberate contrast with DOOM: DOOM's simulation ran on a *fixed* 35
Hz tick; Quake's classic engine ran the simulation on a *variable* frametime
(capped at 72 Hz) — QuakeWorld's client-side prediction was partly invented
because a variable server timing makes distant play worse. The clock choice is
the single most consequential fill of the skeleton, and this family shows both
answers within two releases of each other.

> **Come back to this.** Quake's skeleton: state = BSP+PVS world + edict array
> + QuakeC globals; logic = `SV_Physics` + the QuakeC VM; input = devices →
> `usercmd_t`; output = software-or-OpenGL renderer → screen, plus the audio
> mixer; clock = *variable*, clamped ≤72 Hz, with `sys_ticrate` pacing idle
> servers. Keep DOOM's fixed tick and Quake's variable tick side by side and
> you have learned the whole debate about "fixed vs variable sim time."

---

## 4. A frame walk, end to end

Follow one frame through regular (combined) Quake, then note what QuakeWorld
adds. All names are the real engine functions.

1. **Input collected.** `Sys_SendKeyEvents()` drains keyboard events;
   `IN_Commands()` reads the mouse. Both update engine key/mouse state.
2. **Intent packed.** `CL_BaseMove` folds that state into a `usercmd_t` —
   forward/strafe speeds, view angles, buttons. `CL_SendCmd` ships it: to the
   in-process server over the **loopback driver** in single-player, or over UDP
   to a remote server (`clc_move` message).
3. **Console and network pumps.** `Cbuf_Execute()` runs queued console
   commands; `NET_Poll()` services sockets; `Host_GetConsoleCommands()` picks up
   typed input.
4. **Server half.** `Host_ServerFrame()`: `SV_RunClients` accepts incoming
   commands; **`SV_Physics`** advances the world — it first calls the QuakeC
   `StartFrame` program, then steps every edict by its `movetype`, tracing the
   player hull and projectiles against the BSP. `SV_SendClientMessages` packs
   the resulting state as `svc_*` messages.
5. **Client reads, interpolates.** `CL_ReadFromServer` parses the server's
   messages into the client's entity list. **`CL_LerpPoint`** interpolates the
   last two server states so rendering moves smoothly between updates.
6. **Draw.** `SCR_UpdateScreen` → `V_RenderView` sets the camera ("refdef") →
   `R_RenderView` (`R_MarkLeaves` walks the BSP with the PVS to find what is
   potentially visible; world surfaces fill from the surface cache, alias
   models, the view-model weapon, particles) — in the software path the surface
   cache rasterizes into the backbuffer; in the GL path the same scene draws in
   immediate mode.
7. **Present** — software: `VID_Update` blits the backbuffer; OpenGL:
   `GL_EndRendering` → `SwapBuffers`.
8. **Sound** — `S_Update` spatializes and mixes channels against the listener
   origin and hands the buffer to the platform driver; then repeat.

**QuakeWorld's addition: prediction.** With the server on another machine, your
movement would lag one network round-trip. So the QW client runs the *same*
player mover locally (`cl_pred.c`/`pmove.c`) — as soon as you send a move it is
already applied on screen — and the server remains authoritative, correcting
discrepancies with deltas. This "move instantly, snap to authority" is today's
standard online-shooter technique.

> **Come back to this.** The Quake frame: input → `usercmd_t` → loopback or
> UDP → `SV_Physics` (QuakeC inside) → `svc_*` messages → client interpolates →
> `V_RenderView` (software or GL) → `VID_Update`/`SwapBuffers` → screen; in
> QuakeWorld, the client also predicts its own movement and the server
> overrules via deltas. That is the exact same pipeline as DOOM's, now split
> across a wire.

---

## 5. World model: BSP + flat entities (the id family)

Quake is the second member of the **BSP + flat entities** family
([`02-world-models.md`](../02-world-models.md)): a static, precomputed BSP level, and
a flat array of absolutely-positioned entities with **no transform hierarchy**.

**What changed from DOOM: the PVS.** BSP v29 carries a per-leaf **potentially
visible set**: for every leaf of the tree, a precomputed list of which other
leaves *could* be visible. At runtime `R_MarkLeaves` walks the BSP and marks
only leaves in the PVS — the renderer never even visits geometry that cannot be
seen. The PVS is used for rendering culling *and* (in QuakeWorld) for deciding
which entity deltas to send to a client. Culling that is decided once at build
time instead of every frame is the family's superpower.

**What it earns.** Brutal culling speed (playable software 3D in 1996), tight
and simple hull collision against static geometry, and flat entity storage that
iterates as a cheap loop.

**What it costs.** Same debts as DOOM, bigger: the level is immutable at
runtime (no destructible worlds), there is no hierarchy (weapons/doors are all
positioned by code), and the engine genuinely contains *two* world models — the
sim faces the edict array, the renderer faces the BSP — which is why Quake's
renderer and gameplay code feel like two programs laid on top of each other.

> **Come back to this.** Quake solidified the id family's model — static BSP +
> flat entity array, no hierarchy — and added its crown jewel, the **PVS**: a
> build-time-computed "who can see whom" table that makes rendering and network
> culling nearly free. That trade (static world + precomputed visibility in
> exchange for runtime dynamism) is why the family was unbeatable on 1990s
> hardware and remains a great mental model for spatial culling today.

---

## 6. Notable patterns worth a career

- **QuakeC: gameplay as scripted, interpreted data.** Game rules as `progs.dat`
  bytecode behind a builtin table is the direct ancestor of every "scripted
  gameplay layer" in the industry (and of Quake III's `.qvm` modules in this
  folder). The career lesson: decide *what is engine* and *what is game*, and
  keep the game replaceable.
- **Client/server from day one.** Even a single-player Quake is a client
  talking to a server over the loopback driver. Putting the network seam in the
  middle *of your own loop* means the same binary scales from solo to LAN to
  Internet; QuakeWorld's dedicated server (`qwsv`, headless) made online
  competitive play practical.
- **PVS culling.** Precompute "what can see what" once offline, then turn that
  into runtime culling and network message pruning. The pattern generalizes
  (occlusion data, visibility sets) far beyond this engine.
- **Interpolation and client-side prediction.** `CL_LerpPoint` smooths between
  server updates; QW's `CL_PredictMove` runs the mover locally and lets the
  authoritative server correct via deltas. Latency hiding is a discipline, not
  an optimization — see the "latency" discussion in
  [Software Is the Medium](../00-software-is-the-medium.md).
- **Reliable-over-unreliable networking.** `net_chan.c` rides one reliable
  message per UDP packet with sequence/ack handling and retransmission — the
  standard trick for getting order/guarantees on top of a fast lossy channel,
  still used by modern online games.
- **cvars + console commands as the whole configuration surface.** Every knob
  (speed, FOV, network) is a `cvar_t`; everything persists to `config.cfg`.
  Data-driven configuration, again.
- **Determinism via VCR recording.** `Host_InitVCR` could record time and input
  to a `quake.vcr` file and replay the same simulation — an early determinism/
  debug harness, ancestor of today's demo and replay systems.

> **Come back to this.** The career bundle: gameplay as scripted data (QuakeC),
> client/server even in solo play (loopback), precomputed visibility (PVS),
> latency-hiding (interpolation + prediction), reliable-over-unreliable
> networking, cvar-driven configuration, and record/replay determinism. Nearly
> every later shooter engine is a combination of these six in a new uniform.

---

## 7. Who works with this engine

- **Level designers / mappers** — author the level in an editor; the build
  pipeline compiles it into the BSP + PVS format the engine loads. Understanding
  "the compile computes visibility, so the shape of the map decides culling" is
  part of the craft.
- **QuakeC programmers / modders** — write the actual game: AI, weapons,
  movement, entities. This was the first huge "anyone can make the game" door
  and it created careers.
- **Artists / animators** — make the alias (MDL) polygon models and their
  animation frames, palette-mapped textures for walls, the view-model weapon,
  the 2D art for the status bar.
- **Audio designers** — craft the positional sounds that QuakeC triggers
  (sound calls in the script, spatialized per entity, looped ambients).
- **Engine programmers / porters** — C and some assembly; own the renderer(s),
  the VM, collision, and netcode; maintain builds across sound/GL backends.
- **Server administrators** — run `qwsv` with `-game` mods and cvars, manage
  the master-server heartbeats, keep a comfortable battle going on LAN/Internet.
- **Technical artists / tool makers** — upload the modeling→MDL pipeline, the
  level compile chain, the QuakeC macro libraries.

> **Come back to this.** Quake is where the modern discipline map took shape: a
> separate gameplay-programming role (QuakeC) fed the game slot, artists fed the
> model/texture pipeline, mappers fed the BSP compiler, and a system operator
> role appeared for dedicated servers. Recognize the feeder/owner split from
> [Software Is the Medium](../00-software-is-the-medium.md) and you can place any
> team member.

---

## 8. The lesson

> **The lesson.** Quake is DOOM's skeleton with two walls knocked out: the game
> rules left C and became interpreted bytecode (QuakeC/`progs.dat`), and the
> loop split into a client and a server that can live in different processes.
> Everything else — state as BSP + flat entities, the frame pipeline, the
> discipline of culling — carried over and gets bigger. It is the study that
> answers the question "how do I make a game that other people can change and
> play over a wire?" — and the answers (script the rules, dedicate the server,
> predict on the client, precompute visibility) are still the answers. When a
> modern project has a "gameplay layer" and a "network codec", it is speaking
> Quake's language.

**Dig deeper.** Official source release on GitHub: <https://github.com/id-Software/Quake>
(browse `WinQuake/`, `QW/`, `qw-qc/`; read `readme.txt`, `gnu.txt`). Background:
[Quake engine on Wikipedia](https://en.wikipedia.org/wiki/Quake_engine) and
[QuakeWorld on Wikipedia](https://en.wikipedia.org/wiki/QuakeWorld). Companion
case studies in this folder: [DOOM](doom.md), [Quake III Arena](quake-iii-arena.md).