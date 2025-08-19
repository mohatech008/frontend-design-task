'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Stepper from '../Components/Onboarding/Stepper';
import FinishButton from '../Components/Ui/FinishButton';

// Reusing the same step data
const stepsData = [
  { name: 'Provide your details', description: 'Please provide your personal details' },
  { name: 'Select your learning path', description: 'Please select your preferred learning path' },
  { name: 'Confirm payment information', description: 'Please confirm your payment details' },
  { name: 'Account successfully created', description: "You're free to start your journey!" },
];

const PaymentPage = () => {
  // Set the initial active step to 3 for this page
  const [currentStep, setCurrentStep] = useState(3);

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
        
        <div className="text-sm text-gray-400 flex justify-between">
          <span>© 2024</span>
          <span>EduNova@outlook.com</span>
        </div>
      </div>

      {/* === RIGHT COLUMN (MAIN CONTENT) === */}
      <div className="w-[55%] bg-white p-8 flex flex-col justify-center items-center rounded-r-[20px]">
        <div className="w-full max-w-lg">
          <div className="text-center">
                  
           <h1 className="text-xl font-bold leading-[30px] text-gray-700">Payment Details</h1>
                  
      <h2 className="mt-2 text-2xl font-bold leading-5 text-gray-900">Secure and Flexible Payment Options</h2>
            
        <p className="mt-2 text-base font-medium leading-5 text-gray-500">Please provide your payment details to complete your enrollment</p>
          </div>

          {/* Credit Card Visual */}
          <div className="my-8">
            <Image
              src="/Creditcard.png"
              alt="Credit card preview"
              width={400}
              height={250}
              className="mx-auto"
            />
          </div>

          {/* Payment Form */}
         <form className="space-y-8">
            {/* Form fields will go here */}
            <div>
               <label htmlFor="email" className="block font-semibold text-sm leading-[22px] text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full h-[48px] rounded-lg border border-gray-300 px-4" placeholder="Email address" />
            </div>
            <div className="relative">
<label htmlFor="card-number" className="block font-semibold text-sm leading-[22px] text-gray-700">Card number</label>
<input
type="text"
id="card-number"
className="mt-1 block w-full h-[48px] rounded-lg border border-gray-300 px-4 pr-36" // Added more right padding
placeholder="1234 1234 1234 1234"
/>
<div className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center space-x-2 pointer-events-none">
<Image src="/visa.png" alt="Visa" width={30} height={20} />
<Image src="/mastercard.png" alt="Mastercard" width={30} height={20} />
<Image src="/amex.png" alt="American Express" width={30} height={20} />
<Image src="/Discover.png" alt="Discover" width={30} height={20} />
</div>
</div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="expiration" className="block text-sm font-semibold text-gray-700">Expiration</label>
                    <input type="text" id="expiration" className="mt-1 block w-full h-[48px] rounded-lg border border-gray-300 px-4" placeholder="MM/YY" />
                </div>
                <div>
                    <label htmlFor="cvc" className="block text-sm font-semibold text-gray-700">CVC</label>
                    <input type="text" id="cvc" className="mt-1 block w-full h-[48px] rounded-lg border border-gray-300 px-4" placeholder="CVC" />
                </div>
            </div>
            <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700">Country</label>
                <input type="text" id="country" className="mt-1 block w-full h-[48px] rounded-lg border border-gray-300 px-4" placeholder="Nairobi, Kenya" />
            </div>
            
            <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                <input id="save-info" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" checked readOnly/>
                <label htmlFor="save-info" className="ml-2 block text-sm text-gray-700">Securely save my information for one-click checkout</label>
            </div>

                  
<div className="pt-4 flex justify-center">
  <Link href="/Dashboard">
    <button type="submit" className="hover:opacity-90 transition-opacity">
      <FinishButton />
    </button>
    </Link>
</div>
          </form>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center mt-8 space-x-2">
         
<div className="w-[59.5px] h-[5.11px] bg-[#0F1A4F] rounded-full"></div>    
<div className="w-[8.67px] h-[5.11px] bg-[#0F1A4F] rounded-full"></div>
<div className="w-[8.67px] h-[5.11px] bg-[#0F1A4F] rounded-full"></div>
<div className="w-[8.67px] h-[5.11px] bg-[#0F1A4F] rounded-full"></div>
</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;