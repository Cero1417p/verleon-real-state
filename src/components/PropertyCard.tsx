"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Property } from "@/types";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
  onFavoriteToggle?: (propertyId: number) => void;
  //onViewDetails?: (propertyId: number) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onFavoriteToggle,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    onFavoriteToggle?.(property.id);
  };

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <div className="relative">
          <div className="relative w-full h-64">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <span
            className={`absolute top-4 left-4 ${
              property.status === "FOR SALE" ? "bg-primary" : "bg-accent"
            } text-white px-3 py-1 rounded-full text-sm font-medium`}
          >
            {property.status}
          </span>
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 text-red-500" : ""
              }`}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{property.price}</h3>
            <span className="text-gray-500 text-sm">
              {property.beds} beds • {property.baths} baths
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-2">{property.title}</h4>
          <p className="text-gray-600 mb-4">{property.location}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
              <span className="text-sm">{property.agent}</span>
            </div>
            <span className="text-sm font-medium hover:text-gray-500 transition-colors">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
