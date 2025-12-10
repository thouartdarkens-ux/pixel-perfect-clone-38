import React from 'react';
import { Featureboard } from './Featureboard';
import { CreditCard, TrendingUp, Smartphone, Shield } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: "Optimize payments"
  },
  {
    icon: TrendingUp,
    title: "Grow your revenue"
  },
  {
    icon: Smartphone,
    title: "Shop on the go"
  },
  {
    icon: Shield,
    title: "Put security first"
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
          icon={feature.icon}
          title={feature.title}
        />
      ))}
    </section>
  );
};
