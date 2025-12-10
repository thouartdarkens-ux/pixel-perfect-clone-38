import React from 'react';
import { CreditCard, TrendingUp, Smartphone, Shield, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
}

export const Featureboard: React.FC<FeatureCardProps> = ({ icon: Icon, title }) => {
  return (
    <article className="bg-white border flex items-stretch gap-3 flex-1 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
      <div className="flex items-center justify-center w-[34px] h-[34px] bg-primary/10 rounded-lg shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="basis-auto my-auto text-sm font-medium">
        {title}
      </h3>
    </article>
  );
};
