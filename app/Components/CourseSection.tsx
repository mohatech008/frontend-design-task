// components/CoursesSection.tsx
import React from 'react';
import CourseCard from './CourseCard';

// Data for our courses
const coursesData = [
  {
    imageUrl: '/course-cloud.png',
    category: 'Cloud Computing Course',
    title: 'Mastering core cloud computing fundamentals',
    instructor: 'Kinsi Ali',
    price: 'Free',
    tag: 'Development',
    rating: 5.0,
    starCount: 5,
  },
  {
    imageUrl: '/course-swift.png',
    category: 'Programming Course',
    title: 'Swift programming for iOS development',
    instructor: 'Kinsi Ali',
    price: 'KES.2500',
    tag: 'Development',
    rating: 4.0,
    starCount: 4,
  },
  {
    imageUrl: '/course-devops.png',
    category: 'Cloud Computing Course',
    title: 'Mastering core cloud computing fundamentals',
    instructor: 'Kinsi Ali',
    price: 'KES.3200',
    tag: 'Development',
    rating: 5.0,
    starCount: 5,
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Title Area */}
        <h2 className="text-sm font-bold uppercase text-[#0F1A4F] tracking-wider">COURSES</h2>
        <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight">
          Dive into Our Courses
        </p>
              
<p className="mt-4 mx-auto text-lg text-gray-500">
  Explore Engaging Lessons, Tailored Programs, and Hands-on
  <br />
  Learning Experiences that Empower You to Unlock Your Full
  <br />
  Potential and Achieve Success in Your Educational Journey.
</p>
{/* Course Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;