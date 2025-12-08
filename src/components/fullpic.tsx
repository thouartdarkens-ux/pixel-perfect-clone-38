import React from 'react';
import { HeroBadge } from './HeroBadge';

interface HeroSectionProps {
  badgeIcon: string;
  badgeText: string;
  title: string;
  highlightedWord: string;
}

export const FullPicture: React.FC<HeroSectionProps> = ({
  badgeIcon,
  badgeText,
  title,
  highlightedWord
}) => {
  const titleParts = title.split(highlightedWord);
  
  return (
    <header className="flex flex-col items-center">
      <HeroBadge icon={badgeIcon} text={badgeText} />
      <h1 className="text-[rgba(29,29,29,1)] text-6xl font-semibold leading-[72px] tracking-[-2.4px] text-center mt-11 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px] max-md:mt-10">
        {titleParts[0]}
        <span 
          style={{
            fontFamily: 'Beauty Swing Personal Use Only, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 400,
            color: 'rgba(96,64,7,1)'
          }}
        >
          {highlightedWord}
        </span>
        {titleParts[1]}
      </h1>
    </header>
  );
};
