import { Cpu, Code, Briefcase, Pill, Scale, Palette, ArrowRight } from "lucide-react";
import "./StudyAreas.css";

const categories = [
  { id: "eng", name: "Engineering & Technology", icon: Cpu, desc: "Civil, Mechanical, Electrical, Robotics & AI." },
  { id: "cse", name: "Computer Science & AI", icon: Code, desc: "Software, Cloud Computing, Cybersecurity & Generative AI." },
  { id: "mgmt", name: "Business & Management", icon: Briefcase, desc: "Global MBA, Fintech, International Trade & Marketing." },
  { id: "pharm", name: "Pharmaceutical Sciences", icon: Pill, desc: "PCI-approved Pharmacy, Drug Design & Clinical Research." },
  { id: "law", name: "Law & Global Governance", icon: Scale, desc: "Moot court practice, International Law & LL.B." },
  { id: "sci", name: "Applied Sciences & Design", icon: Palette, desc: "Biotechnology, Physics, Fashion Design & Cosmetology." },
];

export default function StudyAreas({ onSelectSchool }) {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Featured Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Explore Popular Study Areas
          </h2>
          <p className="text-sm text-slate-600">
            Click any field to quickly filter relevant undergraduate and postgraduate programs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectSchool(cat.id)}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-500/50 hover:bg-orange-50/30 transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-orange-600">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
