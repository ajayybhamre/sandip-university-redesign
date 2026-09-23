import {
  HiOutlineAcademicCap,
  HiOutlineBuildingLibrary,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiArrowRight,
} from "react-icons/hi2";

import aboutImage from "../../assets/images/about-entrance.jpg";

const features = [
  {
    icon: HiOutlineAcademicCap,
    title: "Quality Education",
    desc: "Industry-oriented curriculum with experienced faculty.",
  },
  {
    icon: HiOutlineBuildingLibrary,
    title: "Modern Campus",
    desc: "World-class laboratories, library and smart classrooms.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Global Exposure",
    desc: "International collaborations and exchange opportunities.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    desc: "Research, incubation and entrepreneurship ecosystem.",
  },
];

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-black transition-colors duration-300" data-aos="fade-up" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Composition */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Sandip University"
              className="rounded-[36px] w-full h-[600px] object-cover shadow-2xl border border-slate-200 dark:border-zinc-800"
            />

            {/* Floating Stat Box */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 max-w-xs">
              <h2 className="text-5xl font-black text-[#C8102E]">
                25+
              </h2>
              <p className="mt-2 text-sm font-bold text-slate-200 leading-snug">
                Years of Academic Excellence
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] uppercase tracking-[3px] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
              <span>ABOUT UNIVERSITY</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Empowering Students to Build{" "}
              <span className="text-[#C8102E]">
                Successful Careers
              </span>
            </h2>

            {/* Description Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4">
              Sandip University is committed to academic excellence,
              innovation, research, and holistic development. We prepare
              students with industry-ready skills, leadership qualities,
              and ethical values.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
              Through advanced infrastructure, experienced faculty,
              industry partnerships, and experiential learning, the
              university creates an environment where students thrive.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-[#C8102E] transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/30 flex items-center justify-center shrink-0">
                      <Icon className="text-2xl text-[#C8102E]" />
                    </div>

                    <div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="mt-10 bg-[#C8102E] hover:bg-red-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 cursor-pointer inline-flex items-center gap-2.5">
              <span>Explore More</span>
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}