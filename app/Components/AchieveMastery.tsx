// components/AchieveMastery.tsx
import React from 'react';
import Image from 'next/image';
import LearnmoreButton from './Ui/LearnmoreButton';

// Data for the numbered steps to keep the JSX clean
const steps = [
  { number: '1', title: 'Sign Up', description: 'Easily create your account and get started.' },
  { number: '2', title: 'Pick your path', description: 'Select a program tailored to your goals.' },
  { number: '3', title: 'Connect with Mentors', description: 'Receive expert guidance and personalized support.' },
  { number: '4', title: 'Earn Certification', description: 'Complete the course and earn your certification.' },
];

const AchieveMastery = () => {
  return (
    // Main section with the light cream background and padding
    <section className="bg-light-cream py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* === COLUMN 1: LEFT (IMAGE) === */}
          <div className="relative flex justify-center items-center">
            {/* Decorative background shape */}
             <Image
        src="/elipsestudent.png"
        alt=""
        layout="fill"
        className="object-contain"
        aria-hidden="true"
    />
            
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="/studygroup.png" // Make sure this filename is correct
                alt="Two students studying together with a laptop"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          {/* === COLUMN 2: RIGHT (TEXT CONTENT) === */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Achieve <span className="text-[#FDBB45]">Mastery!</span>
            </h2>
            <p className="text-[#000000]">
              Begin your journey with our expertly designed programs to gain deep knowledge and skills. Start now to unlock your potential and reach new heights in your field.
            </p>

            {/* Steps List */}
            <div className="space-y-0 text-[#000000B0]">
  {steps.map((step, index) => (
    <div key={step.number} className="flex">
      {/* Left side with circle and line */}
      <div className="flex flex-col items-center mr-4">
        {/* Circle */}
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#FCC21B] rounded-full text-white font-bold z-10">
          {step.number}
        </div>
        {/* Vertical Line (not shown for the last item) */}
        {index < steps.length - 1 && (
          <div className="w-0.5 h-full bg-[#FCC21B]/30"></div>
        )}
      </div>
      {/* Right side with text */}
      <div className="pb-8">
        <h3 className="font-bold text-[#000000B0]">{step.title}</h3>
        <p className="text-sm text-[#000000B0]">{step.description}</p>
      </div>
    </div>
  ))}
</div>

            <button aria-label="Learn More" className="transition-transform duration-200 hover:scale-105">
                <LearnmoreButton/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchieveMastery;