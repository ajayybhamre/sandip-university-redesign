import { motion } from "framer-motion";
import {
  Target,
  GraduationCap,
  BookOpenCheck,
  TrendingUp,
  Cpu,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";

const iqacObjectives = [
  {
    icon: Target,
    title: "Quality Benchmarks",
    description:
      "Develop and set institutional quality parameters for academic and administrative performance across all departments.",
    highlight: "Standard Setting",
  },
  {
    icon: GraduationCap,
    title: "Learner-Centric Environment",
    description:
      "Promote innovative teaching-learning mechanisms and student-focused academic strategies to nurture holistic growth.",
    highlight: "Student Focus",
  },
  {
    icon: BookOpenCheck,
    title: "Curricular Relevance",
    description:
      "Ensure continuous curriculum revision aligned with global industry demands, technological advances, and societal needs.",
    highlight: "Global Standards",
  },
  {
    icon: TrendingUp,
    title: "Academic & Financial Audits",
    description:
      "Conduct periodic internal and external audits to review educational effectiveness, operational transparency, and financial discipline.",
    highlight: "Periodic Review",
  },
  {
    icon: Cpu,
    title: "ICT Integration",
    description:
      "Expand modern technology adoption, smart classroom infrastructure, online evaluation systems, and LMS platforms.",
    highlight: "Digital Campus",
  },
  {
    icon: Users,
    title: "Stakeholder Feedback",
    description:
      "Collect, analyze, and implement structured feedback from students, parents, alumni, faculty, and industry employers.",
    highlight: "360° Feedback",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description:
      "Encourage interdisciplinary research, patent generation, faculty development programs (FDPs), and consultancy projects.",
    highlight: "Innovation Hub",
  },
  {
    icon: Award,
    title: "Institutional Documentation",
    description:
      "Maintain a comprehensive central repository of quality activities, policies, reports, and national accreditation compliance.",
    highlight: "Documentation",
  },
];

export default function IQACObjectives() {
  return (
    <section className="py-20 bg-[#FAF7F2] dark:bg-[#1A1815] transition-colors duration-300 border-y border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FAF7F2] dark:bg-[#24201B] border border-red-200 dark:border-red-900 shadow-xs">
              02 — STRATEGIC GOALS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
            Key Objectives of <span className="text-[#C8102E]">IQAC</span>
          </h2>
          
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            The prime objective of IQAC is to build a conscious, consistent, and catalytic action plan to improve academic performance, administrative efficiency, and institutional governance.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {iqacObjectives.map((obj, index) => {
            const IconComponent = obj.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-amber-300/80 dark:hover:border-amber-700/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Highlight Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] group-hover:scale-110 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent size={22} />
                    </div>

                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                      {obj.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-3 group-hover:text-[#C8102E] transition-colors">
                    {obj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                {/* Bottom Red Accent Line */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#C8102E] transition-colors">
                  <span>Quality Metric</span>
                  <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-[#C8102E] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
