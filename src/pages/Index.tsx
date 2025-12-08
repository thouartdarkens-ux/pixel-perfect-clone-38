import * as React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";
import { ContactForm } from "@/components/ContactForm";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import Ivanpi from "@/components/ivanpi";
import { Herotroy } from "@/components/Hertroy";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
const Index = () => {
  
  return (
    <main className="bg-white max-md:pb-[100px]">
      <div className="flex flex-col items-center"><Header/>
      
      </div>
      <HeroSection/>
      <FeaturesSection/>
      <Ivanpi/>
      <Herotroy/>
      <TestimonialsSection/>
      <FAQSection/>

      <div id="contact">
        <ContactForm />
      </div>
      <Footer/>
      </main>
  );
};

export default Index;
