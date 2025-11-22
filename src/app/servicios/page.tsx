"use client";

import React from "react";
import { Header, Footer, ServicesSection } from "@/components";
import { Banner } from "@/components/Banner";

export default function ServiciosPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      

      <Banner
        title="Nuestros Servicios"
        subtitle="Ofrecemos soluciones integrales para comprar, vender o rentar propiedades."
        backgroundImage="/images/banner-proyectos.jpg"
      />

      <ServicesSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-gray-600 mb-6">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition">
            Contactar ahora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
