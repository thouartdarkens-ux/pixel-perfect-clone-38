import React from 'react';
import HeroSection from './HeroSection';
import CompanyInfo from './CompanyInfo';
import NavigationLinks from './NavigationLinks';
import SocialMedia from './SocialMedia';
import { CopyrightFooter } from './CopyrightFooter';

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <HeroSection />
      
      <main className="w-full max-w-[1117px] mt-10 sm:mt-[63px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
          <div className="lg:col-span-1">
            <CompanyInfo />
          </div>
          <div className="lg:col-span-1">
            <NavigationLinks />
          </div>
          <div className="lg:col-span-1">
            <SocialMedia />
          </div>
        </div>
      </main>
      
      <CopyrightFooter />
    </div>
  );
};

export default Footer;
