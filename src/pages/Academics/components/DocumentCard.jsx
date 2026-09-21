import { Download, FileText } from "lucide-react";

export default function DocumentCard({ label, url }) {
  return (
    <a
      href={url}
      download
      className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 dark:border-gray-800 dark:hover:bg-white/5"
    >
      <span className="flex items-center gap-3 text-sm font-semibold text-gray-900 dark:text-white">
        <FileText size={18} className="shrink-0 text-gray-400" aria-hidden="true" />
        {label}
      </span>
      <span className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-red-600">
        <span className="hidden sm:inline">PDF</span>
        <Download size={16} aria-hidden="true" />
      </span>
    </a>
  );
}
