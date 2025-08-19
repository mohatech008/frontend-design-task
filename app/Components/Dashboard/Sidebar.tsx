'use client'
import React from 'react';
import Image from 'next/image';
import ToggleSwitch from '../Ui/ToggleSwitch';

// Placeholder for icons
const Icon = () => <div className="w-6 h-6 bg-gray-500 rounded-md"></div>;

const Sidebar = () => {
  return (
    <div className="w-[228px] h-[150vh] bg-[#F2F2F2] text-white flex flex-col p-4">
        {/* === ADD THIS NEW DIV FOR WINDOW CONTROLS === */}
      <div className="flex space-x-2 mb-8">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {/* ============================================== */}
      {/* User Profile */}
      <div className="flex items-center gap-4 p-2 bg-white ">
        <Image
          src="/Mohamed passport.jpeg" // Using a placeholder avatar
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-bold text-[#0A0A1F]">Mohamed Abdi</p>
          <p className="text-sm text-gray-400">Student</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-grow mt-10">
        <ul className="space-y-2">
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 p-3 rounded-[6px] text-white font-semibold 
                         bg-gradient-to-r from-[#172B85] via-[#559BED] to-[#172B85] 
                         shadow-[0_20px_24px_-12px_rgba(45,2,50,0.08)]"
            >
              <Image src="/icon-dashboard.png" alt="Dashboard" width={24} height={24} />
              Dashboard
            </a>
          </li>
           <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
              <Image src="/chart.png" alt="Chat" width={24} height={24} />
              Chat
            </a>
          </li>
           <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
              <Image src="/icon-discover.png" alt="Discover" width={24} height={24} />
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
              <div className="flex items-center gap-3">
                <Image src="/icon-community.png" alt="Community" width={24} height={24} />
                Community
              </div>
              <span className="bg-blue-500 text-xs text-white px-2 py-0.5 rounded-full">3</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
              <Image src="/icon-events.png" alt="Events" width={24} height={24} />
              Events
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
              <Image src="/icon-analytics.png" alt="Analytics" width={24} height={24} />
              Analytics
            </a>
          </li>
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
            <div className="flex items-center gap-3">
                <Image src="/icon-lightmode.png" alt="Light Mode" width={24} height={24} /> 
                Light Mode
            </div>
            {/* Simple toggle placeholder */}
            <ToggleSwitch/>
        </div>
        </ul>
      </nav>

      {/* Light Mode & Bottom Nav */}
      <div>
        <ul>
            <li>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-[#0A0A1F]">
                <Image src="/icon-settings.png" alt="Settings" width={24} height={24} />
                Settings
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-red-400">
                <Image src="/icon-logout.png" alt="Log out" width={24} height={24} /> 
                Log out
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;