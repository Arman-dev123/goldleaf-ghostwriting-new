import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";
import { Link } from "@/src/lib/next-compat";
import { ArrowRight, Edit3, CheckSquare, Bookmark, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export const metadata = {
  title: "Manuscript Editing & Proofreading | GoldLeaf Ghostwriting",
  description: "Refine your existing manuscript with elite book editors. We polish narrative flow, sentence structure, and vocabulary while keeping your voice authentic.",
  keywords: ["manuscript copy editing", "Chicago Manual of Style proofreader", "book diagnostic report"]
};

export default function EditingPage() {
  const service = CMS_CONTENT.services.find(s => s.slug === "editing")!;

  const subServices = [
    {
      title: "Proofreading",
      desc: "Final line-by-line quality sweep to capture minor punctuation slips and layout spacing issues.",
      href: "/editing/proofreading",
      icon: CheckSquare
    },
    {
      title: "Copy Editing",
      desc: "Focusing on sentence-level transition speeds, passive-voice reductions, and readability pacing.",
      href: "/editing/copy-editing",
      icon: Bookmark
    },
    {
      title: "Manuscript Review",
      desc: "Comprehensive diagnostic report analyzing developmental pacing, market appeal, and character arcs.",
      href: "/editing/manuscript-review",
      icon: FileCheck
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      <Hero
        badge="LITERARY COMPLIANCE"
        title={service.title}
        subtitle={service.longDesc}
        primaryText="Talk to an Editor"
        primaryLink="/contact"
        secondaryText="View Editorial Packages"
        secondaryLink="/packages"
        bgImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Sub services grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="OUR EDITORIAL SERVICES"
          title="Polishing Drafts to Publish-Grade Brilliance"
          subtitle="Whether you have a rough outline or a complete 80,000-word draft, we help you hone your flow and style."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subServices.map((sub, i) => {
            const Icon = sub.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-slate-900 mb-2">{sub.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">{sub.desc}</p>
                </div>
                <div>
                  <Link
                    href={sub.href}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800"
                  >
                    <span>Explore Methodology</span>
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <CTA />
      </section>
    </div>
  );
}
