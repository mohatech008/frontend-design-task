// app/welcome/page.tsx
'use client'; 
import React,{useState} from 'react';
import Link from 'next/link';
import ContinueButton from '../Components/Ui/ContinueButton';
import InputField from '../Components/Form/InputField';
import PersonIcon from '../Components/Icons/PersonIcon';
import GmailIcon from '../Components/Icons/GmailIcon';
import LockIcon from '../Components/Icons/LockIcon';
import CheckIcon from '../Components/Icons/CheckIcon';
import Stepper from '../Components/Onboarding/Stepper';

// Data for the stepper to keep the JSX clean
const stepsData = [
  { name: 'Provide your details', description: 'Please provide your personal details', status: 'active' },
  { name: 'Select your learning path', description: 'Please select your preferred learning path', status: 'inactive' },
  { name: 'Confirm payment information', description: 'Please confirm your payment details', status: 'inactive' },
  { name: 'Account successfully created', description: "You're free to start your journey!", status: 'inactive' },
];

const WelcomePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="min-h-screen flex font-sans bg-white">
      
      {/* === LEFT COLUMN (STEPPER) === */}
   <div className="w-[45%] bg-[#DCDCDC61] p-8 flex flex-col justify-between rounded-l-[20px] border-r border-gray-200">
        <div>
          {/* Window Controls */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Stepper */}
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

      {/* === RIGHT COLUMN (FORM) === */}
      <div className="w-[55%] bg-[#C7DFFF] p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          <div className="text-center">         
           <h1 className="text-xl font-bold text-gray-700">Welcome 👋</h1>
                  
         <h2 className="mt-2 text-2xl font-bold text-gray-900">Personal details</h2>    
          <p className="mt-2 text-base font-medium text-gray-500">Please provide your personal details</p>
          </div>

          <form className="mt-8 space-y-6">
            <InputField
              label="First name*"
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              icon={<PersonIcon className="text-gray-400" />}
            />
            <InputField
             label="Last name*"
            type="text"
            id="last-name"
           placeholder="Enter your last name"
           icon={<PersonIcon />}
           />
             <InputField
        label="Email*"
        type="email"
        id="email"
        placeholder="Enter your email"
        icon={<GmailIcon />}
      />
            <InputField
        label="Password*"
        type="password"
        id="password"
        placeholder="Enter your password"
        icon={<LockIcon />}
      />
       <Link href="/Learning-path">
             <button type="submit" className="w-full hover:opacity-90 transition-opacity">
             <ContinueButton />
            </button>
            </Link>
          </form>

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

export default WelcomePage;