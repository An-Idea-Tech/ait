import React from "react";
import Button from "@/components/ui/Button";
import { heroSection } from "@/data/home";
import Heighlight from "@/components/shared/Heighlight";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section gap-10">
      <Heighlight
        text="A Mangaluru studio that says no a lot"
        className="relative top-[-20] md:top-[-60]"
      />
      <div className="flex-col-center relative w-full gap-8">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px] md:h-[650px] md:w-[650px]"
          style={{ backgroundColor: "#a35a3a", opacity: 0.35 }}
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
          <p className="subtitle max-w-xl text-center">
            {heroSection.description}
          </p>

          {/* Pill CTA Button */}
          <div className="pt-2">
            <Button text={heroSection.cta.text} link={heroSection.cta.url} />
          </div>

         
        </div>
      </div>

       <Image
            src="https://blog.hack2skill.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1764742623982%2F9ced9cc5-2305-447b-a6a0-3c4a609facec.png&w=3840&q=75"
            width={100}
            height={100}
            alt="Hero graphic"
            className="relative w-full md:h-150 md:w-auto"
            unoptimized
          />
    </section>
  );
}
