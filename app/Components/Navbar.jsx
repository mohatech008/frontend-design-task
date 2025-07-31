// components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Edu<span className="text-blue-600">NOVA.</span>
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">About Us</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Courses</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Blog</a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <a href="#" className="px-4 py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md hover:opacity-90">
              Sign in
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;