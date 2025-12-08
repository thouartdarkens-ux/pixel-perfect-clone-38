import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ 
  onClick, 
  children, 
  className = "" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-[51px] justify-center items-center gap-1 cursor-pointer bg-[#604007] p-4 rounded-lg max-sm:w-full max-sm:h-12 max-sm:px-4 max-sm:py-3.5 hover:bg-[#4a3206] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#604007] focus:ring-offset-2 ${className}`}
      type="button"
      aria-label="Contact Support"
    >
      <span className="text-white text-base font-medium tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px]">
        {children}
      </span>
    </button>
  );
};
