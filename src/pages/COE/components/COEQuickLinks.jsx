// src/pages/COE/components/COEQuickLinks.jsx

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { coeQuickLinks } from "../data/coeData";

const COEQuickLinks = () => {
  return (
    <section id="coe-links" className="py-16 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-medium font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Explore
        </span>
        <h2 className="mt-2 mb-8 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Examination Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coeQuickLinks.map(({ id, title, description, icon: Icon, path }) => (
            <Link
              key={id}
              to={path}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] p-6 transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#081b3a]/10 text-[#081b3a] dark:bg-[#081b3a]/30 dark:text-white">
                <Icon size={18} />
              </span>

              <h3 className="mt-4 font-medium font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-1.5 font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                {description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 font-medium font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                View
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default COEQuickLinks;
