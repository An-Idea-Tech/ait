"use client";

import React from "react";
import { methodHero } from "@/data/methoddata";

export default function HeroSection() {
  return (
    <section className="bg-bg-primary pt-28 md:pt-36 flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <h1 className="hero-title-main max-w-4xl leading-tight">
          The <span className="text-brand">thinking</span> happens before the code.
        </h1>

        <p className="description max-w-2xl mx-auto mt-6 text-center">
          {methodHero.description}
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mt-16 overflow-hidden">
          <div className="overflow-hidden aspect-video md:aspect-[4/3] w-full">
            <img
              src={methodHero.image1}
              alt="Thinking concept"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden aspect-video md:aspect-[4/3] w-full">
            <img
              src={methodHero.image2}
              alt="Structuring concept"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
