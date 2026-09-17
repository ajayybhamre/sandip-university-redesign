import { motion } from "framer-motion";

import ResponsiveTable from "../../shared/ResponsiveTable";
import { dswBodyColumns, dswBodyMembers } from "./data/tables";

const DswBodyMembersSection = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
        DSW Body Members
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        DSW Coordinator: Mr. Darshan Rajendra Ahire
      </p>
    </motion.div>

    <ResponsiveTable columns={dswBodyColumns} rows={dswBodyMembers} />

  </div>
);

export default DswBodyMembersSection;
