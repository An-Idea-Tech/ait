import React from "react";
import Heighlight from "@/components/shared/Heighlight";
import ImageCard from "@/components/shared/ImageCard";
import { heroSectionData } from "@/data/howwework";

export default function HeroSection() {
  return (
    <section className="section ">

    
      {/* Top Highlight Badge */}
      <div className="mb-5">
        <Heighlight text={heroSectionData.badgeText} />
      </div>

    <div>

      
    </div>
      {/* Main Heading */}
      <div className="max-w-5xl px-2 text-center sm:mb-8 sm:px-4">
        
        <h1 className="hero-title-main !text-text-primary">
          <span className="mb-2 block sm:mb-3">
            {heroSectionData.headingLine1}
          </span>
          <span className="huge-text !text-hww">
            {heroSectionData.headingLine2Highlight}
          </span>
          <span>{heroSectionData.headingLine2Suffix}</span>
        </h1>
      </div>

      {/* Subtitle / Description */}
      <p className="subtitle mb-16 max-w-3xl px-4 sm:mb-20 sm:text-base md:text-lg">
        {heroSectionData.description}
      </p>

      {/* Subcaption above Image Cards */}
      <div className="mb-8 px-4 text-center sm:mb-10">
        <p className="font-manrope-medium text-text-secondary text-xs tracking-wide sm:text-sm md:text-base">
          {heroSectionData.subCaption}
        </p>
      </div>


    </section>
  );
}
