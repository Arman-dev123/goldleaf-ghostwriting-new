import React from "react";
import { motion } from "motion/react";
import { Shield, Users, Star, RefreshCcw, Layout, Clock } from "lucide-react";

export function FeatureGrid() {
  const benefits = [
    {
      title: "100% Intellectual Property",
      desc: "Unlike traditional agencies, we take zero commission and require no co-author credits. You retain full copyrights, ISBN records, and royalties forever.",
      icon: Shield
    },
    {
      title: "Vetted Literary Specialists",
      desc: "Our authors are experienced ghostwriters, journalists, and technical researchers selected specifically to match your professional background.",
      icon: Users
    },
    {
      title: "Bestseller Target Campaigning",
      desc: "We research low-competition retail categories and run calculated launching strategies to give your physical books maximum visibility.",
      icon: Star
    },
    {
      title: "Unlimited Iterations",
      desc: "Your draft stays with us until it's absolutely perfect. We submit chapters piece-by-piece and execute adjustments until you sign off with pride.",
      icon: RefreshCcw
    },
    {
      title: "Author Web Design",
      desc: "Available in our Elite tier, we build a beautiful responsive author website to secure email signups and showcase your books to prospective readers.",
      icon: Layout
    },
    {
      title: "Dynamic Portal Control",
      desc: "Log into your secure portal 24/7 to upload interview media files, read active chapters, submit structural feedback, and check print proofs.",
      icon: Clock
    }
  ];

  return (
    <div id="feature-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, i) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="frosted-glass-card rounded-2xl border border-slate-200/60 p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:border-[#1e40af]/20 hover:scale-[1.01]"
          >
            <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#1e40af] shrink-0">
              <Icon className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-sans font-bold text-slate-900 mb-2.5">
              {benefit.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {benefit.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FeatureGrid;
