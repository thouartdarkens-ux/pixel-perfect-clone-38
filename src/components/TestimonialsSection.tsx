import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    heading: "Highly recommend!",
    quote: "\"I've tried several finance platforms, but this one is by far the best. The automated savings and investment features have helped me build a solid portfolio without even thinking about it. Highly recommend!\"",
    authorName: "Emily R.",
    authorTitle: "Investor",
    authorAvatar: "/images/avatar-emily.png",
    className: "mt-[100px] max-md:mt-10"
  },
  {
    id: 2,
    heading: "Excellence!",
    quote: "\"As a small business owner, keeping track of expenses used to be a nightmare. This platform has streamlined everything for me, from invoicing to managing cash flow. It's a must-have tool for anyone serious about their business!\"",
    authorName: "James D.",
    authorTitle: "Entrepreneur",
    authorAvatar: "/images/avatar-james.png",
    className: "max-md:mt-5"
  },
  {
    id: 3,
    heading: "Impressive!",
    quote: "\"This platform has been a game-changer for my family's finances. We've been able to set and meet savings goals, track expenses, and plan for the future with ease. It's made financial planning stress-free.\"",
    authorName: "David P",
    authorTitle: "Tech Professional",
    authorAvatar: "/images/avatar-james.png",
    className: "mt-[100px] max-md:mt-10"
  },
  {
    id: 4,
    heading: "Amazing work",
    quote: "\"This platform has completely transformed the way I manage my finances. The intuitive interface makes budgeting, investing, and tracking expenses effortless. I've never felt more in control of my financial future!\"",
    authorName: "David Gilmour",
    authorTitle: "CEO Film Project",
    authorAvatar: "/images/avatar-james.png",
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
        src="/images/testimonials-bg-1.png"
        alt=""
        className="absolute h-full w-full object-cover inset-0"
        role="presentation"
      />
      <div className="flex flex-col relative min-h-[838px] w-full px-20 py-[158px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <img
          src="/images/testimonials-bg-2.png"
          alt=""
          className="absolute h-full w-full object-cover inset-0"
          role="presentation"
        />
        
        

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
