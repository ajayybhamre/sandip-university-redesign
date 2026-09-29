import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Info,
  Target,
  Users,
  Leaf,
  Compass,
  Landmark,
  FileText,
  ShieldCheck,
  FileSpreadsheet,
  BookOpen,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const navHubSections = [
  {
    category: "Overview & Statutory Governance",
    items: [
      {
        title: "About IQAC",
        path: "/iqac",
        description: "Statutory establishment background, quality governance framework, and institutional commitment.",
        icon: Info,
        badge: "Overview",
      },
      {
        title: "Aims & Objectives",
        path: "/iqac/aims-objectives",
        description: "Core objectives, quality parameters, outcome metrics, and continuous standard setting.",
        icon: Target,
        badge: "Goals",
      },
      {
        title: "Members & Composition",
        path: "/iqac/members",
        description: "Committee directory comprising the Vice-Chancellor, IQAC Director, Registrar, Deans, and Experts.",
        icon: Users,
        badge: "Committee",
      },
    ],
  },
  {
    category: "Institutional Strategy & Distinctiveness",
    items: [
      {
        title: "Strategic Plan (2025–30)",
        path: "/iqac/strategic-plan",
        description: "5-Year institutional development roadmap, academic expansion, and research milestones.",
        icon: Compass,
        badge: "Roadmap",
      },
      {
        title: "Sustainability & Green Campus",
        path: "/iqac/sustainability",
        description: "Green campus initiatives, solar energy, zero-waste policies, and environmental quality audits.",
        icon: Leaf,
        badge: "Environment",
      },
      {
        title: "Institutional Distinctiveness",
        path: "/iqac/institutional-distinctiveness",
        description: "Sandip University's unique strengths: Industry 4.0 labs, research incubator, and social outreach.",
        icon: Sparkles,
        badge: "Excellence",
      },
    ],
  },
  {
    category: "Statutory Councils & Disclosures",
    items: [
      {
        title: "University Committees",
        path: "/iqac/committees",
        description: "Comprehensive directory of statutory, academic, administrative, and student welfare councils.",
        icon: Landmark,
        badge: "Councils",
      },
      {
        title: "IIQA Self Disclosure",
        path: "/iqac/iiqa-disclosure",
        description: "Institutional Information for Quality Assessment disclosures, NAAC readiness, and compliance.",
        icon: ShieldCheck,
        badge: "Accreditation",
      },
      {
        title: "Public Disclosure",
        path: "/iqac/public-disclosure",
        description: "Mandatory public disclosures, UGC 2(f)/12(B) approvals, state charter act, and AICTE records.",
        icon: FileSpreadsheet,
        badge: "Mandatory",
      },
    ],
  },
  {
    category: "Policies, Audits & Feedback",
    items: [
      {
        title: "Academic Policy",
        path: "/iqac/academic-policy",
        description: "Academic guidelines, Choice Based Credit System (CBCS), Outcome-Based Education (OBE), and credit rules.",
        icon: BookOpen,
        badge: "Regulations",
      },
      {
        title: "Minutes of Meetings",
        path: "/iqac/minutes",
        description: "Official proceedings, action taken reports, and decision archives of quarterly IQAC meetings.",
        icon: FileText,
        badge: "Archive",
      },
      {
        title: "Stakeholder Feedback System",
        path: "/iqac/feedback-system",
        description: "360° feedback collection for Students, Faculty, Employers, Alumni, and Parents.",
        icon: MessageSquare,
        badge: "Feedback",
      },
    ],
  },
];

export default function IQACNavHub() {
  return (
    <section className="py-20 bg-[#FAF7F2] dark:bg-[#1A1815] transition-colors duration-300 border-y border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest px-3.5 py-1 rounded-full bg-white dark:bg-[#24201B] border border-red-200 dark:border-red-900 shadow-xs">
              EXPLORE IQAC PORTAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
            IQAC Information & <span className="text-[#C8102E]">Navigation Hub</span>
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Navigate through all statutory sections, committees, academic policies, disclosures, meeting minutes, and feedback systems.
          </p>
        </div>

        {/* Grouped Category Grids */}
        <div className="space-y-12">
          {navHubSections.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-xs font-mono font-extrabold text-[#C8102E] uppercase tracking-widest mb-6 flex items-center gap-3">
                <span>{group.category}</span>
                <span className="flex-grow h-px bg-gray-200 dark:bg-gray-800" />
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, itemIdx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIdx * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className="group bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-amber-300/80 dark:hover:border-amber-700/60 transition-all duration-300 flex flex-col justify-between h-full block"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] group-hover:scale-110 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300 shadow-xs">
                              <IconComponent size={20} />
                            </div>

                            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                              {item.badge}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2 group-hover:text-[#C8102E] transition-colors">
                            {item.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-bold text-[#C8102E] group-hover:text-red-700">
                          <span>Explore Section</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
