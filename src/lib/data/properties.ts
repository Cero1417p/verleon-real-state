import { Property } from '@/types';

export const allProperties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=640',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    title: 'Modern Villa with Pool',
    location: '123 Ocean Drive, Miami Beach',
    agent: 'John Smith',
    status: 'FOR SALE',
    lat: 25.7725, // Aproximación para Ocean Drive, Miami Beach
    lng: -80.1345,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=640',
    price: '$3,200/mo',
    beds: 2,
    baths: 2,
    title: 'Luxury Downtown Apartment',
    location: '456 City Center, New York',
    agent: 'Sarah Johnson',
    status: 'FOR RENT',
    lat: 40.7580, // Aproximación para Midtown Manhattan (cerca de City Center)
    lng: -73.9855,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=640',
    price: '$895,000',
    beds: 3,
    baths: 2,
    title: 'Charming Suburban Family Home',
    location: '789 Maple Street, Austin',
    agent: 'Michael Brown',
    status: 'FOR SALE',
    lat: 30.2672, // Aproximación para Austin, TX
    lng: -97.7431,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=640',
    price: '$2,100,000',
    beds: 5,
    baths: 4,
    title: 'Beachfront Mansion',
    location: '321 Seaside Boulevard, Malibu',
    agent: 'Emily Davis',
    status: 'FOR SALE',
    lat: 34.0387, // Aproximación para Malibu, CA (cerca de la costa)
    lng: -118.7798,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=640',
    price: '$2,800/mo',
    beds: 1,
    baths: 1,
    title: 'Cozy Studio Apartment',
    location: '555 Downtown Ave, Seattle',
    agent: 'David Wilson',
    status: 'FOR RENT',
    lat: 47.6062, // Aproximación para Downtown Seattle, WA
    lng: -122.3321,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=640',
    price: '$1,450,000',
    beds: 4,
    baths: 3,
    title: 'Contemporary House with Garden',
    location: '888 Garden Lane, Portland',
    agent: 'Lisa Anderson',
    status: 'FOR SALE',
    lat: 45.5051, // Aproximación para Portland, OR
    lng: -122.6750,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=640',
    price: '$4,500/mo',
    beds: 3,
    baths: 2,
    title: 'Penthouse with City Views',
    location: '999 Sky Tower, Chicago',
    agent: 'Robert Taylor',
    status: 'FOR RENT',
    lat: 41.8800, // Aproximación para el Loop, Chicago (cerca de edificios altos)
    lng: -87.6298,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=640',
    price: '$750,000',
    beds: 2,
    baths: 2,
    title: 'Modern Townhouse',
    location: '444 Urban Street, Denver',
    agent: 'Jennifer Martinez',
    status: 'FOR SALE',
    lat: 39.7392, // Aproximación para Denver, CO
    lng: -104.9903,
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=640',
    price: '$1,850,000',
    beds: 5,
    baths: 4,
    title: 'Luxury Estate with Pool',
    location: '777 Estate Drive, Beverly Hills',
    agent: 'James Thompson',
    status: 'FOR SALE',
    lat: 34.0736, // Aproximación para Beverly Hills, CA
    lng: -118.4004,
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=640',
    price: '$3,600/mo',
    beds: 2,
    baths: 2,
    title: 'Waterfront Condo',
    location: '222 Marina Bay, San Diego',
    agent: 'Patricia Garcia',
    status: 'FOR RENT',
    lat: 32.7157, // Aproximación para San Diego, CA (cerca de la bahía)
    lng: -117.1611,
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=640',
    price: '$1,100,000',
    beds: 3,
    baths: 2,
    title: 'Renovated Victorian Home',
    location: '333 Heritage Street, San Francisco',
    agent: 'Christopher Lee',
    status: 'FOR SALE',
    lat: 37.7749, // Aproximación para San Francisco, CA
    lng: -122.4194,
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=640',
    price: '$2,200/mo',
    beds: 2,
    baths: 1,
    title: 'Industrial Loft',
    location: '666 Factory Row, Brooklyn',
    agent: 'Amanda White',
    status: 'FOR RENT',
    lat: 40.6922, // Aproximación para Brooklyn, NY
    lng: -73.9903,
  },
];

const propertyMap = new Map(allProperties.map(p => [p.id, p]));

export const getPropertyById = (id: number) => propertyMap.get(id);

export const getFeaturedProperties = () => {
  return allProperties.slice(0, 3);
};

export const filterProperties = (filters: {
  status?: 'FOR SALE' | 'FOR RENT';
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
}) => {
  return allProperties.filter(property => {
    if (filters.status && property.status !== filters.status) {
      return false;
    }
    if (filters.beds && property.beds < filters.beds) {
      return false;
    }
    if (filters.baths && property.baths < filters.baths) {
      return false;
    }
    return true;
  });
};
