import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";

export default function ScholarshipCard({
  title,
  tier,
  level,
  achievement,
  criteria,
  type,
  waiverValue,
  waiverText,
  note,
  colorScheme = "crimson"
}) {
  const themeStyles = {
    crimson: {
      headerBg: "bg-[#C8102E]/10",
      headerBorder: "border-[#C8102E]/20",
      badgeBg: "bg-[#C8102E]",
      valueColor: "text-[#C8102E]",
    },
    gold: {
      headerBg: "bg-amber-50",
      headerBorder: "border-amber-200",
      badgeBg: "bg-[#D4AF37]",
      valueColor: "text-amber-800",
    },
    navy: {
      headerBg: "bg-slate-100",
      headerBorder: "border-slate-200",
      badgeBg: "bg-slate-900",
      valueColor: "text-slate-900",
    }
  };

  const theme = themeStyles[colorScheme] || themeStyles.crimson;

  return (
    <TiltCard className="h-full">
      <SpotlightCard className="h-full rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-[#C8102E] transition-all duration-300 group cursor-pointer">
        
        {/* Card Header */}
        <div className={`p-4 ${theme.headerBg} border-b ${theme.headerBorder} flex items-center justify-between gap-2`}>
          <h3 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
            {title}
          </h3>
          {tier && (
            <span className={`px-2.5 py-0.5 rounded-full ${theme.badgeBg} text-white text-[10px] font-black uppercase tracking-wider shadow-2xs`}>
              {tier}
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
          
          <div className="space-y-2">
            {criteria ? (
              <>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Eligibility Criteria
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  {criteria}
                </p>
              </>
            ) : achievement ? (
              <>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Achievement Level
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                  {achievement}
                </p>
              </>
            ) : null}

            {level && (
              <span className="inline-block text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Level: {level}
              </span>
            )}
          </div>

          {/* Waiver Value Hero Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-0.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              Tuition Fee Waiver
            </span>
            <p className={`text-2xl sm:text-3xl font-black ${theme.valueColor}`}>
              {waiverValue}
            </p>
            {waiverText && (
              <span className="text-[11px] font-bold text-slate-600 block">
                {waiverText}
              </span>
            )}
          </div>

          {/* Note Footer */}
          {note && (
            <div className="flex items-start gap-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-medium">
              <AlertCircle size={13} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
              <span>{note}</span>
            </div>
          )}

        </div>

      </SpotlightCard>
    </TiltCard>
  );
}
