import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const PdfCard = ({ title, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-start gap-3
      bg-white dark:bg-[#111111]
      border border-gray-200 dark:border-slate-700
      hover:border-red-300 dark:hover:border-red-800
      rounded-2xl p-5
      transition-colors
    "
  >
    <HiOutlineDocumentArrowDown className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
    <div>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-5">{title}</p>
      <p className="text-xs text-gray-400 mt-1">View PDF</p>
    </div>
  </a>
);

export default PdfCard;
