import { Download } from "lucide-react";

export default function DownloadRow({ label, url }) {
  return (
    <a
      href={url}
      download
      className="flex min-h-14 items-center justify-between gap-4 py-4 text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 dark:text-white"
    >
      <span>{label}</span>
      <span className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-red-600">
        <span>PDF</span>
        <Download size={18} aria-hidden="true" />
      </span>
    </a>
  );
}
