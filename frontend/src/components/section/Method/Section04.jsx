"use client";

import React from "react";
import { motion } from "framer-motion";
import { section04 } from "@/data/methoddata";

export default function Section04() {
  return (
    <section className="section bg-bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-4xl font-manrope-bold text-brand">
            {section04.num}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
            {section04.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-manrope-light">
            {section04.description}
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {section04.grid.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-border-primary/20 p-6 rounded-2xl flex flex-col space-y-4 hover:border-brand/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 shadow-inner">
                  {idx === 0 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 01.757-.975 3.877 3.877 0 012.902.64 5.579 5.579 0 005.682 0 3.877 3.877 0 012.902-.64A1 1 0 0117 5v11.166C17 16.7 15.7 17 14.5 17c-1.2 0-2.5-.3-3.5-.833A4.873 4.873 0 007.5 17c-1.2 0-2.5.3-3.5.833V5z" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {idx === 4 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                  {idx === 5 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-base font-manrope-bold text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-manrope-light relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
