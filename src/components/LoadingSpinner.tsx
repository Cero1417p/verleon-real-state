'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white' | 'black';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
  text,
  fullScreen = false,
}) => {
  // Configurar tamaños
  const sizeClasses = {
    small: 'w-5 h-5 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  // Configurar colores
  const colorClasses = {
    primary: 'border-green-700 border-t-transparent',
    white: 'border-white border-t-transparent',
    black: 'border-black border-t-transparent',
  };

  // Contenedor condicional para pantalla completa
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="flex flex-col items-center">
          <div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
            role="status"
            aria-label="Cargando"
          />
          {text && <p className="mt-4 text-gray-700">{text}</p>}
        </div>
      </div>
    );
  }

  // Versión normal (no pantalla completa)
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin mr-2`}
        role="status"
        aria-label="Cargando"
      />
      {text && <span className="text-gray-700">{text}</span>}
    </div>
  );
};