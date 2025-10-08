'use client';

import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <section
      className="h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200')",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Discover the perfect property that matches your lifestyle and
          aspirations
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2"
        >
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="flex-grow px-4 py-3 text-gray-800 focus:outline-none rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
