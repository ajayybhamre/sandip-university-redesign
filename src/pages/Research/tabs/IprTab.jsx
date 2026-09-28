import { motion } from "framer-motion";

import ResponsiveTable from "../shared/ResponsiveTable";
import patents, { patentColumns } from "./ipr/data/patents";

const IprTab = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        IPR / Patent
      </h3>
      <ResponsiveTable columns={patentColumns} rows={patents} />
    </motion.div>

  </div>
);

export default IprTab;
