// src/components/Banner.tsx
import React from 'react';

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string; // URL o ruta relativa (ej: "/images/banner-proyectos.jpg")
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
}) => {
  const hasBackground = !!backgroundImage;

  return (
    <section
      className={`py-16 text-white relative ${className}`}
      style={
        hasBackground
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : { backgroundColor: '#1f2937' } // fallback: gris oscuro (tailwind bg-gray-800)
      }
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-200 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};