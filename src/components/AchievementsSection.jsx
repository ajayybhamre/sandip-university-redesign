import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Award, Trophy, Star, Sparkles, Building2 } from "lucide-react";

import ashwiniImg from "../assets/images/ashwini.webp";
import gayatriImg from "../assets/images/gayatri.webp";
import pawanImg from "../assets/images/pawan.webp";
import riyaImg from "../assets/images/riya.webp";

const verifiedAchievers = [
  {
    id: "ach-1",
    name: "Ashwini Shinde",
    program: "B.Tech Computer Science & Engg",
    achievement: "University Gold Medalist & Rank 1",
    metric: "9.94 CGPA",
    badge: "Gold Medalist",
    quote: "Sandip University provided me with extraordinary academic guidance and research mentorship that paved the way for top honors.",
    image: ashwiniImg,
    category: "Academic Excellence",
  },
  {
    id: "ach-2",
    name: "Sneha Kulkarni",
    program: "B.Tech CSE",
    achievement: "Software Engineer at Microsoft",
    metric: "32 LPA Package",
    badge: "Microsoft Placement",
    quote: "The intensive hands-on lab training and mock placement drives gave me the confidence to excel in multi-stage technical interviews.",
    image: gayatriImg,
    category: "Tier-1 Placement",
  },
  {
    id: "ach-3",
    name: "Team AI-Shield (Led by Pawan Verma)",
    program: "AI & Data Science",
    achievement: "Smart India Hackathon 2024 Winners",
    metric: "₹1,00,000 Cash Prize",
    badge: "SIH National Champion",
    quote: "Our AI disaster management tool won 1st prize out of 1,200+ national universities, fully backed by Sandip University's Innovation Cell.",
    image: pawanImg,
    category: "National Competition",
  },
  {
    id: "ach-4",
    name: "Riya Gupta",
    program: "BBA Entrepreneurship",
    achievement: "Founded AgriSense Robotics",
    metric: "₹10L Seed Fund",
    badge: "Startup Founder",
    quote: "The SUN Incubation & Innovation Foundation funded our AgriTech startup, giving us space, mentoring, and patent support.",
    image: riyaImg,
    category: "Incubation & Startup",
  },
];

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % verifiedAchievers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? verifiedAchievers.length - 1 : prev - 1));
  };

  return (
    <section 
      id="our-achievers"
      aria-label="Our Achievers - Student Success Stories"
      className="relative py-20 lg:py-32 bg-white dark:bg-[#0B0B0D] transition-colors duration-300 overflow-hidden"
    >
      {/* Organic Soft Shape Accents in Background */}
      <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-red-50/70 dark:bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-amber-50/60 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* =========================================================================
              LEFT COLUMN — SECTION HEADER & INFO
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[10px] sm:text-[11px] font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-widest mb-3 w-fit shadow-xs">
                <Trophy className="w-3.5 h-3.5 text-[#C8102E] dark:text-red-400" />
                <span>OUR ACHIEVERS</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4">
                Where Our Students Create <br className="hidden sm:block" />
                <span className="text-[#C8102E] font-serif italic font-normal">Success Stories.</span>
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="text-xs sm:text-sm lg:text-[15px] max-w-[560px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6">
                From securing record-breaking placements at fortune 500 corporations to winning prestigious national hackathons and founding high-impact startups—our students continuously make Sandip University proud.
              </p>

              {/* Verified Metrics Counter Pills */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800">
                  <p className="text-xl sm:text-2xl font-black text-[#C8102E]">32 LPA</p>
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Highest International Package</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800">
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">200+</p>
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Top Campus Recruiters</p>
                </div>
              </div>

              {/* CTA & Controls Row */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/placement"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#A00C24] hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <span>Read More Stories</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Achiever"
                    className="w-11 h-11 rounded-full bg-[#FAF8F5] dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] dark:hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Achiever"
                    className="w-11 h-11 rounded-full bg-[#FAF8F5] dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] dark:hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN — MODERN CAROUSEL & ACHIEVEMENT CARDS
             ========================================================================= */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-7 relative"
          >
            {/* Cards Slider Container */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={verifiedAchievers[currentIndex].id}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#FAF8F5] dark:bg-zinc-900 rounded-[32px] p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xl relative overflow-hidden"
                >
                  {/* Category Pill Overlay */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60 dark:border-zinc-800">
                    <span className="px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200/70 text-[11px] font-extrabold text-[#C8102E] dark:text-red-400 tracking-wider uppercase">
                      {verifiedAchievers[currentIndex].category}
                    </span>

                    {/* Metric Highlight Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-black text-amber-700 dark:text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{verifiedAchievers[currentIndex].metric}</span>
                    </span>
                  </div>

                  {/* Main Achiever Card Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

                    {/* Achiever Image */}
                    <div className="sm:col-span-5 relative">
                      <div className="relative w-full h-[220px] sm:h-[260px] rounded-[24px] overflow-hidden shadow-md border border-slate-200 dark:border-zinc-800">
                        <img
                          src={verifiedAchievers[currentIndex].image}
                          alt={verifiedAchievers[currentIndex].name}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[11px] font-bold text-slate-900 dark:text-white text-center shadow-xs">
                          {verifiedAchievers[currentIndex].badge}
                        </span>
                      </div>
                    </div>

                    {/* Details & Quote */}
                    <div className="sm:col-span-7 flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                        {verifiedAchievers[currentIndex].name}
                      </h3>
                      <p className="text-xs font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-wider mb-4">
                        {verifiedAchievers[currentIndex].program}
                      </p>

                      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-800/80 border border-slate-200/70 dark:border-zinc-700/60 mb-4 shadow-2xs">
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mb-2">
                          &ldquo;{verifiedAchievers[currentIndex].achievement}&rdquo;
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic font-normal leading-relaxed">
                          {verifiedAchievers[currentIndex].quote}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        <Building2 className="w-3.5 h-3.5 text-[#C8102E]" />
                        <span>Sandip University Verified Achiever</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {verifiedAchievers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to achiever ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#C8102E] shadow-xs"
                      : "w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
