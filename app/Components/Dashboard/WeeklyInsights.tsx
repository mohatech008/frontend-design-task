// components/dashboard/WeeklyInsights.tsx
'use client'; 

import React, { useState } from 'react';
import ToggleButton from '../Ui/ToggleButton';
import ActivityChartIcon from '../Icons/ActivityChartIcon';

const WeeklyInsights = () => {

  return (
    // Main card with precise dimensions
   <div className="bg-white rounded-2xl p-6 shadow-sm h-[250px] w-[250px] flex flex-col">
      
      <h3 className="font-normal text-sm leading-none tracking-[0.02em] text-[#0A0A1F]">Weekly Insights</h3>
{/* Data points */}
<div className="my-4 flex justify-around items-center border-b border-gray-200 pb-4">
  {/* "This Week" frame */}
  <div className="text-center">
    <p className="font-lato font-normal text-[9px] leading-none tracking-[0.02em] text-gray-400 opacity-50 whitespace-nowrap">
      This Week
    </p>
       
<p className="font-normal text-sm leading-none tracking-[0.02em] text-black mt-1">+72.0%</p>
  </div>

  {/* Vertical Divider */}
  <div className="h-8 w-px bg-gray-200"></div>

  {/* "Last Week" frame */}
  <div className="text-center">
    <p className="font-lato font-normal text-[9px] leading-none tracking-[0.02em] text-gray-400 opacity-50 whitespace-nowrap">
      Last Week
    </p>
        
<p className="font-normal text-sm leading-none tracking-[0.02em] text-black mt-1">-60.0%</p>
  </div>
</div>
      {/* Toggle */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <ToggleButton/>
        <span>Show in chart form</span>
      </div>

      {/* Activity Section */}
      <div className="mt-auto flex items-end justify-between">
        {/* Time Value */}
        <div>
          <p className="text-xs text-gray-400">Activity</p>
          <p className="font-bold text-gray-800">
            14<span className="text-sm font-medium">H</span> 15<span className="text-sm font-medium">m</span>
          </p>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end gap-1.5 h-12">
          <ActivityChartIcon/>
        </div>
      </div>
    </div>
  );
};

export default WeeklyInsights;