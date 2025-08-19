// components/dashboard/DashboardHeader.tsx
import React from 'react';
import Image from 'next/image';
import SeparatorIcon from '../Icons/SeparatorIcon';

// Placeholder icons - we can replace these with your PNGs/SVGs later
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

const DashboardHeader = () => {
  return (
    <div className="bg-white rounded-[10px] p-4 flex justify-between items-center w-full h-[68px]">
      {/* Left Side: Welcome Message */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12  rounded-lg flex items-center justify-center">
            <Image
              src="/hand.png" // The path to your image
              alt="Waving hand"
              width={32} // Adjust size as needed
              height={32} // Adjust size as needed
            />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
          <p className="text-sm text-gray-500">Dashboard</p>
        </div>
      </div>
      
      {/* Right Side: Search and Notifications */}
      <div className="flex items-center gap-6">
        <button className="p-1 text-blue-900 hover:text-blue-700">
            <SeparatorIcon />
        </button>
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
      </div>
      </div>
  );
};

export default DashboardHeader;