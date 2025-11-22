"use client";

import React from "react";
import { Header, Footer } from "@/components";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Banner } from "@/components/Banner";

export default function ContactoPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <Banner
        title="Contacto"
        subtitle="Estamos aquí para ayudarte a encontrar el terreno ideal"
        backgroundImage="/images/banner-proyectos.jpg"
      />

      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <input
                type="tel"
                placeholder="Tu teléfono"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">¿Qué tipo de terreno buscas?</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
                <option value="industrial">Industrial</option>
                <option value="agricola">Agrícola</option>
              </select>
              <textarea
                rows={5}
                placeholder="Cuéntanos más sobre lo que buscas..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p>{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-green-700">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* <WhatsApp className="w-6 h-6 text-green-700" /> */}
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`} className="hover:text-green-700">
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold">Correo electrónico</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-green-700">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <p className="font-semibold">Horario de atención</p>
                    <p>{siteConfig.contact.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">¿Necesitas ayuda urgente?</h3>
              <p className="text-gray-700 mb-4">
                Llámanos ahora o envíanos un WhatsApp. Nuestro equipo está listo para ayudarte a encontrar el terreno perfecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition text-center"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Llamar ahora
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition text-center"
                >
                  {/* <WhatsApp className="w-4 h-4 inline mr-2" /> */}
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-green-700 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para encontrar tu terreno ideal?</h2>
            <p className="text-green-100 mb-6">
              Agenda una cita con nosotros y te mostraremos las mejores opciones disponibles
            </p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Agendar Cita
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}