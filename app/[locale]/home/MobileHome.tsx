import React from 'react'
import MobileApps from '@/components/[locale]/mobile/home/MobileApps'
import UXSolutions from '@/components/[locale]/mobile/home/UXSolutions'
import FeaturedProjects from '@/components/[locale]/mobile/home/FeaturedProjects'
import Plans from '@/components/[locale]/mobile/home/Plans'
function MobileHome() {
  return (
    <>
    <UXSolutions/>
    <FeaturedProjects/>
    <MobileApps/>
    <Plans/>
    
    </>
  )
}

export default MobileHome