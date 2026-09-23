import { Building2, ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const groupInstitutions = [
  {
    name: "Sandip Institute of Technology & Research Centre (SITRC)",
    type: "AICTE Approved Engineering College",
    location: "Nashik, Maharashtra",
    desc: "A premier engineering and research institute dedicated to cutting-edge technical education, industry projects, and AICTE accredited degree programs.",
    path: "/schools/engineering",
  },
  {
    name: "Sandip Institute of Engineering & Management (SIEM)",
    type: "Technical Excellence Centre",
    location: "Nashik, Maharashtra",
    desc: "Fostering technical innovation, practical laboratory training, and industrial skills across core engineering disciplines.",
    path: "/schools/engineering",
  },
  {
    name: "Sandip Institute of Pharmaceutical Sciences (SIPS)",
    type: "PCI Approved Pharmacy Institute",
    location: "Nashik, Maharashtra",
    desc: "State-of-the-art pharmaceutical research laboratories, B.Pharm & M.Pharm programs, and healthcare research initiatives.",
    path: "/programs",
  },
  {
    name: "Sandip Institute of Polytechnic",
    type: "Diploma Engineering Institute",
    location: "Nashik, Maharashtra",
    desc: "Nurturing practical technical skills and hands-on diploma engineering expertise for future industrial professionals.",
    path: "/programs",
  },
];

export default function GroupInstitutionsSection() {
  return (
    <section id="group-institutions" className="py-20 lg:py-24 bg-[#F5F0E6] dark:bg-[#191714] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300 border-y border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                06 — OUR NETWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1714] dark:text-[#F3EFE9] leading-tight font-sans">
              Sandip Group <span className="text-[#C8102E]">Institutions</span>
            </h2>
          </div>
          <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] max-w-md">
            Our nationwide network of educational institutions empowering tens of thousands of students across engineering, management, and medicine.
          </p>
        </div>

        {/* 2x2 Grid of Group Institutions */}
        <div className="grid md:grid-cols-2 gap-6">
          {groupInstitutions.map((inst, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-7 rounded-2xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24] hover:border-[#C8102E]/50 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#24201C] border border-[#3D342B] flex items-center justify-center text-red-400 flex-shrink-0 shadow-sm">
                    <Building2 size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#FAF7F2] bg-[#24201C] px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#3D342B]">
                    {inst.type}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#2B231D] dark:text-[#F3EFE9] mb-2 leading-snug font-sans">
                  {inst.name}
                </h3>

                <p className="text-xs text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal mb-6">
                  {inst.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D7] dark:border-[#2C2720] flex items-center justify-between">
                <span className="text-[11px] text-[#6E6156] dark:text-[#A89D91] font-medium">
                  {inst.location}
                </span>

                <Link
                  to={inst.path}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] group-hover:text-red-700 dark:group-hover:text-[#F58F9C] uppercase tracking-wider"
                >
                  <span>Explore Programs</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
