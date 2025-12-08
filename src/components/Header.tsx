
import React, { useState } from 'react';
import { Navigation } from './Navigation';


  

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navigationItems = [
    { id: 'Home', label: 'Home', href: '/' },
    { id: 'Volunteer', label: 'Become A Volunteer', href: '/volunteer' },
    { id: 'Vendor', label: 'Become A Vendor', href: '/vendor' }
  ];
  return (
    <header className="w-full max-md:max-w-full flex flex-col  items-center justify-center fixed top-0 z-50">
      <div className="bg-white flex w-full border-gray-200 border-solid border-2 max-w-[1440px] items-stretch gap-5 overflow-hidden flex-wrap justify-between px-[66px] rounded-xl max-md:max-w-full max-md:px-5">
        <div className="flex items-center text-2xl text-black font-semibold whitespace-nowrap text-center leading-[101px]">
          <h1 className="self-stretch my-auto">
            Hallway
          </h1>
        </div>
        
        <div className="flex flex-col items-stretch mt-2 max-md:max-w-full">
          <div className="z-10 flex flex-col items-center text-[10px] text-[#FBFBFB] font-medium tracking-[-0.5px] leading-none ml-[57px] max-md:ml-2.5">
            <div className="bg-[rgba(96,64,7,1)] flex flex-col items-center justify-center px-2 py-[3px]">
              <span className="text-[#FBFBFB]">
                COMING SOON
              </span>
            </div>
            <img
              src="/images/arrow-indicator.png"
              alt="Arrow indicator"
              className="aspect-[1.8] object-contain w-[9px]"
            />
          </div>
          
          <div className="flex items-center gap-[40px_56px] max-md:max-w-full">
            <nav className="self-stretch flex gap-2.5 text-sm text-[#576974] font-normal whitespace-nowrap leading-none my-auto p-2" aria-label="Breadcrumb navigation">
              <a href="/about" className="text-[#576974] hover:text-[rgba(96,64,7,1)] transition-colors">
                About
              </a>
              <span className="text-[#576974]" aria-hidden="true">
                /
              </span>
              <a href="/contact" className="text-[#576974] hover:text-[rgba(96,64,7,1)] transition-colors">
                Contact
              </a>
              <span className="text-[#576974]" aria-hidden="true">
                /
              </span>
              <a href="/account" className="text-[#576974] hover:text-[rgba(96,64,7,1)] transition-colors">
                Account
              </a>
            </nav>
            
            <div className="self-stretch flex items-center gap-6 my-auto">
              <button 
                className="aspect-[1] w-6 self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                <img
                  src="/images/icon-search.png"
                  alt=""
                  className="aspect-[1] object-contain w-6"
                />
              </button>
              <button 
                className="aspect-[1] w-6 self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
                aria-label="Notifications"
              >
                <img
                  src="/images/icon-notifications.png"
                  alt=""
                  className="aspect-[1] object-contain w-6 fill-[#28353D]"
                />
              </button>
              <button 
                className="aspect-[1] w-6 self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
                aria-label="User menu"
              >
                <img
                  src="/images/icon-user.png"
                  alt=""
                  className="aspect-[1] object-contain w-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
    
  );
};
