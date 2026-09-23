import React from "react";
import { ChevronRight } from "lucide-react";

export default function ProgramRow({ program, onSelectProgram }) {
  return (
    <div
      onClick={() => onSelectProgram(program)}
      className="
        group
        flex
        items-center
        justify-between
        py-3.5
        px-3
        border-b
        border-gray-100
        dark:border-gray-800/60
        last:border-b-0
        hover:bg-gray-50/80
        dark:hover:bg-gray-800/40
        transition-colors
        duration-150
        cursor-pointer
        rounded-lg
      "
    >
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-[#C8102E] dark:group-hover:text-red-400 transition-colors">
          {program.name}
        </h4>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <span>{program.duration}</span>
          <span className="mx-1.5">•</span>
          <span>{program.level}</span>
          {program.approval && (
            <>
              <span className="mx-1.5">•</span>
              <span className="text-[#C8102E] dark:text-red-400 font-medium">
                {program.approval}
              </span>
            </>
          )}
        </div>
      </div>

      <ChevronRight
        size={16}
        className="text-gray-400 dark:text-gray-500 group-hover:text-[#C8102E] dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-4"
      />
    </div>
  );
}
