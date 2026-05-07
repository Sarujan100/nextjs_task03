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
import content from '@/lib/content.json';

export default function Home() {
  return (
    <div className="">
      <Header 
        navLinks={content.header.navLinks} 
        logo={content.header.logo} 
      />
      <div >
        <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-25">
          <HeroSection 
            title={content.hero.title}
            highlight={content.hero.highlight}
            stats={content.hero.stats}
            searchOptions={content.hero.searchOptions}
            mainImage={content.hero.mainImage}
          />
          <PhilosophySection 
            title={content.philosophy.title}
            description={content.philosophy.description}
            items={content.philosophy.items}
            stats={content.philosophy.stats}
          />
          <ProjectsGridSection 
            title={content.projects.title}
            items={content.projects.items}
          />
          <TestimonialsSection 
            title={content.testimonials.title}
            highlight={content.testimonials.highlight}
            description={content.testimonials.description}
            items={content.testimonials.items}
          />
          <TrustedCompaniesSection 
            title={content.trustedCompanies.title}
            items={content.trustedCompanies.items}
          />
          <InspirationCarouselSection 
            title={content.inspiration.title}
            description={content.inspiration.description}
            items={content.inspiration.items}
          />
          <CTASection 
            title={content.cta.title}
            description={content.cta.description}
            philosophies={content.cta.philosophies}
            banner={content.cta.banner}
          />
          <FAQSection 
            title={content.faq.title}
            subtitle={content.faq.subtitle}
            description={content.faq.description}
            items={content.faq.items}
          />
        </main>
        <Footer 
          logo={content.footer.logo}
          reachUs={content.footer.reachUs}
          sections={content.footer.sections}
          mapImage={content.footer.mapImage}
        />
      </div>
    </div>
  );
}
