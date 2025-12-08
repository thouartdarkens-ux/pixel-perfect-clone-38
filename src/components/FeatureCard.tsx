import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  statNumber: string;
  statLabel: string;
  statIcon: string;
  variant?: 'default' | 'highlighted';
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  statNumber,
  statLabel,
  statIcon,
  variant = 'default',
  className = ""
}) => {
  const isHighlighted = variant === 'highlighted';
  const shadowClass = isHighlighted ? 'shadow-[0px_34px_34px_rgba(10,67,128,0.15)]' : '';

  return (
    <div className={`bg-[rgba(249,249,250,1)] ${shadowClass} border flex w-full flex-col items-stretch mx-auto pt-[9px] pb-[75px] px-[9px] rounded-3xl border-[rgba(224,231,245,1)] border-solid max-md:max-w-full ${className}`}>
      <div className="border flex flex-col pl-[25px] pr-20 py-[27px] rounded-2xl border-[rgba(224,231,245,1)] border-solid max-md:max-w-full max-md:px-5">
        <img
          src={icon}
          alt=""
          className="aspect-[1] object-contain w-[76px] rounded-[100px]"
        />
        <h3 className="text-[rgba(29,29,29,1)] text-4xl font-semibold leading-[48px] tracking-[-1.6px] mt-[21px]">
          {title}
        </h3>
        <p className="text-[rgba(148,154,169,1)] text-base font-normal leading-[27px] tracking-[-0.36px] mt-1.5">
          {description}
        </p>
      </div>
      <div className="bg-white border flex items-center gap-3 mt-3 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
        <img
          src={statIcon}
          alt=""
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 rounded-lg"
        />
        <div className="text-[rgba(29,29,29,1)] text-base font-semibold leading-[1.4] tracking-[-0.64px] self-stretch my-auto">
          {statNumber}
        </div>
        <div className="text-[rgba(148,154,169,1)] text-xs font-normal leading-loose tracking-[-0.36px] self-stretch basis-auto my-auto">
          {statLabel}
        </div>
      </div>
    </div>
  );
};
