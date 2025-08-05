// components/CourseCard.tsx
import React from 'react';
import Image from 'next/image';
import StarIcon from './Icons/StarIcon';

// Define the props the card will accept
type CourseCardProps = {
  imageUrl: string;
  category: string;
  title: string;
  instructor: string;
  price: string;
  tag: string;
  rating: number;
  starCount: number;
};

const CourseCard = ({ imageUrl, category, title, instructor, price, tag, rating, starCount }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} layout="fill" className="object-cover" />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="text-lg font-bold text-gray-800 mt-1 truncate">{title}</h3>
        
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-600">{instructor}</p>
          <p className="text-lg font-bold text-brand-blue">{price}</p>
        </div>
        {/* Bottom Row */}
        <div className="flex justify-between items-center">
          <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-black">{rating.toFixed(1)}</span>
            <div className="flex text-[#FF9100]">
              {[...Array(starCount)].map((_, i) => <StarIcon key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;