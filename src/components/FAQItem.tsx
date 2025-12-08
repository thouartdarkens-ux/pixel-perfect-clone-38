import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer?: string;
  isInitiallyOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isInitiallyOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOpen();
    }
  };

  return (
    <article className="flex flex-col justify-center items-center gap-4 w-full bg-white p-6 rounded-2xl max-sm:p-5 shadow-sm border border-gray-100">
      <header 
        className="flex justify-center items-center gap-4 w-full cursor-pointer"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h3 className="flex-[1_0_0] text-slate-950 text-lg font-bold leading-[26px] tracking-[-0.54px] max-sm:text-base max-sm:leading-6 max-sm:tracking-[-0.48px]">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200"
              aria-hidden="true"
            >
              <path d="M7 14L12 9L17 14H7Z" fill="black" />
            </svg>
          ) : (
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200"
              aria-hidden="true"
            >
              <path d="M7 10L12 15L17 10H7Z" fill="black" />
            </svg>
          )}
        </div>
      </header>
      {isOpen && answer && (
        <div 
          id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
          className="w-full text-slate-500 text-base font-normal leading-6 tracking-[-0.48px] max-sm:text-sm max-sm:leading-5 max-sm:tracking-[-0.42px] animate-in slide-in-from-top-2 duration-200"
        >
          {answer}
        </div>
      )}
    </article>
  );
};
