import React from "react";
import {
  Laptop,
  Cpu,
  Briefcase,
  Pill,
  Scale,
  FlaskConical,
  Palette,
  Wrench
} from "lucide-react";

const ICON_MAP = {
  Laptop,
  Cpu,
  Briefcase,
  Pill,
  Scale,
  FlaskConical,
  Palette,
  Wrench,
};

export default function SchoolSidebar({ schools, selectedSchool, onSelectSchool }) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-2 mb-1">
        School
      </div>

      <nav className="space-y-0.5">
        {schools.map((school) => {
          const isSelected = selectedSchool === school.id;
          const IconComponent = ICON_MAP[school.iconName] || Laptop;

          return (
            <button
              key={school.id}
              onClick={() => onSelectSchool(school.id)}
              className={`
                w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors text-left cursor-pointer
                ${
                  isSelected
                    ? "bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 font-bold"
                    : "text-gray-700 dark:text-gray-300 font-normal hover:bg-gray-100 dark:hover:bg-gray-800/60"
                }
              `}
            >
              <IconComponent
                size={15}
                className={isSelected ? "text-[#C8102E] dark:text-red-400" : "text-gray-400 dark:text-gray-500"}
              />
              <span className="truncate">{school.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
