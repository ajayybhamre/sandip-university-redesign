import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, AlertCircle, ChevronDown } from "lucide-react";

export default function DocumentItemRow({
  doc,
  isChecked,
  onToggleCheck,
  isNoteExpanded,
  onToggleNote
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-[8px] border border-[#E2E8F0] overflow-hidden bg-white group transition-colors duration-200"
      style={{ willChange: "background-color" }}
    >
      {/* Thin Gold Accent Bar Sliding from Left Edge (width: 0 -> 4px) */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#D4AF37] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-250 ease-out pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Row Background Subtle Tint Wipe (Navy at 4-5% Opacity on Hover) */}
      <div className="absolute inset-0 bg-[#0F1B2B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Row Content */}
      <div className="relative z-10 p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
        
        {/* Custom Checkbox */}
        <button
          type="button"
          onClick={() => onToggleCheck(doc.id)}
          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-all duration-150 flex-shrink-0 mt-0.5 cursor-pointer ${
            isChecked
              ? "bg-[#C8102E] border-[#C8102E] text-white"
              : "border-slate-300 bg-white group-hover:border-[#C8102E]"
          }`}
        >
          {isChecked && <Check size={14} strokeWidth={3} />}
        </button>

        {/* Document Content Area */}
        <div className="flex-1 min-w-0 space-y-1">
          
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Title with Icon Rotate (5-8 deg) & Navy to Crimson Color Change */}
            <div
              onClick={() => onToggleCheck(doc.id)}
              className="flex items-center gap-2 cursor-pointer group/title"
            >
              {/* Document Icon with 6deg rotation on hover */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { rotate: 6 }}
                transition={{ duration: 0.2 }}
                className="text-[#0F1B2B] group-hover:text-[#C8102E] transition-colors duration-200 flex-shrink-0"
                style={{ willChange: "transform, color" }}
              >
                <div className="w-2 h-2 rounded-full bg-current" />
              </motion.div>

              <h3
                className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isChecked
                    ? "line-through text-[#64748B]"
                    : "text-[#0C0C0D] group-hover:text-[#C8102E]"
                }`}
              >
                {doc.name}
              </h3>
            </div>

            {/* Required / Optional Badge */}
            <span
              className={`px-2.5 py-0.5 rounded-[6px] text-[11px] font-bold ${
                doc.required
                  ? "bg-red-100 text-red-700 border border-red-200"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {doc.required ? "Required" : "Optional"}
            </span>
          </div>

          {/* Description */}
          <p className={`text-xs sm:text-sm leading-relaxed ${isChecked ? "text-slate-400" : "text-[#64748B]"}`}>
            {doc.description}
          </p>

          {/* Expandable Notes Section */}
          {doc.notes && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onToggleNote(doc.id)}
                className="text-[11px] font-semibold text-[#C8102E] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{isNoteExpanded ? "Hide Requirements Note" : "View Requirements Note"}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${isNoteExpanded ? "rotate-180" : ""}`} />
              </button>

              {isNoteExpanded && (
                <div className="mt-2 p-3 rounded-[6px] bg-slate-50 border border-slate-200 text-xs text-[#0C0C0D] flex items-start gap-2">
                  <AlertCircle size={14} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{doc.notes}</span>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
}
