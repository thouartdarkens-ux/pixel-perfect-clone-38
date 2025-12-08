import React from 'react';

interface HeroBadgeProps {
  icon: string;
  text: string;
  className?: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({ icon, text, className = "" }) => {
  return (
    <div
      className={`flex w-[137px] max-w-full items-stretch gap-2 text-sm text-[rgba(96,64,7,1)] font-semibold tracking-[-0.36px] leading-loose px-2 py-[9px] rounded-[100px] ${className}`}
      role="banner"
      aria-label={text}
    >
      <img
        src={icon}
        alt=""
        className="aspect-[1] object-contain w-7 shrink-0 rounded-[100px]"
        role="presentation"
      />
      <span className="mt-[11px]">
        {text}
      </span>
    </div>
  );
};
