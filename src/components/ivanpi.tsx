import React from 'react'
import { FullPicture } from './fullpic'
import { FeatureGrid } from './FeatureGrid'

function ivanpi() {
  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-7xl mx-auto">
        <FullPicture
          badgeIcon="/images/why-hallway-icon.png"
          badgeText="Why Hallway"
          title="Your Marketplace, Built for Students Who Want More Than Just "
          highlightedWord="Shopping"
        />
        
        <FeatureGrid
          leftImage="/images/feature-left.png"
          centerImage="/images/feature-center.png"
          rightImage="/images/feature-right.png"
          description="Discover a platform where students buy, sell, and support each other. Hallway makes commerce simple, safe, and tailored to your campus life."
        />
      </div>
  )
}

export default ivanpi
