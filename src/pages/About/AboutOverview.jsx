

import {
  FaLeaf,
  FaSpa,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

import healingImg from "../../assets/images/slider1.jpg";

const steps = [
  {
    icon: <FaLeaf />,
    title: "Discover Yourself",
    desc: "Begin with a peaceful consultation to understand your emotional and physical well-being.",
  },
  {
    icon: <FaSpa />,
    title: "Personal Healing",
    desc: "Experience therapies thoughtfully designed to restore balance and inner peace.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Reconnect",
    desc: "Reconnect with your body, mind and soul through holistic wellness practices.",
  },
];

export default function AboutOverview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-white dark:bg-black transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-xs sm:text-sm text-[#C8102E] font-semibold">
            About Our Philosophy
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
            Healing Begins{" "}
            <span className="text-[#C8102E] font-extrabold">
              From Within
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto transition-colors">
            We believe true healing happens when mind, body and soul
            are nurtured together through compassion, mindfulness
            and natural therapies.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left Image */}
          <div className="relative">
            <img
              src={healingImg}
              alt="Healing"
              className="rounded-[40px] w-full h-[600px] object-cover shadow-2xl"
            />

            {/* Floating Quote */}
            <div className="absolute -bottom-8 left-8 bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-2xl max-w-xs border border-slate-100 dark:border-zinc-800 transition-colors">
              <p className="italic text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed transition-colors">
                “Every journey begins with a single step toward
                yourself.”
              </p>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-zinc-700 transition-colors"></div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative pl-20 group"
                >
                  {/* Circle */}
                  <div
                    className="
                    absolute
                    left-0
                    top-2
                    w-12
                    h-12
                    rounded-full
                    bg-[#C8102E]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                    shadow-lg shadow-red-600/25
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                  >
                    {step.icon}
                  </div>

                  <div
                    className="
                    bg-white
                    dark:bg-zinc-900
                    rounded-3xl
                    p-6 sm:p-8
                    border border-slate-100 dark:border-zinc-800
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:shadow-2xl
                    "
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="
              mt-12
              ml-6 sm:ml-20
              flex
              items-center
              gap-3
              bg-[#C8102E]
              hover:bg-red-700
              text-white
              font-bold
              text-sm
              px-8
              py-4
              rounded-full
              shadow-lg shadow-red-600/25
              transition-all
              duration-300
              cursor-pointer
              "
            >
              Start Your Journey
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}