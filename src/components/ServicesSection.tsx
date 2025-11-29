'use client';

import React from 'react';
import { siteConfig } from '@/config/site.config';
import * as LucideIcons from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { Service } from '@/types';

const servicesList: Service[] = siteConfig.services.map((service) => {
  // Dynamically access the icon component based on the string name in config
  // default to Home if not found
  const icons = LucideIcons as unknown as Record<string, React.ElementType>;
  const IconComponent = icons[service.icon] || LucideIcons.Home;
  
  return {
    title: service.title,
    description: service.description,
    icon: <IconComponent className="w-8 h-8" />,
  };
});

interface ServicesSectionProps {
  services?: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services = servicesList,
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
