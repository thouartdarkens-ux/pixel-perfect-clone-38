import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navigationItems = [
    { id: 'Home', label: 'Home', href: '/' },
    { id: 'Volunteer', label: 'Become A Volunteer', href: '/volunteer' },
    { id: 'Vendor', label: 'Become A Vendor', href: '/vendor' }
  ];

  return (
    <nav className="bg-white flex w-full border-gray-200 border-solid border-2 max-w-[1440px] flex-col overflow-hidden items-center text-base text-[#576974] font-medium leading-none justify-center px-[70px] py-[5px] rounded-xl max-md:max-w-full max-md:px-5">
      <div className="flex items-center gap-10 max-md:max-w-full">
        <div className="self-stretch flex min-w-60 items-center gap-[40px_48px] my-auto max-md:max-w-full">
          {navigationItems.map((item) => (
            <div key={item.id} className="self-stretch flex min-h-[38px] flex-col items-center justify-between my-auto pt-2">
              <a
                href={item.href}
                className={`transition-colors hover:text-[rgba(96,64,7,1)] ${
                  activeTab === item.id ? 'text-[rgba(96,64,7,1)]' : 'text-[#576974]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
              >
                {item.label}
              </a>
              <div 
                className={`min-h-px w-[70px] mt-${item.id === 'Home' ? '[13px]' : '3.5'} ${
                  activeTab === item.id ? 'border border-[rgba(96,64,7,1)] border-solid' : 'min-h-0'
                }`} 
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
