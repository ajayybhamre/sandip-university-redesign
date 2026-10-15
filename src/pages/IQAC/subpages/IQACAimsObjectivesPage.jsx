import { motion } from "framer-motion";
import { Target, CheckCircle2, Compass, Sparkles, Award } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import IQACSidebarNav from "../components/IQACSidebarNav";
import seoData from "../../../components/SEO/seoData";

const aimsData = [
  "To develop a responsive and compatible system for the holistic development of university in academic and administrative domains.",
  "To promote measures for university functioning towards quality enhancement by imbibing the quality culture and converge to best practices.",
];

const objectivesData = [
  "Development and application of quality benchmarks/parameters for various academic and administrative activities of the university.",
  "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.",
  "Arrangement for feedback response from students, parents and other stakeholders on quality-related processes.",
  "Dissemination of information on various quality parameters of higher education.",
  "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.",
  "Documentation of the various programmes/activities leading to quality improvement.",
  "Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.",
  "Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality.",
  "Development of Quality Culture in the University.",
  "Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.",
];

export default function IQACAimsObjectivesPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacAimsObjectives}
      badge="QUALITY ASSURANCE FRAMEWORK"
      title="Aims & Objectives"
      subtitle="Fostering academic excellence, continuous quality enhancement, and institutional accountability through strategic quality assurance initiatives."
      hideSubNav={true}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Sticky Sidebar Column */}
        <div className="lg:col-span-4 w-full order-2 lg:order-1">
          <IQACSidebarNav />
        </div>

        {/* Right Main Content Column */}
        <div className="lg:col-span-8 space-y-10 order-1 lg:order-2">
          
          {/* Section 1 — AIMS OF IQAC */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-[#1E1B18] rounded-3xl p-6 sm:p-8 border border-[#EBD8C7] dark:border-stone-800 shadow-2xs relative overflow-hidden space-y-6"
          >
            {/* Top Red Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C8102E]" />

            <div className="pb-4 border-b border-[#EBD8C7]/60 dark:border-stone-800">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-widest block mb-1">
                QUALITY ASSURANCE FRAMEWORK
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] tracking-tight">
                Aims of IQAC
              </h1>
              {/* Small Red Underline Accent */}
              <div className="w-16 h-1 bg-[#C8102E] rounded-full mt-3" />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {aimsData.map((aim, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF9] dark:bg-[#161412] border border-[#EBD8C7]/70 dark:border-stone-800/80 hover:border-[#C8102E]/40 transition-colors shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FBE8E7] dark:bg-red-950/60 border border-[#E8CFA3]/60 text-[#C8102E] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-mono shadow-2xs">
                    0{idx + 1}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#1C1917] dark:text-[#F5F2EB] leading-relaxed pt-0.5">
                    {aim}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 2 — OBJECTIVES */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-[#1E1B18] rounded-3xl p-6 sm:p-8 border border-[#EBD8C7] dark:border-stone-800 shadow-2xs space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-4 pb-4 border-b border-[#EBD8C7]/60 dark:border-stone-800">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-widest block mb-1">
                    INSTITUTIONAL QUALITY & CONTINUOUS IMPROVEMENT
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] tracking-tight">
                    Objectives
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#6D625F] dark:text-stone-400 mt-1">
                    IQAC will facilitate / contribute
                  </p>
                  {/* Small Red Underline Accent */}
                  <div className="w-16 h-1 bg-[#C8102E] rounded-full mt-3" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] dark:text-red-300 bg-[#FBE8E7] dark:bg-red-950/50 border border-[#E8CFA3]/70 dark:border-red-900/50 px-3.5 py-1.5 rounded-full shadow-2xs">
                  <Sparkles size={13} className="text-[#C8102E]" />
                  <span>Continuous Improvement</span>
                </div>
              </div>

              {/* 10 Objectives List Cards */}
              <div className="grid grid-cols-1 gap-4">
                {objectivesData.map((objective, index) => (
                  <div
                    key={index}
                    className="group bg-[#FFFDF9] dark:bg-[#161412] rounded-2xl p-5 border border-[#EBD8C7]/70 dark:border-stone-800 shadow-2xs hover:shadow-xs hover:border-[#C8102E]/40 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FBE8E7] dark:bg-red-950/60 border border-[#E8CFA3]/60 text-[#C8102E] dark:text-red-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] group-hover:text-white group-hover:border-[#C8102E] transition-all duration-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 pt-1">
                      <p className="text-sm sm:text-base text-[#1C1917] dark:text-[#F5F2EB] font-medium leading-relaxed">
                        {objective}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </IQACSubPageLayout>
  );
}
