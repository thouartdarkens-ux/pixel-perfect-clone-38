import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    heading: "Highly recommend!",
    quote: "\"I've tried several finance platforms, but this one is by far the best. The automated savings and investment features have helped me build a solid portfolio without even thinking about it. Highly recommend!\"",
    authorName: "Emily R.",
    authorTitle: "Investor",
    authorAvatar: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/a9b4d0cece9d9e17fbf7fc58d6843335bad5b2b9?placeholderIfAbsent=true",
    className: "mt-[100px] max-md:mt-10"
  },
  {
    id: 2,
    heading: "Excellence!",
    quote: "\"As a small business owner, keeping track of expenses used to be a nightmare. This platform has streamlined everything for me, from invoicing to managing cash flow. It's a must-have tool for anyone serious about their business!\"",
    authorName: "James D.",
    authorTitle: "Entrepreneur",
    authorAvatar: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f6badb8d4391a4c67850bd3bba6500d79339d2c4?placeholderIfAbsent=true",
    className: "max-md:mt-5"
  },
  {
    id: 3,
    heading: "Impressive!",
    quote: "\"This platform has been a game-changer for my family's finances. We've been able to set and meet savings goals, track expenses, and plan for the future with ease. It's made financial planning stress-free.\"",
    authorName: "David P",
    authorTitle: "Tech Professional",
    authorAvatar: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f6badb8d4391a4c67850bd3bba6500d79339d2c4?placeholderIfAbsent=true",
    className: "mt-[100px] max-md:mt-10"
  },
  {
    id: 4,
    heading: "Amazing work",
    quote: "\"This platform has completely transformed the way I manage my finances. The intuitive interface makes budgeting, investing, and tracking expenses effortless. I've never felt more in control of my financial future!\"",
    authorName: "David Gilmour",
    authorTitle: "CEO Film Project",
    authorAvatar: "https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/f6badb8d4391a4c67850bd3bba6500d79339d2c4?placeholderIfAbsent=true",
    className: "max-md:mt-5"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      className="flex flex-col relative min-h-[838px] overflow-hidden"
      aria-label="Customer testimonials"
    >
      <img
        src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/c272d1ab0ea4fa8307ad016c5ea5bf665676eb18?placeholderIfAbsent=true"
        alt=""
        className="absolute h-full w-full object-cover inset-0"
        role="presentation"
      />
      <div className="flex flex-col relative min-h-[838px] w-full px-20 py-[158px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/57607d9550f320651619592d715825870d8bbb79?placeholderIfAbsent=true"
          alt=""
          className="absolute h-full w-full object-cover inset-0"
          role="presentation"
        />
        
        <header className="relative flex items-stretch gap-2 mr-[232px] max-md:mr-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/cda91669ede8f43a4203aaaca85540596cae8e36?placeholderIfAbsent=true"
            alt="Company logo or brand element"
            className="aspect-[1] object-contain w-[52px] shadow-[0px_0px_0px_1px_rgba(128,128,128,0.5)] shrink-0 rounded-[100px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/8914166e909b4d6f993fbcf0a4c8521a/ecaf4039c61e24fca01246605be0d4b50ad6cd90?placeholderIfAbsent=true"
            alt="Company logo or brand element"
            className="aspect-[1] object-contain w-[52px] shadow-[0px_0px_0px_1px_rgba(128,128,128,0.5)] shrink-0 rounded-[100px]"
          />
        </header>

        <main className="relative mb-[-26px] w-full max-w-[1708px] mt-[58px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`w-3/12 ${index > 0 ? 'ml-5' : ''} max-md:w-full max-md:ml-0`}
              >
                <TestimonialCard
                  heading={testimonial.heading}
                  quote={testimonial.quote}
                  authorName={testimonial.authorName}
                  authorTitle={testimonial.authorTitle}
                  authorAvatar={testimonial.authorAvatar}
                  className={testimonial.className}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};
