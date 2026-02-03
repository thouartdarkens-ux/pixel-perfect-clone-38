import React from 'react';
import { ContactButton } from './ContactButton';
import { FAQItem } from './FAQItem';

const faqData = [
  {
    question: "What is Hallway?",
    answer: "Hallway is a student-focused freelance and e-commerce platform that allows students to monetize their skills, sell products, and offer services online. It's built by students, for students, making it easy to connect with peers and start earning while studying.",
    isInitiallyOpen: true
  },
  {
    question: "How can students earn on Hallway?",
    answer: "Students can earn by offering freelance services, selling digital or physical products, and completing gigs posted by other students or businesses. Hallway also provides a secure platform for managing payments and tracking your earnings."
  },
  {
    question: "Is Hallway free for students?",
    answer: "Yes! Signing up and joining Hallway is completely free for all students."
  },
  {
    question: "Can I sell both digital and physical products on Hallway?",
    answer: "Absolutely! Hallway allows students to sell digital products like designs, documents, or tutorials, as well as physical products like books, gadgets, or handmade items."
  },
  {
    question: "Who can join Hallway?",
    answer: "Hallway is designed specifically for students and recent graduates. Anyone enrolled in a university or educational institution can sign up and start offering their skills or products."
  },
  {
    question: "How do I get paid on Hallway?",
    answer: "Payments are securely processed through the platform. Students can link their bank accounts or mobile wallets to receive immediate payouts from their sales or completed freelance gigs."
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
