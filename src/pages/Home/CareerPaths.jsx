import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";

import handsOnTraining from "../../assets/images/hands-on-training.jpg";
import campus2 from "../../assets/images/campus-2.png";
import pawanImg from "../../assets/images/pawan.png";
import gayatriImg from "../../assets/images/gayatri.png";
import researchGrants from "../../assets/images/research-grants.jpg";
import programsHeroEntrance from "../../assets/images/programs-hero-entrance.jpg";

const careerDomains = [
  {
    id: "engineering",
    title: "Engineering & Technology",
    image: handsOnTraining,
    categoryTag: "Engineering & Technology",
    directionQuote: "Build your future in engineering, infrastructure & cutting-edge tech.",
    programs: [
      "B.Tech Aerospace",
      "Civil Engineering",
      "Electrical",
      "Mechanical",
      "E&TC",
      "AI & Data Science",
      "Cyber Security",
    ],
    careers: "Engineering • Technology • Manufacturing • Infrastructure • R&D Tech",
    link: "/schools/engineering",
  },
  {
    id: "cse",
    title: "Computer Science & Engineering",
    image: campus2,
    categoryTag: "Computer Science & Engineering",
    directionQuote: "Build your future in software development, AI, Cloud & Data.",
    programs: [
      "B.Tech CSE",
      "M.Tech CSE",
      "AI & Machine Learning",
      "Cyber Security",
      "Cloud Computing",
      "Full Stack Development",
    ],
    careers: "Software Dev • AI & ML • Data Science • Cyber Security • Cloud Computing",
    link: "/schools/engineering",
  },
  {
    id: "management",
    title: "Commerce & Management",
    image: pawanImg,
    categoryTag: "Commerce & Management",
    directionQuote: "Build your success in global business, analytics & financial leadership.",
    programs: [
      "BBA",
      "B.Com (Hons)",
      "MBA",
      "New Age MBA",
      "Business Analytics",
      "Finance & HR",
    ],
    careers: "Business • Finance • Marketing • HR • Analytics • Entrepreneurship",
    link: "/programs",
  },
  {
    id: "pharmacy",
    title: "Pharmaceutical Sciences",
    image: gayatriImg,
    categoryTag: "Pharmaceutical Sciences",
    directionQuote: "Formulate innovations in drug discovery, clinical research & pharmacy.",
    programs: [
      "B.Pharm",
      "D.Pharm",
      "M.Pharm",
      "Pharmaceutics",
      "Pharmacology",
      "Clinical Research",
    ],
    careers: "Pharma Research • Drug Development • Quality Control • Biotech • Healthcare",
    link: "/programs",
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    image: programsHeroEntrance,
    categoryTag: "Law & Legal Studies",
    directionQuote: "Advocate justice in corporate law, litigation & public legal advisory.",
    programs: [
      "BA LL.B (Hons)",
      "BBA LL.B (Hons)",
      "LL.B (3 Years)",
      "LL.M Masters",
    ],
    careers: "Legal Practice • Corporate Law • Legal Advisory • Judiciary • Public Services",
    link: "/programs",
  },
  {
    id: "sciences",
    title: "Sciences & Research",
    image: researchGrants,
    categoryTag: "Sciences & Research",
    directionQuote: "Pioneer breakthroughs in biotechnology, forensic science & life sciences.",
    programs: [
      "B.Sc Physics / Chemistry",
      "Microbiology",
      "Forensic Science",
      "Biotechnology",
      "M.Sc Research",
    ],
    careers: "Scientific Research • Laboratory Science • Forensic Labs • Life Sciences",
    link: "/programs",
  },
];

export default function CareerPaths() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="career-paths" 
      className="py-20 lg:py-28 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE YOUR POSSIBILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              One University, <span className="text-[#C8102E]">Endless Career Paths</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Explore industry-focused programs designed to turn your interests into meaningful career opportunities.
            </p>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] transition-all duration-300 cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] transition-all duration-300 cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Cards Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {careerDomains.map((domain) => (
            <div
              key={domain.id}
              className="w-[320px] sm:w-[360px] lg:w-[390px] shrink-0 snap-start bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header Container */}
                <div className="relative h-[210px] overflow-hidden bg-slate-900">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[11px] font-black text-[#C8102E] border border-white/20 shadow-xs">
                    {domain.categoryTag}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#C8102E] transition-colors duration-200">
                    {domain.title}
                  </h3>

                  {/* Career Direction Box */}
                  <div className="p-3.5 rounded-2xl bg-red-50/70 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 mb-5">
                    <span className="font-extrabold uppercase text-[10px] tracking-wider block text-[#C8102E] mb-0.5">
                      Career Direction
                    </span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      "{domain.directionQuote}"
                    </p>
                  </div>

                  {/* Key Programs Offered */}
                  <div className="mb-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      KEY PROGRAMS OFFERED
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.programs.map((prog, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-zinc-700/50"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Career Opportunities */}
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      CAREER OPPORTUNITIES
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">
                      {domain.careers}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 mt-2">
                <Link
                  to={domain.link}
                  className="w-full py-3.5 px-4 rounded-full bg-slate-50 dark:bg-zinc-800/80 group-hover:bg-[#C8102E] text-slate-800 dark:text-slate-200 group-hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-zinc-700/60 group-hover:border-[#C8102E] transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
