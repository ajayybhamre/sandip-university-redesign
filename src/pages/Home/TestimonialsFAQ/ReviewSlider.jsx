import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { HiStar, HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/pagination";
import reviews from "./reviewData";

export default function ReviewSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="pb-12"
    >
      {reviews.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative bg-slate-900 dark:bg-zinc-900 rounded-[32px] p-8 sm:p-10 border border-slate-800 dark:border-zinc-800 shadow-2xl text-white transition-all duration-500 hover:border-[#C8102E]/60 hover:-translate-y-1 group">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-[#C8102E]/20 border border-red-500/30 flex items-center justify-center">
              <HiMiniChatBubbleLeftRight className="text-[#C8102E] text-2xl" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <HiStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>

            {/* Review */}
            <p className="text-slate-200 leading-relaxed text-base sm:text-lg font-medium mb-8">
              "{item.review}"
            </p>

            {/* Student */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#C8102E]"
              />

              <div>
                <h3 className="font-bold text-base text-white">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {item.designation}
                </p>
                <span className="text-[#C8102E] text-xs font-bold mt-0.5 block">
                  {item.company}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}