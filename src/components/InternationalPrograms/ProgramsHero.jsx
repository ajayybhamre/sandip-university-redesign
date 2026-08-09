import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ChevronRight, Sparkles, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import heroImg from "../../assets/images/programs-graduation-hero.jpg";
import MagneticButton from "../Animated/MagneticButton";
import CurtainReveal from "../Animated/CurtainReveal";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import "./ProgramsHero.css";

export default function ProgramsHero() {
  return (
    <section className="programs-hero pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 text-slate-900 overflow-hidden relative border-b border-slate-200/80">
      
      {/* Background Ambient Crimson Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#C8102E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/international-admission/overview" className="hover:text-[#C8102E] transition-colors">International</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#C8102E]">Programs Offered</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#C8102E] font-extrabold text-xs tracking-wider uppercase shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>INTERNATIONAL DEGREE CATALOG</span>
              <Sparkles className="w-3 h-3 text-[#C8102E]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Explore Programs at <span className="text-[#C8102E]">Sandip University</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Discover undergraduate, postgraduate, and foundation pathways designed to help international students build a successful global career.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <MagneticButton>
                <a
                  href="#program-discovery"
                  className="px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Degree Courses</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <Link
                  to="/international-admission/contact"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C8102E]" />
                  <span>Talk to Admissions Desk</span>
                </Link>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5 relative">
            <CurtainReveal direction="up">
              <TiltCard>
                <SpotlightCard className="p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl relative">
                  <img
                    src={heroImg}
                    alt="Sandip University International Programs"
                    className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 text-slate-900 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C8102E] flex items-center justify-center flex-shrink-0 font-black">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900">50+ Degree Specializations</div>
                      <div className="text-xs text-slate-500 font-bold">UG, PG & Foundation Pathways</div>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </CurtainReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
