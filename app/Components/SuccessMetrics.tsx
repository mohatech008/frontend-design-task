import React from 'react';
const stats = [
  { value: '300+', label: 'Courses Offered' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '100+', label: 'Mentor Experts' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '20+', label: 'Years Of Experience' },
];

const StatsBar = () => {
  return (
    <div className="bg-white">
      {/* Centered content wrapper */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Flex container for the stats with a precise gap */}
        <div className="flex flex-wrap justify-center items-center gap-x-[55px] gap-y-5">
          {stats.map((stat, index) => (
            // Using React.Fragment to handle keys for items with dividers
            <React.Fragment key={index}>
              {/* Individual stat item */}
              <div className="text-center">
                <p className="text-4xl font-bold text-[#000000]">{stat.value}</p>
                <p className="text-sm text-[#000000] mt-1">{stat.label}</p>
              </div>

              {/* Vertical divider, not shown after the last item */}
              {index < stats.length - 1 && (
                <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;