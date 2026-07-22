import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { FAQItem } from "@/src/lib/sanity";

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border border-slate-200/60 rounded-2xl overflow-hidden frosted-glass-card shadow-sm hover:border-[#1e40af]/30 transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 pr-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1e40af] flex items-center justify-center shrink-0 group-hover:bg-[#1e40af] group-hover:text-white transition-all duration-300">
                  <MessageSquare className="h-4.5 w-4.5" />
                </div>
                <span className="font-sans font-bold text-slate-900 group-hover:text-[#1e40af] transition-colors duration-200 text-base">
                  {faq.question}
                </span>
              </div>
              <div className={`p-1.5 rounded-full bg-slate-100/50 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#1e40af] transition-all duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                <ChevronDown className="h-4.5 w-4.5 transition-transform duration-300" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200/50 text-slate-600 text-sm leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FAQ;
