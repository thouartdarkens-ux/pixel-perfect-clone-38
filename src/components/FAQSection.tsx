import React from 'react';
import { ContactButton } from './ContactButton';
import { FAQItem } from './FAQItem';

const faqData = [
  {
    question: "Who can become a vendor on Hallway?",
    answer: "Anyone! Whether you're a student with a small side hustle or a business owner looking to reach the student market, Hallway is open to all vendors who want to sell products directly to students.",
    isInitiallyOpen: true
  },
  {
    question: "How do I sign up as a vendor?",
    answer: ""
  },
  {
    question: "Are there any fees for selling on Hallway?",
    answer: ""
  },
  {
    question: "How do I get paid?",
    answer: ""
  },
  {
    question: "What kind of products can I sell?",
    answer: ""
  }
];

export const FAQSection: React.FC = () => {
  const handleContactSupport = () => {
    // Handle contact support action
    console.log('Contact support clicked');
  };

  return (
    <section 
      className="flex w-full min-h-[690px] flex-col items-start gap-2 bg-slate-50 p-24 max-md:px-8 max-md:py-16 max-sm:px-4 max-sm:py-12"
      style={{ fontFamily: 'Satoshi, sans-serif' }}
    >
      <div className="flex items-start gap-[152px] w-full max-w-[1248px] max-md:flex-col max-md:gap-12 max-md:items-center max-sm:gap-8 mx-auto">
        <div className="flex w-[484px] flex-col items-start gap-8 max-md:w-full max-md:max-w-[600px] max-md:items-center max-md:text-center">
          <header className="flex flex-col items-start gap-4 w-full">
            <h1 className="w-full text-slate-950 text-[40px] font-semibold leading-[48px] tracking-[-1.2px] max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.96px] max-sm:text-[28px] max-sm:leading-9 max-sm:tracking-[-0.84px]">
              Frequently asked questions
            </h1>
            <p className="w-full text-slate-500 text-base font-normal leading-6 tracking-[-0.48px] max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5 max-sm:tracking-[-0.42px]">
              Find quick solutions and helpful tips for using Hallway. We've
              compiled answers to the most frequently asked questions right
              here.
            </p>
          </header>
          <ContactButton onClick={handleContactSupport}>
            Contact Support
          </ContactButton>
        </div>
        <div className="flex w-[612px] flex-col items-start gap-4 max-md:w-full max-md:max-w-[600px]">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isInitiallyOpen={faq.isInitiallyOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
