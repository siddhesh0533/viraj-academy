import { Outlet, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";

export default function AppLayout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4">

      {/* Header */}
      <div className="rounded-2xl bg-white p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 shadow">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#D9FF43] rounded-full"></span>
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#8FFFDA] rounded-full"></span>
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#AFC8FF] rounded-full"></span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#260038] ml-1">Viraj_Academy</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 lg:gap-8 font-semibold text-sm sm:text-base md:text-lg">
          <Link to="/" className="hover:text-[#290754] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#290754] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#290754] transition-colors">Contact</Link>
        </nav>

        {/* Button */}
        <button
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-2 lg:mt-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#290754] text-white hover:scale-105 transition-all text-sm sm:text-base"
        >
          Explore Courses
        </button>
      </div>

      {/* Main Content */}
      <main className="mt-6">
        <Outlet />
      </main>
    </div>
  );
}
