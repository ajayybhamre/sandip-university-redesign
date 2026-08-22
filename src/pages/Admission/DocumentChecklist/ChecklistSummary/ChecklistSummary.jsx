import React from "react";
import { CHECKLIST_DOCUMENTS } from "../documentChecklistData";

export default function ChecklistSummary() {
  // Compute metrics live from array data
  const totalCount = CHECKLIST_DOCUMENTS.length;
  const mandatoryCount = CHECKLIST_DOCUMENTS.filter(
    (doc) => doc.status === "mandatory"
  ).length;
  const conditionalCount = CHECKLIST_DOCUMENTS.filter(
    (doc) => doc.status === "conditional"
  ).length;

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-4">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#102A43] dark:text-white tracking-tight">
          Required Documents for Admission
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Complete checklist of marksheets, identity proof, and category certificates required for Sandip University campus verification.
        </p>
      </div>

      {/* Live Computed Stat Chips Row */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <div className="px-3.5 py-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 text-xs font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-500" />
          <span>{totalCount} total documents</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 border border-red-200 dark:border-red-900/40 text-xs font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
          <span>{mandatoryCount} mandatory</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40 text-xs font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>{conditionalCount} if applicable</span>
        </div>
      </div>
    </div>
  );
}
