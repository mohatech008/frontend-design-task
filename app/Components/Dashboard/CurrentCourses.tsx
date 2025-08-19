// components/dashboard/CurrentCourses.tsx
import React from 'react';
const coursesData = [
  {
    title: 'Javascript',
    subtitle: 'Introduction',
    iconUrl: '/icon-js.png',
    progress: 75,
    bgUrl: '/card-bg-js.png',
  },
  {   
    title: 'Python',
    subtitle: 'Fundamentals',
    iconUrl: '/icon-python.png',
    progress: 50,
    bgUrl: '/card-bg-python.png',
  },
  {
    title: 'Cloud Computing',
    subtitle: 'Fundamentals',
    iconUrl: '/icon-cloud.png',
    progress: 25,
    bgUrl: '/card-bg-cloud.png',
  },
  {
    title: 'Data Structures',
    subtitle: 'Introduction',
    iconUrl: '/icon-data.png',
    progress: 75,
    bgUrl: '/card-bg-data.png',
  },
];

const CurrentCourses = () => {

  const circumference = 2 * Math.PI * 18;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {coursesData.map((course, index) => (
        <div className='w-[470] h-60 bg-cover bg-center flex px-10' key={index} style={{ backgroundImage: `url(${course.bgUrl})` }}>
          <div className='ml-5 mt-10'>
            <h1 className='text-2xl font-bold text-white'>{course.title}</h1>
            <p className='text-lg text-white font-medium'>{course.subtitle}</p>
            <div className='relative w-17 h-17 mt-2'>
              <svg viewBox="0 0 40 40">
              <circle className="stroke-current text-white/30" strokeWidth="4" fill="transparent" r="18" cx="20" cy="20" />
              <circle
                className="stroke-current text-white"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (course.progress / 100) * circumference}
                strokeLinecap="round"
                fill="transparent"
                r="18"
                cx="20"
                cy="20"
                transform="rotate(-90 20 20)"
              />
            </svg>
            <span className="absolute left-4 top-5 text-lg text-white">
              {course.progress}%
            </span>
            </div>
          </div>
          <img src={course.iconUrl} alt="" className='w-38 h-38 mt-10 ml-auto'/>
        </div>
      ))}
    </div>
  );
};

export default CurrentCourses;