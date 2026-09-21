import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function AcademicsBreadcrumb({ current }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
        <li>
          <Link to="/academics" className="hover:text-red-600 dark:hover:text-red-400">
            Academics
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page" className="font-semibold text-gray-900 dark:text-white">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
