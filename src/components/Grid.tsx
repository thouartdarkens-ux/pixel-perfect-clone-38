import React from 'react';
import { Featureboard } from './Featureboard';

const features = [
  {
    iconSrc: "/images/icon-payments.png",
    title: "Optimize payments",
    alt: "Payment optimization icon"
  },
  {
    iconSrc: "/images/icon-revenue.png",
    title: "Grow your revenue",
    alt: "Revenue growth icon"
  },
  {
    iconSrc: "/images/icon-mobile.png",
    title: "Shop on the go",
    alt: "Mobile shopping icon"
  },
  {
    iconSrc: "/images/icon-security.png",
    title: "Put security first",
    alt: "Security icon"
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <section 
      className="bg-[rgba(249,249,250,1)] border flex items-stretch gap-2 font-normal leading-none flex-wrap mt-[153px] p-[9px] rounded-3xl border-[rgba(224,231,245,1)] border-solid max-md:mt-10"
      aria-label="Platform features"
    >
      {features.map((feature, index) => (
        <Featureboard
          key={index}
          iconSrc={feature.iconSrc}
          title={feature.title}
          alt={feature.alt}
        />
      ))}
    </section>
  );
};
