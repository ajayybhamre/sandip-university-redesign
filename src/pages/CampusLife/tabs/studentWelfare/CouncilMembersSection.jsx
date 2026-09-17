import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

import { councilMemberYears } from "./data/lists";

const CouncilMembersSection = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
        Student Council Members
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Rosters by academic year — downloadable PDFs.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

      {
        councilMemberYears.map((year, index) => (

          <motion.a
            key={year}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="
              flex flex-col items-center gap-2 text-center
              bg-gray-50 dark:bg-slate-900
              border border-gray-200 dark:border-slate-700
              rounded-2xl p-5
              hover:border-red-300
            "
          >
            <HiOutlineDocumentArrowDown className="text-red-600 w-6 h-6" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              {year}
            </span>
          </motion.a>

        ))
      }

    </div>

  </div>
);

export default CouncilMembersSection;
