import { motion } from "framer-motion";
import { Target, GraduationCap, BookOpenCheck, TrendingUp, Cpu, Users, Lightbulb, Award, CheckCircle2 } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const detailedObjectives = [
  {
    icon: Target,
    title: "Continuous Quality Benchmarking",
    description: "Develop, set, and monitor institutional quality parameters across all academic, research, and administrative departments at Sandip University.",
  },
  {
    icon: GraduationCap,
    title: "Learner-Centric Education Strategy",
    description: "Create a vibrant academic environment conducive to quality education and faculty maturation to adopt technology-driven teaching-learning processes.",
  },
  {
    icon: BookOpenCheck,
    title: "Curriculum Modernization",
    description: "Regularly revise school syllabi in consultation with Boards of Studies (BoS), aligning course outcomes with industry 4.0 requirements and national educational frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Periodic Academic & Administrative Audits (AAA)",
    description: "Organize systematic internal and external quality audits to evaluate teaching effectiveness, laboratory readiness, examination integrity, and administrative efficiency.",
  },
  {
    icon: Cpu,
    title: "ICT Infrastructure Expansion",
    description: "Accelerate modern educational technology integration, smart classrooms, virtual laboratories, online assessment tools, and LMS platforms.",
  },
  {
    icon: Users,
    title: "360° Stakeholder Feedback Analysis",
    description: "Collect, analyze, and publish actionable feedback from students, parents, alumni, faculty, and corporate employers to drive institutional reform.",
  },
  {
    icon: Lightbulb,
    title: "Interdisciplinary Research Incubation",
    description: "Promote faculty development programs (FDPs), peer-reviewed Scopus research publications, patent filings, seed money grants, and consultancy projects.",
  },
  {
    icon: Award,
    title: "Central Quality Repository & AQAR Reporting",
    description: "Maintain a central documentation system for institutional accreditation compliance, NAAC SSR submissions, and NIRF ranking participation.",
  },
];

export default function IQACAimsObjectivesPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacAimsObjectives}
      badge="STRATEGIC MISSION & QUALITY GOALS"
      title="Aims & Objectives of IQAC"
      subtitle="Building a conscious, consistent, and catalytic action plan to improve academic performance, administrative efficiency, and institutional governance."
    >
      <div className="space-y-12">
        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {detailedObjectives.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] mb-4">
                  <IconComp size={22} />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Expected Outcomes */}
        <div className="bg-[#FAF7F2] dark:bg-[#1E1B18] rounded-3xl p-8 border border-amber-200/80 dark:border-amber-900/40">
          <h3 className="text-xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-4">
            Expected Outcomes & Quality Impact
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Enhanced student engagement and measurable learning outcomes via Outcome-Based Education (OBE).</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Streamlined administrative processes and transparent governance across all constituent schools.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Higher research publication output, patent filings, and industry-sponsored consultancy grants.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Robust statutory readiness for national accreditations, NAAC SSR submissions, and NIRF rankings.</p>
            </div>
          </div>
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
