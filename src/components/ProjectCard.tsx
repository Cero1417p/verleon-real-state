"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";
import { MapPin, Ruler, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    preventas: "bg-yellow-500/90 text-white",
    construccion: "bg-blue-600/90 text-white",
    entregado: "bg-green-600/90 text-white",
  };

  const statusText = {
    preventas: "En Preventa",
    construccion: "En Construcción",
    entregado: "Entregado",
  };

  return (
    <Link href={`/proyectos/${project.slug}`} className="block h-full">
      <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${statusColors[project.status]}`}>
              {statusText[project.status]}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium opacity-90 mb-1 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {project.city}{project.district ? `, ${project.district}` : ''}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-1">
                {project.name}
              </h3>
              <div className="flex items-center text-gray-500 text-sm">
                <Ruler className="w-4 h-4 mr-1" />
                <span>{project.totalArea}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase font-semibold">Desde</p>
              <p className="text-xl font-bold text-primary">{project.startingPrice}</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Services & Footer */}
          <div className="border-t border-gray-100 pt-4 mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.services.slice(0, 3).map((service, index) => (
                <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100 flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1.5 text-green-500" />
                  {service}
                </span>
              ))}
              {project.services.length > 3 && (
                <span className="text-xs text-gray-400 self-center font-medium">
                  +{project.services.length - 3} más
                </span>
              )}
            </div>
            
            <div className="w-full bg-gray-50 hover:bg-primary text-gray-700 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center group/btn">
              Ver Proyecto
              <svg 
                className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
