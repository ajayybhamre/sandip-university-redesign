import { motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineDocumentArrowDown } from "react-icons/hi2";

import cicEquipment from "./infrastructure/data/cicEquipment";

const cicHighlights = [
  "Research Labs equipped with modern equipment and power connections",
  "Optimal Space in the campus dedicated exclusively to research",
  "Collaborative atmosphere in PHD, Masters and Undergraduate Research",
];

const CicTab = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Central Instrumentation Center (CIC)
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
        University Centre for Research and development has researchers
        working in various thrust areas using sophisticated research
        facilities located inside the campus.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      {
        cicHighlights.map((item) => (
          <div key={item} className="flex items-start gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5">
            <HiOutlineCheckCircle className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700 dark:text-gray-300 leading-6">{item}</span>
          </div>
        ))
      }
    </div>

    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-5">
      Equipment
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {
        cicEquipment.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: (index % 12) * 0.03 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-4"
          >
            <div className="w-full h-56 flex items-center justify-center bg-white dark:bg-slate-950 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-5">{item.name}</span>
          </motion.div>
        ))
      }
    </div>

    <motion.a
      href="/research/cic/central-instrumentation-center-brochure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        flex items-center gap-4
        bg-gray-50 dark:bg-slate-900
        border border-gray-200 dark:border-slate-700
        hover:border-red-300 dark:hover:border-red-800
        rounded-2xl p-6
        transition-colors
      "
    >
      <HiOutlineDocumentArrowDown className="text-red-600 w-8 h-8 shrink-0" />
      <div>
        <p className="text-sm font-bold text-gray-900 dark:text-white">
          CIC Equipment Brochure
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Detailed specifications and working principles of every instrument — view PDF
        </p>
      </div>
    </motion.a>

  </div>
);

export default CicTab;
