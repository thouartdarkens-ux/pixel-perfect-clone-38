import React from 'react';
import { TestimonialCard } from './TestimonialCard';
const testimonials = [{
  id: 1,
  heading: "KNUST",
  quote: "\"Hallway excites me because it tackles the biggest challenge student entrepreneurs face-visibility. As a graduate who built a business on campus, I believe Hallway will make earning and growing a brand easier. Supporting this youth-driven vision early was natural because it empowers students to succeed.\"",
  authorName: "Bernard Essel",
  authorTitle: "RTA, Telecommunication Engineering | Entrepreneur",
  authorAvatar: "/images/WhatsApp Image 2025-12-13 at 10.16.16_3ff6cd3f.jpg",
  className: "mt-[100px] max-md:mt-10"
}, {
  id: 2,
  heading: "UCC",
  quote: "\"I'm Naa Deide Tagoe, a student at the University of Cape Coast. I'm really excited about Hallway because it feels like something made for us by people who understand student life. It is more than just a platform. It is a chance to grow, socialize and earn. I believe it will open doors for many of us in simple but powerful ways.\"",
  authorName: "Naa D Tagoe",
  authorTitle: "Student",
  authorAvatar: "/images/WhatsApp Image 2025-12-13 at 10.17.33_650fcc24.jpg",
  className: "max-md:mt-5"
}, {
  id: 3,
  heading: "Impressive!",
  quote: "\"This platform has been a game-changer for my family's finances. We've been able to set and meet savings goals, track expenses, and plan for the future with ease. It's made financial planning stress-free.\"",
  authorName: "David P",
  authorTitle: "Tech Professional",
  authorAvatar: "/images/avatar-james.png",
  className: "mt-[100px] max-md:mt-10"
}, {
  id: 4,
  heading: "Amazing work",
  quote: "\"This platform has completely transformed the way I manage my finances. The intuitive interface makes budgeting, investing, and tracking expenses effortless. I've never felt more in control of my financial future!\"",
  authorName: "David Gilmour",
  authorTitle: "CEO Film Project",
  authorAvatar: "/images/avatar-james.png",
  className: "max-md:mt-5"
}];
export const TestimonialsSection: React.FC = () => {
  return <section className="flex flex-col relative min-h-[838px] overflow-hidden" aria-label="Customer testimonials">
      <img src="/images/testimonials-bg-1.png" alt="" className="absolute h-full w-full object-cover inset-0" role="presentation" />
      <div className="flex flex-col relative min-h-[838px] w-full px-20 py-[158px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <img src="/images/testimonials-bg-2.png" alt="" className="absolute h-full w-full object-cover inset-0" role="presentation" />
        
        
        

        <main className="relative mb-[-26px] w-full max-w-[1708px] mt-[58px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className={`w-3/12 ${index > 0 ? 'ml-5' : ''} max-md:w-full max-md:ml-0`}>
                <TestimonialCard heading={testimonial.heading} quote={testimonial.quote} authorName={testimonial.authorName} authorTitle={testimonial.authorTitle} authorAvatar={testimonial.authorAvatar} className={testimonial.className} />
              </div>)}
          </div>
        </main>
      </div>
    </section>;
};
