import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import Brands from "@/src/components/Brands";
import Stats from "@/src/components/Stats";
import ServiceCard from "@/src/components/ServiceCard";
import FeatureGrid from "@/src/components/FeatureGrid";
import ProcessSection from "@/src/components/ProcessSection";
import FAQ from "@/src/components/FAQ";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";

export const metadata = {
  title: CMS_CONTENT.seo.home.title,
  description: CMS_CONTENT.seo.home.description,
  keywords: CMS_CONTENT.seo.home.keywords
};

export default function HomePage() {
  // Filter top-level services for front-page highlights
  const mainServices = CMS_CONTENT.services.filter(s => 
    ["ghostwriting", "publication", "cover-design", "editing"].includes(s.slug)
  );

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Immersive Hero Block */}
      <Hero
        badge={CMS_CONTENT.hero.badge}
        title={CMS_CONTENT.hero.title}
        subtitle={CMS_CONTENT.hero.subtitle}
        primaryText={CMS_CONTENT.hero.primaryCtaText}
        primaryLink={CMS_CONTENT.hero.primaryCtaLink}
        secondaryText={CMS_CONTENT.hero.secondaryCtaText}
        secondaryLink={CMS_CONTENT.hero.secondaryCtaLink}
        bgImage={CMS_CONTENT.hero.bgImage}
      />

      {/* 2. Partner Brands */}
      <Brands />

      {/* 3. Core Corporate Statistics */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <Stats />
      </section>

      {/* 4. Service Pillars */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="OUR CORE OFFERINGS"
          title="Bespoke Writing, Editing & Publishing Pillars"
          subtitle="We take your raw thoughts, journals, or corporate manuals and refine them into gorgeous hardcover literature distributed worldwide."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((service, idx) => (
            <ServiceCard key={service.slug} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* 5. Process Roadmap */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 bg-slate-50/50 py-20 rounded-3xl border border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            badge="OUR CO-AUTHOR METHODOLOGY"
            title="How We Write Your Bestseller"
            subtitle="Our structured workflow captures your authentic knowledge and converts it into elite literature without taxing your schedule."
          />
          <ProcessSection />
        </div>
      </section>

      {/* 6. Strategic Bento Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="WHY CHOOSE GOLDLEAF"
          title="Crafted for Seriousness, Engineered for Success"
          subtitle="We eliminate the high friction of self-publishing while protecting your voice, royalties, and confidentiality with military-grade covenants."
        />
        <FeatureGrid />
      </section>

      {/* 7. Collapsible FAQs accordion */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 bg-slate-50/30 py-16 rounded-3xl border border-slate-100/50">
        <SectionHeading
          badge="FREQUENTLY ASKED"
          title="Answers to Common Publishing Queries"
          subtitle="Explore detailed information about copyrights, NDAs, weekly workflows, and worldwide royalties distribution."
        />
        <FAQ items={CMS_CONTENT.faqs} />
      </section>

      {/* 8. Conversion Board */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <CTA />
      </section>
    </div>
  );
}
