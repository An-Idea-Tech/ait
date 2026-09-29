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
              className=" p-8 rounded-2xl flex flex-col bg-brand space-y-6 hover:border-brand/40 shadow-sm transition-all duration-300 relative overflow-hidden"
            >
            

              <span className="text-5xl font-manrope-bold text-bg-primary dark:text-bg-primary select-none relative z-10">
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
