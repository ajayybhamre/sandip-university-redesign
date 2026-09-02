import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import MagneticButton from "../Animated/MagneticButton";
import "./HowToApplyHero.css";

export default function HowToApplyHero() {
  return (
    <section className="how-to-apply-hero pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 dark:from-[#0B0B0D] dark:via-[#121216] dark:to-[#18181F] text-slate-900 dark:text-white overflow-hidden relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300">
      
      {/* Background Ambient Crimson Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#C8102E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/international-admission/overview" className="hover:text-[#C8102E] transition-colors">International</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#C8102E]">How to Apply</span>
        </motion.nav>

        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[#C8102E] font-extrabold text-xs tracking-wider uppercase mb-5 shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>INTERNATIONAL ADMISSIONS ROADMAP</span>
            <Sparkles className="w-3 h-3 text-[#C8102E]" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6"
          >
            How to <span className="text-[#C8102E]">Apply</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8"
          >
            A complete step-by-step guide for international students on program selection, application submission, document requirements, and official wire transfer fee payment.
          </motion.p>

          {/* Fast Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-200"
          >
            <a href="#application-journey" className="px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white hover:border-[#C8102E] hover:text-[#C8102E] dark:hover:text-[#C8102E] shadow-sm transition-all flex items-center gap-1.5">
              <span>01. Application Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
            </a>
            <a href="#wire-transfer-details" className="px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white hover:border-[#C8102E] hover:text-[#C8102E] dark:hover:text-[#C8102E] shadow-sm transition-all flex items-center gap-1.5">
              <span>02. SWIFT Wire Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
