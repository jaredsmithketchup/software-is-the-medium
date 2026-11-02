---
type: Overview
title: "Presentation Overview - Software is the Medium: Game Engines are Software"
description: Delivery guide for the current 38-slide deck: six sections in four acts, 50 minutes including an exercise, plus 10 minutes Q&A, with an optional 25-minute route.
tags: [presentation, overview, game-engines, medium, teaching]
generated: { by: kilocode, at: 2026-11-02T07:00:00Z }
---

# Presentation Overview - Software is the Medium

Use this as the delivery map, not another script. Audience content lives in
[slide-deck.md](slide-deck.md); presenter prompts and backup answers live in
[speaker-cards.md](speaker-cards.md). The current source has **38 slides, 38
cards, six section dividers, and four acts**. Older 64/73-slide plans are history.

## 1. The Thread

> Software is the medium. An engine makes its structure visible. Learn that
> structure, trace one weapon through it, and ask better questions of any tool.

Move from a familiar action (press jump) to five reusable questions, then use
the same questions for Quake, Doom 3, Unreal, and a weapon made by a whole team.
AI is the final application of the map, not the reason students must accept it.
This is an orientation model, not a claim that every program has five separate
modules or that engines are identical internally.

## 2. Audience and Learning Objectives

Mixed-discipline students; no code or engine installation required. Explain a
term before using its acronym. Invite guesses without testing prior knowledge.
Treat skepticism about AI as reasonable; no adoption or employment promises.

By the end, students should be able to:

1. Separate logic from a value using an example from their own discipline.
2. Trace input, processing, output, and feedback; distinguish frame interval
   from end-to-end input latency.
3. Use the **five-part mental model** to locate an engine question:

| Part | Plain-language question | Weapon example |
|---|---|---|
| State | What is remembered? | Ammo, target health, weapon pose |
| Logic | What changes it? | Fire eligibility, hit tests, damage logic |
| Input | What crosses in? | Fire command from a button or packet |
| Output | What is presented? | Flash, sound, animation, HUD |
| Clock | When does work run? | Simulation tick, cooldown, presentation cadence |

4. Compare engines by these roles rather than memorizing product names.
5. Trace a cross-discipline handoff and propose evidence to check before
   blaming an asset, subsystem, person, or AI-generated change.

## 3. Quick Start

From the repository root, with Node.js available:

```powershell
node scripts/build-deck.mjs
```

The build uses Node built-ins; it needs no project dependency installation.
Expect `slides parsed: 38`, `cards parsed: 38`, `slides without a card: none`,
and `dividers: 6`. Use the existing preview/publishing workflow; no additional
tooling is required. For a local preview, serve `docs/` with an existing HTTP
server. The examples below assume it uses port 8080.

1. Open <http://127.0.0.1:8080/> in a browser. Use HTTP, not a `file://` URL.
2. Press `S`, allow the popup, and keep it on the presenter screen. The first
   window is the audience view; the popup provides notes, previews, and a timer.
3. Advance once and confirm the matching card follows. Test both windows on the
   actual display arrangement; share only the audience window.
4. Use arrow keys to advance and `Esc` for the slide overview. For a direct
   jump, the zero-based URL `/#/23` opens S24; `/#/37` opens S38.
5. Rehearse from the local copy. Reveal.js is vendored; Google Fonts are remote,
   so test offline fallback font layout before relying on it.

The [published deck](https://jaredsmithketchup.github.io/software-is-the-medium/)
is convenient, but local source changes appear there only after publication.
**No live engine or AI demo is necessary.** The slides and paper exercise carry
the session. Keep this guide and the cards open as a fallback if the popup fails.

## 4. Source Material

The reference is a shelf to revisit, not required pre-reading. Start with one
question and follow the relevant chapter. These links are relative to this guide.

| Use | Sources |
|---|---|
| Software and the five parts | [ch00: Software is the medium](../Reference/00-software-is-the-medium.md), [ch01: Common structure](../Reference/01-common-structure.md) |
| World models and engine comparisons | [ch02: World models](../Reference/02-world-models.md), [Quake](../Reference/Engines/quake.md), [Doom 3](../Reference/Engines/doom-3.md), [Unreal](../Reference/Engines/unreal-engine.md) |
| Weapon and handoffs | [ch08: The weapon example](../Reference/08-the-weapon-example.md) |
| AI and future claims | [ch09: AI and the medium](../Reference/09-ai-and-the-medium.md), [ch10: The coming times](../Reference/10-the-coming-times.md) |
| Optional technical Q&A | [Hardware](../Reference/03-hardware-and-performance.md), [Concurrency](../Reference/04-concurrency-and-state.md), [Schemas](../Reference/05-schemas-and-formats.md), [Spatial indexes](../Reference/06-spatial-indexes.md), [Operating systems](../Reference/07-operating-systems.md) |
| Further comparison | [All ten engine case studies](../Reference/Engines/index.md) |

Treat future-facing reference material as argument and forecast, not established
outcome. Use the factual guardrails in section 8 when explaining it aloud.

## 5. Section Budget and Slide Map

**Canonical suggested timings:** 50 minutes of delivery, including the exercise,
then 10 minutes Q&A = **60 minutes total**. [PLAN section 8](../PLAN.md#8-the-derived-outline-at-a-glance)
mirrors this table. Timings include transitions; do not add separate divider time.
Section intros are S1, S5, S15, S21, S24, and S31.

| Section | Act / Focus | Slides | Source | Minutes | Elapsed End |
|---|---|---|---|---|---:|---:|
| 1 | A / Software is the medium | S1-S4 | ch00 | 4 | 04:00 |
| 2 | A / Anatomy of software | S5-S14 | ch00 | 12 | 16:00 |
| 3 | B / Anatomy of a game engine | S15-S20 | ch00-ch02 | 9 | 25:00 |
| 4 | B / Quake, Doom 3, Unreal 5 | S21-S23 | Engine cases, ch01 | 5 | 30:00 |
| 5 | C / One weapon, every discipline | S24-S30 | ch08 | 12 | 42:00 |
| 6 | D / AI, interfaces, and takeaways | S31-S37 | ch09-ch10, ch00 | 8 | 50:00 |
| Q&A | D / Questions and further reading | S38 | All | 10 | 60:00 |
| | **Delivery total** | **S1-S37** | | **50** | |
| | **Including Q&A** | **S1-S38** | | **60** | |

### Delivery Beats

- **S1-S4:** synopsis of the flow; make every discipline welcome. Ask what
  file or decision they contribute to a game. Connect it to software without
  implying everyone must become a programmer. Transition: "What is this medium
  made of?"
- **S5-S14:** jump logic versus jump height; code stored in files; data-driven
  config layers; input-process-output; feedback; latency; then schemas and
  producer-consumer contracts. At S14, ask where ammo belongs and where the
  logic that spends it belongs. Protect this comprehension check.
- **S15-S20:** watch the frame loop as the human loop, then map the five parts
  to engine responsibilities. Explain timing budgets and state versus
  presentation. Use a sword attached to a hand for a scene graph; describe BSP
  and ECS as different organizing tools, often mixed.
- **S21-S23:** read one row across the three engines, then one engine down the
  rows. Do not recite every implementation name. The clock row is a contrast,
  not a promise of determinism or a universal engine configuration.
- **S24-S30:** walk design, files, import/integration, and gameplay into output.
  Name who supplies data and who checks a handoff; ownership varies by team.
  After the feedback exercise, name where each element lives — values and
  assets in data, decisions in code. Reserve three of the eleven minutes for
  the exercise below at S28, then use S30 to show that the same questions work
  in Doom 3.
- **S31-S37:** reconnect feedback, contrast explicit logic with learned weights,
  distinguish existing neural techniques from forecasts, and explain tool-
  enabled AI with permission and verification limits. End with the reusable
  questions, not a product pitch. Stop after S37; do not add a second ending.
- **S38:** ask for a concrete symptom or example, map it to a part, and name
  what evidence would resolve it. If unsure, say so and point to a source.

## 6. Hands-On Exercise

**At S28, three minutes, no software required.** Students can write on paper or
in their own notes, then compare with a neighbor. Solo participation is fine.

> A weapon makes a muzzle flash, but the target takes no damage. Map input,
> state, logic, output, and clock. Pick one thing to inspect first and explain
> what result would support or weaken your guess.

| Time | Action |
|---|---|
| 0:00-0:30 | Individually label the five parts for this symptom. |
| 0:30-1:30 | In pairs, choose a boundary and an observable check. |
| 1:30-2:30 | Hear one or two proposed checks; ask what each result would mean. |
| 2:30-3:00 | Debrief: a visible effect proves presentation occurred, not that damage was accepted. |

**Presenter answer key:** input = fire command; state = ammo and health;
logic = eligibility, collision, and damage; output = flash/sound/HUD;
clock = command processing, cooldown, and update timing. Check whether the
authoritative gameplay state recorded a hit and health change. A client may
predict the flash without the authority accepting the shot. In a single-player
case, inspect the hit result and damage logic before concluding the artwork is
wrong. There is no single required diagnosis: reward a testable hypothesis.

## 7. Optional 25-Minute Route

Use a shorter route, not faster speech. Keep numbering unchanged and navigate
past omitted slides. Q&A is separate: 25 + 10 = **35 minutes** if retained.

| Section | Show | Minutes | Elapsed End |
|---|---|---:|---:|
| 1 | S1-S4, brief opening; one line on the synopsis | 2 | 02:00 |
| 2 | S5-S6, S9-S11, S14; omit S7-S8, S12-S13 | 6 | 08:00 |
| 3 | S15-S20; one example of world organization | 4 | 12:00 |
| 4 | S21-S22; omit S23 | 3 | 15:00 |
| 5 | S24-S30; one-minute individual exercise at S28 | 6 | 21:00 |
| 6 | S31, S33-S37; omit S32, one sentence on S34 | 4 | 25:00 |
| | **Delivery total** | **25** | |

In the one-minute exercise, allow 30 seconds to choose a check, 20 seconds for
one answer, and 10 seconds for the presentation-versus-authority debrief.
If the full talk slips, drop extra analogies, S23 detail, and S32 history first.
Protect S14/S17 (the map), S22 (comparison), the weapon chain, and S37 (closure).

## 8. Presenter Guardrails and Rehearsal

- **Real-time:** games are generally *soft real-time*. Late work can cause
  stutter or reduced responsiveness, not necessarily system failure. Do not
  call every frame deadline hard real-time or equate human reaction with refresh.
- **Latency:** 60 fps gives about 16.7 ms between frames, not a guaranteed
  finger-to-photon response. Device sampling, simulation, queues, rendering,
  display scanout, and sometimes network delay contribute separately.
- **Authority:** drawing an effect does not make it authoritative gameplay
  state. Render/GPU systems can simulate cosmetic particles, cloth, or other
  effects; "the renderer never simulates" is too strong.
- **Clocks:** fixed steps aid consistency but do not guarantee determinism.
  Inputs, initial state, ordering, randomness, and numeric behavior matter.
  Engine version and settings affect tick, render, and physics arrangements.
- **World models:** scene graphs, spatial indexes such as BSP, and ECS address
  different concerns and can coexist. A world model is not simply one of three
  exclusive brands of storage.
- **Handoffs:** a design document informs a schema; it is not automatically a
  machine-readable contract. Soft references need explicit loading; hard
  references create dependencies, not a promise to remain loaded forever.
- **AI:** a model can produce plausible errors. Tools and their host environment
  determine what it can access; a harness need not be local. Request evidence,
  scope access, inspect diffs, and test. Neural upscaling does not establish
  that whole engines will be replaced. Future architecture and employment
  effects remain uncertain; do not promise replacement or guaranteed job safety.

**Rehearse once with a timer:** reach S15 at 16:00, S24 at 30:00, S31 at
42:00, and S38 at 50:00. Say the exercise prompt out loud and include the full
student thinking time. Pick one analogy per concept; backup material is for
questions, not mandatory delivery. Rehearse the first minute and the last minute
twice, plus the S28 debrief and the jump past optional slides.

**Before the room opens:** build and verify 38/38/6, check diagrams and text at
the actual projector size, test the popup and timer, test local/offline access,
and keep a second copy of the notes accessible. No login, install, or live demo
should be needed during delivery. If a detail is disputed, separate the general
model from the version-specific claim and avoid improvising certainty.
