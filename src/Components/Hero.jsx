import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 sm:p-10 md:p-16 mt-8 bg-white rounded-2xl">
      
      {/* Left text content */}
      <div className="mb-10 lg:mb-0 lg:w-1/2 flex flex-col justify-center">
        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#290754] leading-tight">
          Rich Your Full
        </h1>
        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#290754] leading-tight">
          Potential
        </h1>

        <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-sm sm:text-base md:text-lg text-[#290754] max-w-md">
          Master finance with professional-led courses.
        </p>

        <button
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-[#290754] text-white hover:scale-105 transition-all w-max"
        >
          Explore Courses
        </button>
      </div>

      {/* Right grid shapes */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 justify-items-center">
        {/* ROW 1 */}
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full bg-blue-300 float-animation"></div>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg bg-purple-600 float-animation float-delay-1"></div>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg bg-purple-900 float-animation float-delay-2"></div>

        {/* ROW 2 */}
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg bg-purple-900 float-animation float-delay-3"></div>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full bg-lime-300 float-animation"></div>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg bg-blue-300 float-animation float-delay-1"></div>

        {/* ROW 3 */}
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg bg-purple-600 float-animation float-delay-2"></div>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full bg-green-300 float-animation float-delay-3"></div>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg bg-purple-900 float-animation"></div>
      </div>

    </div>
  );
};

export default Hero;
