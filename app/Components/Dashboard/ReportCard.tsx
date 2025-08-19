// components/dashboard/ReportCard.tsx
'use client';
import React, { useState, useEffect } from 'react';
import BarChartIcon from '../Icons/BarChartIcon';
//import ViewGradesButton from '../Ui/ViewGradeButton';

const ReportCard = () => {
  
  return (
    // Main card container with precise dimensions
    <div className="bg-[#FFFFFF00] rounded-2xl px-5 py-2 shadow-sm h-[250px] w-[250px]">
      {/* Title (aligned left) */}
      <h3 className="font-bold text-lg text-gray-800">Report Card</h3>
      <div className='bg-[#FFFFFF] rounded-2xl px-3 py-2'>
        <div className='flex'>
          <div className='flex flex-col gap-4 text-[#0A0A1F]'>
            <p>80</p>
            <p>55</p>
            <p>35</p>
            <p>10</p>
          </div>

          <div className='flex mt-8 ml-5 gap-2'>
             <div className='flex flex-col items-center'>
              <div className='flex gap-2'>
                <div className='bg-[#172B85] w-[20] h-26 '></div>
                <div className='bg-gray-500 h-5 w-[20] mt-21'></div>
              </div>
              <p className='text-[#0A0A1F]'>Aug</p>
             </div>

             <div className='flex flex-col items-center'>
              <div className='flex'>
                <div className='bg-[#172B85] w-[20] h-16 mt-10'></div>
                <div className='bg-gray-500 h-5 w-[20] mt-21'></div>
              </div>
              <p className='text-[#0A0A1F]'>Sep</p>
             </div>

             <div className='flex flex-col items-center'>
              <div className='flex gap-2'>
                <div className='bg-[#172B85] w-[20] h-26 '></div>
                <div className='bg-gray-500 h-10 w-[20] mt-16'></div>
              </div>
              <p className='text-[#0A0A1F]'>Oct</p>
             </div>
          </div>
        </div>
        <button className='bg-linear-to-b from-[#2C6DC2] via-[#172B85] to-[#0F1A4F] py-1 rounded-lg mt-1 w-full'>View Grades</button>
      </div>

    </div>
  );
};
export default ReportCard;