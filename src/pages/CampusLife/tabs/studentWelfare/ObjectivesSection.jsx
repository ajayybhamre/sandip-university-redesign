import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi2";

import { councilObjectives } from "./data/lists";

const ObjectivesSection = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
        Objectives of Student Council
      </h4>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {
        councilObjectives.map((objective, index) => (

          <motion.div
            key={objective}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="
              flex items-start gap-3
              bg-gray-50 dark:bg-slate-900
              border border-gray-200 dark:border-slate-700
              rounded-2xl p-5
            "
          >
            <HiOutlineCheckCircle className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-6">
              {objective}
            </p>
          </motion.div>

        ))
      }

    </div>

  </div>
);

export default ObjectivesSection;
