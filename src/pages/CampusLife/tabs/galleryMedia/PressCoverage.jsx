import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { HiOutlineNewspaper } from "react-icons/hi2";

import pressCoverage from "./data/pressCoverageData";

const PressCoverage = () => {

  const years = useMemo(() => {
    const unique = [...new Set(pressCoverage.map((item) => item.year))];
    return unique.sort((a, b) => b - a);
  }, []);

  const [activeYear, setActiveYear] = useState("all");

  const filteredClippings = useMemo(() => {
    if (activeYear === "all") return pressCoverage;
    return pressCoverage.filter((item) => item.year === activeYear);
  }, [activeYear]);

  return (
    <div>

      {/* Filter by year */}

      <div className="
        flex
        flex-wrap
        gap-2
        mb-8
      ">

        <button
          onClick={() => setActiveYear("all")}
          className={`
            whitespace-nowrap
            px-4
            py-2
            rounded-full
            text-xs
            sm:text-sm
            font-semibold
            border
            transition-all
            ${
              activeYear === "all"
              ?
              "bg-red-600 border-red-600 text-white shadow-md"
              :
              "bg-transparent border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:border-red-300 hover:text-red-600"
            }
          `}
        >
          All Years
        </button>

        {
          years.map((year) => (

            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`
                whitespace-nowrap
                px-4
                py-2
                rounded-full
                text-xs
                sm:text-sm
                font-semibold
                border
                transition-all
                ${
                  activeYear === year
                  ?
                  "bg-red-600 border-red-600 text-white shadow-md"
                  :
                  "bg-transparent border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:border-red-300 hover:text-red-600"
                }
              `}
            >
              {year}
            </button>

          ))
        }

      </div>

      {/* Clipping cards */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
      ">

        {
          filteredClippings.map((item, index) => (

            <motion.div

              key={item.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}

              viewport={{ once: true }}

              className="
                bg-gray-50
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                p-6
                flex
                flex-col
                gap-3
              "
            >

              <div className="
                w-12
                h-12
                rounded-full
                bg-red-100
                dark:bg-red-900/30
                flex
                items-center
                justify-center
              ">
                <HiOutlineNewspaper className="text-red-600 w-6 h-6" />
              </div>

              <span className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-red-600
              ">
                {item.outlet} &middot; {item.year}
              </span>

              <p className="
                text-sm
                text-gray-700
                dark:text-gray-300
                leading-6
              ">
                {item.topic}
              </p>

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default PressCoverage;
