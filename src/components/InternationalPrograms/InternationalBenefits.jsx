import { Award, Globe, Building2, Briefcase } from "lucide-react";
import "./InternationalBenefits.css";

const benefits = [
  {
    icon: Award,
    title: "Industry-Relevant Education",
    desc: "Outcome-based curriculum aligned with global accreditation standards and hands-on lab training.",
  },
  {
    icon: Globe,
    title: "International Learning Environment",
    desc: "A multi-cultural student body fostering global perspectives and cross-cultural collaboration.",
  },
  {
    icon: Building2,
    title: "Modern Campus Experience",
    desc: "250+ acres state-of-the-art campus with high-tech research centers, hostels, and sports arenas.",
  },
  {
    icon: Briefcase,
    title: "Career & Professional Development",
    desc: "Dedicated corporate relations cell offering 100% placement training and international internships.",
  },
];

export default function InternationalBenefits() {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Global Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Why International Scholars Succeed at Sandip
          </h2>
          <p className="text-base text-slate-600">
            Four core pillars backing academic and career achievements for foreign students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
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
