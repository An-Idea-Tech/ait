"use client";

import React from "react";
import { contactHero } from "@/data/contactdata";

export default function HeroSection() {
  return (
    <section className="section bg-bg-primary relative overflow-hidden">

      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">


        <h1 className="hero-title-main max-w-4xl leading-tight">
          <h1 className="text-primary">Conatct</h1>
          {contactHero.title}
        </h1>

        <p className="subtitle max-w-2xl mx-auto mt-6 text-center">
          {contactHero.description}
        </p>

        <div className="w-full mt-16 overflow-hidden rounded-2xl  bg-zinc-950/20 shadow-xl group">
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
