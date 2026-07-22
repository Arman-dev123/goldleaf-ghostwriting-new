import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";
import { ShieldCheck, BookOpen, Clock, Heart } from "lucide-react";

export const metadata = {
  title: CMS_CONTENT.seo.about.title,
  description: CMS_CONTENT.seo.about.description,
  keywords: CMS_CONTENT.seo.about.keywords
};

export default function AboutPage() {
  const corporateValues = [
    {
      title: "Unyielding NDA Standards",
      desc: "Our ghostwriters remain completely invisible. We sign comprehensive non-disclosure covenants, ensuring your name is the only one appearing on the copyright files.",
      icon: ShieldCheck
    },
    {
      title: "Artisanal Literary Pacing",
      desc: "We do not mass-produce manuscripts. We limit our active clientele so that our editorial board can dedicate focus, style, and care to each book.",
      icon: BookOpen
    },
    {
      title: "Rigorous Factual Auditing",
      desc: "Every biographical or business text undergoes thorough contextual validation and historical research, shielding your brand against errors.",
      icon: Clock
    },
    {
      title: "Emotional Integrity Resonance",
      desc: "A memoir must move. Our sensitive interview strategies help authors share deep life lessons and complex historical experiences with compassion.",
      icon: Heart
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Header Hero Banner */}
      <Hero
        badge="OUR LITERARY MISSION"
        title="We Believe Every Life Story Demands a Legacy."
        subtitle="Meet the award-winning writers, professional copy-editors, and expert global publishers committed to preserving your authentic voice."
        primaryText="Schedule Free Diagnostic"
        primaryLink="/contact"
        secondaryText="View Pricing Packages"
        secondaryLink="/packages"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Editorial Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              FOUNDED ON CRAFTSMANSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
              Bridging the Gap Between Unexpressed Knowledge and Exquisite Literature.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              GoldLeaf Ghostwriting was established by a collaborative group of veteran copy-editors, journalists, and print specialists. We noticed that high-achieving leaders, scientists, VC founders, and family patriarchs had incredible stories to tell—but lacked the extensive hours required to craft full-length books.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We resolved to design a dynamic, high-touch interview framework that makes co-writing seamless. Today, we manage the heavy structural labor of book writing, letting authors share their insights casually during weekly chats while we compile ready-to-print manuscripts.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
              alt="Elite writing desk"
              referrerPolicy="no-referrer"
              className="rounded-3xl border border-slate-100 shadow-xl object-cover h-[450px] w-full"
            />
            {/* Visual glass overlay bar */}
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-lg hidden md:block max-w-xs">
              <span className="text-2xl font-bold text-blue-700 block">100% Invisible</span>
              <span className="text-xs text-slate-600 mt-1 block leading-normal">
                Our ghostwriters never ask for author credit. Your book is yours alone.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 bg-slate-50 py-20 rounded-3xl border border-slate-100">
        <SectionHeading
          badge="OUR CODE OF HONOR"
          title="The Principles Driving Every Manuscript"
          subtitle="We maintain an uncompromising dedication to privacy, narrative authenticity, and publishing excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corporateValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100/80 shadow-xs flex gap-5 items-start"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-sans font-bold text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Conversion Trigger */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <CTA />
      </section>
    </div>
  );
}
