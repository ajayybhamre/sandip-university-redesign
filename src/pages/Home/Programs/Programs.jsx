import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

// Import images
import engineering from "../../../assets/images/ashwini.webp";
import management from "../../../assets/images/pawan.webp";
import pharmacy from "../../../assets/images/gayatri.webp";
import law from "../../../assets/images/pawan.webp";
import science from "../../../assets/images/gayatri.webp";
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
    <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] uppercase tracking-[3px] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
              <span>ACADEMIC PROGRAMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Explore Our Programs
            </h2>
          </div>

          <button className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-bold text-slate-900 dark:text-white hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-300 shadow-sm cursor-pointer">
            <span>View All Programs</span>
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-6"
        >
          {programs.map((program) => (
            <SwiperSlide key={program.id} className="h-auto">
              <div className="bg-white dark:bg-zinc-900 rounded-[28px] border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xl hover:shadow-2xl hover:border-[#C8102E] transition-all duration-500 group flex flex-col justify-between h-full hover:-translate-y-2">
                <div>
                  {/* Image Container */}
                  <div className="overflow-hidden h-48 rounded-2xl bg-slate-100 dark:bg-zinc-800 mb-5 p-2 flex items-center justify-center">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Header info */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/30 flex items-center justify-center shrink-0">
                      <FaGraduationCap className="text-[#C8102E] text-lg" />
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#C8102E] transition-colors leading-snug">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-[#C8102E] dark:text-red-400">
                    {program.degree}
                  </p>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {program.duration}
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 w-full py-3 rounded-full bg-[#C8102E] hover:bg-red-700 text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer">
                  <span>Explore</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}