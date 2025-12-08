import React from 'react';
import { Featureboard } from './Featureboard';

const features = [
  {
    iconSrc: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/bcd36d65822fb1edab1aa4a81685405d5a72d498?placeholderIfAbsent=true",
    title: "Optimize payments",
    alt: "Payment optimization icon"
  },
  {
    iconSrc: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f1d796b62ef334bb31cd1e470271667b11144757?placeholderIfAbsent=true",
    title: "Grow your revenue",
    alt: "Revenue growth icon"
  },
  {
    iconSrc: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/551bdfe53de4d3e2ca57ac302bb5098007a19eea?placeholderIfAbsent=true",
    title: "Shop on the go",
    alt: "Mobile shopping icon"
  },
  {
    iconSrc: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/edf6dc71753b3a6d122aeb460f1ac8a8b34b8446?placeholderIfAbsent=true",
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
