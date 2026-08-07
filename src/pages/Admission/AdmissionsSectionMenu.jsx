import { Link } from "react-router-dom";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { admissionsMenuData } from "./admissionsData";

function AdmissionsSectionMenu({ className = "" }) {
  const { header, sections } = admissionsMenuData;

  return (
    <div
      className={`w-full bg-white dark:bg-[#111111] rounded-[16px] p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 ${className}`}
    >
      {/* 1. Header Section */}
      {header && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-gray-100 dark:border-gray-800 gap-4">
          <div className="flex items-center gap-3.5">
            {/* Header Icon */}
            <div className="w-11 h-11 rounded-full bg-red-50/90 dark:bg-red-950/40 border border-red-100/80 dark:border-red-900/40 flex items-center justify-center text-[#C8102E] dark:text-red-400 flex-shrink-0 shadow-xs">
              <GraduationCap size={22} className="text-[#C8102E] dark:text-red-400" />
            </div>
            <div>
              {/* Red (#C8102E) Heading */}
              <h2 className="text-xl sm:text-2xl font-black text-[#C8102E] dark:text-red-400 tracking-tight leading-none font-sans">
                {header.title}
              </h2>
              {/* Black / Dark Subtitle */}
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium mt-1">
                {header.subtitle}
              </p>
            </div>
          </div>

          {/* Admissions Open Badge */}
          {header.badgeText && (
            <div className="self-start sm:self-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff1f2] dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 border border-red-200/80 dark:border-red-900/50 text-xs font-extrabold shadow-2xs hover:scale-105 transition-transform">
              <Sparkles size={14} className="text-[#C8102E] dark:text-red-400 animate-pulse" />
              <span>{header.badgeText}</span>
            </div>
          )}
        </div>
      )}

      {/* 2. Main 2-Column Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#C8102E]/20 dark:border-[#C8102E]/40">
              <div className="flex items-center gap-2">
                {section.iconType === "cap" && (
                  <span className="text-lg leading-none">🎓</span>
                )}
                {section.iconType === "globe" && (
                  <span className="text-lg leading-none">🌐</span>
                )}
                {/* Red (#C8102E) Section Title */}
                <h3 className="font-extrabold text-[#C8102E] dark:text-red-400 uppercase text-xs sm:text-sm tracking-wider font-sans">
                  {section.heading}
                </h3>
              </div>

              {/* Small "NEW" Pill Badge */}
              {section.badge && (
                <span className="bg-[#fff1f2] dark:bg-red-950/80 text-[#C8102E] dark:text-red-300 border border-red-200/80 dark:border-red-900/60 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                  {section.badge}
                </span>
              )}
            </div>

            {/* List Links */}
            <ul className="space-y-1.5">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="
                      group/item
                      relative
                      flex
                      items-center
                      justify-between
                      py-2.5
                      px-3
                      rounded-[16px]
                      bg-white
                      dark:bg-[#161618]
                      border
                      border-transparent
                      hover:border-red-100
                      dark:hover:border-red-950
                      hover:bg-red-50/40
                      dark:hover:bg-red-950/20
                      hover:shadow-[0_8px_25px_-5px_rgba(200,16,46,0.12)]
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    {/* Left Icon + Text */}
                    <div className="flex items-center gap-3.5">
                      {/* Icon container */}
                      {link.icon && (
                        <div className="w-9 h-9 rounded-[12px] bg-gray-100/90 dark:bg-gray-800/80 flex items-center justify-center text-[#C8102E] dark:text-red-400 group-hover/item:bg-[#C8102E] group-hover/item:text-white transition-all duration-300 flex-shrink-0 shadow-2xs">
                          <link.icon size={17} />
                        </div>
                      )}

                      {/* Black Text with Animated Red Underline */}
                      <span className="relative inline-block font-bold text-sm text-gray-900 dark:text-white group-hover/item:text-[#C8102E] transition-colors py-0.5">
                        {link.title}
                        {/* Animated Underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8102E] group-hover/item:w-full transition-all duration-300 rounded-full"></span>
                      </span>
                    </div>

                    {/* Right side: Badge + Animated Right Arrow */}
                    <div className="flex items-center gap-2">
                      {/* Small "NEW" Pill Badge */}
                      {link.badge && (
                        <span className="bg-[#fff1f2] dark:bg-red-950/80 text-[#C8102E] dark:text-red-300 border border-red-200/80 dark:border-red-900/60 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                          {link.badge}
                        </span>
                      )}

                      {/* Right-arrow animation */}
                      <ArrowRight
                        size={16}
                        className="text-[#C8102E] dark:text-red-400 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-1.5 transition-all duration-300"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdmissionsSectionMenu;
