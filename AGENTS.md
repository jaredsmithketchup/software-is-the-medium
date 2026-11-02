# AGENTS.md — software-is-the-medium

## Source of truth

This repo is the canonical home of "Software is the Medium — Game Engines are
Software": the career-long reference, the presentation package, and the
published slide-deck site. It is the **source of truth**. The Obsidian vault
at `D:\agents_workspace\.vault` keeps mirrors of `Reference/`, `Presentation/`,
and `PLAN.md`; when the vault and the repo disagree, the repo wins. Never
import vault copies over repo files, and do not edit the vault for this
content.

## Layout

| Path | Contents |
|---|---|
| `Reference/` | 11 chapters (`00`–`10`) + `Reference/Engines/` (10 engine case studies) + `Reference/index.md` |
| `Presentation/` | `presentation-overview.md` (structure + budget), `slide-deck.md` (S1–S37), `speaker-cards.md` (one card per slide, S1–S37), `index.md` |
| `PLAN.md` | the presentation plan; §8 mirrors the live section budget; §12 is the applied content-cut audit |
| `docs/` | the published deck site (reveal.js). GitHub Pages builds from `main` → `/docs`. Live at https://jaredsmithketchup.github.io/software-is-the-medium/ |
| `docs/index.html` | **generated** — never hand-edit; regenerate with the script below |
| `docs/theme.css` | deck theme (Slate dark, fonts, act colors, diagram layout) — edit freely |
| `docs/diagrams/sNN.svg` | optional per-slide diagram: if `s3.svg` exists it is auto-inlined on slide 3 (titles/notes stay in the md files) |
| `scripts/build-deck.mjs` | the generator: `slide-deck.md` + `speaker-cards.md` + `docs/diagrams/` → `docs/index.html` |

## Edit → regenerate → publish

1. Slides live in Markdown only. Edit `Presentation/slide-deck.md` (what the
   audience sees) and `Presentation/speaker-cards.md` (the same slide's speaker
   card, shown in presenter view). Keep slide numbering S1–S37 and keep the two
   files in 1:1 step.
2. Regenerate: `node scripts/build-deck.mjs`. Expect the printed counts to be
   `slides parsed: 37`, `cards parsed: 37`, `slides without a card: none` and
   `dividers: 6`. Commit the changed `docs/index.html` with the edit when requested.
3. Push `main`; GitHub Pages redeploys automatically (a few minutes). Verify at
   the site URL before reporting done.

**Diagrams:** to add one to slide N, create `docs/diagrams/sN.svg` and
regenerate — it is inlined automatically (content slides show the diagram above
the concise claims; divider slides get it under the title). Separate audience
claims with ` | ` in the Content field. Match the palette in
`docs/theme.css`. `<text>` in SVGs uses `Montserrat, Lato, Segoe UI, sans-serif`.

The deck is reveal.js 5.1 (vendored under `docs/vendor/reveal/`). Presenter
mode: open the site, press `S` — a second window shows the current slide, its
speaker card, the next-slide preview, and a timer. Put it on the presenter's
screen; the first window is the audience view.

**Speaker view layout** is customized: notes.js embeds a patched speaker-window
stylesheet (`scripts/patch-speaker-css.mjs`, idempotent) that puts current +
next slides side-by-side on top and splits the notes below into two panes —
references (`decknotes`) on the left at 60%, speaker card (`cards`) on the
right at 40%. **After bumping the reveal vendor after any update, re-run
`node scripts/patch-speaker-css.mjs` before committing.** The popup must stay
same-origin (GitHub Pages serves it from the same site).

## Conventions

- **Folder names are singular:** `Reference/`, `Presentation/`. A link that
  says `References/…` or `Presentations/…` is wrong in this repo.
- **Links are repo-relative.** From `Presentation/` use `../Reference/…`,
  `../PLAN.md`, `../docs/…`; from the root use `Reference/…`, `Presentation/…`,
  `PLAN.md`. Check that every internal link resolves before committing —
  GitHub renders a broken link as a 404.
- Markdown files carry vault-style frontmatter (`type:`, `tags:`,
  `generated:`). `type: Reference` is a note type, not a folder name — leave it
  alone. Keep edits minimal, prefer editing existing files, no emojis.
- **Deck theme** lives in `docs/theme.css` (Slate dark `#111827`, indigo
  accent `#6366F1`, Montserrat headings / Lato body; act colors A indigo ·
  B sky · C green · D purple). The theme is CSS, not inline styles.
- **Numbers discipline:** section timings live first in
  `Presentation/presentation-overview.md` §5; `PLAN.md` §8 mirrors them. When a
  timing changes, update the overview first, then regenerate PLAN.md's table.
- `docs/vendor/reveal/` is a pinned snapshot (5.1.0). Only bump it deliberately.
- The repo is **public** — no secrets, no personal data, no unredacted
  room/student details in commits or notes.

## Environment

- Windows; the kilocode shell is PowerShell 5.1 (`Get-ChildItem`, `;` chaining,
  backtick escaping — no `&&`). Node is available for the generator.
- `origin` is GitHub (`gh` CLI authenticated as `jaredsmithketchup`). Don't
  commit, push, or open PRs unless the user asks.
