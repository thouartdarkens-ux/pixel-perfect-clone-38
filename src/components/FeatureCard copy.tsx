import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconAlt = "Feature icon"
}) => {
  return (
    <article className="min-h-[273px] w-full bg-slate-50 pt-12 pb-[3px] px-12 rounded-3xl max-md:max-w-full max-md:px-5">
      <div className="w-full">
        <img
          src={icon}
          className="aspect-[1] object-contain w-7"
          alt={iconAlt}
        />
        <div className="w-full mt-3.5">
          <h3 className="text-slate-950 text-xl font-medium leading-[1.4] tracking-[-0.6px]">
            {title}
          </h3>
          <p className="text-slate-500 text-base font-normal leading-6 tracking-[-0.48px] mt-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
