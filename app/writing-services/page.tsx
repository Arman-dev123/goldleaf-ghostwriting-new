import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import ServiceCard from "@/src/components/ServiceCard";
import SectionHeading from "@/src/components/SectionHeading";

export const metadata = {
  title: CMS_CONTENT.seo.services.title,
  description: CMS_CONTENT.seo.services.description,
  keywords: CMS_CONTENT.seo.services.keywords
};

export default function ServicesPage() {
  // Main parent categories
  const categories = CMS_CONTENT.services.filter(s =>
    ["ghostwriting", "publication", "cover-design", "editing"].includes(s.slug)
  );

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Header Hero */}
      <Hero
        badge="OUR SERVICE ECOSYSTEM"
        title="High-Touch Book Writing & Publishing Pipelines."
        subtitle="Explore our four primary pillars—expert co-authoring, worldwide distribution, custom visual jacket artistry, and grammarian quality editing."
        primaryText="Schedule Free Diagnostic"
        primaryLink="/contact"
        secondaryText="View Pricing Plans"
        secondaryLink="/packages"
        bgImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Pillars list */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="EXPLORE OUR PILLARS"
          title="The Complete Manuscript Lifecycle Under One Roof"
          subtitle="Whether you need a writer from scratch, a professional critique, or complex Amazon registries configured, we deliver peerless execution."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <ServiceCard key={cat.slug} service={cat} index={idx} />
          ))}
        </div>
      </section>

      {/* 3. High-Conversion Visual Block */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-14 border border-slate-800 flex flex-col lg:flex-row items-center gap-12 justify-between">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
              CUSTOM PROJECT CONFIGURATION
            </span>
            <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight">
              Not sure which service is right for you?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We frequently create hybrid, bespoke solutions for our clients—such as combining legacy memoir ghostwriting with custom oil-painted illustrations and local print setups. Get in touch for a custom quote.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full tracking-widest uppercase text-xs shadow-md transition-all active:scale-95 shrink-0"
            >
              Get Custom Proposal
            </a>
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <CTA />
      </section>
    </div>
  );
}
