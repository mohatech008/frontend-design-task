// app/dashboard/page.tsx
'use client';
import React, { useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar'; // Import our new sidebar
import DashboardHeader from '../Components/Dashboard/DashboardHeader';
import NotificationBellIcon from '../Components/Icons/NotificationIcon';
import CurrentCourses from '../Components/Dashboard/CurrentCourses';
import StatisticsChart from '../Components/Dashboard/StatisticsChart';
import WeeklyInsights from '../Components/Dashboard/WeeklyInsights';
import ReportCard from '../Components/Dashboard/ReportCard';
import ActivityFeed from '../Components/Dashboard/ActivityFeed';
import NotificationsPanel from '../Components/Dashboard/NotificationsPanel';
  const DashboardPage = () => {

  return (
    // Main page container with the light grey background
    <div className="flex bg-[#F2F2F2] p-10 pb-20">
      <Sidebar />
    <div className="w-[60%]">
      <DashboardHeader/>
      <div className="mt-3">
      <CurrentCourses/>
      </div>
      <div className="flex ml-10 gap-2">
        <StatisticsChart/>
        <WeeklyInsights/>
        <ReportCard/>
      </div>
      <div>
        <ActivityFeed/>
      </div>
    </div>
    <div className="">
      <NotificationsPanel />
    </div>
    
     
    </div>
  );
};

export default DashboardPage;