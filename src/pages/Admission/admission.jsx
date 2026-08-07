import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import FloatingAction from "../../components/FloatingAction";
import SEO from "../../components/SEO/SEO";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Clock,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  Send,
  User,
  BookOpen,
  MapPin,
  ClipboardList,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  FileCheck,
  Layers,
  Globe,
  ChevronRight,
  MessageSquare,
  UserCheck,
  UploadCloud,
  CreditCard
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import applyStudentsImg from "../../assets/images/apply-students.png";

import AnimatedHeroHeading from "../../components/AnimatedHeroHeading";

const stepsData = [
  {
    step: "01",
    title: "Online Register",
    desc: "Create your student portal profile by providing basic details & choice of school.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "Fill Form",
    desc: "Enter your academic qualifications, 10+2/UG scores, and course specialization.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Upload Proofs",
    desc: "Upload clear scanned copies of marksheets, entrance test scorecards & ID proof.",
    icon: UploadCloud,
  },
  {
    step: "04",
    title: "Pay App Fee",
    desc: "Complete secure application processing fee payment online via UPI/Card/NetBanking.",
    icon: CreditCard,
  },
  {
    step: "05",
    title: "Offer Letter",
    desc: "Receive official provisional allotment letter & complete enrollment reporting.",
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function ApplyNow() {
  const [activeTab, setActiveTab] = useState("apply"); // 'apply' or 'enquire'

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    state: "",
    courseCategory: "Undergraduate",
    program: "B.Tech Computer Science & Engineering",
    query: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToOptions = () => {
    const el = document.getElementById("options-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title="National Admissions Apply 2026-27 | Sandip University"
        description="Apply online or submit an enquiry for Undergraduate, Postgraduate & PhD programs at Sandip University Nashik."
      />

      <Header />

      {/* ==========================================
          1. HERO BANNER
      ========================================== */}
      <section className="bg-[#FAF8F5] dark:bg-[#0c0c0d] relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28">

        {/* Background Decorative Accent Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 dark:bg-red-950/20 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 dark:bg-amber-950/10 rounded-full filter blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">

              {/* Category Subheading Tag */}
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#C8102E]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]"></span>
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-gray-600 dark:text-gray-400 uppercase">
                  NATIONAL ADMISSIONS 2026-27
                </span>
              </div>

              {/* Massive Hero Heading with Staggered Word Reveal */}
              <AnimatedHeroHeading
                headingText="APPLY NOW"
                highlightWords={["NOW"]}
                className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tight leading-[0.92]"
                delay={0.2}
              />

              {/* Subtitle Description */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium max-w-lg leading-relaxed">
                Take the first step toward a brighter future. Applications open for world-class Undergraduate, Postgraduate & PhD programs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToOptions}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-[#C8102E] hover:bg-black text-white font-black text-base tracking-wider uppercase shadow-xl shadow-red-600/25 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <span>APPLY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={scrollToOptions}
                  aria-label="Scroll to Application Options"
                  className="w-13 h-13 rounded-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:border-[#C8102E] hover:text-[#C8102E] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* 12-Dot Decorative Grid Accent */}
              <div className="pt-4">
                <div className="grid grid-cols-4 gap-2 w-14 opacity-40">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Student Image & Architectural Arch Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">

                {/* Red Arch Line Accent Graphic */}
                <div className="absolute -top-8 -right-6 w-48 h-48 border-t-2 border-r-2 border-[#C8102E]/30 rounded-tr-[100px] pointer-events-none"></div>
                <div className="absolute top-10 right-0 w-3 h-3 rounded-full bg-[#C8102E] shadow-md shadow-red-500/50 animate-ping"></div>

                {/* Architectural Arch Niche Background */}
                <div className="w-full h-[450px] sm:h-[520px] bg-gradient-to-b from-[#EDE6DB] via-[#E4DACB] to-[#D5C9B6] dark:from-zinc-800 dark:to-zinc-900 rounded-t-[200px] sm:rounded-t-[240px] relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border-4 border-white/70 dark:border-zinc-800/80 flex items-end justify-center px-4 pt-6">

                  {/* Student Image: 1 girl and 1 boy student */}
                  <img
                    src={applyStudentsImg}
                    alt="Sandip University Male and Female Students"
                    className="w-full h-full object-cover object-top drop-shadow-2xl rounded-t-[180px] transition-transform duration-700 hover:scale-[1.02]"
                  />

                </div>

                {/* Decorative Bottom Shadow Base */}
                <div className="w-3/4 mx-auto h-4 bg-black/10 dark:bg-black/40 rounded-full filter blur-md"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Feature Bar */}
        <div className="relative max-w-5xl mx-auto -mt-6 sm:-mt-10 lg:-mt-14 z-20 px-4">
          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-2xl md:rounded-full p-4 sm:p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border border-gray-100 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-zinc-800">

            <div className="flex items-center justify-start md:justify-center gap-4 pt-2 md:pt-0 md:px-4">
              <div className="w-11 h-11 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/30 text-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white tracking-tight">
                  Simple Process
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Easy 5-step online form
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-center gap-4 pt-4 md:pt-0 md:px-4">
              <div className="w-11 h-11 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/30 text-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white tracking-tight">
                  Secure Application
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  100% Encrypted & Safe
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-center gap-4 pt-4 md:pt-0 md:px-4">
              <div className="w-11 h-11 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/30 text-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white tracking-tight">
                  Quick Response
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Counselor call within 24 hours
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>




      {/* ==========================================
          2. 5-STEP APPLICATION PROCESS (CLEAN CARD DESIGN - NO LINE BEHIND)
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#0b0b0c] relative overflow-hidden">

        {/* Background Dot Grid Pattern (5% Opacity) */}
        <div className="absolute inset-0 bg-[radial-gradient(#C8102E_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

        {/* Soft Red Ambient Gradient Glow Behind Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-500/10 via-[#C8102E]/15 to-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Floating Ambient Circles */}
        <div className="absolute top-12 left-10 w-24 h-24 rounded-full bg-red-400/10 blur-xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-rose-400/10 blur-xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/50 text-[#C8102E] text-xs font-extrabold uppercase tracking-wider mb-3 border border-red-100 dark:border-red-900/30 shadow-xs">
              <ClipboardList className="w-3.5 h-3.5" /> Admissions Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              5-Step Application Process
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 font-medium">
              A transparent, step-by-step roadmap to secure your seat at Sandip University.
            </p>
          </div>

          {/* Staggered Motion Cards Grid (NO LINE BEHIND CARDS) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10"
          >
            {stepsData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-gray-200/80 dark:border-zinc-800 shadow-lg hover:shadow-2xl hover:shadow-red-500/15 hover:border-[#C8102E] hover:-translate-y-2.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >

                {/* Center Top Number Badge Box (Matching Screenshot 2) */}
                <div className="w-13 h-13 rounded-2xl bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 font-black text-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-red-600/30">
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white mb-2 text-center group-hover:text-[#C8102E] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed text-center font-medium">
                  {item.desc}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ==========================================
          3. IMPORTANT INSTRUCTIONS
      ========================================== */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
              <AlertCircle className="w-3.5 h-3.5" /> Guidelines & Rules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Important Instructions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
              Please read the mandatory admission instructions before proceeding with payment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 shadow-md flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center flex-shrink-0 font-bold mt-1">
                📌
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  Check Minimum Eligibility
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Candidates must fulfill eligibility requirements (minimum 45%-50% aggregate in qualifying exams). Ineligible submissions will be rejected.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 shadow-md flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center flex-shrink-0 font-bold mt-1">
                📌
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  Valid Contact Information
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Provide an active Mobile Number & Email ID. All verification OTPs, interview schedules, and allotment letters will be sent electronically.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 shadow-md flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center flex-shrink-0 font-bold mt-1">
                📌
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  Scholarship & Merit Scores
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  To claim Sandip University Merit Scholarships (up to 100% tuition waiver), upload valid MHT-CET, JEE Main, GATE, or SU-JEE scorecards.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 shadow-md flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center flex-shrink-0 font-bold mt-1">
                📌
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  Original Document Reporting
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Selected candidates must report to the Nashik campus desk with original marksheets, transfer certificate, and migration certificate within 10 days of allotment.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          4. APPLICATION STATUS & ADMISSION FLOW
      ========================================== */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0c0c0d]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> Admission Status Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Application Status & Admission Flow
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
              Track how your application moves from initial submission to final campus enrollment.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-10 border border-gray-200/80 dark:border-zinc-800 shadow-xl max-w-5xl mx-auto">

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:md:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#C8102E] before:via-red-300 before:to-emerald-500">

              {/* Flow Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pl-14 md:pl-0">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-wider">Stage 1</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Application Submitted</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Instant registration confirmation & Application Reference ID generated.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#C8102E] text-white flex items-center justify-center font-bold shadow-md z-10 order-1 md:order-2">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="md:w-5/12 order-3">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-300 inline-block shadow-xs">
                    Status: <span className="text-emerald-600 dark:text-emerald-400 font-bold">Instant Confirmation</span>
                  </div>
                </div>
              </div>

              {/* Flow Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pl-14 md:pl-0">
                <div className="md:w-5/12 order-3 md:order-1 text-left md:text-right">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-300 inline-block shadow-xs">
                    Status: <span className="text-amber-600 dark:text-amber-400 font-bold">Within 24-48 Hours</span>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-md z-10 order-1 md:order-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 text-[10px] font-extrabold uppercase tracking-wider">Stage 2</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Document Verification</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Admissions committee verifies academic marksheets & eligibility criteria.</p>
                </div>
              </div>

              {/* Flow Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pl-14 md:pl-0">
                <div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
                  <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-600 text-[10px] font-extrabold uppercase tracking-wider">Stage 3</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Merit / SU-JEE Counseling</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Merit list published and counseling call for course preference confirmation.</p>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-md z-10 order-1 md:order-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="md:w-5/12 order-3">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-300 inline-block shadow-xs">
                    Status: <span className="text-purple-600 dark:text-purple-400 font-bold">Counseling Call</span>
                  </div>
                </div>
              </div>

              {/* Flow Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pl-14 md:pl-0">
                <div className="md:w-5/12 order-3 md:order-1 text-left md:text-right">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-300 inline-block shadow-xs">
                    Status: <span className="text-[#C8102E] font-bold">Provisional Allotment</span>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md z-10 order-1 md:order-2">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="md:w-5/12 text-left order-2 md:order-3">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-extrabold uppercase tracking-wider">Stage 4</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Provisional Admission Letter</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Official admission letter issued to lock your preferred course & hostel seat.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          5. OPTIONS (CHOOSE HOW YOU WANT TO PROCEED) & DYNAMIC FORM
      ========================================== */}
      <section id="options-section" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0c0c0d] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Select Your Preference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Choose How You Want To Proceed
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
              Select <span className="font-bold text-[#C8102E]">Apply Online</span> to register directly, or <span className="font-bold text-[#C8102E]">Enquire Now</span> to request a counselor callback.
            </p>
          </div>

          {/* 2-Option Card Selectors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-12">

            {/* Option 1: Apply Online Card */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("apply");
                setSubmitted(false);
              }}
              className={`w-full sm:w-1/2 p-5 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 cursor-pointer ${activeTab === "apply"
                ? "bg-[#C8102E] text-white border-[#C8102E] shadow-xl shadow-red-600/25 scale-[1.02]"
                : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-800 hover:border-[#C8102E]/60 shadow-xs"
                }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 transition-colors ${activeTab === "apply" ? "bg-white/20 text-white" : "bg-red-50 dark:bg-red-950/50 text-[#C8102E]"
                }`}>
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-base font-extrabold">Apply Online</h3>
                <p className="text-xs opacity-85 font-medium">Complete 2026-27 admission registration</p>
              </div>
            </button>

            {/* Option 2: Enquire Now Card */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("enquire");
                setSubmitted(false);
              }}
              className={`w-full sm:w-1/2 p-5 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 cursor-pointer ${activeTab === "enquire"
                ? "bg-[#C8102E] text-white border-[#C8102E] shadow-xl shadow-red-600/25 scale-[1.02]"
                : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-zinc-800 hover:border-[#C8102E]/60 shadow-xs"
                }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 transition-colors ${activeTab === "enquire" ? "bg-white/20 text-white" : "bg-red-50 dark:bg-red-950/50 text-[#C8102E]"
                }`}>
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-base font-extrabold">Enquire Now</h3>
                <p className="text-xs opacity-85 font-medium">Request a quick counselor callback</p>
              </div>
            </button>

          </div>

          {/* Form Card Container */}
          <div className="bg-white dark:bg-zinc-900/90 rounded-3xl p-6 sm:p-10 border border-gray-200/80 dark:border-zinc-800 shadow-xl max-w-4xl mx-auto transition-all">

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeTab === "apply" ? "Application Submitted Successfully!" : "Enquiry Received Successfully!"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm">
                  {activeTab === "apply"
                    ? "Thank you for registering. Your Application Reference ID is SU-2026-8942. Our admission desk will reach out shortly."
                    : "Thank you for your enquiry. An admission counselor will contact you within 24 hours to assist with your queries."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#C8102E] text-white font-bold text-sm rounded-xl hover:bg-black transition-colors cursor-pointer"
                >
                  {activeTab === "apply" ? "Submit Another Application" : "Submit Another Enquiry"}
                </button>
              </div>
            ) : activeTab === "apply" ? (

              /* APPLY ONLINE FORM */
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="border-b border-gray-200 dark:border-zinc-800 pb-4 mb-2">
                  <h3 className="text-xl font-black text-[#C8102E] uppercase flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Online Admission Form 2026-27
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Fill in all details accurately to submit your admission application.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#C8102E]" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C8102E]" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C8102E]" /> Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" /> State / Region *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* Level of Study */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C8102E]" /> Level of Study *
                    </label>
                    <select
                      value={formData.courseCategory}
                      onChange={(e) => setFormData({ ...formData, courseCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    >
                      <option value="Undergraduate">Undergraduate (UG)</option>
                      <option value="Postgraduate">Postgraduate (PG)</option>
                      <option value="PhD">Doctoral (PhD)</option>
                      <option value="Diploma">Diploma Courses</option>
                    </select>
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#C8102E]" /> Preferred Program *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    >
                      <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science & Engineering</option>
                      <option value="B.Tech AI & Data Science">B.Tech AI & Data Science</option>
                      <option value="MBA Master of Business Administration">MBA Master of Business Administration</option>
                      <option value="B.Pharm Bachelor of Pharmacy">B.Pharm Bachelor of Pharmacy</option>
                      <option value="B.Sc Agriculture">B.Sc Agriculture</option>
                      <option value="B.A. LL.B. Integrated">B.A. LL.B. Integrated</option>
                    </select>
                  </div>

                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#C8102E] hover:bg-black text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-300 cursor-pointer"
                  >
                    <span>SUBMIT ONLINE APPLICATION</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-medium">
                    Instant confirmation code & counselor call upon submission.
                  </p>
                </div>

              </form>

            ) : (

              /* ENQUIRE NOW FORM */
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="border-b border-gray-200 dark:border-zinc-800 pb-4 mb-2">
                  <h3 className="text-xl font-black text-[#C8102E] uppercase flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" /> Quick Admission Enquiry
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Have questions about courses, fees, or eligibility? Request a callback.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#C8102E]" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C8102E]" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C8102E]" /> Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    />
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#C8102E]" /> Interested Program *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                    >
                      <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science & Engineering</option>
                      <option value="B.Tech AI & Data Science">B.Tech AI & Data Science</option>
                      <option value="MBA Master of Business Administration">MBA Master of Business Administration</option>
                      <option value="B.Pharm Bachelor of Pharmacy">B.Pharm Bachelor of Pharmacy</option>
                      <option value="B.Sc Agriculture">B.Sc Agriculture</option>
                      <option value="B.A. LL.B. Integrated">B.A. LL.B. Integrated</option>
                    </select>
                  </div>

                </div>

                {/* Message / Query */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C8102E]" /> Your Specific Query / Question (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Ask us about hostel fees, entrance cutoff, scholarships, campus visits, etc."
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#C8102E] text-sm"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#C8102E] hover:bg-black text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-300 cursor-pointer"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-medium">
                    Our admissions team will call you back within 24 hours.
                  </p>
                </div>

              </form>

            )}

          </div>

        </div>
      </section>


      {/* ==========================================
          6. NEED ASSISTANCE?
      ========================================== */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> Support Help Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Need Assistance?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
              Our dedicated National Admission Counselors are here to answer all your queries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Phone Support */}
            <div className="bg-[#FAF8F5] dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200/80 dark:border-zinc-800 text-center space-y-4 hover:border-[#C8102E] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center mx-auto text-xl shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Toll-Free Helpline</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Available Mon - Sat (9:00 AM - 6:00 PM)</p>
              <a
                href="tel:18002122714"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-[#C8102E] font-bold text-sm border border-gray-200 dark:border-zinc-700 hover:border-[#C8102E] transition-colors"
              >
                1800 212 2714
              </a>
            </div>

            {/* Email Support */}
            <div className="bg-[#FAF8F5] dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200/80 dark:border-zinc-800 text-center space-y-4 hover:border-[#C8102E] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] flex items-center justify-center mx-auto text-xl shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email Admissions</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Response within 12 hours</p>
              <a
                href="mailto:admissions@sandipuniversity.edu.in"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-[#C8102E] font-bold text-xs border border-gray-200 dark:border-zinc-700 hover:border-[#C8102E] transition-colors truncate max-w-full"
              >
                admissions@sandipuniversity.edu.in
              </a>
            </div>

            {/* WhatsApp Support */}
            <div className="bg-[#FAF8F5] dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200/80 dark:border-zinc-800 text-center space-y-4 hover:border-emerald-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-[#25D366] flex items-center justify-center mx-auto text-xl shadow-xs">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp Desk</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Instant Chat & Guidance</p>
              <a
                href="https://wa.me/919168620000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:bg-[#20ba5a] transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          7. APPLY NOW CTA BANNER
      ========================================== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#C8102E] via-rose-700 to-[#A00B22] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-4 h-4 animate-pulse" /> Limited Seats Available For 2026-27
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Transform Your Future?
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium">
            Join over 15,000+ ambitious students at Sandip University Nashik. Fill out your online application in under 5 minutes.
          </p>

          <div className="pt-4">
            <button
              onClick={scrollToOptions}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white text-[#C8102E] hover:bg-black hover:text-white font-black text-sm uppercase tracking-wider shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <span>APPLY NOW FOR 2026-27</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingAction />
    </>
  );
}

export default ApplyNow;
