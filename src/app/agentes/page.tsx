"use client";

import React from "react";

export default function AgentesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Agentes</h1>
          <p className="text-lg text-gray-300">
            Conoce al equipo de profesionales que te ayudarán a encontrar la propiedad ideal.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ejemplo de tarjeta de agente */}
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <div key={id} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Agente {id}</h3>
                <p className="text-gray-600 mb-4">Especialista en propiedades residenciales</p>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  Ver perfil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}