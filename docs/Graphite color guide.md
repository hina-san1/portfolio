# RC Portfolio — Graphite Color Guide

Nov 18, 2026 · @RC

## 1. Overview

Graphite is a black-and-white theme built from one family of cool grays. There is no brand color: hierarchy comes from **lightness**, and your photo is the only real color on the page, so it naturally becomes the focus.

**Three rules**

1. **One background per theme.** Every section uses the same background (#FFFFFF in light, #0C0C0E in dark). Sections are separated by spacing, not by background changes.
2. **Gray steps instead of an accent color.** Headings are the strongest shade, "Jimenez" and labels a step softer, body text softer again.
3. **Use roles, not hex codes.** In code, write `bg-surface` or `text-ink-muted`, never `#F5F5F5`. Each role swaps automatically in dark mode (section 6).

## 2. The Graphite scale

Thirteen grays, light to dark. Six come straight from the Graphite palette (bold); #0C0C0E replaces its #0E0E10 by choice; the rest fill the gaps a real interface needs. Use only these.

| Step         | Hex         | Source                       |
| ------------ | ----------- | ---------------------------- |
| graphite-0   | #FFFFFF     | added (white)                |
| graphite-50  | **#F5F5F5** | palette                      |
| graphite-100 | #DCDCE3     | added                        |
| graphite-200 | **#C9C9D2** | palette                      |
| graphite-300 | **#9A9AA6** | palette                      |
| graphite-400 | #86868F     | added                        |
| graphite-500 | **#63636E** | palette                      |
| graphite-600 | #4A4A52     | added                        |
| graphite-700 | **#3E3E45** | palette                      |
| graphite-800 | #2A2A30     | added                        |
| graphite-850 | **#232327** | palette                      |
| graphite-900 | #1C1C21     | added                        |
| graphite-950 | #0C0C0E     | your pick (replaces #0E0E10) |

## 3. Light theme

A white page. Cards are white too and stand out by their 1px `line` border; whitesmoke (#F5F5F5) is the soft fill for chips, inputs and hover states.

| Role            | Hex     | Used for                                                                                               |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| Page background | #FFFFFF | Every section, mobile menu                                                                             |
| Surface         | #FFFFFF | Cards (skills, education, certificates, contact form), always with a 1px `line` border; toggle knob    |
| Surface inset   | #F5F5F5 | Chips and badges (on the page and inside cards), form inputs, hover fills (outline button, menu links) |
| Line            | #DCDCE3 | Card borders, back hero blob, About photo frame, toggle track, icon buttons, outline button pressed    |
| Soft gray       | #C9C9D2 | Front hero blob, stat dividers, timeline line, hover on `line` fills                                   |
| Decoration      | #9A9AA6 | Dot patterns, logo ring                                                                                |
| Name accent     | #86868F | "Jimenez"                                                                                              |
| Muted text      | #63636E | Body text, labels, eyebrows, "Full-Stack", icons                                                       |
| Charcoal        | #3E3E45 | Icon tiles, outline button border, featured certificate, browser bar, `</>` badge, eyebrow line        |
| Ink             | #232327 | Headings, nav links, logo "R", footer background                                                       |
| Primary         | #0C0C0E | Filled buttons (white text)                                                                            |

Footer text sits on #232327: links #DCDCE3, copyright and role #C9C9D2.

## 4. Dark theme

A near-black page; surfaces get lighter the higher they sit, and buttons flip to off-white.

| Role            | Hex     | Used for                                                                                                             |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| Page background | #0C0C0E | Every section, mobile menu                                                                                           |
| Surface         | #1C1C21 | Cards (skills, certificates), form inputs, footer background                                                         |
| Surface raised  | #2A2A30 | Chips, contact form panel, education cards, hover fills (outline button, menu links)                                 |
| Back blob       | #232327 | Back hero blob                                                                                                       |
| Line            | #3E3E45 | Borders, front hero blob, About photo frame, "Dedicated to" card, toggle track, icon buttons, outline button pressed |
| Tile            | #4A4A52 | Icon tiles, `</>` badge, featured certificate, browser bar, dot patterns, stat dividers, hover on `line` fills       |
| Name accent     | #63636E | "Jimenez", logo ring, About tilted shape                                                                             |
| Muted text      | #9A9AA6 | Body text, captions                                                                                                  |
| Label           | #C9C9D2 | Eyebrows, "Full-Stack", nav active text, icons, footer links                                                         |
| Ink             | #F5F5F5 | Headings, logo "R", eyebrow line, active nav bar                                                                     |
| Primary         | #F5F5F5 | Filled buttons (text and icons #232327)                                                                              |

## 5. Components

The same component in both themes, so you can build it once with tokens.

| Component                       | Light                                                                    | Dark                                                                     |
| ------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Primary button                  | bg #0C0C0E · text #FFFFFF · hover 90% opacity · pressed 80%              | bg #F5F5F5 · text #232327 · hover 90% opacity · pressed 80%              |
| Outline button                  | bg transparent · border + text #3E3E45 · hover #F5F5F5 · pressed #DCDCE3 | bg transparent · border + text #F5F5F5 · hover #2A2A30 · pressed #3E3E45 |
| Icon button (menu, close)       | bg #DCDCE3 · hover #C9C9D2                                               | bg #3E3E45 · hover #4A4A52                                               |
| Mobile menu link                | hover #F5F5F5 · pressed #DCDCE3                                          | hover #2A2A30 · pressed #3E3E45                                          |
| Text link ("Verify credential") | #63636E                                                                  | #C9C9D2                                                                  |
| Skills card                     | bg #FFFFFF · border #DCDCE3                                              | bg #1C1C21 · border #3E3E45                                              |
| Skill chip (inside card)        | bg #F5F5F5 · text #232327                                                | bg #2A2A30 · text #F5F5F5                                                |
| Tech chip, badge (on page)      | bg #F5F5F5                                                               | bg #2A2A30                                                               |
| Education / certificate card    | bg #FFFFFF · border #DCDCE3                                              | bg #2A2A30 / #1C1C21                                                     |
| Featured certificate            | bg #3E3E45 · text #FFFFFF                                                | bg #4A4A52 · text #F5F5F5                                                |
| Icon tile                       | bg #3E3E45 · icon #FFFFFF                                                | bg #4A4A52 · icon #FFFFFF                                                |
| Contact form panel              | bg #FFFFFF · border #DCDCE3                                              | bg #2A2A30                                                               |
| Input                           | bg #F5F5F5 · border #63636E                                              | bg #1C1C21 · border #4A4A52                                              |
| Theme toggle                    | track #DCDCE3 · knob #FFFFFF                                             | track #3E3E45 · knob #F5F5F5                                             |
| Hero blobs (back / front)       | #DCDCE3 / #C9C9D2                                                        | #232327 / #3E3E45                                                        |
| Footer                          | bg #232327 · links #DCDCE3                                               | bg #1C1C21 · links #C9C9D2                                               |

## 6. Tailwind v4 tokens

Paste into `src/index.css`. Write role classes in your markup (`bg-surface`, `text-ink-muted`); the `.dark` block swaps every role at once, so you rarely need `dark:` classes.

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: 'Poppins', system-ui, sans-serif;

  /* Graphite scale */
  --color-graphite-0: #ffffff;
  --color-graphite-50: #f5f5f5;
  --color-graphite-100: #dcdce3;
  --color-graphite-200: #c9c9d2;
  --color-graphite-300: #9a9aa6;
  --color-graphite-400: #86868f;
  --color-graphite-500: #63636e;
  --color-graphite-600: #4a4a52;
  --color-graphite-700: #3e3e45;
  --color-graphite-800: #2a2a30;
  --color-graphite-850: #232327;
  --color-graphite-900: #1c1c21;
  --color-graphite-950: #0c0c0e;

  /* Roles: light */
  --color-bg: var(--color-graphite-0);
  --color-surface: var(--color-graphite-0);
  --color-surface-2: var(--color-graphite-50);
  --color-line: var(--color-graphite-100);
  --color-line-strong: var(--color-graphite-200);
  --color-blob-back: var(--color-graphite-100);
  --color-blob-front: var(--color-graphite-200);
  --color-tile: var(--color-graphite-700);
  --color-charcoal: var(--color-graphite-700);
  --color-name: var(--color-graphite-400);
  --color-label: var(--color-graphite-500);
  --color-ink-muted: var(--color-graphite-500);
  --color-ink: var(--color-graphite-850);
  --color-primary: var(--color-graphite-950);
  --color-on-primary: var(--color-graphite-0);
  --color-footer: var(--color-graphite-850);
}

.dark {
  --color-bg: var(--color-graphite-950);
  --color-surface: var(--color-graphite-900);
  --color-surface-2: var(--color-graphite-800);
  --color-line: var(--color-graphite-700);
  --color-line-strong: var(--color-graphite-600);
  --color-blob-back: var(--color-graphite-850);
  --color-blob-front: var(--color-graphite-700);
  --color-tile: var(--color-graphite-600);
  --color-charcoal: var(--color-graphite-50);
  --color-name: var(--color-graphite-500);
  --color-label: var(--color-graphite-200);
  --color-ink-muted: var(--color-graphite-300);
  --color-ink: var(--color-graphite-50);
  --color-primary: var(--color-graphite-50);
  --color-on-primary: var(--color-graphite-850);
  --color-footer: var(--color-graphite-900);
}
```

Example: `<a class="rounded-full bg-primary px-7 py-3.5 text-on-primary">View Projects</a>` is near-black with white text in light, off-white with dark text in dark.

Two roles beyond the palette tables: `charcoal` (outline button border and text, eyebrow line) and `line-strong` (hover and pressed fills, one step past `line`).

## 7. Contrast and rules

WCAG asks for **4.5:1** for normal text and **3:1** for large text (24px+, or 18.5px+ bold).

| Text              | On               | Ratio | Use for         |
| ----------------- | ---------------- | ----- | --------------- |
| #63636E body      | #FFFFFF light bg | 5.93  | Any text ✓      |
| #86868F "Jimenez" | #FFFFFF light bg | 3.61  | Large text only |
| #FFFFFF           | #3E3E45 tile     | 10.6  | Any text ✓      |
| #9A9AA6 body      | #0C0C0E dark bg  | \~6.9 | Any text ✓      |
| #C9C9D2 label     | #0C0C0E dark bg  | 11.7  | Any text ✓      |
| #63636E "Jimenez" | #0C0C0E dark bg  | 3.29  | Large text only |

### Do

- Use only the 13 scale colors, through role tokens (`bg-surface`, `text-ink-muted`).
- Keep one page background per theme: #FFFFFF light, #0C0C0E dark. Every section shares it.
- Separate cards from the page with a 1px `line` border, not shadows. In light, cards and page are both white, so the border is required.
- Never put `surface` fills (cards, hover states) straight on the page without a border in light: white on white is invisible. Use `surface-2` for fills on the page.
- Keep primary buttons the strongest color on screen (near-black in light, off-white in dark).

### Don't

- Write raw hex in components. If a color is missing, add a token first.
- Use the `name` color (#86868F / #63636E) for small text. It's only for the big hero name.
- Use pure #000000 for backgrounds or buttons.
- Add a new gray between steps. Pick the nearest step instead.
