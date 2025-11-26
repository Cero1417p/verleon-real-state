'use client';

import React from 'react';
import { Home, Key, DollarSign, Briefcase } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Service } from '@/types';

const defaultServices: Service[] = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Property Sales',
    description:
      'Expert guidance through the entire selling process from valuation to closing.',
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Property Rentals',
    description:
      'Find your perfect rental property with our extensive database and personalized service.',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Property Valuation',
    description:
      'Accurate market valuations to help you price your property competitively.',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Investment Advisory',
    description:
      'Strategic investment advice to maximize returns on your real estate portfolio.',
  },
];

interface ServicesSectionProps {
  services?: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services = defaultServices,
}) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para tus inversiones inmobiliarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
