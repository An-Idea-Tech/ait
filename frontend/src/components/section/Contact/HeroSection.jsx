"use client";

import React from "react";
import { contactHero } from "@/data/contactdata";
import Heighlight from "@/components/shared/Heighlight";

export default function HeroSection() {
  return (
    <section className="bg-bg-primary flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <div className="flex my-5">
          <Heighlight text={contactHero.pill} />
        </div>

        <h1 className="hero-title-main max-w-4xl leading-tight">
          {contactHero.title}
        </h1>

        <p className="description max-w-2xl mx-auto mt-6 text-center">
          {contactHero.description}
        </p>

        <div className="w-full mt-12 md:mt-16 overflow-hidden">
          <img
            src={contactHero.image}
            alt="AIT Contact Cover"
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
