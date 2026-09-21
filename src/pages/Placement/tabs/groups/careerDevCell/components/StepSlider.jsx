import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./careerSliders.css";

const StepSlider = ({ steps }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1.15}
      spaceBetween={20}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 3200,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="career-step-slider pb-12"
    >

      {
        steps.map((step, index) => (

          <SwiperSlide key={step.title}>

            <div className="
              h-full
              bg-gray-50
              dark:bg-slate-900
              border
              border-gray-200
              dark:border-slate-700
              rounded-2xl
              p-6
              shadow-md
            ">

              <div className="
                w-10
                h-10
                rounded-full
                bg-red-600
                text-white
                font-bold
                text-sm
                flex
                items-center
                justify-center
                mb-5
              ">
                {index + 1}
              </div>

              <h4 className="
                font-bold
                text-gray-900
                dark:text-white
                mb-2
                leading-snug
              ">
                {step.title}
              </h4>

              <p className="
                text-sm
                text-gray-600
                dark:text-gray-400
                leading-6
              ">
                {step.description}
              </p>

            </div>

          </SwiperSlide>

        ))
      }

    </Swiper>
  );
};

export default StepSlider;
