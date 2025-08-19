// components/Hero.tsx (Final Simplified Version)
import Image from 'next/image';
import React from 'react';
import SparkleIcon from './Icons/SparkleIcon';
import GetStartedButton from './Ui/GetStartedButton';
import GraduationIcon from './Icons/GraduationIcon';
import CustomLearningIcon from './Icons/LearningIcon';
import HolisticGuidanceIcon from './Icons/HolisticIcon';

// The data structure is now simpler - no more `hasGradient` property
const supportItems = [
  { text: 'Quality Education', icon: <GraduationIcon className="text-white" /> },
  { text: 'Custom Learning', icon: <CustomLearningIcon className="text-white" /> }, // Added text-white
  { text: 'Holistic Guidance', icon: <HolisticGuidanceIcon className="text-white" /> },
];

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
        
        {/* Left Column */}
        <div className="space-y-6 text-center md:text-left max-w-[581px] pt-16 md:pt-24">
          {/* ... other content ... */}
          <SparkleIcon className="text-yellow-400" />
          <h1 className="font-extrabold text-[30px] leading-[40px] text-black">
            Applying cutting-edge techniques for <span className="text-yellow-400">transformative</span> learning experiences
          </h1>
          <p className="font-normal text-[17px] leading-[30px] text-gray-600">
            Experience customised education paths and mentorship that foster significant growth and lead to achieving your career aspirations.
          </p>
          <button aria-label="Get Started" className="transition-transform duration-200 hover:scale-105">
            <GetStartedButton />
          </button>
          
          {/* Support Overview Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-x-[31px] gap-y-5">
              {supportItems.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  
                  {/* The icon container now has the SAME style for all items */}
                  <div className="w-12 h-12 flex-shrink-0 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-500 to-blue-800">
                    {item.icon}
                  </div>
                  
                  <span  className="font-semibold text-gray-700 whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Right Column */}
        <div className="relative flex justify-center items-center">
         {/*Blur image section*/}
          <Image
    src="/overhead.png"
    alt=""
    width={659}
    height={478}
    className="absolute opacity-75"
    aria-hidden="true"
  />
          <div className="relative z-10">
            <Image
              src="/ladylap.png" 
              alt="A smiling student with a laptop"
              width={731}
              height={537}
              className="object-cover rounded-[53px] -rotate-[1.05deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;