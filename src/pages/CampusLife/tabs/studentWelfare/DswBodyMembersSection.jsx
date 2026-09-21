import { motion } from "framer-motion";
import { HiOutlineUserCircle, HiOutlineEnvelope } from "react-icons/hi2";

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

    <div className="
      flex items-start gap-3 mt-6
      bg-red-50 dark:bg-red-900/20
      border border-red-100 dark:border-red-900
      rounded-2xl p-6
    ">
      <HiOutlineUserCircle className="text-red-600 w-6 h-6 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Darshan Ahire
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Director Students' Welfare,
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Sandip University Nashik
        </p>
        <a
          href="mailto:dirsw@sandipuniversity.edu.in"
          className="
            inline-flex items-center gap-1.5
            text-sm font-semibold
            text-red-600 dark:text-red-400
            hover:text-red-700 dark:hover:text-red-300
            transition-colors
          "
        >
          <HiOutlineEnvelope className="w-4 h-4" />
          Email: dirsw@sandipuniversity.edu.in
        </a>
      </div>
    </div>

  </div>
);

export default DswBodyMembersSection;
