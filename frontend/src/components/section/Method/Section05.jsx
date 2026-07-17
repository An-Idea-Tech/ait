"use client";

import React from "react";
import { motion } from "framer-motion";
import { section05 } from "@/data/methoddata";

export default function Section05() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto relative z-10">
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

        <div className="lg:col-span-5 flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950/40 border border-border-primary/20 rounded-2xl aspect-square relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-radial-gradient from-brand/5 to-transparent opacity-60 pointer-events-none" />

          {/* Glowing Backlight */}
          <div className="absolute w-48 h-48 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

          {/* Central Hub */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-24 h-24 rounded-full border-2 border-brand bg-bg-primary flex flex-col items-center justify-center shadow-[0_0_40px_rgba(239,135,13,0.25)] cursor-pointer"
          >
            <span className="text-brand font-manrope-bold text-xl tracking-wider">AIT</span>
            <span className="text-[9px] text-text-secondary font-manrope-bold tracking-widest mt-1 uppercase">Studio</span>
          </motion.div>

          {/* Orbital Circle 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-52 h-52 rounded-full border border-border-primary/30 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute -top-3 w-7 h-7 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[11px] text-text-secondary shadow-md cursor-pointer"
            >
              🤝
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute -bottom-3 w-7 h-7 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[11px] text-text-secondary shadow-md cursor-pointer"
            >
              💻
            </motion.div>
          </motion.div>

          {/* Orbital Circle 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="absolute w-76 h-76 rounded-full border border-dashed border-border-primary/20 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute -left-3.5 w-8 h-8 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[11px] text-text-secondary shadow-md cursor-pointer"
            >
              🚀
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute -right-3.5 w-8 h-8 rounded-full bg-zinc-900 border border-border-primary flex items-center justify-center text-[11px] text-text-secondary shadow-md cursor-pointer"
            >
              📈
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
