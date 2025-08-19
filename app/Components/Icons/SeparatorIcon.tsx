// components/icons/SeparatorIcon.tsx
import React from 'react';

const SeparatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="23"
    viewBox="0 0 16 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 17L4.5359 14L11.4641 14L8 17Z" fill="currentColor" />
    <path d="M8 6L11.4641 9L4.5359 9L8 6Z" fill="currentColor" />
  </svg>
);

export default SeparatorIcon;