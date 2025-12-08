import React from 'react';
import { AuthorInfo } from './AuthorInfo';

interface TestimonialCardProps {
  heading: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  heading,
  quote,
  authorName,
  authorTitle,
  authorAvatar,
  className = ''
}) => {
  return (
    <article 
      className={`bg-[rgba(249,249,250,1)] shadow-[0px_34px_34px_rgba(10,67,128,0.15)] border relative w-full mx-auto p-[9px] rounded-3xl border-[rgba(224,231,245,1)] border-solid hover:shadow-[0px_40px_40px_rgba(10,67,128,0.2)] transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${className}`}
      tabIndex={0}
      role="article"
      aria-label={`Testimonial from ${authorName}`}
    >
      <div className="border flex flex-col items-stretch px-[25px] py-[31px] rounded-2xl border-[rgba(224,231,245,1)] border-solid max-md:px-5">
        <h3 className="text-[rgba(29,29,29,1)] text-2xl font-semibold leading-[1.4] tracking-[-0.96px]">
          {heading}
        </h3>
        <blockquote className="text-[rgba(148,154,169,1)] text-sm font-normal leading-[27px] tracking-[-0.36px] mt-[26px]">
          {quote}
        </blockquote>
      </div>
      <AuthorInfo 
        name={authorName}
        title={authorTitle}
        avatarSrc={authorAvatar}
      />
    </article>
  );
};
