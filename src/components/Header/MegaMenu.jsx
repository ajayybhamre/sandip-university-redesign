import { Link } from "react-router-dom";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* Internal route (path) or plain URL (href: PDF, tel:, external) */
function MenuLink({ link, children, ...props }) {
  if (link.href) {
    return (
      <a
        href={link.href}
        {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={link.path} {...props}>
      {children}
    </Link>
  );
}

function MegaMenu({ item, sections }) {
  const isAdmissions = item?.customType === "admissions";
  const isAbout = item?.customType === "about";
  const isIQAC = item?.customType === "iqac";

  return (
    <>
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-full
          pt-2.5
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          group-focus-within:opacity-100
          group-focus-within:visible
          focus-within:opacity-100
          focus-within:visible
          transition-all
          duration-200
          ease-out
          z-50
        "
      >
        <div
          className="
            bg-white
            dark:bg-[#111111]
            shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)]
            dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)]
            rounded-xl
            p-5
            border
            border-gray-100
            dark:border-gray-800
            w-max
            max-w-[95vw]
          "
        >
          {/* Header section (Non-About menus) */}
          {item?.header && !isAbout && (
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 dark:border-gray-800 gap-8">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50/90 dark:bg-red-950/40 border border-red-100/80 dark:border-red-900/40 flex items-center justify-center text-[#C8102E] dark:text-red-400 flex-shrink-0 shadow-2xs">
                  <GraduationCap
                    size={22}
                    className="text-[#C8102E] dark:text-red-400"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-black text-[#C8102E] dark:text-red-400 tracking-tight leading-none font-sans uppercase">
                    {item.header.title}
                  </h2>

                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                    {item.header.subtitle}
                  </p>
                </div>
              </div>

              {item.header.badgeText && (
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fff1f2] dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 border border-red-200/80 dark:border-red-900/50 text-xs font-extrabold whitespace-nowrap shadow-2xs">
                  <Sparkles
                    size={13}
                    className="text-[#C8102E] dark:text-red-400 animate-pulse"
                  />
                  <span>{item.header.badgeText}</span>
                </div>
              )}
            </div>
          )}

          {/* Custom About Us Mega Menu */}
          {isAbout ? (
            <div className="w-[660px] max-w-[90vw]">
              {/* Top Primary 3 Columns */}
              <div className="grid grid-cols-3 gap-6 pb-4 border-b border-gray-100 dark:border-gray-800/80">
                {item.primarySections?.map((section, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center gap-1.5 pb-1.5 mb-2 border-b border-[#C8102E]/20 dark:border-[#C8102E]/40 h-7">
                      <span className="text-[10px] font-mono font-bold text-[#C8102E] dark:text-red-400">
                        {section.moduleNumber}
                      </span>

                      <h3 className="font-extrabold text-[#C8102E] dark:text-red-400 uppercase text-xs tracking-wider font-sans truncate">
                        {section.heading}
                      </h3>
                    </div>

                    <ul className="space-y-0.5">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            to={link.path}
                            className="
                              group/item
                              flex items-center justify-between
                              py-1 px-1.5
                              rounded-md
                              text-xs font-semibold
                              text-gray-700 dark:text-gray-300
                              hover:text-[#C8102E] dark:hover:text-red-400
                              hover:bg-red-50/50 dark:hover:bg-red-950/25
                              transition-all duration-150
                              focus-visible:outline-none
                              focus-visible:ring-1
                              focus-visible:ring-[#C8102E]
                            "
                          >
                            <span className="truncate group-hover/item:translate-x-0.5 transition-transform duration-150">
                              {link.title}
                            </span>

                            <ChevronRight
                              size={12}
                              className="text-[#C8102E] dark:text-red-400 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-150 flex-shrink-0"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Secondary Compact Row */}
              <div className="grid grid-cols-2 gap-6 pt-3.5">
                {item.secondarySections?.map((section, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 h-6">
                      <span className="text-[10px] font-mono font-bold text-[#C8102E] dark:text-red-400">
                        {section.moduleNumber}
                      </span>

                      <h4 className="font-extrabold text-[#C8102E] dark:text-red-400 text-[11px] uppercase tracking-wider font-sans">
                        {section.heading}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-4">
                      {section.links.map((link, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-2"
                        >
                          <Link
                            to={link.path}
                            className="
                              text-xs font-medium
                              text-gray-600 dark:text-gray-300
                              hover:text-[#C8102E] dark:hover:text-red-400
                              transition-colors duration-150
                              focus-visible:outline-none
                              focus-visible:underline
                            "
                          >
                            {link.title}
                          </Link>

                          {i < section.links.length - 1 && (
                            <span className="text-gray-300 dark:text-gray-700 text-[10px] select-none">
                              •
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isIQAC ? (
            <div className="w-[560px] max-w-[90vw] grid grid-cols-2 gap-x-6 gap-y-1 p-1">
              {sections.map((section, colIdx) => (
                <div
                  key={colIdx}
                  className="flex flex-col space-y-1"
                >
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className="
                        group/item
                        flex items-center justify-between
                        py-2.5 px-3 rounded-lg
                        text-xs sm:text-sm font-semibold
                        text-gray-700 dark:text-gray-200
                        hover:text-[#C8102E] dark:hover:text-red-400
                        hover:bg-red-50/70 dark:hover:bg-red-950/40
                        transition-all duration-200
                        focus-visible:outline-none
                        focus-visible:ring-1
                        focus-visible:ring-[#C8102E]
                      "
                    >
                      <span className="truncate group-hover/item:translate-x-0.5 transition-transform duration-200">
                        {link.title}
                      </span>

                      <ChevronRight
                        size={14}
                        className="text-[#C8102E] dark:text-red-400 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-200 flex-shrink-0 ml-1"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            /* Standard Section Grid (Other Mega Menus) */
            <div
              className={`grid gap-6 xl:gap-8 ${
                isAdmissions
                  ? "min-w-[760px] max-w-[880px] grid-cols-2"
                  : ""
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
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#C8102E]/20 dark:border-[#C8102E]/40">
                    <div className="flex flex-col">
                      {section.moduleNumber && (
                        <span className="text-[10px] font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-widest block mb-0.5 font-mono">
                          {section.moduleNumber}
                        </span>
                      )}

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
                    </div>

                    {section.badge && (
                      <span className="bg-[#fff1f2] dark:bg-red-950/80 text-[#C8102E] dark:text-red-300 border border-red-200/80 dark:border-red-900/60 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                        {section.badge}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        {typeof link === "string" ? (
                          <span className="flex items-center gap-3 py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-[#C8102E] rounded-[16px] cursor-pointer transition-all">
                            <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                            {link}
                          </span>
                        ) : (
                          <MenuLink
                            link={link}
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

                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8102E] group-hover/item:w-full transition-all duration-300 rounded-full" />
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
                          </MenuLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MegaMenu;