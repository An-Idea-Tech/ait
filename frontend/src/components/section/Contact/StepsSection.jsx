"use client";

import React from "react";
import { stepsSection } from "@/data/contactdata";

export default function StepsSection() {
  return (
    <section className="bg-bg-primary flex flex-col w-full">
      <div className="w-full max-w-[1200px] mx-auto space-y-12">
        <h2 className="title text-left">{stepsSection.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsSection.steps.map((step) => (
            <div
              key={step.id}
              className="bg-zinc-50 dark:bg-zinc-900/60 border border-border-primary p-8 flex flex-col space-y-6"
            >
              <span className="text-4xl font-manrope-bold text-text-secondary/20">
                {step.id}
              </span>
              <h3 className="text-xl font-manrope-bold text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-manrope-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
