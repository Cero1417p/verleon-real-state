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
    startingPrice: "S/ 185,000",
    services: ["Agua potable", "Desagüe", "Luz eléctrica", "Calles pavimentadas"],
    images: [
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190334/sanisidro2_n5sszc.webp",
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190334/sanisidro1_om6bvt.webp",
    ],
    mapPosition: [-7.1487, -78.5163],
  },
  {
    slug: "colpa-verde",
    name: "Colpa Verde",
    city: "Cajamarca",
    description: "Proyecto en zona de alto crecimiento urbano, ideal para inversión.",
    status: "preventas",
    totalArea: "15 hectáreas",
    startingPrice: "S/ 15,000",
    services: ["Agua", "Luz", "Caminos afirmados", "Áreas verdes"],
    images: [
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190612/colpa-verde1_azqmb9.webp",
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190613/colpa-verde2_hpodea.webp",
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190906/Captura_de_pantalla_2025-11-26_160119_rvae0v.webp",
    ],
  },
  {
    slug: "camino-a-la-colpa",
    name: "Camino a la Colpa",
    city: "Cajamarca",
    description: "Proyecto en zona de alto crecimiento urbano, ideal para inversión.",
    status: "preventas",
    totalArea: "15 hectáreas",
    startingPrice: "S/ 30,000",
    services: ["Agua", "Luz", "Veredas", "Áreas verdes"],
    images: [
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190516/Captura_de_pantalla_2025-11-26_155445_q1xtim.webp",
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
    startingPrice: "S/ 165,000",
    services: ["Todos los servicios básicos", "Calles asfaltadas", "Parque central"],
    images: [
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764191457/monterrico_ykwu9l.webp",
    ],
  },
  {
    slug: "arboleda-residencial",
    name: "Arboleda Residencial",
    city: "Cajamarca",
    description: "Urbanización moderna con diseño sostenible y áreas comunes.",
    status: "preventas",
    totalArea: "10 hectáreas",
    startingPrice: "S/ 63,000",
    services: ["Agua", "Luz", "Áreas verdes"],
    images: [
      "https://res.cloudinary.com/dxntqapz6/image/upload/v1764190907/Captura_de_pantalla_2025-11-26_160016_hhq10r.webp",
    ],
  },
];

// Helper para obtener un proyecto por slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(p => p.slug === slug);
};

// Helper para obtener todos
export const getAllProjects = () => projectsData;