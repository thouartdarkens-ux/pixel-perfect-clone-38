import React from 'react';

const Copyright: React.FC = () => {
  return (
    <footer className="bg-[rgba(249,249,250,1)] border flex w-[1296px] max-w-full flex-col items-stretch text-base text-[rgba(148,154,169,1)] font-normal tracking-[-0.36px] leading-loose justify-center mt-[27px] p-[9px] rounded-3xl border-[rgba(224,231,245,1)] border-solid">
      <div className="bg-white border flex items-stretch gap-5 flex-wrap justify-between px-[17px] py-[23px] rounded-2xl border-[rgba(224,231,245,1)] border-solid max-md:max-w-full">
        <div>Hallway</div>
        <div className="text-right">© Grant Reese Arthur HW2025</div>
      </div>
    </footer>
  );
};

export default Copyright;
