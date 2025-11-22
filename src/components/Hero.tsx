'use client';

import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando terrenos en:', searchQuery);
    // Aquí iría la lógica de búsqueda
  };

  return (
    <section
      className="h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-image.png')",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Encuentra el Terreno Ideal
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          {siteConfig.company.description}
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2"
        >
          <div className="flex items-center flex-grow px-4 py-3 text-gray-800">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="¿Dónde buscas terrenos? (Ciudad, zona, departamento...)"
              className="flex-grow focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-md font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Buscar Terrenos
          </button>
        </form>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">+500</div>
            <div className="text-sm opacity-90">Terrenos Vendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">+10</div>
            <div className="text-sm opacity-90">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Clientes Satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  );
};