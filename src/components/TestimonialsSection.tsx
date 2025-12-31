import React from 'react';
import { TestimonialCard } from './TestimonialCard';
const testimonials = [{
  id: 1,
  heading: "KNUST",
  quote: "\"Hallway excites me because it tackles the biggest challenge student entrepreneurs face-visibility. As a graduate who built a business on campus, I believe Hallway will make earning and growing a brand easier. Supporting this youth-driven vision early was natural because it empowers students to succeed.\"",
  authorName: "Bernard Essel",
  authorTitle: "RTA, Telecom Eng",
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
  heading: "UG",
  quote: "\"Hallway is exactly what students like me have been waiting for. The idea of being able to earn, build skills, and connect with opportunities right on campus is something that can genuinely change how students approach life in school. I’m excited to be part of this journey and can’t wait to use the platform when it launches..\"",
  authorName: "J.N.Beresie",
  authorTitle: "Tech Professional",
  authorAvatar: "/images/avatar-james.png",
  className: "mt-[100px] max-md:mt-10"
}, {
  id: 4,
  heading: "UENR",
  quote: "\"What drew me to Hallway is the vision behind it. It’s not just about making money, it’s about helping students realize they don’t have to wait until after graduation to start building something meaningful. Hallway creates that bridge between campus life and real opportunities, and I believe it will redefine how students grow financially and professionally.\"",
  authorName: "Cariel S.",
  authorTitle: "Role Student",
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
