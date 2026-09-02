import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import scholarshipsHeroImg from "../../assets/images/scholarships-hero.jpg";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
import CharacterReveal from "../../components/Animated/CharacterReveal";
import CurtainReveal from "../../components/Animated/CurtainReveal";
import MagneticButton from "../../components/Animated/MagneticButton";
import SpotlightCard from "../../components/Animated/SpotlightCard";
import TiltCard from "../../components/Animated/TiltCard";
import {
  QUICK_STATS,
  MERIT_SCHOLARSHIPS_UG,
  MERIT_SCHOLARSHIPS_MS,
  SPORTS_SCHOLARSHIPS,
  OTHER_SCHOLARSHIPS,
  APPLICATION_STEPS,
  SCHOLARSHIP_FAQS
} from "./scholarshipsData";
import {
  Medal,
  Award,
  Sparkles,
  Users,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ArrowRight,
  Phone,
  FileText,
  Upload,
  Clock,
  ArrowDown
} from "lucide-react";

export default function Scholarships() {
  // Merit subcategory tab state ('ug' or 'ms')
  const [meritTab, setMeritTab] = useState("ug");

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categoriesRef = useRef(null);

  const scrollToCategories = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SEO
        title="Scholarships & Tuition Waivers 2026-27 | Sandip University"
        description="Explore Sandip University scholarship schemes offering up to 100% tuition fee waiver for Merit, Sports, and Special Welfare categories."
      />

      <Header />

      <main className="bg-[#FAF8F5] dark:bg-[#0c0c0d] text-slate-900 dark:text-white min-h-screen font-sans selection:bg-[#C8102E] selection:text-white pt-20">

        {/* ==========================================
            1. HERO SECTION WITH GRADUATE PHOTO SHOWCASE
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 dark:from-[#0c0c0d] dark:via-[#121215] dark:to-[#0c0c0d] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-zinc-800 overflow-hidden">
          
          {/* Ambient Crimson Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-wider shadow-2xs">
                <Sparkles size={14} className="text-[#C8102E] dark:text-red-400" />
                <span>SCHOLARSHIPS & WAIVERS 2026–27</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Scholarships & <span className="text-[#C8102E]">Financial Support</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                We believe in making quality education accessible. Explore our comprehensive scholarship programs offering up to 100% tuition fee waiver.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <MagneticButton onClick={scrollToCategories}>
                  <button className="px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white text-sm font-bold shadow-lg shadow-red-600/25 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                    <span>Explore Scholarships</span>
                    <ArrowDown size={16} />
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Right Column Graduate Photo Showcase */}
            <div className="lg:col-span-5 relative">
              <CurtainReveal direction="up">
                <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-900 group">
                  <img
                    src={scholarshipsHeroImg}
                    alt="Graduate Mortarboard Cap - Sandip University Scholarships"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-white/20 dark:border-zinc-800 text-slate-900 dark:text-white shadow-xl space-y-1">
                    <span className="text-[10px] font-extrabold text-[#C8102E] dark:text-red-400 uppercase tracking-wider block">
                      FINANCIAL SUPPORT SCHEMES
                    </span>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Empowering Merit, Sports & Exceptional Talent
                    </p>
                  </div>
                </div>
              </CurtainReveal>
            </div>

          </div>
        </section>

        {/* ==========================================
            2. QUICK STATS SECTION (Spotlight & Tilt Cards)
        ========================================== */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_STATS.map((stat, idx) => (
              <TiltCard key={idx} className="h-full">
                <SpotlightCard className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/90 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 space-y-2 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 border border-red-200 dark:border-red-900/40 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {idx === 0 && <Medal size={22} />}
                    {idx === 1 && <Sparkles size={22} />}
                    {idx === 2 && <Users size={22} />}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">
                      {stat.label}
                    </span>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-gray-300 mt-0.5 font-medium">
                      {stat.description}
                    </p>
                  </div>
                </SpotlightCard>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* ==========================================
            3. SCHOLARSHIP CATEGORIES
        ========================================== */}
        <section ref={categoriesRef} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* CATEGORY 1: MERIT SCHOLARSHIP */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 border-t-4 border-t-[#C8102E] shadow-lg overflow-hidden">
            
            {/* Header */}
            <div className="p-6 sm:p-8 bg-red-50/70 dark:bg-red-950/30 border-b border-red-200 dark:border-red-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Award size={28} className="text-[#C8102E] dark:text-red-400" />
                  <span>1) Merit Scholarship Scheme</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium">
                  Applicable based on qualifying exam percentage (12th / Graduation).
                </p>
              </div>

              {/* Subcategory Tabs */}
              <div className="flex items-center gap-1 bg-white dark:bg-zinc-800 p-1 rounded-xl border border-red-200 dark:border-red-900/40 self-start sm:self-auto shadow-2xs">
                <button
                  onClick={() => setMeritTab("ug")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    meritTab === "ug"
                      ? "bg-[#C8102E] text-white shadow-md"
                      : "text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  UG Students
                </button>
                <button
                  onClick={() => setMeritTab("ms")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    meritTab === "ms"
                      ? "bg-[#C8102E] text-white shadow-md"
                      : "text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  MS / PG Students
                </button>
              </div>
            </div>

            {/* Grid Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(meritTab === "ug" ? MERIT_SCHOLARSHIPS_UG : MERIT_SCHOLARSHIPS_MS).map((sch) => (
                  <ScholarshipCard key={sch.id} {...sch} colorScheme="crimson" />
                ))}
              </div>
            </div>

          </div>

          {/* CATEGORY 2: SPORTS SCHOLARSHIP */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 border-t-4 border-t-[#D4AF37] shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 bg-amber-50/70 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900/30">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <Medal size={28} className="text-[#D4AF37]" />
                <span>2) Sports Scholarship Scheme</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium mt-1">
                Waivers awarded for National, State, District, and School level sports champions.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPORTS_SCHOLARSHIPS.map((sch) => (
                  <ScholarshipCard key={sch.id} {...sch} colorScheme="gold" />
                ))}
              </div>
            </div>
          </div>

          {/* CATEGORY 3: OTHER SPECIAL SCHOLARSHIPS */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 border-t-4 border-t-slate-900 dark:border-t-white shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 bg-slate-100 dark:bg-zinc-800 border-b border-slate-200 dark:border-zinc-700">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <Sparkles size={28} className="text-slate-900 dark:text-white" />
                <span>3) Special Welfare Schemes</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium mt-1">
                Special schemes for female candidates, defense personnel, and Son of Soil residents.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {OTHER_SCHOLARSHIPS.map((sch) => (
                  <ScholarshipCard key={sch.id} {...sch} colorScheme="navy" />
                ))}
              </div>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
