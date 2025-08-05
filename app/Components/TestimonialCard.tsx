// components/TestimonialCard.tsx
import React from 'react';
import Image from 'next/image';
import QuoteIcon from './Icons/QuotationIcon';

type TestimonialCardProps = {
  imgSrc: string;
  quote: string;
  name: string;
  title: string;
};

const TestimonialCard = ({ imgSrc, quote, name, title }: TestimonialCardProps) => {
  return (
    // Main container with relative positioning for the floating image
    <div className="relative pt-10">
      {/* The card itself */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
        {/* Profile picture - positioned absolutely */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20">
          <Image
            src={imgSrc}
            alt={name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
        
        {/* Quote text */}
              
      <p className="mt-4 font-normal text-[15px] leading-[20px] text-gray-600">{quote}</p>
       {/* Name and Title */}
        <div className="mt-6 text-left">
                
<p className="font-bold text-[15px] leading-[20px] text-gray-900">{name}</p>
<p className="font-bold text-[15px] leading-[20px] text-gray-500">{title}</p>
        </div>
        
        {/* Decorative Quote Icon */}
        <div className="absolute bottom-4 right-6">
          <QuoteIcon />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;