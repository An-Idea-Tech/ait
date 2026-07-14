"use client";

import React from "react";
import { motion } from "framer-motion";
import { section05 } from "@/data/methoddata";

export default function Section05() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-4xl font-manrope-bold text-brand">
            {section05.num}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
            {section05.title}
          </h2>
          <div className="space-y-6 pt-4">
            {section05.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-manrope-light"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center p-8 bg-zinc-950/20 dark:bg-zinc-950/40 border border-border-primary/20 rounded-xl aspect-square relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-brand/5 to-transparent opacity-60 pointer-events-none" />

          {/* Central Hub */}
          <div className="relative z-10 w-20 h-20 rounded-full border-2 border-brand bg-zinc-950 flex items-center justify-center shadow-[0_0_30px_rgba(239,135,13,0.3)]">
            <span className="text-brand font-manrope-bold text-2xl">AIT</span>
          </div>

          {/* Orbital Circle 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute w-44 h-44 rounded-full border border-border-primary/30 flex items-center justify-center"
          >
            <div className="absolute -top-3 w-6 h-6 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[10px] text-text-secondary">
              🤝
            </div>
            <div className="absolute -bottom-3 w-6 h-6 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[10px] text-text-secondary">
              💻
            </div>
          </motion.div>

          {/* Orbital Circle 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-68 h-68 rounded-full border border-dashed border-border-primary/20 flex items-center justify-center"
          >
            <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[10px] text-text-secondary">
              🚀
            </div>
            <div className="absolute -right-3.5 w-7 h-7 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[10px] text-text-secondary">
              📈
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
