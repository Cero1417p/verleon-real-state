"use client";

import React, { useState, useMemo } from "react";
import { Header, Footer, PropertyCard } from "@/components";
import {
  PropertyFilters,
  PropertyFilterState,
} from "@/components/PropertyFilters";
import { allProperties } from "@/lib/data/properties";

export default function PropertiesPage() {
  const [filters, setFilters] = useState<PropertyFilterState>({
    search: "",
    status: "ALL",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "",
    sortBy: "newest",
  });

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...allProperties];

    // Filter by status
    if (filters.status !== "ALL") {
      result = result.filter((p) => p.status === filters.status);
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          p.agent.toLowerCase().includes(searchLower)
      );
    }

    // Filter by bedrooms
    if (filters.beds) {
      result = result.filter((p) => p.beds >= parseInt(filters.beds));
    }

    // Filter by bathrooms
    if (filters.baths) {
      result = result.filter((p) => p.baths >= parseInt(filters.baths));
    }

    // Sort
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[$,/mo]/g, ""));
          const priceB = parseFloat(b.price.replace(/[$,/mo]/g, ""));
          return priceA - priceB;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[$,/mo]/g, ""));
          const priceB = parseFloat(b.price.replace(/[$,/mo]/g, ""));
          return priceB - priceA;
        });
        break;
      case "beds":
        result.sort((a, b) => b.beds - a.beds);
        break;
      case "newest":
      default:
        // Keep original order
        break;
    }

    return result;
  }, [filters]);

  const handleFilterChange = (newFilters: PropertyFilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse Properties
          </h1>
          <p className="text-xl text-gray-300">
            Discover your perfect home from our extensive collection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <PropertyFilters onFilterChange={handleFilterChange} />

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              <span className="font-semibold text-black">
                {filteredProperties.length}
              </span>{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}{" "}
              found
            </p>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onFavoriteToggle={(id) => console.log("Toggle favorite:", id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria to find more
                  properties.
                </p>
                <button
                  onClick={() =>
                    handleFilterChange({
                      search: "",
                      status: "ALL",
                      minPrice: "",
                      maxPrice: "",
                      beds: "",
                      baths: "",
                      sortBy: "newest",
                    })
                  }
                  className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Load More Button */}
          {filteredProperties.length > 0 && (
            <div className="text-center mt-12">
              <button className="border-2 border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                Load More Properties
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
