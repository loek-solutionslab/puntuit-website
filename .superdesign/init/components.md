# Shared UI Components

This project has **NO separate UI component library**. Buttons are CSS classes defined in `src/index.css`. Shared components are the SEO helmet wrapper and scroll-to-top hook.

---

## Button Styles (CSS classes in `src/index.css`)

The project uses three button CSS classes. They are applied directly to `<Link>`, `<button>`, or `<a>` elements.

| Class | Purpose | Colors |
|---|---|---|
| `.btn-primary` | Main CTA (red/accent) | bg `#E85D56`, text white |
| `.btn-secondary` | Secondary action (blue outline) | bg white, border/text `#0284c7` |
| `.btn-accent` | Accent action (red outline) | bg white, border/text `#E85D56` |

Usage examples from the codebase:

```tsx
<Link to="/contact" className="btn-primary">Vraag offerte aan</Link>
<Link to="/contact" className="btn-primary text-sm">Vraag offerte aan</Link>
<Link to="/contact" className="btn-primary inline-flex items-center gap-2">
  Vraag vrijblijvende offerte aan
  <ArrowRight className="w-4 h-4" />
</Link>
```

---

## `SEO` Component

**File:** `src/components/seo/SEO.tsx`
**Import:** `import { SEO } from '../components/seo';`

```tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://puntuit.nl/wp-content/uploads/2024/07/shared-logo-1.png',
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  const siteUrl = 'https://puntuit.nl';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullTitle = title.includes('PuntUit') ? title : `${title} | PuntUit`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PuntUit" />
      <meta property="og:locale" content="nl_NL" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="author" content="PuntUit" />
      <meta name="theme-color" content="#0284c7" />
    </Helmet>
  );
}
```

---

## `SchemaMarkup` Component

**File:** `src/components/seo/SchemaMarkup.tsx`
**Import:** `import { SchemaMarkup } from '../components/seo';`

```tsx
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../../lib/constants';

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'website' | 'webpage' | 'service' | 'faqPage';
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}

export function SchemaMarkup({
  type,
  pageUrl = 'https://puntuit.nl',
  pageTitle,
  pageDescription,
  breadcrumb,
}: SchemaMarkupProps) {
  const baseUrl = 'https://puntuit.nl';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: baseUrl,
    logo: 'https://puntuit.nl/wp-content/uploads/2024/07/shared-logo-1.png',
    description: COMPANY.tagline,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: COMPANY.addresses.map(addr => ({
      '@type': 'PostalAddress',
      streetAddress: addr.street,
      addressLocality: addr.city.split(',')[0].trim(),
      addressCountry: 'NL',
    })),
    sameAs: [
      'https://www.linkedin.com/company/puntuit',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.name,
    url: baseUrl,
    logo: 'https://puntuit.nl/wp-content/uploads/2024/07/shared-logo-1.png',
    description: COMPANY.tagline,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.addresses[0].street,
      addressLocality: COMPANY.addresses[0].city.split(',')[0].trim(),
      postalCode: COMPANY.addresses[0].city.split(',')[1]?.trim() || '',
      addressCountry: 'NL',
    },
    areaServed: 'NL',
    serviceType: 'Externe Vertrouwenspersoon',
    priceRange: '€€',
    openingHours: ['Mo-Fr 09:00-21:00'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vertrouwenspersoon Diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gratis Spreekuur',
            description: 'Werknemers kunnen gratis gebruik maken van ons spreekuur',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hulpvraag Platform',
            description: 'Online platform voor hulpvragen van medewerkers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Vertrouwenspersoon',
            description: 'Altijd bereikbaar via telefoon, mail of WhatsApp',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle || COMPANY.name,
    description: pageDescription || COMPANY.tagline,
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: COMPANY.name,
      url: baseUrl,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://puntuit.nl/wp-content/uploads/2024/07/shared-logo-1.png',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Externe Vertrouwenspersoon',
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: baseUrl,
    },
    description: 'PuntUit biedt externe vertrouwenspersonen met een unieke aanpak gericht op bewustwording, preventie en laagdrempelige bereikbaarheid.',
    areaServed: 'Nederland',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pakketten',
      itemListElement: [
        {
          '@type': 'Offer',
          price: '475',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          itemOffered: {
            '@type': 'Service',
            name: 'Kleine organisaties',
            description: 'Tot 250 werknemers / vrijwilligers',
          },
        },
        {
          '@type': 'Offer',
          price: '950',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          itemOffered: {
            '@type': 'Service',
            name: 'MKB',
            description: '250-500 werknemers / vrijwilligers',
          },
        },
        {
          '@type': 'Offer',
          price: '1425',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          itemOffered: {
            '@type': 'Service',
            name: 'Groot',
            description: '500+ werknemers / vrijwilligers',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = breadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
        })),
      }
    : null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hoe verloopt het proces als we klant willen worden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We sturen u een offerte die digitaal getekend kan worden. Direct nadat de offerte getekend is kunnen de medewerkers gebruik maken van onze diensten. We sturen dan direct twee welkomstmails.',
        },
      },
      {
        '@type': 'Question',
        name: 'Werken jullie ook voor organisaties met een interne VP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja! Veel van onze opdrachtgevers hebben ook een interne vertrouwenspersoon. Met zowel een interne als een externe vertrouwenspersoon kan de melder kiezen wat deze het prettigst vindt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Waar voeren jullie de gesprekken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We hebben een abonnement waarmee we in heel Nederland ruimte beschikbaar hebben die we kunnen reserveren als spreekruimte. De afspraken voor het gratis spreekuur zijn altijd online of telefonisch.',
        },
      },
    ],
  };

  let schema;
  switch (type) {
    case 'organization':
      schema = organizationSchema;
      break;
    case 'localBusiness':
      schema = localBusinessSchema;
      break;
    case 'website':
      schema = websiteSchema;
      break;
    case 'webpage':
      schema = webpageSchema;
      break;
    case 'service':
      schema = serviceSchema;
      break;
    case 'faqPage':
      schema = faqSchema;
      break;
    default:
      schema = organizationSchema;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
```

---

## SEO barrel export

**File:** `src/components/seo/index.ts`

```ts
export { SEO } from './SEO';
export { SchemaMarkup } from './SchemaMarkup';
```

---

## `ScrollToTop` Hook/Component

**File:** `src/hooks/useScrollToTop.ts`
**Import:** `import { ScrollToTop } from './hooks/useScrollToTop';`

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

---

## Constants

**File:** `src/lib/constants.ts`

```ts
export const COMPANY = {
  name: 'PuntUit',
  tagline: 'Externe Vertrouwenspersoon voor Nederland',
  email: 'info@puntuit.nl',
  phone: '085 – 107 12 56',
  whatsapp: '+31 85 107 12 56',
  addresses: [
    {
      street: 'Stammerhove 3',
      city: '1112 VA, Diemen',
    },
    {
      street: 'Vleerstraat 78',
      city: '2513 VJ, Den Haag',
    },
  ],
  kvk: '87786516',
  year: 2026,
};

export const NAV_LINKS = [
  { name: 'Voor Medewerkers', href: '/voor-medewerkers' },
  { name: 'Kennisbank', href: '/kennisbank' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
  { name: 'Tarieven', href: '/tarieven' },
];

export const EMPLOYER_DROPDOWN_LINKS = [
  { name: 'Externe Vertrouwenspersoon', href: '/externe-vertrouwenspersoon' },
  { name: 'Preventie Ongewenst Gedrag', href: '/preventie-ongewenst-gedrag' },
  { name: 'Tarieven', href: '/tarieven' },
  { name: 'Interne vs. Externe VP', href: '/interne-vs-externe-vp' },
];
```

---

## Icons

All icons come from **lucide-react**. Commonly used icons across the project:

- Navigation: `Menu`, `X`, `Phone`, `Mail`, `ChevronDown`
- Content: `ArrowRight`, `Shield`, `Clock`, `Eye`, `Award`, `Scale`, `Smartphone`, `FileText`, `Package`, `Headphones`, `BarChart3`, `CheckCircle`, `Quote`, `BookOpen`, `Users`
- Blog: `Search`, `Tag`
- Footer: `MessageCircle`
