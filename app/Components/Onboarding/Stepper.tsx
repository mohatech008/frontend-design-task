// components/onboarding/Stepper.tsx
'use client';

import React from 'react';

// A simple CheckIcon component for the ticks
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

// Define the shape of our step data and the component's props
type Step = {
  name: string;
  description: string;
};

type StepperProps = {
  steps: Step[];
  activeStep: number;
  onStepClick: (step: number) => void;
};

const Stepper = ({ steps, activeStep, onStepClick }: StepperProps) => {
  return (
  <div className="mt-16 space-y-8">
    {steps.map((step, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === activeStep;
      const isCompleted = stepNumber < activeStep;

      return (
        <button 
          key={step.name} 
          className="flex items-start text-left w-full"
          onClick={() => onStepClick(stepNumber)}
        >
          {/* Circle styles */}
          <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full mr-4 border-2 transition-colors duration-200 ${
              isActive || isCompleted 
              ? 'bg-white border-blue-600' 
              : 'bg-gray-200 border-transparent'
          }`}>
            {/* Tick styles */}
            <div className={`transition-colors duration-200 ${
                isActive || isCompleted ? 'text-blue-600' : 'text-gray-400'
            }`}>
              <CheckIcon />
            </div>
          </div>

          {/* Text styles */}
          <div>
            {/* THE LOGIC CHANGE IS HERE */}
            <h3 className={`font-bold transition-colors duration-200 ${
                isActive ? 'text-gray-900' : 'text-gray-400' // Active is dark, others are grey
            }`}>{step.name}</h3>
            <p className="text-sm text-gray-400">{step.description}</p>
          </div>
        </button>
      );
    })}
  </div>
);
};

export default Stepper;