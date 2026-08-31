import whySandipGraduation from "../../assets/images/why-sandip-graduation.jpg";
import legacyTrophy from "../../assets/images/legacy-trophy.png";

const whyPoints = [
  {
    num: "01",
    title: "Hands-On Skill Development via Industry Training",
    desc: "Outcome-based practical training in advanced laboratories designed with industry input.",
  },
  {
    num: "02",
    title: "Awarded Prestigious Research Grants",
    desc: "State and central government funding supporting faculty and student innovation projects.",
  },
  {
    num: "03",
    title: "Dedicated Innovation & Entrepreneurship Cell",
    desc: "Empowering student innovators with mentorship, prototypes, and seed funding support.",
  },
  {
    num: "04",
    title: "Compulsory Corporate & Research Internships",
    desc: "Mandatory corporate and research internships ensuring workplace immersion prior to graduation.",
  },
  {
    num: "05",
    title: "16+ MoUs with Global Universities",
    desc: "International student exchange programs, joint research, and global faculty interaction.",
  },
];

const legacyAchievements = [
  {
    category: "TIMES ENGINEERING SURVEY",
    title: "1st Rank in Research & 2nd Rank in Placement",
    desc: "Ranked #1 for Research Capability & #2 for Placements among India's Emerging Engineering Institutes.",
  },
  {
    category: "NAAC ACCREDITATION",
    title: "Grade A Accredited (CGPA 3.11)",
    desc: "Highest institutional quality rating awarded in 1st Cycle by National Assessment & Accreditation Council.",
  },
  {
    category: "EDUCATION EXCELLENCE",
    title: "Fastest Emerging University of India",
    desc: "Consistently recognized for rapid academic expansion, state-of-the-art infrastructure, and high employability.",
  },
  {
    category: "TIMES B-SCHOOL & GHRDC",
    title: "Top 5 Private B-School & BBA University",
    desc: "Ranked 4th Top Emerging B-School and 3rd Top BBA Private University in National Surveys.",
  },
  {
    category: "INTELLECTUAL PROPERTY",
    title: "120+ Patents & Research Grants",
    desc: "Pioneering research output with 120+ registered patents and government-funded incubator support.",
  },
];

export default function WhySandipAndLegacy() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 space-y-24 lg:space-y-32">
        
        {/* ==================== 1. WHY SANDIP UNIVERSITY? ==================== */}
        <div id="why-sandip" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: One Vertical Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[28px] overflow-hidden shadow-lg border border-slate-200/80 dark:border-zinc-800 max-h-[560px]">
              <img
                src={whySandipGraduation}
                alt="Sandip University Graduation Class"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] inline-block mr-2"></span>
                <span>Empowering 10,000+ Future Leaders</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Heading + Short Intro + Editorial List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-slate-500 dark:text-slate-400 block mb-2">
              WHY SANDIP UNIVERSITY?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Why <span className="text-[#C8102E]">Sandip University?</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Empowering future leaders with world-class academic infrastructure, hands-on skill development, global exposure, and incubation support.
            </p>

            {/* Editorial List Items */}
            <div className="divide-y divide-slate-200/80 dark:divide-zinc-800 border-t border-b border-slate-200/80 dark:border-zinc-800">
              {whyPoints.map((pt) => (
                <div
                  key={pt.num}
                  className="py-4 sm:py-5 flex items-start gap-4 sm:gap-6 group cursor-default transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-black text-slate-400 group-hover:text-[#C8102E] transition-colors shrink-0 mt-0.5">
                    {pt.num}
                  </span>

                  <div className="group-hover:translate-x-1.5 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#C8102E] transition-colors leading-snug mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ==================== 2. LEGACY OF SUCCESS ==================== */}
        <div id="legacy-of-success" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Heading + Minimal Achievement List */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-slate-500 dark:text-slate-400 block mb-2">
              LEGACY OF SUCCESS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Legacy of <span className="text-[#C8102E]">Success</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Consistently recognized among top emerging universities in India by leading independent educational surveys and ranking bodies.
            </p>

            {/* Achievement Editorial List */}
            <div className="divide-y divide-slate-200/80 dark:divide-zinc-800 border-t border-b border-slate-200/80 dark:border-zinc-800">
              {legacyAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 group cursor-default transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#C8102E] uppercase">
                      {item.category}
                    </span>
                  </div>

                  <div className="group-hover:translate-x-1.5 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#C8102E] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Trophy / Award Image */}
          <div className="lg:col-span-5 relative group order-1 lg:order-2">
            <div className="relative rounded-[28px] overflow-hidden shadow-lg border border-slate-200/80 dark:border-zinc-800 max-h-[520px]">
              <img
                src={legacyTrophy}
                alt="Sandip University Award Trophy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] inline-block mr-2"></span>
                <span>Recognized by Times & GHRDC Surveys</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
