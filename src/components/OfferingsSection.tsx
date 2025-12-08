import React from 'react';
import { CurrencyExchangeCard } from './CurrencyExchangeCard';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/efe63c42bcc8f121f1f2a882aa893c10bf3ca59d?placeholderIfAbsent=true",
    title: "Reach a Ready Student Market",
    description: "Hallway is built around the student community, meaning your products are instantly exposed to an active, engaged audience that's always looking for affordable, convenient, and trendy items. Instead of competing in the crowded general e-commerce space, you'll be selling directly to students who are most likely to need what you offer.",
    iconAlt: "Student market icon"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/59479d77931c995e37ca67e7eaa854e048d83eb9?placeholderIfAbsent=true",
    title: "Zero Barriers, Easy Setup",
    description: "No complicated processes, no hidden fees. With Hallway, becoming a vendor is quick and simple—just sign up, list your products, and start selling. Whether you're an individual student with a side hustle or a small business looking to tap into the student economy, Hallway gives you the tools to get started without stress.",
    iconAlt: "Easy setup icon"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/2e38e69e49bb85d29803c39936d7cd5808dae7ca?placeholderIfAbsent=true",
    title: "Grow With Built-In Marketing Support",
    description: "Hallway isn't just a platform—it's a community. We promote featured vendors through our app, social media, and campus networks, helping you gain visibility and build a loyal customer base faster. Instead of spending extra on advertising, you can rely on Hallway's ecosystem to connect you directly with buyers.",
    iconAlt: "Marketing support icon"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/de01e5c35f1c513aa636bc39799e69c5bffa51ce?placeholderIfAbsent=true",
    title: "Secure & Reliable Payments",
    description: "We know trust matters. Hallway provides a safe and seamless payment system that protects both vendors and buyers. With quick settlements and transparent transaction tracking, you can focus on running your business while we handle the technical side. Peace of mind means you can sell with confidence.",
    iconAlt: "Secure payments icon"
  }
];

export const OfferingsSection: React.FC = () => {
  return (
    <main className="flex w-full flex-col bg-white pt-24 pb-[156px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <header className="text-slate-950 text-[40px] font-medium leading-[1.2] tracking-[-1.2px]">
        <h1>
          <span style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 600 }}>
            Why Sell On{" "}
          </span>
          <span style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 600, color: 'rgba(96,64,7,1)' }}>
            Hallway
          </span>
          <span style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 600 }}>
            ?
          </span>
        </h1>
      </header>
      
      <div className="self-center mb-[-31px] w-full max-w-[1245px] mt-9 max-md:max-w-full max-md:mb-2.5">
        <div className="flex w-full gap-6 flex-wrap max-md:max-w-full">
          <div className="min-w-60 grow shrink w-[617px] max-md:max-w-full">
            <CurrencyExchangeCard />
          </div>
          
          <div className="min-w-60 grow shrink w-[402px] max-md:max-w-full">
            <FeatureCard
              icon={features[0].icon}
              title={features[0].title}
              description={features[0].description}
              iconAlt={features[0].iconAlt}
            />
            <div className="mt-6">
              <FeatureCard
                icon={features[1].icon}
                title={features[1].title}
                description={features[1].description}
                iconAlt={features[1].iconAlt}
              />
            </div>
          </div>
        </div>
        
        <div className="flex w-full gap-6 flex-wrap mt-[22px] max-md:max-w-full">
          <div className="min-w-60 grow shrink w-[402px] max-md:max-w-full">
            <FeatureCard
              icon={features[2].icon}
              title={features[2].title}
              description={features[2].description}
              iconAlt={features[2].iconAlt}
            />
            <div className="mt-6">
              <FeatureCard
                icon={features[3].icon}
                title={features[3].title}
                description={features[3].description}
                iconAlt={features[3].iconAlt}
              />
            </div>
          </div>
          
          <img
            src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/9f63cff31dc9b9480e78c9cb1d8d6fcd3ad08c24?placeholderIfAbsent=true"
            className="aspect-[1.26] object-contain w-[617px] min-w-60 grow shrink max-md:max-w-full"
            alt="Hallway platform illustration showing vendor benefits and features"
          />
        </div>
      </div>
    </main>
  );
};
