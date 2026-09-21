import { motion } from "framer-motion";

import committees from "./data/committeesData";

const CommitteesTabs = ({ activeId, setActiveId }) => (
  <div className="
    flex
    flex-wrap
    gap-2
    mb-10
  ">
    {
      committees.map((committee) => (
        <motion.button
          key={committee.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveId(committee.id)}
          className={`
            px-4 py-2.5 rounded-full
            text-sm font-semibold
            transition-all
            ${
              activeId === committee.id
              ? "bg-red-600 text-white shadow-md"
              : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
            }
          `}
        >
          {committee.title}
        </motion.button>
      ))
    }
  </div>
);

export default CommitteesTabs;
