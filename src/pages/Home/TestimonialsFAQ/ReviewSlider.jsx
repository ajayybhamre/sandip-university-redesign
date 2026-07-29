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
          <div
            className="
            relative
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            border
            border-gray-100
            overflow-hidden
            group
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-2xl
            "
          >
            {/* Quote Icon */}

            <div
              className="
              absolute
              top-6
              right-6
              w-14
              h-14
              rounded-full
              bg-red-100
              flex
              items-center
              justify-center
              "
            >
              <HiMiniChatBubbleLeftRight
                className="text-red-600 text-2xl"
              />
            </div>

            {/* Rating */}

            <div className="flex gap-1 mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <HiStar
                  key={i}
                  className="text-yellow-400 text-xl"
                />
              ))}
            </div>

            {/* Review */}

            <p className="text-gray-600 leading-8 text-lg">
              "{item.review}"
            </p>

            {/* Student */}

            <div className="flex items-center gap-4 mt-8">

              <img
                src={item.image}
                alt={item.name}
                className="
                w-16
                h-16
                rounded-full
                object-cover
                border-4
                border-red-100
                "
              />

              <div>

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.designation}
                </p>

                <span className="text-red-600 text-sm font-semibold">
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