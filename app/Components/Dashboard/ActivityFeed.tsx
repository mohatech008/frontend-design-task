// components/dashboard/ActivityFeed.tsx
import React from 'react';
import Image from 'next/image';
import ViewMoreButton from '../Ui/ViewMoreButton';
import CommunityHeartIcon from '../Icons/CommunityHeartIcon';
import TechSportIcon from '../Icons/TechSportIcon';
import TechstersIcon from '../Icons/TechstersIcon';
import ReactIcon from '../Icons/ReactIcon';

// Data for Communities
const communitiesData = [
  { name: 'TechSport', members: '22 Members', icon: <TechSportIcon />, bgUrl: '/bg-techsport.png' },
  { name: 'Techsters', members: '42 Members', icon: <TechstersIcon />, bgUrl: '/Techsters.png' },
  { name: 'React', members: '62 Members', icon: <ReactIcon />, bgUrl: '/bg-react.png' },
];

// Data for Assignments
const assignmentsData = [
  { name: 'Variables', course: 'Introduction to Javascript', status: 'INCOMPLETE', dueDate: '12/04/2025' },
  { name: 'Variables', course: 'Introduction to Javascript', status: 'COMPLETED', dueDate: '12/04/2025' },
];

// Helper for status badge styles
const getStatusClasses = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'bg-[#D2F8E1] text-[#00875A]';
      case 'INCOMPLETE': return 'bg-[#FFF2D7] text-[#FFAA04]';
      default: return 'bg-gray-100 text-gray-700';
    }
};

const ActivityFeed = () => {
  return (
    // 1. THE MAIN CARD CONTAINER with precise dimensions, background, and shadow
    <div className="rounded-2xl mt-10  shadow-sm w-full h-[236px] flex">
      
      {/* === LEFT SIDE: COMMUNITIES === */}
      <div className="w-[180px] bg-[#FFFFFF80] px-5 py-3 flex-shrink-0 rounded-l-2xl">
        <div className="flex items-center gap-2 mb-4">
          <CommunityHeartIcon className="w-6 h-6 text-black" />
          <h3 className="font-bold text-gray-800">Communities</h3>
        </div>
        <div className="space-y-4">
          {communitiesData.map(community => (
            <div key={community.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image src={community.bgUrl} alt="" layout="fill" className="object-contain" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center">{community.icon}</div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">{community.name}</p>
                  <p className="text-xs text-gray-400">{community.members}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === RIGHT SIDE: ASSIGNMENTS === */}
      <div className="flex-1 flex flex-col bg-[#FFFFFF] py-3 px-10 rounded-2xl">
        {/* Table Header */}
        <div className="flex gap-20 items-center border-b border-gray-200 pb-2">
          <div className="col-span-2 relative">
            <h3 className="font-semibold text-sm text-gray-800">Assignments</h3>
            <div className="absolute bottom-[-9px] left-0 w-10 h-0.5 bg-black"></div>
          </div>
          <span className="text-sm text-gray-400 font-medium">Course</span>
          <span className="text-sm text-gray-400 font-medium ml-10">Status</span>
          <div className="flex justify-end items-center gap-2">
            <span className="text-sm text-gray-400 font-medium">Due Date</span>
            <button className="text-gray-400 font-bold text-xl ml-10">•••</button>
          </div>
        </div>
        
        {/* Table Body */}
        <div className="mt-4 space-y-3 flex-grow">
          {assignmentsData.map((assignment, index) => (
            <div key={index} className="flex gap-10 items-center text-sm p-3 w-[85%] rounded-xl bg-gray-50 shadow-sm">
              <span className="font-semibold text-gray-700 col-span-2">{assignment.name}</span>
              <span className="text-gray-500">{assignment.course}</span>
              <span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusClasses(assignment.status)}`}>
                  {assignment.status}
                </span>
              </span>
              <span className="text-right text-gray-500">{assignment.dueDate}</span>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-auto pt-4 flex justify-start">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <ViewMoreButton />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;