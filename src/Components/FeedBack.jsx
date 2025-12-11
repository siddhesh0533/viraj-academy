import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../App.css";
import "swiper/css";

const TESTIMONIALS = [
  {
    name: "Lalit",
    course: "Feather Remedies Complete Course",
    time: "2mo ago",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    text:
      "Ye course dikhne me simple sa hai but bahot amazing cheezein padhayi gyi hai...Job ke liye kaafi time se struggle kar rahi thi. Ma'am ne ek flute ke andar feather rakhe aur regular puja...",
  },
  {
    name: "Visha***",
    course: "Hoodoo Marriage Commitment Spell Course",
    time: "2mo ago",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&q=80&auto=format&fit=crop",
    text:
      "Ma'am ka jo Marriage Oil ka formula hai na, wo ekdum unique hai. Pehli baar laga ki main real hoodoo ka knowledge seekh rahi hoon. Clients bhi kehte hain ki energy bohot soothing hai.",
  },
  {
    name: "Dimple",
    course: "Perfect Love Manifestation Technique Course",
    time: "2mo ago",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80&auto=format&fit=crop",
    text:
      "As a practicing energy healer, I was searching for a structured love manifestation process I could give to my clients. This course gave me exactly that.",
  },
  {
    name: "Aman",
    course: "Love Obsession Tarot Spell Course",
    time: "1mo ago",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
    text:
      "Bahut hi divine experience tha. Flames ka observation part sabse zyada interesting laga. Jab mere candle ka smoke black hua, maine...",
  },
  {
    name: "Eshani",
    course: "Black Magic Removal Mantra Sadhana",
    time: "2mo ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
    text:
      "As a tarot reader, I wanted to offer black magic removal for my clients, but every method seemed complicated. This course is pure gold!",
  },
  {
    name: "Irfan",
    course: "Making Bath Salt Course",
    time: "2mo ago",
    avatar:
      "https://images.unsplash.com/photo-1545996124-1b8f8ba0f5d2?w=200&q=80&auto=format&fit=crop",
    text:
      "I took the course for the oil + patchouli mix. Within a week, my clients felt a big mood shift. Highly recommended.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-8 sm:py-12 bg-white rounded-2xl mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold text-center text-[#290754] mb-6">
          Parents Feedback
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop={true}
          loopAdditionalSlides={50}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={12000}
          className="py-6 buttery-smooth-swiper"
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          allowTouchMove={true} // allow swipe on mobile
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <SwiperSlide key={idx}>
              <article className="h-full rounded-2xl border border-[#f3d7eb] p-4 sm:p-6 md:p-6 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl text-[#5a004a]">
                          {t.name}
                        </h3>
                        <div className="text-sm sm:text-base text-[#6b2458]">{t.course}</div>
                      </div>
                      <div className="text-xs sm:text-sm text-[#a88aa8] mt-1 sm:mt-0">{t.time}</div>
                    </div>

                    <div className="mt-3 text-sm sm:text-base text-[#7f5678]">
                      <div className="font-semibold text-[#5a004a]">
                        Course: <span className="underline">{t.course}</span>
                      </div>
                      <p className="mt-1 leading-5 sm:leading-6 line-clamp-3">{t.text}</p>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center text-sm sm:text-base text-[#a88aa8]">
          Showing real reviews from our learners
        </div>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
