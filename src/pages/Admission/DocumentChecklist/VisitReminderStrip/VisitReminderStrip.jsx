import React from "react";
import { FileText, Camera, Printer, Globe } from "lucide-react";

export default function VisitReminderStrip() {
  const reminders = [
    {
      icon: FileText,
      label: "Original TC & migration required",
    },
    {
      icon: Camera,
      label: "4 Passport photos",
    },
    {
      icon: Printer,
      label: "Bring 2 self-attested copies",
    },
    {
      icon: Globe,
      label: "AIU equivalence for foreign/NRI",
    },
  ];

  return (
    <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-700 dark:text-gray-300">
      <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
        <span>Campus visit reminder:</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {reminders.map((rem, idx) => {
          const IconComp = rem.icon;
          return (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <IconComp size={14} className="text-[#C8102E] dark:text-red-400 flex-shrink-0" />
              <span>{rem.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
