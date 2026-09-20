import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Building2,
  Users,
  Microscope,
  CheckCircle2,
  Target,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO/SEO";
import seoData from "../../../components/SEO/seoData";
import IQACSidebarNav from "../components/IQACSidebarNav";
import aboutImg from "../../../assets/images/about-entrance.jpg";

export default function IQACAboutPage() {
  return (
    <>
      <SEO {...seoData.iqacAbout} />
      <Header />

      <main className="min-h-screen bg-[#FFFDF9] dark:bg-[#141210] font-sans antialiased selection:bg-[#C8102E] selection:text-white">
        
        {/* 1. Modern Page Hero */}
        <section className="relative overflow-hidden bg-white dark:bg-[#161412] pt-8 pb-12 lg:pt-10 lg:pb-16 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          {/* Subtle Red & Amber Lighting Accents */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 flex-wrap"
            >
              <Link to="/" className="hover:text-[#C8102E] dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <Link to="/iqac" className="hover:text-[#C8102E] dark:hover:text-red-400 transition-colors">
                IQAC
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#C8102E] dark:text-red-400 font-semibold">About IQAC</span>
            </motion.nav>

            {/* Hero Grid with Campus Visual */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200/80 dark:border-red-900/50 text-xs font-bold uppercase tracking-wider text-[#C8102E] dark:text-red-400 shadow-2xs mb-4">
                  <Sparkles size={14} className="text-[#C8102E] dark:text-red-400" />
                  <span>Statutory Framework & Quality Governance</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
                  About Internal Quality Assurance Cell (IQAC)
                </h1>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl">
                  Quality, academic excellence and continuous improvement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800 shadow-md bg-white dark:bg-[#1E1B18] p-2">
                  <img
                    src={aboutImg}
                    alt="Sandip University Quality Governance"
                    className="w-full h-56 sm:h-64 object-cover rounded-xl"
                  />
                  <div className="p-3.5 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#1C1917] dark:text-[#F5F2EB]">
                        Sandip University Campus
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        Statutory NAAC & UGC Quality Sustenance Unit
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Main Content & Sidebar Layout */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Main Content Column */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Official Content Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-[#1E1B18] rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                    <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest">
                      Official Overview
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-snug mb-6">
                    About Internal Quality Assurance Cell (IQAC)
                  </h2>

                  <div className="prose prose-stone dark:prose-invert max-w-none space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    <p>
                      In accordance with National Assessment and Accreditation Council (NAAC) guidelines, the <strong>Internal Quality Assurance Cell (IQAC)</strong> at Sandip University was established to ensure continuous operational excellence, academic vigor, administrative transparency, and post-accreditation quality sustenance.
                    </p>
                    <p>
                      IQAC functions as an active advisory and administrative node, facilitating curriculum benchmarks, faculty skill upgrades, outcome-based education (OBE), stakeholder feedback analysis, and institutional research ecosystem development across all constituent schools.
                    </p>
                  </div>

                  {/* Quality Policy Statement Box */}
                  <div className="mt-8 p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/25 border border-amber-200/90 dark:border-amber-900/50 shadow-2xs relative">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center flex-shrink-0">
                        <Quote size={20} />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#92400E] dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Compass size={16} />
                          <span>Quality Policy Statement</span>
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 italic font-medium leading-relaxed">
                          "Sandip University is dedicated to delivering world-class higher education through continuous quality monitoring, outcome-driven learning frameworks, faculty empowerment, interdisciplinary research, and statutory compliance with national standards."
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Content Highlight Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mb-6">
                    <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest block mb-1">
                      Key Operational Highlights
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB]">
                      Core Quality Focus Areas
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-red-200 dark:hover:border-red-900/50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                        <GraduationCap size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-1.5">
                        Academic Development
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Curriculum benchmarking, outcome-based education (OBE), and continuous quality monitoring across constituent schools.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-amber-200 dark:hover:border-amber-900/50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3">
                        <Building2 size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-1.5">
                        Administrative Development
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Enhancing operational excellence, administrative clarity, transparency, and statutory governance.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-red-200 dark:hover:border-red-900/50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                        <Users size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-1.5">
                        Faculty Development
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Facilitating faculty skill upgrades, teaching methodology enhancement, and academic empowerment.
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-amber-200 dark:hover:border-amber-900/50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3">
                        <Microscope size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-1.5">
                        Infrastructure & IT Facilities
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Upgrading laboratory facilities, learning resources, and supporting the institutional research ecosystem.
                      </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-red-200 dark:hover:border-red-900/50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-1.5">
                        Academic Audits
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Periodic internal and external quality audits across syllabi, examination processes, and departments.
                      </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800 shadow-2xs hover:border-amber-200 dark:hover:border-amber-900/50 transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3">
                        <Target size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-1.5">
                        Student Progression
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Tracking learner growth, stakeholder feedback analysis, and continuous post-accreditation quality sustenance.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Right Sidebar Column (Desktop 4 Cols) */}
              <div className="lg:col-span-4 w-full">
                <IQACSidebarNav />
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
