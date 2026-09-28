import React from "react";
import Heighlight from "@/components/shared/Heighlight";
import ImageCard from "@/components/shared/ImageCard";
import { heroSectionData } from "@/data/howwework";
import Note from "@/components/shared/Note";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="section gap-10 sm:gap-2 md:gap-1">
      {/* Top Highlight Badge */}
      <div className="mb-5">
        <Heighlight text={heroSectionData.badgeText} />
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

      <Button text="Contact Us" />

      {/* Subcaption above Image Cards */}
      <div className="mb-8 px-4 text-center sm:mb-10">
        <Note text={heroSectionData.subCaption + ""} />
      </div>
    </section>
  );
}
