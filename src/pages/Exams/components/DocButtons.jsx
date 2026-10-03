import { Link } from "react-router-dom";
import {
  HiOutlineDocumentArrowDown,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

/* Same link style the site uses elsewhere (see Research > IPR, Committees) */
const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 " +
  "hover:text-red-700 transition-colors";

/* Opens a PDF in a new tab */
export function PdfLink({ file, label = "Download" }) {
  return (
    <a href={file} target="_blank" rel="noopener noreferrer" className={linkClass}>
      <HiOutlineDocumentArrowDown className="w-4 h-4" />
      {label}
    </a>
  );
}

/* Opens an external page in a new tab */
export function ExternalLink({ url, label }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {label}
      <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
    </a>
  );
}

/* Link to another page of this site (same tab) */
export function InternalLink({ to, label }) {
  return (
    <Link to={to} className={linkClass}>
      {label}
    </Link>
  );
}

/* Internal permalink, e.g. /exams/results/ese-may-2025 (opens in a new tab) */
export function ResultLink({ to, label = "View Result", className = "" }) {
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className || linkClass}
    >
      {label}
      <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
    </Link>
  );
}

export const NewBadge = () => (
  <span className="ml-2 align-middle px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold">
    NEW
  </span>
);
