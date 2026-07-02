import React from 'react'
import Heighlight from '@/components/shared/Heighlight'
import ImageCard from '@/components/shared/ImageCard'
import { heroSectionData } from '@/data/howwework'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 w-full">
      {/* Top Highlight Badge */}
      <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
        <Heighlight text={heroSectionData.badgeText} />
      </div>

      {/* Main Heading */}
      <div className="mb-6 sm:mb-8 text-center max-w-5xl px-2 sm:px-4">
        <h1 className="hero-title-main">
          <span className="block mb-2 sm:mb-3">{heroSectionData.headingLine1}</span>
          <span className="text-brand">{heroSectionData.headingLine2Highlight}</span>
          <span>{heroSectionData.headingLine2Suffix}</span>
        </h1>
      </div>

      {/* Subtitle / Description */}
      <p className="font-manrope-medium text-text-secondary text-center text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-16 sm:mb-20 px-4">
        {heroSectionData.description}
      </p>

      {/* Subcaption above Image Cards */}
      <div className="mb-8 sm:mb-10 text-center px-4">
        <p className="font-manrope-medium text-text-secondary text-xs sm:text-sm md:text-base tracking-wide">
          {heroSectionData.subCaption}
        </p>
      </div>

      
    </section>
  )
}
