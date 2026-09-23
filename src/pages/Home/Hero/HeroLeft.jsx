import { TypeAnimation } from "react-type-animation";
import { HiArrowRight } from "react-icons/hi2";

function HeroLeft({ item }) {
  return (
    <div className="max-w-2xl text-white">
      {/* Subtitle Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-red-400 uppercase tracking-[4px] mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span>{item.subtitle}</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
        {item.title}
      </h1>

      {/* Type Animation */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-400 mb-6 drop-shadow-md">
        Become a{" "}
        <TypeAnimation
          sequence={[
            "Engineer", 2000,
            "Doctor", 2000,
            "Scientist", 2000,
            "Entrepreneur", 2000,
            "Researcher", 2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg leading-relaxed text-slate-200 mb-8 max-w-xl font-medium">
        {item.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-[#C8102E] hover:bg-red-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2.5">
          <span>{item.button1}</span>
          <HiArrowRight className="w-4 h-4" />
        </button>

        <button className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-slate-900 border border-white/30 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2">
          <span>{item.button2}</span>
        </button>
      </div>
    </div>
  );
}

export default HeroLeft;