import { ChevronRight } from "lucide-react";

export default function CommitteeCard({ name, icon: IconComponent, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer group h-full ${
        isSelected
          ? "bg-[#FBE8E7] dark:bg-red-950/70 border-[#B32035] dark:border-red-600 shadow-2xs"
          : "bg-[#FFFDFC] dark:bg-[#1E1B18] border-[#EBD8C7] dark:border-stone-800 hover:border-[#C99A52] hover:shadow-2xs"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Soft Blush Red Circular Icon Container */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 ${
            isSelected
              ? "bg-[#B32035] text-white"
              : "bg-[#FBE8E7] dark:bg-red-950/50 border border-[#E8CFA3]/60 text-[#B32035] dark:text-red-400"
          }`}
        >
          <IconComponent size={20} strokeWidth={1.75} />
        </div>

        {/* Committee Title */}
        <h3
          className={`text-xs sm:text-sm leading-snug font-bold truncate ${
            isSelected
              ? "text-[#B32035] dark:text-red-300 font-extrabold"
              : "text-[#292321] dark:text-[#F5F2EB] group-hover:text-[#B32035]"
          }`}
        >
          {name}
        </h3>
      </div>

      <ChevronRight
        size={16}
        className={`flex-shrink-0 ml-2 transition-transform duration-200 ${
          isSelected
            ? "text-[#B32035] dark:text-red-300 translate-x-0.5"
            : "text-stone-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#B32035]"
        }`}
      />
    </button>
  );
}
