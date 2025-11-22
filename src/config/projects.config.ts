import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "san-isidro",
    name: "San Isidro",
    city: "Cajamarca",
    district: "Distrito de Cajamarca",
    description: "Urbanización residencial con ubicación estratégica cerca del centro de la ciudad.",
    status: "preventas",
    totalArea: "8.2 hectáreas",
    startingPrice: "S/ 125,000",
    services: ["Agua potable", "Desagüe", "Luz eléctrica", "Calles pavimentadas", "Parques"],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    mapPosition: [-7.1487, -78.5163],
  },
  {
    slug: "camino-a-la-colpa",
    name: "Camino a la Colpa",
    city: "Cajamarca",
    description: "Proyecto en zona de alto crecimiento urbano, ideal para inversión.",
    status: "construccion",
    totalArea: "15 hectáreas",
    startingPrice: "S/ 92,000",
    services: ["Agua", "Luz", "Desagüe", "Veredas", "Áreas verdes"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    ],
  },
  {
    slug: "monterrico",
    name: "Monterrico",
    city: "Cajamarca",
    district: "Sector Monterrico",
    description: "Lotes residenciales en entorno tranquilo y seguro.",
    status: "entregado",
    totalArea: "6 hectáreas",
    startingPrice: "S/ 110,000",
    services: ["Todos los servicios básicos", "Calles asfaltadas", "Parque central"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    ],
  },
  {
    slug: "arboleda-residencial",
    name: "Arboleda Residencial",
    city: "Cajamarca",
    description: "Urbanización moderna con diseño sostenible y áreas comunes.",
    status: "preventas",
    totalArea: "10 hectáreas",
    startingPrice: "S/ 85,000",
    services: ["Agua", "Desagüe", "Electricidad", "Fibra óptica", "Parques infantiles"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
  },
];

// Helper para obtener un proyecto por slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(p => p.slug === slug);
};

// Helper para obtener todos
export const getAllProjects = () => projectsData;