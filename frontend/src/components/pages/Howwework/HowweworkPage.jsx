import HeroSection from '@/components/section/HowweworkPage/HeroSection'
import SectionNav from '@/components/shared/SectionNav'
import { navigationSections, howWeWorkPhases } from '@/data/howwework'
import PhaseCard from '../../howwework/PhaseCard'
import React from 'react'

export default function HowweworkPage() {
  return (
    <div className="page flex flex-col gap-12 sm:gap-16">
      <HeroSection />
      <SectionNav sections={navigationSections} />
      
      <div className="flex flex-col gap-12 sm:gap-16 w-full">
        {howWeWorkPhases.map((phase) => (
          <PhaseCard key={phase.id} data={phase} />
        ))}
      </div>
    </div>
  )
}
