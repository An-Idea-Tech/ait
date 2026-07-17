"use client";

import React from "react";
import { motion } from "framer-motion";
import { locationSection } from "@/data/contactdata";

export default function LocationSection() {
  return (
    <section className="section bg-bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-manrope-bold text-text-primary">
            {locationSection.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {locationSection.cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-zinc-50 dark:bg-zinc-900/40 border border-border-primary/20 p-6 rounded-2xl space-y-4 hover:border-brand/40 shadow-sm transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand/5 rounded-bl-full pointer-events-none" />

                <h3 className="text-base font-manrope-bold text-text-primary relative z-10">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-manrope-light relative z-10">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-border-primary/20 bg-zinc-950/20 shadow-xl group">
          <img
            src={locationSection.image}
            alt="Our Workspace Office"
            className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-103"
          />
        </div>
      </div>
    </section>
  );
}
