import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import campusHeroImg from "../../../assets/images/about-hero-campus.webp";

export default function IQACHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5F0E6] dark:from-[#141210] dark:via-[#1A1815] dark:to-[#161412] pt-8 pb-16 lg:pb-24 border-b border-[#EAE3D7] dark:border-[#2C2720]">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-8"
        >
          <Link to="/" className="hover:text-[#C8102E] dark:hover:text-red-400 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#C8102E] dark:text-red-400 font-semibold">IQAC</span>
        </motion.nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Top Gold & Red Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#201C18] border border-amber-300/60 dark:border-amber-700/40 text-xs font-bold uppercase tracking-wider text-[#92400E] dark:text-amber-400 shadow-sm mb-6">
              <Sparkles size={14} className="text-amber-500" />
              <span>Academic Governance & Institutional Standards</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-[1.1] mb-6">
              Internal Quality <br />
              <span className="bg-gradient-to-r from-[#C8102E] via-[#A00D24] to-[#92400E] bg-clip-text text-transparent">
                Assurance Cell
              </span>{" "}
              (IQAC)
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-8">
              Driving institutional excellence at Sandip University through systematic quality benchmarks, continuous academic audits, innovative pedagogical frameworks, and statutory compliance for global educational standards.
            </p>

            {/* Quick Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200/80 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Quality Audit</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Regular Evaluations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/50 flex items-center justify-center text-amber-600">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Accreditation</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">NAAC Standards</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E]">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Excellence</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Continuous Upgrade</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Graphic Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C8102E] via-amber-400 to-red-600 opacity-20 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#1E1B18] p-2 border border-amber-200/60 dark:border-amber-950 shadow-2xl">
                <img 
                  src={campusHeroImg} 
                  alt="Sandip University Campus - IQAC Quality Assurance" 
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-[#181512]/95 backdrop-blur-md border border-amber-200 dark:border-amber-900/50 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block font-mono">ESTABLISHED STATUTORY BODY</span>
                    <h3 className="text-sm font-extrabold text-[#1C1917] dark:text-[#F5F2EB]">Internal Quality Assurance Cell</h3>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Active Advisory Body" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
