import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

// Import your images
import engineering from "../../../assets/images/ashwini.webp";
import management from "../../../assets/images/pawan.png";
import pharmacy from "../../../assets/images/gayatri.png";
import law from "../../../assets/images/pawan.png";
import science from "../../../assets/images/gayatri.png";
import agriculture from "../../../assets/images/ashwini.webp";

export default function Programs() {
  const programs = [
    {
      id: 1,
      image: engineering,
      title: "Engineering & Technology",
      degree: "B.Tech | M.Tech",
      duration: "Duration : 4 Years",
    },
    {
      id: 2,
      image: management,
      title: "Management Studies",
      degree: "BBA | MBA",
      duration: "Duration : 3 Years",
    },
    {
      id: 3,
      image: pharmacy,
      title: "Pharmacy",
      degree: "B.Pharm | M.Pharm",
      duration: "Duration : 4 Years",
    },
    {
      id: 4,
      image: law,
      title: "Law",
      degree: "BA LLB | LLB | LLM",
      duration: "Duration : 5 Years",
    },
    {
      id: 5,
      image: science,
      title: "Science",
      degree: "B.Sc | M.Sc",
      duration: "Duration : 3 Years",
    },
    {
      id: 6,
      image: agriculture,
      title: "Agriculture",
      degree: "B.Sc Agriculture",
      duration: "Duration : 4 Years",
    },
  ];

  return (
<section className="relative overflow-hidden py-28 bg-gray-100">

  {/* Top Curve */}
  <div className="absolute top-0 left-0 w-full h-20 bg-[linear-gradient(to_right,#dc2626_50%,#000000_50%)] rounded-b-[100px]"></div>

  {/* Bottom Curve */}
 
      <div className="max-w-[1600px] mx-auto px-5">

        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
           <h2 className="text-4xl font-bold text-black dark:text-white transition-colors">
              Explore Our Programs
            </h2>

            <div className="w-20 h-1 bg-red-400 rounded-full mt-2"></div>
          </div>

          <button className="hidden md:flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold hover:text-red-900 dark:hover:text-red-300 transition">
            View All Programs
            <FaArrowRight />
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {programs.map((program) => (
            <SwiperSlide key={program.id}>
              <div className="bg-white dark:bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group h-full">

                {/* Image */}
                <div className="overflow-hidden h-60">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">

                  <div className="flex gap-3">

                    <div className="w-10 h-10 rounded-lg bg-red-200 dark:bg-red-900 flex items-center justify-center">
                      <FaGraduationCap className="text-red-700" />
                    </div>

                  <h3 className="font-bold text-[#0B2346] dark:text-red leading-6 transition-colors">
                      {program.title}
                    </h3>

                  </div>

                 <p className="text-gray-600 dark:text-black mt-4 text-sm transition-colors">
                    {program.degree}
                  </p>

                 <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">
                    {program.duration}
                  </p>

                 <button className="mt-5 flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold hover:gap-3 transition-all">
                    Explore
                    <FaArrowRight size={12} />
                  </button>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}