"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types";
import { getAllProjects } from "@/config/projects.config";
import Link from "next/link";

interface FeaturedPropertiesProps {
  projects?: Project[];
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  projects,
}) => {
  const displayProjects = projects || getAllProjects();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección de proyectos inmobiliarios en las mejores ubicaciones de Cajamarca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
        href="/proyectos"
        className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors inline-block"
      >
        Ver Todos Los Proyectos
      </Link>

        </div>
      </div>
    </section>
  );
};
