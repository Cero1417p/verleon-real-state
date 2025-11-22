'use client';

import { siteConfig } from '@/config/site.config';

interface JsonLdProps {
  type: 'Organization' | 'RealEstateAgent' | 'LocalBusiness' | 'Product' | 'BreadcrumbList';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export function JsonLd({ type, data }: JsonLdProps) {
  // Datos estructurados para la organización
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.name,
    url: 'https://verleon.com',
    logo: 'https://verleon.com/logo.png',
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
      areaServed: 'BO',
      availableLanguage: 'Spanish',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'La Paz', // Ajustar según la ubicación real
      addressRegion: 'LP',
      postalCode: '00000',
      addressCountry: 'BO',
    },
  };

  // Datos estructurados para agente inmobiliario
  const realEstateAgentData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    url: 'https://verleon.com',
    logo: 'https://verleon.com/logo.png',
    image: 'https://verleon.com/office-image.jpg',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'La Paz', // Ajustar según la ubicación real
      addressRegion: 'LP',
      postalCode: '00000',
      addressCountry: 'BO',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  };

  // Datos estructurados para negocio local
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.company.name,
    image: 'https://verleon.com/office-image.jpg',
    '@id': 'https://verleon.com',
    url: 'https://verleon.com',
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'La Paz', // Ajustar según la ubicación real
      addressRegion: 'LP',
      postalCode: '00000',
      addressCountry: 'BO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.map.center[0],
      longitude: siteConfig.map.center[1],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };

  // Seleccionar el tipo de datos estructurados según el tipo proporcionado
  let jsonLdData;

  switch (type) {
    case 'Organization':
      jsonLdData = organizationData;
      break;
    case 'RealEstateAgent':
      jsonLdData = realEstateAgentData;
      break;
    case 'LocalBusiness':
      jsonLdData = localBusinessData;
      break;
    case 'Product':
    case 'BreadcrumbList':
      jsonLdData = data;
      break;
    default:
      jsonLdData = organizationData;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}