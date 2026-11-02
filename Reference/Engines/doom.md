---
type: Reference
title: Case Study — DOOM (id Tech 1)
description: The 1993 engine that started the 3D-shooter era — a BSP world, a software rasterizer, a fixed 35 Hz tick, and a WAD-driven data design — read as one fill of the universal software skeleton.
generated: { by: kilocode/subagent, at: 2026-11-01T18:20:00Z }
---
# Case Study — DOOM (id Tech 1)

This is one of the per-engine case studies that live in the folder level above —
each one takes a real engine, takes it apart, and shows that it is one fill of
the universal five-part skeleton from [Software Is the Medium](../00-software-is-the-medium.md)
(see also [`01-common-structure.md`](../01-common-structure.md) for all ten engines
mapped onto the same skeleton, and [`02-world-models.md`](../02-world-models.md) for
how engines organize the game world). No programming is needed to read this;
every term is defined where it first appears.

---

## 1. What it is

**DOOM** is the 1993 first-person shooter by id Software that made the genre
mainstream. It is not a library you plug into your own program: the *engine and
the game are one inseparable program*, written in C, that takes the whole world
and a player and runs on one CPU — there is no graphics card involved. The two
things that define how it works are its **BSP tree** (the level geometry
pre-sorted so a CPU can draw it fast) and its **thinker list** (every enemy,
door, and projectile is a small object that "thinks" — steps itself — on a fixed
clock tick). Everything the game ships in — levels, textures, sprites, sounds,
monster behavior tables — travels in a **WAD archive**, a single data file
format, so players could build entire new levels and games by *replacing data
files*, never touching the program. That last idea is why twenty-five years of
mods, editors, and source ports exist.

**Era and pedigree.** Original release December 1993; the "linuxdoom-1.10"
source tree is the December 1997 publicity release of the Linux port (Carmack's
release note is dated `12-23-97`) later re-licensed under the **GNU GPL v2** —
the repo today is marked GPL-2.0. It only builds for Linux as shipped, but the
code was portable, which is exactly how the enormous DOOM source-port family
began. The engine is called **id Tech 1** — a name applied *retroactively* by
the community and industry; id did not use that numbering at the time.

**Why it matters.** DOOM was the game that taught millions that a 3D world
could run at playable speed on ordinary hardware, and it proved that shipping
the game as (mostly) data was the way to make a game live long. Its two
structures — a pre-sorted level tree and a list of self-ticking actors — became
the template for the engines that followed it in this folder ([Quake](quake.md),
[Quake III Arena](quake-iii-arena.md)).

> **Come back to this.** DOOM = one C program doing three jobs in a loop:
> collect input, advance the world in fixed steps, draw the view. Its two
> defining structures are the **BSP** (the level, pre-sorted for a CPU to
> draw) and the **thinker list** (living things as objects that step
> themselves). Everything else is data files in **WAD** archives.

---

## 2. How it's built and how it works

Think of the machine as four interlocking pieces.

**The level: a BSP tree.** Before play, a compiler tool ("the BSP builder")
splits each level into convex chunks called **subsectors** by binary space
partitioning ("BSP"): keep splitting space with planes until every remaining
piece is solid or empty and convex. The result is a tree the renderer can walk
*front-to-back*, always knowing what it has already drawn and what it can skip.
DOOM is famous for walking this tree with polar coordinates for clipping —
Carmack marked the approach "downright silly" in retrospect. Note what DOOM
**doesn't** use the BSP for: movement and line-of-sight checks poke the level's
flat list of wall segments and a pre-built **blockmap**; in the release notes
Carmack says plainly that the BSP "*could*" also have been used for environment
testing and "I didn't realize at the time" — a nice portrait of an engine being
improved piecemeal.

**The actors: the thinker list.** Everything that moves (the player, enemies,
projectiles, doors, flickering lights, crushers) is a `mobj_t` ("mobj" = moving
object) hanging on a linked list of "thinkers". Once per tick, the engine walks
the list and lets each thinker think: move, scan for the player, open, bob.
Enemy AI here is mostly line-of-sight checks and a random walk decided by
tables — the *behavior* is located in data lookup tables plus small C action
functions, not in a scripting language.

**Everything else: the WAD archive.** WAD ("Where's All the Data") files pack
levels, textures, sprites, sounds, and even the info tables that describe
monsters. Everything has an 8-character **lump** name; a header says whether the
file is an `IWAD` (the complete original game) or a `PWAD` (an add-on patch
people named "PWADs" after the format). Modding means swapping WAD files.

**The loop.** `D_DoomLoop` runs forever: sync the frame and drain device
events, run the simulation for as many fixed ticks as the clock owes, mix
positional sound, render the world into a screen buffer, flip the buffer to the
window, repeat. Because audio in the DOS era lived on a *separate sound server*
process, the PC speaker-to-hardware path was already modeled as a channel of IO
rather than part of the simulation.

Memory is managed by a special **zone allocator** (`z_zone.c`) — segments
marked as purgeable, so the engine could free and reload assets without
fragmenting its precious few megs.

> **Come back to this.** The machine is four pieces: a **BSP level** (static,
> pre-sorted), a **thinker list** (dynamic, self-updating actors), a **WAD**
> archive (everything as data), and a **tight directed loop** that reads input,
> steps the sim on a fixed clock, and draws. Small pieces, clear separation of
> *data* from *behavior*.

---

## 3. The five-part skeleton, filled for DOOM

The universal skeleton is: **state** (the persistent data), **logic** (the
rules run over it), **input** (what crosses into the machine), **output** (what
crosses out), **clock** (when processing happens). DOOM fills every slot with
small, concrete machinery — see [`01-common-structure.md`](../01-common-structure.md)
where this exact mapping is the reference row.

| Part | DOOM's fill |
|---|---|
| **State** | the static BSP world (nodes, subsectors, sectors, line defs) loaded from a WAD, **plus** the dynamic world: `mobj_t` actors on the thinker list, and the players |
| **Logic** | the **thinker list** (`p_tick.c`): once per tic, every actor steps itself — enemies move/attack via line-of-sight checks, doors and floors move, projectiles fly; collision and movement live in the `p_*` gameplay code |
| **Input** | keyboard and mouse → X11 events → `I_GetEvent` → `D_PostEvent` drops them into a small event queue → `G_Responder`/`M_Responder` turn accepted actions into a packed **`ticcmd_t`** ("tic command": movement, turning, firing, weapon switch) |
| **Output** | the **software rasterizer** drawing into a 320×200 8-color-palette framebuffer → `I_FlipScreen` ships it to the X11 window; mono positional audio through `s_sound.c` to the device; the menu/status-bar overlay |
| **Clock** | a **fixed 35 Hz tic** (`TICRATE` = 35): `I_GetTime` reads the wall clock and returns elapsed *tic* units; `TryRunTics` runs as many simulation steps as the clock owes (at least one), then rendering runs at the display's own rate |

One factual warning worth keeping: DOOM's classic logic rate is **35 ticks per
second** — Carmack himself calls it "DOOM's 35 hz timebase" in the release
notes, and the shipped `doomdef.h` defines `#define TICRATE 35`. Some secondary
write-ups say 70; the code and the author's own words say 35.

The lesson of the row: DOOM's clock is *fixed and decoupled* — the simulation
advances in identical 1/35-second chunks whether the monitor refreshes at 30,
60, or 90 Hz, which is exactly what makes its demos and networked play
reproducible across machines.

> **Come back to this.** DOOM is the smallest engine in this folder and it is
> also the whole skeleton in one place: BSP + mobj thinkers (state), thinker
> list (logic), X11 → ticcmd (input), software rasterizer → framebuffer
> (output), and a fixed 35 Hz tic (clock). Not elegant naming — just the
> skeleton, uncluttered, in one process.

---

## 4. A frame walk, end to end

Here is one trip around the loop in real engine terms.

1. **Input across the boundary.** The OS delivers keyboard and mouse events.
   `I_GetEvent` converts them (X11 scan codes, mouse deltas) into *game events*
   and `D_PostEvent` pushes them onto a ring-buffer event queue.
2. **Events become commands.** On the next tic, the engine drains the queue
   through `M_Responder` (menu) and `G_Responder` (game). Accepted actions are
   packed into a `ticcmd_t` — the single record of "what this player intends for
   this tic": run forward, turn, fire.
3. **Fixed-step simulation.** `TryRunTics` figures out how many tics the 35 Hz
   clock owes (and runs at least one), then `G_Ticker` walks the thinker list:
   enemies decide and move via line-of-sight checks, projectiles step, crushers
   and doors advance, the player's ticcmd is applied. Collision is checked
   against the world's lines and the blockmap.
4. **Audio IO.** `S_UpdateSounds` re-anchors positional sounds to the listener;
   `I_UpdateSound`/`I_SubmitSound` mix the near channels and push them to the
   output device.
5. **Render the state.** `D_Display` → `R_RenderPlayerView` →
   `R_RenderBSPNode` walks the BSP tree front-to-back, calling `R_Subsector` for
   each visible chunk: it collects the floor/ceiling planes and wall segments,
   adds nearby sprites, and skips anything the tree proves is back-facing.
   `R_DrawPlanes` rasterizes walls, floors, ceilings (per-band light shading,
   columns of constant distance); `R_DrawMasked` draws the billboard sprites —
   monsters, items, decorations — into the 320×200 framebuffer.
6. **Output to the eye.** `I_FlipScreen` copies the framebuffer to the X11
   window (shared-memory `XShmPutImage` where available, plain `XPutImage`
   otherwise), and the monitor shows the frame.
7. **Multiplayer** (up to four players): each tic, `NetUpdate` also exchanges
   the tic commands with peers over IPX or UDP. Every machine runs the *same*
   simulation from the same tic commands — DOOM doesn't have a server; it has
   synchronized copies talking about intent.

So the pipeline inside the loop is: **events → ticcmd → 35 Hz thinker step →
BSP render → framebuffer flip**, and the loop then closes over the player at the
display. That is the exact same input → process → output shape from
[Software Is the Medium](../00-software-is-the-medium.md) running at human scale.

> **Come back to this.** One frame = pump events, fold intent into a
> `ticcmd_t`, run the fixed-step thinker list, mix sound, render the BSP
> front-to-back into the framebuffer, flip to the window. If you can say this
> sentence in DOOM's words, you can say the equivalent sentence in *any*
> engine's words.

---

## 5. World model: BSP + flat entities (the id family)

DOOM belongs to the "**BSP + flat entities**" family described in
[`02-world-models.md`](../02-world-models.md) — the world is *two different things*:

- **The static level** is the precomputed BSP tree, loaded at map start and
  never changed while playing.
- **The dynamic content** is a **flat list** of `mobj_t` thinkers, each with an
  absolute position. There is **no hierarchy** and no parent–child transforms:
  "attaching a weapon to a hand" is gameplay code *positioning* the weapon
  model at the hand every frame, not parenting.

**What this earns.** The BSP front-to-back walk *is* the culling: the renderer
never visits geometry the tree proves is behind the player, which is what made
playable 3D on a mid-1990s CPU. A flat list of actors is trivially cheap to
iterate, and levels are byte-budget small.

**What it costs.** The static world cannot be destroyed or regenerated at
runtime — no dynamic geometry. Every "attachment" is manual positioning done in
game code. And the machine really contains two world descriptions — the
renderer faces the BSP, the sim faces the actor list — which is a genuine
source of complexity that every later id engine inherited and worked around.

> **Come back to this.** DOOM is the founding member of the **BSP + flat
> entities** family: a static pre-sorted level tree + a flat list of
> self-ticking actors, no hierarchy. It buys fast culling and tiny memory; it
> costs a static world and manual "attachment" work. (See
> [`02-world-models.md`](../02-world-models.md) for the family comparison.)

---

## 6. Notable patterns worth a career

These are the ideas from DOOM that still shape how engines (and many other
programs) are written.

- **Data-driven modding over code changes.** Levels, textures, sprites, sounds,
  and monster behavior tables are all *data* in WAD archives. Changing the game
  = replacing data; no recompilation, no risk to the engine. This is the
  ancestor of everything you will later hear called "content is data, tuning is
  data, and mods are data."
- **The think system.** A linked list of actors, each with a small self-step
  function, driven by the clock. This exact pattern is what later engines call
  `Update`/`Tick`; in DOOM it lives in `p_tick.c`. It is one of the most
  portable ideas in game programming — it shows up in Quake's QuakeC, in
  Unreal's `Tick`, and in modern ECS update systems.
- **Fixed timestep decoupled from display rate.** Simulation advances in fixed
  1/35-second chunks (`TICRATE`) no matter how fast or slow the machine draws;
  `TryRunTics` catches up when it runs behind. This is the root of the
  "fixed-step simulation, interpolation optional" discipline that fixed
  physics-running engines still use.
- **Everything is one serialized format.** The WAD is at once the asset pack,
  the level format, and effectively the save/demo container — one archive
  format means one loader `w_wad.c` and a huge mod community with one toolchain.
- **Deferred presentation.** Drawing completes into a buffer; `I_FlipScreen`
  then exposes it to the window in one move — double-buffered output, in
  miniature, in 1993.
- **Zone memory.** A tagged allocator that can *purge* blocks under pressure —
  an early lesson in treating RAM as a budget rather than an infinite heap.

> **Come back to this.** The career patterns here are durable: game content
> belongs in data (WAD), living actors are objects that think on a list,
> simulation runs on a fixed tick while display runs at its own rate, and one
> elegant archive format can power everything. You will meet all six again —
> bigger, renamed, and in new languages.

---

## 7. Who works with this engine

Place each discipline on the machine — see the "discipline map" in
[Software Is the Medium](../00-software-is-the-medium.md); the closest modern
parallels are in parentheses.

- **Level designers / mappers** — design the level; the build tools convert it
  into WAD lumps with the pre-sorted BSP and the blockmap. Level assembly is
  where the "this is data, not code" habit starts.
- **Artists** — author the sprites (DOOM famously rendered monster sprites from
  photographed/scanned models at several angles), the wall textures, the 256-color
  palette art that everything shares.
- **Audio designers** — craft the sound lumps; the engine positions, pitches,
  and pans them per listener.
- **Game designers** — tune enemy behavior and spawn tables in data, set
  difficulty, dial in the feel.
- **Programmers / engineers** — own the simulation, renderer, and netcode in C;
  structure the thinker logic; port and maintain (the entire modern source-port
  scene is this job, done by thousands of volunteers).
- **Modders** — the first big community to prove "ship the data, let the
  players ship the games"; a discipline all its own that grew into careers.
- **Technical support / release** — the sound-server and IPX/network setup
  were famously fiddly; packaging the right WADs and configuration is real work.

> **Come back to this.** Every discipline touches DOOM at a handoff point:
> mappers and artists feed the data files, designers tune the tables,
> programmers own simulation+renderer, and modders live entirely in the
> data layer. That "who feeds which slot" map is the same one you will use in a
> modern studio.

---

## 8. The lesson

> **The lesson.** DOOM is the whole software skeleton with none of the
> furniture moved in yet: a pre-sorted world (state), a list of things that
> step themselves (logic), events packed into commands (input), a software
> rasterizer plus a frame flip (output), and a fixed 35 Hz tic (clock) — all in
> one process, roughly a dozen C files deep. It is worth revisiting exactly
> because it is small enough to hold entirely in your head: when a modern
> engine feels bottomless, decomposing it into "what is DOOM-ish here" — the
> state, the actors, the data pack, the loop, the clock — still works as a map.
> And its one genuinely huge idea — make the game *data*, not code — is the
> idea you will spend your career inside.

**Dig deeper.** Official source release on GitHub: <https://github.com/id-Software/DOOM>
(browse `linuxdoom-1.10/`, `ipx/`, `sersrc/`, `sndserv/`; read `README.TXT`).
Background: [DOOM engine on Wikipedia](https://en.wikipedia.org/wiki/Doom_engine).
Companion case studies in this folder: [Quake](quake.md), [Quake III Arena](quake-iii-arena.md).