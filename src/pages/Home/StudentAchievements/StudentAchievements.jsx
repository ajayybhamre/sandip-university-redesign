import React, { useState, useMemo } from "react";
import { Sparkles, Trophy, ChevronLeft, ChevronRight, Filter, ArrowRight } from "lucide-react";
import { achievementsData, CATEGORIES } from "./achievementsData";
import AchievementCard from "./AchievementCard";
import AchievementModal from "./AchievementModal";

export default function StudentAchievements() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filter achievements based on active category
  const filteredAchievements = useMemo(() => {
    if (activeTab === "all") return achievementsData;
    return achievementsData.filter((item) => item.categorySlug === activeTab);
  }, [activeTab]);

  // Handle category tab change
  const handleTabChange = (categorySlug) => {
    setActiveTab(categorySlug);
    setCarouselIndex(0);
  };

  // Carousel navigation
  const cardsPerPage = 3;
  const maxPages = Math.ceil(filteredAchievements.length / cardsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? Math.max(0, maxPages - 1) : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxPages - 1 ? 0 : prev + 1));
  };

  // Slice achievements for current carousel page or show grid
  const visibleAchievements = filteredAchievements.slice(
    carouselIndex * cardsPerPage,
    carouselIndex * cardsPerPage + cardsPerPage
  );

  return (
    <section
      id="student-achievements"
      aria-labelledby="achievements-heading"
      className="relative py-20 lg:py-28 bg-[#FAF6EE] dark:bg-[#0B0B0D] text-slate-900 dark:text-white overflow-hidden border-t border-slate-200/80 dark:border-zinc-800/80 transition-colors duration-300"
    >
      {/* 1. SOFT ACCENT AMBIENT GLOWS */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#C8102E]/10 dark:bg-[#C8102E]/15 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-amber-400/10 dark:bg-amber-400/5 blur-[110px] rounded-full pointer-events-none z-0"></div>

      {/* 2. OVERSIZED LOW-OPACITY BACKGROUND TYPOGRAPHY: "ACHIEVE" */}
      <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[130px] sm:text-[190px] lg:text-[250px] font-black text-slate-900/[0.03] dark:text-white/[0.02] tracking-widest leading-none uppercase block translate-y-4 text-center">
          ACHIEVE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            SECTION HEADER
           ================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-slate-200/80 dark:border-zinc-800 pb-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900/60 text-xs font-black text-[#C8102E] dark:text-rose-400 tracking-wider uppercase mb-3.5 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C8102E] dark:text-rose-400" />
              <span>STUDENT SUCCESS</span>
            </div>

            {/* Main Heading */}
            <h2
              id="achievements-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3"
            >
              Student <span className="text-[#C8102E]">Achievements</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
              Celebrating the talent, dedication, and success of our students.
            </p>
          </div>

          {/* Optional CTA & Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleTabChange("all")}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#C8102E] dark:text-rose-400 hover:underline transition-colors group cursor-pointer"
            >
              <span>Explore All Achievements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ==================================================
            CATEGORY FILTER TABS BAR
           ================================================== */}
        <div className="mb-10">
          <div
            role="tablist"
            aria-label="Achievement Categories"
            className="flex items-center gap-2 overflow-x-auto pb-3 custom-scrollbar no-scrollbar"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              const count =
                cat.id === "all"
                  ? achievementsData.length
                  : achievementsData.filter((item) => item.categorySlug === cat.id).length;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="achievements-grid"
                  onClick={() => handleTabChange(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border select-none ${
                    isActive
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-md shadow-[#C8102E]/20 scale-102"
                      : "bg-white dark:bg-[#15151A] text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            CAROUSEL CONTROLS & PAGINATION
           ================================================== */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-zinc-400">
            <Trophy className="w-4 h-4 text-[#C8102E]" />
            <span>
              Showing {filteredAchievements.length} verified {filteredAchievements.length === 1 ? "story" : "stories"}
            </span>
          </div>

          {maxPages > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 mr-1">
                {carouselIndex + 1} / {maxPages}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Page"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#15151A] border border-slate-200/80 dark:border-zinc-800 hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer shadow-xs focus:ring-2 focus:ring-[#C8102E]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Page"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#15151A] border border-slate-200/80 dark:border-zinc-800 hover:bg-[#C8102E] hover:text-white dark:hover:bg-[#C8102E] text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer shadow-xs focus:ring-2 focus:ring-[#C8102E]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* ==================================================
            ACHIEVEMENTS CARDS GRID / CAROUSEL VIEW
           ================================================== */}
        {filteredAchievements.length > 0 ? (
          <div
            id="achievements-grid"
            role="tabpanel"
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
          </div>
        ) : (
          <div className="py-16 text-center bg-white dark:bg-[#15151A] rounded-2xl border border-slate-200/80 dark:border-zinc-800">
            <Filter className="w-10 h-10 mx-auto text-slate-300 dark:text-zinc-600 mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-zinc-200">
              No achievements found in this category
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 mb-4">
              Select another category to explore verified student accomplishments.
            </p>
            <button
              onClick={() => handleTabChange("all")}
              className="px-4 py-2 rounded-full bg-[#C8102E] text-white text-xs font-bold"
            >
              Reset Category Filter
            </button>
          </div>
        )}
      </div>

      {/* ==================================================
          ACHIEVEMENT DETAIL MODAL
         ================================================== */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </section>
  );
}
