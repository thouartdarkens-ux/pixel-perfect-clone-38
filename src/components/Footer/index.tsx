import React from 'react';
import HeroSection from './HeroSection';
import CompanyInfo from './CompanyInfo';
import NavigationLinks from './NavigationLinks';
import SocialMedia from './SocialMedia';
import Copyright from './Copyright';

const Footer: React.FC = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      
      <section className="w-[1117px] max-w-full mt-[63px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <CompanyInfo />
          <div className="w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <NavigationLinks />
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Copyright />
    </main>
  );
};

export default Footer;
