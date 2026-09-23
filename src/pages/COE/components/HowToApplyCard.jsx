// src/pages/COE/components/HowToApplyCard.jsx

import { FileDown, ExternalLink, Info } from "lucide-react";

const LinkRow = ({ href, label, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
  >
    <Icon size={12} />
    {label}
  </a>
);

const HowToApplyCard = ({ item }) => {
  const { title, description, procedureLink, applicationLink, onlineLink, note, icon: Icon } = item;

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] p-6 overflow-hidden hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      {Icon && (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#081b3a]/10 text-[#081b3a] dark:bg-[#081b3a]/30 dark:text-white mb-3">
          <Icon size={16} />
        </span>
      )}

      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-100 dark:border-gray-800 pt-4">
        {procedureLink && (
          <LinkRow href={procedureLink} label="Procedure / SOP" icon={FileDown} />
        )}
        {applicationLink && (
          <LinkRow href={applicationLink} label="Application Form" icon={FileDown} />
        )}
        {onlineLink && (
          <LinkRow href={onlineLink} label="Apply Online" icon={ExternalLink} />
        )}
        {note && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            <Info size={12} />
            {note}
          </span>
        )}
      </div>
    </div>
  );
};

export default HowToApplyCard;
