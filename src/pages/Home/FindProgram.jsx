import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  ArrowRight, 
  Cpu, 
  Code2, 
  TrendingUp, 
  FlaskConical, 
  Scale, 
  Atom, 
  Palette, 
  Leaf, 
  GraduationCap, 
  PhoneCall,
  Sparkles
} from "lucide-react";

const facultyCards = [
  {
    id: "eng",
    title: "Engineering & Technology",
    bgClass: "bg-sky-50/70 dark:bg-sky-950/20 border-sky-100 dark:border-sky-900/30",
    iconBoxClass: "bg-white dark:bg-sky-900/40 text-sky-600 dark:text-sky-300 border-sky-100 dark:border-sky-800/40",
    tags: ["DIPLOMA", "B.TECH", "M.TECH"],
    icon: Cpu,
    field: "Engineering",
    level: "UG",
    link: "/schools/engineering",
  },
  {
    id: "cs",
    title: "IT & Computer Science",
    bgClass: "bg-indigo-50/70 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/30",
    iconBoxClass: "bg-white dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/40",
    tags: ["BCA", "MCA", "B.TECH CSE"],
    icon: Code2,
    field: "Computer",
    level: "UG",
    link: "/schools/engineering",
  },
  {
    id: "mgmt",
    title: "Management Studies",
    bgClass: "bg-rose-50/70 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/30",
    iconBoxClass: "bg-white dark:bg-rose-900/40 text-rose-600 dark:text-rose-300 border-rose-100 dark:border-rose-800/40",
    tags: ["BBA", "MBA", "B.COM"],
    icon: TrendingUp,
    field: "Management",
    level: "PG",
    link: "/programs",
  },
  {
    id: "pharma",
    title: "Pharmaceutical Sciences",
    bgClass: "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
    iconBoxClass: "bg-white dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/40",
    tags: ["B.PHARM", "M.PHARM", "D.PHARM"],
    icon: FlaskConical,
    field: "Pharmacy",
    level: "UG",
    link: "/programs",
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    bgClass: "bg-slate-100/80 dark:bg-zinc-800/50 border-slate-200/80 dark:border-zinc-700/60",
    iconBoxClass: "bg-white dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-zinc-700",
    tags: ["BA LLB", "LLB", "LLM"],
    icon: Scale,
    field: "Law",
    level: "UG",
    link: "/programs",
  },
  {
    id: "science",
    title: "Applied & Basic Sciences",
    bgClass: "bg-amber-50/70 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
    iconBoxClass: "bg-white dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 border-amber-100 dark:border-amber-800/40",
    tags: ["B.SC", "M.SC", "RESEARCH"],
    icon: Atom,
    field: "Science",
    level: "UG",
    link: "/programs",
  },
  {
    id: "design",
    title: "Design & Creative Arts",
    bgClass: "bg-pink-50/70 dark:bg-pink-950/20 border-pink-100 dark:border-pink-900/30",
    iconBoxClass: "bg-white dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 border-pink-100 dark:border-pink-800/40",
    tags: ["B.DES", "FASHION", "INTERIOR"],
    icon: Palette,
    field: "Design",
    level: "UG",
    link: "/programs",
  },
  {
    id: "agri",
    title: "Agricultural Sciences",
    bgClass: "bg-green-50/70 dark:bg-green-950/20 border-green-100 dark:border-green-900/30",
    iconBoxClass: "bg-white dark:bg-green-900/40 text-green-600 dark:text-green-300 border-green-100 dark:border-green-800/40",
    tags: ["B.SC AGRI", "AGRI-TECH"],
    icon: Leaf,
    field: "Agriculture",
    level: "UG",
    link: "/programs",
  },
  {
    id: "doctoral",
    title: "Doctoral Studies & Research",
    bgClass: "bg-purple-50/70 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
    iconBoxClass: "bg-white dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 border-purple-100 dark:border-purple-800/40",
    tags: ["PH.D", "FELLOWSHIP"],
    icon: GraduationCap,
    field: "Doctoral",
    level: "PhD",
    link: "/programs",
  },
];

export default function FindProgram() {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedField, setSelectedField] = useState("All");

  const filteredFaculties = facultyCards.filter((card) => {
    const matchesLevel = selectedLevel === "All" || card.level === selectedLevel;
    const matchesField = selectedField === "All" || card.field.toLowerCase().includes(selectedField.toLowerCase());
    return matchesLevel && matchesField;
  });

  return (
    <section id="find-faculty" className="relative py-20 lg:py-28 bg-[#F5F2EC]/70 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      
      {/* Subtle Background Lines Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path fill="none" stroke="currentColor" strokeWidth="0.8" className="text-red-300 dark:text-zinc-700" d="M0,150 Q360,50 720,200 T1440,100" />
          <path fill="none" stroke="currentColor" strokeWidth="0.8" className="text-slate-300 dark:text-zinc-700" d="M0,400 Q480,250 960,450 T1440,350" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200/80 dark:border-red-900/40 text-xs font-bold text-[#C8102E] tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>FIND YOUR FACULTY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-4">
            Tell us where <span className="text-[#C8102E]">you're headed.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
            Pick a level and a field. We'll take you straight to the right faculty.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="max-w-4xl mx-auto mb-14 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-full p-2.5 sm:p-3 shadow-xl border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center gap-3">
          
          {/* Level Dropdown */}
          <div className="relative w-full sm:w-1/2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="appearance-none w-full bg-transparent px-6 py-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold outline-none cursor-pointer pr-10"
            >
              <option value="All" className="bg-white dark:bg-zinc-900">I am exploring (All Levels)</option>
              <option value="UG" className="bg-white dark:bg-zinc-900">Undergraduate (UG)</option>
              <option value="PG" className="bg-white dark:bg-zinc-900">Postgraduate (PG)</option>
              <option value="PhD" className="bg-white dark:bg-zinc-900">Doctoral (Ph.D)</option>
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-slate-200 dark:bg-zinc-800"></div>

          {/* Field Dropdown */}
          <div className="relative w-full sm:w-1/2">
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="appearance-none w-full bg-transparent px-6 py-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold outline-none cursor-pointer pr-10"
            >
              <option value="All" className="bg-white dark:bg-zinc-900">Select Field (All Streams)</option>
              <option value="Engineering" className="bg-white dark:bg-zinc-900">Engineering & Technology</option>
              <option value="Computer" className="bg-white dark:bg-zinc-900">IT & Computer Science</option>
              <option value="Management" className="bg-white dark:bg-zinc-900">Commerce & Management</option>
              <option value="Pharmacy" className="bg-white dark:bg-zinc-900">Pharmaceutical Sciences</option>
              <option value="Law" className="bg-white dark:bg-zinc-900">Law & Legal Studies</option>
              <option value="Science" className="bg-white dark:bg-zinc-900">Applied & Basic Sciences</option>
              <option value="Design" className="bg-white dark:bg-zinc-900">Design & Creative Arts</option>
            </select>
            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Action Button */}
          <button
            onClick={() => {}}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C8102E] hover:bg-red-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shrink-0 cursor-pointer"
          >
            Find Faculties
          </button>
        </div>

        {/* 3x3 Faculty Grid with Minimal Soft Pastel Tinted Cards & Clean Modern Line Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFaculties.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.id}
                className={`relative rounded-[22px] ${card.bgClass} p-7 flex flex-col justify-between h-[250px] border shadow-xs hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 group overflow-hidden`}
              >
                {/* Top Info: Minimal Line Icon + Title */}
                <div>
                  <div className={`w-11 h-11 rounded-xl shadow-xs flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 ${card.iconBoxClass}`}>
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug max-w-[92%] group-hover:text-[#C8102E] transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Bottom Info: Neat Program Tags & Minimal Action Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-zinc-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-zinc-700/60 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#C8102E] hover:text-red-700 transition-colors group/link"
                  >
                    <span>View Programs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Light Counsellor CTA Card at Bottom */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[#C8102E] flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Not sure what to choose?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Talk to a counsellor and we'll match you to the right program.
              </p>
            </div>
          </div>

          <Link
            to="/help"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-red-50 dark:bg-red-950/40 hover:bg-[#C8102E] text-[#C8102E] hover:text-white border border-red-200 dark:border-red-900/40 text-xs font-extrabold transition-all duration-300 shadow-xs shrink-0 cursor-pointer"
          >
            <span>Talk to a Counsellor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}