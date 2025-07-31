import React from 'react';
const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} 
    >
      <rect
        x="2.48614"
        y="2.04803"
        width="1.64228"
        height="17.8275"
        rx="0.821142"
        transform="rotate(-33.63 2.48614 2.04803)"
        fill="currentColor"
      />
      <rect
        x="1.0767"
        y="17.2256"
        width="1.64228"
        height="7.77039"
        rx="0.821142"
        transform="rotate(-67.0019 1.0767 17.2256)"
        fill="currentColor" 
      />
      <rect
        x="19.1545"
        y="5.02307"
        width="1.64228"
        height="7.77039"
        rx="0.821142"
        transform="rotate(11.1592 19.1545 5.02307)"
        fill="currentColor" 
      />
    </svg>
  );
};

export default SparkleIcon;