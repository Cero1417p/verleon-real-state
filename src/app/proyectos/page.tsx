"use client";
import { Header, Footer } from "@/components";
import { Banner } from "@/components/Banner";
import { getAllProjects } from "@/config/projects.config";
import Link from "next/link";

export default function ProyectosPage() {
  const projects = getAllProjects();

  const statusLabels = {
    preventas: "En preventa",
    construccion: "En construcción",
    entregado: "Entregado",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <Banner
        title="Nuestros Proyectos"
        subtitle="Encuentra el lote ideal en nuestras urbanizaciones en Cajamarca"
        backgroundImage="/images/banner-proyectos.jpg"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link href={`/proyectos/${project.slug}`} key={project.slug} className="block">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-700 rounded-full mb-2">
                      {statusLabels[project.status]}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {project.district ? `${project.district}, ` : ""}
                      {project.city}
                    </p>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <p className="font-bold text-green-700">Desde {project.startingPrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}