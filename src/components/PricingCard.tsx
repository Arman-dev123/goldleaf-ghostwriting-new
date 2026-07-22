import React from "react";
import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { PricingPackage } from "@/src/lib/sanity";
import { Button } from "@/src/components/Buttons";

interface PricingCardProps {
  pkg: PricingPackage;
  index: number;
  key?: string | number | React.Key;
}

export function PricingCard({ pkg, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      id={`pricing-card-${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
      className={`rounded-3xl p-8 flex flex-col h-full relative border transition-all duration-300 ${
        pkg.isPopular
          ? "bg-[#0a192f] text-white border-blue-500/40 shadow-xl shadow-blue-950/30 frosted-glass-dark"
          : "frosted-glass-card text-slate-800 border-slate-200/60 shadow-md hover:shadow-xl hover:border-[#1e40af]/20"
      }`}
    >
      {/* Popular Tier Badge */}
      {pkg.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
          <Star className="h-3 w-3 fill-white" />
          Recommended
        </div>
      )}

      {/* Package Header */}
      <div className="mb-6">
        <h3 className={`text-2xl font-sans font-bold ${pkg.isPopular ? "text-white" : "text-slate-900"}`}>
          {pkg.name}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed ${pkg.isPopular ? "text-slate-300" : "text-slate-500"}`}>
          {pkg.description}
        </p>
      </div>
<div className="mb-8 border-b pb-6 border-slate-100/10" />

      {/* Feature List */}
      <ul className="space-y-4 mb-8 flex-grow">
        {pkg.features.map((feature, i) => {
          // If the feature is "Everything in Standard" or "Everything in Signature", highlight it!
          const isHeader = feature.startsWith("Everything in");
          return (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <Check
                  className={`h-4.5 w-4.5 ${
                    pkg.isPopular ? "text-blue-400" : "text-blue-600"
                  } stroke-[2.5]`}
                />
              </div>
              <span
                className={`text-sm ${
                  isHeader
                    ? "font-bold text-blue-500"
                    : pkg.isPopular
                    ? "text-slate-200"
                    : "text-slate-600"
                }`}
              >
                {feature}
              </span>
            </li>
          );
        })}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto">
        <Button
          variant={pkg.isPopular ? "secondary" : "outline"}
          href={`/contact?package=${encodeURIComponent(pkg.name)}`}
          className="w-full text-center"
        >
          {pkg.ctaText}
        </Button>
      </div>
    </motion.div>
  );
}

export default PricingCard;
