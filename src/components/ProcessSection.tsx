import React from "react";
import { motion } from "motion/react";
import { Search, Map, Feather, Edit3, Globe } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover & Research",
      desc: "Through targeted, private interview sessions, we capture your life lessons, technical secrets, and exact speaking syntax.",
      icon: Search
    },
    {
      num: "02",
      title: "Structured Mapping",
      desc: "Our literary strategists map your concepts into detailed chapter blueprints, theme timelines, and custom narrative outlines.",
      icon: Map
    },
    {
      num: "03",
      title: "Creative Writing",
      desc: "Our elite ghostwriter drafts chapters iteratively. You review progress each week and guide pacing, humor, and depth.",
      icon: Feather
    },
    {
      num: "04",
      title: "Grammarian Review",
      desc: "Our senior copy-editors and proofreaders refine your draft, polishing sentence structures while keeping your voice authentic.",
      icon: Edit3
    },
    {
      num: "05",
      title: "Global Distribution",
      desc: "We configure your worldwide ISBN registry, layout digital covers, and launch paperback and hardcovers globally.",
      icon: Globe
    }
  ];

  return (
    <div id="process" className="relative">
      {/* Central timeline connector line for desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block -translate-x-1/2 -z-10" />

      <div className="space-y-12 lg:space-y-24">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Card visual details block */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div
                  className={`frosted-glass-card rounded-3xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative ${
                    isEven ? "lg:text-right" : ""
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-[#1e40af] mb-6 ${
                      isEven ? "lg:ml-auto" : ""
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className={`block text-xs font-mono font-extrabold text-[#1e40af] uppercase tracking-widest mb-1`}>
                    Step {step.num}
                  </span>

                  <h3 className="text-xl font-sans font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* Timeline Center Point Indicator */}
              <div className="relative shrink-0 hidden lg:block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-md z-10 relative"
                >
                  {i + 1}
                </motion.div>
              </div>

              {/* Empty placeholder spacer on opposite side for desktop layout balance */}
              <div className="w-full lg:w-1/2 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcessSection;
