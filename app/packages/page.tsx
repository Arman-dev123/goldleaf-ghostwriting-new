import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import PricingCard from "@/src/components/PricingCard";
import SectionHeading from "@/src/components/SectionHeading";
import Testimonials from "@/src/components/Testimonials";

export const metadata = {
  title: CMS_CONTENT.seo.packages.title,
  description: CMS_CONTENT.seo.packages.description,
  keywords: CMS_CONTENT.seo.packages.keywords
};

export default function PackagesPage() {
  const packages = CMS_CONTENT.packages;

  return (
    <div className="space-y-24 pt-28 pb-20">
      {/* Packages Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          badge="PRICING & PACKAGES"
          title="Get Affordability Without Sacrificing Quality"
          subtitle="Staring at a blank page can be exhausting, which is why GoldLeaf Ghostwriting guides you through the entire process—research, writing, editing, and publishing. After all, what's the point of having a book if it doesn't reach your target audience?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <PricingCard key={pkg.name} pkg={pkg} index={idx} />
          ))}
        </div>
      </section>

      {/* Trust Pilot / Testimonials verification panel */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 bg-slate-50 py-20 rounded-3xl border border-slate-100">
        <SectionHeading
          badge="SUCCESS STORIES"
          title="What Our Bestselling Authors Say"
          subtitle="Read verified outcomes from industry leaders, startup founders, and historical memoirists who trusted GoldLeaf."
        />
        <Testimonials testimonials={CMS_CONTENT.testimonials} />
      </section>
    </div>
  );
}
