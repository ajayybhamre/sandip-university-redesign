import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import ProgramDetailView from "./ProgramDetailView";
import graduationHeroImg from "../../assets/images/programs-graduation-hero.jpg";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import CharacterReveal from "../../components/Animated/CharacterReveal";
import CurtainReveal from "../../components/Animated/CurtainReveal";
import MagneticButton from "../../components/Animated/MagneticButton";
import {
  SCHOOLS_LIST,
  ALL_PROGRAMS_DATA
} from "./programsData";
import {
  Search as SearchIcon,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  GraduationCap
} from "lucide-react";

export default function AdmissionPrograms() {
  // Discovery State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSchool, setSelectedSchool] = useState("all");

  // Active Program Detail State (for modal view)
  const [activeDetailProgram, setActiveDetailProgram] = useState(null);

  const discoveryRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll Progress animation (Category 3: Scroll Animations)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Filtered Programs Calculation
  const filteredPrograms = useMemo(() => {
    return ALL_PROGRAMS_DATA.filter((prog) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.school.toLowerCase().includes(q) ||
        (prog.overview && prog.overview.toLowerCase().includes(q)) ||
        (prog.compactEligibility && prog.compactEligibility.toLowerCase().includes(q));

      const matchesLevel =
        selectedLevel === "all" ||
        prog.level.toUpperCase() === selectedLevel.toUpperCase();

      const matchesSchool =
        selectedSchool === "all" || prog.schoolId === selectedSchool;

      return matchesSearch && matchesLevel && matchesSchool;
    });
  }, [searchQuery, selectedLevel, selectedSchool]);

  const scrollToDiscovery = () => {
    if (discoveryRef.current) {
      discoveryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const levelOptions = [
    { id: "all", label: "All Degrees" },
    { id: "UG", label: "Undergraduate (UG)" },
    { id: "PG", label: "Postgraduate (PG)" },
    { id: "Diploma", label: "Diploma" },
    { id: "PhD", label: "Ph.D." }
  ];

  // Colored Degree Level Badge helper
  const getBadgeStyle = (level) => {
    switch (level.toUpperCase()) {
      case "UG":
        return "bg-red-50 text-[#C8102E] border-red-200";
      case "PG":
        return "bg-slate-900 text-white border-slate-900";
      case "DIPLOMA":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "PHD":
        return "bg-slate-100 text-slate-800 border-slate-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <>
      <SEO
        title="Academic Programs & Degree Catalog | Sandip University"
        description="Explore accredited undergraduate, postgraduate, diploma, and Ph.D. programs at Sandip University Nashik with eligibility, fees, and career pathways."
      />

      <Header />

      <main className="bg-[#FAF8F5] text-slate-900 min-h-screen font-sans selection:bg-[#C8102E] selection:text-white">

        {/* ==========================================
            1. HERO SECTION (Red / Black / White Shading)
        ========================================== */}
        <section ref={heroRef} className="relative w-full bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 overflow-hidden">
          
          {/* Crimson Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <motion.div style={{ y: heroTextY }} className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#C8102E] uppercase tracking-wider shadow-2xs">
                <Sparkles size={14} className="text-[#C8102E]" />
                <span>ACADEMIC DISCOVERY CATALOG</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Programs & Detailed <span className="text-[#C8102E]">Information</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Choose from accredited undergraduate, postgraduate, diploma, and Ph.D. degrees designed to empower your career ambitions.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <MagneticButton onClick={scrollToDiscovery}>
                  <button className="px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white text-sm font-bold shadow-lg shadow-red-600/25 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                    <span>Explore Programs</span>
                    <ArrowRight size={16} />
                  </button>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right Graduation Showcase Hero Image */}
            <div className="lg:col-span-5 relative">
              <CurtainReveal direction="up">
                <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-white group">
                  <motion.img
                    style={{ scale: heroImageScale }}
                    src={graduationHeroImg}
                    alt="Graduation Celebration - Sandip University Programs"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 text-slate-900 shadow-xl space-y-1">
                    <span className="text-[10px] font-extrabold text-[#C8102E] uppercase tracking-wider block">
                      DEGREES AWARDED 2026–27
                    </span>
                    <p className="text-xs font-bold text-slate-900">
                      Transforming Passion into Professional Success
                    </p>
                  </div>
                </div>
              </CurtainReveal>
            </div>

          </div>
        </section>

        {/* ==========================================
            2. SEARCH & FILTER BAR (Sticky Glassmorphism)
        ========================================== */}
        <section ref={discoveryRef} className="sticky top-0 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/90 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Search Bar Input */}
              <div className="relative flex-1 min-w-[280px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search programs by name, specialization, or keyword..."
                  className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8102E] focus:bg-white transition-colors shadow-2xs font-medium"
                />
                <SearchIcon
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Filter Buttons & School Dropdown */}
              <div className="flex flex-wrap items-center gap-2">
                
                {/* Level Buttons */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-2xs overflow-x-auto">
                  {levelOptions.map((lvl) => {
                    const isActive = selectedLevel === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        onClick={() => setSelectedLevel(lvl.id)}
                        className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? "bg-[#C8102E] text-white shadow-md"
                            : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    );
                  })}
                </div>

                {/* School Dropdown */}
                <div className="relative min-w-[210px]">
                  <select
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C8102E] appearance-none pr-9 cursor-pointer shadow-2xs"
                  >
                    {SCHOOLS_LIST.map((sch) => (
                      <option key={sch.id} value={sch.id}>
                        {sch.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>

              </div>
            </div>

            {/* Results Counter Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 font-semibold">
              <span>National Academic Degree Catalog</span>
              <span className="font-bold text-slate-900">
                Showing {filteredPrograms.length} of {ALL_PROGRAMS_DATA.length} programs
              </span>
            </div>

          </div>
        </section>

        {/* ==========================================
            3. PROGRAM CARDS GRID (Staggered Layout)
        ========================================== */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-4 shadow-sm">
              <GraduationCap size={44} className="mx-auto text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900">
                No matching programs found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try adjusting your search query or choosing a different academic school.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLevel("all");
                  setSelectedSchool("all");
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredPrograms.map((prog) => (
                  <motion.div
                    key={prog.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProgramCard
                      program={prog}
                      getBadgeStyle={getBadgeStyle}
                      onViewDetails={setActiveDetailProgram}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </section>

      </main>

      {/* ==========================================
          4. PROGRAM DETAILS MODAL
      ========================================== */}
      <AnimatePresence>
        {activeDetailProgram && (
          <ProgramDetailView
            program={activeDetailProgram}
            onClose={() => setActiveDetailProgram(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
