'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header, Footer } from '@/components';
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  MapPin,
  Heart,
  Share2,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Car,
  Home,
  Check,
} from 'lucide-react';
import { getPropertyById, allProperties } from '@/lib/data/properties';
import { PropertyCard } from '@/components';

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const propertyId = parseInt(params.id as string);
  const property = getPropertyById(propertyId);

  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">
            The property you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push('/properties')}
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Properties
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock multiple images
  const propertyImages = [
    property.image,
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
  ];

  // Similar properties
  const similarProperties = allProperties
    .filter((p) => p.id !== property.id && p.status === property.status)
    .slice(0, 3);

  // Property features
  const features = [
    'Air Conditioning',
    'Heating',
    'Parking',
    'Garden',
    'Swimming Pool',
    'Security System',
    'Balcony',
    'Fireplace',
    'Hardwood Floors',
    'Walk-in Closet',
    'Laundry Room',
    'Storage',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Properties</span>
        </button>
      </div>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Main Image */}
          <div className="relative h-96 lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src={propertyImages[selectedImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span
                className={`${
                  property.status === 'FOR SALE' ? 'bg-black' : 'bg-blue-500'
                } text-white px-4 py-2 rounded-full text-sm font-medium`}
              >
                {property.status}
              </span>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'
                  }`}
                />
              </button>
              <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                <Share2 className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 gap-4">
            {propertyImages.slice(0, 4).map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-44 lg:h-72 rounded-xl overflow-hidden cursor-pointer transition-all ${
                  selectedImage === index
                    ? 'ring-4 ring-black'
                    : 'hover:opacity-80'
                }`}
              >
                <img
                  src={img}
                  alt={`${property.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
              <div className="text-4xl font-bold text-black mb-6">
                {property.price}
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pb-6 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Bed className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{property.beds}</p>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Bath className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{property.baths}</p>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Square className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2,500</p>
                    <p className="text-sm text-gray-600">Sq Ft</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-6 border-b">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to this stunning property that combines modern luxury
                  with comfortable living. This beautifully designed home
                  features an open floor plan with high ceilings and abundant
                  natural light throughout.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The gourmet kitchen is equipped with top-of-the-line
                  appliances, custom cabinetry, and a large island perfect for
                  entertaining. The spacious master suite includes a luxurious
                  en-suite bathroom and a walk-in closet.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Step outside to discover a beautifully landscaped backyard
                  with a patio area, perfect for outdoor dining and relaxation.
                  This property is located in a prime location with easy access
                  to schools, shopping, and entertainment.
                </p>
              </div>

              {/* Property Features */}
              <div className="py-6 border-b">
                <h2 className="text-2xl font-bold mb-4">Property Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">Single Family Home</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-medium">2020</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Lot Size</span>
                    <span className="font-medium">5,000 sq ft</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Parking</span>
                    <span className="font-medium">2 Car Garage</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">HOA Fee</span>
                    <span className="font-medium">$250/month</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Property ID</span>
                    <span className="font-medium">#{property.id}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400" />
                <span className="text-gray-500 ml-4">Map View</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agent Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold text-lg">{property.agent}</h4>
                  <p className="text-gray-600 text-sm">Licensed Agent</p>
                </div>
              </div>

              {!showContactForm ? (
                <div className="space-y-3">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send Message
                  </button>
                  <button className="w-full border-2 border-black text-black py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Agent
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Schedule Tour
                  </button>
                </div>
              ) : (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      placeholder="I'm interested in this property..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-black hover:text-black transition-colors"
                  >
                    Cancel
                  </button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">(123) 456-7890</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">agent@casaz.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  onViewDetails={(id) => router.push(`/properties/${id}`)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
