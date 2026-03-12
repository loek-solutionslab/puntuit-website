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

  // Organization Schema
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

  // LocalBusiness Schema
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

  // Website Schema
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

  // WebPage Schema
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

  // Service Schema
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

  // Breadcrumb Schema
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

  // FAQ Schema
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
