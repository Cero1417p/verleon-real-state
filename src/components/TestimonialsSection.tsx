'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

const defaultTestimonial: Testimonial = {
  name: 'Emily Rodriguez',
  role: 'Homeowner',
  text: '"The team at CasaZ made finding our dream home an effortless experience. Their attention to detail and market knowledge helped us secure the perfect property within our budget."',
  rating: 5,
};

interface TestimonialsSectionProps {
  testimonial?: Testimonial;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonial = defaultTestimonial,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with CasaZ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              )}
              <div>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg italic mb-6">
              {testimonial.text}
            </p>
            
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
