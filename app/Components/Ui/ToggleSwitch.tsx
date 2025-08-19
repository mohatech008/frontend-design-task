// components/ui/ToggleSwitch.tsx
'use client';

import React, { useState } from 'react';

const ToggleSwitch = () => {
  // State to track whether the toggle is on or off
  const [isOn, setIsOn] = useState(true); // Default to 'on' as in the design

  // Function to handle the click event
  const handleToggle = () => {
    setIsOn(!isOn); // Invert the current state
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex flex-shrink-0 h-6 w-12 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        isOn ? 'bg-[#0F1A4F]' : 'bg-gray-600'
      }`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        // This is the moving knob
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;