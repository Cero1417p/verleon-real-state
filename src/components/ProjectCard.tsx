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
  return (
    <Link href={`/proyectos/${project.slug}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer h-full flex flex-col">
        <div className="relative w-full h-64">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span
            className={`absolute top-4 left-4 ${
              project.status === "preventas" ? "bg-yellow-500" :
              project.status === "construccion" ? "bg-blue-500" : "bg-green-500"
            } text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}
          >
            {project.status}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-primary">{project.startingPrice}</h3>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Ruler className="w-4 h-4" />
              {project.totalArea}
            </span>
          </div>
          
          <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
          
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{project.city}{project.district ? `, ${project.district}` : ''}</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          <div className="border-t pt-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.services.slice(0, 3).map((service, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {service}
                </span>
              ))}
              {project.services.length > 3 && (
                <span className="text-xs text-gray-500 self-center">
                  +{project.services.length - 3} más
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
