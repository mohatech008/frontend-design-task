// components/ui/ToggleButton.tsx
'use client';

import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true); // Default to 'on' as in the design

  return (
    <button onClick={() => setIsOn(!isOn)}>
      <svg
        width="34"
        height="20"
        viewBox="0 0 34 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The background of the toggle */}
        <rect
          width="34"
          height="20"
          rx="10"
          fill="#006ED3"
          fillOpacity={isOn ? '0.4' : '0.1'} // Change opacity based on state
          className="transition-all"
        />
        {/* The moving knob */}
        <rect
          x={isOn ? 16 : 2} // Change x position based on state
          y="2"
          width="16"
          height="16"
          rx="8"
          fill="white"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;