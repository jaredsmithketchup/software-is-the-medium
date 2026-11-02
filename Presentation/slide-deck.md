---
type: Reference
title: "Slide Deck — Software is the Medium: Game Engines are Software"
description: Refactored deck. Anatomy of software, anatomy of a game engine, the same anatomy in Quake, Doom 3, and Unreal 5, the weapon across every discipline, then cybernetics, symbolic vs connectionist, and AI as a new interface.
tags: [presentation, slide-deck, game-engines, medium, slides]
generated: { by: kilocode, at: 2026-11-02T07:00:00Z }
---

# Slide Deck — Software is the Medium: Game Engines are Software

Audience text is the **Content** line. The words to say are in
[`speaker-cards.md`](speaker-cards.md).

---

# ACT A — SOFTWARE

## S1 — Section 1 intro: Software is the Medium — Game Engines are Software *(divider)*

- **Goal:** the title is the thesis.
- **Content:** **Understand the engine, not just the editor** | Follow one button press from rules and data to pixels and sound | Leave with a map for learning any engine and checking AI-generated work
- **Visual:** title.
- **Refs:** `ch00` intro.

## S2 — Six sections, four acts *(synopsis)*

- **Goal:** preview the whole talk.
- **Content:** **Act A — Software:** what it is, and what it is made of | **Act B — Engines:** the anatomy of an engine, then Quake, Doom 3, and Unreal 5 | **Act C — One weapon:** the same chain across every discipline | **Act D — AI and ahead:** interfaces, tools, then the reusable questions
- **Visual:** the six sections as act-colored chips; the map returns on every section divider.
- **Refs:** `ch00` intro.

## S3 — You are making software

- **Goal:** name the blind spot.
- **Content:** **Design** supplies rules and tuning | **Art and audio** supply assets and their constraints | **Engineering** connects them into a running system | Your craft stays distinct; the player experiences the whole system
- **Visual:** four roles, one medium.
- **Refs:** `ch00` intro, §7.

## S4 — The anatomy outlasts the tool

- **Goal:** why the anatomy, not the product.
- **Content:** What does it **remember**? What **changes** it? | What comes **in**? What goes **out**? | **When** does the work happen? | These five questions travel between engines, tools, and AI systems
- **Visual:** tool names fading, five parts staying.
- **Refs:** `ch00` §8.

## S5 — Section 2 intro: Anatomy of software *(divider)*

- **Goal:** open the anatomy.
- **Content:** Start with a button press | Follow the rules, the changing values, and the feedback | Then name the five parts
- **Visual:** the sequence.
- **Refs:** `ch00` §1–4.

## S6 — Code and data

- **Goal:** the two substances.
- **Content:** **Code** says what can happen | **Configuration** tunes it; **live state** records what is happening | Changing a jump setting is not the same as changing the jump rule
- **Visual:** two cards.
- **Refs:** `ch00` §1.

## S7 — Code can be stored as data

- **Goal:** the boundary is a decision.
- **Content:** A file can contain a picture, a number, **or instructions** | Quake's `progs.dat` contains compiled QuakeC; Blueprints are stored in Unreal assets | A runtime must interpret or execute those instructions | Some mods change behavior without rebuilding the engine
- **Visual:** code file and data file, arrow both ways.
- **Refs:** `ch00` §1.1–1.3.

## S8 — Data-driven: config binds data to code

- **Goal:** name the data-driven pattern that binds data to code.
- **Content:** Most engines are **data-driven** — a **config or asset layer** declares how data and code connect | JavaScript and Python apps read **JSON or YAML** files to tune behavior without recompiling | Unreal **Blueprints** range from **node graphs** that run as logic to **Data-Only Blueprints** that store properties for other code | A config edit changes behavior only if the reading code already understands the file
- **Visual:** code, config, data in a row.
- **Refs:** `ch00` §1.1–1.3, `ch05` §6.

## S9 — Input, process, output

- **Goal:** the shape of every program.
- **Content:** **Input:** a request to fire | **Process:** check the rules and change the state | **Output:** show and play the result
- **Visual:** three boxes.
- **Refs:** `ch00` §2.

## S10 — The player closes the feedback loop

- **Goal:** name the loop.
- **Content:** You see a miss, adjust your aim, and try again | The engine keeps updating between your decisions | **Feedback** connects the player's goal to the software's response
- **Visual:** input, process, output, return path.
- **Refs:** `ch00` §3.

## S11 — Frame rate is not response time

- **Goal:** the cost of the loop.
- **Content:** **60 fps = one frame every 16.7 ms** | Input-to-display latency spans several stages and may span several frames | Smooth output can still respond late
- **Visual:** the chain, one budget.
- **Refs:** `ch00` §3.3–3.4.

## S12 — State, logic, input, output, clock

- **Goal:** the anatomy, named.
- **Content:** **State:** remembered facts; **logic:** rules that change them | **Input / output:** what crosses the boundary | **Clock:** when work runs, not necessarily one timer
- **Visual:** five boxes.
- **Refs:** `ch00` §4.

---

# ACT B — THE ENGINE

## S13 — Section 3 intro: Anatomy of a game engine *(divider)*

- **Goal:** the extension.
- **Content:** An engine provides **reusable systems for running interactive worlds** | Your game supplies specific rules and content | Editors and asset tools help build what the runtime uses
- **Visual:** five parts opening into subsystems.
- **Refs:** `ch00` §5, `ch01` §2.

## S14 — Five subsystems

- **Goal:** the engine anatomy, one row each.
- **Content:** The five questions become a map of engine responsibilities | Follow one shot: **input → rules → changed world → feedback** | These are roles, not five isolated code modules
- **Visual:** five rows.
- **Refs:** `ch01` §2.

## S15 — A frame is a time budget

- **Goal:** explain performance without confusing soft and hard real-time.
- **Content:** At a 60 fps target, the interval is **16.7 ms** | Late work causes a hitch or lower frame rate: games are usually **soft real-time** | Measure the bottleneck; CPU and GPU work can overlap
- **Visual:** frame deadline.
- **Refs:** `ch00` §5, `ch01` §4.

## S16 — The renderer reads state

- **Goal:** core versus channels.
- **Content:** **The world is not the picture of the world** | A server can track hits and health without drawing a frame | Rendering may simulate visual effects; that does not make the image the authority on damage
- **Visual:** core in the middle, renderer downstream.
- **Refs:** `ch01` §3.

## S17 — Three ways to organize a world

- **Goal:** distinguish relationship, spatial, and component organization.
- **Content:** **Scene graph:** what moves with what? | **Spatial index:** what is near, visible, or colliding? | **Components / ECS:** what data does each thing have? | These solve different problems and often coexist
- **Visual:** three state families.
- **Refs:** `ch02` §1–6.

## S18 — Section 4 intro: Quake, Doom 3, Unreal 5 *(divider)*

- **Goal:** prove the anatomy on real engines.
- **Content:** Three real engines, the same questions | Read the responsibility first; learn its local name second
- **Visual:** three columns.
- **Refs:** `Eng/QUAKE`, `Eng/DOOM3`, `Eng/UE5`.

## S19 — The same five rows

- **Goal:** the comparison.
- **Content:** Start with one row: **where are the world's facts stored?** | Names and implementations differ; the questions remain useful
- **Visual:** three-column table.
- **Refs:** `Eng/QUAKE`, `Eng/DOOM3`, `Eng/UE5`.

## S20 — Simulation and display can tick differently

- **Goal:** the differences, in one place.
- **Content:** **Fixed step:** advance by the same simulated interval | **Variable step:** advance by the measured interval | Rendering can use a different cadence; fixed steps alone do **not** guarantee determinism
- **Visual:** clock row highlighted.
- **Refs:** `ch01` §4–5.

---

# ACT C — THE WEAPON

## S21 — Section 5 intro: One weapon, every discipline *(divider)*

- **Goal:** one object that uses the whole anatomy.
- **Content:** A weapon is not just a mesh | It is a contract between design, assets, rules, timing, and feedback | Trace one shot to find every discipline's contribution
- **Visual:** the chain.
- **Refs:** `ch08` §1.

## S22 — From authoring to a running game

- **Goal:** the chain, with owners.
- **Content:** **Build time:** create, import, validate, and package | **Run time:** load, interpret input, apply rules, present results | Handoffs have contracts: names, units, formats, and budgets
- **Visual:** six steps.
- **Refs:** `ch08` §1–5.

## S23 — Turn intent into a testable contract

- **Goal:** stages 1 and 2.
- **Content:** Intent: **a deliberate, readable weapon** | Contract: damage, cooldown, ammunition, units, and valid ranges | Test: one accepted hit removes **25 health points**, not an unspecified "25"
- **Visual:** schema, then inert files.
- **Refs:** `ch08` §2–3.

## S24 — One shot: check, change, announce

- **Goal:** stages 3 and 4.
- **Content:** Input is a **request**, not permission | Check ammunition and cooldown before changing authoritative state | Assets must be ready; a soft reference is not an automatic loading policy
- **Visual:** files become a firing event.
- **Refs:** `ch08` §4–5.

## S25 — One event, several kinds of feedback

- **Goal:** the output side, named.
- **Content:** An accepted shot can drive animation, sound, VFX, and the HUD | Their timing shapes how the weapon feels | A missing flash is not proof that the damage rule failed
- **Visual:** state feeding render and audio.
- **Refs:** `ch08` §7–8.

## S26 — The same chain in Doom 3

- **Goal:** not an Unreal-only story.
- **Content:** DOOM 3 combines weapon definitions, assets, scripts, and C++ | File names change; the authoring-to-runtime handoffs remain | Engine code provides capabilities; game content configures and coordinates them
- **Visual:** the four stages, id Tech labels.
- **Refs:** `ch08` §9, `Eng/DOOM3`.

---

# ACT D — THE DIRECTION

## S27 — Section 6 intro: AI inside the same map *(divider)*

- **Goal:** open the history without leaving the anatomy.
- **Content:** Separate three questions | Is AI **helping build** the game, **running inside** it, or **generating its output**? | Each role needs different checks
- **Visual:** two branches.
- **Refs:** `ch09` §2–3, `ch10`.

## S28 — Feedback turns a guess into an experiment

- **Goal:** history of the loop, one slide.
- **Content:** **Goal → act → observe → compare → adjust** | A player corrects aim; a developer corrects a bug | AI output becomes useful evidence only after you inspect and test it
- **Visual:** sense, correct, act.
- **Refs:** `ch09` §2, `ch00` §3.

## S29 — Symbolic and connectionist

- **Goal:** the two minds, in software terms.
- **Content:** **Explicit rules:** enforce ammunition and cooldown | **Learned models:** predict an answer from training and context | Combine them: generated dialogue can suggest an action; game rules decide whether it is allowed
- **Visual:** two columns.
- **Refs:** `ch09` §3.

## S30 — A learned component still has a job

- **Goal:** the direction, concretely.
- **Content:** **Shipped example:** neural upscaling reconstructs an image | Better-looking pixels do not establish collision, health, or ownership | Judge generated worlds separately on consistency, controllability, and cost
- **Visual:** symbolic base, neural inserts.
- **Refs:** `ch10` §3.

## S31 — AI is a new interface

- **Goal:** the close of the argument.
- **Content:** The **model proposes**; the **harness manages tool execution** | Tools read files, edit assets, and run tests within granted permissions | Read the diff and the test result, not just the confident explanation
- **Visual:** you, harness, software.
- **Refs:** `ch09` §1, §6.

## S32 — Give AI a boundary and a test

- **Goal:** the catch.
- **Content:** "Trace the fire input to the ammunition update; cite the files" | "Propose one small change; preserve damage and cooldown rules" | "Test empty ammo, cooldown, hit, and miss; report what you actually ran"
- **Visual:** anatomy under the harness.
- **Refs:** `ch09` §6, `ch00` §8.

## S33 — The interface changed. The medium did not.

- **Goal:** the last line.
- **Content:** **Find the state. Trace the rules. Follow the input and output. Measure the timing.** | Practice on a door, a jump, or a weapon in any engine | Use the same map to question an AI-generated change
- **Visual:** the sentence.
- **Refs:** `ch00` §9, `ch09` §12, `ch10`.

## S34 — Questions

- **Goal:** use the anatomy to answer.
- **Content:** A weapon flashes, but the target takes no damage: **where would you look first?** | Separate what you observed from what you inferred | Take the five questions into your next project
- **Visual:** the five parts.
- **Refs:** `ch00` §10.
