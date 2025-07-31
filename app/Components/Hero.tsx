import React from 'react';
import SparkleIcon from './Icons/SparkleIcon';
import GetStartedButton from './Ui/GetStartedButton';

const Hero = () => {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Column (Text Content) */}
        <div className="space-y-4 text-center md:text-left max-w-[581px] pt-16 md:pt-24">
          <SparkleIcon className="text-yellow-400" /> 
          <h1 className="font-extrabold text-[30px] line height-[40px] text-black w-[479px] h-[120px]">
            Applying cutting-edge techniques for <span className="text-yellow-400">transformative</span> learning experiences
          </h1>
          <p className="font-normal text-[17px] leading-[30px] text-gray-600  mt-4">
            Experience customised education paths and mentorship that foster significant growth and lead to achieving your career aspirations.
          </p>
          <button aria-label="Get Started" className="transition-transform duration-200 hover:scale-105 mt-4">
    <GetStartedButton />
</button>
        </div>
        <div className="relative flex justify-center items-center">
    {/* The main image itself */}
    <div className="relative z-10">
        <img
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