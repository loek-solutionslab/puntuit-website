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
  ogImage = 'https://puntuit.nl/images/puntuit-logo.png',
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  const siteUrl = 'https://puntuit.nl';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullTitle = title.includes('PuntUit') ? title : `${title} | PuntUit`;

  return (
    <Helmet>
      {/* Basis Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PuntUit" />
      <meta property="og:locale" content="nl_NL" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Viewport en Charset (in index.html maar hier voor zekerheid) */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Author en Theme Color */}
      <meta name="author" content="PuntUit" />
      <meta name="theme-color" content="#0284c7" />
    </Helmet>
  );
}
