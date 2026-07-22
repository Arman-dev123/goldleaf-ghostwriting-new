import React from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  id?: string;
}

export function SectionHeading({ badge, title, subtitle, align = "center", id }: SectionHeadingProps) {
  const isCenter = align === "center";
  const isRight = align === "right";

  return (
    <div
      id={id}
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCenter ? "mx-auto text-center" : isRight ? "ml-auto text-right" : "text-left"
      }`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold tracking-widest text-[#1e40af] uppercase mb-3 bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100/60"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-[#0a192f]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-slate-600 leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-16 bg-[#1e40af] mt-6 ${
          isCenter ? "mx-auto" : isRight ? "ml-auto" : "mr-auto"
        } rounded-full`}
      />
    </div>
  );
}

export default SectionHeading;
