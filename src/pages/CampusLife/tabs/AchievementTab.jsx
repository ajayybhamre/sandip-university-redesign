import { motion } from "framer-motion";
import { HiOutlineTrophy } from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import achievements, { achievementColumns, achievementSubTabs } from "./achievement/data/achievementsData";

const AchievementTab = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <span className="text-red-600 font-semibold uppercase tracking-[3px] text-sm">
        A Legacy of Excellence
      </span>
      <h3 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Awards & Achievements
      </h3>
    </motion.div>

    <ResponsiveTable columns={achievementColumns} rows={achievements} />

    <div className="
      mt-10 p-6 rounded-2xl
      bg-gray-50 dark:bg-slate-900
      border border-dashed border-gray-300 dark:border-slate-700
    ">
      <div className="flex items-center gap-3 mb-4">
        <HiOutlineTrophy className="text-red-600 w-5 h-5 shrink-0" />
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          More detail, organised by category, is coming soon:
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {
          achievementSubTabs.map((tab) => (
            <span
              key={tab}
              className="px-4 py-2 rounded-full bg-white dark:bg-black text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700"
            >
              {tab}
            </span>
          ))
        }
      </div>
    </div>

  </div>
);

export default AchievementTab;
