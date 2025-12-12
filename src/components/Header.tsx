import React from 'react';

export const Header: React.FC = () => {
  const navigationItems = [
    { id: 'Home', label: 'Home', href: 'https://demo.hallway.africa' },
    { id: 'Volunteer', label: 'Become A Volunteer', href: 'https://demo.hallway.africa/volunteer' },
    { id: 'Vendor', label: 'Become A Vendor', href: 'https://demo.hallway.africa/vendor' }
  ];

  return (
    <header className="w-full max-md:max-w-full flex flex-col items-center justify-center fixed top-0 z-50">
      <div className="bg-white flex w-full border-gray-200 border-solid border-2 max-w-[1440px] items-center gap-5 overflow-hidden flex-wrap justify-between px-[66px] py-4 rounded-xl max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-2 text-2xl text-black font-semibold whitespace-nowrap">
          <img src="/images/hallway-logo.png" alt="Hallway logo" className="w-8 h-8" />
          <h1 className="my-auto">Hallway</h1>
        </div>
        
        <nav className="flex items-center gap-8 text-base text-[#576974] font-medium">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[rgba(96,64,7,1)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-end">
          <div className="bg-[rgba(96,64,7,1)] flex items-center justify-center px-2 py-[3px] text-[10px] text-[#FBFBFB] font-medium tracking-[-0.5px]">
            <span>COMING SOON</span>
          </div>
          <nav className="flex gap-2.5 text-sm text-[#576974] font-normal p-2" aria-label="Breadcrumb navigation">
            <a href="/about" className="hover:text-[rgba(96,64,7,1)] transition-colors">About</a>
            <span aria-hidden="true">/</span>
            <a href="/contact" className="hover:text-[rgba(96,64,7,1)] transition-colors">Contact</a>
            <span aria-hidden="true">/</span>
            <a href="/account" className="hover:text-[rgba(96,64,7,1)] transition-colors">Account</a>
          </nav>
        </div>
      </div>
    </header>
  );
};