import React from "react";
import { motion } from "motion/react";

export function Brands() {
  const brands = [
    { name: "Kindle Direct Publishing", label: "Amazon KDP" },
    { name: "IngramSpark Publishing", label: "IngramSpark" },
    { name: "Barnes & Noble Press", label: "Barnes & Noble" },
    { name: "Apple Books Partner", label: "Apple Books" },
    { name: "Google Play Books", label: "Google Play" }
  ];

  return (
    <div id="brands" className="py-6 border-y border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-6">
          We publish your books directly on major distribution channels
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="font-sans font-extrabold text-slate-500 hover:text-blue-800 text-sm md:text-base tracking-wider border border-slate-200/50 px-4 py-2 bg-white rounded-lg shadow-xs select-none transition-all duration-200 cursor-default"
            >
              {brand.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
