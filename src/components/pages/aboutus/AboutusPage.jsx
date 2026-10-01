import HeroSection from '@/components/section/aboutus/HeroSection'
import Howwegot from '@/components/section/aboutus/Howwegot'
import WhatwenotSection from '@/components/section/aboutus/WhatwenotSection'
import HowWeStayInvolved from '@/components/section/aboutus/HowWeStayInvolved'
import ConfusionSection from '@/components/section/aboutus/ConfusionSection'
import React from 'react'

export default function AboutusPage() {
  return (
    <div className='page flex flex-col gap-12 sm:gap-16'>
        <HeroSection/>
        <WhatwenotSection/>
        <Howwegot/>
        <WhatwenotSection/>
        <HowWeStayInvolved/>
        <ConfusionSection/>
    </div>
  )
}
