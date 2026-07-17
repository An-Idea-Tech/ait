"use client";

import React from "react";
import { motion } from "framer-motion";
import { stepsSection } from "@/data/contactdata";

export default function StepsSection() {
  return (
    <section className="section bg-bg-primary">
      <div className="w-full max-w-[1200px] mx-auto space-y-12">
        <h2 className="title text-left">{stepsSection.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsSection.steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ y: -6 }}
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-border-primary/20 p-8 rounded-2xl flex flex-col space-y-6 hover:border-brand/40 shadow-sm transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand/5 rounded-bl-full pointer-events-none" />

              <span className="text-5xl font-manrope-bold text-brand/20 dark:text-brand/10 select-none relative z-10">
                {step.id}
              </span>
              <h3 className="text-xl font-manrope-bold text-text-primary relative z-10">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-manrope-light relative z-10">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
