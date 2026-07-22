import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";
import { Link } from "@/src/lib/next-compat";
import { ArrowRight, BookOpen, Laptop, Heart, FileText } from "lucide-react";
import { motion } from "motion/react";

export const metadata = {
  title: "Bespoke Ghostwriting Services | GoldLeaf Ghostwriting",
  description: "Work with elite co-authors to capture your story. From business guides to autobiographies, we write complete manuscripts tailored to your voice.",
  keywords: ["ghostwriting", "hire a book ghostwriter", "professional biography writer"]
};

export default function GhostwritingPage() {
  const service = CMS_CONTENT.services.find(s => s.slug === "ghostwriting")!;

  const subServices = [
    {
      title: "Book Writing",
      desc: "Full-length hardcover and paperback manuscripts tailored to executives, founders, and scientists.",
      href: "/ghostwriting/book-writing",
      icon: BookOpen
    },
    {
      title: "eBook Writing",
      desc: "Lead-generating digital books optimized specifically for Kindle, Apple Books, and tablet screens.",
      href: "/ghostwriting/ebook-writing",
      icon: Laptop
    },
    {
      title: "Memoir Writing",
      desc: "Preserving sensitive family stories, memories, and personal life lessons with absolute care.",
      href: "/ghostwriting/memoir-writing",
      icon: Heart
    },
    {
      title: "Autobiography",
      desc: "Rigorous, official historical chronological accounts of your career, milestones, and philosophies.",
      href: "/ghostwriting/autobiography",
      icon: FileText
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      <Hero
        badge="ELITE CO-AUTHORING"
        title={service.title}
        subtitle={service.longDesc}
        primaryText="Talk to a Writing Specialist"
        primaryLink="/contact"
        secondaryText="View Writing Pricing"
        secondaryLink="/packages"
        bgImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Sub services grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="OUR WRITING SPECIALTIES"
          title="Capturing Your Voice Across Multiple Formats"
          subtitle="Explore our specialized writing sub-services, each backed by professional journalists and industry historians."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <span>Explore Specialty</span>
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Confidentiality notice banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xl font-sans font-bold text-slate-900">
              Our 100% Invisible Author Promise
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Every draft, note, interview, and metadata log is kept strictly confidential. Our writers operate purely under service-for-hire covenants. We hold zero claim to your royalties, book files, or intellectual copyright—guaranteed.
            </p>
          </div>
          <div className="lg:text-right">
            <Link
              href="/contact"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold uppercase tracking-widest text-[10px] inline-block shadow-sm"
            >
              Sign NDA & Consult
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <CTA />
      </section>
    </div>
  );
}
