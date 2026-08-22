import { SCHOOLS_LIST } from "../../pages/Admission/programsData";
import ProgramCard from "./ProgramCard";
import { Cpu, Code, Briefcase, Pill, Scale, FlaskConical, BookOpen } from "lucide-react";
import "./SchoolExplorer.css";

const schoolIcons = {
  cse: Code,
  eng: Cpu,
  mgmt: Briefcase,
  pharm: Pill,
  law: Scale,
  sci: FlaskConical,
};

const schoolDescriptions = {
  cse: "Cutting-edge Software Engineering, Artificial Intelligence, Machine Learning, and Cloud Architecture.",
  eng: "Civil, Mechanical, Electrical, Robotics, and advanced technology engineering degrees.",
  mgmt: "Global MBA, Fintech, International Commerce, BBA, and Entrepreneurship.",
  pharm: "PCI-approved B.Pharm, M.Pharm, Clinical Research, and Pharmaceutical Sciences.",
  law: "Moot court practice, BA LL.B, BBA LL.B, and International Trade Law.",
  sci: "Physics, Chemistry, Biotechnology, Microbiology, and Applied Science research.",
};

export default function SchoolExplorer({ programsData, onViewDetails }) {
  // Group programs by schoolId
  const schoolsMap = {};

  SCHOOLS_LIST.filter(s => s.id !== "all").forEach(sch => {
    schoolsMap[sch.id] = {
      ...sch,
      icon: schoolIcons[sch.id] || BookOpen,
      desc: schoolDescriptions[sch.id] || "Advanced undergraduate and postgraduate academic degree programs.",
      programs: programsData.filter(p => p.schoolId === sch.id),
    };
  });

  const activeSchools = Object.values(schoolsMap).filter(s => s.programs.length > 0);

  if (activeSchools.length === 0) {
    return (
      <div className="py-16 text-center text-slate-500 max-w-md mx-auto">
        <div className="text-4xl mb-3">🔍</div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">No Programs Found</h3>
        <p className="text-sm text-slate-600">Try adjusting your search query, selecting another level, or choosing 'All Schools'.</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-8">
      {activeSchools.map((school) => {
        const IconComp = school.icon;
        return (
          <section key={school.id} id={`school-${school.id}`} className="space-y-6">
            
            {/* School Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    {school.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
                    {school.desc}
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
                {school.programs.length} {school.programs.length === 1 ? "Program" : "Programs"}
              </span>
            </div>

            {/* Programs Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {school.programs.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>

          </section>
        );
      })}
    </div>
  );
}
