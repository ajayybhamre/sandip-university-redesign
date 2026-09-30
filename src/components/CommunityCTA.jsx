import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  CheckCircle2,
  FileText,
  MessageCircle,
  BadgePercent,
  GraduationCap,
} from "lucide-react";
import bannerBg from "../assets/images/soet2.webp";

const ctaMetrics = [
  {
    icon: BookOpen,
    number: "100+",
    label: "Programs Offered",
    sub: "UG, PG, Ph.D & Diploma courses",
  },
  {
    icon: Users,
    number: "12,000+",
    label: "Active Students",
    sub: "Diverse nationwide campus",
  },
  {
    icon: Award,
    number: "95%+",
    label: "Placement Rate",
    sub: "250+ top corporate recruiters",
  },
];

// A real sequence, so numbering is meaningful. Edit copy to match your admission process.
const journey = [
  {
    icon: FileText,
    title: "Apply online",
    detail:
      "Fill in the application form and upload your marksheets. It takes about 10 minutes.",
  },
  {
    icon: MessageCircle,
    title: "Talk to a counsellor",
    detail:
      "Discuss programs, career paths, and campus life with an admissions counsellor.",
  },
  {
    icon: BadgePercent,
    title: "Check scholarships",
    detail:
      "Your merit and entrance scores are reviewed for scholarships and fee benefits.",
  },
  {
    icon: GraduationCap,
    title: "Confirm your seat",
    detail:
      "Pay the admission fee, submit documents, and receive your enrollment number.",
  },
];

const streams = [
  "Engineering",
  "Computer Science",
  "Management",
  "Pharmacy",
  "Design",
  "Ph.D & Research",
];

export default function CommunityCTA() {
  const [step, setStep] = useState(0);
  const ActiveIcon = journey[step].icon;

  return (
    <section
      id="community-cta"
      aria-label="Be a Part of Something Bigger"
      className="relative py-16 lg:py-24 bg-[#F3F1EE] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Soft background accents behind the banner */}
      <div className="absolute -top-20 left-1/4 w-[420px] h-[420px] rounded-full bg-[#C8102E]/10 blur-[110px] pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,116,139,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 55%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ---------- SECTION HEADING ---------- */}
        <div className="grid lg:grid-cols-12 gap-5 items-end mb-10 lg:mb-14">
          <h2 className="lg:col-span-7 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.06] text-slate-900 dark:text-white">
            Four steps from here
            <span className="block font-semibold text-slate-500 dark:text-slate-400">
              to your first day on campus.
            </span>
          </h2>
          <p className="lg:col-span-5 lg:ml-auto max-w-md text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
            Admissions at Sandip University are simple and guided. Follow the
            path on the admit card below, or pick a stream to see programs
            first.
          </p>
        </div>

        {/* ---------- BANNER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[36px] lg:rounded-[48px] overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800"
        >
          {/* Background image + overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src={bannerBg}
              alt="Sandip University Grand Campus"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/80 to-[#C8102E]/40 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* ---------- LEFT: MESSAGE, STREAMS, CTAs ---------- */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-300/30 text-xs font-semibold text-emerald-200 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Admissions open for 2026-27
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.08] mb-4">
                  Be a Part of <br />
                  <span className="text-[#FF5A70] font-serif italic font-normal">
                    Something Bigger.
                  </span>
                </h3>

                <p className="text-sm lg:text-[15px] max-w-[540px] text-slate-200 leading-relaxed mb-6">
                  Take the first step towards your academic journey and explore
                  world-class programs, global research initiatives, and a
                  vibrant campus life at Sandip University.
                </p>

                {/* Stream quick-picks */}
                <p className="text-xs font-semibold text-white/60 mb-2.5">
                  Not sure where to start? Browse by stream
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {streams.map((s) => (
                    <a
                      key={s}
                      href="/academics"
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white hover:text-slate-900 border border-white/20 backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {s}
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="/admissions"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-sm shadow-lg shadow-red-900/50 hover:bg-[#E0163A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/academics"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Explore Programs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* ---------- RIGHT: ADMIT CARD ---------- */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/40 overflow-hidden lg:rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-5 py-3.5 bg-[#C8102E] text-white">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <GraduationCap className="w-4 h-4" />
                      Sandip University Admit Card
                    </div>
                    <span className="text-xs font-semibold text-white/80">
                      Step {step + 1} of {journey.length}
                    </span>
                  </div>

                  {/* Steps */}
                  <ol className="px-5 pt-5 pb-4 relative" role="tablist" aria-label="Admission steps">
                    <span
                      aria-hidden="true"
                      className="absolute left-[38px] top-9 bottom-9 w-px bg-slate-200"
                    />
                    {journey.map((j, i) => {
                      const Icon = j.icon;
                      const done = i < step;
                      const current = i === step;
                      return (
                        <li key={j.title} className="relative">
                          <button
                            type="button"
                            role="tab"
                            aria-selected={current}
                            onClick={() => setStep(i)}
                            className="w-full flex items-center gap-3.5 py-2.5 text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                          >
                            <span
                              className={`relative z-10 w-9 h-9 shrink-0 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                                current
                                  ? "bg-[#C8102E] border-[#C8102E] text-white"
                                  : done
                                  ? "bg-emerald-500 border-emerald-500 text-white"
                                  : "bg-white border-slate-300 text-slate-400"
                              }`}
                            >
                              {done ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <Icon className="w-4 h-4" />
                              )}
                            </span>
                            <span
                              className={`text-sm font-bold transition-colors ${
                                current ? "text-slate-900" : "text-slate-500"
                              }`}
                            >
                              {j.title}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>

                  {/* Perforated divider */}
                  <div className="relative">
                    <div className="border-t-2 border-dashed border-slate-300 mx-5" />
                    <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#1a1d2e]" />
                    <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#1a1d2e]" />
                  </div>

                  {/* Step detail */}
                  <div className="px-5 py-4 bg-slate-50 min-h-[92px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="flex gap-3"
                      >
                        <ActiveIcon className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                        <p className="text-[13px] text-slate-600 leading-relaxed">
                          {journey[step].detail}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- METRICS STRIP ---------- */}
            <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/15 overflow-hidden">
              {ctaMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-4 px-5 py-4">
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-[#C8102E]/25 border border-red-400/30 flex items-center justify-center text-[#FFD37A]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-2xl font-black tracking-tight leading-none">
                        {m.number}
                      </p>
                      <p className="text-xs font-bold text-slate-200 mt-1">
                        {m.label}
                      </p>
                      <p className="text-[11px] text-slate-400">{m.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}