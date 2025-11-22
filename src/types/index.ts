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


export interface Project {
  slug: string;               // usado en la URL (ej: "san-isidro")
  name: string;               // Nombre visible
  city: string;               // Ciudad (ej: "Cajamarca")
  district?: string;          // Distrito o zona (opcional)
  description: string;        // Breve descripción
  status: 'preventas' | 'construccion' | 'entregado';
  totalArea: string;          // Superficie total del proyecto (ej: "12.5 ha")
  startingPrice: string;      // Precio desde (ej: "S/ 85,000")
  services: string[];         // Servicios incluidos
  images: string[];           // URLs de imágenes (primera es la principal)
  mapPosition?: [number, number]; // [lat, lng] para mapa (opcional)
}