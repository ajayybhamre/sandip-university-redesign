import bgImage from "../../assets/images/slider1.jpg";
import { HiArrowRight } from "react-icons/hi2";

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Academic Excellence",
      description:
        "Industry-oriented curriculum designed with experienced faculty members and modern teaching methodologies.",
    },
    {
      number: "02",
      title: "World-Class Infrastructure",
      description:
        "Smart classrooms, advanced laboratories, digital library, hostels, sports complex, and innovation center.",
    },
    {
      number: "03",
      title: "Excellent Placements",
      description:
        "Top recruiters, internships, career guidance, and skill development for successful careers.",
    },
    {
      number: "04",
      title: "Research & Innovation",
      description:
        "Promoting innovation, entrepreneurship, patents, funded projects, and interdisciplinary research.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden rounded-[36px] lg:rounded-[56px] bg-fixed bg-center bg-cover my-12 py-24 lg:py-32 shadow-2xl"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/95 to-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-red-400 uppercase tracking-[4px] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Shape Your Future With Us
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Discover an inspiring learning environment that empowers students
            through innovation, research, industry exposure, and global
            opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item) => (
            <div
              key={item.number}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 sm:p-8 hover:bg-white/10 hover:border-[#C8102E]/60 transition-all duration-500 flex flex-col justify-between group h-full hover:-translate-y-2 shadow-xl"
            >
              {/* Number */}
              <div>
                <span className="text-4xl lg:text-5xl font-black text-red-500/90 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300 block mb-4">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Button */}
              <button className="mt-8 w-full py-3 rounded-full bg-[#C8102E] hover:bg-red-700 text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer">
                <span>Learn More</span>
                <HiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}