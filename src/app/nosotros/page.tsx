"use client";

import React from "react";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config/site.config";
import { Award, Users, MapPin, Shield } from "lucide-react";
import { Banner } from "@/components/Banner";

export default function NosotrosPage() {
  const valores = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparencia",
      description: "Operaciones claras y documentación legal completa en todos nuestros proyectos."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Calidad",
      description: "Seleccionamos solo terrenos con alto potencial de plusvalía y desarrollo."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atención Personalizada",
      description: "Asesoría integral durante todo el proceso de compra y post-venta."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Ubicaciones Estratégicas",
      description: "Terrenos en zonas de alta demanda y crecimiento urbano."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <Banner
        title="Sobre Nosotros"
        subtitle={siteConfig.company.description}
        backgroundImage="/images/banner-proyectos.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tu Mejor Opción en Bienes Raíces
              </h2>
              <p className="text-gray-700 mb-4">
                En {siteConfig.company.name}, nos especializamos en la venta de terrenos y lotes con alto potencial de plusvalía. Con más de {siteConfig.company.established} años en el mercado, hemos ayudado a cientos de familias e inversionistas a encontrar el terreno ideal para sus proyectos.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestro equipo de profesionales está comprometido con brindar un servicio transparente, confiable y personalizado. Cada terreno que ofrecemos ha sido cuidadosamente seleccionado y verificado para garantizar la seguridad de tu inversión.
              </p>
              <p className="text-gray-700">
                Trabajamos con proyectos de urbanización completos, garantizando que cada lote cuente con todos los servicios básicos y documentación legal en regla.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="Equipo Verleon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-lighter text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-lighter">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">+500</div>
              <div className="text-lg font-semibold mb-2">Terrenos Vendidos</div>
              <p className="text-gray-600">Hemos ayudado a cientos de clientes a encontrar su terreno ideal</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Clientes Satisfechos</div>
              <p className="text-gray-600">Nuestro compromiso es garantizar tu satisfacción en cada transacción</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">+10</div>
              <div className="text-lg font-semibold mb-2">Años de Experiencia</div>
              <p className="text-gray-600">Amplia trayectoria en el mercado inmobiliario</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
