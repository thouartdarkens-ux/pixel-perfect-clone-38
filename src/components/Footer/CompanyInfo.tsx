import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-stretch">
      <p className="text-[rgba(148,154,169,1)] text-base sm:text-lg font-normal leading-relaxed sm:leading-[27px] tracking-[-0.36px]">
        Hallway has a passion for empowering students. We provide a
        student-first marketplace that makes it simple to buy, sell, and
        support projects — all in one place.
      </p>
      <div className="flex items-center gap-2 text-2xl sm:text-[32px] text-black font-semibold whitespace-nowrap mt-4">
        <img src="/images/hallway-logo.png" alt="Hallway logo" className="w-8 h-8" />
        <div>Hallway</div>
      </div>
    </div>
  );
};

export default CompanyInfo;
