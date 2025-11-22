'use client';

import React from 'react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-dark transition-colors">
        <div className="text-white">{service.icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};
