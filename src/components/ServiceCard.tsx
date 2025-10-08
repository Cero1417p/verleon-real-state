'use client';

import React from 'react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
        <div className="text-white">{service.icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};
