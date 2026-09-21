import { motion } from "framer-motion";
import {
  BookOpen,
  FileSpreadsheet,
  UserCheck,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

const responsibilitiesList = [
  {
    step: "01",
    title: "Curriculum Design & Pedagogical Development",
    icon: BookOpen,
    badge: "Academic Quality",
    summary:
      "Overseeing outcome-based learning modules, continuous syllabus modernizations, interdisciplinary electives, and Choice Based Credit Systems (CBCS).",
    points: [
      "Benchmarking course outcomes (COs) with program educational objectives (PEOs)",
      "Incorporating industry-relevant skills, certifications, and project-based learning",
      "Regular Board of Studies (BoS) curriculum audits",
    ],
  },
  {
    step: "02",
    title: "Academic & Administrative Auditing (AAA)",
    icon: FileSpreadsheet,
    badge: "Evaluation Framework",
    summary:
      "Executing rigorous annual internal and external audits to evaluate teaching methodologies, laboratory readiness, examination integrity, and administrative workflows.",
    points: [
      "Comprehensive peer reviews across all university constituent schools",
      "Action-taken reporting and continuous progress monitoring",
      "Evaluation of research output, patents, and faculty achievements",
    ],
  },
  {
    step: "03",
    title: "360° Feedback Collection & Analysis",
    icon: UserCheck,
    badge: "Stakeholder Alignment",
    summary:
      "Administering structured feedback mechanisms to capture authentic insights from students, parents, alumni, academic peers, and corporate recruiters.",
    points: [
      "Automated feedback portal for transparent course and faculty reviews",
      "Statistical trend analysis for administrative decision-making",
      "Publication of feedback action reports and policy adaptations",
    ],
  },
  {
    step: "04",
    title: "Faculty Development & Research Enrichment",
    icon: GraduationCap,
    badge: "Capacity Building",
    summary:
      "Organizing faculty development programs (FDPs), workshops, pedagogical training sessions, and research grant writing seminars.",
    points: [
      "Supporting faculty research publications in Scopus and Web of Science journals",
      "Promoting seed money funding for innovative faculty proposals",
      "Encouraging national and international conference participation",
    ],
  },
  {
    step: "05",
    title: "Accreditation & Statutory Compliance (AQAR / SSR)",
    icon: Layers,
    badge: "Regulatory Readiness",
    summary:
      "Synthesizing institutional data to prepare Annual Quality Assurance Reports (AQAR), Self Study Reports (SSR), and NIRF data submissions.",
    points: [
      "Timely uploading of statutory compliance reports to NAAC portal",
      "Organizing national quality seminars, webinars, and awareness campaigns",
      "Documenting best practices and institutional distinctiveness",
    ],
  },
];

export default function IQACResponsibilities() {
  return (
    <section className="py-20 bg-white dark:bg-[#161411] transition-colors duration-300">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900">
              03 — OPERATIONAL SCOPE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
            Core Responsibilities & <span className="text-[#C8102E]">Functions</span>
          </h2>
          
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            The operational spectrum of Sandip University IQAC encompasses systematic quality control across academic, administrative, research, and co-curricular domains.
          </p>
        </div>

        {/* Timeline / Alternating Content Blocks */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {responsibilitiesList.map((item, idx) => {
            const IconComponent = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 bg-[#FAF7F2] dark:bg-[#1E1B18] border border-[#EAE3D7] dark:border-[#2C2720] hover:border-amber-300/80 dark:hover:border-amber-700/60 transition-all duration-300 shadow-xs hover:shadow-xl ${
                  isEven ? "lg:ml-0" : "lg:mr-0"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 flex items-center md:flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#25201B] border border-amber-300/70 dark:border-amber-700/40 flex items-center justify-center text-[#C8102E] shadow-sm">
                      <IconComponent size={26} />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-900">
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB]">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 px-3 py-1 rounded-full uppercase tracking-wider">
                        <Sparkles size={12} />
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-medium">
                      {item.summary}
                    </p>

                    {/* Bullet Points */}
                    <div className="grid sm:grid-cols-2 gap-2.5 pt-4 border-t border-gray-200/80 dark:border-gray-800">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
