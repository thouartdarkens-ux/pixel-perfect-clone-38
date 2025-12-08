import React from 'react';
import { StudentBadge } from './StudentBadge';
import { FeatureGrid } from './Grid';

export const Herotroy: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[892px] items-center pt-[130px] px-20 max-md:pt-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/77ee0da443e00233a1aeee0b8182f4c70a099ad3?placeholderIfAbsent=true"
        alt="Background pattern"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[1276px] max-w-full flex-col items-stretch">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[70%] max-md:w-full max-md:ml-0">
              <header className="flex w-full flex-col items-stretch text-sm text-[rgba(29,29,29,1)] font-semibold tracking-[-0.36px] max-md:max-w-full max-md:mt-10">
                <StudentBadge
                  text="Student savings"
                  iconSrc="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/9a62e537127c01253b4ff5550a31ec2a1d252f2d?placeholderIfAbsent=true"
                />
                <h1 className="text-6xl leading-[72px] tracking-[-2.4px] mr-[70px] mt-[51px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px] max-md:mr-2.5 max-md:mt-10">
                  Save More on Every{" "}
                  <span style={{color: "rgba(96,64,7,1)"}}>Purchase</span> You Make
                  with Hallway
                </h1>
                <p className="text-[rgba(148,154,169,1)] text-lg font-normal leading-[27px] mt-[9px] max-md:max-w-full">
                  Hallway is designed to keep student budgets in mind. From
                  exclusive discounts to cashback rewards, we help you stretch
                  your money further while supporting vendors you trust.
                </p>
                <FeatureGrid />
              </header>
            </div>
            <div className="w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/4d9e7b3d951f2798317f23ec42e459b8f0aea053?placeholderIfAbsent=true"
                alt="Hallway mobile app interface showing student savings features"
                className="aspect-[0.69] object-contain w-full shadow-[0px_34px_34px_rgba(10,67,128,0.1)] rounded-3xl max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <h2 className="text-[rgba(29,29,29,1)] text-6xl font-semibold leading-[1.2] tracking-[-2.4px] text-center self-center mt-[172px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          What <span style={{color: "rgba(96,64,7,1)"}}>Students</span> Are Saying
        </h2>
      </div>
    </section>
  );
};
