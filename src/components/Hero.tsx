import React from "react";
import { motion } from "motion/react";
import { Button } from "@/src/components/Buttons";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  bgImage?: string;
}

export function Hero({
  badge,
  title,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  bgImage = "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1920&auto=format&fit=crop"
}: HeroProps) {
  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 bg-[#0a192f]">
      {/* Background Image with Parallax or subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={bgImage}
          alt="Luxury Writing Space"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Navy/Blue overlay with high-contrast gradient conforming to Design HTML */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050c18] via-[#0a192f]/95 to-blue-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-[#050c18]/90" />
      </div>

      {/* Decorative Glow Elements from Design HTML */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e40af]/20 to-transparent pointer-events-none z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Grid container */}
      <div className="max-w-5xl mx-auto text-center relative z-10 text-white space-y-8">
        {/* Animated Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-blue-300">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Dynamic Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight leading-none text-white max-w-4xl mx-auto"
        >
          {title.includes("Mastering") ? (
            <>
              Mastering the Art of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Literary Brilliance
              </span>
            </>
          ) : title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {primaryText && primaryLink && (
            <Button variant="secondary" size="lg" href={primaryLink} showArrow className="bg-[#1e40af] hover:bg-[#0a192f] text-white border-none shadow-lg shadow-blue-900/30">
              {primaryText}
            </Button>
          )}

          {secondaryText && secondaryLink && (
            <Button variant="glass" size="lg" href={secondaryLink}>
              {secondaryText}
            </Button>
          )}
        </motion.div>
      </div>

      {/* Floating Card (Glassmorphism) from Design HTML */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden xl:block absolute bottom-12 right-12 w-80 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-20"
      >
        <div className="text-blue-300 text-3xl font-serif mb-2">“</div>
        <p className="text-white/90 text-sm italic mb-4 leading-relaxed">
          GoldLeaf didn't just write my book; they found my voice and amplified it across 300 pages of sheer perfection.
        </p>
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
            alt="Dr. Julian Mercer" 
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover border border-white/40" 
          />
          <div>
            <div className="text-white text-xs font-bold">Dr. Julian Mercer</div>
            <div className="text-blue-300 text-[10px] uppercase tracking-wider font-semibold">Fortune 500 CEO</div>
          </div>
        </div>
      </motion.div>

      {/* Decorative clean waves border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-50/0 pointer-events-none" />
    </div>
  );
}

export default Hero;
