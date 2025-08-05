// components/Footer.tsx
import React from 'react';
import LightbulbIcon from './Icons/LightbulbIcon';
import TwitterIcon from './Icons/TwitterIcon';
import LinkdinIcon from './Icons/LinkdinIcon';
import MailIcon from './Icons/MailIcon';
import { MailCheck } from 'lucide-react';

const Footer = () => {
  // Placeholder for social icons
  const SocialIcon = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-md">
      {children}
    </a>
  );

  return (
    <footer className="bg-white">
      <div className="max-w-4xl mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
          {/* Column 1: Logo and Socials */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-baseline text-2xl font-bold text-gray-800 p-4 -ml-4">
              EduN
              <LightbulbIcon className="mx-px" />
              <span className="text-blue-600">VA.</span>
            </a>
            <p className="mt-4 font-medium text-xs leading-[13px] text-gray-500 max-w-xs">
             EduNova is an innovative online learning platform offering a diverse range of courses.
            <br />
            We provide expert instruction, interactive resources, and personalized support to help you achieve your learning goals and advance your career.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialIcon>O</SocialIcon>
              <TwitterIcon>T</TwitterIcon>
              <LinkdinIcon>in</LinkdinIcon>
              <MailIcon>M</MailIcon>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Courses</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contacts</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Guidelines</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;