// components/icons/StatsGraphIcon.tsx
import React from 'react';

const StatsGraphIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    // The viewBox might need slight adjustment if the content is clipped
    viewBox="0 0 229 117"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.40723 90C6.40723 90 19.2206 69.6448 37.0301 92.9972C48.3979 105.508 57.8711 73.9341 71.6072 78.1042C85.3432 82.2743 102.633 118.453 108.079 78.1042C114.989 26.9011 130.496 39 138.393 59.041C151.356 91.9402 163.005 92 173.917 56.0623C182.307 28.4307 193.811 57.8495 203.758 63.211C223.178 73.6788 220.878 28.4355 221.283 9"
      stroke="#318E87"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      opacity="0.1"
      d="M7.2002 110.997C7.2002 110.997 22.3923 87.6448 40.2018 110.997C51.5696 123.508 61.0427 91.9341 74.7788 96.1042C88.5149 100.274 105.805 136.453 111.25 96.1042C118.161 44.9011 132.033 52.573 141.565 77.041C153.42 107.475 167.034 112 177.089 74.0623C184.526 46 196.982 75.8495 206.929 81.211C226.349 91.6788 226.428 46.4355 226.833 27"
      stroke="#318E87"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* The SVG already includes fill="white" on the circles, so we use a path */}
    <path
      d="M200.668 1C202.101 1.00025 203.632 2.56223 203.632 5C203.632 7.43777 202.101 8.99975 200.668 9C199.235 9 197.703 7.43797 197.703 5C197.703 2.56203 199.235 1 200.668 1Z"
      stroke="#318E87"
      strokeWidth="2"
      fill="white"
    />
    <path
      d="M4.0293 89C5.46253 89.0003 6.99316 90.5622 6.99316 93C6.99316 95.4378 5.46253 96.9997 4.0293 97C2.59597 97 1.06445 95.438 1.06445 93C1.06445 90.562 2.59597 89 4.0293 89Z"
      stroke="#318E87"
      strokeWidth="2"
      fill="white"
    />
  </svg>
);

export default StatsGraphIcon;