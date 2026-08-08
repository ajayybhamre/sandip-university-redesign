import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import ProgramDetailView from "./ProgramDetailView";
import graduationHeroImg from "../../assets/images/programs-graduation-hero.jpg";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import {
  SCHOOLS_LIST,
  ALL_PROGRAMS_DATA
} from "./programsData";
import {
  Search as SearchIcon,
  X,
  ChevronDown,
  ArrowRight,
  Clock,
  Sparkles,
  Layers,
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
    { id: "all", label: "All" },
    { id: "UG", label: "UG" },
    { id: "PG", label: "PG" },
    { id: "Diploma", label: "Diploma" },
    { id: "PhD", label: "PhD" }
  ];

  // Colored Degree Level Badge helper
  const getBadgeStyle = (level) => {
    switch (level.toUpperCase()) {
      case "UG":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "PG":
        return "bg-teal-50 text-teal-800 border-teal-200";
      case "DIPLOMA":
        return "bg-purple-50 text-purple-800 border-purple-200";
      case "PHD":
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <>
      <SEO
        title="Programs & Detailed Information | Sandip University"
        description="Explore academic programs and detailed course information at Sandip University including eligibility criteria, fees, curriculum, and career pathways."
      />

      <Header />

      <main className="bg-[#FBFBFA] text-[#0F1B2B] min-h-screen font-sans selection:bg-[#2DD4BF] selection:text-[#0F1B2B]">

        {/* ==========================================
            1. HERO SECTION WITH GRADUATION PHOTO
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FBFBFA] via-[#F0F7FF] to-[#FBFBFA] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden">
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#2DD4BF]/10 via-[#0F1B2B]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[8px] bg-white border border-slate-200/80 text-xs font-medium text-[#0F1B2B] shadow-2xs"
              >
                <Sparkles size={14} className="text-[#0D9488]" />
                <span>Programs & Detailed Information</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0F1B2B] tracking-tight leading-tight"
              >
                Programs & Detail Information
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-[#667085] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
              >
                Choose from over 20+ accredited undergraduate, postgraduate, diploma, and Ph.D. degrees designed to empower your career ambitions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={scrollToDiscovery}
                  className="px-6 py-3 rounded-[8px] bg-[#0F1B2B] hover:bg-[#1a2c42] text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 shadow-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight size={16} className="text-[#2DD4BF]" />
                </button>
              </motion.div>
            </div>

            {/* Right Graduation Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-[16px] overflow-hidden border border-slate-200 shadow-xl bg-white group">
                <img
                  src={graduationHeroImg}
                  alt="Graduation Celebration - Sandip University Programs"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2B]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[12px] bg-white/90 backdrop-blur-md border border-white/20 text-[#0F1B2B] shadow-md space-y-1">
                  <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-wider block">
                    Degrees Awarded 2026–27
                  </span>
                  <p className="text-xs font-serif font-bold text-[#0F1B2B]">
                    Transforming Passion into Professional Success
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            2. SEARCH & FILTER BAR (Sticky)
        ========================================== */}
        <section ref={discoveryRef} className="sticky top-0 z-30 bg-[#FBFBFA]/95 backdrop-blur-md py-4 border-b border-slate-200 shadow-2xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              
              {/* Search Bar Input */}
              <div className="relative flex-1 min-w-[280px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search programs by name or keyword..."
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-[8px] text-xs sm:text-sm text-[#0F1B2B] placeholder-[#667085] focus:outline-none focus:border-[#0D9488] transition-colors shadow-2xs"
                />
                <SearchIcon
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#667085] hover:text-[#0F1B2B]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Filter Buttons & School Dropdown */}
              <div className="flex flex-wrap items-center gap-2">
                
                {/* Level Buttons */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-[8px] border border-slate-200 shadow-2xs">
                  {levelOptions.map((lvl) => {
                    const isActive = selectedLevel === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        onClick={() => setSelectedLevel(lvl.id)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs font-medium transition-colors cursor-pointer ${
                          isActive
                            ? "bg-[#0F1B2B] text-white shadow-2xs"
                            : "text-[#667085] hover:text-[#0F1B2B] hover:bg-slate-50"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    );
                  })}
                </div>

                {/* School Dropdown */}
                <div className="relative min-w-[200px]">
                  <select
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-[8px] text-xs font-medium text-[#0F1B2B] focus:outline-none focus:border-[#0D9488] appearance-none pr-9 cursor-pointer shadow-2xs"
                  >
                    {SCHOOLS_LIST.map((sch) => (
                      <option key={sch.id} value={sch.id}>
                        {sch.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none"
                  />
                </div>

              </div>
            </div>

            {/* Results Counter Bar */}
            <div className="flex items-center justify-between text-xs text-[#667085] pt-1">
              <span>Dynamic academic program catalog</span>
              <span className="font-semibold text-[#0F1B2B]">
                Showing {filteredPrograms.length} of {ALL_PROGRAMS_DATA.length} programs
              </span>
            </div>

          </div>
        </section>

        {/* ==========================================
            3. PROGRAM CARDS (Responsive Grid)
        ========================================== */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-[12px] border border-slate-200 space-y-3">
              <GraduationCap size={36} className="mx-auto text-slate-400" />
              <h3 className="text-base font-serif font-bold text-[#0F1B2B]">
                No matching programs found
              </h3>
              <p className="text-xs text-[#667085]">
                Try adjusting your search criteria or clearing filter selections.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLevel("all");
                  setSelectedSchool("all");
                }}
                className="px-4 py-2 rounded-[8px] bg-slate-100 hover:bg-slate-200 text-[#0F1B2B] text-xs font-semibold transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((prog) => (
                <ProgramCard
                  key={prog.id}
                  program={prog}
                  getBadgeStyle={getBadgeStyle}
                  onViewDetails={setActiveDetailProgram}
                />
              ))}
            </div>
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
