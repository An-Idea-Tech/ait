import HeroSection from '@/components/section/HomePage/HeroSection'
import IntroSection from '@/components/section/HomePage/IntroSection'
import ProjectSection from '@/components/section/HomePage/ProjectSection'
import QuizSection from '@/components/section/HomePage/QuizSection'
import ServiceSection from '@/components/section/HomePage/ServiceSection'
import TrustSection from '@/components/section/HomePage/TrustSection'
import React from 'react'

export default function HomePage() {
  return (
    <>
        <main>
            <HeroSection/>
            <IntroSection/>
            <QuizSection/>
            <TrustSection/>
            <ServiceSection/>
            <ProjectSection/>
        </main>
    </>
  )
}
