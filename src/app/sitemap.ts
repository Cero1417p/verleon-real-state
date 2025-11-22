import { getAllProjects } from '@/config/projects.config';

export default async function sitemap() {
  const baseUrl = 'https://verleon.com';
  
  // Rutas estáticas principales
  const staticRoutes = [
    '',
    '/proyectos',
    '/servicios',
    '/nosotros',
    '/contacto',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Rutas dinámicas para proyectos
  const projects = getAllProjects();
  const projectRoutes = projects.map(project => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...projectRoutes];
}