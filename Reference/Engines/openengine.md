---
type: Reference
title: Case Study — Open Engine
description: A modern community-owned alpha engine — a data-oriented archetype ECS at its core, a GPU-driven renderer built from a render-pipeline asset into a per-frame RenderGraph, an RHI with Vulkan/Metal/DirectX12/WebGPU backends, hot-reloadable C# scripting, and bundled MCP tools for AI agents.
generated: { by: kilocode/subagent, at: 2026-11-01T18:40:00Z }
---

# Case Study — Open Engine

Open Engine is a modern, community-owned C++20 game engine in early alpha that
is built on ideas that look like the future: a **data-oriented ECS** (no classic
scene graph), a **GPU-driven renderer** compiled from a render-pipeline asset
into a per-frame render graph, an abstract RHI with Vulkan, Metal, DirectX12,
and WebGPU backends, hot-reloadable C# scripting, and bundled
**MCP** (Model Context Protocol) tools so AI agents can drive the running
editor. It exposes the whole engine as open source (MIT) with the explicit
promise that a community-owned engine cannot change its terms underneath your
game. This case study shows the five-part skeleton from
[../00-software-is-the-medium.md](../00-software-is-the-medium.md) expressed as ECS
tables and job waves — and treat every detail as alpha-grade truth that may
shift as the engine matures.

## 1. What it is

Open Engine (**OpenEngine**) is a modern, high-performance, open-source game
engine released in early access under the MIT license, built "for the
community, by the community, with the goals of bringing power, scale, ease of
use, and true ownership to game developers." It ships multiple programs from
one codebase: the **engine library**, a cross-platform **editor app**, a
**player runtime** that the editor exports games with, and a **web build** — the
same engine running in the browser on WebGPU (documented at
[openengine.dev](https://openengine.dev)). It targets Windows (x64 and ARM64)
as primary, plus macOS (native Metal), Linux, and Steam Deck.

Key terms:

- **Alpha:** an early release — per the project README, APIs and file formats
  may change between releases. Everything you learn can move.
- **Community-owned:** governed and steered by its community rather than a
  vendor; MIT means no royalty, no lock-in, and no terms that can change
  underneath your game.
- **MCP (Model Context Protocol):** a standard way for an AI assistant to call
  tools in a running program; here it lets agents inspect and drive the editor.

**Why it matters.** OpenEngine is a working public example of where engine
architecture is heading — data-oriented ECS ("state is a database"), GPU-driven
rendering, render graphs, integrated hot reload, and agent-assisted tooling,
all in a codebase small enough to genuinely read. For students it answers "what
does a *modern* engine actually look like inside?" in current terms; for the
industry it is an artifact of a movement arguing that ownership of your
toolchain is a feature, not a footnote. The shared structure mapped in
[../01-common-structure.md](../01-common-structure.md) holds here too — the slots are
just filled with very modern machinery.

> **Come back to this.** Open Engine is a modern, MIT, community-owned C++20
> engine (alpha) shaped around four bets: ECS as a database core, GPU-driven
> rendering behind a render-pipeline asset, a multiplatform RHI
> (Vulkan/Metal/DX12/WebGPU) including the browser, and hot reload + MCP-driven
> AI tooling.

## 2. How it's built and how it works, in plain language

**The core is a data-oriented ECS — a world that is a database, not a tree.**
In an ECS (entity-component-system), an **entity** is just an ID number. Its
data lives in **components** — arrays of plain values stored beside each other
(all transforms in one array, all velocities in another, contiguous memory).
**Systems** are plain functions that run each frame over every entity holding a
given set of components ("for every entity with Transform + Velocity, integrate
movement"). OpenEngine uses **archetype tables** — groups of entities that
share the same component layout — and schedules systems as parallel **job
waves**. Entities have no parent/child transforms by default; hierarchy, if you
need it, is data you reconstruct.

**Deferred commands.** Because systems may run in parallel, world changes are
not made instantly. Code requests spawn/despawn/mutation through a **deferred
command queue** that is flushed once per frame — a single, safe moment when the
world actually changes. Two safety rails — a component *dirty feed* and
lifecycle events — announce that data changed.

**Rendering: GPU-driven, with the pipeline defined by an asset.** Culling and
animation are pushed to the GPU: a **GPUScene** holds uploaded world data,
**HZB** (hierarchical-z-buffer) occlusion culling runs on the GPU, and
**bindless resources** let the GPU reference resources by index instead of
binding state. The frames themselves come from a **render-pipeline asset** — a
blueprint of passes (forward-plus, sky, shadows, post effects) — that the
engine's `FrameOrchestrator` compiles each frame into a **RenderGraph** (a
graph of passes with resources flowing between them), turns into command lists,
and hands to the **RHI** (Render Hardware Interface): an abstract device with
**Vulkan** (primary desktop), **Metal** (macOS), **DirectX12**, and **WebGPU**
(web) backends.

**Everything is modules, and a lot of it hot reloads.** The engine is a stack
of ~60 small static-library modules, each registering into the runtime. Assets
flow through a real **asset database** — a SQLite derived cache plus a JSONL
asset store with file watching — so content changes hot-reload while the game
runs. **Gameplay scripting is C# on .NET** with integrated hot reload (an
out-of-process compile server rebuilds and swaps new assemblies in live);
native C++ scripting is also available, and packaged games can use
NativeAOT-precompiled scripts.

**Physics, audio, UI, and input as modules.** Physics wraps **Jolt** through a
`PhysicsECS` bridge that connects physics bodies to entities; audio is a thin
**miniaudio** backend updated once per frame; UI is **CSS/XML-driven markup**
rendered into the render graph (the editor itself is built this way); input
goes GLFW → a per-window `WindowInputRouter` → an **InputSystem** of actions
and contexts (semantic named actions, not raw keys).

**Honest gaps.** This alpha's engine core ships **no networking/netcode** —
no sockets, no replication. Everything else is present; that slot is empty.
(The bundled MCP server is a localhost tooling bridge, not game networking.)

> **Come back to this.** Architecture in one breath: ECS archetype tables are
> the world; systems run in parallel job waves with deferred commands flushed
> once per frame; a render-pipeline asset is compiled each frame into a
> RenderGraph; an RHI picks Vulkan/Metal/DX12/WebGPU; and modules + hot reload
> (C#, assets, shaders) plus MCP make the whole thing fast to iterate and
> agent-drivable. No netcode in core — yet.

## 3. The five-part skeleton, filled

| General part | Open Engine's terms |
|---|---|
| **State** | ECS archetype tables — entities as IDs, components in contiguous arrays — plus assets in the asset database. There is no scene graph; the runtime "scene" is the ECS world, consumed by GPU-side structures the renderer builds and refits each frame. |
| **Logic** | ECS systems over component sets, scheduled as parallel **job waves**; deferred commands flush world changes once per frame; gameplay and editor logic run in application `Update(dt)`; C# scripts on .NET with hot reload; Jolt physics bridged to entities. |
| **Input** | GLFW events → `WindowInputRouter` (per-window chain) → `InputSystem` actions and contexts (semantic named actions with bindings) → application `Update(dt)` mutates the ECS world. |
| **Output** | Rendering ECS systems extract draw data → `FrameOrchestrator` builds the RenderGraph from the render-pipeline asset → RHI device command lists → swapchain present (Vulkan/Metal/DX12/WebGPU); audio via `AudioSystem` → miniaudio; CSS/XML UI rendered into the render graph; no networking to send. |
| **Clock** | Engine-owned frame: `Application::Tick` with a variable `dt` from a steady clock, an optional frame cap or fixed frame rate, and a headless mode that ticks without windows. |

> **Come back to this.** The skeleton fills as: ECS archetype tables and the
> asset database are the state, ECS systems in job waves plus C# gameplay are
> the logic, GLFW → InputSystem actions are the input, the RenderGraph → RHI →
> swapchain is the output, and the clock belongs to the engine's `Tick`.

## 4. A frame walk, end to end

One frame, in engine terms, plain language:

1. **Tick.** The application runs a platform loop that pumps GLFW events and
   then calls the engine `Tick()`.
2. **Timing.** `UpdateTiming` computes `dt` from a steady clock; FPS is
   measured over a sliding window for pacing.
3. **Input.** Gamepad polling routes gamepad state into the window router, and
   the `InputSystem->Update(dt)` processes that frame's actions and contexts.
4. **Application update.** The game or editor logic runs (`Update(dt)`),
   mutating the ECS world — spawning entities, setting components — through the
   deferred command queue, so parallel safety holds.
5. **Engine update.** The engine core passes butt: the asset manager drains the
   loading queue and applies file-watcher changes (hot reload); the audio
   system updates once per frame on the main thread; the ECS frame boundary
   arrives — `ProcessCommands()` flushes deferred commands (the world really
   changes now) and the component dirty-feed and lifecycle events swap; then
   the **rendering loop** runs the rendering ECS system schedule (job waves of
   systems preparing draw streams, GPU scene data, and view state); script
   main-thread tasks (C# hot reload) and native scripts tick.
6. **Render.** The host render path runs: device-recovery check → begin frame →
   find the active ECS camera and allocate a view (set HZB occlusion culling) →
   the `FrameOrchestrator` builds the frame's RenderGraph from the
   render-pipeline asset → the render graph executes into command lists → the
   RHI `device->Present()` → swapchain → window → monitor.
7. **Frame limiter.** An optional frame cap or fixed frame rate, then a
   precise-sleep/tail from the platform.

The round trip, plainly: your keystroke becomes a GLFW event, becomes an
InputSystem action, becomes gameplay/ECS mutations in application `Update`;
systems simulate; render systems extract; the RenderGraph compiles the frame;
the RHI hands it to the GPU; the swapchain shows it — and hot reload means the
C# and shaders that made this frame could have been edited seconds ago.

> **Come back to this.** A frame = pump events → compute `dt` → InputSystem →
> application `Update` (deferred world edits) → `EngineCore::Update` (assets,
> audio, ECS command flush + rendering job waves, scripts) → RenderGraph built
> from the render-pipeline asset → RHI present. The engine owns the clock; the
> app supplies the gameplay mutation.

## 5. The world model

OpenEngine is the study's **ECS** representative (see
[../02-world-models.md](../02-world-models.md)): the world is a database of archetype
tables, entities are IDs, and there is deliberately **no scene graph**. Concretely:
"entity 42 has Transform, Health, Renderable" means row 42 exists in a table
whose columns are those component arrays. Systems — not object methods — mutate
those rows each frame.

**What this shape earns:**

- **Cache locality and speed.** Iterating one contiguous component array is
  memory-friendly; the CPU (and GPU) streams data instead of chasing pointers.
- **Parallelism.** Systems that touch disjoint component sets are independent,
  so the scheduler runs them as job waves across cores; GPU-driven culling
  reads bulk data directly.
- **Runtime composability.** "Give this entity a physics body" is a data change
  (add a component), not a class change; entities can be rebuilt on the fly.
- **It is data.** The whole world is inspectable and serializable — scenes
  save/load as `.scene` files through reflection — and editors and tools treat
  state as a database.

**What it costs:**

- **No natural hierarchy.** Parenting must be rebuilt as components plus a
  system that walks the links — real machinery a scene graph gives you for free.
- **Authoring friction.** Artists and designers think in parents and children;
  engines that go ECS bolt a hierarchy-style editor on top (OpenEngine does).
- **Boilerplate.** Systems, queries, access policies, lifecycle events,
  deferred commands — substantial infrastructure before your first "hello
  world."

The recurring pattern from the companion: production engines increasingly
*blend* families — a scene graph for people over a data-oriented store for
machines. OpenEngine sits near the data-pure end: ECS at the core, a
hierarchy-friendly editor layered on top for humans.

> **Come back to this.** OpenEngine's world is true ECS: entities as IDs,
> components as contiguous arrays, systems iterating component sets in parallel
> job waves. It buys speed, parallelism, composability, and inspectability, and
> pays with no built-in hierarchy, some authoring friction, and real
> boilerplate — an editor layer restores human ergonomics on top.

## 6. Notable patterns worth a career

- **Archetype ECS + job waves.** Archetype tables, queries with access
  policies (telling the scheduler which systems may share cores), system
  schedules, and deferred commands. The lesson: enforce *how data is read and
  written* so the scheduler can parallelize safely — access-policy thinking
  foreshadows serious rendering and game-tech work.
- **GPU-driven rendering.** GPUScene (the world uploaded to the GPU), HZB
  occlusion culling, bindless resources (index by ID, not bind state), and a
  ray-tracing TLAS built/refitted from the ECS. Rendering stops being "CPU
  decides every draw call" and becomes "GPU decides from bulk data."
- **Render graph from a pipeline asset.** The frame is a graph of passes with
  resources flowing between them, produced from a blueprint asset. Render
  graphs are how modern renderers manage allocation and dependencies (Unreal's
  RDG is the famous sibling); "pipeline as data" is the engine-side twin of
  "level as data."
- **Module/plugin system.** ~60 small static libraries, each with CMake and
  unit tests, runtime registration, and optional packages (AI assistant, VCS
  integrations, post effects). Modular-by-default is what keeps a community
  codebase sane and reviewable.
- **Hot reload as a first-class feature.** C# on CoreCLR via an out-of-process
  compile server, hot-reload bridges for shaders/materials/meshes, and asset
  watching. Iteration measured in seconds — among the biggest quality-of-life
  wins in modern tools.
- **Asset database as technology.** A SQLite derived cache plus a JSONL asset
  store plus a reconciler plus file watching: assets are managed, observed
  data with dependency edges, not "files someone put in a folder." (The
  packaged player runs cache-less to stay lean.)
- **AI/MCP tooling and device-loss resilience.** A bundled MCP server/CLI lets
  AI agents drive the running editor, and the engine rebuilds a lost GPU device
  in place with ECS recovery and generation-stamped handles. The former
  previews agent-assisted workflows; the latter is the kind of
  fault-tolerance thinking platform work rewards.
- **Honest alpha discipline.** The README states APIs may change, tests live
  per module (Google Test), and networking is deliberately absent. Knowing what
  an engine *doesn't* ship, and saying so, is itself a professional habit.

> **Come back to this.** OpenEngine's transferable ideas: ECS with access
> policies and parallel job waves, GPU-driven culling and bindless resources,
> render graph + pipeline asset, modular libraries with registration,
> integrated hot reload, an asset database, MCP-based agent tooling, and
> device-loss recovery — plus honest alpha scoping (no netcode yet).

## 7. Who works with this engine

- **Engine programmers** first: ECS architects, RHI and systems programmers
  (Vulkan/Metal/DX12/WebGPU), render engineers writing GPU-driven culling,
  render graph nodes, and render features (sky, shadows, DDGI, volumetric
  clouds, fog, lens flare).
- **Gameplay programmers.** Write C# on .NET against the ECS; hot reload means
  compile → play in seconds. Native C++ scripting, and NativeAOT packaging for
  shipped games, are the other lanes.
- **Tools programmers.** Maintain the C# compile server, asset pipeline
  (parsers, importers, JSONL/SQLite stores), file watchers, and the web build —
  real jobs that look a lot like this project.
- **Technical artists.** Own render-pipeline assets, render features, and
  post-effect packages (chromatic aberration, DOF, film simulation); shaders,
  materials, and the GPU-driven budget.
- **Artists / world builders.** Work in the editor (itself CSS/XML UI), place
  and tune entities, set up materials and models through the importers; scenes
  persist as `.scene` data.
- **Designers.** Author gameplay through C# scripting and the editor; build
  CSS/XML UI for menus and HUD; tune via editable data rather than code.
- **Audio designers.** Place audio entities, route through the miniaudio-backed
  system, trigger from logic.
- **QA / automation / AI-tooling folks.** Drive the editor through the bundled
  MCP server and CLI; run headless ticks and per-module Google Test suites;
  exercise file-watching hot reload during testing.

**Career reality.** This is an alpha built by a small community — there are no
"OpenEngine developer" job boards yet. Careers here are (a) contributing to the
engine and its packages (real open-source portfolio work), (b) the
transferable specialization it trains — ECS, render graphs, RHI backends,
hot-reload tooling, MCP — which maps directly onto some of the most in-demand
game-tech specializations, and (c) adopting it as a base for indie or community
projects while tracking its changes. Expect breakage between releases; that is
what alpha means.

> **Come back to this.** Open Engine is developer-first: programmers own the
> ECS/RHI/render-graph core, technical artists own the render pipeline, and
> everyone else lives in the editor or in C# where hot reload and the asset
> database make iteration fast. Alpha means API churn: budget for it and track
> the docs.

## 8. The lesson

> **The lesson (the measure of understanding).** Open Engine demonstrates how a
> modern engine turns the five-part skeleton into visibly data-shaped
> machinery: ECS tables for state, systems for logic, job waves for
> parallelism, a GPU-driven render graph for output, and an engine-owned clock.
> Its four career-grade ideas — make state a database (ECS), make the frame a
> data pipeline (render graph + pipeline asset), make iteration instant
> (hot reload + asset watching), and make the engine agent-usable (MCP) — are
> exactly the ideas the industry's larger engines keep adopting. And its
> biggest honesty lesson: an engine is a bundle, not a complete system — this
> one ships everything except networking, and knowing what your platform does
> and does not include is a professional skill.

**Dig deeper.** Homepage [https://openengine.dev](https://openengine.dev) ·
Repository [https://github.com/Game-Crafters-Guild/OpenEngine](https://github.com/Game-Crafters-Guild/OpenEngine)
· Documentation starts in the repo's `docs/` directory (`docs/README.md`)
(all URLs verified 2026-11-01).