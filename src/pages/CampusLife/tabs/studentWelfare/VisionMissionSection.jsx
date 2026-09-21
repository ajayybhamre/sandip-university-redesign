import { motion } from "framer-motion";

import { missionStatements } from "./data/lists";

const VisionMissionSection = () => (
  <div className="space-y-10">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
        Vision
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        To foster a vibrant, inclusive, and empowering environment that
        nurtures ethical, responsible, and globally competent student
        leaders.
      </p>
    </motion.div>

    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
        Mission
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {
          missionStatements.map((mission, index) => (

            <motion.div
              key={mission.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-2xl p-6
              "
            >
              <span className="
                inline-block px-3 py-1 mb-4
                rounded-full bg-red-100 dark:bg-red-900/30
                text-red-600 text-xs font-bold tracking-wide
              ">
                {mission.code}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
                {mission.text}
              </p>
            </motion.div>

          ))
        }

      </div>

    </div>

  </div>
);

export default VisionMissionSection;
