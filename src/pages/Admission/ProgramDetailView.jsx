import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import {
  ArrowLeft,
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  Briefcase,
  Building2,
  DollarSign,
  FileText,
  Download,
  Phone,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  UploadCloud,
  CreditCard,
  X
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import AnimatedHeroHeading from "../../components/AnimatedHeroHeading";

export default function ProgramDetailView({ program, onBack }) {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [modalSuccessMsg, setModalSuccessMsg] = useState("");

  if (!program) return null;

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    setModalSuccessMsg("Brochure download link sent to your email & WhatsApp!");
    setTimeout(() => {
      setModalSuccessMsg("");
      setIsBrochureModalOpen(false);
    }, 2500);
  };

  return (
    <>
      <SEO
        title={`${program.title} | Sandip University`}
        description={program.overview}
      />

      <Header />

      <main className="bg-gray-50 dark:bg-[#0b0b0c] text-gray-900 dark:text-gray-100 min-h-screen font-sans selection:bg-[#C8102E] selection:text-white transition-colors duration-300">
        
        {/* ==========================================
            1. LARGE HERO BANNER
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-gray-950 via-[#140608] to-gray-900 text-white pt-14 pb-20 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back to Finder Button */}
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-bold text-gray-200 transition-all cursor-pointer mb-8 border border-white/15"
            >
              <ArrowLeft size={16} />
              <span>Back to Program Finder</span>
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#C8102E] text-white text-xs font-extrabold tracking-wide uppercase shadow-md">
                    {program.level} Degree
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 text-xs font-semibold">
                    {program.approval}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-red-300 text-xs font-semibold flex items-center gap-1">
                    <Clock size={14} /> {program.duration}
                  </span>
                </div>

                <AnimatedHeroHeading
                  headingText={program.title}
                  className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
                  delay={0.2}
                />

                <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl">
                  {program.school}
                </p>
              </div>

              {/* Quick Action Box */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/apply"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#C8102E] hover:bg-[#a00d24] text-white font-extrabold text-sm text-center transition-all shadow-lg shadow-red-900/40 hover:scale-102 flex items-center justify-center gap-2"
                >
                  <span>Apply Now for 2026-27</span>
                  <ChevronRight size={18} />
                </Link>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={16} />
                  <span>Download Course Syllabus</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            2. PROGRAM OVERVIEW & SPECS
        ========================================== */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText size={20} className="text-[#C8102E]" />
                  <span>Program Overview</span>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {program.overview}
                </p>
              </div>

              {/* Eligibility */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#C8102E]" />
                  <span>Eligibility Criteria</span>
                </h2>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#1a1a1d] border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {program.eligibility}
                </div>
              </div>

              {/* Curriculum Modules */}
              {program.curriculum && (
                <div className="p-8 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                  <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    <GraduationCap size={20} className="text-[#C8102E]" />
                    <span>Key Curriculum Highlights</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.curriculum.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#1a1a1d] border border-gray-200 dark:border-gray-800 flex items-center gap-3 text-xs font-bold text-gray-800 dark:text-gray-200"
                      >
                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Opportunities */}
              {program.careers && (
                <div className="p-8 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                  <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-[#C8102E]" />
                    <span>Career Pathways</span>
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {program.careers.map((career, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 border border-red-100 dark:border-red-900/40 text-xs font-extrabold"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Admission Process 4-Step Timeline */}
              <div className="p-8 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                  <Sparkles size={20} className="text-[#C8102E]" />
                  <span>Admission Process</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {[
                    { step: "01", title: "Apply Online", icon: UserCheck },
                    { step: "02", title: "Verify Docs", icon: FileText },
                    { step: "03", title: "Pay Fee", icon: CreditCard },
                    { step: "04", title: "Offer Letter", icon: GraduationCap }
                  ].map((s, idx) => {
                    const IconC = s.icon;
                    return (
                      <div key={idx} className="p-4 rounded-2xl bg-gray-50 dark:bg-[#1a1a1d] border border-gray-200 dark:border-gray-800 text-center space-y-2">
                        <div className="w-9 h-9 rounded-full bg-[#C8102E] text-white mx-auto flex items-center justify-center font-bold text-xs">
                          {s.step}
                        </div>
                        <h3 className="font-bold text-xs text-gray-900 dark:text-white">
                          {s.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Placement Stats Box */}
              {program.placementStats && (
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#18181b] to-black text-white border border-gray-800 shadow-xl space-y-4">
                  <h3 className="text-sm font-extrabold text-red-400 uppercase tracking-widest flex items-center gap-2">
                    <Award size={16} /> Placement Highlights
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-gray-400 uppercase block">Placement Rate</span>
                      <span className="text-xl font-black text-white">{program.placementStats.rate}</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-gray-400 uppercase block">Highest Package</span>
                      <span className="text-xl font-black text-emerald-400">{program.placementStats.highestPackage}</span>
                    </div>
                  </div>

                  {program.avgSalary && (
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold block">Average Salary Range</span>
                      <span className="text-base font-extrabold text-emerald-300">{program.avgSalary}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Top Recruiters */}
              {program.recruiters && (
                <div className="p-6 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
                  <h3 className="text-sm font-extrabold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <Building2 size={16} className="text-[#C8102E]" /> Top Recruiters
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.recruiters.map((rec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Need Counselling Sidebar Box */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#151518] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                <h3 className="text-sm font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
                  Need Help Applying?
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Speak directly with an admission counselor for instant assistance.
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:18002122714"
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={14} className="text-[#C8102E]" />
                    <span>📞 Call 1800-212-2714</span>
                  </a>

                  <a
                    href="https://wa.me/919158699111"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaWhatsapp size={14} />
                    <span>💬 Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Brochure Download Modal */}
      <AnimatePresence>
        {isBrochureModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#18181b] w-full max-w-md rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-2xl relative"
            >
              <button
                onClick={() => setIsBrochureModalOpen(false)}
                className="absolute right-5 top-5 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-[#C8102E] font-bold text-xs uppercase mb-2">
                <Download size={14} />
                <span>Instant PDF Syllabus</span>
              </div>

              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                Download {program.title} Prospectus
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Enter your details to receive the syllabus PDF directly.
              </p>

              {modalSuccessMsg ? (
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-bold text-center">
                  {modalSuccessMsg}
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit} className="space-y-4">
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

      <Footer />
    </>
  );
}
