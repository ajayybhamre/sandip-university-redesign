import { useState } from "react";
import { Landmark, Users, ShieldCheck, Scale, FileText, ChevronRight } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const universityCommittees = [
  {
    name: "Governing Body",
    icon: Landmark,
    category: "Apex Statutory Council",
    scope: "Supreme policy formulation, annual budget approvals, statutory ordinance amendments, and institutional growth roadmap.",
    chair: "Hon'ble President / Chancellor",
    membersCount: "15 Members",
    functions: [
      "Approve statutory ordinances and annual audited statements",
      "Sanction creation of new schools, research centers, and academic chairs",
      "Monitor UGC, NAAC, and AICTE compliance reports",
    ],
  },
  {
    name: "Board of Management",
    icon: Users,
    category: "Executive Authority",
    scope: "Principal executive body overseeing day-to-day administrative operations, faculty appointments, and campus governance.",
    chair: "Hon'ble Vice Chancellor",
    membersCount: "12 Members",
    functions: [
      "Execute academic curricula and examination regulations",
      "Approve faculty recruitments, promotions, and academic infrastructure",
      "Sanction industry MoUs, research grants, and consultancy projects",
    ],
  },
  {
    name: "Academic Council",
    icon: Scale,
    category: "Academic Policy Council",
    scope: "Apex academic body prescribing degree regulations, examination systems, outcome-based syllabi, and research standards.",
    chair: "Vice Chancellor / Deans of Schools",
    membersCount: "20 Members",
    functions: [
      "Review and approve BoS curriculum revisions and CBCS credit structures",
      "Prescribe criteria for student admissions, examinations, and awards",
      "Oversee quality enhancement recommendations submitted by IQAC",
    ],
  },
  {
    name: "Internal Complaints Committee (ICC) & Anti-Ragging Cell",
    icon: ShieldCheck,
    category: "Student Welfare & Safety",
    scope: "Statutory committee maintaining campus safety, gender equity, anti-ragging compliance, and student grievance redressal.",
    chair: "Senior Women Faculty Officer",
    membersCount: "8 Members",
    functions: [
      "Strict enforcement of UGC anti-ragging regulations and zero-tolerance policy",
      "Inquire into student/staff safety concerns and maintain gender equity",
      "Organize regular awareness workshops on campus safety and ethics",
    ],
  },
];

export default function IQACCommitteesPage() {
  const [activeCommittee, setActiveCommittee] = useState(0);

  return (
    <IQACSubPageLayout
      seo={seoData.iqacCommittees}
      badge="STATUTORY & FUNCTIONAL COUNCILS"
      title="University Statutory Committees"
      subtitle="Overview of statutory bodies, governance councils, academic boards, and student welfare committees at Sandip University."
    >
      <div className="space-y-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Committee Switcher List */}
          <div className="lg:col-span-4 space-y-3">
            {universityCommittees.map((comm, idx) => {
              const IconComp = comm.icon;
              const isSelected = activeCommittee === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCommittee(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-md"
                      : "bg-white dark:bg-[#201C18] text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-800 hover:border-amber-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp size={20} className={isSelected ? "text-white" : "text-[#C8102E]"} />
                    <div>
                      <h4 className="font-bold text-sm leading-tight">{comm.name}</h4>
                      <p className={`text-[11px] ${isSelected ? "text-white/80" : "text-gray-500"}`}>{comm.category}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={isSelected ? "text-white" : "text-gray-400"} />
                </button>
              );
            })}
          </div>

          {/* Right Selected Committee Detail View */}
          <div className="lg:col-span-8 bg-white dark:bg-[#201C18] rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-200 dark:border-gray-800 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#C8102E] uppercase">{universityCommittees[activeCommittee].category}</span>
                <h3 className="text-2xl font-black text-[#1C1917] dark:text-[#F5F2EB]">{universityCommittees[activeCommittee].name}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 font-mono">
                {universityCommittees[activeCommittee].membersCount}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 font-mono">Chairperson / Head</h4>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{universityCommittees[activeCommittee].chair}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 font-mono">Scope of Governance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{universityCommittees[activeCommittee].scope}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-mono">Key Responsibilities & Functions</h4>
                <ul className="space-y-2">
                  {universityCommittees[activeCommittee].functions.map((fn, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2 flex-shrink-0" />
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
