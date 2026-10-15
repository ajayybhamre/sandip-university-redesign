import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Sparkles, CheckCircle2 } from "lucide-react";
import bannerBg from "../assets/images/soet2.webp";

const ctaMetrics = [
  {
    icon: BookOpen,
    number: "100+",
    label: "Programs Offered",
    sub: "UG, PG, Ph.D & Diploma Courses",
  },
  {
    icon: Users,
    number: "12,000+",
    label: "Active Students",
    sub: "Diverse Nationwide Campus",
  },
  {
    icon: Award,
    number: "95%+",
    label: "Placement Rate",
    sub: "250+ Top Corporate Recruiters",
  },
];

export default function CommunityCTA() {
  return (
    <section 
      id="community-cta"
      aria-label="Be a Part of Something Bigger"
      className="relative py-16 lg:py-24 bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Full-Width Rounded Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[36px] lg:rounded-[48px] overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800"
        >
          {/* Background Campus Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={bannerBg}
              alt="Sandip University Grand Campus"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
            />
            {/* Deep Navy Gradient & Sandip Red Soft Accent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/80 to-[#C8102E]/40 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* =========================================================================
                  LEFT COLUMN — HEADING, DESCRIPTION & CTAs
                 ========================================================================= */}
              <div className="lg:col-span-7">
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-bold text-rose-200 uppercase tracking-widest mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>ADMISSIONS OPEN 2025-26</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-[1.08] mb-4">
                  Be a Part of <br />
                  <span className="text-[#C8102E] font-serif italic font-normal drop-shadow-md">
                    Something Bigger.
                  </span>
                </h2>

                {/* Supporting Text */}
                <p className="text-xs sm:text-sm lg:text-[15px] max-w-[560px] text-slate-200 font-normal leading-relaxed mb-6">
                  Take the first step towards your academic journey and explore world-class educational opportunities, global research initiatives, and vibrant campus life at Sandip University.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="/admissions"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-900/50 hover:bg-[#A00C24] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="/academics"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-xs sm:text-sm hover:border-white/40 transition-all duration-300 shadow-sm group cursor-pointer"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* =========================================================================
                  RIGHT COLUMN — 3 COMPACT VERIFIED INFO CARDS
                 ========================================================================= */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {ctaMetrics.map((metric, idx) => {
                  const IconComp = metric.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-white/30 hover:bg-white/15 transition-all duration-300 flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#C8102E]/20 border border-red-500/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#C8102E] group-hover:text-white transition-colors shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black text-white tracking-tight">
                            {metric.number}
                          </span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-90" />
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                          {metric.label}
                        </p>
                        <p className="text-[11px] font-normal text-slate-400">
                          {metric.sub}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
