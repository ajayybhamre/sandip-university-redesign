import { Search, X } from "lucide-react";
import { SCHOOLS_LIST } from "../../pages/Admission/programsData";
import MagneticButton from "../Animated/MagneticButton";
import "./ProgramFilters.css";

export default function ProgramFilters({
  searchQuery,
  setSearchQuery,
  selectedLevel,
  setSelectedLevel,
  selectedSchool,
  setSelectedSchool,
  onClearFilters,
  activeFilterCount,
}) {
  const levels = [
    { id: "all", label: "All Levels" },
    { id: "UG", label: "Undergraduate" },
    { id: "PG", label: "Postgraduate" },
    { id: "Foundation", label: "Foundation Pathway" },
  ];

  return (
    <div id="program-discovery" className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-md py-4 mb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-4">
        
        {/* Top Controls Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search program title, discipline, or overview..."
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#C8102E]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Level Toggle Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl overflow-x-auto no-scrollbar shadow-inner">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === lvl.id
                    ? "bg-[#C8102E] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>

          {/* School Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#C8102E] transition-colors cursor-pointer max-w-[220px] truncate"
            >
              {SCHOOLS_LIST.map((sch) => (
                <option key={sch.id} value={sch.id}>
                  {sch.name}
                </option>
              ))}
            </select>

            {activeFilterCount > 0 && (
              <MagneticButton>
                <button
                  onClick={onClearFilters}
                  className="px-4 py-3 rounded-xl bg-red-50 text-[#C8102E] border border-red-200 text-xs font-bold hover:bg-[#C8102E] hover:text-white transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset ({activeFilterCount})</span>
                </button>
              </MagneticButton>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
