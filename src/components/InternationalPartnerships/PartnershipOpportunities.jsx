import { Users, GraduationCap, Microscope, Briefcase, Globe } from "lucide-react";
import "./PartnershipOpportunities.css";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Student Exchange Programs",
    desc: "Semester-long academic mobility options allowing students to experience foreign university coursework and earn transferable credits.",
  },
  {
    icon: Users,
    title: "Faculty Mobility & Seminars",
    desc: "Visiting scholar exchanges, guest lectures, and joint curriculum development with international academic faculty.",
  },
  {
    icon: Microscope,
    title: "Joint Research & Publications",
    desc: "Collaborative scientific investigations, co-authored journal publications, and international research lab sharing.",
  },
  {
    icon: Briefcase,
    title: "International Internships",
    desc: "Industry immersions and practical training opportunities with global corporate and research partners.",
  },
  {
    icon: Globe,
    title: "Global Academic Alliances",
    desc: "Joint conferences, international symposiums, and cultural exchange programs fostering global perspective.",
  },
];

export default function PartnershipOpportunities() {
  return (
    <section id="collaboration-opportunities" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Mobility & Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-base text-slate-600">
            Key academic pathways created through Sandip University's international tie-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {opportunities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
