import { useState, useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import {
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

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

    ${
      scrolled
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
  className={`transition-all duration-500 w-auto ${
    scrolled
      ? "h-8 sm:h-9 md:h-10"
      : "h-10 sm:h-12 md:h-14"
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
${scrolled ? "gap-6" : "gap-8"}
`}
>

            {menuData.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
              >
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-medium transition ${
                        isActive
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-800 dark:text-white hover:text-red-600"
                      }`
                    }
                  >
                    {item.title}

                    {item.mega && (
                      <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </NavLink>
                ) : (
                  <div className="flex items-center gap-1 font-medium text-gray-800 dark:text-white transition hover:text-red-600">
                    {item.title}

                    {item.mega && (
                      <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </div>
                )}
                {item.mega && (
                  <MegaMenu sections={item.sections} />
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
?"px-5 py-2 text-sm"
:"px-6 py-3"
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
  className={`min-[1320px]:hidden bg-white dark:bg-black shadow-md transition-all duration-300 overflow-hidden ${
    isOpen ? "max-h-[calc(100vh-80px)] overflow-y-auto" : "max-h-0"
  }`}

>
        <ul className="flex flex-col">

          {menuData.map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-200 dark:border-gray-700"
            >
             <div className="flex items-center justify-between px-6 py-4">

  {item.path ? (
    <NavLink
      to={item.path}
      className="font-medium text-gray-800 dark:text-white hover:text-red-600"
      onClick={() => setIsOpen(false)}
    >
      {item.title}
    </NavLink>
  ) : (
    <span className="font-medium text-gray-800 dark:text-white">
      {item.title}
    </span>
  )}

  {item.mega && (
    <button onClick={() => toggleDropdown(index)}>
      <FaChevronDown
        className={`transition-transform duration-300 ${
          activeMenu === index ? "rotate-180" : ""
        }`}
      />
    </button>
  )}

</div>

              {/* Mobile Dropdown */}

       {item.mega && activeMenu === index && (
  <div className="bg-gray-100 dark:bg-gray-800 p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {item.sections.map((section, i) => (
        <div
          key={i}
          className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm"
        >
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            {section.heading === "Schools" ? (
              <Link to="/schools" className="text-gray-900 dark:text-white hover:text-red-600 transition-colors">
                {section.heading}
              </Link>
            ) : (
              section.heading
            )}
          </h4>
<ul className="space-y-2">
  {section.links.map((link, j) => (
    <li key={j}>
      {typeof link === "string" ? (
        <span className="text-gray-600 dark:text-gray-300 hover:text-red-600 cursor-pointer">
          {link}
        </span>
      ) : (
        <NavLink
          to={link.path}
          onClick={() => setIsOpen(false)}
          className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
        >
          {link.title}
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