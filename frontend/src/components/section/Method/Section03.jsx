"use client";

import React from "react";
import { section03 } from "@/data/methoddata";

export default function Section03() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-4xl font-manrope-bold text-brand">
              {section03.num}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
              {section03.title}
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-manrope-light">
            {section03.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {section03.pillars.map((pillar) => (
              <div key={pillar.id} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-brand/10 group-hover:bg-brand/20 flex items-center justify-center text-brand flex-shrink-0 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-manrope-medium text-text-primary group-hover:text-brand transition-colors duration-300">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-border-primary/20 bg-zinc-50 dark:bg-zinc-950/40 p-4 shadow-xl group">
          <div className="overflow-hidden rounded-xl">
            <img
              src={section03.image}
              alt="Hour glass dial visual"
              className="w-full h-auto object-cover rounded-lg aspect-square group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
