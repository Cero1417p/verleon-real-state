// src/app/properties/[id]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components';
import { getPropertyById, allProperties } from '@/lib/data/properties';
import { PropertyDetailClient } from '@/components/PropertyDetailClient';

// ✅ Sin 'use client'

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const property = getPropertyById(parseInt(params.id));
  if (!property) {
    return { title: 'Property Not Found | CasaZ' };
  }
  return {
    title: `${property.title} | CasaZ`,
    description: `Discover ${property.title} in ${property.location}. ${property.beds} beds, ${property.baths} baths. ${property.status === 'FOR SALE' ? 'For sale' : 'For rent'}.`,
  };
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const propertyId = parseInt(params.id);
  const property = getPropertyById(propertyId);

  if (!property) {
    notFound();
  }

  const similarProperties = allProperties
    .filter((p) => p.id !== property.id && p.status === property.status)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PropertyDetailClient property={property} similarProperties={similarProperties} />
      <Footer />
    </div>
  );
}