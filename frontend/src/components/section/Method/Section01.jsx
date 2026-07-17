"use client";

import React from "react";
import { motion } from "framer-motion";
import { section01 } from "@/data/methoddata";

export default function Section01() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full max-w-[1400px] mx-auto relative z-10">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-4xl font-manrope-bold text-brand">
            {section01.num}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
            {section01.title}
          </h2>
          <div className="relative group overflow-hidden mt-8 max-w-lg border border-border-primary/20 bg-zinc-50/50 dark:bg-zinc-950/60 p-5 rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="pointer-events-none absolute -right-10 -bottom-10 z-0 h-48 w-48 rounded-full blur-[60px] bg-brand/10" />
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img
                src={section01.image}
                alt="Broken build visualization"
                className="w-full h-auto object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
            <motion.div
              whileHover={{ rotate: 90 }}
              className="absolute right-7 bottom-7 bg-brand text-black w-10 h-10 rounded-full flex items-center justify-center font-manrope-bold text-xl shadow-lg cursor-pointer z-20"
            >
              ×
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 lg:pt-16">
          {section01.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-manrope-light"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
