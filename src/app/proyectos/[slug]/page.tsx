import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/config/projects.config";
import { ProjectGallery } from "@/components";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import { 
  MapPin, 
  Download, 
  CheckCircle2, 
  Ruler, 
  Banknote, 
  CalendarDays,
  Phone,
  MessageCircle
} from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const statusLabels = {
    preventas: "En Preventa",
    construccion: "En Construcción",
    entregado: "Entregado",
  };

  const statusColors = {
    preventas: "bg-yellow-500",
    construccion: "bg-blue-600",
    entregado: "bg-green-600",
  };

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en el proyecto *${project.name}* (${project.city}). ¿Podrían enviarme más información?`
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <div className="max-w-4xl">
              <span className={`inline-block px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-full mb-4 ${statusColors[project.status]}`}>
                {statusLabels[project.status]}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{project.name}</h1>
              <div className="flex items-center text-lg md:text-xl text-gray-200">
                <MapPin className="w-6 h-6 mr-2 text-primary" />
                {project.city}
                {project.district && <span className="mx-2">•</span>}
                {project.district}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Key Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <Banknote className="w-8 h-8 text-primary mb-3" />
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Precio Desde</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{project.startingPrice}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <Ruler className="w-8 h-8 text-primary mb-3" />
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Área Total</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{project.totalArea}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <CalendarDays className="w-8 h-8 text-primary mb-3" />
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Estado</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{statusLabels[project.status]}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Sobre el Proyecto</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
              </div>

              {/* Services */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Servicios y Amenidades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.services.map((service, i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="text-green-500 w-6 h-6 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.images.length > 1 && (
                <ProjectGallery images={project.images} projectName={project.name} />
              )}

              {/* Brochure CTA */}
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">¿Quieres ver el plano detallado?</h4>
                  <p className="text-gray-600">Descarga el brochure completo con la distribución de lotes.</p>
                </div>
                <button className="flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Download className="w-5 h-5" />
                  <span>Descargar Brochure</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    ¿Te interesa?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Agenda una visita o solicita más información directamente con nuestros asesores.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g,"")}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-6 h-6" />
                      Chat en WhatsApp
                    </a>
                    
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-3 hover:bg-black transition-colors shadow-md"
                    >
                      <Phone className="w-5 h-5" />
                      Llamar Ahora
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500 mb-1">Horario de Atención</p>
                    <p className="font-medium text-gray-900">{siteConfig.contact.schedule}</p>
                  </div>
                </div>

                {/* Agent Mini Profile (Optional/Mock) */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                     {/* Placeholder for agent avatar */}
                     <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-xs">Logo</span>
                     </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Vendido por</p>
                    <p className="font-bold text-gray-900">Verleon Real Estate</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
