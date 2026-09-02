import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ChevronRight, Sparkles, ArrowRight, Landmark } from "lucide-react";
import MagneticButton from "../Animated/MagneticButton";
import SpotlightCard from "../Animated/SpotlightCard";
import TiltCard from "../Animated/TiltCard";
import "./PartnershipsHero.css";

export default function PartnershipsHero() {
  return (
    <section className="partnerships-hero pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 dark:from-[#0B0B0D] dark:via-[#121216] dark:to-[#18181F] text-slate-900 dark:text-white overflow-hidden relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300">
      
      {/* Soft Glow Crimson Background Accents */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
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
          <span className="text-[#C8102E]">International Partnerships</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-[#D4A72C] font-extrabold text-xs tracking-wider uppercase shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>GLOBAL INSTITUTIONAL NETWORK</span>
              <Sparkles className="w-3 h-3 text-[#D4A72C]" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building Bridges <span className="text-[#C8102E]">Across Borders</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              Connecting Sandip University with leading global institutions and academic networks around the world for collaborative research, faculty exchanges, and student mobility.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <MagneticButton>
                <a
                  href="#partner-explorer"
                  className="px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Partner Universities</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#collaboration-opportunities"
                  className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-700 text-white font-bold text-base shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <Landmark className="w-4 h-4 text-[#D4A72C]" />
                  <span>Partnership MOUs</span>
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column Animated World Network Visual */}
          <div className="lg:col-span-5 relative">
            <TiltCard>
              <SpotlightCard className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-xs font-sans text-[#D4A72C] font-bold uppercase tracking-widest">
                    GLOBAL NETWORK NODE
                  </div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="relative z-10 my-8 text-center space-y-4">
                  <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/30 text-[#C8102E] mx-auto flex items-center justify-center shadow-inner">
                    <Globe className="w-10 h-10 animate-spin-slow text-[#C8102E]" />
                  </div>
                  <h3 className="text-xl font-black text-white">Sandip Global Alliance</h3>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto font-medium">
                    Connecting Nashik Campus directly with partner universities across Europe, Asia, Americas, and Australia.
                  </p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
