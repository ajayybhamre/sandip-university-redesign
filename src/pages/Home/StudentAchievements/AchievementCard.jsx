import React from "react";
import { ArrowUpRight, Award, GraduationCap, Briefcase, Zap, CheckCircle2, User } from "lucide-react";

// Category style mapping for distinct color badges & accents
const CATEGORY_STYLES = {
  academic: {
    badgeBg: "bg-amber-50 dark:bg-amber-950/40",
    badgeText: "text-amber-700 dark:text-amber-300",
    badgeBorder: "border-amber-200/80 dark:border-amber-800/60",
    icon: GraduationCap,
    accentGlow: "group-hover:border-amber-400/50"
  },
  placements: {
    badgeBg: "bg-rose-50 dark:bg-rose-950/40",
    badgeText: "text-[#C8102E] dark:text-rose-300",
    badgeBorder: "border-rose-200/80 dark:border-rose-800/60",
    icon: Briefcase,
    accentGlow: "group-hover:border-[#C8102E]/50"
  },
  awards: {
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/40",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    badgeBorder: "border-emerald-200/80 dark:border-emerald-800/60",
    icon: Award,
    accentGlow: "group-hover:border-emerald-400/50"
  },
  innovation: {
    badgeBg: "bg-sky-50 dark:bg-sky-950/40",
    badgeText: "text-sky-700 dark:text-sky-300",
    badgeBorder: "border-sky-200/80 dark:border-sky-800/60",
    icon: Zap,
    accentGlow: "group-hover:border-sky-400/50"
  },
  certifications: {
    badgeBg: "bg-purple-50 dark:bg-purple-950/40",
    badgeText: "text-purple-700 dark:text-purple-300",
    badgeBorder: "border-purple-200/80 dark:border-purple-800/60",
    icon: CheckCircle2,
    accentGlow: "group-hover:border-purple-400/50"
  }
};

export default function AchievementCard({ achievement, onSelect, index = 0 }) {
  const categoryStyle = CATEGORY_STYLES[achievement.categorySlug] || CATEGORY_STYLES.academic;
  const CategoryIcon = categoryStyle.icon;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(achievement);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`View achievement details for ${achievement.title} by ${achievement.studentName}`}
      onClick={() => onSelect(achievement)}
      onKeyDown={handleKeyDown}
      className={`group relative flex flex-col h-full rounded-2xl bg-white dark:bg-[#15151A] border border-slate-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-out cursor-pointer overflow-hidden transform motion-safe:hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 dark:focus:ring-offset-[#0B0B0D] ${categoryStyle.accentGlow}`}
      data-aos="fade-up"
      data-aos-delay={100 + (index % 3) * 100}
    >
      {/* CARD MEDIA / IMAGE HEADER */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-zinc-900 shrink-0">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />
        {/* Soft Edge Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

        {/* TOP-LEFT CATEGORY BADGE */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-xs border ${categoryStyle.badgeBg} ${categoryStyle.badgeText} ${categoryStyle.badgeBorder}`}
          >
            <CategoryIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{achievement.category}</span>
          </span>
        </div>

        {/* TOP-RIGHT METRIC / RANK HIGHLIGHT TAG */}
        {achievement.metric && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-900/85 text-amber-400 border border-amber-400/30 text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-md shadow-md">
              {achievement.metric}
            </span>
          </div>
        )}

        {/* BOTTOM IMAGE TITLE OVERLAY FOR STUDENT */}
        <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center justify-between text-white">
          <span className="text-[11px] font-semibold text-slate-200/90 truncate">
            {achievement.badge}
          </span>
          <span className="text-[10px] font-bold text-slate-300 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded">
            {achievement.date}
          </span>
        </div>
      </div>

      {/* CARD CONTENT BODY */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* ACHIEVEMENT TITLE */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#C8102E] dark:group-hover:text-rose-400 transition-colors line-clamp-2 mb-2 leading-snug">
            {achievement.title}
          </h3>

          {/* SHORT SUMMARY */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-2 mb-4">
            {achievement.description}
          </p>
        </div>

        {/* FOOTER: VERIFIED STUDENT INFO & DETAILS CTA */}
        <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between gap-3 mt-auto">
          {/* STUDENT DETAILS */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200/60 dark:border-red-900/60 flex items-center justify-center shrink-0 text-[#C8102E] dark:text-rose-400">
              <User className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate leading-tight">
                {achievement.studentName}
              </h4>
              <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium truncate block">
                {achievement.department} • {achievement.year}
              </span>
            </div>
          </div>

          {/* VIEW DETAILS ACTION BUTTON */}
          <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-zinc-800 group-hover:bg-[#C8102E] group-hover:text-white dark:group-hover:bg-[#C8102E] text-slate-600 dark:text-zinc-300 flex items-center justify-center shrink-0 transition-colors duration-200 shadow-2xs">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
