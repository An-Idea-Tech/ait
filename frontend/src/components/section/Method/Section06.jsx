"use client";

import React from "react";
import { motion } from "framer-motion";
import { section06 } from "@/data/methoddata";

export default function Section06() {
  return (
    <section className="section bg-bg-primary">
      <div className="w-full max-w-[1400px] mx-auto space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-4xl font-manrope-bold text-brand">
            {section06.num}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
            {section06.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-manrope-light">
            {section06.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {section06.cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-border-primary/20 p-6 rounded-2xl space-y-4 hover:border-brand/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand/5 rounded-bl-full pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand relative z-10 shadow-inner">
                {idx === 0 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )}
                {(idx === 3 || idx === 4) && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <h3 className="text-base font-manrope-bold text-text-primary relative z-10">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-manrope-light relative z-10">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
