import HeroSection from '@/components/section/HomePage/HeroSection'
import IntroSection from '@/components/section/HomePage/IntroSection'
import ProjectSection from '@/components/section/HomePage/ProjectSection'
import QuizSection from '@/components/section/HomePage/QuizSection'
import Comparision from '@/components/section/HomePage/Comparision'
import ServiceSection from '@/components/section/HomePage/ServiceSection'
import HowwestaySection from '@/components/section/HomePage/HowwestaySection'
import TrustSection from '@/components/section/HomePage/TrustSection'
import Confusion from '@/components/shared/Confusion'
import { businessCtaData } from '@/data/about'
import React from 'react'
import WhatwedoSection from '@/components/section/HomePage/WhatwedoSection'
import ProblemwesolveSection from '@/components/section/HomePage/ProblemwesolveSection'
import HowwedecideScetion from '@/components/section/HomePage/HowwedecideScetion'
import FAQsection from '@/components/section/HomePage/FAQsection'

export default function HomePage() {
  return (
    <>
        <main className='page'>
            <HeroSection/>
            <IntroSection/>
            <TrustSection/>
            <ProblemwesolveSection/>
            <HowwedecideScetion/>
            <ServiceSection/>
            {/* <HowwestaySection/> */}
            {/* <WhatwedoSection/> */}
            {/* <QuizSection/> */}
            {/* <ProjectSection/> */}
            {/* <Comparision/> */}

            <FAQsection/>
            <Confusion confusionData={businessCtaData}/>
        </main>
    </>
  )
}
