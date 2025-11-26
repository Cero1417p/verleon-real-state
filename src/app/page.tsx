import {
  Hero,
  FeaturedProperties,
  ServicesSection,
  TestimonialsSection,
  CTASection,
} from '@/components';

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <FeaturedProperties />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
