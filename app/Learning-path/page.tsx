'use client'; 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContinueButton from '../Components/Ui/ContinueButton';
import Stepper from '../Components/Onboarding/Stepper';

// Data for the stepper, with the second step active
const stepsData = [
  { name: 'Provide your details', description: 'Please provide your personal details', status: 'complete' },
  { name: 'Select your learning path', description: 'Please select your preferred learning path', status: 'active' },
  { name: 'Confirm payment information', description: 'Please confirm your payment details', status: 'inactive' },
  { name: 'Account successfully created', description: "You're free to start your journey!", status: 'inactive' },
];

// Data for the learning path cards, including image URLs
const learningPaths = [
    { id: 'frontend', title: 'Frontend Development', iconUrl: '/Frontend.png', bgUrl: '/Ellipse.png' },
    { id: 'backend', title: 'Backend Development', iconUrl: '/Backend.png', bgUrl: '/Ellipse.png' },
    { id: 'fullstack', title: 'Fullstack Development', iconUrl:'/Fullstack.png', bgUrl: '/Ellipse.png' }, // Add fullstack-icon.png when ready
    { id: 'cloud', title: 'Cloud Computing', iconUrl:'/Cloud.png', bgUrl: '/Ellipse.png' },     // Add cloud-icon.png when ready
];

// Reusable component for the main icons
const PathIcon = ({ id, iconUrl }: { id: string, iconUrl: string | null }) => (
    <div className="w-24 h-24 relative">
        {iconUrl ? (
            <Image
                src={iconUrl}
                alt={`${id} icon`}
                layout="fill"
                className="object-contain"
            />
        ) : (
            // This is the placeholder for icons you haven't exported yet
            <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                <p className="text-white text-4xl">{id.slice(0, 2).toUpperCase()}</p>
            </div>
        )}
    </div>
);

// Placeholder Checkmark Icon for the stepper
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);


const LearningPathPage = () => {
  const [selectedPath, setSelectedPath] = useState('cloud');
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="min-h-screen flex font-sans bg-white">
      
      {/* === LEFT COLUMN (STEPPER) === */}
      <div className="w-[45%] bg-[#DCDCDC61] p-8 flex flex-col justify-between rounded-l-[20px] border-r border-gray-200">
        <div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          <Stepper 
            steps={stepsData}
            activeStep={currentStep}
            onStepClick={setCurrentStep}
          />
        </div>
        
        {/* Footer */}
<div className="text-gray-400 flex justify-between">
  <span className="font-medium text-sm leading-none tracking-[0.4px]">© 2024</span>
  <span className="font-medium text-sm leading-none tracking-[0.4px]">EduNova@outlook.com</span>
</div>
      </div>

      {/* === RIGHT COLUMN (MAIN CONTENT) === */}
      <div className="w-[55%] bg-[#EDF5FF] p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-2xl">
          <div className="text-center">
                 
           <h1 className="text-xl font-bold leading-[30px] text-gray-700">Explore Our Learning Paths</h1>
                  
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Find Your Focus</h2>     
            <p className="mt-2 text-base font-medium leading-5 text-gray-500">Select a category that matches your career goals and interests.</p>
            </div>

          {/* Learning Path Cards Grid */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`relative p-6 rounded-[20px] text-white text-center flex flex-col items-center justify-between transition-all duration-200 overflow-hidden bg-gradient-to-b from-[#0F1A4F] to-[#213CB5] border-2 ${
  selectedPath === path.id ? 'border-white' : 'border-transparent'
}`}
              >
                {/* Selection indicator */}
<div className="w-full flex justify-end relative z-10">
  <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center bg-black/20">
    {/* If this path is selected, render the CheckIcon */}
    {selectedPath === path.id && <CheckIcon />}
  </div>
</div>
                
                {/* Main Icon */}
                <div className="relative z-10 my-4">
                  <PathIcon id={path.id} iconUrl={path.iconUrl} />
                </div>

                {/* Title */}
                      
<p className="mt-auto font-medium text-base leading-5 relative z-10">{path.title}</p>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
              <Link href="/Payment">
            <ContinueButton />
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-10 h-2 bg-[#0F1A4F] rounded-full"></div>
            <div className="w-2 h-2 bg-[#0F1A4F] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathPage;