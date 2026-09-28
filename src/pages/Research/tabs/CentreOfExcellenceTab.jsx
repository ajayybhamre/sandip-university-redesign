import { motion } from "framer-motion";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import centreOfExcellencePartners from "./infrastructure/data/centreOfExcellence";

const CentreOfExcellenceTab = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
        Centre of Excellence — Industry Partners
      </h3>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        centreOfExcellencePartners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: (index % 12) * 0.03 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5"
          >
            {
              partner.image ? (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-12 h-12 object-contain rounded-lg bg-white shrink-0"
                />
              ) : (
                <HiOutlineBuildingOffice2 className="text-red-600 w-5 h-5 shrink-0" />
              )
            }
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{partner.name}</span>
          </motion.div>
        ))
      }
    </div>

  </div>
);

export default CentreOfExcellenceTab;
