// Types for CasaZ Real Estate Application

export interface Property {
  id: number;
  image: string;
  price: string;
  beds: number;
  baths: number;
  title: string;
  location: string;
  agent: string;
  status: 'FOR SALE' | 'FOR RENT';
  lat: number;
  lng: number;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}
