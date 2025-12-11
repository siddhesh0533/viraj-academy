import React from 'react'

const CourseCard = () => {
  return (
    <div
      className="group relative min-w-[340px] max-w-[340px] bg-white rounded-2xl 
                 border border-[#c9a5d9] shadow-sm overflow-hidden cursor-pointer mt-8"
    >
      {/* ---------- IMAGE AREA ---------- */}
      <div className="relative">
        
        {/* Course Image */}
        <img
          src="public\ssc_board.jpg"
          className="h-44 w-full object-cover rounded-t-2xl"
        />

        {/* Top Rated Badge */}
        <span className="absolute top-3 right-3 bg-[#F4C343] text-[12px] font-semibold 
                         px-3 py-[3px] rounded-md text-purple-900 shadow">
          Top Rated
        </span>

        {/* ---------- HOVER OVERLAY ---------- */}
        <div
          className="absolute inset-0 bg-black/60 opacity-0
                     group-hover:opacity-100 transition-all duration-300 rounded-t-2xl flex 
                     flex-col justify-center items-center gap-3"
        >
          <div className="text-white text-sm flex items-center gap-2">
            <span>⏱</span> <span>2 Hours</span>
          </div>

          <button className="px-5 py-2 bg-white text-purple-900 rounded-lg font-semibold shadow">
            Add to Cart
          </button>

          <button className="px-5 py-2 bg-transparent border border-white text-white rounded-lg">
            View More
          </button>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="p-4">
        <h3 className="text-[20px] font-semibold text-[#290754] leading-snug mb-2">
          SSC Board
        </h3>

        <p className="text-[#9A6AA1] text-[15px] mb-4">
          Pramod Patil
        </p>

        <div className="border-b border-[#d9c1e6] mb-4"></div>

        <div className="flex items-center gap-1 text-[#290754] text-[18px] mb-2">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through text-[15px]">
            ₹29,999
          </span>
          <span className="text-[#5F1A6D] font-bold text-[22px]">
            ₹15,999
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;


