import { useState } from "react";
import { ArrowRight, Landmark, Users, ShieldCheck, Layers, X, CheckCircle2 } from "lucide-react";

const governanceModules = [
  {
    id: "governing-body",
    title: "Governing Body",
    icon: Landmark,
    shortDesc:
      "The supreme authority responsible for university policies, strategic roadmap, long-term investments, and statutory governance.",
    details: {
      overview:
        "The Governing Body of Sandip University is constituted as per the Sandip University Act, Maharashtra. It serves as the apex decision-making council for institutional growth.",
      functions: [
        "Formulate institutional policies, statutory ordinances, and vision plans",
        "Approve annual budgets, audited accounts, and capital infrastructure projects",
        "Create academic chairs, schools, and specialized research centers",
        "Monitor global academic rankings, quality standards, and UGC compliance",
      ],
      composition:
        "Chaired by the Hon'ble President, featuring nominees from the Government of Maharashtra, eminent academicians, industry leaders, and university officers.",
    },
  },
  {
    id: "board-of-management",
    title: "Board of Management",
    icon: Users,
    shortDesc:
      "Oversees executive administration, academic regulations, faculty appointments, financial management, and campus operations.",
    details: {
      overview:
        "The Board of Management is the principal executive authority responsible for administering the academic and administrative affairs of the university.",
      functions: [
        "Implement academic curricula and examination regulations",
        "Approve faculty recruitments, promotions, and academic appointments",
        "Manage university infrastructure, hostels, and student amenities",
        "Execute industrial partnerships, research grants, and consultancy projects",
      ],
      composition:
        "Led by the Vice Chancellor, including Deans of Schools, Senior Professors, State Government Representatives, and Industry Experts.",
    },
  },
  {
    id: "officers",
    title: "University Officers",
    icon: ShieldCheck,
    shortDesc:
      "Chancellor, Vice Chancellor, Registrar, Deans of Schools, and Finance Officers executing day-to-day governance and operations.",
    details: {
      overview:
        "University Officers execute key statutory duties, ensuring smooth academic administration, regulatory compliance, and student welfare.",
      functions: [
        "Vice Chancellor — Academic & Administrative Chief Officer",
        "Registrar — Custodian of University Records and Legal Seal",
        "Finance Officer — Custodian of University Funds and Accounts",
        "Deans of Schools — Academic Heads supervising curriculum & research",
      ],
      composition:
        "Appointed in accordance with UGC guidelines and statutory provisions of the Sandip University Charter.",
    },
  },
  {
    id: "organization-structure",
    title: "Organization Structure",
    icon: Layers,
    shortDesc:
      "Hierarchical academic and administrative structure ensuring transparent governance, decentralization, and quality assurance.",
    details: {
      overview:
        "The organizational framework of Sandip University follows a decentralized, outcome-oriented governance structure designed for operational efficiency.",
      functions: [
        "Academic Council — Regulates course structures, syllabi & research standards",
        "Board of Studies — Formulates school-specific subject syllabi and evaluations",
        "IQAC (Internal Quality Assurance Cell) — Ensures continuous quality benchmarks",
        "Examination Cell — Conducts transparent, outcome-based evaluations",
      ],
      composition:
        "Interconnected academic councils, faculty boards, administrative directorates, and student welfare bodies.",
    },
  },
];

export default function GovernanceSection() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="governance" className="py-20 lg:py-24 bg-[#F5F0E6] dark:bg-[#191714] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300 border-y border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                04 — GOVERNANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1714] dark:text-[#F3EFE9] leading-tight font-sans">
              Statutory <span className="text-[#C8102E]">Governance & Management</span>
            </h2>
          </div>
          <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] max-w-md">
            Transparent institutional governance ensuring academic integrity, regulatory compliance, and institutional vision.
          </p>
        </div>

        {/* 4 Compact Governance Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {governanceModules.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24] hover:border-[#C8102E]/50 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#24201C] border border-[#3D342B] flex items-center justify-center text-red-400 mb-5 group-hover:scale-105 transition-transform shadow-sm">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-extrabold text-[#2B231D] dark:text-[#F3EFE9] mb-2 leading-snug font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#564B42] dark:text-[#C5BBB0] leading-relaxed line-clamp-3 mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => setActiveItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] group-hover:text-red-700 dark:group-hover:text-[#F58F9C] uppercase tracking-wider cursor-pointer pt-3 border-t border-[#EAE3D7] dark:border-[#2C2720]"
                >
                  <span>View Details</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Governance Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#1C1A16] rounded-2xl border border-[#E5DDD0] dark:border-[#332C24] p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE7DA] dark:bg-[#2A231C] flex items-center justify-center text-[#564B42] dark:text-[#C5BBB0] hover:text-[#C8102E] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#EAE3D7] dark:border-[#2C2720]">
              <div className="w-11 h-11 rounded-xl bg-[#EFE7DA] dark:bg-[#2A231C] border border-[#E3D7C5] dark:border-[#3D3328] flex items-center justify-center text-[#C8102E] dark:text-[#E86B7B] flex-shrink-0">
                <activeItem.icon size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider block">
                  Statutory Governance Body
                </span>
                <h3 className="text-xl font-black text-[#2B231D] dark:text-[#F3EFE9] font-sans">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider mb-2 font-sans">
                  Overview
                </h4>
                <p className="text-sm text-[#4A4037] dark:text-[#D5C9BD] leading-relaxed">
                  {activeItem.details.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider mb-3 font-sans">
                  Key Responsibilities & Functions
                </h4>
                <ul className="space-y-2.5">
                  {activeItem.details.functions.map((fn, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4037] dark:text-[#D5C9BD]">
                      <CheckCircle2 size={16} className="text-[#C8102E] dark:text-[#E86B7B] flex-shrink-0 mt-0.5" />
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider mb-2 font-sans">
                  Structure & Composition
                </h4>
                <p className="text-xs sm:text-sm text-[#564B42] dark:text-[#C5BBB0] bg-[#EFE8DD]/60 dark:bg-[#24201A] p-3.5 rounded-lg border border-[#E5DDD0] dark:border-[#332C24]">
                  {activeItem.details.composition}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-5 border-t border-[#EAE3D7] dark:border-[#2C2720] flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-full bg-[#C8102E] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
