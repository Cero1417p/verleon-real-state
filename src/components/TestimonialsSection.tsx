'use client';

import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = siteConfig.testimonials as Testimonial[],
}) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => {
      const fullStar = i + 1 <= rating;
      const halfStar = i < rating && i + 1 > rating;

      if (fullStar) {
        return (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        );
      } else if (halfStar) {
        return (
          <div key={i} className="relative w-5 h-5">
            <StarHalf className="absolute top-0 left-0 w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="absolute top-0 left-0 w-5 h-5 text-yellow-400" />
          </div>
        );
      } else {
        return (
          <Star
            key={i}
            className="w-5 h-5 text-gray-300"
          />
        );
      }
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escucha las experiencias de quienes han confiado en Verleon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-500 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg italic mb-6">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
