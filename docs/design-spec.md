# RC Portfolio — Design Spec

Source of truth for every color, size and layout value in the portfolio design.
Stack: Tailwind CSS v4, mobile-first. Font: Poppins. Light + dark theme.

Notation: `desktop / phone` means the first value applies from `sm` up and the second on phones (base), unless a breakpoint is named.

---

## 1. Breakpoints

| Name | Min width              | Device                     |
| ---- | ---------------------- | -------------------------- |
| base | 0 (design frame 360px) | Phones                     |
| sm   | 640px                  | Large phone / small tablet |
| md   | 768px                  | Tablet                     |
| lg   | 1024px                 | Laptop / tablet landscape  |
| xl   | 1280px                 | Desktop                    |
| 2xl  | 1536px                 | Large desktop              |

Tailwind's default breakpoints only. The original design had a custom `xs` (390px) breakpoint; it was dropped and all phones use the base values.

---

## 2. Colors

### Light theme

| Token                      | Hex               | Used for                                                                                         |
| -------------------------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `bg`                       | #FFFFFF           | Hero, Skills, Education, Contact backgrounds; cards on blue sections                             |
| `bg-alt`                   | #F0F3FA           | About, Projects, Certificates backgrounds; pills; Education cards                                |
| `blue-100`                 | #D5DEEF           | About photo frame, Skills card border, timeline line, dot ring (current)                         |
| `blue-200`                 | #B1C9EF           | Browser-bar dots, stat dividers, dot ring (past)                                                 |
| `blob-back` / `blob-front` | #D5DEEF / #B1C9EF | Hero blobs                                                                                       |
| `blue-300`                 | #8AAEE0           | Dot patterns, Elementary icon tile                                                               |
| `blue-400`                 | #638ECB           | "Jimenez", logo ring, About tilted shape, pin/calendar icons, input borders, status dots         |
| `primary`                  | #395886           | Buttons, icon tiles, eyebrows, links, active nav, check icons, browser bar, featured certificate |
| `accent`                   | #395886           | Eyebrows, links, outline buttons (same as primary in light)                                      |
| `surface`                  | #FFFFFF           | Cards, inputs, badges                                                                            |
| `surface-2`                | #F0F3FA           | Pills on white, panels                                                                           |
| `ink`                      | #1E2D45           | Headings, strong text; footer background                                                         |
| `ink-muted`                | #55627A           | Paragraphs, captions, labels                                                                     |

### Dark theme

| Token                                                           | Hex               |
| --------------------------------------------------------------- | ----------------- |
| `bg`                                                            | #0E1626           |
| `bg-alt`                                                        | #121C2E           |
| `surface`                                                       | #1A2539           |
| `surface-2`                                                     | #24314A           |
| `blue-100`                                                      | #24314A           |
| `blue-200`                                                      | #2C3D5A           |
| `blob-back` / `blob-front`                                      | #1C2A44 / #2C4370 |
| `primary` (filled buttons, icon tiles)                          | #4A6FA5           |
| `accent` (eyebrows, links, active nav, outline buttons, checks) | #8AAEE0           |
| `ink`                                                           | #F0F3FA           |
| `ink-muted`                                                     | #A9B6CC           |
| footer                                                          | #0A111E           |

Always white text on `primary`. Footer text: links #D5DEEF, subtitle and copyright #B1C9EF (both themes).

### `src/index.css`

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: 'Poppins', system-ui, sans-serif;

  --color-bg: #ffffff;
  --color-bg-alt: #f0f3fa;
  --color-surface: #ffffff;
  --color-surface-2: #f0f3fa;
  --color-blue-100: #d5deef;
  --color-blue-200: #b1c9ef;
  --color-blue-300: #8aaee0;
  --color-blue-400: #638ecb;
  --color-blob-back: #d5deef;
  --color-blob-front: #b1c9ef;
  --color-primary: #395886;
  --color-accent: #395886;
  --color-ink: #1e2d45;
  --color-ink-muted: #55627a;
  --color-footer: #1e2d45;
}

.dark {
  --color-bg: #0e1626;
  --color-bg-alt: #121c2e;
  --color-surface: #1a2539;
  --color-surface-2: #24314a;
  --color-blue-100: #24314a;
  --color-blue-200: #2c3d5a;
  --color-blob-back: #1c2a44;
  --color-blob-front: #2c4370;
  --color-primary: #4a6fa5;
  --color-accent: #8aaee0;
  --color-ink: #f0f3fa;
  --color-ink-muted: #a9b6cc;
  --color-footer: #0a111e;
}
```

Use tokens (`bg-bg`, `text-ink`, `bg-primary`, `text-accent`…), never raw hex in components. Then dark mode needs almost no `dark:` classes.

---

## 3. Typography

Poppins 400 / 500 / 600 / 700:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Sizes that change per breakpoint (px)

| Element                                          | base | sm  | md  | lg  | xl  | 2xl | Weight / line-height               |
| ------------------------------------------------ | ---- | --- | --- | --- | --- | --- | ---------------------------------- |
| Hero name (h1)                                   | 34   | 48  | 48  | 48  | 60  | 64  | 700 / 1.12                         |
| Hero title ("Aspiring Full-Stack Web Developer") | 19   | 24  | 24  | 24  | 28  | 30  | 400, "Full-Stack" 600 accent / 1.4 |
| Section heading (h2)                             | 28   | 36  | 36  | 40  | 44  | 48  | 700 / 1.15                         |
| About subtitle                                   | 18   | 20  | 20  | 20  | 24  | 26  | 400 / 1.4                          |
| Eyebrow label                                    | 12   | 13  | 13  | 14  | 14  | 14  | 600, uppercase, tracking 0.15em    |
| Lead paragraph                                   | 15   | 16  | 17  | 17  | 17  | 18  | 400 / 1.65                         |
| Project description                              | 15   | 16  | 16  | 16  | 16  | 17  | 400 / 1.65                         |
| Project name (h3)                                | 26   | 24  | 24  | 28  | 32  | 36  | 700 / 1.2                          |
| Education title (h3)                             | 19   | 20  | 22  | 22  | 24  | 24  | 700 / 1.3                          |
| About stat number                                | 26   | 30  | 32  | 32  | 34  | 36  | 700                                |

### Fixed sizes (desktop / phone)

| Element                                                | Size                                      | Weight    |
| ------------------------------------------------------ | ----------------------------------------- | --------- |
| Nav link                                               | 16 (active: 600, accent)                  | 400       |
| Button label                                           | 16 (medium buttons 15)                    | 500       |
| Logo name / role                                       | 18 / 13 (phones 16 / 12), line-height 1.4 | 600 / 400 |
| Skills card title / description                        | 20 / 14 (phones 18 / 13)                  | 600 / 400 |
| Skill chip                                             | 14 (phones 13)                            | 500       |
| Tech chip (projects)                                   | 13 (phones 12)                            | 500       |
| Meta line ("CAPSTONE PROJECT · 2026", education years) | 13 (phones 12), tracking 0.08em           | 600       |
| Badges / status pills                                  | 12                                        | 500       |
| Check list item                                        | 15 (phones 14), line-height 1.6           | 400       |
| Featured certificate title                             | 22 (phones 20)                            | 700       |
| Certificate card title                                 | 16, line-height 1.4                       | 600       |
| Certificate issuer                                     | 11, tracking 0.08em (featured 12)         | 600       |
| Certificate date                                       | 13 (featured 14)                          | 400       |
| Form title                                             | 24 (phones 20)                            | 700       |
| Form label / input text                                | 14 / 15                                   | 500 / 400 |
| Contact label / value                                  | 13 / 16 (phones 15)                       | 400 / 500 |
| Footer links / copyright                               | 15 / 14 (phones 13)                       | 400       |

---

## 4. Layout and spacing

Every section: full-width background, content in `mx-auto max-w-7xl` (1280px).

| Breakpoint | Side padding                                | Section top/bottom padding | Tailwind                |
| ---------- | ------------------------------------------- | -------------------------- | ----------------------- |
| base       | 16                                          | 64                         | `px-4 py-16`            |
| sm         | 32                                          | 80                         | `sm:px-8 sm:py-20`      |
| md         | 40                                          | 88                         | `md:px-10 md:py-[88px]` |
| lg         | 48                                          | 96                         | `lg:px-12 lg:py-24`     |
| xl         | 64                                          | 112                        | `xl:px-16 xl:py-28`     |
| 2xl        | 64 (container centers → 128 visible margin) | 128                        | `2xl:py-32`             |

### Gaps

| Where                                                  | lg and up         | Below lg       |
| ------------------------------------------------------ | ----------------- | -------------- |
| Section header → content                               | 56                | 40             |
| Hero text ↔ visual                                     | 48                | 40             |
| About photo ↔ text                                     | 96                | 48             |
| Project ↔ project                                      | 96                | 72             |
| Screenshot ↔ project details                           | 64 (xl+), 48 (lg) | 32             |
| Contact info ↔ form                                    | 96 (xl+), 64 (lg) | 48             |
| Card grids (Skills, Certificates)                      | 24                | 24 (phones 16) |
| Education items                                        | 32                | 32 (phones 24) |
| Eyebrow → h2 → subtitle                                | 12                | 12             |
| Hero blocks (heading group → lead → buttons → socials) | 32                | 32 (phones 24) |

### Corner radius

| Element                                             | Radius                             |
| --------------------------------------------------- | ---------------------------------- |
| Buttons, pills, badges, toggle                      | full (`rounded-full`)              |
| Skills cards, certificate cards                     | 20                                 |
| Featured certificate, Education cards, contact form | 24 (phones 18–20)                  |
| Browser frame                                       | 14 (phones 12)                     |
| Images, inputs, icon tiles, hamburger               | 12 (Education tiles 14)            |
| Mobile-menu links                                   | 14                                 |
| About badge                                         | 18                                 |
| About photo frame                                   | 48 160 48 48 (phones 32 110 32 32) |
| About tilted shape                                  | 40 (phones 28), rotate 9°          |

### Shadows

| Name        | Value                                    | Used on                           |
| ----------- | ---------------------------------------- | --------------------------------- |
| card-soft   | `0 18px 40px -28px rgba(30,45,69,0.28)`  | Skills cards                      |
| card        | `0 24px 48px -32px rgba(30,45,69,0.35)`  | Browser frames, certificate cards |
| card-strong | `0 24px 48px -28px rgba(30,45,69,0.5)`   | Featured certificate              |
| photo       | `0 24px 48px -24px rgba(57,88,134,0.35)` | About photo frame                 |
| float       | `0 18px 40px -16px rgba(30,45,69,0.28)`  | About badge                       |
| badge-glow  | `0 10px 24px rgba(57,88,134,0.3)`        | Hero `</>` circle                 |
| chip        | `0 8px 20px -8px rgba(30,45,69,0.35)`    | Walkthrough chip                  |
| knob        | `0 4px 10px -2px rgba(30,45,69,0.25)`    | Toggle knob                       |

### Borders

Skills cards 1px `blue-100` · outline buttons 1.5px `accent` · inputs 1px `blue-400` (dark #4A6FA5) · stat dividers 1px `blue-200` · footer divider 1px rgba(213,222,239,0.18). No borders on pills.

---

## 5. Components

Icons: Lucide style, 24×24 viewBox, stroke 2, round caps and joins.

### Buttons (all `inline-flex items-center rounded-full`)

| Variant                                   | Min height  | Padding | Font     | Icon gap / size | Colors                                                                 |
| ----------------------------------------- | ----------- | ------- | -------- | --------------- | ---------------------------------------------------------------------- |
| Primary                                   | 52          | 14 28   | 16 / 500 | 10 / 20         | bg `primary`, white text                                               |
| Outline                                   | 52          | 14 28   | 16 / 500 | 10 / 20         | bg `surface` (white light, #1A2539 dark), text + 1.5px border `accent` |
| Medium (navbar CTA, Live Demo, View Code) | 48          | 12 22   | 15 / 500 | 10 / 18–20      | same as primary / outline                                              |
| White (on featured certificate)           | 44          | 10 20   | 14 / 600 | 8 / 16          | bg white, text #395886                                                 |
| Text link ("Verify credential")           | 44 tap area | 0       | 14 / 600 | 6 / 16          | text `accent`                                                          |

Phones: hero, About, project and form buttons are full width (`w-full justify-center sm:w-auto`), stacked with 12 gap.

```html
<a
  class="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 font-medium text-white"
  >…</a
>
```

### Navbar

| Part             | Spec                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bar              | **Sticky:** `sticky top-0 z-50`, padding-y 16 (phones 12), `flex items-center justify-between`. Transparent at the top of the page; once scrolled, bg `bg`/80 + `backdrop-blur` + 1px bottom border `blue-100`. `<html>` gets `scroll-padding-top` equal to the bar height so anchor links don't hide headings under it |
| Logo             | Ring + "R" SVG 44×44 (phones 40). Ring stroke `blue-400` (#638ECB), "R" `primary` bold                                                                                                                                                                                                                                  |
| Name / role      | gap to logo 12 (phones 10)                                                                                                                                                                                                                                                                                              |
| Links (xl+ only) | gap 32 (2xl 48). Active link has a 20×3 bar 6px below, radius 2, `primary`                                                                                                                                                                                                                                              |
| Right group      | gap 16 (phones 12): toggle (**sm+ only**; on phones it lives in the mobile menu, because the bar is too narrow at 360px), Contact Me (medium, md+; large at xl+), hamburger (below xl)                                                                                                                                  |
| Theme toggle     | 80×44 pill, padding 0 12, track `surface-2`. Knob 36×36 circle, inset 4px, shadow knob. Icons 18. Light: white knob left with sun. Dark: #4A6FA5 knob right with moon                                                                                                                                                   |
| Hamburger        | 44×44, radius 12, bg `surface-2`, icon 22 `ink`                                                                                                                                                                                                                                                                         |

### Mobile menu (open, below xl)

Full-screen panel, bg `bg`, padding 16 / side padding / 32 bottom, gap 28. Top row = logo + toggle + close (44×44, radius 12, bg `bg-alt`). Links: min-height 56, padding 0 16, radius 14, 18 / 500. Active: bg `bg-alt`, `primary`, 600, 8px dot on the right. Then full-width Contact Me button. Bottom: "Find me on" 13 muted + socials.

### Eyebrow + section header

- Eyebrow: line 32×2 (phones 24×2) `accent` + 12 gap + label. When centered (Hero at sm–md), a line on **both** sides: `—— LABEL ——`.
- lg+: row, `items-end justify-between gap-16`; title group left, lead right (max-width 440).
- Below lg: column, gap 16, lead max-width 560.
- Margin below header: 56 (lg+) / 40.

### Pills and chips (no borders)

| Type                    | Padding            | Background                                                                                      |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------------------------- |
| Skill chip              | 8 16 (phones 7 14) | `bg-alt` on white card · gap 10 (phones 8)                                                      |
| Tech chip               | 6 14 (phones 5 12) | `surface` on `bg-alt` · gap 8                                                                   |
| Status badge            | 4 12               | `surface`; text `primary` ("In progress", with 6px `blue-400` dot) or `ink-muted` ("Completed") |
| Project badge           | 4 12               | `surface`, text `primary`                                                                       |
| "Open to opportunities" | 8 16               | `bg-alt`, 8px `blue-400` dot, gap 8                                                             |
| LATEST tag              | 4 12               | rgba(255,255,255,0.16), white                                                                   |

### Icon tiles (white icon on `primary`)

| Where          | Size           | Radius | Icon                                                    |
| -------------- | -------------- | ------ | ------------------------------------------------------- |
| Skills card    | 48 (phones 44) | 12     | 24                                                      |
| Contact item   | 48 (phones 44) | 12     | 22                                                      |
| Education card | 56 (phones 44) | 14     | 28 (phones 22); tile colors #395886 / #638ECB / #8AAEE0 |
| About badge    | 44 (phones 38) | 12     | 20                                                      |

### Check list item

Check-circle icon 20 `accent` (margin-top 2) + gap 10 + text. List gap 10 (projects) / 12 (education).

### Social icons

44×44 tap targets, gap 12, row `-ml-2.5` so icons align with text. GitHub 24, LinkedIn 22, Facebook 23, filled `primary` (dark `accent`).

### Form fields

| Part      | Spec                                                                                  |
| --------- | ------------------------------------------------------------------------------------- |
| Label     | 14 / 500 `ink`, 8 above field                                                         |
| Input     | min-height 48, padding 12 16, border 1px `blue-400`, radius 12, bg `surface`, text 15 |
| Textarea  | 5 rows, line-height 1.6, `resize-y`                                                   |
| Field gap | 20                                                                                    |
| Focus     | `focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary`          |
| Dark      | bg #1A2539, border #4A6FA5, text #F0F3FA, placeholder #A9B6CC                         |

---

## 6. Sections

Order and backgrounds: Hero `bg` → About `bg-alt` → Skills `bg` → Projects `bg-alt` → Education `bg` → Certificates `bg-alt` → Contact `bg` → Footer `footer`. Section ids: `home, about, skills, projects, education, certificates, contact`.

### 6.1 Hero (`#home`)

- Layout: lg+ row (`items-center justify-between gap-12`), padding 42 top / 80 bottom. Below lg column, gap 40, padding 32 (phones 24) top / 56 bottom. (Top padding is 8 less than the original design because the sticky navbar now has bottom padding; the first screen looks the same.)
- Alignment: phones left-aligned; **sm–md centered** (text, buttons, socials, and the eyebrow gets lines on both sides); lg+ left-aligned in the two-column row.
- Text column: max-width 600, gap 32 (phones 24).
  - Heading group (gap 12): eyebrow "HELLO, I'M" → h1 "Raymond Charles" + block line "Jimenez" in `blue-400` → title.
  - Lead: max-width 500, `ink-muted`.
  - Buttons: View Projects (primary, arrow) + Download CV (outline, download icon), gap 16 (phones 12, full width).
  - Socials.
- Visual: `relative aspect-[680/690] w-full`, max-width 680 (lg+, ~52% of container), 520 (md), 480 (sm), full width on phones, centered when stacked. Children absolutely positioned in %:
  - Back blob (`blob-back`): left 1.18%, top 9.57%, width 65.04%
  - Front blob (`blob-front`): left 11.76%, top 20.29%, width 73.78%
  - Blobs are **coded**, not part of the photo: `div`s with `bg-blob-back` / `bg-blob-front` and a custom `border-radius`, so their colors switch with the theme. Back blob ≈ slightly squashed circle; front blob ≈ egg (round bottom). Shapes are approximate; tune them against the design screenshots.
  - Dot grid: left 3.53%, top 81.16%, width 12.35% square; `radial-gradient(#8AAEE0 3px, transparent 3.5px)` size 19px, **`bg-repeat-space`** so only whole dots show
  - Photo: left 13.97%, top 2.03%, width 66.76%. The image file is **pre-shaped** (rounded bottom matching the front blob; head extends above it), so it's a plain `<img>`, no masking. Export at ~2× display size (≈ 900–1000px wide) as transparent WebP/PNG with clean edges (no light halo on dark backgrounds).
  - `</>` circle: left 81.18%, top 60.58%, width 9.4% (min 44px), `primary`, icon 40%, shadow badge-glow

### 6.2 About (`#about`)

- Layout: lg+ row, photo left / text right, gap 96, items centered. Below lg column, gap 48.
- Photo box: `relative w-full aspect-[470/540]`, max-width 470 (md 420, sm 400).
  - Tilted shape: `blue-400`, right -2%, top 10%, 62% × 78%, radius 40 (phones 28), rotate 9°.
  - Photo frame: left 0, top 0, 90% × 94%, bg `blue-100`, radius 48 160 48 48 (phones 32 110 32 32), overflow hidden, shadow photo. Photo: transparent cut-out, `w-full h-full object-cover object-bottom`.
  - "Dedicated to · Learning & upskilling" badge: bg `surface`, radius 18, padding 16 22 16 16 (phones 12 16 12 12), gap 14 (phones 10), shadow float. Position bottom 4%; left -6% at lg+ (overhangs), left 0 below. Label 12 / 500 tracking 0.04em muted; value 16 / 600 (phones 14).
  - Dot grid 84×84 at section top-right (not on phones).
- Text column: gap 28 (phones 24). Header group (eyebrow "ABOUT ME", h2, subtitle). Two paragraphs, max-width 580, gap 16.
- Stats `<dl>`: max-width 580, 3 equal columns, 1px `blue-200` dividers, padding 24 each side of a divider (phones 12). Number above label (label 14, phones 12, muted).
- Button: "Let's Work Together" primary + arrow.

### 6.3 Skills (`#skills`)

- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, gap 24 (phones 16).
- Cards (5): Frontend, Backend, Databases, Tools, AI-Assisted Development.
- Card: bg `surface`, 1px `blue-100` border, radius 20, padding 28 (phones 22), gap 24 (phones 20), shadow card-soft.
- Card header: icon tile + gap 16 + title/description (gap 2).
- Chips wrap below.

### 6.4 Projects (`#projects`) — zigzag

- Rows gap 96 (below lg 72). lg+: row, screenshot `flex-[1.15]`, details `flex-1`; second project reversed (`lg:even:flex-row-reverse`). Gap 64 (xl+), 48 (lg), 32 stacked.
- Browser frame: radius 14 (phones 12), overflow hidden, shadow card.
  - Top bar: bg `primary`, padding 12 16 (phones 8 12), gap 10. Three dots 10px (phones 8) `blue-200`, gap 5. URL pill: flex-1, padding 3 10, rounded-full, rgba(255,255,255,0.16), 12px white (phones 11).
  - Screenshot: `aspect-video object-cover object-top`.
  - Walkthrough chip: bottom/right 16 (phones 10), white pill, padding 10 16 (phones 7 12), 14 / 600 (phones 12) #395886, play icon 18 (phones 16), shadow chip; "· 4 screens" muted on desktop.
    - **Behavior (decided, details TBD):** clicking the chip opens a carousel gallery of the project's screens (more than 4 per project). The count in the label comes from the number of images, not hardcoded. To decide when building Projects: lightbox vs in-card, build vs library (e.g. Embla Carousel), keyboard/swipe support, lazy-loading images.
- Details: gap 18 (phones 14).
  - Meta line + badge (gap 8 12, wrap).
  - Name.
  - Description `ink-muted`.
  - Highlights (check list).
  - Tech chips.
  - Buttons: Live Demo (medium primary, external icon) + View Code (medium outline, code icon), gap 12, padding-top 6.
- Dot grid at section top-right (not on phones).

### 6.5 Education (`#education`) — timeline

- `<ol>` gap 32 (phones 24). Item `relative`, padding-left 80 (lg+) / 60 (sm–md) / 36 (phones).
- Dot: 24×24 circle, left 12 (sm–md 8, phones 0), top 28. Current: fill `primary`, 5px `blue-100` border. Past: fill #FFFFFF, 5px `blue-200` border.
- Connector: 2px `blue-100` line at left (dot left + 11), from top 52 down to the next dot.
- Card: bg `bg-alt`, radius 24 (phones 18), padding 32 (phones 20). lg+: row, gap 40 (left `flex-[1.1]`, highlights `flex-1`, vertically centered). Below lg: column, gap 20.
- Left part: icon tile + gap 20 (phones: tile on top, gap 14). Text gap 10:
  - Years (meta style) + status badge.
  - Title.
  - Location: pin icon 18 `blue-400` + text 16 (phones 14) muted, gap 8.
- Items:
  - BS Information Technology — Adamson University, 2023–expected 2027, In progress.
  - Senior High TVL-ICT — Makati High School, 2021–2023.
  - Elementary — Sta. Ana Elementary School, 2011–2016, With Honors.

### 6.6 Certificates (`#certificates`) — featured

- Grid: `grid-cols-1 sm:grid-cols-2 xl:grid-cols-4`, gap 24 (phones 16).
- Featured card (newest), `sm:col-span-2`: bg `primary` (#395886 light), radius 24 (phones 20), shadow card-strong.
  - Wide (sm+): row, items centered, gap 28, padding 16 28 16 16; image `flex-[1.1]`.
  - Phones: column, gap 18, padding 14 14 22.
  - Text (gap 10): LATEST tag → issuer 12 / 600 #D5DEEF → title 22 / 700 white → date 14 #D5DEEF → white button (margin-top 6).
- Small card: bg `surface`, radius 20, padding 12 12 20, gap 14, shadow card.
  - Text block: padding 0 6, gap 6. Issuer (`accent`) → title → date row (calendar 16 `blue-400`, gap 8) → optional "Credential ID: …" 12 muted → "Verify credential" link at bottom (`mt-auto pt-1.5`).
- Certificate image: `aspect-[792/612] object-cover`, radius 12 (featured 14), bg `bg-alt`.
- Order (newest first):
  1. Intro to Front-End Development — Meta (featured)
  2. API Integration — Board Infinity
  3. Ethics of Technology — Notre Dame
  4. CISSP Domain 5 — Infosec
  5. AI Fundamentals — Google
  6. IT Specialist – Network Security — Certiport
  7. IT Specialist – Databases — Certiport

### 6.7 Contact (`#contact`) + footer

- Layout: lg+ row, `items-start`, info `flex-1` / form `flex-[1.1]`, gap 96 (xl+) / 64 (lg); stacked gap 48.
- Info column, gap 32 (phones 24):
  - Header group (eyebrow "CONTACT ME", h2 "Let's Work Together", lead max-width 480).
  - "Open to opportunities" pill.
  - Contact list.
- Contact list: gap 20 (phones 16). Item = icon tile + gap 16 (phones 12) + label above value (gap 2). Items: Email, Phone, LinkedIn, Location.
- Form panel: bg `surface-2`, radius 24 (phones 20), padding 40 (phones 22), gap 20.
  - Fields: title → Name + Email (row from sm, gap 20) → Subject → Message → Send Message button (primary + send icon; left-aligned, full width on phones).
  - **Behavior (decided):** messages are delivered to the owner's email inbox through a form service (planned: Web3Forms, no backend needed). Needs spam protection and success / error states; details to decide when building Contact.
- Footer: bg `footer`, padding 56 (phones 44) top / 32 bottom, side padding = section padding, rows gap 40 (phones 28).
  - Top row (row from sm, space-between, gap 24 40): logo 44 (ring #8AAEE0, "R" white) + name 18/600 white + role 13 #B1C9EF; links #D5DEEF gap 8 32 (phones 8 20), wrap.
  - Bottom row: border-top 1px rgba(213,222,239,0.18), padding-top 24. Contents: © line #B1C9EF, and "Back to top" 14/500 white + up-arrow 16 with 44 tap height. Phones: stacked, Back to top first (`flex-col-reverse sm:flex-row`).

---

## 7. Responsive summary

| Element        | Phones (base)                             | sm                       | md                | lg                               | xl+                                            |
| -------------- | ----------------------------------------- | ------------------------ | ----------------- | -------------------------------- | ---------------------------------------------- |
| Navbar         | logo, hamburger (toggle in menu)          | + toggle                 | + Contact Me      | same as md                       | full links + toggle + Contact Me; no hamburger |
| Hero           | stacked, left-aligned, full-width buttons | stacked, centered        | stacked, centered | row                              | row                                            |
| Section header | stacked                                   | stacked                  | stacked           | row                              | row                                            |
| About          | stacked, no dot grid                      | stacked                  | stacked           | row, badge overhangs             | row                                            |
| Skills         | 1 col                                     | 1 col                    | 2 cols            | 3 cols                           | 3 cols                                         |
| Projects       | stacked, full-width buttons               | stacked                  | stacked           | zigzag                           | zigzag                                         |
| Education card | tile above text                           | header row, body stacked | same              | header + highlights side by side | same                                           |
| Certificates   | 1 col                                     | 2 cols                   | 2 cols            | 2 cols                           | 4 cols, featured spans 2                       |
| Contact        | stacked, 1-col form                       | Name+Email side by side  | same              | row                              | row                                            |
| Footer         | stacked                                   | row                      | row               | row                              | row                                            |

### Recipes

```html
<!-- Section wrapper -->
<section
  id="skills"
  class="bg-bg px-4 py-16 sm:px-8 sm:py-20 md:px-10 md:py-[88px] lg:px-12 lg:py-24 xl:px-16 xl:py-28 2xl:py-32"
>
  <div class="mx-auto max-w-7xl">…</div>
</section>

<!-- Section header -->
<div
  class="mb-10 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
>
  <div class="flex flex-col gap-3">…eyebrow + h2…</div>
  <p class="max-w-[560px] lg:max-w-[440px]">…</p>
</div>

<!-- Navbar visibility -->
<nav class="hidden gap-8 xl:flex 2xl:gap-12">…</nav>
<a class="hidden md:inline-flex">Contact Me</a>
<button
  class="size-11 rounded-xl bg-surface-2 xl:hidden"
  aria-label="Open menu"
>
  …
</button>

<!-- Grids -->
<div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
  …skills…
</div>
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
  …certificates…
</div>

<!-- Project row -->
<article
  class="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 lg:even:flex-row-reverse xl:gap-16"
>
  <div class="w-full lg:flex-[1.15]">…browser frame…</div>
  <div class="lg:flex-1">…details…</div>
</article>
```

Dark mode: toggle `.dark` on `<html>`, save the choice in `localStorage`, and apply it with a tiny inline script in `<head>` to avoid a white flash.
