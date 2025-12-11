import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">

        {/* Top Shapes + Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          
          {/* Shapes */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#5D00FF] rounded-xl"></div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-[#CFE0FF] rounded-full"></div>
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#D9FF43] rounded-xl"></div>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#D9FF43] rounded-full"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#8FFFDA] rounded-full"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#AFC8FF] rounded-full"></span>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#260038] ml-1">Viraj_Academy</h1>
          </div>
        </div>

        {/* Navigation + Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 sm:mt-16 text-[#260038] text-base sm:text-lg">

          {/* Left Nav */}
          <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
            <Link to="/" className="hover:text-[#5D00FF] transition">Home</Link>
            <Link to="/about" className="hover:text-[#5D00FF] transition">About</Link>
            <Link to="/courses" className="hover:text-[#5D00FF] transition">Courses</Link>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
            <Link to="/refund-policy" className="hover:text-[#5D00FF] transition">Refund Policy</Link>
            <Link to="/accessibility" className="hover:text-[#5D00FF] transition">Accessibility Statement</Link>
            <Link to="/privacy-policy" className="hover:text-[#5D00FF] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#5D00FF] transition">Terms & Conditions</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
            <Link to="/" className="hover:text-[#5D00FF] transition">YouTube</Link>
            <Link to="/" className="hover:text-[#5D00FF] transition">Facebook</Link>
            <Link to="/" className="hover:text-[#5D00FF] transition">LinkedIn</Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-2 sm:gap-3 text-center md:text-right">
            <p>© 2035 by Revenew.</p>
            <p>
              Built by{" "}
              <a href="#" className="underline text-[#330062] hover:text-[#5D00FF] transition">
                Siddhesh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
