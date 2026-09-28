"use client";

import React from "react";
import { teamSection } from "@/data/contactdata";

export default function TeamSection() {
  return (
    <section className="section bg-bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-border-primary/20 bg-zinc-950/20 shadow-xl group lg:order-1 order-2">
          <img
            src={teamSection.image}
            alt="AIT Team Cover"
            className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-103"
          />
        </div>

        <div className="lg:col-span-7 space-y-6 lg:order-2 order-1">
          <h2 className="text-3xl sm:text-4xl font-manrope-bold text-text-primary">
            {teamSection.title}
          </h2>
          {teamSection.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base text-text-secondary leading-relaxed font-manrope-light"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
