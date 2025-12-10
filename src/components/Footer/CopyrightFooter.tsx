import React from 'react';

export const CopyrightFooter: React.FC = () => {
  return (
    <footer className="bg-[rgba(249,249,250,1)] border w-full max-w-[1296px] text-sm sm:text-base text-[rgba(148,154,169,1)] font-normal tracking-[-0.36px] leading-loose mt-6 sm:mt-[27px] p-2 sm:p-[9px] rounded-2xl sm:rounded-3xl border-[rgba(224,231,245,1)] border-solid">
      <div className="bg-white border flex items-center gap-4 flex-col sm:flex-row justify-between px-4 sm:px-[17px] py-4 sm:py-[23px] rounded-xl sm:rounded-2xl border-[rgba(224,231,245,1)] border-solid text-center sm:text-left">
        <div className="flex items-center gap-2">
          <img src="/images/hallway-logo.png" alt="Hallway logo" className="w-6 h-6" />
          <span>Hallway</span>
        </div>
        <div className="sm:text-right">© 2025 Hallway Technologies Ltd. All Rights Reserved.</div>
      </div>
    </footer>
  );
};
