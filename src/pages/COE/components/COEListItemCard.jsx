// src/pages/COE/components/COEListItemCard.jsx
//
// One reusable card for Notices / Results / Timetables. Each item may have
// a fileUrl (PDF) or an externalLink (portal) — never both in practice, but
// both are handled. Date is formatted for display; publishedAt stays an
// ISO string in the data so it sorts/serializes cleanly once a backend is
// wired up.

import { FileDown, ExternalLink, Sparkles } from "lucide-react";

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const COEListItemCard = ({ item }) => {
  const { title, publishedAt, fileUrl, externalLink, isNew } = item;
  const href = fileUrl || externalLink;
  const linkLabel = fileUrl ? "Download PDF" : "View Online";
  const LinkIcon = fileUrl ? FileDown : ExternalLink;

  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] p-5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          {isNew && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
              <Sparkles size={10} />
              New
            </span>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(publishedAt)}
          </span>
        </div>
        <h3 className="mt-1.5 text-sm font-medium text-gray-900 dark:text-white break-words">
          {title}
        </h3>
      </div>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 hover:border-red-600 hover:text-red-600 transition-colors"
        >
          <LinkIcon size={13} />
          {linkLabel}
        </a>
      )}
    </div>
  );
};

export default COEListItemCard;
