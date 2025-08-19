// components/icons/BarChartIcon.tsx
import React from 'react';

// The component now accepts props for the SVG paths and dimensions
type BarChartIconProps = {
  svgPaths: React.ReactNode;
  width: number;
  height: number;
  viewBox: string;
};

const BarChartIcon = ({ svgPaths, width, height, viewBox }: BarChartIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {svgPaths}
  </svg>
);

export default BarChartIcon;