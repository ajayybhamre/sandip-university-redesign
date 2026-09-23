import React from "react";
import { Download } from "lucide-react";
import { CHECKLIST_SECTIONS } from "../documentChecklistData";

export default function ChecklistSidebar({ activeSection, onSelectSection, onDownloadPdf }) {
  return (
    <>
      {/* ==========================================
          DESKTOP SIDEBAR (Sticky Fixed-Width ~200px)
      ========================================== */}
      <aside className="hidden md:flex flex-col justify-between w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-120px)] p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
        
        {/* Navigation Section List */}
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 px-3 py-1.5 uppercase tracking-wider text-[11px]">
            Navigation
          </p>

          <nav className="space-y-1">
            {CHECKLIST_SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;

              return (
                <button
                  key={sec.id}
                  onClick={() => onSelectSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-[#102A43] text-white dark:bg-zinc-800 dark:text-white font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800/60 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span>{sec.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] dark:bg-red-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Pinned Download PDF Button at Bottom (ONLY download button on page) */}
        <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
          <button
            onClick={onDownloadPdf}
            className="w-full py-2.5 px-3 rounded-lg bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>
        </div>

      </aside>

      {/* ==========================================
          MOBILE SIDEBAR (Horizontal Scrollable Chips Pinned Below Header)
      ========================================== */}
      <div className="md:hidden sticky top-[72px] z-30 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800 py-2.5 px-4 -mx-4 overflow-x-auto no-scrollbar flex items-center gap-2">
        {CHECKLIST_SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-[#102A43] text-white font-semibold"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400"
              }`}
            >
              {sec.label}
            </button>
          );
        })}

        <button
          onClick={onDownloadPdf}
          className="ml-auto px-3.5 py-1.5 rounded-full bg-[#C8102E] text-white text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
        >
          <Download size={13} />
          <span>PDF</span>
        </button>
      </div>
    </>
  );
}
