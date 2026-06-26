import React from "react";
import Image from "next/image";
import { heroSection } from "@/data/hero";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="flex-col-center min-h-screen w-full">
      <div className="section-padding-x flex-col-center w-full">
        {/* Top Subtitle */}
        <div className="mb-4">
          <h1 className="hero-title-second">{heroSection.subtitle}</h1>
        </div>

        {/* Giant Headline */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h1 className="hero-title-main text-center">
            {heroSection.headline}
          </h1>
        </div>

        {/* Bottom Content Grid */}
        {/* Right Column - Info, Social Proof & CTA */}
        <div className="flex-col-center gap-8 pl-0 md:gap-10">
          {/* Description Text */}
          <p className="subtitle max-w-xl text-center">
            {heroSection.description}
          </p>

          

          {/* Pill CTA Button */}
          <div className="pt-2">
            <Button text={heroSection.cta.text} link={heroSection.cta.url} />
          </div>
        </div>
      </div>
    </section>
  );
}
