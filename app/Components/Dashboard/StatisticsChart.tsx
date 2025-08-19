// components/dashboard/StatisticsChart.tsx
'use client'; 

import React from 'react';
import StatsGraphIcon from '../Icons/StatsGraphIcon';

const labels = [
    { top: '4', bottom: '0' },
    { top: '5', bottom: '0' },
    { top: '6', bottom: '0' },
    { top: '7', bottom: '0' },
    { top: '8', bottom: '0' },
    { top: '9', bottom: '0' },
    { top: '10', bottom: '0' },
];

const StatisticsChart = () => {
  return (
   <div className="bg-white rounded-2xl p-6 shadow-sm h-[250px] w-[300px] flex flex-col">
      <h3 className="font-bold text-lg text-gray-800">Statistics</h3>
      
      {/* Main container for the chart */}
      <div className="flex-grow flex flex-col">
        {/* Top Labels */}
        <div className="flex justify-between px-2 text-center text-gray-400 text-xs">
            {labels.map(label => (
                <div key={label.top}>
                    <p>{label.top}</p>
                    <p>{label.bottom}</p>
                </div>
            ))}
        </div>

        {/* Graph Area */}
        <div className="relative flex-grow">
          {/* Vertical Lines Container */}
          <div className="absolute inset-0 flex justify-between px-2">
            {labels.map(label => (
              // Each line is now a hanging element
              <div key={label.top} className="w-px h-[85%] bg-gray-200"></div>
            ))}
          </div>

          {/* The Graph SVG, layered on top */}
          <div className="absolute inset-0">
            <StatsGraphIcon className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;