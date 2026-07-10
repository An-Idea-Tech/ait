"use client";

import React from "react";
import { locationSection } from "@/data/contactdata";

export default function LocationSection() {
  return (
    <section className="bg-bg-primary flex flex-col w-full pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-manrope-bold text-text-primary">
            {locationSection.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {locationSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 dark:bg-zinc-900/60 border border-border-primary p-6 space-y-4"
              >
                <h3 className="text-base font-manrope-bold text-text-primary">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-manrope-light">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 overflow-hidden">
          <img
            src={locationSection.image}
            alt="Our Workspace Office"
            className="w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
