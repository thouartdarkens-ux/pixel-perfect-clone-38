import React from 'react';

const NavigationLinks: React.FC = () => {
  const handleNavClick = (section: string) => {
    console.log(`Navigate to: ${section}`);
  };

  return (
    <nav className="flex flex-col items-center sm:items-start text-base text-[rgba(148,154,169,1)] font-normal tracking-[-0.36px] leading-loose">
      <button 
        onClick={() => handleNavClick('home')}
        className="text-[rgba(29,29,29,1)] text-center sm:text-left hover:text-[rgba(96,64,7,1)] transition-colors"
      >
        Home
      </button>
      <button 
        onClick={() => handleNavClick('support')}
        className="mt-3 sm:mt-[39px] text-center sm:text-left hover:text-[rgba(96,64,7,1)] transition-colors"
      >
        Support The Project
      </button>
      <button 
        onClick={() => handleNavClick('vendor')}
        className="mt-3 sm:mt-[35px] text-center sm:text-left hover:text-[rgba(96,64,7,1)] transition-colors"
      >
        Become A Vendor
      </button>
      <button 
        onClick={() => handleNavClick('waitlist')}
        className="mt-3 sm:mt-[39px] text-center sm:text-left hover:text-[rgba(96,64,7,1)] transition-colors"
      >
        Join The Waitlist
      </button>
    </nav>
  );
};

export default NavigationLinks;
