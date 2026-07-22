import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "@/src/components/Buttons";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
}

export function CTA({
  title = "Ready to Preserve Your Legacy?",
  subtitle = "Don't let your stories, systems, or discoveries fade away. Partner with GoldLeaf Ghostwriting and co-author a professional book that inspires generations.",
  primaryText = "Schedule Free Consultation",
  primaryLink = "/contact",
  secondaryText = "View Writing Services",
  secondaryLink = "/writing-services"
}: CTAProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#050c18] via-[#0a192f] to-[#1e40af]/90 text-white rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl">
      {/* Dynamic background lighting accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold uppercase tracking-widest"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Priority Enrollment Window Open</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-sans font-bold tracking-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Button variant="secondary" size="lg" href={primaryLink} showArrow>
            {primaryText}
          </Button>
          <Button variant="glass" size="lg" href={secondaryLink}>
            {secondaryText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default CTA;
