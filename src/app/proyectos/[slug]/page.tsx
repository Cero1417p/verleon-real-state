import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/config/projects.config";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import { MapPin, Download, Check } from "lucide-react";

// ✅ NOTA: Esta página sigue siendo un Server Component (sin "use client")
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await params
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const statusLabels = {
    preventas: "En preventa",
    construccion: "En construcción",
    entregado: "Entregado",
  };

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el proyecto *${project.name}* (${project.city}). ¿Podrían enviarme más información?`
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero con imagen principal */}
      <div className="relative h-96 w-full">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-4xl font-bold">{project.name}</h1>
            <p className="text-lg">
              {project.city}
              {project.district && `, ${project.district}`}
            </p>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-700 rounded-full mb-4">
                  {statusLabels[project.status]}
                </span>
                <p className="text-gray-700 text-lg">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Desde</p>
                  <p className="font-bold text-green-700">
                    {project.startingPrice}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Área total</p>
                  <p className="font-bold">{project.totalArea}</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Ciudad</p>
                  <p className="font-bold">{project.city}</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Estado</p>
                  <p className="font-bold">{statusLabels[project.status]}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Check className="text-green-600" /> Servicios incluidos
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Sin onClick: solo texto informativo o enlace real */}
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium mb-2">
                  ¿Quieres ver el plano del proyecto?
                </p>
                <span className="inline-flex items-center gap-2 text-green-700 font-medium opacity-80">
                  <Download className="w-4 h-4" /> Plano próximamente disponible
                </span>
              </div>
            </div>

            {/* Sidebar: contacto */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-4">
                ¿Te interesa este proyecto?
              </h3>
              <p className="text-gray-600 mb-6">
                Escríbenos por WhatsApp y te enviaremos toda la información
                detallada.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(
                  /\D/g,
                  ""
                )}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium text-center block hover:bg-green-700 transition"
              >
                Enviar mensaje por WhatsApp
              </a>
              <div className="mt-4 text-sm text-gray-500">
                <p>Horario: {siteConfig.contact.schedule}</p>
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          {project.images.length > 1 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Galería</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={img}
                      alt={`${project.name} ${i + 2}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
