import { ExternalLink } from "lucide-react";

export default function FeedbackCard({ title, icon: IconComponent, href }) {
  return (
    <div className="bg-[#FFFDFC] dark:bg-[#1E1B18] rounded-xl border border-[#EBD8C7] dark:border-stone-800 p-4 shadow-2xs hover:border-[#C99A52] dark:hover:border-amber-700/60 hover:shadow-xs transition-all duration-200 flex flex-col justify-between items-center text-center h-full group">
      <div className="flex flex-col items-center">
        {/* Soft Blush Red Circular Icon Container */}
        <div className="w-12 h-12 rounded-full bg-[#FBE8E7] dark:bg-red-950/50 border border-[#E8CFA3]/70 dark:border-amber-900/40 text-[#B32035] dark:text-red-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
          <IconComponent size={22} strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-bold text-[#292321] dark:text-[#F5F2EB] leading-snug mb-3">
          {title}
        </h3>
      </div>

      {/* Deep Red Rectangular CTA Button with White Text */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 px-3 bg-[#B32035] hover:bg-[#951D30] text-white border border-[#B32035] hover:border-[#C99A52] text-xs font-bold rounded-lg shadow-2xs transition-all duration-200 flex items-center justify-center gap-1.5 uppercase tracking-wider"
      >
        <span>Fill Form</span>
        <ExternalLink size={12} className="text-white" />
      </a>
    </div>
  );
}
