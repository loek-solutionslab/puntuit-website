# PuntUit Design System

## Product Context

PuntUit is an external "vertrouwenspersoon" (confidential counselor) service for Dutch organizations. The website targets two ICPs: HR professionals and company directors/owners. The design must convey **trust**, **professionalism**, and **approachability** — authoritative but never cold.

- Language: Dutch (nl-NL)
- Tone: Professional, warm, reassuring
- Framework: React + Tailwind CSS v4 (CSS-first `@theme` config)
- Icon library: Lucide React (SVG only — no emoji icons)

---

## Brand Colors

### Primary — Blue

Used for branding, headings, links, hero backgrounds, icon badges, and trust signals.

| Token               | Hex       | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `primary-50`         | `#f0f9ff` | Light tinted backgrounds, hover states     |
| `primary-100`        | `#e0f2fe` | Light badges, subtle backgrounds           |
| `primary-200`        | `#bae6fd` | Borders, dividers                          |
| `primary-300`        | `#7dd3fc` | Secondary icons                            |
| `primary-400`        | `#38bdf8` | Highlights                                 |
| `primary-500`        | `#0ea5e9` | —                                          |
| **`primary-600`**    | **`#0284c7`** | **Primary brand color** — hero bg, links, headings, icon badges |
| `primary-700`        | `#0369a1` | Link hover, darker accents                 |
| `primary-800`        | `#075985` | Deep emphasis                              |
| `primary-900`        | `#0c4a6e` | Darkest blue — footer bg, contrast text    |

### Accent — Red

Used exclusively for CTAs, primary action buttons, and attention-drawing elements.

| Token               | Hex       | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `accent-50`          | `#FEF2F2` | Hover bg for accent outline buttons        |
| `accent-100`         | `#FEE2E2` | Light accent backgrounds                   |
| `accent-200`         | `#FECACA` | —                                          |
| `accent-300`         | `#FCA5A5` | —                                          |
| `accent-400`         | `#F87171` | —                                          |
| `accent-500`         | `#EF4444` | —                                          |
| **`accent-600`**     | **`#E85D56`** | **Primary CTA color** — btn-primary bg, accent borders |
| `accent-700`         | `#D14A43` | Primary button hover                       |
| `accent-800`         | `#B91C1C` | —                                          |
| `accent-900`         | `#7F1D1D` | —                                          |

### Neutrals

| Token        | Value     | Usage                          |
| ------------ | --------- | ------------------------------ |
| Text         | `#1a1a1a` | Default body text              |
| Background   | `#ffffff` | Page background                |
| Gray scale   | Tailwind defaults (`gray-50` through `gray-900`) | Borders, muted text, section backgrounds |

### Forbidden Colors

- NO purple, pink, or neon colors
- NO colors outside the blue/red/gray palette
- The `secondary` scale in `tailwind.config.js` (purple) is **deprecated and must not be used**

---

## Typography

### Font Family

```
font-family: 'Jost', system-ui, sans-serif;
```

Loaded via Google Fonts with weights: 300, 400, 500, 600, 700.

- NO serif fonts
- NO decorative or display fonts
- Jost is the only permitted typeface

### Type Scale

| Element | Desktop     | Mobile (≤768px) | Weight | Line-height |
| ------- | ----------- | --------------- | ------ | ----------- |
| `h1`    | `3rem`      | `2rem`          | 600    | 1.2         |
| `h2`    | `2.25rem`   | `1.5rem`        | 600    | 1.2         |
| `h3`    | `1.5rem`    | `1.5rem`        | 600    | 1.2         |
| Body    | `1rem`      | `1rem`          | 400    | 1.6         |
| Small   | `0.875rem`  | `0.875rem`      | 400    | 1.6         |

### In-page Heading Overrides

Hero headings often use larger utility classes:

```
text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]
```

---

## Buttons

All buttons: `font-weight: 500`, `border-radius: 0.5rem`, `padding: 0.75rem 1.5rem`, `transition: all 0.2s ease`, `cursor: pointer`, `display: inline-block`.

### `.btn-primary` — Primary CTA

```css
background-color: #E85D56;
color: white;
```

Hover: `background-color: #D14A43; box-shadow: 0 10px 15px -3px rgba(232, 93, 86, 0.2);`

### `.btn-secondary` — Secondary / Blue Outline

```css
background-color: white;
color: #0284c7;
border: 2px solid #0284c7;
```

Hover: `background-color: #f0f9ff;`

### `.btn-accent` — Accent / Red Outline

```css
background-color: white;
color: #E85D56;
border: 2px solid #E85D56;
```

Hover: `background-color: #FEF2F2;`

### Hero Ghost Button (on dark bg)

```
bg-white/10 backdrop-blur-sm text-white border border-white/25 rounded-lg
hover:bg-white/20
```

### Button Sizing in Context

Default: `px-6 py-3` (`0.75rem 1.5rem`)
Hero CTAs: `px-7 py-3.5 text-base` with `inline-flex items-center justify-center gap-2`

---

## Links

```css
color: #0284c7;
font-weight: 500;
text-decoration: inherit;
transition: color 0.2s ease;
```

Hover: `color: #0369a1;`

---

## Focus States

```css
outline: 3px solid #0ea5e9;
outline-offset: 2px;
border-radius: 0.5rem;
```

Applies to: `a`, `button`, `input`, `textarea`, `select` on `:focus-visible`.

---

## Layout

### Container

```css
max-width: 80rem; /* 1280px */
margin: 0 auto;
padding-left: 1rem;    /* default */
padding-left: 1.5rem;  /* sm: ≥640px */
padding-left: 2rem;    /* lg: ≥1024px */
```

### Section Padding

```css
padding-top: 4rem;     /* default */
padding-bottom: 4rem;
padding-top: 6rem;     /* md: ≥768px */
padding-bottom: 6rem;
```

### Breakpoints (Tailwind defaults)

| Name | Min-width |
| ---- | --------- |
| `sm` | `640px`   |
| `md` | `768px`   |
| `lg` | `1024px`  |
| `xl` | `1280px`  |
| `2xl`| `1536px`  |

### Grid Patterns

- Hero: `grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`
- Feature cards: `grid md:grid-cols-2 lg:grid-cols-3 gap-6` or `gap-8`
- Two-column content: `grid lg:grid-cols-2 gap-12`

---

## Component Patterns

### Hero Section

- Full-width background: `bg-[#0284c7] text-white overflow-hidden`
- Inner container: `container py-16 md:py-24 lg:py-28`
- Content above fold with heading, subtitle, and CTA buttons
- Optional decorative right column on `lg:`
- Top padding on page wrapper: `pt-28` (accounts for fixed header)

### Trust Bar

Sits directly below the hero:

```
bg-gray-50 border-b border-gray-200
```

Items: `flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-500`
Each item: `flex items-center gap-1.5` with a `w-4 h-4 text-[#0284c7]` Lucide icon

### Cards

```
bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow
```

Or larger radius: `rounded-2xl`

Internal padding: `p-6` or `p-8`

### Section Labels / Eyebrow Text

```
text-[#0284c7] text-xs font-semibold uppercase tracking-widest
```

Used above section headings to categorize content.

### Icon Badges

Small colored containers wrapping Lucide icons:

```
w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center
```

Icon inside: `w-5 h-5 text-[#0284c7]`

### Stat Callouts (floating badges)

```
bg-white rounded-xl shadow-xl px-5 py-3 text-[#0284c7]
```

Number: `text-2xl font-bold`
Label: `text-xs text-gray-500`

---

## Logo

```css
.logo svg {
  height: 40px;     /* mobile */
  height: 48px;     /* md: ≥768px */
  width: auto;
}
```

---

## Spacing Scale (Tailwind defaults)

| Class   | Value    |
| ------- | -------- |
| `gap-1` | `0.25rem` |
| `gap-2` | `0.5rem`  |
| `gap-3` | `0.75rem` |
| `gap-4` | `1rem`    |
| `gap-6` | `1.5rem`  |
| `gap-8` | `2rem`    |
| `gap-12`| `3rem`    |
| `gap-16`| `4rem`    |

---

## Shadow Scale

| Class         | Usage                    |
| ------------- | ------------------------ |
| `shadow-sm`   | Cards at rest            |
| `shadow-md`   | Cards on hover           |
| `shadow-xl`   | Floating stat badges     |
| `shadow-lg`   | Elevated modals/dropdowns|

---

## Border Radius

| Class          | Value     | Usage                  |
| -------------- | --------- | ---------------------- |
| `rounded-lg`   | `0.5rem`  | Buttons, icon badges   |
| `rounded-xl`   | `0.75rem` | Cards, stat callouts   |
| `rounded-2xl`  | `1rem`    | Large cards, images    |

---

## Transitions

Default: `transition: all 0.2s ease;`

Tailwind utilities used: `transition-colors`, `transition-shadow`, `transition-all`

---

## Constraints & Rules

1. **Icons**: Lucide React SVG icons ONLY — no emoji, no icon fonts, no inline SVG strings
2. **Fonts**: Jost ONLY — no serif, no decorative, no monospace for UI
3. **Colors**: Blue (`#0284c7`) + Red (`#E85D56`) + Gray palette ONLY — no purple, pink, neon, or off-brand colors
4. **CTA hierarchy**: Red (`btn-primary`) for main actions, blue outline (`btn-secondary`) for secondary, red outline (`btn-accent`) for tertiary
5. **Backgrounds**: White (`#ffffff`) or `gray-50` for sections; `#0284c7` (primary-600) for hero/feature highlights; never dark gray or black backgrounds
6. **Language**: All UI copy in Dutch (nl-NL)
7. **Accessibility**: All interactive elements must have visible focus styles (3px `#0ea5e9` outline)
