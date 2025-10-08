import {
  Header,
  Hero,
  FeaturedProperties,
  ServicesSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Header />
      <Hero />
      <FeaturedProperties />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
