import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  alt?: string;
}

export const Featureboard: React.FC<FeatureCardProps> = ({ iconSrc, title, alt }) => {
  return (
    <article className="bg-white border flex items-stretch gap-3 flex-1 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
      <img
        src={iconSrc}
        alt={alt || title}
        className="aspect-[1] object-contain w-[34px] shrink-0 rounded-lg"
      />
      <h3 className="basis-auto my-auto">
        {title}
      </h3>
    </article>
  );
};
