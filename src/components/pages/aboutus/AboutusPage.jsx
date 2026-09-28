import HeroSection from '@/components/section/aboutus/HeroSection'
import Howwegot from '@/components/section/aboutus/Howwegot'
import WhatweSection from '@/components/section/aboutus/WhatweSection'
import WhatwenotSection from '@/components/section/aboutus/WhatwenotSection'
import ConfusionSection from '@/components/section/aboutus/ConfusionSection'
import React from 'react'

export default function AboutusPage() {
  return (
    <div className='page flex flex-col gap-12 sm:gap-16'>
        <HeroSection/>
        <WhatweSection/>
        <Howwegot/>
        <WhatwenotSection/>
        <ConfusionSection/>
    </div>
  )
}

