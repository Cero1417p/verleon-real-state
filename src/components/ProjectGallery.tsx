"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  projectName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = React.useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Galería de Imágenes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openGallery(i)}
            className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer ${
              i === 0 ? "md:col-span-2 h-96" : "h-64"
            }`}
          >
            <Image
              src={img}
              alt={`${projectName} - Imagen ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver Imagen
                </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
            aria-label="Cerrar galería"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 hidden md:block"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 hidden md:block"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="relative w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={images[currentIndex]}
              alt={`${projectName} - Imagen ${currentIndex + 1}`}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};
