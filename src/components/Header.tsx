"use client";

import React, { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex justify-between items-center gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/favicon.ico" 
                alt="Verleon Logo" 
                className="w-7 h-7 lg:w-9 lg:h-9"
              />
              <span className="text-xl lg:text-2xl font-bold text-primary whitespace-nowrap">
                {siteConfig.company.shortName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    relative px-4 py-2 font-medium rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "text-primary bg-primary-lighter"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden lg:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-dark hover:shadow-lg transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
              <span className="xl:hidden">Llamar</span>
            </a>
            
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    px-4 py-3 font-medium rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "text-primary bg-primary-lighter border-l-4 border-primary"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50 hover:translate-x-1"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="mt-4 bg-primary flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark hover:shadow-lg transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};