import React from "react";
import { motion } from "motion/react";
import { Link } from "@/src/lib/next-compat";
import * as Icons from "lucide-react";
import { ServiceDetail } from "@/src/lib/sanity";

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
  key?: string | number | React.Key;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically resolve icon component
  const IconComponent = (Icons as any)[service.icon] || Icons.BookOpen;

  // Build the relative route
  let targetRoute = `/writing-services`;
  if (service.slug === "ghostwriting" || service.slug === "publication" || service.slug === "cover-design" || service.slug === "editing") {
    targetRoute = `/${service.slug}`;
  } else if (["book-writing", "ebook-writing", "memoir-writing", "autobiography"].includes(service.slug)) {
    targetRoute = `/ghostwriting/${service.slug}`;
  } else if (["amazon-kdp", "self-publishing", "book-marketing"].includes(service.slug)) {
    targetRoute = `/publication/${service.slug}`;
  } else if (["custom-cover", "illustrations"].includes(service.slug)) {
    targetRoute = `/cover-design/${service.slug}`;
  } else if (["proofreading", "copy-editing", "manuscript-review"].includes(service.slug)) {
    targetRoute = `/editing/${service.slug}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      id={`service-card-${service.slug}`}
      className="frosted-glass-card rounded-2xl p-8 border border-slate-200/60 hover:shadow-2xl hover:border-[#1e40af]/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
    >
      {/* Visual background gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/30 rounded-bl-full -z-10 group-hover:bg-[#1e40af]/10 transition-colors duration-300" />

      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-[#1e40af] group-hover:bg-[#1e40af] group-hover:text-white transition-all duration-300">
        <IconComponent className="h-7 w-7 stroke-[1.75]" />
      </div>

      <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 group-hover:text-[#1e40af] transition-colors duration-200">
        {service.title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {service.shortDesc}
      </p>

      {service.features && service.features.length > 0 && (
        <ul className="space-y-2 mb-8 text-xs text-slate-600">
          {service.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Icons.Check className="h-3.5 w-3.5 text-[#1e40af] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        <Link
          href={targetRoute}
          className="inline-flex items-center text-sm font-semibold text-[#1e40af] hover:text-[#0a192f] group/link"
        >
          <span>Learn More</span>
          <Icons.ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
