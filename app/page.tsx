'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { ProjectsGridSection } from '@/components/projects-grid';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TrustedCompaniesSection } from '@/components/trusted-companies';
import { InspirationCarouselSection } from '@/components/inspiration-carousel';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="">
      <Header />
      <div >
        <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-25">
          <HeroSection />
          <PhilosophySection />
          <ProjectsGridSection />
          <TestimonialsSection />
          <TrustedCompaniesSection />
          <InspirationCarouselSection />
          <CTASection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
