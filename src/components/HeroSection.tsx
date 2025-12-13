import * as React from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./Footer/CountdownTimer";
import EmailSignup from "./Footer/EmailSignup";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;

}

export function HeroSection({ }: HeroSectionProps) {
  return (
    <section className="flex flex-col relative min-h-[1104px] w-full overflow-hidden rounded-[44px] max-md:max-w-full mt-16 max-md:mt-20">
      <img
        src="/images/main-hero-bg.png"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <img
        src="/images/main-hero-content.png"
        alt="Hero content"
        className="aspect-[1.74] object-contain w-full rounded-[44px] max-md:max-w-full"
      />
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center mt-[150px] max-md:mt-[280px]">
      <div className="text-center text-white z-10 px-6 max-w-4xl">
      <h1 className="text-7xl font-semibold leading-[101px] tracking-[-2.88px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px]">
          Your Campus{" "}
          <span style={{
            fontFamily: 'Beauty Swing Personal Use Only, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 400,
            color: 'rgba(96,64,7,1)'
          }}>
            Marketplace
          </span>
          , <br />
          in Your Pocket.
        </h1>
        <p className="text-2xl">Launching on January 14 2028...</p>
        
      <div className="flex flex-col gap-1 justify-center items-center">
      <CountdownTimer/>
      <EmailSignup/>
          </div>
        </div>
      </div>
    </section>
  );
}
