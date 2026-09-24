import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import handsOnImage from "../../assets/images/hands-on-training.jpg";
import researchImage from "../../assets/images/research-grants.jpg";
import whySandipGraduation from "../../assets/images/why-sandip-graduation.jpg";
import campus1Image from "../../assets/images/campus-1.jpg";
import campus2Image from "../../assets/images/campus-2.webp";
import campus3Image from "../../assets/images/campus-3.png";
import aboutEntrance from "../../assets/images/about-entrance.jpg";

// Complete 9 Feature Items for Why Sandip University
const featureSlides = [
  {
    num: "01",
    badge: "INDUSTRY INTEGRATION",
    title: "Hands-On Skill Development via Industry Training",
    desc: "Outcome-based practical training in advanced laboratories designed with direct input from corporate tech leaders and research organizations.",
    highlight: "100+ Hands-On Lab Hours Per Semester",
    image: handsOnImage,
    alt: "Hands-on industrial skill training at Sandip University",
  },
  {
    num: "02",
    badge: "GOVERNMENT RECOGNITION",
    title: "Awarded Prestigious Research Grants",
    desc: "State and central government funding supporting faculty and student innovation projects across artificial intelligence, renewable energy, and bio-engineering.",
    highlight: "₹5 Crore+ Active Research Funding",
    image: researchImage,
    alt: "Research grants and innovation projects at Sandip University",
  },
  {
    num: "03",
    badge: "INCUBATION HUB",
    title: "Dedicated Innovation & Entrepreneurship Cell",
    desc: "Empowering student innovators with experienced mentorship, rapid prototyping facilities, patent filing assistance, and early seed funding support.",
    highlight: "30+ Student Startups Incubated",
    image: aboutEntrance,
    alt: "Sandip University Innovation and Startup Incubation Cell",
  },
  {
    num: "04",
    badge: "WORKPLACE IMMERSION",
    title: "Compulsory Corporate & Research Internships",
    desc: "Mandatory corporate and research internships ensuring immersive workplace exposure prior to graduation, bridging academia with real-world industry demands.",
    highlight: "100% Corporate Internship Assistance",
    image: campus1Image,
    alt: "Corporate internship and workplace immersion",
  },
  {
    num: "05",
    badge: "GLOBAL EXPOSURE",
    title: "16+ MoUs with Global Universities",
    desc: "International student exchange programs, joint research initiatives, and global faculty interaction broadening horizon across top foreign universities.",
    highlight: "Global Credit Transfer & Exchange Programs",
    image: whySandipGraduation,
    alt: "Global university tie-ups and student graduation class",
  },
  {
    num: "06",
    badge: "INFRASTRUCTURE",
    title: "State-of-the-Art Infrastructure & 250+ Acre Campus",
    desc: "Ultra-modern eco-friendly campus equipped with smart classrooms, high-speed Wi-Fi, modern auditoriums, and world-class sports facilities in Nashik.",
    highlight: "250+ Acres Lush Green Campus",
    image: campus2Image,
    alt: "Sandip University 250+ Acre Campus Infrastructure",
  },
  {
    num: "07",
    badge: "FUTURE CURRICULA",
    title: "Outcome-Based Education 4.0 & 5.0 Curricula",
    desc: "Future-ready academic frameworks integrated with Education 4.0 and Industry 5.0 standards to nurture adaptable, ethically grounded global professionals.",
    highlight: "Education 5.0 Aligned Framework",
    image: campus3Image,
    alt: "Outcome-based education 4.0 and 5.0 curricula",
  },
  {
    num: "08",
    badge: "EMINENT FACULTY",
    title: "Top-Tier Faculty from IITs, NITs & IIMs",
    desc: "Accomplished professors and industry practitioners holding doctorates and master degrees from premier IITs, NITs, and global universities.",
    highlight: "80%+ Doctorate & M.Tech Faculty",
    image: aboutEntrance,
    alt: "Eminent faculty members at Sandip University",
  },
  {
    num: "09",
    badge: "CAREER SUCCESS",
    title: "100% Placement Guidance & Career Support",
    desc: "Comprehensive career readiness cell providing mock interviews, aptitude training, and direct campus recruitment with 250+ top multinational corporations.",
    highlight: "₹1.12 CPA Highest Package Offered",
    image: whySandipGraduation,
    alt: "Placement success and career opportunities",
  },
];

const SLIDE_MS = 6500;

export default function WhySandipAndLegacy() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const reduce = useReducedMotion();

  const isPaused = hovered || userPaused || reduce;
  const total = featureSlides.length;
  const current = featureSlides[activeSlide];

  const next = () => setActiveSlide((p) => (p + 1) % total);
  const prev = () => setActiveSlide((p) => (p === 0 ? total - 1 : p - 1));

  // Autoplay: restarts on every slide change, paused on hover or via the button
  useEffect(() => {
    if (isPaused) return;
    const t = setTimeout(next, SLIDE_MS);
    return () => clearTimeout(t);
  }, [activeSlide, isPaused]);

  return (
    <div
      id="why-choose-us"
      className="bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      <style>{`
        @keyframes sun-why-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>

      <section
        id="why-sandip"
        aria-roledescription="carousel"
        aria-label="Why Sandip University"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative py-16 lg:py-24 text-slate-900 dark:text-white"
      >
        {/* ---------- BACKGROUND (light): soft color wash from the active photo ---------- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <AnimatePresence mode="sync">
            <motion.img
              key={activeSlide}
              src={current.image}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] object-cover blur-3xl saturate-150 opacity-[0.22] dark:opacity-[0.12]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/70 via-[#FAF8F5]/30 to-[#FAF8F5] dark:from-zinc-950/70 dark:via-zinc-950/40 dark:to-zinc-950" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.45] dark:opacity-[0.14]"
            style={{
              backgroundImage: "radial-gradient(rgba(100,116,139,0.45) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 10%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 40%, black 10%, transparent 75%)",
            }}
          />
          <div className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-[#C8102E]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* ---------- HEADER ---------- */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
            <div>
              <p className="text-sm font-semibold text-[#C8102E] dark:text-rose-300 mb-3">
                Why Sandip University?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08]">
                Empowering future leaders
                <span className="block font-serif italic font-normal text-[#C8102E] dark:text-[#FF5A70]">
                  with excellence.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-bold text-slate-400 dark:text-slate-500 mr-1">
                <span className="text-[#C8102E] text-base">{current.num}</span> /{" "}
                {String(total).padStart(2, "0")}
              </span>
              {[
                {
                  label: isPaused ? "Play autoplay" : "Pause autoplay",
                  onClick: () => setUserPaused((p) => !p),
                  icon: isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />,
                },
                { label: "Previous feature", onClick: prev, icon: <ChevronLeft className="w-5 h-5" /> },
                { label: "Next feature", onClick: next, icon: <ChevronRight className="w-5 h-5" /> },
              ].map((b) => (
                <button
                  key={b.label}
                  onClick={b.onClick}
                  aria-label={b.label}
                  className="w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 shadow-md hover:bg-[#C8102E] hover:border-[#C8102E] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                >
                  {b.icon}
                </button>
              ))}
            </div>
          </div>

          {/* ---------- ACTIVE FEATURE ---------- */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
            {/* Text */}
            <div className="lg:col-span-6 min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) next();
                    else if (info.offset.x > 60) prev();
                  }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl font-black text-[#C8102E] tracking-tight">
                      {current.num}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] dark:text-rose-300 lowercase first-letter:uppercase">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.15] mb-4">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-6">
                    {current.desc}
                  </p>

                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md px-5 py-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C8102E] shrink-0" />
                    <span className="text-sm sm:text-base font-bold">{current.highlight}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Framed photo */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-3 rounded-[36px] border border-dashed border-[#C8102E]/25 pointer-events-none" />
              <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] rounded-[28px] overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200 dark:border-zinc-800 bg-slate-200 dark:bg-zinc-800">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeSlide}
                    src={current.image}
                    alt={current.alt}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-xs font-black text-[#C8102E] shadow-md">
                  Feature {current.num}
                </span>
              </div>
            </div>
          </div>

          {/* ---------- THUMBNAIL RAIL ---------- */}
          <div
            role="tablist"
            aria-label="Choose a feature"
            className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3"
          >
            {featureSlides.map((f, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={f.num}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Feature ${f.num}: ${f.title}`}
                  onClick={() => setActiveSlide(idx)}
                  className={`group relative text-left rounded-xl overflow-hidden border-2 bg-white dark:bg-zinc-900 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
                    isActive
                      ? "border-[#C8102E] -translate-y-1 shadow-lg shadow-[#C8102E]/20"
                      : "border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-600"
                  }`}
                >
                  <img
                    src={f.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={`w-full h-16 sm:h-20 object-cover transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-60 group-hover:opacity-90"
                    }`}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <span className="absolute left-2 bottom-2 text-xs font-black text-white">
                    {f.num}
                  </span>

                  {/* Autoplay progress on the active thumbnail */}
                  {isActive && !reduce && (
                    <span
                      key={`p-${activeSlide}`}
                      className="absolute left-0 bottom-0 h-[3px] w-full origin-left bg-[#C8102E]"
                      style={{
                        animation: `sun-why-progress ${SLIDE_MS}ms linear forwards`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}