// components/icons/StarIcon.tsx (The New Version)
import React from 'react';

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z"
      fill="currentColor" // This allows us to color it with Tailwind
    />
  </svg>
);

export default StarIcon;