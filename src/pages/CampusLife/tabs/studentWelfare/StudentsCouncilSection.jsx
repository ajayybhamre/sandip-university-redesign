import { motion } from "framer-motion";
import { HiOutlineEnvelope } from "react-icons/hi2";

import ResponsiveTable from "../../shared/ResponsiveTable";
import { studentCouncilColumns, studentCouncilMembers } from "./data/tables";

const StudentsCouncilSection = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
        Students Council Information
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Current roster
      </p>
    </motion.div>

    <ResponsiveTable columns={studentCouncilColumns} rows={studentCouncilMembers} />

    <div className="
      flex items-center gap-3 mt-6
      bg-red-50 dark:bg-red-900/20
      border border-red-100 dark:border-red-900
      rounded-2xl p-6
    ">
      <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
      <a
        href="mailto:student.council@sandipuniversity.edu.in"
        className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors"
      >
        student.council@sandipuniversity.edu.in
      </a>
    </div>

  </div>
);

export default StudentsCouncilSection;
