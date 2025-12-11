import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const mentors = [
  {
    name: "Pramod Patil",
    exp: "35 yrs",
    courses: 43,
    role: "Spiritual Strategist | Global Spellcaster",
    img: "public/rdj.jpg",
  },
  {
    name: "Abhishek Ji",
    exp: "12 yrs",
    courses: 72,
    role: "Astrologer | Occult Grandmaster",
    img: "public/cris.jpg",
  },
  {
    name: "Dr. Maneesh",
    exp: "12 yrs",
    courses: 35,
    role: "Cosmic Energy Healer | Reiki Grandmaster",
    img: "src\\assets\\react.svg",
  },
  {
    name: "Nayraa Ji",
    exp: "12 yrs",
    courses: 59,
    role: "Spells | Healing | Tarot",
    img: "src\\assets\\react.svg",
  },
  {
    name: "Rittika Ji",
    exp: "15 yrs",
    courses: 43,
    role: "Spiritual Strategist | Global Spellcaster",
    img: "src\\assets\\react.svg",
  },
];

export default function MentorsCarousel() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-white rounded-2xl mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold text-[#290754] text-center md:text-left mb-4 md:mb-0">
          Mentors
        </h2>

        <div className="flex gap-4">
          <button className="mentor-prev w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 shadow flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#46224a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="mentor-next w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 shadow flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="#46224a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={{ nextEl: ".mentor-next", prevEl: ".mentor-prev" }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 12 },
          480: { slidesPerView: 1.2, spaceBetween: 14 },
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 22 },
          1024: { slidesPerView: 3, spaceBetween: 26 },
        }}
      >
        {mentors.map((m, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <div
              className="
              relative 
              w-[260px] sm:w-[300px] md:w-[340px]
              min-h-[440px] sm:min-h-[480px] md:min-h-[520px]
              bg-linear-to-b from-[#2b0422] to-[#140014]
              text-white shadow-2xl rounded-b-2xl 
              overflow-hidden px-4 pb-8
            "
            >
              {/* Top Decorative Section */}
              <div
                className="
                absolute 
                -top-12 sm:-top-16 
                left-1/2 -translate-x-1/2
                w-full max-w-[340px]
                h-[220px] sm:h-[260px] md:h-[300px]
                bg-linear-to-b from-[#2b0422] to-transparent
                rounded-b-full flex items-start justify-center
              "
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              >
                <div className="absolute inset-0 bg-[url('/images/mandala.svg')] bg-center bg-cover opacity-20" />

                <img
                  src={m.img}
                  alt={m.name}
                  className="
                    w-60 h-60
                    sm:w-60 sm:h-60
                    md:w-80 md:h-80
                    object-cover rounded-full 
                    mt-6 sm:mt-8
                  "
                  style={{ objectPosition: "center 20%" }}
                />

                {/* Exp Badge */}
                <div
                  className="
                  absolute 
                  right-4 sm:right-6 
                  top-24 sm:top-32 
                  w-16 h-16 sm:w-20 sm:h-20 
                  rounded-full
                  bg-linear-to-br from-[#caa0a9] to-[#6f5a6a]
                  flex flex-col items-center justify-center
                  text-white shadow-lg text-center
                "
                >
                  <div className="text-[10px] sm:text-xs opacity-80">Exp</div>
                  <div className="text-base sm:text-lg font-semibold">
                    {m.exp}
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-3 right-3 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#f0d7e8]">
                  ✧ {m.name} ✧
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#e6cfe0]">
                  No. of courses: {m.courses}
                </p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#d9bfd9] leading-relaxed min-h-12">
                  {m.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
