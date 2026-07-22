import React from "react";
import { motion } from "motion/react";
import { ServiceDetail } from "@/src/lib/sanity";
import Hero from "@/src/components/Hero";
import CTA from "@/src/components/CTA";
import SectionHeading from "@/src/components/SectionHeading";
import { Check, ArrowLeft, Star, PhoneCall } from "lucide-react";
import { Link } from "@/src/lib/next-compat";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
  parentSlug?: string;
  parentName?: string;
}

export function ServiceDetailTemplate({ service, parentSlug, parentName }: ServiceDetailTemplateProps) {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. Header Hero */}
      <Hero
        badge={parentName ? `${parentName} Specialty` : "PREMIUM SERVICE DETAIL"}
        title={service.title}
        subtitle={service.shortDesc}
        primaryText="Talk to a Specialist"
        primaryLink={`/contact?service=${encodeURIComponent(service.title)}`}
        secondaryText="View Full Services"
        secondaryLink="/writing-services"
        bgImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1920&auto=format&fit=crop"
      />

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Back Link */}
        {parentSlug && parentName && (
          <div className="mb-8">
            <Link
              href={`/${parentSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to {parentName} Overview</span>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Detailed Paragraph Text */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              SERVICE DESCRIPTION & CRITERIA
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
              Elite Literary Execution Built for Exacting Standards
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {service.longDesc}
            </p>
            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-1 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-xs font-semibold text-slate-600">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span>Award-winning Editors</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-xs font-semibold text-slate-600">
                <PhoneCall className="h-3.5 w-3.5 text-blue-600" />
                <span>24-Hour Lead Response</span>
              </div>
            </div>
          </div>

          {/* Bulleted Features Card */}
          <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/30 rounded-bl-full -z-10" />

            <h3 className="text-lg font-sans font-bold text-slate-900 mb-6">
              Included Deliverables & Features
            </h3>

            <ul className="space-y-4">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3.5 text-sm text-slate-700"
                >
                  <div className="mt-1 shrink-0 p-0.5 rounded-full bg-blue-100 text-blue-600">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-sans">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200/55 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="text-center py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                Book Diagnostic Consultation
              </Link>
              <Link
                href="/packages"
                className="text-center py-3 px-6 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                View Packages pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conversion Bottom Panel */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <CTA
          title={`Ready to Get Started with ${service.title}?`}
          subtitle="Unlock complete corporate ownership, absolute privacy, and stellar co-writing standards. Lock in your consultation now."
          primaryText="Schedule Initial Diagnostic"
          primaryLink={`/contact?service=${encodeURIComponent(service.title)}`}
        />
      </section>
    </div>
  );
}

export default ServiceDetailTemplate;
