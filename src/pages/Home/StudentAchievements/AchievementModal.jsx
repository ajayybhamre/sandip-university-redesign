import React, { useEffect } from "react";
import { X, Award, GraduationCap, Building2, Calendar, CheckCircle2, User, ExternalLink, Sparkles } from "lucide-react";

export default function AchievementModal({ achievement, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!achievement) return null;

  const { fullDetails } = achievement;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#15151A] rounded-3xl shadow-2xl border border-slate-200/80 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh] transition-all transform animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER IMAGE & BADGES */}
        <div className="relative w-full h-64 sm:h-80 bg-slate-950 shrink-0 overflow-hidden flex items-center justify-center">
          {/* Ambient Blurred Background for Aspect Ratio Filling */}
          <img
            src={achievement.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110 pointer-events-none"
            aria-hidden="true"
          />
          <img
            src={achievement.image}
            alt={achievement.title}
            className={`relative z-10 w-full h-full object-cover ${achievement.imagePositionModal || achievement.imagePosition || "object-[center_0%]"} drop-shadow-xl`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15151A] via-transparent to-black/30 z-10 pointer-events-none"></div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-[#C8102E] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 z-10 backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* CATEGORY & METRIC BADGES */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#C8102E] text-white shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              {achievement.category}
            </span>

            {achievement.metric && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wide shadow-md">
                {achievement.metric}
              </span>
            )}
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          {/* TITLE & DATE */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-[#C8102E]" />
              <span>{achievement.date}</span>
              {fullDetails?.organization && (
                <>
                  <span>•</span>
                  <span className="truncate">{fullDetails.organization}</span>
                </>
              )}
            </div>
            <h2
              id="achievement-modal-title"
              className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
            >
              {achievement.title}
            </h2>
          </div>

          {/* VERIFIED STUDENT PROFILE CARD */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900 flex items-center justify-center shrink-0 text-[#C8102E] dark:text-rose-400 font-bold">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {achievement.studentName}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 font-medium">
                {achievement.department} • <span className="text-[#C8102E] font-semibold">{achievement.year}</span>
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">
              ACHIEVEMENT OVERVIEW
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              {achievement.description}
            </p>
          </div>

          {/* KEY HIGHLIGHTS */}
          {fullDetails?.highlights && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                KEY MILESTONES & HIGHLIGHTS
              </h4>
              <ul className="space-y-2.5">
                {fullDetails.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAGS */}
          {fullDetails?.tags && (
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap gap-2">
              {fullDetails.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-200/80 dark:border-zinc-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
            Verified Achievement • Sandip University
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-[#C8102E] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
