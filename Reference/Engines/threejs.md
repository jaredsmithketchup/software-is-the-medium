---
type: Reference
title: Case Study — three.js (JavaScript 3D Library)
description: The opposite extreme of a game engine — a pure rendering library with an Object3D scene graph, backend-agnostic WebGL2/WebGPU renderers, and the application owning the loop, the input, and the clock.
generated: { by: kilocode/subagent, at: 2026-11-01T18:30:00Z }
---

# Case Study — three.js (the library that is not an engine)

three.js is deliberately the smallest possible "3D machine": give it a scene,
a camera, and a renderer, and it turns them into pixels. Everything else —
the loop, the input, the game rules — is the application's job. That makes
it the clearest demonstration in this folder of the line between an *engine*
and a *library*.

## What it is

- **What it is:** a JavaScript 3D **library**, not a game engine. Distributed
  as the npm package `three`; source lives at
  [github.com/mrdoob/three.js](https://github.com/mrdoob/three.js).
- **Era and origin:** begun by Ricardo Cabello ("mrdoob") around 2010, growing
  from a WebGL helper into the de-facto base for 3D on the web. The LICENSE
  reads © 2010-2026 three.js authors; the library is MIT-licensed.
- **Positioning:** the opposite extreme from DOOM 3. The core has **no game
  loop, no input system, no physics, no networking, and no UI** — it ships a
  scene graph, math, materials, loaders, and renderers, and then stops. The
  app owns all the rest.
- **Why it matters here:** it is the reference case of "the app owns the
  clock" in the [common structure](../01-common-structure.md) table, and the
  skeleton below shows the consequence.
- **Source basis:** this case study reads the library at the r186 line
  (version 0.186.0).

> **Come back to this.** An "engine" is not a fixed package of features; it is
> a division of labor. three.js draws the line at "scene in, pixels out" and
> leaves the schedule to you — the minimal definition of a 3D machine.

## How it's built and how it works, in plain language

Think of three.js as a well-stocked tool cupboard plus one assembly machine.
The assembly machine is the renderer; the cupboard holds the scene graph, the
math, the materials, and the loaders.

**Everything renderable is an Object3D.** The scene is a tree of `Object3D`
nodes in parent→child relations. A `Mesh` is an `Object3D` carrying a geometry
(the vertex data) and a material (how it is lit and coloured). Lights, cameras,
and plain groups are nodes in the same tree, and moving a parent moves its
whole subtree, because world transforms are computed by walking the tree.

**Renderers come in two generations.** The classic `WebGLRenderer` (WebGL2
onward — WebGL1 is gone) is a self-contained GL state machine that assembles
and compiles GLSL shaders. The newer `WebGPURenderer` sits on a
**backend-agnostic core**: an abstract renderer plus a `Backend` interface with
WebGPU and WebGL implementations, so one high-level code path can target
either API (and fall back to WebGL2 when WebGPU is unavailable).

**Materials, not a pre-built look.** The classic path assembles GLSL from
shader chunks behind higher-level materials (MeshBasicMaterial,
MeshStandardMaterial, ...). The modern path is node-graph materials (TSL) —
shader authoring as connected nodes. Both cache compiled programs per
material/lighting combination.

**Loaders are in core; everything extra is an addon.** `src/loaders` handles
the generic loading pipeline (fetching, caching, parsing into textures,
geometries, materials). Format loaders (glTF, OBJ, FBX, and many more) and
conveniences like camera controls and physics wrappers live in
`examples/jsm/` as **addons** — optional helpers, not engine features.

**What is missing on purpose:** no game loop, no input, no physics, no UI, no
networking. All of that is application code — or an addon borrowed from the
community. That is the design; three.js never pretends to be a finished game
engine.

> **Come back to this.** The same five-part machine as DOOM 3, but the states
> and output are the library's and the clock, input, and logic are yours. Naming
> who owns each part is half of understanding any engine.

## The five-part skeleton, filled in this engine's terms

| Part | What fills it in three.js |
|---|---|
| **State** | the `Object3D` scene graph — meshes, geometries, materials, textures, lights, cameras |
| **Logic** | **the application's code.** The library supplies the render traversal, the math (transforms, raycasting, frustum culling) and `AnimationMixer` for skeletal/keyframe animation; gameplay logic lives in the app |
| **Input** | **none in core.** The app wires browser/DOM events; addons such as `OrbitControls` exist to connect mouse and keyboard to a camera |
| **Output** | `renderer.render(scene, camera)` → render lists → WebGL2 (classic renderer or backend fallback) / WebGPU → canvas pixels → browser compositor |
| **Clock** | **owned by the application.** There is no engine loop. The app calls `requestAnimationFrame` and re-renders each tick, or uses `renderer.setAnimationLoop(callback)` as a thin wrapper. The `Clock` utility only measures time deltas for the app to use |

Three of the five slots — clock, input, and most logic — belong to the
application. That is the whole point: a library ships the machine; the app
ships the schedule.

> **Come back to this.** Flip the DOOM 3 skeleton and you get three.js: fixed
> 60 Hz heartbeat there, "render whenever the browser calls me" here. Neither is
> wrong — they are different answers to the same question, *who beats the clock?*

## A frame walk, end to end

Trace one frame of a typical application — input, update, render, screen:

1. **Input:** the browser dispatches mouse, keyboard, or touch DOM events. The
   application reads them itself or hands them to an addon control (say
   `OrbitControls`), which mutates the camera's transform. There is no engine
   event queue; the application is the listener.
2. **Update:** the application advances the scene — `Clock.getDelta()` gives
   the time since last frame, objects move, and `AnimationMixer.update(dt)`
   advances skeletal and keyframe animations. It may flag materials or
   geometries `needsUpdate` where data changed.
3. **Render — `renderer.render(scene, camera)`:** `updateMatrixWorld()` recomputes
   every object's world transform down the tree; the camera's matrices and a
   view frustum are rebuilt.
4. **Cull and list:** a scene traversal (`projectObject`) walks the tree,
   keeps visible, layer-enabled objects, frustum-culls the rest, collects
   lights, and builds render lists — opaque, transparent, transmissive.
5. **Sort and shadows:** lists are sorted (opaque front-to-back, transparent
   back-to-front), then a shadow-map pass renders objects that cast shadows.
6. **Draw:** for each render-list entry the renderer selects a compiled shader
   program and uniforms matching material + lights, uploads geometry buffers on
   demand, and issues GPU draw calls.
7. **Output:** multi-sampled targets are resolved; a final full-screen "output"
   pass applies tone mapping and colour-space conversion, copying the finished
   image to the canvas.
8. **Screen:** the browser compositor presents the canvas, and the
   `requestAnimationFrame` callback fires again on the next display refresh.

Everything between "the app finished its update" and "pixels" — steps 3–7 — is
the library doing exactly the job it shipped to do.

> **Come back to this.** The frame is the application's loop with a library
> call dropped in the middle of it. Everything interesting about three.js comes
> from that: the app stays in charge, and the library never assumes there is a
> game at all.

## World model

Family: **scene graph**, as mapped in [world-models](../02-world-models.md).
three.js is the purest example in this study book: every renderable is an
`Object3D` in a parent→child tree, world transforms propagate downward, and
`Scene` is itself an `Object3D` with background, fog, and environment added.
What it buys: authoring ergonomics (parent a weapon to a hand, parent the
camera to a car), inherited visibility and layer state, and one canonical
traversal for update and render. What it costs: the tree walk is serial, data
is scattered per object, and object identity is bundled with data — three.js
softens part of that with duck-typed `isMesh`-style flags instead of
`instanceof`, exactly so cross-library code stays safe.

> **Come back to this.** Choose a scene graph when the world is a set of
> related, transformable things and you want to author them like a model in a
> DCC tool. Trade the speed of a precompiled world for build-it-yourself
> flexibility.

## Notable patterns worth a career

- **Library, not engine — sell the machine, not the schedule.** Everything
  outside "turn this scene into pixels" is the app's decision. When a tool
  calls itself an engine or a library, ask who owns the clock; that answer
  will tell you where the power and the responsibility sit.
- **Backend-agnostic renderer core.** The newer renderer family (a common
  abstract `Renderer` plus a `Backend` interface) makes WebGPU and WebGL
  implementations interchangeable behind one API, with the GL path as a
  fallback. Dependency inversion is the whole move, and it is the same pattern
  elsewhere in graphics and systems code.
- **The addons pattern.** `examples/jsm` carries optional conveniences —
  controls, loaders, physics wrappers, post-processing — as addons separate
  from core. Core stays small and pure; community recipes stay discoverable in
  one place; apps import only what they use.
- **Data-driven materials.** Materials are *data* that compiles to shaders:
  classic materials are parameters + GLSL chunk assembly, the new stack is
  node-graph (TSL) materials — both cached per (material, lighting, tone
  mapping) combination.
- **Duck typing and EventDispatcher.** `isX` flags avoid `instanceof`
  cross-library brittleness; an `EventDispatcher` base threads events (dispose,
  context restoration, resize) through the object model without a central bus.
- **Tree-shakeable distribution.** Source is plain ES modules, bundled by
  Rollup into `three.module.js` — so a web app's bundler keeps only the parts
  that are imported.

> **Come back to this.** The patterns to steal for your own work: a stable
> plugin interface (the backend), a strict core/addon split, data-driven
> pipelines, and events instead of global state. every one of them is why
> three.js survived decades of web platform churn.

## Who works with this engine

- **Web and creative developers** — the primary users: interactive web sites,
  data visualizations, product demos, art.
- **Game programmers on the web** — the game loop, input, and networking are
  application code, so the game-facing engineering is theirs to own.
- **Technical artists** — PBR materials, glTF import pipelines, texture and
  shader work; the bundled `editor/` app covers simple scene authoring.
- **Animation and design engineers** — `AnimationMixer` and glTF animation
  clips, camera choreography through control addons.
- **UI and UX engineers** — DOM/CSS overlays combine with canvas; the standard
  UI layer lives in the page, not the library.
- **XR developers** — WebXR is built into the renderers (`WebXRManager`), with
  controller and hand models as addons.

> **Come back to this.** If your discipline is web, design, or technical art,
  three.js is the engine most likely to be in the room: the graphics side is
  done, and every other discipline supplies the surrounding page and product.

## The lesson

> three.js shows you what a 3D engine is when you subtract everything except
> "scene in, pixels out." State is a scene graph, output is a renderer that
> hides GPU complexity behind one `render(scene, camera)` call, and clock, input,
> and logic belong to the application. **Interpretation:** the practical lesson
> is not "libraries are better than engines." It is that an "engine" is a
> division of labour, and three.js draws that line in the place that maximizes
> the application developer's freedom — at the price that nobody builds a big
> game for you.

**Dig deeper:** official docs — [https://threejs.org/docs/](https://threejs.org/docs/)
· manual — [https://threejs.org/manual/](https://threejs.org/manual/)
· source — [https://github.com/mrdoob/three.js](https://github.com/mrdoob/three.js)
· framing — [software-is-the-medium](../00-software-is-the-medium.md).
