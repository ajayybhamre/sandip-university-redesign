import { Globe, Users, Microscope, GraduationCap } from "lucide-react";
import "./GlobalBenefits.css";

const benefits = [
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "Exposure to international academic environments, diverse cultures, and global problem-solving frameworks.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    desc: "Opportunities to connect across institutions, share research insights, and engage in peer-to-peer international dialogue.",
  },
  {
    icon: Microscope,
    title: "Research Connections",
    desc: "Support for joint academic investigations, co-authoring scientific papers, and cross-border research funding.",
  },
  {
    icon: GraduationCap,
    title: "Student Mobility",
    desc: "Structured semester exchanges, summer schools, and international internship opportunities with partner universities.",
  },
];

export default function GlobalBenefits() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Institutional Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            A More Connected University Experience
          </h2>
          <p className="text-base text-slate-600">
            Enriching degree programs with global viewpoints, research networks, and exchange possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs text-left">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
