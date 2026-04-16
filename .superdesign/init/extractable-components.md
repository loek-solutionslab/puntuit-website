# Extractable Components

Layout components that wrap every page and can be extracted/reused in design drafts.

---

## 1. Header

**File:** `src/components/Header.tsx`
**Type:** Layout component (fixed navigation)

### Structure

```
<header> (fixed, z-50, full-width)
  ├── Top bar (bg-[#E85D56], red accent strip)
  │   ├── Phone link + Mail link (left)
  │   └── Trust statement "Meer dan 500 organisaties vertrouwen ons" (right)
  │
  └── <nav> (container, py-6)
      ├── Logo (inline SVG, dark text, red dot)
      ├── Desktop nav (hidden lg:flex)
      │   ├── "Voor Werkgevers" dropdown (hover, group-hover)
      │   │   └── EMPLOYER_DROPDOWN_LINKS (4 items)
      │   ├── NAV_LINKS (5 flat links)
      │   └── CTA button "Vraag offerte aan" (.btn-primary)
      │
      ├── Mobile hamburger button (lg:hidden)
      └── Mobile nav panel (collapsible, max-h transition)
          ├── "Voor Werkgevers" section label
          ├── EMPLOYER_DROPDOWN_LINKS
          ├── NAV_LINKS
          └── CTA button
```

### Dependencies

- `react` (useState, useEffect)
- `react-router-dom` (Link, useLocation)
- `lucide-react` (Menu, X, Phone, Mail, ChevronDown)
- `../lib/constants` (COMPANY, EMPLOYER_DROPDOWN_LINKS, NAV_LINKS)

### Key behaviors

- Scroll detection: adds blur + shadow after 20px scroll
- Mobile menu closes on route change
- Active link detection with red underline indicator
- Logo is an inline SVG component (dark version, `#1a1a1a` fill)

---

## 2. Footer

**File:** `src/components/Footer.tsx`
**Type:** Layout component (site footer)

### Structure

```
<footer> (bg-gray-900, text-white)
  ├── Main content (container, py-16)
  │   └── 5-column grid (lg:grid-cols-5)
  │       ├── Brand column
  │       │   ├── Logo (white SVG variant)
  │       │   ├── Description text
  │       │   └── LVV certification badge (external image)
  │       │
  │       ├── Diensten column
  │       │   └── EMPLOYER_DROPDOWN_LINKS (4 items)
  │       │
  │       ├── Informatie column
  │       │   └── 4 static links (Over Ons, Team, Kennisbank, FAQ)
  │       │
  │       ├── Contact column
  │       │   ├── Phone (with icon)
  │       │   ├── Email (with icon)
  │       │   └── WhatsApp (with icon, external link)
  │       │
  │       └── Legal column
  │           ├── Privacyverklaring
  │           ├── Algemene voorwaarden
  │           └── KvK number
  │
  └── Copyright bar (border-t border-gray-800)
      ├── "© 2026 PuntUit |"
      └── "Alle rechten voorbehouden"
```

### Dependencies

- `react-router-dom` (Link)
- `lucide-react` (Mail, MessageCircle, Phone)
- `../lib/constants` (COMPANY, EMPLOYER_DROPDOWN_LINKS)

### Key behaviors

- Logo is a white variant of the inline SVG (`#ffffff` fill)
- Contact icons use blue color (`#0284c7`) for contrast on dark background
- WhatsApp link constructs URL from COMPANY.whatsapp
- LVV badge loaded from external URL

---

## Common Page Pattern

All pages follow the same structural pattern that can be extracted:

```
<>
  <SEO title="..." description="..." canonicalUrl="..." />
  <div className="pt-28">                    ← offset for fixed header
    <section className="bg-[#0284c7] text-white">  ← blue hero
      <div className="container py-20 max-w-Xxl">
        <h1>...</h1>
        <p>...</p>
      </div>
    </section>
    <section className="section-padding bg-white">   ← alternating sections
      ...
    </section>
    <section className="section-padding bg-gray-50">
      ...
    </section>
  </div>
</>
```
