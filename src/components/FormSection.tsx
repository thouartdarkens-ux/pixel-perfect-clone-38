import React from 'react';

interface FormSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({ children, className = "" }) => {
  return (
    <section 
      className={`bg-[rgba(255,255,255,0.25)] border flex grow flex-col text-sm text-[rgba(2,8,23,1)] font-medium leading-none px-[25px] py-20 rounded-lg border-[rgba(255,255,255,0.28)] border-solid max-md:max-w-full max-md:px-5 ${className}`}
      role="region"
    >
      {children}
    </section>
  );
};
