import HeroSection from '@/components/section/aboutus/HeroSection'
import WhatwenotSection from '@/components/section/aboutus/WhatwenotSection'
import ConfusionSection from '@/components/section/aboutus/ConfusionSection'
import React from 'react'

export default function AboutusPage() {
  return (
    <div className='page flex flex-col gap-12 sm:gap-16'>
        <HeroSection/>
        <WhatwenotSection/>
        <ConfusionSection/>
    </div>
  )
}
