import { Link } from "react-router-dom";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";

function MegaMenu({ item, sections }) {
  const isAdmissions = item?.customType === "admissions" || item?.header;

  return (
    <div
      className="
        absolute 
        left-1/2 
        -translate-x-1/2 
        top-full 
        pt-4
        opacity-0 
        invisible 
        group-hover:opacity-100 
        group-hover:visible
        transition-all 
        duration-300
        z-50
      "
    >
      <div
        className="
          bg-white
          dark:bg-[#111111]
          shadow-[0_10px_35px_-10px_rgba(0,0,0,0.08)]
          rounded-[16px]
          p-6
          sm:p-7
          border
          border-gray-100
          dark:border-gray-800
          w-max
          max-w-[90vw]
        "
      >
        {/* Header section */}
        {item?.header && (
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 dark:border-gray-800 gap-8">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-red-50/90 dark:bg-red-950/40 border border-red-100/80 dark:border-red-900/40 flex items-center justify-center text-[#C8102E] dark:text-red-400 flex-shrink-0 shadow-xs">
                <GraduationCap size={22} className="text-[#C8102E] dark:text-red-400" />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#C8102E] dark:text-red-400 tracking-tight leading-none font-sans">
                  {item.header.title}
                </h2>
                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium mt-1">
                  {item.header.subtitle}
                </p>
              </div>
            </div>

            {item.header.badgeText && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fff1f2] dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 border border-red-200/80 dark:border-red-900/50 text-xs font-extrabold whitespace-nowrap shadow-2xs">
                <Sparkles size={13} className="text-[#C8102E] dark:text-red-400 animate-pulse" />
                <span>{item.header.badgeText}</span>
              </div>
            )}
          </div>
        )}

        {/* Section Grid */}
        <div
          className={`grid gap-8 ${
            isAdmissions ? "min-w-[720px] max-w-[840px] grid-cols-2" : ""
          }`}
          style={
            !isAdmissions
              ? {
                  gridTemplateColumns: `repeat(${sections.length}, minmax(220px, auto))`,
                }
              : undefined
          }
        >
          {sections.map((section, index) => (
            <div key={index}>
              {/* Heading */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#C8102E]/20 dark:border-[#C8102E]/40">
                <div className="flex items-center gap-2">
                  {section.iconType === "cap" && (
                    <span className="text-base leading-none">🎓</span>
                  )}
                  {section.iconType === "globe" && (
                    <span className="text-base leading-none">🌐</span>
                  )}
                  <h3 className="font-extrabold text-[#C8102E] dark:text-red-400 uppercase text-xs sm:text-sm tracking-wider font-sans">
                    {section.heading}
                  </h3>
                </div>
                {section.badge && (
                  <span className="bg-[#fff1f2] dark:bg-red-950/80 text-[#C8102E] dark:text-red-300 border border-red-200/80 dark:border-red-900/60 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                    {section.badge}
                  </span>
                )}
              </div>

              {/* Links */}
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === "string" ? (
                      <span className="flex items-center gap-3 py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-[#C8102E] rounded-[16px] cursor-pointer transition-all">
                        <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
                        {link}
                      </span>
                    ) : (
                      <Link
                        to={link.path}
                        className="
                          group/item
                          relative
                          flex
                          items-center
                          justify-between
                          py-2
                          px-2.5
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
                        "
                      >
                        <div className="flex items-center gap-3">
                          {link.icon ? (
                            <div className="w-8 h-8 rounded-[12px] bg-gray-100/90 dark:bg-gray-800/80 flex items-center justify-center text-[#C8102E] dark:text-red-400 group-hover/item:bg-[#C8102E] group-hover/item:text-white transition-all duration-300 flex-shrink-0 shadow-2xs">
                              <link.icon size={16} />
                            </div>
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-[#C8102E]" />
                          )}

                          <span className="relative inline-block font-bold text-xs sm:text-sm text-gray-900 dark:text-white group-hover/item:text-[#C8102E] transition-colors py-0.5">
                            {link.title}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8102E] group-hover/item:w-full transition-all duration-300 rounded-full"></span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {link.badge && (
                            <span className="bg-[#fff1f2] dark:bg-red-950/80 text-[#C8102E] dark:text-red-300 border border-red-200/80 dark:border-red-900/60 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                              {link.badge}
                            </span>
                          )}

                          <ArrowRight
                            size={15}
                            className="text-[#C8102E] dark:text-red-400 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-1.5 transition-all duration-300"
                          />
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;