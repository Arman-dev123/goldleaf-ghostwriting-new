import React from "react";
import { motion } from "motion/react";
import { BookOpen, Award, ShieldCheck, Heart } from "lucide-react";

export function Stats() {
  const statsList = [
    {
      value: "150+",
      label: "Books Ghostwritten",
      desc: "Novels, business guides, memoirs, and autobiographies",
      icon: BookOpen
    },
    {
      value: "45+",
      label: "Amazon Bestsellers",
      desc: "Top ranks in business, technology, and biography lists",
      icon: Award
    },
    {
      value: "100%",
      label: "Confidentiality",
      desc: "Enforced via strict NDA covenants from day one",
      icon: ShieldCheck
    },
    {
      value: "4.9/5",
      label: "Client Rating",
      desc: "Averaged across verified customer project evaluations",
      icon: Heart
    }
  ];

  return (
    <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsList.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="frosted-glass-card rounded-2xl p-6 border border-slate-200/50 hover:shadow-xl hover:border-[#1e40af]/20 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Soft backdrop radial accent */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-50/40 rounded-full -z-10 group-hover:scale-150 transition-transform duration-300" />

            <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#1e40af]">
              <Icon className="h-5 w-5" />
            </div>

            <div className="text-3xl font-sans font-extrabold text-[#0a192f] tracking-tight">
              {stat.value}
            </div>

            <div className="text-sm font-sans font-bold text-slate-800 mt-1">
              {stat.label}
            </div>

            <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              {stat.desc}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Stats;
