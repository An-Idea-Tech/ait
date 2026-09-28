"use client";

import React from "react";
import Heighlight from "@/components/shared/Heighlight";
import { contactHero } from "@/data/contactdata";

export default function HeroSection() {
  return (
    <section className="section bg-bg-primary relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-1/2 z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[450px] sm:w-[450px] sm:blur-[110px] md:h-[600px] md:w-[600px] bg-brand/10 dark:bg-brand/20 opacity-80" />

      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        <div className="flex my-5">
          <Heighlight text={contactHero.pill} />
        </div>

        <h1 className="hero-title-main max-w-4xl leading-tight">
          {contactHero.title}
        </h1>

        <p className="description max-w-2xl mx-auto mt-6 text-center">
          {contactHero.description}
        </p>

        <div className="w-full mt-16 overflow-hidden rounded-2xl border border-border-primary/20 bg-zinc-950/20 shadow-xl group">
          <img
            src={contactHero.image}
            alt="AIT Contact Cover"
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover transition-transform duration-[1500ms] group-hover:scale-103"
          />
        </div>
      </div>
    </section>
  );
}
