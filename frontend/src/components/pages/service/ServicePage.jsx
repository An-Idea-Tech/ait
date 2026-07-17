import HeroSection from '@/components/section/servicePage/HeroSection'
import ServiceSection from '@/components/section/servicePage/ServiceSection'
import React from 'react'


export default function ServicePage() {
  return (
    <>
    <div className="page flex flex-col gap-12 sm:gap-16">
       <HeroSection/>
       <ServiceSection/>
    </div>
    </>
  )
}
