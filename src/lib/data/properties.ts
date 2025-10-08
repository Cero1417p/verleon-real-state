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
  },
];

export const getFeaturedProperties = () => {
  return allProperties.slice(0, 3);
};

export const getPropertyById = (id: number) => {
  return allProperties.find(property => property.id === id);
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
