'use client';

import React from 'react';

interface CTASectionProps {
  onBrowseProperties?: () => void;
  onContactAgent?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onBrowseProperties,
  onContactAgent,
}) => {
  const handleBrowseProperties = () => {
    console.log('Browse properties clicked');
    onBrowseProperties?.();
  };

  const handleContactAgent = () => {
    console.log('Contact agent clicked');
    onContactAgent?.();
  };

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para Encontrar tu Terreno Perfecto?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Únete a miles de clientes satisfechos que encontraron sus propiedades ideales con Verleon
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleBrowseProperties}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Ver Propiedades
          </button>
          <button
            onClick={handleContactAgent}
            className="border-2 border-primary-light text-primary-light px-8 py-3 rounded-full font-medium hover:bg-primary-light hover:text-secondary transition-colors"
          >
            Contactar un Agente
          </button>
        </div>
      </div>
    </section>
  );
};

