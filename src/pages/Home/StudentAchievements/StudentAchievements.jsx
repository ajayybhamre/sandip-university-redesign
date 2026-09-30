import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight, Filter, ArrowRight } from "lucide-react";
import { achievementsData, CATEGORIES } from "./achievementsData";
import AchievementCard from "./AchievementCard";
import AchievementModal from "./AchievementModal";

const CARDS_PER_PAGE = 3;

/* Counts up from 0 when scrolled into view */
function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{n}</span>;
}

export default function StudentAchievements() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredAchievements = useMemo(() => {
    if (activeTab === "all") return achievementsData;
    return achievementsData.filter((item) => item.categorySlug === activeTab);
  }, [activeTab]);

  // Count per category, used by the podium filter
  const counts = useMemo(() => {
    const map = { all: achievementsData.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== "all") {
        map[cat.id] = achievementsData.filter((i) => i.categorySlug === cat.id).length;
      }
    });
    return map;
  }, []);

  const handleTabChange = (categorySlug) => {
    setActiveTab(categorySlug);
    setCarouselIndex(0);
  };

  const maxPages = Math.max(1, Math.ceil(filteredAchievements.length / CARDS_PER_PAGE));
  const handlePrev = () => setCarouselIndex((p) => (p === 0 ? maxPages - 1 : p - 1));
  const handleNext = () => setCarouselIndex((p) => (p >= maxPages - 1 ? 0 : p + 1));

  const visibleAchievements = filteredAchievements.slice(
    carouselIndex * CARDS_PER_PAGE,
    carouselIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const total = achievementsData.length || 1;

  return (
    <section
      id="student-achievements"
      aria-labelledby="achievements-heading"
      className="relative py-20 lg:py-28 bg-[#FBF8F3] dark:bg-[#0B0B0D] text-slate-900 dark:text-white overflow-hidden border-t border-slate-200/80 dark:border-zinc-800/80 transition-colors duration-300"
    >
      {/* ---------- BACKGROUND: stage-light rays + gold glow + dot grid ---------- */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] max-w-none h-[760px] pointer-events-none opacity-70 dark:opacity-100"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 140deg at 50% 0%, rgba(200,16,46,0.09) 0deg 4deg, transparent 4deg 11deg)",
          maskImage: "radial-gradient(ellipse 60% 100% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 100% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[260px] rounded-full bg-amber-400/25 dark:bg-amber-400/15 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#C8102E]/10 blur-[120px] pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(100,116,139,0.45) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to top, black, transparent 50%)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- HEADER ---------- */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-8">
            <h2
              id="achievements-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
            >
              Student Achievements
              <span className="block mt-1 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl text-slate-500 dark:text-zinc-400">
                where hard work gets its moment.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
              Celebrating the talent, dedication, and success of our students.
              Choose a column on the podium to see the wins in that category.
            </p>
          </div>

          {/* Trophy counter */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex items-center gap-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-slate-200 dark:border-zinc-800 px-5 py-4 shadow-lg shadow-slate-900/5">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                <Trophy className="w-6 h-6" />
              </span>
              <div>
                <p className="text-4xl font-black leading-none tracking-tight">
                  <CountUp value={achievementsData.length} />
                  <span className="text-[#C8102E]">+</span>
                </p>
                <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mt-1">
                  verified student stories
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- PODIUM FILTER ---------- */}
        <div
          role="tablist"
          aria-label="Achievement categories"
          className="flex items-end gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 mb-4 pt-6"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            const count = counts[cat.id] ?? 0;
            const height = 44 + (count / total) * 100;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="achievements-grid"
                onClick={() => handleTabChange(cat.id)}
                className="group flex flex-col items-center shrink-0 min-w-[92px] sm:min-w-[110px] flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-t-2xl"
              >
                <span
                  className={`mb-2 text-xs sm:text-[13px] font-bold text-center leading-tight px-1 transition-colors ${
                    isActive
                      ? "text-[#C8102E] dark:text-rose-400"
                      : "text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}
                >
                  {cat.name}
                </span>
                <motion.span
                  initial={false}
                  animate={{ height }}
                  transition={{ type: "spring", stiffness: 160, damping: 20 }}
                  className={`w-full rounded-t-2xl flex items-start justify-center pt-3 text-xl font-black border-x border-t transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-b from-[#C8102E] to-[#8E0B22] text-white border-[#C8102E] shadow-lg shadow-[#C8102E]/30"
                      : "bg-white dark:bg-zinc-900 text-slate-400 dark:text-zinc-500 border-slate-200 dark:border-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-800"
                  }`}
                >
                  {count}
                </motion.span>
              </button>
            );
          })}
        </div>
        {/* Podium floor */}
        <div className="h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#C8102E]/50 to-transparent mb-8" />

        {/* ---------- STATUS + PAGER ---------- */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={() => handleTabChange("all")}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C8102E] dark:text-rose-400 hover:underline group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded"
          >
            Explore all achievements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {maxPages > 1 && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5" aria-hidden="true">
                {Array.from({ length: maxPages }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === carouselIndex ? "w-6 bg-[#C8102E]" : "w-1.5 bg-slate-300 dark:bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500">
                {carouselIndex + 1} / {maxPages}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous page"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#15151A] border border-slate-200 dark:border-zinc-800 hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next page"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#15151A] border border-slate-200 dark:border-zinc-800 hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* ---------- CARDS ---------- */}
        {filteredAchievements.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${carouselIndex}`}
              id="achievements-grid"
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[420px]"
            >
              {visibleAchievements.map((item, index) => (
                <AchievementCard
                  key={item.id}
                  achievement={item}
                  index={index}
                  onSelect={(selected) => setSelectedAchievement(selected)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="py-16 text-center bg-white dark:bg-[#15151A] rounded-2xl border border-slate-200 dark:border-zinc-800">
            <Filter className="w-10 h-10 mx-auto text-slate-300 dark:text-zinc-600 mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-zinc-200">
              No achievements in this category yet
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 mb-4">
              Pick another podium column to see verified student accomplishments.
            </p>
            <button
              onClick={() => handleTabChange("all")}
              className="px-4 py-2 rounded-full bg-[#C8102E] text-white text-xs font-bold"
            >
              Show all categories
            </button>
          </div>
        )}
      </div>

      {/* ---------- DETAIL MODAL ---------- */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </section>
  );
}