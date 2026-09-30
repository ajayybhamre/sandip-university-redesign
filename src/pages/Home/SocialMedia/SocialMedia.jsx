import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import {
  HiArrowRight,
  HiCheck,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBanknotes,
  HiOutlineAcademicCap,
  HiOutlinePhone,
} from "react-icons/hi2";

// A real sequence, so numbering is meaningful. Edit the copy to match your process.
const steps = [
  {
    icon: HiOutlineDocumentText,
    title: "Apply online",
    short: "Fill the form",
    detail:
      "Fill in the online application and choose your preferred program. It takes about 10 minutes.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Counselling",
    short: "Talk to an expert",
    detail:
      "An admissions counsellor helps you compare programs, specializations, and career paths.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Documents",
    short: "Get verified",
    detail:
      "Upload your marksheets and ID proofs. Our team verifies them and confirms your eligibility.",
  },
  {
    icon: HiOutlineBanknotes,
    title: "Scholarship & fees",
    short: "Know your benefits",
    detail:
      "Your merit and entrance scores are reviewed for scholarships and fee benefits before you pay.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Enroll",
    short: "Welcome to SUN",
    detail:
      "Pay the admission fee, receive your enrollment number, and get ready for orientation.",
  },
];

const STEP_MS = 2800;
const REVEAL_MS = 1600;

export default function SocialMedia() {
  const railRef = useRef(null);
  const inView = useInView(railRef, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(-1);
  const [paused, setPaused] = useState(false);

  // Start highlighting once the rail has revealed itself
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setActive(0), reduce ? 0 : REVEAL_MS);
    return () => clearTimeout(t);
  }, [inView, reduce]);

  // Walk through the steps; pauses on hover/focus, stays still for reduced motion
  useEffect(() => {
    if (active < 0 || paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce]);

  const progress = active < 0 ? 0 : active / (steps.length - 1);
  const ActiveIcon = steps[Math.max(active, 0)].icon;

  return (
    <section
      id="admissions-cta"
      className="relative py-16 lg:py-24 bg-[#FAF6EE] dark:bg-zinc-950 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------- RED BANNER ---------- */}
        <div className="relative rounded-[36px] lg:rounded-[48px] bg-gradient-to-br from-[#C8102E] via-[#A00C24] to-[#5E0715] text-white shadow-2xl overflow-hidden px-8 sm:px-12 lg:px-16 pt-12 sm:pt-14 lg:pt-16 pb-40 lg:pb-44">
          {/* Background: concentric rings, diagonal stripes, glows */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            className="absolute -right-32 -top-32 w-[560px] h-[560px] text-white/15 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {[90, 150, 210, 270].map((r) => (
              <circle key={r} cx="300" cy="300" r={r} />
            ))}
          </svg>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 1px, transparent 18px)",
            }}
          />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-amber-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                Admissions open 2026-27
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5">
                Ready to shape your future
                <span className="block font-serif italic font-normal text-amber-100">
                  at Sandip University?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-rose-100 leading-relaxed max-w-2xl">
                Join thousands of students on a transformative journey, with
                world-class infrastructure and dedicated placement support.
                Here is exactly how your admission works.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Link
                to="/apply"
                className="group w-full sm:w-auto bg-white hover:bg-slate-100 text-[#C8102E] font-black text-sm px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#A00C24]"
              >
                Apply Now
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#C8102E] border border-white/30 text-white font-bold text-sm px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <HiOutlinePhone className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- ANIMATED PROCESS RAIL (overlaps banner) ---------- */}
        <div
          ref={railRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative z-10 -mt-28 lg:-mt-32 mx-2 sm:mx-6 lg:mx-10 rounded-[28px] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl shadow-slate-900/15 p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Your admission in 5 steps
            </h3>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {active < 0 ? "Getting started" : `Step ${active + 1} of ${steps.length}`}
            </span>
          </div>

          <ol className="relative flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-4">
            {/* Horizontal track + fill (desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-zinc-700 rounded-full"
            >
              <motion.div
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#C8102E] to-[#FF5A70]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress }}
                transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            {/* Vertical track + fill (mobile) */}
            <div
              aria-hidden="true"
              className="lg:hidden absolute left-5 top-5 bottom-5 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-zinc-700 rounded-full"
            >
              <motion.div
                className="h-full w-full origin-top rounded-full bg-gradient-to-b from-[#C8102E] to-[#FF5A70]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: progress }}
                transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {steps.map((s, i) => {
              const Icon = s.icon;
              const done = i < active;
              const current = i === active;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.28 }}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={current ? "step" : undefined}
                    className="w-full flex lg:flex-col items-center gap-4 lg:gap-3 text-left lg:text-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
                  >
                    <span className="relative shrink-0">
                      {current && !reduce && (
                        <span className="absolute inset-0 rounded-full bg-[#C8102E]/40 animate-ping" />
                      )}
                      <span
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          current
                            ? "bg-[#C8102E] border-[#C8102E] text-white scale-110 shadow-lg shadow-[#C8102E]/40"
                            : done
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : "bg-white dark:bg-zinc-900 border-slate-300 dark:border-zinc-600 text-slate-400"
                        }`}
                      >
                        {done ? <HiCheck className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </span>
                    </span>
                    <span>
                      <span
                        className={`block text-sm font-bold leading-snug transition-colors duration-300 ${
                          current
                            ? "text-[#C8102E]"
                            : "text-slate-800 dark:text-slate-200"
                        }`}
                      >
                        {i + 1}. {s.title}
                      </span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {s.short}
                      </span>
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </ol>

          {/* Detail for the highlighted step */}
          <div className="mt-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 px-5 py-4 min-h-[76px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3.5"
                aria-live="polite"
              >
                <span className="w-9 h-9 shrink-0 rounded-xl bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5" />
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {active < 0
                    ? "Watch how your application moves from form to enrollment, or tap any step."
                    : steps[active].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}