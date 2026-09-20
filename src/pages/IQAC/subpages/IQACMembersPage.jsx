import { Landmark, Shield, Briefcase, UserCheck, Users, Award } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const memberCategories = [
  {
    category: "Chairperson",
    role: "Hon'ble Vice Chancellor",
    designation: "Head of the Institution & Executive Chairperson",
    responsibilities: "Provides visionary leadership, approves institutional quality policies, and chairs statutory IQAC meetings.",
    icon: Landmark,
    badge: "Ex-Officio Chair",
  },
  {
    category: "Director / Coordinator",
    role: "Director — IQAC",
    designation: "Senior Academician & Executive Secretary",
    responsibilities: "Executes day-to-day operations, coordinates quality audits, compiles AQAR reports, and liaises with NAAC/UGC.",
    icon: Shield,
    badge: "Executive Secretary",
  },
  {
    category: "Management Representative",
    role: "Management Nominee",
    designation: "Board of Management Member",
    responsibilities: "Ensures institutional policy alignment, strategic resource allocation, and capital infrastructure support.",
    icon: Briefcase,
    badge: "Governing Board",
  },
  {
    category: "Administrative Officers",
    role: "Statutory Administrative Body",
    designation: "Registrar, Finance Officer & Controller of Examinations",
    responsibilities: "Supervises administrative audits, examination integrity, statutory records, and financial allocation.",
    icon: UserCheck,
    badge: "Administration",
  },
  {
    category: "School Deans & Faculty",
    role: "Deans of Constituent Schools",
    designation: "Heads of Engineering, Management, Pharmacy, Law, Science & Agriculture",
    responsibilities: "Implement school-level quality benchmarks, outcome-based curricula,BoS reviews, and research standards.",
    icon: Users,
    badge: "Academic Deans",
  },
  {
    category: "External Experts & Alumni",
    role: "External Experts & Employer Nominees",
    designation: "Eminent Academicians, Industry Leaders & Alumni Representatives",
    responsibilities: "Provides external quality perspectives, industry skill alignment, and independent academic reviews.",
    icon: Award,
    badge: "External Experts",
  },
];

export default function IQACMembersPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacMembers}
      badge="STATUTORY COMMITTEE COMPOSITION"
      title="IQAC Members & Directory"
      subtitle="Constituted as per NAAC mandates, featuring statutory officers, school deans, administrative heads, and eminent external experts."
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberCategories.map((member, index) => {
            const IconComp = member.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E]">
                      <IconComp size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                      {member.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-wider block mb-1">
                    {member.category}
                  </span>

                  <h3 className="text-lg font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-1">
                    {member.role}
                  </h3>

                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    {member.designation}
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {member.responsibilities}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] font-semibold text-gray-400">
                  <span>Constitutional Statutory Position</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
