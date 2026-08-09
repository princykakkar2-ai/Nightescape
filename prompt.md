# build/public — Design & Build Prompt

This file documents the design system extraction, product spec, and feature brief used to
generate this repository. Keep it in version control as the source-of-truth prompt for anyone
extending the app (or re-running it through an LLM).

---

## 1. Visual Design System & Theme Specification

Extracted as a "soft sage productivity" aesthetic: calm green surfaces, high-contrast dark-slate
text, and status accents that stay inside the same muted, pastel family instead of jumping to
saturated primary colors.

### 1.1 Color Palette

| Role | Usage | HEX | Tailwind token |
|---|---|---|---|
| Primary Background | App background, soft sage/mint | `#E7EFE0` | `bg-base` |
| Background (deep) | Section separation on the sage bg | `#DCE7D2` | `bg-base-deep` |
| Card / Secondary Background | Container fill, off-white green | `#F8FAF3` | `bg-card` |
| Card (raised) | Pure white for max-contrast panels | `#FFFFFF` | `bg-card-raised` |
| Primary Text | Headlines, body copy — dark slate green | `#22301F` | `text-ink` |
| Secondary / Muted Text | Labels, captions — olive/slate gray | `#6E7962` | `text-ink-muted` |
| Faint Text | Timestamps, placeholders | `#9AA38C` | `text-ink-faint` |
| Border | Soft muted card/input borders | `#D3DFC7` | `border-line` |
| Border (strong) | Dashed/diagram borders, hover state | `#B9C8A9` | `border-line-strong` |
| **Success / Completed** | Medium mint green | `#5FAE7F` | `bg-mint` / `text-mint-text` / `bg-mint-bg` |
| **Warning / Revision** | Warm pastel orange/amber | `#E3A25E` | `bg-amber` / `text-amber-text` / `bg-amber-bg` |
| Solar amber (streak display) | High-emphasis streak number | `#D98C2B` | `text-amber-solar` |
| **Missed / Alert** | Soft coral red | `#E38178` | `bg-coral` / `text-coral-text` / `bg-coral-bg` |
| **Secondary Highlight** | Slate blue-gray | `#7C8B95` | `bg-slateaccent` / `text-slateaccent-text` |

Each status color ships as a 3-part token: a solid (`DEFAULT`, for dots/bars/heatmap cells), a
tint (`-bg`, for pill backgrounds), and a readable text shade (`-text`, for pill labels) — this is
what makes the badge pills legible on the light sage background without ever using pure black.

### 1.2 Typography & Styling

- **Display face:** `Manrope` (700/800) — headlines, streak numbers, card titles. Chosen for its
  geometric, slightly rounded terminals, which echo the rounded-corner language of the UI.
- **Body face:** `Inter` (400/500/600) — paragraphs, labels, nav.
- **Mono face:** `JetBrains Mono` (400/500) — anything that reads like a "commit": streak counts,
  day counters, eyebrows (`TODAY'S FOCUS`), URLs, the post-template preview. This is the detail
  that ties the visual language back to the product's subject (GitHub commits).
- **Tracking:** eyebrow/label text uses `tracking-wideish` (`0.08em`) + uppercase. Large display
  numerals use `tracking-tightish` (`-0.02em`) to keep big type from feeling loose.
- **Border radius:** exaggerated throughout — `rounded-2xl` (1.25rem) for inputs/pills/buttons,
  `rounded-3xl` (1.75rem) for cards and panel-level containers. Nothing sharp-cornered except the
  small heatmap cells (`rounded-md`), which intentionally echo GitHub's own contribution graph.
- **Borders:** 1px `border-line` on cards/inputs by default; 2px on interactive elements
  (track cards, inputs) so focus/selection states can thicken without a layout shift.
- **Elevation:** soft, warm-tinted shadows only (`shadow-soft`, `shadow-card`, `shadow-lift`) —
  shadow color is a low-opacity version of the ink color, never pure black, to stay inside the
  sage-toned palette.

### 1.3 Component Token Mapping (Tailwind config excerpt)

```js
colors: {
  base:  { DEFAULT: "#E7EFE0", deep: "#DCE7D2" },
  card:  { DEFAULT: "#F8FAF3", raised: "#FFFFFF" },
  ink:   { DEFAULT: "#22301F", muted: "#6E7962", faint: "#9AA38C" },
  line:  { DEFAULT: "#D3DFC7", strong: "#B9C8A9" },
  mint:  { DEFAULT: "#5FAE7F", bg: "#E1F0E2", text: "#2E6B45" },
  amber: { DEFAULT: "#E3A25E", bg: "#FBEBD8", text: "#8A5A22", solar: "#D98C2B" },
  coral: { DEFAULT: "#E38178", bg: "#FBE4E1", text: "#A14338" },
  slateaccent: { DEFAULT: "#7C8B95", bg: "#E6EBED", text: "#455761" },
},
borderRadius: { xl: "1rem", "2xl": "1.25rem", "3xl": "1.75rem" },
```

Badge pill pattern (used for track chips, pod status, heatmap legend):

```html
<span class="rounded-2xl px-3 py-1 text-xs font-semibold bg-{status}-bg text-{status}-text">
  Label
</span>
```

---

## 2. Product Spec

A 60-day "build in public" accountability challenge. Students submit one GitHub proof and one
LinkedIn recap per day; the product's whole job is making that daily proof-of-work loop as fast
and low-friction as possible, and making the cost of skipping a day visible (streak resets,
squad progress bar, heatmap gaps).

### Pages

**`/` — Landing Page**
- Hero: "BUILD IN PUBLIC. UNLOCK YOUR POTENTIAL." + subtext on the 60-day / daily GitHub +
  LinkedIn submission flow.
- Track selector cards: AI, Data Science, Software Engineering.
- Interactive proof wall: auto-scrolling mock feed of live student submissions.
- Primary CTA "Start Your 60-Day Streak 🔥", sticky at the bottom on mobile.

**`/dashboard` — Student Dashboard**
- Large streak display: `DAY 28 / 60` and `17` current streak, in solar-amber display type.
- Streak Shield banner: "1 Streak Shield Available" safety-net messaging.
- Today's Focus card: current day's task title + "View Task" → `/day/:id`.
- 60-day contribution heatmap: GitHub-style grid, mint/coral/muted-gray for
  completed/missed/upcoming.
- Accountability Pod panel (see below).
- Profile switcher to demo three edge cases: **active**, **empty (Day 1)**, **missed-day**.

**`/day/12` (and `/day/:dayId` generally) — Challenge Day Page**
- Header: `DAY 12 / 60 | AI Track` progress bar.
- Briefing: markdown-rendered problem description + architecture-diagram placeholder (rendered
  as a step chain, e.g. `Docs → Chunker → Embeddings → Vector Store → LLM → Cited Answer`).
- Dual proof submission form:
  - GitHub repo URL input with live regex validation + a parsed `owner/repo` preview.
  - LinkedIn post URL input + a "1-Tap Post Template" button that copies a pre-filled recap
    (with the submitted repo URL interpolated in) to the clipboard.
- Sticky "SUBMIT PROOF OF WORK" CTA, disabled until both links validate.

### Constraints
- All interactive buttons/inputs respect a 48px minimum touch height (`min-h-[48px]`).
- All content is mock data, sourced from a single `src/mockData.json` — no backend.
- Routing is plain `react-router-dom` `BrowserRouter` with exactly three routes: `/`,
  `/dashboard`, `/day/:dayId`.

---

## 3. Feature Brief: Accountability Pods (5-Builder Squads)

**The mechanic:** every student is placed in an automated 5-person squad, scoped to their track.
The dashboard surfaces a **Pod Progress Bar** — e.g. *"Squad 4 · 4/5 members completed today's
challenge"* — plus a per-member list showing who has/hasn't submitted proof yet and their
individual streak.

**Why it matters:** peer visibility is the strongest lever against 60-day-challenge drop-off —
seeing that 4 of your 5 squad-mates already shipped today is a stronger nudge than any push
notification. It also gives the product a natural second screen (`squad-2`, the "missed" demo
profile's pod) to show what an under-performing pod looks like.

**Implementation:**
- Mock squad data lives in `mockData.json` under `pods`, keyed by squad id (`squad-4`,
  `squad-2`), each with `membersTotal`, `completedToday`, and a `members[]` array
  (`name`, `completedToday`, `streak`).
- `AccountabilityPod.jsx` renders the progress bar (mint when the squad is 5/5, amber
  otherwise), the member list with initials avatars, and a contextual nudge line.
- Rendered on `DashboardPage.jsx`, resolved from the active profile's `squadId`.

---

## 4. Original build prompt (verbatim brief)

> Act as a Senior UI/UX Designer and Frontend Engineer. Analyze the provided dashboard interface
> screenshots and extract a complete Visual Design System & Theme Specification, covering the
> color palette (HEX + Tailwind), typography & styling, and component token mapping for a soft
> sage/mint dashboard aesthetic — then build the full multi-page app (landing page, student
> dashboard, challenge day page) described above, plus a 5-builder "Accountability Pods" squad
> feature on the dashboard, with mock data in `mockData.json` and clean routing at `/`,
> `/dashboard`, and `/day/12`.

