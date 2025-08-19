// components/Navbar.tsx
import React from 'react';
import Link from 'next/link'; 
import LightbulbIcon from './Icons/LightbulbIcon';
import SignInButton from './Ui/SignInButton';
const Navbar = () => {
  return (
      <div className="bg-white px-24 max-w-7xl">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
         <div className="flex-shrink-0">
         <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
          EduN
          <LightbulbIcon className="mx-px"/>
          <span className="text-yellow-400">VA.</span>
          </a>
          </div>

          {/* Navigation Links*/}
           <div className="hidden md:flex md:items-center md:gap-x-10">
            <a href="#" className="text-[#000000] font-bold border-b-2 border-blue-600 pb-1">Home</a>
            <a href="#" className="text-[#000000] font-bold hover:text-gray-700">About Us</a>
            <a href="#" className="text-[#000000] font-bold hover:text-gray-700">Courses</a>
            <a href="#" className="text-[#000000] font-bold hover:text-gray-700">Contact</a>
            <a href="#" className="text-[#000000] font-bold hover:text-gray-700">Blog</a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Link href="/welcome">
    <button aria-label="Sign in" className="transition-transform duration-200 hover:scale-105">
        <SignInButton />
    </button>
    </Link>
     </div>
        </div>
      </div>
  );
};

export default Navbar;