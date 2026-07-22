import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";
import { Link } from "@/src/lib/next-compat";
import { ArrowRight, Globe, Award, ShieldCheck, Megaphone } from "lucide-react";
import { motion } from "motion/react";

export const metadata = {
  title: "Publishing & Distribution Services | GoldLeaf Ghostwriting",
  description: "Navigate global distribution easily. We list your physical and digital books on Amazon KDP, Barnes & Noble, and IngramSpark.",
  keywords: ["self-publishing assistance", "Amazon book registry", "book launch plan"]
};

export default function PublicationPage() {
  const service = CMS_CONTENT.services.find(s => s.slug === "publication")!;

  const subServices = [
    {
      title: "Amazon KDP Setup",
      desc: "Optimize your listing with target keyword metadata and beautiful A+ Product Page designs.",
      href: "/publication/amazon-kdp",
      icon: Award
    },
    {
      title: "Self-Publishing Mastery",
      desc: "Establish your own independent imprint, secure ISBN records, and manage global printers.",
      href: "/publication/self-publishing",
      icon: ShieldCheck
    },
    {
      title: "Book Marketing & PR",
      desc: "Calculate launch strategies, schedule review runs, and build excitement on social networks.",
      href: "/publication/book-marketing",
      icon: Megaphone
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      <Hero
        badge="WORLDWIDE DISTRIBUTION"
        title={service.title}
        subtitle={service.longDesc}
        primaryText="Talk to a Publisher"
        primaryLink="/contact"
        secondaryText="View Distribution Pricing"
        secondaryLink="/packages"
        bgImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Sub services grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="OUR PUBLISHING SUB-SERVICES"
          title="Bringing Your Manuscript to Physical and Digital Stores"
          subtitle="We eliminate the complexity of ISBN registries, tax registries, and retail upload systems."
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
                    <span>Explore Strategy</span>
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
