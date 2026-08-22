import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, Sparkles, ShieldCheck, GraduationCap } from "lucide-react";
import heroImg from "../../assets/images/apply-students.png";
import CharacterReveal from "../Animated/CharacterReveal";
import MagneticButton from "../Animated/MagneticButton";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import CurtainReveal from "../Animated/CurtainReveal";
import "./InternationalHero.css";

export default function InternationalHero() {
  const containerRef = useRef(null);

  // Category 3 Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={containerRef}
      className="intl-hero-wrapper relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 text-slate-900 overflow-hidden border-b border-slate-200/80"
    >
      {/* Background Soft Crimson Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div
            style={{ y: heroTextY }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#C8102E] font-extrabold text-xs tracking-wider uppercase shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#C8102E] animate-spin-slow" />
              <span>INTERNATIONAL ADMISSIONS HUB</span>
              <Sparkles className="w-3 h-3 text-[#C8102E]" />
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Your <span className="text-[#C8102E]">Global Education</span> Journey Starts Here
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Experience world-class education, cultural diversity, and a future-ready learning environment at Sandip University Nashik.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <MagneticButton>
                <a
                  href="#schools-section"
                  className="px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <Link
                  to="/international-admission/how-to-apply"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md transition-all duration-300 text-center"
                >
                  How to Apply
                </Link>
              </MagneticButton>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-6 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                <span>UGC & Government Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#C8102E]" />
                <span>Global Degree Recognition</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <CurtainReveal direction="up" className="w-full">
              <TiltCard className="w-full">
                <SpotlightCard className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden relative">
                  <motion.img
                    style={{ scale: heroImageScale }}
                    src={heroImg}
                    alt="International Students - Sandip University"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-top rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 text-slate-900 shadow-xl space-y-1">
                    <span className="text-[10px] font-black text-[#C8102E] uppercase tracking-wider block">
                      GLOBAL ADMISSIONS 2026–27
                    </span>
                    <p className="text-xs font-bold text-slate-900">
                      Welcoming Scholars from Over 15+ Countries
                    </p>
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
