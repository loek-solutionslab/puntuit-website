# Theme

## Stack

- **Build:** Vite + React + TypeScript
- **CSS:** Tailwind CSS v4 (using `@import "tailwindcss"` and `@theme` block)
- **Font:** Jost (Google Fonts) — weights 300, 400, 500, 600, 700
- **Icons:** lucide-react

---

## `src/index.css` (full source)

```css
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

@import "tailwindcss";

:root {
  font-family: 'Jost', system-ui, sans-serif;
  line-height: 1.6;
  font-weight: 400;
  color-scheme: light;
  color: #1a1a1a;
  background-color: #ffffff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

a {
  font-weight: 500;
  color: #0284c7;
  text-decoration: inherit;
  transition: color 0.2s ease;
}

a:hover {
  color: #0369a1;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  font-weight: 600;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.25rem;
}

h3 {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}

/* Primary buttons - accent color rood */
.btn-primary {
  background-color: #E85D56;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #D14A43;
  box-shadow: 0 10px 15px -3px rgba(232, 93, 86, 0.2);
}

/* Secondary buttons - blauw */
.btn-secondary {
  background-color: white;
  color: #0284c7;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: 2px solid #0284c7;
  transition: all 0.2s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #f0f9ff;
}

/* Accent buttons - rood outline */
.btn-accent {
  background-color: white;
  color: #E85D56;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: 2px solid #E85D56;
  transition: all 0.2s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-accent:hover {
  background-color: #FEF2F2;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid #0ea5e9;
  outline-offset: 2px;
  border-radius: 0.5rem;
}

.container {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.section-padding {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

@theme {
  /* Blauwe tinten */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
  
  /* Rode accent kleuren */
  --color-accent-50: #FEF2F2;
  --color-accent-100: #FEE2E2;
  --color-accent-200: #FECACA;
  --color-accent-300: #FCA5A5;
  --color-accent-400: #F87171;
  --color-accent-500: #EF4444;
  --color-accent-600: #E85D56;
  --color-accent-700: #D14A43;
  --color-accent-800: #B91C1C;
  --color-accent-900: #7F1D1D;
}

/* Logo styling */
.logo svg {
  height: 40px;
  width: auto;
}

@media (min-width: 768px) {
  .logo svg {
    height: 48px;
  }
}
```

---

## `tailwind.config.js` (full source)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f0abfc',
          300: '#e879f9',
          400: '#d946ef',
          500: '#c026d3',
          600: '#a21caf',
          700: '#86198f',
          800: '#701a75',
          900: '#4a044e',
        },
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## Color System

### Primary (Blue) — used for links, headings, trust elements

| Token | Hex | Usage |
|---|---|---|
| `primary-50` | `#f0f9ff` | Light backgrounds, hover states |
| `primary-100` | `#e0f2fe` | Badge backgrounds, subtitle text on blue hero |
| `primary-600` | `#0284c7` | **Main brand blue** — hero bg, links, icons, nav hover |
| `primary-700` | `#0369a1` | Link hover, CTA section bg |

### Accent (Red) — used for CTAs, active nav, top bar

| Token | Hex | Usage |
|---|---|---|
| `accent-50` | `#FEF2F2` | Active mobile nav bg, btn-accent hover |
| `accent-600` | `#E85D56` | **Main accent red** — btn-primary bg, top bar, active nav text |
| `accent-700` | `#D14A43` | btn-primary hover |

### Key hardcoded hex values in components

Many components use hex values directly instead of Tailwind tokens:
- `#0284c7` — primary-600 (hero bg, icon colors, link colors)
- `#E85D56` — accent-600 (top bar, active indicators, CTA buttons)
- `#D14A43` — accent-700 (button hover)
- `#FEF2F2` — accent-50 (active nav background)
- `#1a1a1a` — base text color

### Utility Classes

| Class | Purpose |
|---|---|
| `.container` | `max-width: 80rem`, responsive horizontal padding |
| `.section-padding` | `py-16` on mobile, `py-24` on `md:` |
| `.btn-primary` | Red filled button |
| `.btn-secondary` | Blue outlined button |
| `.btn-accent` | Red outlined button |

### Typography

- **Font:** Jost (300–700)
- **Base:** 400 weight, `line-height: 1.6`, color `#1a1a1a`
- **Headings:** 600 weight, `line-height: 1.2`
- **h1:** 3rem (2rem on mobile)
- **h2:** 2.25rem (1.5rem on mobile)
- **h3:** 1.5rem
