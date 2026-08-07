import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import ProgramDetailView from "./ProgramDetailView";
import heroEntranceImg from "../../assets/images/programs-hero-entrance.jpg";
import {
  SCHOOLS_DATA,
  ALL_PROGRAMS_DATA,
  WHY_CHOOSE_CARDS
} from "./programsData";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Building2,
  Users,
  Zap,
  Briefcase,
  Microscope,
  Globe,
  Phone,
  Download,
  X,
  Search as SearchIcon,
  Sparkles
} from "lucide-react";

import AnimatedHeroHeading from "../../components/AnimatedHeroHeading";

export default function AdmissionPrograms() {
  // Filter Dropdown States matching 1ss (Select Level, Select School, Select Specialization)
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSchool, setSelectedSchool] = useState("cse"); // default CSE or all
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");

  // Selected program for Dedicated Program Details view
  const [activeDetailProgram, setActiveDetailProgram] = useState(null);

  // Modals state
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isCounsellorModalOpen, setIsCounsellorModalOpen] = useState(false);
  const [modalSuccessMsg, setModalSuccessMsg] = useState("");

  const resultsRef = useRef(null);

  // Dynamic Specializations list based on Selected School
  const availableSpecializations = useMemo(() => {
    if (selectedSchool === "all") {
      return [
        "Artificial Intelligence",
        "Data Science",
        "Software Engineering",
        "Robotics & Automation",
        "Finance & Banking",
        "HR Management",
        "Pharmaceutics",
        "Corporate Law",
        "Fashion Design",
        "UI/UX Design",
      ];
    }
    switch (selectedSchool) {
      case "cse":
        return ["Artificial Intelligence", "Data Science", "Computer Applications", "Software Systems"];
      case "eng":
        return ["Mechanical Engg", "Civil Engg", "Electrical Engg", "Robotics & Automation"];
      case "mgmt":
        return ["General Management", "Finance & Investment", "HR Management", "Banking & Insurance"];
      case "pharm":
        return ["Pharmaceutics", "Pharmacology", "Clinical Pharmacy"];
      case "law":
        return ["Constitutional Law", "Corporate & Mergers Law", "Litigation & Advocacy"];
      case "sci":
        return ["Biotechnology", "Organic Chemistry", "Microbiology"];
      case "des":
        return ["Fashion Design", "UI/UX Communication Design", "Spatial Design"];
      case "voc":
        return ["Software Development", "Digital Marketing"];
      default:
        return [];
    }
  }, [selectedSchool]);

  // Filtered Programs Calculation
  const filteredPrograms = useMemo(() => {
    return ALL_PROGRAMS_DATA.filter((prog) => {
      const matchesLevel =
        selectedLevel === "all" ||
        prog.level === selectedLevel ||
        (selectedLevel === "UG" && prog.level === "UG") ||
        (selectedLevel === "PG" && prog.level === "PG") ||
        (selectedLevel === "Diploma" && prog.level === "Diploma") ||
        (selectedLevel === "PhD" && prog.level === "PhD");

      const matchesSchool =
        selectedSchool === "all" || prog.schoolId === selectedSchool;

      const matchesSpecialization =
        selectedSpecialization === "all" ||
        prog.title.toLowerCase().includes(selectedSpecialization.toLowerCase()) ||
        (prog.overview && prog.overview.toLowerCase().includes(selectedSpecialization.toLowerCase()));

      return matchesLevel && matchesSchool && matchesSpecialization;
    });
  }, [selectedLevel, selectedSchool, selectedSpecialization]);

  // Active School Metadata
  const activeSchoolObj = useMemo(() => {
    if (selectedSchool === "all") return null;
    return SCHOOLS_DATA.find((s) => s.id === selectedSchool) || null;
  }, [selectedSchool]);

  // Trigger search scroll
  const handleSearchClick = (e) => {
    e.preventDefault();
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Modal form submit
  const handleModalSubmit = (e, type) => {
    e.preventDefault();
    setModalSuccessMsg(
      type === "brochure"
        ? "Brochure PDF sent to your email & WhatsApp!"
        : "Admission Counsellor callback request received!"
    );
    setTimeout(() => {
      setModalSuccessMsg("");
      setIsBrochureModalOpen(false);
      setIsCounsellorModalOpen(false);
    }, 2500);
  };

  // Icon Resolver for Why Choose Cards
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Building2": return <Building2 size={22} />;
      case "Users": return <Users size={22} />;
      case "Zap": return <Zap size={22} />;
      case "Briefcase": return <Briefcase size={22} />;
      case "Microscope": return <Microscope size={22} />;
      case "Globe": return <Globe size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  // If program detail view is active, render dedicated ProgramDetailView page
  if (activeDetailProgram) {
    return (
      <ProgramDetailView
        program={activeDetailProgram}
        onBack={() => setActiveDetailProgram(null)}
      />
    );
  }

  return (
    <>
      <SEO
        title="Find Your Program | Sandip University"
        description="Filter and search undergraduate, postgraduate, diploma, and PhD programs offered at Sandip University."
      />

      <Header />

      <main className="bg-[#f8fafc] dark:bg-[#09090b] text-gray-900 dark:text-gray-100 min-h-screen font-sans selection:bg-[#C8102E] selection:text-white transition-colors duration-300">

        {/* ==========================================
            1. HERO BANNER WITH ENTRANCE IMAGE BACKGROUND
        ========================================== */}
        <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center py-16 sm:py-24 px-4 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={heroEntranceImg}
              alt="Sandip University Main Entrance"
              className="w-full h-full object-cover object-center scale-105 filter brightness-90 transition-transform duration-[10000ms]"
            />
            {/* Dark & Brand Red Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-[#C8102E]/65 dark:from-black/95 dark:via-black/85 dark:to-black/75"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full text-center sm:text-left space-y-3">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full text-white backdrop-blur-md border border-white/20">
              Admissions 2026-27
            </span>
            <AnimatedHeroHeading
              headingText="Explore Degree Courses & Specializations"
              className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md"
              delay={0.2}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs sm:text-sm text-gray-200 max-w-2xl font-medium leading-relaxed"
            >
              Select your academic level, school, and specialization to find the exact program for your career goals.
            </motion.p>
          </div>
        </section>

        {/* ==========================================
            2. FIND YOUR PROGRAM CARD SECTION (PLACED UNDER HERO SECTION)
        ========================================== */}
        <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-[#121215] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white space-y-4"
          >
            {/* Card Heading */}
            <h2 className="text-base sm:text-lg font-bold text-[#1e293b] dark:text-white font-serif tracking-tight">
              Find Your Program
            </h2>

            {/* 4-Element Horizontal Form Grid (3 Select Dropdowns + Red Search Button) */}
            <form onSubmit={handleSearchClick} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
              
              {/* 1. Select Level Dropdown */}
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1e] border border-gray-300 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#C8102E] appearance-none pr-10 cursor-pointer shadow-2xs"
                >
                  <option value="all">Select Level</option>
                  <option value="UG">UG (Undergraduate)</option>
                  <option value="PG">PG (Postgraduate)</option>
                  <option value="Diploma">Diploma</option>
                  <option value="PhD">PhD (Doctoral)</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              {/* 2. Select School Dropdown */}
              <div className="relative">
                <select
                  value={selectedSchool}
                  onChange={(e) => {
                    setSelectedSchool(e.target.value);
                    setSelectedSpecialization("all");
                  }}
                  className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1e] border border-gray-300 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#C8102E] appearance-none pr-10 cursor-pointer shadow-2xs"
                >
                  <option value="all">Select School</option>
                  {SCHOOLS_DATA.map((sch) => (
                    <option key={sch.id} value={sch.id}>
                      {sch.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              {/* 3. Select Specialization Dropdown */}
              <div className="relative">
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1e] border border-gray-300 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#C8102E] appearance-none pr-10 cursor-pointer shadow-2xs"
                >
                  <option value="all">Select Specialization</option>
                  {availableSpecializations.map((spec, idx) => (
                    <option key={idx} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              {/* 4. Red Search Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
              >
                <SearchIcon size={16} />
                <span>Search</span>
              </button>

            </form>
          </motion.div>
        </section>

        {/* ==========================================
            2. FILTERED RESULTS SECTION
        ========================================== */}
        <section ref={resultsRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header Row: School Name + Programs Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-gray-200 dark:border-gray-800 gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                {activeSchoolObj ? (
                  <>
                    <span>{activeSchoolObj.icon}</span>
                    <span>{activeSchoolObj.name}</span>
                  </>
                ) : (
                  <span>All Academic Programs</span>
                )}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {selectedLevel !== "all" ? `Filtered by Level: ${selectedLevel}` : "Showing all degree levels"}
                {selectedSpecialization !== "all" ? ` • Specialization: ${selectedSpecialization}` : ""}
              </p>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/40 text-[#C8102E] dark:text-red-400 text-xs font-extrabold self-start sm:self-auto">
              {filteredPrograms.length} {filteredPrograms.length === 1 ? "Program Found" : "Programs Found"}
            </span>
          </div>

          {/* Results List */}
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-[#121215] rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
              <BookOpen size={40} className="mx-auto text-gray-400 mb-3" />
              <h3 className="text-base font-bold text-gray-700 dark:text-gray-300">
                No matching programs found
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Try resetting your Level or Specialization filter options.
              </p>
              <button
                onClick={() => {
                  setSelectedLevel("all");
                  setSelectedSchool("all");
                  setSelectedSpecialization("all");
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-red-50 text-[#C8102E] font-bold text-xs hover:bg-red-100 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#121215] rounded-2xl border border-gray-200 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800/80 shadow-xs">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => setActiveDetailProgram(prog)}
                  className="p-5 hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-[#C8102E] transition-colors">
                      {prog.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{prog.duration}</span>
                      <span>•</span>
                      <span className="font-bold text-[#C8102E] dark:text-red-400">{prog.level}</span>
                      <span>•</span>
                      <span>{prog.approval}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#C8102E] dark:text-red-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4">
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>

        {/* ==========================================
            3. WHY CHOOSE SANDIP (6 MINIMAL CARDS)
        ========================================== */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Why Choose Sandip University
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CHOOSE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-[#121215] border border-gray-200/80 dark:border-gray-800 flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-100 dark:border-red-900/40 flex items-center justify-center text-[#C8102E] dark:text-red-400 flex-shrink-0">
                  {renderIcon(card.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            4. FINAL CTA SECTION
        ========================================== */}
        <section className="pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-gray-950 via-black to-[#1a0709] text-white border border-gray-800 shadow-xl relative overflow-hidden text-center sm:text-left">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Admissions 2026-27 Open
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Ready to Build Your Future?
                </h2>
                <p className="text-xs sm:text-sm text-gray-300">
                  Join thousands of students shaping their global careers at Sandip University.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap gap-3 items-center justify-center lg:justify-end">
                <Link
                  to="/apply"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-xs text-center transition-colors"
                >
                  Apply Now
                </Link>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer border border-white/20"
                >
                  Download Brochure
                </button>

                <button
                  onClick={() => setIsCounsellorModalOpen(true)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer border border-white/20"
                >
                  Talk to Counsellor
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Brochure Modal */}
      <AnimatePresence>
        {isBrochureModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#18181b] w-full max-w-md rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-2xl relative"
            >
              <button
                onClick={() => setIsBrochureModalOpen(false)}
                className="absolute right-5 top-5 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-[#C8102E] font-bold text-xs uppercase mb-2">
                <Download size={14} />
                <span>Instant PDF Download</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Download Brochure 2026-27
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Enter your details to receive the official prospectus.
              </p>

              {modalSuccessMsg ? (
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-bold text-center">
                  {modalSuccessMsg}
                </div>
              ) : (
                <form onSubmit={(e) => handleModalSubmit(e, "brochure")} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Mobile / WhatsApp No. *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
                  >
                    Download PDF Brochure
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Counsellor Modal */}
      <AnimatePresence>
        {isCounsellorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#18181b] w-full max-w-md rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-2xl relative"
            >
              <button
                onClick={() => setIsCounsellorModalOpen(false)}
                className="absolute right-5 top-5 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-[#C8102E] font-bold text-xs uppercase mb-2">
                <Phone size={14} />
                <span>Talk to Counsellor</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Request Callback
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Our admission expert will call you shortly.
              </p>

              {modalSuccessMsg ? (
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-bold text-center">
                  {modalSuccessMsg}
                </div>
              ) : (
                <form onSubmit={(e) => handleModalSubmit(e, "counsellor")} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ananya Patel"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
                  >
                    Request Call Now
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
