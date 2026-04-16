import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../../lib/constants';

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'website' | 'webpage' | 'service' | 'faqPage' | 'article';
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  breadcrumb?: Array<{ name: string; url: string }>;
  articleMeta?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    slug: string;
  };
  faqItems?: Array<{ question: string; answer: string }>;
}

export function SchemaMarkup({
  type,
  pageUrl = 'https://puntuit.nl',
  pageTitle,
  pageDescription,
  breadcrumb,
  articleMeta,
  faqItems,
}: SchemaMarkupProps) {
  const baseUrl = 'https://puntuit.nl';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: baseUrl,
    logo: `${baseUrl}/images/puntuit-logo.png`,
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
    logo: `${baseUrl}/images/puntuit-logo.png`,
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
      url: `${baseUrl}/images/puntuit-logo.png`,
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
    mainEntity: (faqItems || []).map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const articleSchema = articleMeta
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleMeta.headline,
        description: articleMeta.description,
        datePublished: articleMeta.datePublished,
        dateModified: articleMeta.dateModified,
        author: {
          '@type': 'Organization',
          name: COMPANY.name,
          url: baseUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: COMPANY.name,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/puntuit-logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/kennisbank/${articleMeta.slug}`,
        },
      }
    : null;

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
    case 'article':
      schema = articleSchema;
      break;
    default:
      schema = organizationSchema;
  }

  return (
    <Helmet>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
