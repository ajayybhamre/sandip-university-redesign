import { Link } from "react-router-dom";
import { Cpu, Code, Briefcase, Pill, Scale, FlaskConical, Palette, ArrowRight } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import "./AcademicSchools.css";

const schools = [
  {
    icon: Cpu,
    name: "Engineering & Technology",
    desc: "Civil, Mechanical, Electrical, Robotics, and advanced technology UG/PG programs.",
    path: "/international-admission/programs",
  },
  {
    icon: Code,
    name: "Computing Sciences & Engineering",
    desc: "Artificial Intelligence, Cloud Computing, Cyber Security, and Software Engineering.",
    path: "/international-admission/programs",
  },
  {
    icon: Briefcase,
    name: "Commerce & Management Studies",
    desc: "Global MBA, Fintech, Marketing, Finance, BBA, and International Business.",
    path: "/international-admission/programs",
  },
  {
    icon: Pill,
    name: "Pharmaceutical Sciences",
    desc: "PCI-approved B.Pharm, M.Pharm, Drug Research, and Clinical Pharmacology.",
    path: "/international-admission/programs",
  },
  {
    icon: Scale,
    name: "School of Law",
    desc: "BA LL.B, BBA LL.B, LL.M, International Trade Law, and Moot Court practice.",
    path: "/international-admission/programs",
  },
  {
    icon: FlaskConical,
    name: "School of Science",
    desc: "Physics, Chemistry, Biotechnology, Microbiology, and Applied Mathematics.",
    path: "/international-admission/programs",
  },
  {
    icon: Palette,
    name: "Design & Beauty Cosmetology",
    desc: "Fashion Design, Interior Design, Textile Aesthetics, and Beauty Cosmetology.",
    path: "/international-admission/programs",
  },
];

export default function AcademicSchools() {
  return (
    <section id="schools-section" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Academic Schools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Explore Your Academic <span className="text-[#C8102E]">Future</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Choose from a wide spectrum of internationally accredited undergraduate, postgraduate, and foundation pathway programs.
          </p>
        </div>

        {/* Schools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, idx) => {
            const IconComp = school.icon;
            return (
              <TiltCard key={idx} className="h-full">
                <SpotlightCard className="h-full p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#C8102E] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C8102E] transition-colors mb-2">
                      {school.name}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {school.desc}
                    </p>
                  </div>

                  <Link
                    to={school.path}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C8102E] group-hover:text-red-700 transition-colors pt-4 border-t border-slate-200/80"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </SpotlightCard>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
