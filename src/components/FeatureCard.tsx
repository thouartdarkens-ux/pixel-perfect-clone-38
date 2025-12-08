import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
  statNumber?: string;
  statLabel?: string;
  statIcon?: string;
  variant?: 'default' | 'highlighted' | 'simple';
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconAlt = "Feature icon",
  statNumber,
  statLabel,
  statIcon,
  variant = 'default',
  className = ""
}) => {
  const isHighlighted = variant === 'highlighted';
  const isSimple = variant === 'simple' || (!statNumber && !statIcon);
  const shadowClass = isHighlighted ? 'shadow-[0px_34px_34px_rgba(10,67,128,0.15)]' : '';

  if (isSimple) {
    return (
      <article className={`min-h-[273px] w-full bg-slate-50 pt-8 pb-6 px-6 rounded-3xl sm:pt-12 sm:px-12 ${className}`}>
        <div className="w-full">
          <img
            src={icon}
            className="aspect-[1] object-contain w-7"
            alt={iconAlt}
          />
          <div className="w-full mt-3.5">
            <h3 className="text-slate-950 text-lg sm:text-xl font-medium leading-[1.4] tracking-[-0.6px]">
              {title}
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-normal leading-6 tracking-[-0.48px] mt-2">
              {description}
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className={`bg-[rgba(249,249,250,1)] ${shadowClass} border flex w-full flex-col items-stretch mx-auto pt-[9px] pb-12 sm:pb-[75px] px-[9px] rounded-3xl border-[rgba(224,231,245,1)] border-solid ${className}`}>
      <div className="border flex flex-col pl-4 sm:pl-[25px] pr-4 sm:pr-20 py-5 sm:py-[27px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
        <img
          src={icon}
          alt={iconAlt}
          className="aspect-[1] object-contain w-14 sm:w-[76px] rounded-[100px]"
        />
        <h3 className="text-[rgba(29,29,29,1)] text-2xl sm:text-4xl font-semibold leading-tight sm:leading-[48px] tracking-[-1.6px] mt-4 sm:mt-[21px]">
          {title}
        </h3>
        <p className="text-[rgba(148,154,169,1)] text-sm sm:text-base font-normal leading-relaxed sm:leading-[27px] tracking-[-0.36px] mt-1.5">
          {description}
        </p>
      </div>
      {statIcon && statNumber && (
        <div className="bg-white border flex items-center gap-3 mt-3 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
          <img
            src={statIcon}
            alt=""
            className="aspect-[1] object-contain w-9 self-stretch shrink-0 rounded-lg"
          />
          <div className="text-[rgba(29,29,29,1)] text-sm sm:text-base font-semibold leading-[1.4] tracking-[-0.64px] self-stretch my-auto">
            {statNumber}
          </div>
          <div className="text-[rgba(148,154,169,1)] text-xs font-normal leading-loose tracking-[-0.36px] self-stretch basis-auto my-auto">
            {statLabel}
          </div>
        </div>
      )}
    </div>
  );
};
