import { Clock, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SpotlightCard from "../Animated/SpotlightCard";
import TiltCard from "../Animated/TiltCard";

export default function ProgramCard({ program, onViewDetails }) {
  return (
    <TiltCard className="h-full">
      <SpotlightCard className="h-full rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#C8102E] transition-all duration-300 p-6 flex flex-col justify-between group">
        <div>
          {/* Top Badges */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${
              program.level === "UG"
                ? "bg-slate-900 text-white"
                : program.level === "PG"
                ? "bg-[#C8102E] text-white"
                : "bg-amber-500 text-white"
            }`}>
              {program.level === "UG" ? "Undergraduate" : program.level === "PG" ? "Postgraduate" : "Foundation Pathway"}
            </span>

            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>{program.duration}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#C8102E] transition-colors mb-2 leading-snug">
            {program.title}
          </h3>

          {/* Overview */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 font-medium">
            {program.overview}
          </p>

          {/* Optional Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
              International
            </span>
            {program.specializations && program.specializations.map((spec, sIdx) => (
              <span key={sIdx} className="text-[10px] font-bold text-[#C8102E] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onViewDetails(program)}
            className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>View Details</span>
          </button>

          <Link
            to="/apply"
            className="flex-1 py-2.5 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </SpotlightCard>
    </TiltCard>
  );
}
