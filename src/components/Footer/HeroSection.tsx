import React from 'react';
import CountdownTimer from './CountdownTimer';
import EmailSignup from './EmailSignup';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[rgba(96,64,7,1)] self-stretch w-full overflow-hidden rounded-2xl sm:rounded-[44px] border-white border-solid border-4 sm:border-[24px]">
      <div className="flex flex-col relative min-h-[400px] sm:min-h-[532px] w-full items-stretch justify-center p-4 sm:p-6 rounded-2xl sm:rounded-[44px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/791b20b4f1ee4bb593d907a4e93af723521a8439?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background texture"
        />
        <div className="flex flex-col relative min-h-[350px] sm:min-h-[484px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/c7ecad2b58c37f037e4c5cafdced38c4b8ed7664?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt="Background pattern"
          />
          <div className="flex flex-col relative min-h-[350px] sm:min-h-[484px] w-full items-center justify-center px-4 sm:px-20 py-8 sm:py-[62px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/cccb583853e9f62b0d478fafb81606dc1ad1f435?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Hero background"
            />
            <div className="relative flex w-full max-w-[949px] flex-col items-center text-center">
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.2] tracking-[-1.2px] sm:tracking-[-2.4px]">
                Don't miss launch day.
              </h1>
              <p className="text-white text-base sm:text-xl lg:text-2xl font-normal leading-relaxed tracking-[-0.36px] sm:tracking-[-0.72px] mt-4 sm:mt-7 px-2">
                Join the waitlist today and get early access, exclusive
                updates, and first dibs on student projects.
              </p>
              <CountdownTimer />
              <EmailSignup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
