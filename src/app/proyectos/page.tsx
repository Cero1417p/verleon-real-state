"use client";
import { ProjectCard } from "@/components";
import { Banner } from "@/components/Banner";
import { getAllProjects } from "@/config/projects.config";

export default function ProyectosPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Banner
        title="Nuestros Proyectos"
        subtitle="Encuentra el lote ideal en nuestras urbanizaciones en Cajamarca"
        backgroundImage="/hero-image.png"
      />

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
