import React from "react";
import Button from "@/components/ui/Button";
import { heroSection } from "@/data/home";
import Heighlight from "@/components/shared/Heighlight";
import Button2 from "@/components/ui/Button2";
import Note from "@/components/shared/Note";

export default function HeroSection() {
  return (
    <section className="section gap-10">
      
      <div className="flex-col-center relative w-full gap-8">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px] md:h-[650px] md:w-[650px]"
          style={{ backgroundColor: "#EC840C", opacity: 0.35 }}
        />

        {/* Top Subtitle */}
        <div className="relative z-10">
          <h1 className="hero-title-second">{heroSection.subtitle}</h1>
        </div>

        {/* Giant Headline */}
        <div className="relative z-10">
          <h1 className="hero-title-main text-center">
            {heroSection.headline}
          </h1>
        </div>

        {/* Bottom Content Grid */}
        {/* Right Column - Info, Social Proof & CTA */}
        <div className="flex-col-center relative z-10 gap-8 pl-0 md:gap-10">
          {/* Description Text */}
          <p className="subtitle max-w-[1000px] text-center">
            {heroSection.description}
          </p>

          {/* Pill CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button text={heroSection.cta1.text} link={heroSection.cta1.url} />
            <Button2 text={heroSection.cta2.text} link={heroSection.cta2.url} />
          </div>

          <Note text="Proof: Trusted by 50+ businesses." />
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="card-rounded h-auto w-full"
      >
        <source
          src="https://ik.imagekit.io/anideatech/ait/ait/ait-hero.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
