import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Award, Trophy, CheckCircle2, ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from "lucide-react";

import handsOnImage from "../../assets/images/hands-on-training.jpg";
import researchImage from "../../assets/images/research-grants.jpg";
import whySandipGraduation from "../../assets/images/why-sandip-graduation.jpg";
import campus1Image from "../../assets/images/campus-1.jpg";
import campus2Image from "../../assets/images/campus-2.png";
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

// Legacy of Success Achievement Wall Data (2017 to Present Journey)
const achievementWall = [
  {
    num: "#01",
    year: "2017–18",
    category: "TIMES ENGINEERING SURVEY",
    title: "1st Rank in Research & 2nd Rank in Placement",
    desc: "Ranked #1 for Research Capability & #2 for Placements among India's Emerging Engineering Institutes.",
    tag: "RESEARCH & PLACEMENT",
  },
  {
    num: "GRADE A",
    year: "2019–20",
    category: "NAAC ACCREDITATION",
    title: "Grade A Accredited (CGPA 3.11)",
    desc: "Highest institutional quality rating awarded in 1st Cycle by National Assessment & Accreditation Council (NAAC).",
    tag: "GOVERNMENT RATING",
  },
  {
    num: "#1",
    year: "2021–22",
    category: "EDUCATION EXCELLENCE",
    title: "Fastest Emerging University of India",
    desc: "Consistently recognized for rapid academic expansion, state-of-the-art infrastructure, and high employability.",
    tag: "NATIONAL RECOGNITION",
  },
  {
    num: "TOP 5",
    year: "2023–24",
    category: "TIMES B-SCHOOL & GHRDC",
    title: "Top 5 Private B-School & BBA University",
    desc: "Ranked 4th Top Emerging B-School and 3rd Top BBA Private University in National Surveys.",
    tag: "MANAGEMENT RANKING",
  },
  {
    num: "120+",
    year: "2025–26",
    category: "INTELLECTUAL PROPERTY",
    title: "120+ Patents & Research Grants",
    desc: "Pioneering research output with 120+ registered patents and government-funded incubator support.",
    tag: "PATENTS & GRANTS",
  },
];

export default function WhySandipAndLegacy() {
  // Slider State for Why Sandip University Carousel
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const sliderRef = useRef(null);

  // Auto-slide effect (changes slide every 6.5s unless hovered/paused)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [activeSlide, isPaused]);

  const handleNextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % featureSlides.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? featureSlides.length - 1 : prev - 1));
  };

  const currentStory = featureSlides[activeSlide];
  const isEvenSlide = activeSlide % 2 === 0;

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <div id="why-choose-us" className="bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: WHY SANDIP UNIVERSITY? — PREMIUM INTERACTIVE HORIZONTAL SLIDER
         ========================================================================= */}
      <section id="why-sandip" className="py-20 lg:py-32 relative">
        
        {/* Ambient Crimson Background Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C8102E]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Main Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 border-b border-slate-200/80 dark:border-zinc-800 pb-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] tracking-wider uppercase mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>WHY SANDIP UNIVERSITY?</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
              >
                Empowering Future Leaders With <span className="text-[#C8102E]">Excellence.</span>
              </motion.h2>
            </div>

            {/* Slider Controls: Counter, Auto-play Indicator & Arrow Buttons */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Auto-Slide Hover Pause Badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-zinc-800/80 text-[11px] font-extrabold text-slate-600 dark:text-slate-300">
                {isPaused ? <Pause className="w-3 h-3 text-[#C8102E]" /> : <Play className="w-3 h-3 text-emerald-500 animate-pulse" />}
                <span>{isPaused ? "PAUSED" : "AUTOPLAY"}</span>
              </div>

              {/* Counter Indicator */}
              <span className="text-sm font-black text-slate-400 dark:text-slate-500 tracking-wider">
                <strong className="text-[#C8102E] text-base">{currentStory.num}</strong> / 0{featureSlides.length}
              </span>

              {/* Prev / Next Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous Feature"
                  className="w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] dark:hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  aria-label="Next Feature"
                  className="w-11 h-11 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] dark:hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar Indicator */}
          <div className="w-full h-1 bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden mb-12">
            <motion.div
              className="h-full bg-[#C8102E]"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeSlide + 1) / featureSlides.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* MAIN SLIDER CONTAINER (Hover to pause auto-slide & Touch Drag Support) */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[500px]"
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) handleNextSlide();
                  else if (info.offset.x > 50) handlePrevSlide();
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white dark:bg-zinc-900 rounded-[36px] p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              >
                
                {/* Image Column */}
                <div className={`lg:col-span-6 relative ${isEvenSlide ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-[28px] overflow-hidden shadow-xl border border-slate-200/80 dark:border-zinc-800 h-[320px] sm:h-[400px] lg:h-[420px] group">
                    <img
                      src={currentStory.image}
                      alt={currentStory.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                    {/* Feature Badge Overlay */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/20 text-xs font-black text-[#C8102E] shadow-md">
                      FEATURE {currentStory.num}
                    </div>

                    {/* Bottom Highlight Pill Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white border border-white/20 shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0" />
                        <span>{currentStory.highlight}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#C8102E] transition-all" />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEvenSlide ? "lg:order-2" : "lg:order-1"}`}>
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl font-black text-[#C8102E] tracking-tight">
                      {currentStory.num}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[11px] font-extrabold uppercase text-[#C8102E] tracking-wider">
                      {currentStory.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
                    {currentStory.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed mb-6">
                    {currentStory.desc}
                  </p>

                  {/* Micro Highlight Badge */}
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C8102E] bg-red-50 dark:bg-red-950/30 px-3.5 py-2 rounded-xl border border-red-200/80 dark:border-red-900/40 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>
                    <span>{currentStory.highlight}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {featureSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeSlide ? 1 : -1);
                  setActiveSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? "w-8 bg-[#C8102E] shadow-sm"
                    : "w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LEGACY OF SUCCESS — PREMIUM ACHIEVEMENT WALL / JOURNEY OF EXCELLENCE
         ========================================================================= */}
      <section id="legacy-of-success" className="py-24 lg:py-36 relative bg-[#FAF8F5] dark:bg-zinc-950 text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-zinc-800 transition-colors duration-300">
        
        {/* Ambient Subtle Crimson Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C8102E]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[#C8102E] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-2xs"
            >
              <Trophy className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>LEGACY OF SUCCESS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-5"
            >
              Legacy of <span className="text-[#C8102E]">Success.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed"
            >
              Consistently benchmarking quality education, research impact, accreditation, and high employability across India since inception.
            </motion.p>
          </div>

          {/* WIDE HORIZONTAL ACHIEVEMENT JOURNEY (Desktop: 5 Step Sequence, Mobile: Responsive Stack) */}
          <div className="relative">
            
            {/* Horizontal Connecting Guide Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-red-500/20 via-[#C8102E] to-red-500/20 pointer-events-none z-0" />

            {/* Achievement Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
              {achievementWall.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="flex flex-col group cursor-default"
                >
                  {/* Step Circular Node */}
                  <div className="hidden lg:flex items-center justify-center mb-6">
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#C8102E] opacity-40"></span>
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#C8102E] text-xs font-black text-[#C8102E] flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="p-6 rounded-[28px] bg-white dark:bg-zinc-900 backdrop-blur-xl border border-slate-200/80 dark:border-zinc-800 shadow-xl flex flex-col justify-between h-full hover:border-[#C8102E]/60 transition-all duration-300 group-hover:-translate-y-2">
                    <div>
                      {/* Category Badge & Year */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-50 dark:bg-red-950/40 text-[#C8102E] border border-red-200 dark:border-red-900/40">
                          {item.tag}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                          {item.year}
                        </span>
                      </div>

                      {/* Giant Visual Ranking Number */}
                      <div className="text-3xl sm:text-4xl font-black text-[#C8102E] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                        {item.num}
                      </div>

                      {/* Achievement Title */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-[#C8102E] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-zinc-800 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span>{item.category}</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Bottom Timeline Summary Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-center max-w-3xl mx-auto flex items-center justify-center gap-3 shadow-xl"
          >
            <Award className="w-5 h-5 text-[#C8102E] shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              Transforming higher education with quality benchmarks & research excellence.
            </span>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
