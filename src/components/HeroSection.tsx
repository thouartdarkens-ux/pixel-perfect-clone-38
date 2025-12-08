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
    <section className="flex flex-col relative min-h-[1104px] w-full overflow-hidden rounded-[44px] max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/406c52f6857a718090561a94deb2ae91cde1d731?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f2ff408a68bf4437aef96475bacc6105156d6602?placeholderIfAbsent=true"
        alt="Hero content"
        className="aspect-[1.74] object-contain w-full rounded-[44px] max-md:max-w-full"
      />
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center mt-[150px]">
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
