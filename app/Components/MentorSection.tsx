// components/MentorsSection.tsx
import React from 'react';
import Image from 'next/image';
import PencilIcon from './Icons/PencilIcon';

// Data for our mentors to keep the JSX clean
const mentorsData = [
  { imgSrc: '/mentor1.png', shapeSrc: '/shape1-mentor1.png', alt: 'Mentor 1'},
  { imgSrc: '/mentor2.png', shapeSrc: '/shape2-mentor2.png', alt: 'Mentor 2' },
  { imgSrc: '/mentor3.png', shapeSrc: '/shape3-mentor3.png', alt: 'Mentor 3' },
  { imgSrc: '/mentor4.png', shapeSrc: '/shape4-mentor4.png', alt: 'Mentor 4' },
];

const MentorsSection = () => {
  return (
    // Main section with the custom gradient background
    <section className="bg-gradient-to-b from-[#FFF6D2] to-[#FCC21BB2] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* === COLUMN 1: LEFT (IMAGE GRID) === */}
          <div className="grid grid-cols-2 gap-6">
            {mentorsData.map((mentor, index) => (
              <div key={index} className="relative aspect-square">
                {/* Decorative Shape SVG */}
                <Image
                  src={mentor.shapeSrc}
                  alt=""
                  layout="fill"
                  className="object-contain"
                  aria-hidden="true"
                />
                {/* Mentor Profile Picture */}
                <div className="absolute inset-0 p-2 sm:p-4">
                  <Image
                    src={mentor.imgSrc}
                    alt={mentor.alt}
                    layout="fill"
                    className="object-contain rounded-3xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* === COLUMN 2: RIGHT (TEXT CONTENT) === */}
          <div className="space-y-4">
           <h3 className="font-extrabold text-[20px] uppercase text-[#0F1A4F] tracking-wider">
              MEET YOUR MENTORS
            </h3>
            <h2 className="flex items-center gap-3 text-[40px] leading-[30px] font-extrabold text-gray-900 tracking-tight">
              Expert Guidance <PencilIcon />
            </h2>
            <p className="font-medium text-[18px] leading-[30px] text-gray-600">
              Our mentors are seasoned industry experts dedicated to guiding you with personalized support and real-world insights. With their expertise by your side, you'll have the confidence and knowledge to achieve your learning goals and excel in your chosen field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;