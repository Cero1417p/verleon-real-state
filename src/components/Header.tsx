"use client";

import React, { useState } from "react";
import { Menu, Phone } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-green-700">
            {siteConfig.company.shortName}
          </Link>
          <span className="ml-2 text-sm text-gray-600 hidden sm:block">
            {siteConfig.company.slogan}
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="hidden md:flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-full font-medium hover:bg-green-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.contact.phone}
          </a>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-green-700 border-b border-green-700"
                      : "text-gray-600 hover:text-green-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="bg-green-700 flex items-center justify-center text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition-colors w-full text-center"
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