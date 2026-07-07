import HeroSection from '@/components/section/homePage/HeroSection'
import IntroSection from '@/components/section/homePage/IntroSection'
import ProjectSection from '@/components/section/homePage/ProjectSection'
import QuizSection from '@/components/section/homePage/QuizSection'
import ServiceSection from '@/components/section/homePage/ServiceSection'
import TrustSection from '@/components/section/homePage/TrustSection'
import React from 'react'

export default function HomePage() {
  return (
    <>
        <main className='page'>
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
