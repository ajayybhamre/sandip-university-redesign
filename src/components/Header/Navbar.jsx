import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { GraduationCap, Sparkles } from "lucide-react";

import menuData from "./menuData";
import MegaMenu from "./MegaMenu";
import logo from "../../assets/images/logo-dark.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [darkMode, setDarkMode] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };


  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }

    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
     max-w-[1500px]
        mx-auto
    sticky top-0 z-50
    transition-all duration-500
    ${scrolled ? "pt-3" : ""}
  `}
    >
      <div
        className={`
    transition-all duration-500
    flex items-center justify-around

    ${scrolled
            ? `
        max-w-[1500px]
        mx-auto
        h-16
        px-8
        rounded-full
        bg-white
        dark:bg-black/90
        backdrop-blur-xl
        shadow-2xl
        
      `
            : `
        max-w-[1600px]
        h-20
        px-6
        bg-white
        dark:bg-black
      `
          }
  `}
      >

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Go to Home">
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-500 w-auto ${scrolled
                  ? "h-8 sm:h-9 md:h-10"
                  : "h-10 sm:h-10 md:h-10"
                }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden min-[1320px]:block">
          <ul
            className={`
flex items-center
transition-all duration-500
${scrolled ? "gap-6" : "gap-6"}
`}
          >

            {menuData.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-medium transition ${isActive
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-800 dark:text-white hover:text-red-600"
                    }`
                  }
                >
                  {item.title}

                  {item.mega && (
                    <FaChevronDown
                      className="text-xs transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </NavLink>
                {item.mega && (
                  <MegaMenu item={item} sections={item.sections} />
                )}
              </li>
            ))}

          </ul>
        </nav>

        {/* Desktop Right */}
        <div className="hidden min-[1320px]:flex items-center gap-5">

          <button className="text-gray-700 dark:text-white hover:text-red-600 transition">
            <FaSearch size={18} />
          </button>

          <button
            className={`
bg-red-600
text-white
rounded-full
transition-all
duration-500
hover:bg-black

${scrolled
                ? "px-5 py-2 text-sm"
                : "px-6 py-3"
              }
`}
          >
            Apply Now
          </button>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="min-[1320px]:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`min-[1320px]:hidden bg-white dark:bg-black shadow-md transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[calc(100vh-80px)] overflow-y-auto" : "max-h-0"
          }`}

      >
        <ul className="flex flex-col">

          {menuData.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between px-6 py-4">

                <NavLink
                  to={item.path}
                  className="font-medium text-gray-800 dark:text-white hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>

                {item.mega && (
                  <button onClick={() => toggleDropdown(index)}>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${activeMenu === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                )}

              </div>

              {/* Mobile Dropdown */}

              {item.mega && activeMenu === index && (
                <div className="bg-gray-100 dark:bg-gray-800 p-4">
                  {item.header && (
                    <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-[#bd1e2d] flex-shrink-0">
                          <GraduationCap size={20} className="text-[#bd1e2d]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#bd1e2d] dark:text-red-400 text-lg">
                            {item.header.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.header.subtitle}
                          </p>
                        </div>
                      </div>
                      {item.header.badgeText && (
                        <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff1f2] text-[#bd1e2d] border border-red-200 text-xs font-semibold">
                          <Sparkles size={12} />
                          {item.header.badgeText}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {item.sections.map((section, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm"
                      >
                        <div className="flex items-center justify-between border-b border-red-200 dark:border-red-900 pb-2 mb-3">
                          <div className="flex items-center gap-2">
                            {section.iconType === "cap" && <span>🎓</span>}
                            {section.iconType === "globe" && <span>🌐</span>}
                            <h4 className="font-extrabold text-[#bd1e2d] dark:text-red-400 text-xs uppercase tracking-wide">
                              {section.heading}
                            </h4>
                          </div>
                          {section.badge && (
                            <span className="bg-[#ffe4e6] text-[#e11d48] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                              {section.badge}
                            </span>
                          )}
                        </div>
                        <ul className="space-y-2">
                          {section.links.map((link, j) => (
                            <li key={j}>
                              {typeof link === "string" ? (
                                <span className="text-gray-600 dark:text-gray-300 hover:text-[#bd1e2d] cursor-pointer">
                                  {link}
                                </span>
                              ) : (
                                <NavLink
                                  to={link.path}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center justify-between p-1.5 text-gray-700 dark:text-gray-300 hover:text-[#bd1e2d] transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
                                >
                                  <div className="flex items-center gap-3">
                                    {link.icon && (
                                      <div className="w-7 h-7 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300">
                                        <link.icon size={15} />
                                      </div>
                                    )}
                                    <span className="text-xs sm:text-sm font-semibold">
                                      {link.title}
                                    </span>
                                  </div>

                                  {link.badge && (
                                    <span className="bg-[#ffe4e6] text-[#e11d48] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                      {link.badge}
                                    </span>
                                  )}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  </div>
                </div>
              )}
            </li>
          ))}

          <div className="p-6 flex items-center justify-between">

            <button className="text-gray-700 dark:text-white">
              <FaSearch size={18} />
            </button>

            <button className="bg-[#0B2346] text-white px-5 py-3 rounded-full">
              Apply Now
            </button>

          </div>

        </ul>
      </div>
    </header>
  );
}

export default Navbar;