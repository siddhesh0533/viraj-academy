import React from 'react';
import "../App.css";
import CourseCard from './CourseCard';

const Courses = () => {
  return (
    <div className="mt-8 bg-white rounded-2xl px-4 sm:px-6 md:px-10 py-8 md:py-10">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold text-[#290754] text-center mb-6">
        Our Courses
      </h2>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
