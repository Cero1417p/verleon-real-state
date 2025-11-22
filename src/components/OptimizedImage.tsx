'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  sizes?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  objectFit = 'cover',
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Determinar si la imagen es local o externa
  const isLocalImage = src.startsWith('/') || src.startsWith('.');
  
  // Clase para el efecto de carga
  const loadingClass = isLoading ? 'opacity-60 blur-sm' : 'opacity-100';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLocalImage ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          sizes={sizes}
          className={`transition-opacity duration-300 ${loadingClass} object-${objectFit}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        // Para imágenes externas, usamos un enfoque diferente
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          sizes={sizes}
          className={`transition-opacity duration-300 ${loadingClass} object-${objectFit}`}
          onLoadingComplete={() => setIsLoading(false)}
          unoptimized={!src.startsWith('https://')}
        />
      )}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-20">
          <div className="w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};