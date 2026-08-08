import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import scholarshipsHeroImg from "../../assets/images/scholarships-hero.jpg";
import ScholarshipCard from "../../components/ScholarshipCard/ScholarshipCard";
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
        title="Scholarships | Sandip University"
        description="Explore Sandip University scholarship programs including Merit Scholarships, Sports Waivers, and Special Welfare Schemes offering up to 100% tuition fee waiver."
      />

      <Header />

      <main className="bg-[#FBFBFA] text-[#0F1B2B] min-h-screen font-sans selection:bg-[#2DD4BF] selection:text-[#0F1B2B] pt-20">

        {/* ==========================================
            1. HERO SECTION WITH GRADUATE PHOTO
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FBFBFA] via-[#F0F7FF] to-[#FBFBFA] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#2DD4BF]/10 via-[#0F1B2B]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[8px] bg-white border border-slate-200 text-xs font-semibold text-[#0F1B2B] shadow-2xs"
              >
                <Sparkles size={14} className="text-[#0D9488]" />
                <span>Scholarships & Waivers 2026–27</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0F1B2B] tracking-tight leading-tight"
              >
                Scholarships
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-lg text-[#667085] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
              >
                We believe in making quality education accessible. Explore our comprehensive scholarship programs designed to support talented and deserving students.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={scrollToCategories}
                  className="px-8 py-3.5 rounded-[8px] bg-[#0F1B2B] hover:bg-[#1a2c42] text-white font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Scholarships</span>
                  <ArrowDown size={16} className="text-[#2DD4BF]" />
                </button>
              </motion.div>
            </div>

            {/* Right Column Graduate Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-[16px] overflow-hidden border border-slate-200 shadow-xl bg-white group">
                <img
                  src={scholarshipsHeroImg}
                  alt="Graduate Mortarboard Cap - Sandip University Scholarships"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2B]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[12px] bg-white/90 backdrop-blur-md border border-white/20 text-[#0F1B2B] shadow-md space-y-1">
                  <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-wider block">
                    Financial Support 2026–27
                  </span>
                  <p className="text-xs font-serif font-bold text-[#0F1B2B]">
                    Empowering Academics, Sports & Exceptional Talent
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            2. QUICK STATS SECTION
        ========================================== */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-[12px] border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 space-y-2 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                <div className="w-12 h-12 rounded-[10px] bg-teal-50 text-[#0D9488] border border-teal-200 flex items-center justify-center flex-shrink-0">
                  {idx === 0 && <Medal size={22} />}
                  {idx === 1 && <Sparkles size={22} />}
                  {idx === 2 && <Users size={22} />}
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider block">
                    {stat.label}
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-serif text-[#0F1B2B]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#667085] mt-0.5">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            3. SCHOLARSHIP CATEGORIES (MAIN CONTENT)
        ========================================== */}
        <section ref={categoriesRef} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* ==========================================
              CATEGORY 1: MERIT SCHOLARSHIP
          ========================================== */}
          <div className="bg-white rounded-[12px] border border-slate-200 border-t-4 border-t-[#C8102E] shadow-2xs overflow-hidden">
            
            {/* Header */}
            <div className="p-6 sm:p-8 bg-red-50/70 border-b border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1B2B] flex items-center gap-2.5">
                  <Award size={28} className="text-[#C8102E]" />
                  <span>1) Merit Scholarship</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#667085]">
                  Applicable for current year and continuation subject to academic performance.
                </p>
              </div>

              {/* Subcategory Tabs */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-[8px] border border-red-200 self-start sm:self-auto">
                <button
                  onClick={() => setMeritTab("ug")}
                  className={`px-4 py-2 rounded-[6px] text-xs font-semibold transition-all cursor-pointer ${
                    meritTab === "ug"
                      ? "bg-[#C8102E] text-white shadow-2xs"
                      : "text-[#667085] hover:text-[#0F1B2B]"
                  }`}
                >
                  UG Students
                </button>
                <button
                  onClick={() => setMeritTab("ms")}
                  className={`px-4 py-2 rounded-[6px] text-xs font-semibold transition-all cursor-pointer ${
                    meritTab === "ms"
                      ? "bg-[#C8102E] text-white shadow-2xs"
                      : "text-[#667085] hover:text-[#0F1B2B]"
                  }`}
                >
                  MS / PG Students
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(meritTab === "ug" ? MERIT_SCHOLARSHIPS_UG : MERIT_SCHOLARSHIPS_MS).map((card) => (
                  <ScholarshipCard
                    key={card.id}
                    title={card.title}
                    tier={card.tier}
                    criteria={card.criteria}
                    waiverValue={card.waiverValue}
                    waiverText={card.waiverText}
                    colorScheme="crimson"
                  />
                ))}
              </div>

              {/* Notes Section for Merit */}
              <div className="p-4 bg-red-50/50 border-l-4 border-l-[#C8102E] rounded-[8px] space-y-2 text-xs text-[#0F1B2B]">
                <h4 className="font-bold uppercase tracking-wider text-red-900 flex items-center gap-1.5">
                  <AlertCircle size={14} className="text-[#C8102E]" />
                  <span>Important Notes for Merit Scholarship</span>
                </h4>
                <ul className="space-y-1.5 text-[#667085] pl-5 list-disc">
                  <li>All scholarships continue in subsequent years only if students maintain <strong>75% minimum attendance</strong> in both semesters (no exceptions allowed).</li>
                  <li>Awarded to a maximum <strong>15% of program intake</strong> strictly on a first-come-first-served basis.</li>
                  <li>Students selected in 1st year continue in subsequent years as per their respective slabs and academic performance.</li>
                </ul>
              </div>

            </div>

          </div>

          {/* ==========================================
              CATEGORY 2: SPORTS SCHOLARSHIP
          ========================================== */}
          <div className="bg-white rounded-[12px] border border-slate-200 border-t-4 border-t-[#D4AF37] shadow-2xs overflow-hidden">
            
            {/* Header */}
            <div className="p-6 sm:p-8 bg-amber-50/70 border-b border-amber-200 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1B2B] flex items-center gap-2.5">
                <Medal size={28} className="text-[#D4AF37]" />
                <span>2) Sports Scholarship</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#667085]">
                Applicable for current year and continuation subject to athletic performance and attendance.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPORTS_SCHOLARSHIPS.map((card) => (
                  <ScholarshipCard
                    key={card.id}
                    title={card.title}
                    tier={card.tier}
                    level={card.level}
                    achievement={card.achievement}
                    waiverValue={card.waiverValue}
                    waiverText={card.waiverText}
                    colorScheme="gold"
                  />
                ))}
              </div>

              {/* Notes Section for Sports */}
              <div className="p-4 bg-amber-50/50 border-l-4 border-l-[#D4AF37] rounded-[8px] space-y-2 text-xs text-[#0F1B2B]">
                <h4 className="font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <AlertCircle size={14} className="text-[#D4AF37]" />
                  <span>Important Notes for Sports Scholarship</span>
                </h4>
                <ul className="space-y-1.5 text-[#667085] pl-5 list-disc">
                  <li>All sports scholarships continue in subsequent year only if students maintain <strong>75% minimum attendance</strong>.</li>
                  <li>Entitled for <strong>2% of total program intake</strong> on a first-come-first-served basis.</li>
                  <li>Applicable based on the last academic year certification; submission of copy of relevant Certificates/Medal required.</li>
                </ul>
              </div>

            </div>

          </div>

          {/* ==========================================
              CATEGORY 3: OTHER SCHOLARSHIP SCHEMES
          ========================================== */}
          <div className="bg-white rounded-[12px] border border-slate-200 border-t-4 border-t-[#0F1B2B] shadow-2xs overflow-hidden">
            
            {/* Header */}
            <div className="p-6 sm:p-8 bg-slate-100/70 border-b border-slate-200 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1B2B] flex items-center gap-2.5">
                <Sparkles size={28} className="text-[#0F1B2B]" />
                <span>3) Other Scholarship Schemes</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#667085]">
                Applicable for the entire duration of the course for eligible welfare categories.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {OTHER_SCHOLARSHIPS.map((card) => (
                  <ScholarshipCard
                    key={card.id}
                    title={card.title}
                    type={card.type}
                    waiverValue={card.waiverValue}
                    waiverText={card.waiverText}
                    note={card.note}
                    colorScheme="navy"
                  />
                ))}
              </div>

              {/* Notes Section for Other Schemes */}
              <div className="p-4 bg-slate-100/70 border-l-4 border-l-[#0F1B2B] rounded-[8px] space-y-2 text-xs text-[#0F1B2B]">
                <h4 className="font-bold uppercase tracking-wider text-[#0F1B2B] flex items-center gap-1.5">
                  <AlertCircle size={14} className="text-[#0F1B2B]" />
                  <span>Important Notes for Other Scholarship Schemes</span>
                </h4>
                <ul className="space-y-1.5 text-[#667085] pl-5 list-disc">
                  <li>Applicable to all First Year students for UG courses and all programs.</li>
                  <li>Students selected in First Year continue in subsequent years as per respective slabs provided attendance remains <strong>&ge; 75%</strong>.</li>
                  <li>Scholarship will be withdrawn if student attendance falls below 75% in any semester.</li>
                </ul>
              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            4. HOW TO APPLY SECTION
        ========================================== */}
        <section className="py-16 bg-slate-100/70 border-t border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
                Application Procedure
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#0F1B2B]">
                How to Apply for Scholarships
              </h2>
              <p className="text-xs sm:text-sm text-[#667085]">
                Follow these simple steps to apply for your scholarship during the admission process.
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {APPLICATION_STEPS.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-[12px] border border-slate-200 shadow-2xs space-y-3 relative"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F1B2B] text-white flex items-center justify-center font-bold text-xs font-serif">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-sm text-[#0F1B2B]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Required Documents Box */}
            <div className="p-6 bg-white rounded-[12px] border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-sm font-bold font-serif text-[#0F1B2B] flex items-center gap-2">
                <FileText size={18} className="text-[#0D9488]" />
                <span>Required Documents Checklist for Scholarship Sanction</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-[#0F1B2B] font-medium pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-[6px] bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={14} className="text-[#0D9488]" />
                  <span>Qualifying Exam Marksheet / Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-[6px] bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={14} className="text-[#0D9488]" />
                  <span>SU-JEE / CET / JEE Scorecard</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-[6px] bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={14} className="text-[#0D9488]" />
                  <span>Aadhaar Card Copy</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-[6px] bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={14} className="text-[#0D9488]" />
                  <span>Caste / Income Certificate (if applicable)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-[6px] bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={14} className="text-[#0D9488]" />
                  <span>Sports Medal / Participation Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-[6px] bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={14} className="text-[#0D9488]" />
                  <span>Relevant Service Proof / Transfer Letter</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            5. FAQ SECTION
        ========================================== */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
              Scholarship Help Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F1B2B]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-[12px] border border-[#E2E8F0] divide-y divide-[#E2E8F0] overflow-hidden shadow-2xs">
            {SCHOLARSHIP_FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="p-5 sm:p-6">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0F1B2B] hover:text-[#0D9488] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#0D9488]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            6. CTA SECTION
        ========================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[16px] bg-gradient-to-r from-[#0F1B2B] via-[#14283f] to-[#0D9488] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
                Scholarship Admissions 2026–27
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
                Ready to Apply for a Scholarship?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Contact our admissions team to learn more about scholarship opportunities and start your application today.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              <Link
                to="/apply"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[8px] bg-[#2DD4BF] hover:bg-[#26b8a7] text-[#0F1B2B] font-bold text-xs sm:text-sm transition-colors text-center shadow-sm"
              >
                Start Application
              </Link>

              <a
                href="tel:18002122714"
                className="w-full sm:w-auto px-5 py-3.5 rounded-[8px] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors text-center border border-white/20 inline-flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>Contact Admissions</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
