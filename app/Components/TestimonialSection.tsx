// components/TestimonialsSection.tsx
import React from 'react';
import TestimonialCard from './TestimonialCard';

// Data for our testimonials
const testimonialsData = [
  {
    imgSrc: '/Testimonial1.png',
    quote: "EduNova revolutionized my learning experience with its innovative approach. The interactive courses, combined with expert instructors, provided me with practical skills that I could immediately apply in my career.",
    name: 'Sarah L.',
    title: 'Data Analyst',
  },
  {
    imgSrc: '/Testimonial2.png',
    quote: "I was amazed by how engaging EduNova's is. The flexibility to learn at my own pace, coupled with the support from mentors, helped me excel. The platform's interactive content transformed my learning journey.",
    name: 'John M.',
    title: 'Software Engineer',
  },
  {
    imgSrc: '/Testimonial3.png',
    quote: "Joining EduNova was the best decision I made for my growth. The courses are meticulously structured and the community support is exceptional. The interactive elements and guidance helped me gain skills that have opened new opportunities.",
    name: 'Michael T.',
    title: 'Marketing Specialist',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title Area */}
               
      <h2 className="text-[40px] leading-[40px] font-bold text-black tracking-tight">
       Read <span className="text-[#2266BE]">Testimonials</span> from Our
      <br />
      <span className="text-brand-blue">Community of Learners</span>
      </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Our community of learners has shared their experiences and successes with us, providing valuable insights into the impact of our courses. Read their testimonials to see how our programs have helped them grow and achieve their goals.
        </p>
        
        {/* Testimonials Grid */}
        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;