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
import whiteLogo from "../../assets/images/SU-NAAC-white.png";
import { useTheme } from "../../context/ThemeContext";

/* Internal route (path) or plain URL (href: PDF, tel:, external) */
function MobileSectionLink({ link, children, ...props }) {
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
    <NavLink to={link.path} {...props}>
      {children}
    </NavLink>
  );
}

function Navbar({ overlay = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = (index) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  };

  // Transparent only when overlay is enabled
  // and the page is at the top.
  const isTransparent = overlay && !scrolled;

  return (
    <header
      className={`
        max-w-[1500px]
        mx-auto
        relative
        z-50
        transition-all
        duration-500
        ${scrolled ? "pt-3" : ""}
      `}
    >
      {/* Main Navbar */}
     <div
  className={`
    transition-all duration-500
    flex items-center justify-around

    ${
      scrolled
        ? `
          max-w-[1500px]
          mx-auto
          h-16
          px-8
          rounded-full
          bg-[#fbfaf8]
          dark:bg-white
          shadow-lg
        `
        : isTransparent
          ? `
            max-w-[1600px]
            mx-auto
            h-20
            px-6
            bg-transparent
          `
          : `
            max-w-[1600px]
            mx-auto
            h-20
            px-6
            bg-[#fbfaf8]
            dark:bg-white
          `
    }
  `}
>
        {/* Logo */}
        <div className="relative flex-shrink-0">
          <Link to="/" aria-label="Go to Home">
            {/* Normal Logo */}
            <img
              src={logo}
              alt={!isTransparent ? "Sandip University" : ""}
              aria-hidden={isTransparent}
              className={`
                w-auto
                transition-opacity
                duration-500
                ease-in-out
                ${isTransparent ? "opacity-0" : "opacity-100"}

                ${
                  scrolled
                    ? "h-8 sm:h-9 md:h-10"
                    : "h-8 sm:h-9 md:h-10"
                }
              `}
            />

            {/* White Logo for Transparent Navbar */}
            <img
              src={whiteLogo}
              alt={isTransparent ? "Sandip University" : ""}
              aria-hidden={!isTransparent}
              className={`
                absolute
                inset-0
                w-auto
                transition-opacity
                duration-500
                ease-in-out
                ${isTransparent ? "opacity-100" : "opacity-0"}

                ${
                  scrolled
                    ? "h-8 sm:h-9 md:h-10"
                    : "h-8 sm:h-9 md:h-10"
                }
              `}
            />
          </Link>
        </div>

        {/* =========================
            DESKTOP MENU
        ========================== */}
        <nav className="hidden min-[1320px]:block">
          <ul
            className="
              flex
              items-center
              gap-6
              transition-all
              duration-500
            "
          >
            {menuData.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
              >
                {/* Menu Item */}
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                        flex
                        items-center
                        gap-1
                        font-medium
                        transition

                        ${
                          isActive
                            ? isTransparent
                              ? "text-white"
                              : "text-red-600 dark:text-red-400"
                            : isTransparent
                              ? "text-white hover:text-red-300"
                              : "text-gray-800 dark:text-white hover:text-red-600"
                        }
                      `
                    }
                  >
                    {item.title}

                    {item.mega && (
                      <FaChevronDown
                        className="
                          text-xs
                          transition-transform
                          duration-300
                          group-hover:rotate-180
                        "
                      />
                    )}
                  </NavLink>
                ) : (
                  <div
                    className={`
                      flex
                      items-center
                      gap-1
                      font-medium
                      transition

                      ${
                        isTransparent
                          ? "text-white hover:text-red-300"
                          : "text-gray-800 dark:text-white hover:text-red-600"
                      }
                    `}
                  >
                    {item.title}

                    {item.mega && (
                      <FaChevronDown
                        className="
                          text-xs
                          transition-transform
                          duration-300
                          group-hover:rotate-180
                        "
                      />
                    )}
                  </div>
                )}

                {/* Mega Menu */}
                {item.mega && (
                  <MegaMenu
                    item={item}
                    sections={item.sections}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* =========================
            DESKTOP RIGHT SIDE
        ========================== */}
        <div
          className="
            hidden
            min-[1320px]:flex
            items-center
            gap-5
          "
        >
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className={`
              transition

              ${
                isTransparent
                  ? "text-white hover:text-red-300"
                  : "text-gray-700 dark:text-white hover:text-red-600"
              }
            `}
          >
            <FaSearch size={18} />
          </button>

          {/* Apply Now */}
          <button
            type="button"
            className={`
              bg-red-600
              text-white
              rounded-full
              transition-all
              duration-500
              hover:bg-black

              ${
                scrolled
                  ? "px-5 py-2 text-sm"
                  : "px-6 py-3"
              }
            `}
          >
            Apply Now
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            title={
              isDark
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            className={`
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              transition
              shadow-sm

              ${
                isTransparent
                  ? "bg-white/15 backdrop-blur-sm text-white hover:bg-white/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            `}
          >
            {isDark ? (
              <FaSun
                size={18}
                className="text-yellow-400"
              />
            ) : (
              <FaMoon
                size={18}
                className={
                  isTransparent
                    ? "text-white"
                    : "text-gray-700"
                }
              />
            )}
          </button>
        </div>

        {/* =========================
            MOBILE TOGGLE
        ========================== */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className={`
            min-[1320px]:hidden
            text-2xl

            ${
              isTransparent
                ? "text-white"
                : "text-gray-800 dark:text-white"
            }
          `}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`
          min-[1320px]:hidden
          bg-white
          dark:bg-black
          shadow-md
          transition-all
          duration-300
          overflow-hidden

          ${
            isOpen
              ? "max-h-[calc(100vh-80px)] overflow-y-auto"
              : "max-h-0"
          }
        `}
      >
        <ul className="flex flex-col">
          {menuData.map((item, index) => (
            <li
              key={index}
              className="
                border-b
                border-gray-200
                dark:border-gray-700
              "
            >
              {/* Mobile Menu Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-6
                  py-4
                "
              >
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className="
                      font-medium
                      text-gray-800
                      dark:text-white
                      hover:text-red-600
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <span
                    className="
                      font-medium
                      text-gray-800
                      dark:text-white
                    "
                  >
                    {item.title}
                  </span>
                )}

                {/* Dropdown Button */}
                {item.mega && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.title} menu`}
                    onClick={() =>
                      toggleDropdown(index)
                    }
                    className="p-1"
                  >
                    <FaChevronDown
                      className={`
                        transition-transform
                        duration-300
                        text-gray-700
                        dark:text-gray-300

                        ${
                          activeMenu === index
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>
                )}
              </div>

              {/* =========================
                  MOBILE DROPDOWN
              ========================== */}
              {item.mega &&
                activeMenu === index && (
                  <div
                    className="
                      bg-gray-100
                      dark:bg-gray-800
                      p-4
                    "
                  >
                    {/* IQAC Menu */}
                    {item.customType === "iqac" ? (
                      <div
                        className="
                          bg-white
                          dark:bg-black
                          rounded-lg
                          border
                          border-gray-200
                          dark:border-gray-700
                          p-4
                          shadow-sm
                        "
                      >
                        <div
                          className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-2
                          "
                        >
                          {item.sections
                            .flatMap(
                              (section) =>
                                section.links
                            )
                            .map((link, j) => (
                              <NavLink
                                key={j}
                                to={link.path}
                                onClick={() =>
                                  setIsOpen(false)
                                }
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  p-2
                                  text-gray-700
                                  dark:text-gray-300
                                  hover:text-[#bd1e2d]
                                  dark:hover:text-red-400
                                  transition-colors
                                  rounded-lg
                                  hover:bg-red-50
                                  dark:hover:bg-red-950/20
                                  text-xs
                                  sm:text-sm
                                  font-medium
                                "
                              >
                                <span>
                                  {link.title}
                                </span>
                              </NavLink>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Header */}
                        {item.header && (
                          <div
                            className="
                              bg-white
                              dark:bg-black
                              rounded-lg
                              border
                              border-gray-200
                              dark:border-gray-700
                              p-4
                              mb-4
                              shadow-sm
                              flex
                              flex-col
                              sm:flex-row
                              sm:items-center
                              justify-between
                              gap-3
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                gap-3
                              "
                            >
                              <div
                                className="
                                  w-10
                                  h-10
                                  rounded-full
                                  bg-red-50
                                  dark:bg-red-950/40
                                  flex
                                  items-center
                                  justify-center
                                  text-[#bd1e2d]
                                  flex-shrink-0
                                "
                              >
                                <GraduationCap
                                  size={20}
                                  className="text-[#bd1e2d]"
                                />
                              </div>

                              <div>
                                <h4
                                  className="
                                    font-bold
                                    text-[#bd1e2d]
                                    dark:text-red-400
                                    text-lg
                                  "
                                >
                                  {item.header.title}
                                </h4>

                                <p
                                  className="
                                    text-xs
                                    text-gray-500
                                    dark:text-gray-400
                                  "
                                >
                                  {item.header.subtitle}
                                </p>
                              </div>
                            </div>

                            {item.header
                              .badgeText && (
                              <span
                                className="
                                  self-start
                                  sm:self-auto
                                  inline-flex
                                  items-center
                                  gap-1.5
                                  px-3
                                  py-1
                                  rounded-full
                                  bg-[#fff1f2]
                                  dark:bg-red-950/50
                                  text-[#bd1e2d]
                                  dark:text-red-400
                                  border
                                  border-red-200
                                  dark:border-red-800
                                  text-xs
                                  font-semibold
                                "
                              >
                                <Sparkles size={12} />

                                {
                                  item.header
                                    .badgeText
                                }
                              </span>
                            )}
                          </div>
                        )}

                        {/* Sections */}
                        <div
                          className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-6
                          "
                        >
                          {item.sections.map(
                            (section, i) => (
                              <div
                                key={i}
                                className="
                                  bg-white
                                  dark:bg-black
                                  rounded-lg
                                  border
                                  border-gray-200
                                  dark:border-gray-700
                                  p-4
                                  shadow-sm
                                "
                              >
                                {/* Section Heading */}
                                {section.heading && (
                                  <div
                                    className="
                                      flex
                                      items-center
                                      justify-between
                                      border-b
                                      border-red-200
                                      dark:border-red-900
                                      pb-2
                                      mb-3
                                    "
                                  >
                                    <div
                                      className="
                                        flex
                                        items-center
                                        gap-2
                                      "
                                    >
                                      {section.iconType ===
                                        "cap" && (
                                        <span>
                                          🎓
                                        </span>
                                      )}

                                      {section.iconType ===
                                        "globe" && (
                                        <span>
                                          🌐
                                        </span>
                                      )}

                                      <div
                                        className="
                                          flex
                                          flex-col
                                        "
                                      >
                                        {section.moduleNumber && (
                                          <span
                                            className="
                                              text-[10px]
                                              font-bold
                                              text-[#bd1e2d]
                                              dark:text-red-400
                                              uppercase
                                              tracking-widest
                                              block
                                              font-mono
                                            "
                                          >
                                            MODULE{" "}
                                            {
                                              section.moduleNumber
                                            }
                                          </span>
                                        )}

                                        <h4
                                          className="
                                            font-extrabold
                                            text-[#bd1e2d]
                                            dark:text-red-400
                                            text-xs
                                            uppercase
                                            tracking-wide
                                          "
                                        >
                                          {
                                            section.heading
                                          }
                                        </h4>
                                      </div>
                                    </div>

                                    {section.badge && (
                                      <span
                                        className="
                                          bg-[#ffe4e6]
                                          dark:bg-red-950
                                          text-[#e11d48]
                                          dark:text-red-400
                                          text-[10px]
                                          font-extrabold
                                          px-2
                                          py-0.5
                                          rounded-full
                                          uppercase
                                        "
                                      >
                                        {
                                          section.badge
                                        }
                                      </span>
                                    )}
                                  </div>
                                )}

                                {/* Links */}
                                <ul className="space-y-2">
                                  {section.links.map(
                                    (link, j) => (
                                      <li key={j}>
                                        {typeof link ===
                                        "string" ? (
                                          <span
                                            className="
                                              text-gray-600
                                              dark:text-gray-300
                                              hover:text-[#bd1e2d]
                                              cursor-pointer
                                            "
                                          >
                                            {link}
                                          </span>
                                        ) : (
                                          <MobileSectionLink
                                            link={link}
                                            onClick={() =>
                                              setIsOpen(
                                                false
                                              )
                                            }
                                            className="
                                              flex
                                              items-center
                                              justify-between
                                              p-1.5
                                              text-gray-700
                                              dark:text-gray-300
                                              hover:text-[#bd1e2d]
                                              transition-colors
                                              rounded-lg
                                              hover:bg-red-50
                                              dark:hover:bg-red-950/20
                                            "
                                          >
                                            <div
                                              className="
                                                flex
                                                items-center
                                                gap-3
                                              "
                                            >
                                              {link.icon && (
                                                <div
                                                  className="
                                                    w-7
                                                    h-7
                                                    rounded-md
                                                    bg-gray-100
                                                    dark:bg-gray-800
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-700
                                                    dark:text-gray-300
                                                  "
                                                >
                                                  <link.icon
                                                    size={
                                                      15
                                                    }
                                                  />
                                                </div>
                                              )}

                                              <span
                                                className="
                                                  text-xs
                                                  sm:text-sm
                                                  font-semibold
                                                "
                                              >
                                                {
                                                  link.title
                                                }
                                              </span>
                                            </div>

                                            {link.badge && (
                                              <span
                                                className="
                                                  bg-[#ffe4e6]
                                                  dark:bg-red-950
                                                  text-[#e11d48]
                                                  dark:text-red-400
                                                  text-[10px]
                                                  font-bold
                                                  px-2
                                                  py-0.5
                                                  rounded-full
                                                  uppercase
                                                "
                                              >
                                                {
                                                  link.badge
                                                }
                                              </span>
                                            )}
                                          </MobileSectionLink>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}
            </li>
          ))}

          {/* Mobile Bottom Actions */}
          <li>
            <div
              className="
                p-6
                flex
                items-center
                justify-between
                border-t
                border-gray-200
                dark:border-gray-800
              "
            >
              <div className="flex items-center gap-3">
                {/* Search */}
                <button
                  type="button"
                  aria-label="Search"
                  className="
                    text-gray-700
                    dark:text-white
                    p-2
                    rounded-full
                    hover:bg-gray-100
                    dark:hover:bg-gray-800
                  "
                >
                  <FaSearch size={18} />
                </button>

                {/* Theme */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-full
                    bg-gray-100
                    dark:bg-gray-800
                    text-gray-800
                    dark:text-white
                    text-xs
                    font-semibold
                    hover:bg-gray-200
                    dark:hover:bg-gray-700
                    transition
                  "
                >
                  {isDark ? (
                    <>
                      <FaSun
                        size={16}
                        className="text-yellow-400"
                      />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon
                        size={16}
                        className="text-gray-700"
                      />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Apply Now */}
              <button
                type="button"
                className="
                  bg-red-600
                  text-white
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  hover:bg-red-700
                  transition
                "
              >
                Apply Now
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;