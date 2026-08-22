import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";

export default function ProgramCard({
  program,
  getBadgeStyle,
  onViewDetails
}) {
  return (
    <TiltCard className="h-full">
      <SpotlightCard className="h-full rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(200,16,46,0.2)] hover:border-[#C8102E] transition-all duration-300 group cursor-pointer">
        
        {/* Top Sandip Red & Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C8102E] via-[#0F172A] to-[#D4AF37]" />

        {/* Card Header & Content Container */}
        <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
          
          <div className="space-y-3">
            
            {/* Level Badge & Duration Row */}
            <div className="flex items-center justify-between gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-2xs ${getBadgeStyle(
                  program.level
                )}`}
              >
                {program.level}
              </span>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-bold">
                <Clock size={13} className="text-[#C8102E]" />
                <span>• {program.duration}</span>
              </div>
            </div>

            {/* Program Title */}
            <div className="relative pt-1">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-[#C8102E] transition-colors">
                {program.title}
              </h3>

              {/* Red Underline Sweep */}
              <div className="h-[2.5px] bg-[#C8102E] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out mt-2 shadow-[0_0_8px_#C8102E]" />
            </div>

            {/* School Subtitle */}
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {program.school}
            </p>

            {/* Overview / Compact Eligibility Snippet */}
            {program.overview && (
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 font-medium pt-1">
                {program.overview}
              </p>
            )}
          </div>

          {/* Action Footer Button */}
          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-[#C8102E] transition-colors">
              Explore Course Details
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(program);
              }}
              className="w-9 h-9 rounded-xl bg-slate-900 text-white group-hover:bg-[#C8102E] flex items-center justify-center transition-colors shadow-md group-hover:shadow-[#C8102E]/30"
              aria-label={`View details for ${program.title}`}
            >
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </SpotlightCard>
    </TiltCard>
  );
}
