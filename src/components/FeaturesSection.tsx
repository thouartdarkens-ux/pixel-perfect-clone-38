import React from 'react';
import { FeatureCard } from './FeatureCard';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[909px] w-full mt-[23px] max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f92dfcb0d5c6469e9ca61f5ee1f6292beee1c4df?placeholderIfAbsent=true"
        alt=""
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="flex flex-col relative min-h-[909px] w-full items-stretch justify-center px-20 py-[97px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/4333683353e205a29446a1f92e5ac6a029c4533c?placeholderIfAbsent=true"
          alt=""
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex flex-col items-center max-md:max-w-full">
          <header className="text-center">
            <h2 className="text-[rgba(29,29,29,1)] text-6xl font-semibold leading-[72px] tracking-[-2.4px] text-center max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
              Designed To Help Students{" "}
              <span style={{fontFamily: 'Beauty Swing Personal Use Only, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400, fontSize: '64px', color: 'rgba(96,64,7,1)'}}>
                Thrive
              </span>
            </h2>
          </header>
          
          <nav className="bg-[rgba(249,249,250,1)] border flex w-[502px] max-w-full items-stretch gap-2 text-sm text-[rgba(29,29,29,1)] font-normal whitespace-nowrap tracking-[-0.36px] leading-loose flex-wrap mt-[63px] p-[9px] rounded-3xl border-[rgba(224,231,245,1)] border-solid max-md:mt-10">
            <div className="bg-white border flex items-stretch gap-4 flex-1 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
              <img
                src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/ca264922e2af6cb7c9e5a6aafaf64997d52bddb9?placeholderIfAbsent=true"
                alt=""
                className="aspect-[1] object-contain w-9 shrink-0 rounded-lg"
              />
              <div className="my-auto">Students</div>
            </div>
            <div className="bg-white border flex items-stretch gap-4 flex-1 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
              <img
                src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/beb730a3646ffc640b1209603e14bd6184849779?placeholderIfAbsent=true"
                alt=""
                className="aspect-[1] object-contain w-9 shrink-0 rounded-lg"
              />
              <div className="my-auto">Marketplace</div>
            </div>
            <div className="bg-white border flex items-stretch gap-4 flex-1 p-[9px] rounded-2xl border-[rgba(224,231,245,1)] border-solid">
              <img
                src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/93248c3aa0b844fb2ac9bf5f9082676825c4abde?placeholderIfAbsent=true"
                alt=""
                className="aspect-[1] object-contain w-9 shrink-0 rounded-lg"
              />
              <div className="my-auto">Opportunities</div>
            </div>
          </nav>

          <div className="self-stretch w-full mt-[30px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[67%] max-md:w-full max-md:ml-0">
                <div className="grow max-md:max-w-full max-md:mt-3">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-6/12 max-md:w-full max-md:ml-0">
                      <FeatureCard
                        icon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/2e452d8f71f75a0de8bc46c8caf1e4c831e70a3b?placeholderIfAbsent=true"
                        title="Empower Student Projects"
                        description="Turn ideas into reality with support from your peers and community."
                        statNumber="10k+"
                        statLabel="Projects On Board"
                        statIcon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f04712b1db03043fe903d0b514d0f4b4f35a10a9?placeholderIfAbsent=true"
                      />
                    </div>
                    <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <FeatureCard
                        icon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/b2befdf6eeffff01f53c11644088426defac440e?placeholderIfAbsent=true"
                        title="Build a Student-First Marketplace"
                        description="Safe, affordable, and made for the campus ecosystem."
                        statNumber="24K+"
                        statLabel="User Around The World"
                        statIcon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/e7772a6ea55159fa22d5668322b7e8f0b15b0d5c?placeholderIfAbsent=true"
                        variant="highlighted"
                        className="max-md:mt-[5px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <FeatureCard
                  icon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/7db58ba439145eec9fddd710174b089451e04146?placeholderIfAbsent=true"
                  title="Create Opportunities to Earn"
                  description="Give students an easy way to sell, showcase, and grow their ventures."
                  statNumber="24K+"
                  statLabel="Opportunities created"
                  statIcon="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f04712b1db03043fe903d0b514d0f4b4f35a10a9?placeholderIfAbsent=true"
                  className="max-md:mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
