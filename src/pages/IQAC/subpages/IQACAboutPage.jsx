import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Building2,
  Users,
  Microscope,
  CheckCircle2,
  Target,
  ShieldCheck,
  Quote,
} from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import IQACSidebarNav from "../components/IQACSidebarNav";
import seoData from "../../../components/SEO/seoData";
import aboutImg from "../../../assets/images/about-entrance.jpg";

export default function IQACAboutPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacAbout}
      badge="STATUTORY FRAMEWORK & QUALITY GOVERNANCE"
      title="About Internal Quality Assurance Cell (IQAC)"
      subtitle="Quality, academic excellence and continuous improvement."
      hideSubNav={true}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Sidebar Column */}
        <div className="lg:col-span-4 w-full order-2 lg:order-1">
          <IQACSidebarNav />
        </div>

        {/* Right Main Content Column */}
        <div className="lg:col-span-8 space-y-10 order-1 lg:order-2">
          
          {/* Top Campus Visual Feature Card */}
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

          {/* Content Highlight Cards */}
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

      </div>
    </IQACSubPageLayout>
  );
}
