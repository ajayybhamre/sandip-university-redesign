import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

import timetableSessions from "../data/timetables";

const TimetablesTab = () => (
  <div className="space-y-14">

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Timetables
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        End Semester Examination timetables, school-wise. Select your school to
        open the timetable PDF.
      </p>
    </div>

    {timetableSessions.map((session) => (
      <div key={session.id}>

        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
          {session.label}
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {session.items.map((item, index) => (
            <motion.a
              key={item.file}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
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
                {item.name}
              </span>
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                PDF · {item.pages} pages · {item.size}
                {item.note ? ` · ${item.note}` : ""}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    ))}

  </div>
);

export default TimetablesTab;
