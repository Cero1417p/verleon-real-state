'use client';

import React from 'react';
import { AlertTriangle, XCircle, Info, RefreshCw } from 'lucide-react';

type ErrorType = 'warning' | 'error' | 'info';

interface ErrorMessageProps {
  type?: ErrorType;
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  type = 'error',
  title,
  message,
  onRetry,
  className = '',
}) => {
  // Configuración según el tipo de error
  const config = {
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      titleDefault: 'Advertencia',
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700',
      titleDefault: 'Error',
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      titleDefault: 'Información',
    },
  };

  const { icon: Icon, bgColor, borderColor, textColor, titleDefault } = config[type];
  const displayTitle = title || titleDefault;

  return (
    <div
      className={`p-4 ${bgColor} border ${borderColor} rounded-lg ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={`w-5 h-5 ${textColor}`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${textColor}`}>{displayTitle}</h3>
          <div className={`mt-2 text-sm ${textColor} opacity-90`}>
            <p>{message}</p>
          </div>
          {onRetry && (
            <div className="mt-4">
              <button
                type="button"
                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md ${textColor} bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type === 'error' ? 'red' : type === 'warning' ? 'yellow' : 'blue'}-500`}
                onClick={onRetry}
              >
                <RefreshCw className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Reintentar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};