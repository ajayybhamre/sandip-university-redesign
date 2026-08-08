import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AlertCircle } from "lucide-react";

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
  colorScheme = "crimson" // "crimson" | "gold" | "navy"
}) {
  const shouldReduceMotion = useReducedMotion();

  // Distinct theme color tokens
  const themeStyles = {
    crimson: {
      cardBg: "bg-white",
      headerBg: "bg-gradient-to-r from-[#C8102E]/10 to-red-50/60",
      headerBorder: "border-[#C8102E]/20",
      badgeBg: "bg-[#C8102E]",
      valueColor: "text-[#C8102E]",
      dotColor: "bg-[#C8102E]",
      glowShadow: "0 20px 35px -10px rgba(200, 16, 46, 0.28), 0 10px 20px -5px rgba(212, 175, 55, 0.2)"
    },
    gold: {
      cardBg: "bg-white",
      headerBg: "bg-gradient-to-r from-amber-50 to-yellow-100/50",
      headerBorder: "border-amber-200",
      badgeBg: "bg-[#D4AF37]",
      valueColor: "text-[#B48811]",
      dotColor: "bg-[#D4AF37]",
      glowShadow: "0 20px 35px -10px rgba(212, 175, 55, 0.35), 0 10px 20px -5px rgba(200, 16, 46, 0.15)"
    },
    navy: {
      cardBg: "bg-white",
      headerBg: "bg-gradient-to-r from-slate-100 to-slate-200/50",
      headerBorder: "border-slate-200",
      badgeBg: "bg-[#0F1B2B]",
      valueColor: "text-[#0F1B2B]",
      dotColor: "bg-[#0F1B2B]",
      glowShadow: "0 20px 35px -10px rgba(15, 27, 43, 0.25), 0 10px 20px -5px rgba(212, 175, 55, 0.2)"
    }
  };

  const theme = themeStyles[colorScheme] || themeStyles.crimson;

  // Spring animation transition settings
  const cardSpring = {
    type: "spring",
    stiffness: 300,
    damping: 20
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -8,
              boxShadow: theme.glowShadow
            }
      }
      transition={cardSpring}
      className="relative rounded-[12px] bg-white border border-[#0F1B2B]/20 overflow-hidden flex flex-col justify-between group cursor-pointer"
      style={{ willChange: "transform, box-shadow" }}
    >
      {/* 2px Gold Animated Sweep Border Overlay */}
      <motion.div
        className="absolute inset-0 rounded-[12px] border-2 border-[#D4AF37] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ willChange: "opacity" }}
      />

      {/* Card Header */}
      <div className={`p-4 ${theme.headerBg} border-b ${theme.headerBorder} flex items-center justify-between gap-2`}>
        <h3 className="font-semibold text-xs sm:text-sm text-[#0F1B2B] line-clamp-1">
          {title}
        </h3>
        {tier && (
          <span className={`px-2.5 py-0.5 rounded-[6px] ${theme.badgeBg} text-white text-[10px] font-bold flex-shrink-0 shadow-2xs`}>
            {tier}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        
        {/* Criteria / Description Section */}
        <div className="space-y-2">
          {criteria ? (
            <>
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                Eligibility Criteria
              </span>
              <ul className="space-y-2">
                {criteria.map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#0F1B2B] font-medium leading-snug">
                    <span className={`w-2 h-2 rounded-full ${theme.dotColor} mt-1 flex-shrink-0`} />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : achievement ? (
            <>
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                Achievement Level
              </span>
              <p className="text-xs text-[#0F1B2B] font-medium leading-relaxed">
                {achievement}
              </p>
            </>
          ) : type ? (
            <>
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                Beneficiary Type
              </span>
              <p className="text-xs text-[#0F1B2B] font-medium leading-relaxed">
                {type}
              </p>
            </>
          ) : null}
        </div>

        {/* Amount / Value Section with Spring Scale */}
        <div className="pt-3 border-t border-slate-100 space-y-0.5">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            Scholarship Value
          </span>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            transition={cardSpring}
            className="inline-block origin-left"
            style={{ willChange: "transform" }}
          >
            <p className={`text-2xl sm:text-3xl font-bold font-serif ${theme.valueColor} tracking-tight`}>
              {waiverValue}
            </p>
          </motion.div>

          <p className="text-xs text-[#64748B]">
            {waiverText}
          </p>
        </div>

        {/* Optional Note */}
        {note && (
          <div className="p-2.5 rounded-[6px] bg-slate-50 border border-slate-200 text-[11px] text-[#64748B] flex items-center gap-1.5">
            <AlertCircle size={13} className="text-[#C8102E] flex-shrink-0" />
            <span>{note}</span>
          </div>
        )}

      </div>
    </motion.div>
  );
}
