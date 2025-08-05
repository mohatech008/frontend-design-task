// components/PricingSection.tsx
import React from 'react';
import GetStartedButton from './Ui/GetStartedButton';

// 1. We create a data structure to hold the specific content for each plan.
const pricingPlans = [
  {
    header: 'Free',
    price: 'FREE',
    features: ['Introductory courses', 'Basic resources', 'Limited support', 'Sample materials'],
    isFeatured: false,
  },
   {
    header: 'Basic',
    price: 'KSH.5,000',
    features: ['Core course access', 'Standard resources', 'Email support', 'Course completion certificate'],
    isFeatured: false,
  },
  {
    header: 'Standard',
    price: 'KSH.10,000',
    features: ['Full course access', 'Advanced resources', 'Priority support', 'Personalized feedback', 'Progress tracking'],
    isFeatured: false, // This card is featured
  },
  {
    header: 'Premium',
    price: 'KSH.15,000',
    features: ['Unlimited course access', 'Exclusive content', 'One-on-one mentoring', 'Early access to new features', 'Personalized learning plans'],
    isFeatured: false, // This card is also featured
  },
];

const PricingSection = () => {
  return (
    <section className="bg-[#EEF5FF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Area (already styled) */}
        <div className="text-left">
          <h2 className="text-[30px] font-extrabold uppercase text-[#0F1A4F] tracking-wider">PRICING</h2>
          <p className="mt-2 text-[40px] font-extrabold text-[#0F1A4F] tracking-tight">
            Cost-effective solutions
          </p>
          <p className="mt-4 font-normal text-[17px] leading-[30px] text-gray-500">
          EduNova offers flexible and cost-effective pricing models to fit your budget and learning needs.
         <br />
          Choose from our options to find the best value for your educational goals and start your journey
          <br />
           with ease.
        </p>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            // 2. The Card Container with precise border and radius
            <div
              key={plan.header}
              className="rounded-[13px] border-[3px] border-[#0830E4] overflow-hidden flex flex-col">
           {/* Conditional Header for non-featured plans */}
              {!plan.isFeatured && (
                <div className="bg-gray-50 p-4 border-b-[3px] border-card-border text-center">
                  <h3 className="font-medium text-[19px] leading-[30px] text-gray-800">
                    {plan.header}
                  </h3>
                </div>
              )}
              
              {/* Main content area */}
              <div className="bg-white p-8 flex-grow flex flex-col text-center">
                {/* Show the header inside the card ONLY if it IS featured */}
                {plan.isFeatured && (
                  <h3 className="font-medium text-[19px] leading-[30px] text-gray-800">
                    {plan.header}
                  </h3>
                )}
                
                <p className="font-bold text-[30px] leading-[30px] text-gray-900 mt-4">
                  {plan.price}
                </p>
                
                <ul className="mt-6 space-y-2 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-gray-500 mr-3 mt-2">•</span>
                      <span className="font-normal text-[18px] leading-[30px] text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex-grow"></div>
                
            <button aria-label="Get Started" className="transition-transform duration-200 hover:scale-105">
            <GetStartedButton />
          </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;   