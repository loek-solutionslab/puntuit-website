# PuntUit Website

Een complete multi-page website voor PuntUit - Externe Vertrouwenspersonen met unieke aanpak.

## Tech Stack

- **Vite** - Build tool
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icons

## Pagina's

1. **Home (/)** - Onze service met alle diensten, voordelen, FAQ en testimonials
2. **Tarieven (/tarieven)** - Prijzen en pakketten
3. **Blog (/blog)** - Artikelen en nieuws
4. **Contact (/contact)** - Contactformulier en contactgegevens

## Features

- **Scroll-to-top** - Automatisch naar boven scrollen bij paginawissel
- **Responsive design** - Werkt op desktop, tablet en mobiel
- **Mobiel menu** - Hamburger menu op kleine schermen
- **Smooth animations** - Overgangen en hover effects
- **SEO optimized** - Meta tags en Open Graph
- **Contact formulier** - Werkend formulier met validatie
- **FAQ accordion** - Uitklapbare veelgestelde vragen

## Getting Started

### Installatie

```bash
cd puntuit-website
npm install
```

### Development server

```bash
npm run dev
```

Open http://localhost:5173 in je browser.

### Productie build

```bash
npm run build
```

De build output staat in de `dist` map.

### Preview productie build

```bash
npm run preview
```

## Projectstructuur

```
puntuit-website/
├── src/
│   ├── components/       # Herbruikbare componenten
│   │   ├── Header.tsx   # Navigatie header
│   │   └── Footer.tsx   # Footer met contact info
│   ├── pages/           # Pagina componenten
│   │   ├── Home.tsx     # Homepage
│   │   ├── Tarieven.tsx # Prijzen pagina
│   │   ├── Blog.tsx     # Blog pagina
│   │   └── Contact.tsx  # Contact pagina
│   ├── hooks/           # Custom React hooks
│   │   └── useScrollToTop.ts  # Scroll-to-top functionaliteit
│   ├── lib/             # Utilities en constanten
│   │   └── constants.ts # Alle content en data
│   ├── App.tsx          # Main app component met routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Belangrijke componenten

### ScrollToTop

De `ScrollToTop` hook zorgt ervoor dat de pagina automatisch naar boven scrolled wanneer de gebruiker van pagina wisselt:

```typescript
// src/hooks/useScrollToTop.ts
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}
```

### Header

De Header bevat:
- Sticky navigatie
- Top bar met contact info
- Mobiel hamburger menu
- Active link highlighting

### Footer

De Footer bevat:
- Bedrijfsinformatie
- Snelle links
- Contactgegevens
- Adressen
- Copyright

## Styling

We gebruiken Tailwind CSS v4 met een custom configuratie:
- **Primary color**: Sky blue (#0284c7)
- **Font**: Jost (Google Fonts)
- **Custom classes**: btn-primary, btn-secondary, container, section-padding

## Content

Alle content is gedefinieerd in `src/lib/constants.ts`:
- Bedrijfsgegevens
- Navigatie links
- Diensten
- Voordelen
- FAQ's
- Testimonials
- Prijzen
- Blog posts

## Afbeeldingen

Alle afbeeldingen worden geladen van de originele PuntUit website URLs.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Licentie

© 2025 PuntUit. Alle rechten voorbehouden.
