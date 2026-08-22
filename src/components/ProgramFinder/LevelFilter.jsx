import React from "react";

export default function LevelFilter({ levels, selectedLevel, onSelectLevel }) {
  return (
    <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-2 mb-1">
        Level
      </div>

      <nav className="space-y-0.5">
        {levels.map((lvl) => {
          const isSelected = selectedLevel === lvl.id;

          return (
            <button
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`
                w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors text-left cursor-pointer
                ${
                  isSelected
                    ? "bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 font-bold"
                    : "text-gray-700 dark:text-gray-300 font-normal hover:bg-gray-100 dark:hover:bg-gray-800/60"
                }
              `}
            >
              <span>{lvl.label}</span>
              {isSelected && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] dark:bg-red-400"></span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
