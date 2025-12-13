import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-stretch">
      <p className="text-[rgba(148,154,169,1)] text-base sm:text-lg font-normal leading-relaxed sm:leading-[27px] tracking-[-0.36px] text-center md:text-left">
        Hallway has a passion for empowering students. We provide a
        student-first marketplace that makes it simple to buy, sell, and
        support projects — all in one place.
      </p>
      
      <div className="mt-6 space-y-2 text-[rgba(148,154,169,1)] text-sm sm:text-base text-center md:text-left">
        <p>
          <span className="font-medium text-foreground">Email:</span>{" "}
          <a href="mailto:services@hallway.africa" className="hover:text-primary transition-colors">
            services@hallway.africa
          </a>
        </p>
        <p>
          <span className="font-medium text-foreground">Phone:</span>{" "}
          <a href="tel:+233200496234" className="hover:text-primary transition-colors">
            +233 20 049 6234
          </a>
        </p>
        <p>
          <span className="font-medium text-foreground">Office (HQ):</span>{" "}
          Greater Accra, Ghana
        </p>
      </div>
      
      <div className="flex items-center justify-center md:justify-start gap-2 text-2xl sm:text-[32px] text-black font-semibold whitespace-nowrap mt-4">
        <img src="/images/hallway-logo.png" alt="Hallway logo" className="w-8 h-8" />
        <div>Hallway</div>
      </div>
    </div>
  );
};

export default CompanyInfo;