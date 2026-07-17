"use client";

import React from "react";
import { methodHero } from "@/data/methoddata";
import Heighlight from "@/components/shared/Heighlight";

export default function HeroSection() {
  return (
    <section className="bg-bg-primary flex flex-col items-center relative py-12 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-1/2 z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[450px] sm:w-[450px] sm:blur-[110px] md:h-[600px] md:w-[600px] bg-brand opacity-[0.15] dark:opacity-[0.25]" />

      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        <div className="flex my-5">
          <Heighlight text={methodHero.pill} />
        </div>

        <h1 className="hero-title-main max-w-5xl leading-tight">
          The <span className="image-text bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800')] font-manrope-bold">thinking</span> happens before the code.
        </h1>

        <p className="description max-w-2xl mx-auto mt-6 text-center">
          {methodHero.description}
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="overflow-hidden aspect-video md:aspect-[4/3] w-full rounded-2xl border border-border-primary/20 bg-zinc-950/20 shadow-xl group">
            <img
              src={methodHero.image1}
              alt="Thinking concept"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden aspect-video md:aspect-[4/3] w-full rounded-2xl border border-border-primary/20 bg-zinc-950/20 shadow-xl group">
            <img
              src={methodHero.image2}
              alt="Structuring concept"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
