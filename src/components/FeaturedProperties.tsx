"use client";

import React from "react";
import { PropertyCard } from "./PropertyCard";
import { Property } from "@/types";

// Mock data - replace with your actual data fetching
const defaultProperties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=640",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    title: "Modern Villa with Pool",
    location: "123 Ocean Drive, Miami Beach",
    agent: "John Smith",
    status: "FOR SALE",
    lat: 25.7725, // Aproximación para Ocean Drive, Miami Beach
    lng: -80.1345,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=640",
    price: "$3,200/mo",
    beds: 2,
    baths: 2,
    title: "Luxury Downtown Apartment",
    location: "456 City Center, New York",
    agent: "Sarah Johnson",
    status: "FOR RENT",
    lat: 40.758, // Aproximación para Midtown Manhattan (cerca de City Center)
    lng: -73.9855,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=640",
    price: "$895,000",
    beds: 3,
    baths: 2,
    title: "Charming Suburban Family Home",
    location: "789 Maple Street, Austin",
    agent: "Michael Brown",
    status: "FOR SALE",
    lat: 30.2672, // Aproximación para Austin, TX
    lng: -97.7431,
  },
];

interface FeaturedPropertiesProps {
  properties?: Property[];
  onViewAll?: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties = defaultProperties,
  onViewAll,
}) => {
  const handleViewAll = () => {
    console.log("View all properties clicked");
    onViewAll?.();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in the most
            desirable locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="border-2 border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};
