import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  IdCard,
  Award,
  Camera,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

// Icon mapping function by document TYPE
function getDocumentIcon(iconType) {
  switch (iconType) {
    case "id-card":
      return IdCard;
    case "certificate":
      return Award;
    case "photo":
      return Camera;
    case "file":
    default:
      return FileText;
  }
}

export default function DocumentAccordionRow({ doc, onOpenModal }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = getDocumentIcon(doc.iconType);

  const isConditional = doc.status === "conditional";

  const handleRowClick = (e) => {
    // If document has detailed modal and click wasn't on expand trigger, open modal
    if (doc.hasDetailedModal && onOpenModal) {
      onOpenModal(doc);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`rounded-xl bg-white dark:bg-zinc-900 border transition-all duration-200 overflow-hidden ${
        isConditional ? "opacity-85 hover:opacity-100" : ""
      } border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700`}
    >
      {/* Main Collapsed Header Row */}
      <div
        onClick={handleRowClick}
        className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Mapped Icon */}
          <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 text-[#102A43] dark:text-gray-200 flex items-center justify-center flex-shrink-0">
            <IconComponent size={16} />
          </div>

          {/* Title + Badges Inline */}
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
              {doc.title}
            </h3>

            {/* Requirement Urgency Badge Role */}
            {doc.status === "mandatory" ? (
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 border border-red-200 dark:border-red-900/40">
                Mandatory
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40">
                If applicable
              </span>
            )}

            {/* Copy Type Neutral Badge Role */}
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700">
              {doc.copyType === "original" ? "Original required" : "Photocopy required"}
            </span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {doc.hasDetailedModal && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(doc);
              }}
              className="text-[11px] font-medium text-[#C8102E] dark:text-red-400 hover:underline flex items-center gap-1"
            >
              <span>View details</span>
              <ExternalLink size={12} />
            </button>
          )}

          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${
              isExpanded ? "rotate-180 text-gray-700 dark:text-gray-200" : ""
            }`}
          />
        </div>
      </div>

      {/* Framer Motion Height Auto-Animate Expansion */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 dark:border-zinc-800/80 bg-gray-50/50 dark:bg-zinc-900/40"
          >
            <div className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
              {doc.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
