import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionCard({ to, icon: Icon, title, description }) {
  return (
    <Link
      to={to}
className="group flex flex-col justify-between rounded-xl border border-gray-200 p-6 transition-colors hover:border-red-600 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 dark:border-gray-800 dark:hover:bg-white/5"    >
      <div>
        <span className="inline-flex rounded-lg bg-[#081b3a]/10 p-2.5 text-[#081b3a] dark:bg-[#081b3a]/30 dark:text-white">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white">
        Explore
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
