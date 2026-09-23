import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Building2,
  Users,
  Microscope,
  CheckCircle2,
  Target,
  Sparkles,
  Quote,
  Award,
  Compass,
} from "lucide-react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import IQACCreativeCardNav from "./components/IQACCreativeCardNav";
import aboutImg from "../../assets/images/about-entrance.jpg";

export default function IQAC() {
  return (
    <>
      <SEO {...seoData.iqac} />
      <Header />

      <main className="min-h-screen bg-[#FFFCF5] dark:bg-[#141210] font-sans antialiased selection:bg-[#C8102E] selection:text-white">
        
        {/* 1. Hero Section with Premium Ivory + Gold Theme */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#F8F3E8] to-[#FFFCF5] dark:from-[#141210] dark:via-[#191714] dark:to-[#161412] pt-8 pb-12 lg:pt-10 lg:pb-14 border-b border-[#EFE5D2] dark:border-amber-900/30 border-t-4 border-t-[#C9A227]">
          {/* Subtle Ambient Gold & Red Glows */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B665E] dark:text-amber-200/70 mb-5 flex-wrap"
            >
              <Link to="/" className="hover:text-[#C8102E] dark:hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-[#C9A227]" />
              <Link to="/iqac" className="hover:text-[#C8102E] dark:hover:text-amber-400 transition-colors">
                IQAC
              </Link>
              <ChevronRight size={14} className="text-[#C9A227]" />
              <span className="text-[#C8102E] dark:text-amber-400 font-semibold">
                Internal Quality Assurance Cell
              </span>
            </motion.nav>

            {/* Hero Grid with Visual Detail */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7"
              >
                {/* Red & Gold Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/40 dark:to-amber-950/40 border border-amber-300/80 dark:border-amber-700/60 text-xs font-bold uppercase tracking-wider text-[#C8102E] dark:text-amber-400 shadow-2xs mb-4">
                  <Sparkles size={14} className="text-[#C9A227]" />
                  <span>Statutory Governance Node</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] dark:text-[#F8F3E8] tracking-tight leading-tight mb-3 font-serif">
                  Internal Quality Assurance Cell (IQAC)
                </h1>

                {/* Thin Gold Decorative Accent */}
                <div className="w-24 h-1 bg-gradient-to-r from-[#C8102E] via-[#C9A227] to-[#EFE5D2] rounded-full mb-4" />

                <p className="text-base sm:text-lg text-[#6B665E] dark:text-amber-100/80 font-medium leading-relaxed max-w-2xl">
                  Fostering continuous quality enhancement, academic vigor, administrative excellence, and statutory compliance across Sandip University.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[#EFE5D2] dark:border-amber-900/40 shadow-md bg-white dark:bg-[#1C1A17] p-2 border-t-4 border-t-[#C9A227]">
                  <img
                    src={aboutImg}
                    alt="Sandip University Quality Governance"
                    className="w-full h-52 sm:h-60 object-cover rounded-xl"
                  />
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8]">
                        Sandip University Campus
                      </h4>
                      <p className="text-[11px] text-[#6B665E] dark:text-amber-200/70">
                        Statutory NAAC & UGC Quality Cell
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-[#C9A227]/40 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                      <Award size={18} className="text-[#C9A227]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 2. Main Body: Option 5 Creative Navigation + Official Content Card */}
        <section className="py-10 sm:py-14">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Option 5: Creative Card Navigation (4 Cols on Desktop) */}
              <div className="lg:col-span-4 w-full">
                <IQACCreativeCardNav />
              </div>

              {/* Main Content Area (8 Cols on Desktop) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Official Content Card with Thin Gold Accent */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-[#1C1A17] rounded-3xl p-6 sm:p-8 border border-[#EFE5D2] dark:border-amber-900/40 shadow-sm border-t-4 border-t-[#C9A227]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                    <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60">
                      Official Mandate
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] tracking-tight mb-6 font-serif">
                    Internal Quality Assurance Cell (IQAC)
                  </h2>

                  {/* Complete Official Paragraph - Preserved 100% Exactly */}
                  <div className="prose prose-stone dark:prose-invert max-w-none text-[#1F1F1F] dark:text-amber-100/90 text-base sm:text-lg leading-relaxed space-y-4">
                    <p className="leading-relaxed">
                      IQAC is one of the body that plays vital role in overall development of the University. It strengthens the academic domain as well as suggests the modification in administrative domain. This cell forecasts the need of industry and society and provides the valuable inputs to various statutory bodies like Governing Body and Board of Management. The recommendations given by IQAC includes the commencement of new curriculums, modifications in the existing curriculum to cater to the need of employers, implementation of ‘New Education Policy (NEP) – 2020’ for all the programs offered by University. The faculty development strategies also come under the purview of this committee that includes qualification up-gradation, promotion in service, sponsorship for attending the conferences, workshops, seminars, research funding, seed money for research etc. The committee also suggests the development of infrastructure, up-gradation of IT facilities, availability of rich knowledge resources in library etc. In addition, this committee executes the academic audits that helps to identify the gaps in curriculum which converges to Value Addition Program, skill based programs, global certification programs and entrepreneurship development programs. This initiative nurtures the progression of students in terms of placement, higher studies, competitive examinations and start ups.
                    </p>
                  </div>

                  {/* Accent Highlight Banner in Soft Cream & Gold */}
                  <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F8F3E8] dark:bg-amber-950/25 border border-[#C9A227]/50 shadow-2xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-[#C9A227] flex items-center justify-center flex-shrink-0 border border-amber-300/60">
                      <Quote size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#92400E] dark:text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Compass size={14} className="text-[#C8102E]" />
                        <span>Core Objective & Commitment</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[#1F1F1F] dark:text-amber-100 italic font-medium leading-relaxed">
                        Nurturing student progression in placements, higher studies, competitive examinations, and startups through outcome-based continuous quality enhancement.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Supporting Visual Highlights (Derived strictly from text) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest block mb-1">
                        Key Dimensions
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                        Core Focus Areas
                      </h3>
                    </div>
                    <span className="w-16 h-0.5 bg-[#C9A227] rounded-full hidden sm:block" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-[#1C1A17] rounded-2xl p-5 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C8102E]">
                      <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                        <GraduationCap size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-1">
                        Academic Development
                      </h4>
                      <p className="text-xs text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                        New curriculum commencement, NEP-2020 rollout, and employer-driven course modifications.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-[#1C1A17] rounded-2xl p-5 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C9A227]">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-[#C9A227] flex items-center justify-center mb-3">
                        <Building2 size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-1">
                        Administrative Development
                      </h4>
                      <p className="text-xs text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                        Administrative domain recommendations and valuable inputs to Governing Body and Board of Management.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-[#1C1A17] rounded-2xl p-5 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C8102E]">
                      <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                        <Users size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-1">
                        Faculty Development
                      </h4>
                      <p className="text-xs text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                        Qualification up-gradation, conference & seminar sponsorships, seed money, and research funding.
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-[#1C1A17] rounded-2xl p-5 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C9A227]">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-[#C9A227] flex items-center justify-center mb-3">
                        <Microscope size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-1">
                        Infrastructure & IT Facilities
                      </h4>
                      <p className="text-xs text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                        Development of physical infrastructure, IT facility upgrades, and rich library knowledge resources.
                      </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white dark:bg-[#1C1A17] rounded-2xl p-5 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C8102E]">
                      <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                        <CheckCircle2 size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-1">
                        Academic Audits
                      </h4>
                      <p className="text-xs text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                        Executing audits to bridge curriculum gaps through Value Addition, Skill Development & Certification programs.
                      </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white dark:bg-[#1C1A17] rounded-2xl p-5 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C9A227]">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-[#C9A227] flex items-center justify-center mb-3">
                        <Target size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-1">
                        Student Progression
                      </h4>
                      <p className="text-xs text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                        Nurturing placement outcomes, higher education pathways, competitive exams, and entrepreneurial startups.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
