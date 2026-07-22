import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/src/lib/sanity";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <div id="testimonials" className="max-w-4xl mx-auto px-4">
      <div className="relative bg-gradient-to-br from-white to-blue-50/20 border border-slate-100 rounded-3xl p-8 md:p-14 shadow-md overflow-hidden">
        {/* Large quotes vector decoration */}
        <Quote className="absolute top-10 left-10 h-28 w-28 text-blue-500/5 -z-10" />

        <div className="relative min-h-[250px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed font-sans">
                "{active.text}"
              </p>

              {/* Reviewer Meta */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={active.image}
                  alt={active.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                />
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-base">{active.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold">{active.role}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Author of "{active.bookTitle}"</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex justify-end gap-3 mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white hover:bg-blue-600 hover:text-white text-slate-600 border border-slate-100 hover:border-blue-600 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white hover:bg-blue-600 hover:text-white text-slate-600 border border-slate-100 hover:border-blue-600 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
