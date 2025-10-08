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
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Join thousands of satisfied clients who found their dream properties
          with CasaZ
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleBrowseProperties}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Browse Properties
          </button>
          <button
            onClick={handleContactAgent}
            className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            Contact an Agent
          </button>
        </div>
      </div>
    </section>
  );
};
