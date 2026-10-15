import { FileText } from "lucide-react";

export default function AcademicYearPill({ yearLabel, href }) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 shadow-2xs border bg-[#B32035] hover:bg-[#951D30] text-white border-[#E8CFA3]/80 hover:border-[#C99A52]"
    >
      <FileText size={14} className="text-white flex-shrink-0" />
      <span>Academic Year {yearLabel}</span>
    </a>
  );
}
