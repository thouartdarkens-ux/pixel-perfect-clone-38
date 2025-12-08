import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <div className="w-[42%] max-md:w-full max-md:ml-0">
      <div className="flex w-full flex-col items-stretch max-md:mt-10">
        <p className="text-[rgba(148,154,169,1)] text-lg font-normal leading-[27px] tracking-[-0.36px]">
          Hallway has a passion for empowering students. We provide a
          student-first marketplace that makes it simple to buy, sell, and
          support projects — all in one place.
        </p>
        <div className="flex items-center gap-1.5 text-[32px] text-black font-semibold whitespace-nowrap text-center leading-[101px]">
          <div className="self-stretch w-[133px] my-auto">
            Hallway
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
