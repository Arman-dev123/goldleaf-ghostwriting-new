import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";
import { Link } from "@/src/lib/next-compat";
import { ArrowRight, Palette, Image, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const metadata = {
  title: "Cover Design & Book Art | GoldLeaf Ghostwriting",
  description: "Dazzle your readers from the first glance. We design custom print jacket graphics, eBook covers, and professional diagrams or sketches.",
  keywords: ["book cover artist", "custom dust jacket design", "childrens book illustrator"]
};

export default function CoverDesignPage() {
  const service = CMS_CONTENT.services.find(s => s.slug === "cover-design")!;

  const subServices = [
    {
      title: "Custom Cover Art",
      desc: "Typography-focused front/back jacket designs made by premium industry designers.",
      href: "/cover-design/custom-cover",
      icon: Image
    },
    {
      title: "Book Illustrations",
      desc: "High-contrast vector work, charts, diagrams, and hand-drawn chapter separators.",
      href: "/cover-design/illustrations",
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      <Hero
        badge="JACKET ARTISTRY"
        title={service.title}
        subtitle={service.longDesc}
        primaryText="Talk to a Cover Designer"
        primaryLink="/contact"
        secondaryText="View Design Portfolios"
        secondaryLink="/packages"
        bgImage="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Sub services grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="OUR VISUAL PRODUCTS"
          title="Bespoke Visual Framing for Refined Writing"
          subtitle="A premium manuscript deserves world-class typography and covers that speak directly to target retail buyers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <span>Explore Artistry</span>
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
