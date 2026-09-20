import { motion } from "framer-motion";
import { UserCheck, Shield, Award, Users, Landmark, Briefcase } from "lucide-react";

const iqacCommitteeStructure = [
  {
    roleCategory: "Chairperson",
    title: "Hon'ble Vice Chancellor",
    designation: "Head of the Institution & Executive Chair",
    description: "Provides overall leadership, strategic direction, and institutional governance for all IQAC initiatives.",
    icon: Landmark,
    badge: "Ex-Officio Chair",
  },
  {
    roleCategory: "Director / Coordinator",
    title: "Director — IQAC",
    designation: "Senior Academician & Executive Secretary",
    description: "Steers day-to-day operations, quality audits, compliance documentation, and committee coordination.",
    icon: Shield,
    badge: "Executive Officer",
  },
  {
    roleCategory: "Management Representative",
    title: "Management Nominee",
    designation: "Board of Management Representative",
    description: "Ensures institutional policy alignment, resource allocation, and strategic infrastructure support.",
    icon: Briefcase,
    badge: "Governing Board",
  },
  {
    roleCategory: "Administrative Officers",
    title: "Senior Administrative Body",
    designation: "Registrar, Finance Officer & Controller of Examinations",
    description: "Manages statutory compliance, operational audits, examination integrity, and administrative efficiency.",
    icon: UserCheck,
    badge: "Administration",
  },
  {
    roleCategory: "School Deans & Faculty",
    title: "Deans & Senior Professors",
    designation: "Heads of Engineering, Management, Pharmacy, Law, Science & Agriculture",
    description: "Implement school-specific quality benchmarks, outcome-based curricula, and research standards.",
    icon: Users,
    badge: "Academic Deans",
  },
  {
    roleCategory: "External Experts & Alumni",
    title: "External Experts & Industry Nominees",
    designation: "Eminent Academicians, Industry Leaders & Alumni Representatives",
    description: "Provide independent quality evaluations, industry insights, and societal relevance feedback.",
    icon: Award,
    badge: "External Advisory",
  },
];

export default function IQACMembers() {
  return (
    <section className="py-20 bg-[#FAF7F2] dark:bg-[#1A1815] transition-colors duration-300 border-t border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest px-3.5 py-1 rounded-full bg-white dark:bg-[#24201B] border border-red-200 dark:border-red-900 shadow-xs">
              04 — COMMITTEE COMPOSITION
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
            IQAC Committee & <span className="text-[#C8102E]">Statutory Composition</span>
          </h2>
          
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            As per NAAC mandates, the IQAC Committee at Sandip University comprises key university statutory officers, school deans, administrative leaders, and external experts.
          </p>
        </div>

        {/* Member Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iqacCommitteeStructure.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-amber-300/80 dark:hover:border-amber-700/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E]">
                      <IconComponent size={22} />
                    </div>

                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                      {member.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-wider block mb-1">
                    {member.roleCategory}
                  </span>

                  <h3 className="text-lg font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-2">
                    {member.title}
                  </h3>

                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    {member.designation}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Statutory Note */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] font-semibold text-gray-400">
                  <span>Constitutional Member</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
