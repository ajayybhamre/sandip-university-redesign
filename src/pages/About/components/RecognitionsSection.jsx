import { ShieldCheck, Award, Globe, Building2, CheckCircle } from "lucide-react";

const approvals = [
  {
    title: "UGC Recognition",
    code: "Section 2(f)",
    desc: "Recognized by University Grants Commission (UGC) under Section 2(f) of UGC Act 1956.",
  },
  {
    title: "AICTE Approval",
    code: "Technical Edu",
    desc: "All Engineering & Management degree programs are approved by AICTE, New Delhi.",
  },
  {
    title: "PCI Approval",
    code: "Pharmacy Council",
    desc: "B.Pharm & M.Pharm courses approved by Pharmacy Council of India (PCI).",
  },
  {
    title: "BCI Approval",
    code: "Bar Council",
    desc: "School of Law programs (LL.B, BA LL.B) approved by Bar Council of India.",
  },
];

const memberships = [
  {
    name: "Association of Indian Universities (AIU)",
    type: "National Equivalence & Sports Body",
  },
  {
    name: "Confederation of Indian Industry (CII)",
    type: "Industry Integration Partner",
  },
  {
    name: "National Skill Development Corporation (NSDC)",
    type: "Skill Excellence Member",
  },
];

const mous = [
  {
    title: "Charles Sturt University, Australia",
    focus: "Student Exchange & Joint Research Programs",
  },
  {
    title: "Belarusian National Technical University (BNTU)",
    focus: "Engineering Research & Technology Transfer",
  },
  {
    title: "Synergy University, Moscow",
    focus: "Global Business & Management Innovation",
  },
];

export default function RecognitionsSection() {
  return (
    <section id="recognition" className="py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#161411] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                05 — RECOGNITION & COLLABORATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1714] dark:text-[#F3EFE9] leading-tight font-sans">
              Statutory Approvals & <span className="text-[#C8102E]">Global MOUs</span>
            </h2>
          </div>
          <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] max-w-md">
            Fully recognized by national statutory councils and globally partnered with leading international universities.
          </p>
        </div>

        {/* 3 Columns: Approvals, Memberships, Global MOUs */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Column 1: Statutory Approvals */}
          <div className="flex flex-col p-6 rounded-2xl bg-[#F5F0E6] dark:bg-[#1C1A16] border border-[#E5DDD0] dark:border-[#332C24]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAE3D7] dark:border-[#2C2720]">
              <div className="w-9 h-9 rounded-lg bg-[#24201C] border border-[#3D342B] flex items-center justify-center text-red-400 shadow-sm">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-[#2B231D] dark:text-[#F3EFE9] font-sans">
                Statutory Approvals
              </h3>
            </div>

            <div className="space-y-4">
              {approvals.map((app, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#2B231D] dark:text-[#F3EFE9]">{app.title}</span>
                    <span className="text-[10px] font-mono font-bold text-[#C8102E] dark:text-[#E86B7B] bg-[#EFE7DA] dark:bg-[#2A231C] px-2 py-0.5 rounded border border-[#E3D7C5] dark:border-[#3D3328]">
                      {app.code}
                    </span>
                  </div>
                  <p className="text-xs text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Institutional Memberships */}
          <div className="flex flex-col p-6 rounded-2xl bg-[#F5F0E6] dark:bg-[#1C1A16] border border-[#E5DDD0] dark:border-[#332C24]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAE3D7] dark:border-[#2C2720]">
              <div className="w-9 h-9 rounded-lg bg-[#EFE7DA] dark:bg-[#2A231C] border border-[#E3D7C5] dark:border-[#3D3328] flex items-center justify-center text-[#C8102E] dark:text-[#E86B7B]">
                <Award size={18} />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-[#2B231D] dark:text-[#F3EFE9] font-sans">
                Memberships & Affiliations
              </h3>
            </div>

            <div className="space-y-4">
              {memberships.map((mem, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24] flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#C8102E] dark:text-[#E86B7B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#2B231D] dark:text-[#F3EFE9] leading-snug">
                      {mem.name}
                    </h4>
                    <p className="text-[11px] text-[#6E6156] dark:text-[#A89D91] mt-1">
                      {mem.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Global MOUs */}
          <div className="flex flex-col p-6 rounded-2xl bg-[#F5F0E6] dark:bg-[#1C1A16] border border-[#E5DDD0] dark:border-[#332C24]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAE3D7] dark:border-[#2C2720]">
              <div className="w-9 h-9 rounded-lg bg-[#EFE7DA] dark:bg-[#2A231C] border border-[#E3D7C5] dark:border-[#3D3328] flex items-center justify-center text-[#C8102E] dark:text-[#E86B7B]">
                <Globe size={18} />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-[#2B231D] dark:text-[#F3EFE9] font-sans">
                International MOUs
              </h3>
            </div>

            <div className="space-y-4">
              {mous.map((mou, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#2B231D] dark:text-[#F3EFE9] leading-snug">
                      {mou.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#6E6156] dark:text-[#A89D91] pl-4 font-normal">
                    {mou.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
