import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HiOutlineCheckCircle } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./careerSliders.css";

const ListSlider = ({ groups }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1.05}
      spaceBetween={20}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: { slidesPerView: 2 },
      }}
      className="career-list-slider pb-12"
    >

      {
        groups.map((group) => (

          <SwiperSlide key={group.title}>

            <div className="
              h-full
              bg-gray-50
              dark:bg-slate-900
              border
              border-gray-200
              dark:border-slate-700
              rounded-2xl
              p-6
              md:p-7
              shadow-md
            ">

              <h4 className="
                font-bold
                text-gray-900
                dark:text-white
                mb-5
                pb-4
                border-b
                border-gray-200
                dark:border-slate-700
              ">
                {group.title}
              </h4>

              <ul className="
                space-y-2.5
                max-h-72
                overflow-y-auto
                pr-2
              ">

                {
                  group.items.map((item) => (

                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-2.5
                        text-sm
                        text-gray-600
                        dark:text-gray-300
                        leading-6
                      "
                    >

                      <HiOutlineCheckCircle className="
                        text-red-600
                        w-4 h-4
                        shrink-0
                        mt-0.5
                      " />

                      <span>{item}</span>

                    </li>

                  ))
                }

              </ul>

            </div>

          </SwiperSlide>

        ))
      }

    </Swiper>
  );
};

export default ListSlider;
