import React from 'react'
import { FullPicture } from './fullpic'
import { FeatureGrid } from './FeatureGrid'

function ivanpi() {
  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-7xl mx-auto">
        <FullPicture
          badgeIcon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/fdab1daaa2ba0303a60431cfff13ca3f5f446441?placeholderIfAbsent=true"
          badgeText="Why Hallway"
          title="Your Marketplace, Built for Students Who Want More Than Just "
          highlightedWord="Shopping"
        />
        
        <FeatureGrid
          leftImage="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/3b1ae55277cdd7b5ec7f926830c3ab8bcd46663d?placeholderIfAbsent=true"
          centerImage="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/7fa8b1355bf2e2e269580fb3d8dbcc5b78f9c1f8?placeholderIfAbsent=true"
          rightImage="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/0bff4d27fa5ca97fa17a4603d6bc02f36dd3f360?placeholderIfAbsent=true"
          description="Discover a platform where students buy, sell, and support each other. Hallway makes commerce simple, safe, and tailored to your campus life."
        />
      </div>
  )
}

export default ivanpi