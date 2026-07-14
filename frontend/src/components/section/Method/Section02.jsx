"use client";

import React from "react";
import { section02 } from "@/data/methoddata";

export default function Section02() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16">
      <div className="w-full max-w-[1400px] mx-auto space-y-12">
        <div className="space-y-4">
          <span className="text-4xl font-manrope-bold text-brand">
            {section02.num}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
            {section02.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {section02.cards.map((card) => (
            <div
              key={card.id}
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-border-primary/20 p-8 rounded-xl flex flex-col space-y-6 hover:border-brand/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                  {card.id === 1 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                  {card.id === 2 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18" />
                    </svg>
                  )}
                  {card.id === 3 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-manrope-bold text-text-primary">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-manrope-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
